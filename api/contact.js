import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, solution, aesthetics, description } = req.body;

  // Ensure you have SMTP credentials in your Vercel Environment Variables:
  // SMTP_HOST (e.g. smtp.gmail.com)
  // SMTP_PORT (e.g. 587)
  // SMTP_USER (e.g. your-email@gmail.com)
  // SMTP_PASS (e.g. your app password)
  // NOTIFY_EMAIL (The email where you want to receive notifications)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
    subject: `Nuevo Prospecto: ${name} - DAARK TECH SOLUTIONS`,
    html: `
      <h2>Nuevo Diagnóstico Solicitado 🚀</h2>
      <p><strong>Nombre/Empresa:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono/WhatsApp:</strong> ${phone}</p>
      <p><strong>Tipo de Solución:</strong> ${solution === 'nueva' ? 'Web desde cero' : 'Modernización web'}</p>
      <p><strong>Idea de Estética:</strong> ${aesthetics || 'No especificada'}</p>
      <p><strong>Descripción:</strong></p>
      <blockquote style="border-left: 4px solid #8A2BE2; padding-left: 10px; margin-left: 0;">
        ${description}
      </blockquote>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
