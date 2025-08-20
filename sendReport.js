// sendReport.js
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function getAllFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(await getAllFiles(filePath));
    } else {
      results.push(filePath);
    }
  }
  return results;
}

async function sendReport() {
  const reportPath = path.resolve(__dirname, 'cypress/reports/report.html');
  if (!fs.existsSync(reportPath)) {
    console.error('Report file not found at:', reportPath);
    process.exit(1);
  }

  // Transport config (SMTP)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Verify transporter
  try {
    await transporter.verify();
    console.log('SMTP connection OK');
  } catch (err) {
    console.error('SMTP connection failed:', err.message || err);
    process.exit(1);
  }

  // Read report HTML for inline body
  const reportHtml = fs.readFileSync(reportPath, 'utf-8');

  // Prepare attachments array (attach report + optional screenshots)
  const attachments = [
    { filename: 'CypressReport.html', path: reportPath }
  ];

  if (process.env.ATTACH_SCREENSHOTS === 'true') {
    const screenshotsDir = path.resolve(__dirname, 'cypress/reports/screenshots');
    const files = await getAllFiles(screenshotsDir);
    for (const f of files) {
      attachments.push({ filename: path.basename(f), path: f });
    }
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: process.env.EMAIL_SUBJECT || `Cypress Test Report - ${new Date().toISOString()}`,
    text: 'Please find the attached Cypress test report.',
    html: `<p>Hi,</p>
           <p>Please find attached the Cypress test report.</p>
           <hr/>
           <p>Inline preview (full report attached below):</p>
           ${reportHtml}`,
    attachments
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.messageId || info.accepted);
  } catch (err) {
    console.error('Failed to send email:', err);
    process.exit(1);
  }
}

sendReport().catch(err => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
