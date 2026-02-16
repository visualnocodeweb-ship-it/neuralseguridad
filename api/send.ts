import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;
const fromEmail = process.env.FROM_EMAIL; // Nuevo: El email remitente

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }
  
  if (!toEmail) {
    return res.status(500).json({ message: 'Recipient email is not configured' });
  }

  if (!fromEmail) { // Nueva validación para FROM_EMAIL
    return res.status(500).json({ message: 'Sender email is not configured' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail, // Modificado: Usa FROM_EMAIL
      to: toEmail,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <p>Has recibido un nuevo mensaje desde el formulario de contacto de tu web:</p>
        <ul>
          <li><strong>Nombre:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return res.status(500).json({ message: 'Error sending email', error });
    }

    return res.status(200).json({ message: 'Email sent successfully!', data });
  } catch (exception) {
    console.error({ exception });
    return res.status(500).json({ message: 'An unexpected error occurred.', error: exception });
  }
}
