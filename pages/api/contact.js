import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Log the incoming request
  console.log('=== CONTACT FORM SUBMISSION ===');
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, company, subject, message } = req.body;

  // Log the parsed data
  console.log('Parsed data:', { name, email, phone, company, subject, message });

  // Validate input
  if (!name || !email || !message) {
    console.log('Validation failed - missing fields:', { name: !!name, email: !!email, message: !!message });
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create transporter using Gmail with TLS
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'webnexter2024@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message from ' + name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <p style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px; line-height: 1.6;">
                ${message}
              </p>
            </div>
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result);
    
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    console.error('Error details:', error.code, error.message);
    return res.status(500).json({ message: 'Error sending email', error: error.message, details: error.code });
  }
}
