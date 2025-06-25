'use client';
import React, { useState } from 'react';
import personalInfoData from '@/data/personalInfo';
import contactData from '@/data/contacts';
// import { Contacts as ContactType, FormData } from '@/types';
import { Contact as ContactType, FormData } from '@/types';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" style={{ color: 'white' }}>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
            <div className="contact-item">
              <span>📧</span>
              <span>{personalInfoData.email}</span>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>{personalInfoData.location}</span>
            </div>
            <div className="social-links">
              {contactData.map((social: ContactType, i: number) => (
                <a key={i} href={social.url} className="social-link">
                  <span>{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Send Message</button>
            {submitted && (
              <div className="success-message">Thank you! Your message has been sent successfully.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
