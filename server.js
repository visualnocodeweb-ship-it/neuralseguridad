import express from 'express';
import { Resend } from 'resend';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fs from 'fs';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from 'dist'
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
} else {
    console.warn('WARNING: dist directory not found. Run "npm run build" first.');
}

// Email Configuration
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;
const fromEmail = process.env.FROM_EMAIL;

// API Route for Sending Emails
app.post('/api/send', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    if (!toEmail || !fromEmail) {
        console.error('Missing email configuration');
        return res.status(500).json({ message: 'Server email configuration error' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: fromEmail,
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
            console.error('Resend Error:', error);
            return res.status(500).json({ message: 'Error sending email', error });
        }

        return res.status(200).json({ message: 'Email sent successfully!', data });
    } catch (exception) {
        console.error({ exception });
        return res.status(500).json({ message: 'An unexpected error occurred.', error: exception });
    }
});

// Catch-all route to serve React app (using app.use to avoid path matching issues)
app.use((req, res, next) => {
    if (req.method !== 'GET') return next();

    const indexPath = path.join(__dirname, 'dist', 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('App not built (index.html missing)');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
