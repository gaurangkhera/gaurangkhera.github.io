"use client";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  subject: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, email, subject, content,
}) => (
  <div style={{ padding: '20px', backgroundColor: '#f9f9f9', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ color: '#333', borderBottom: '1px solid #ddd' }}>Message from {firstName} ({email})</h1>
    <h2 style={{ color: '#666', marginTop: '20px' }}>Subject: {subject}</h2>
    <p style={{ color: '#333', lineHeight: '1.6', marginTop: '10px' }}>{content}</p>
  </div>
);