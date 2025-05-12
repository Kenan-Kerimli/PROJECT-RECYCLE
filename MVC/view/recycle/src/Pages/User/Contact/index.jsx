import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlinePhone } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header" data-aos="fade-up">
          <h1>Get in Touch</h1>
          <p>Have questions about recycling? Want to learn more about our initiatives? We're here to help!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item" data-aos="fade-right">
              <HiOutlineMail size={24} />
              <div className="info-text">
                <h3>Email Us</h3>
                <p>contact@recycleai.com</p>
                <p>support@recycleai.com</p>
              </div>
            </div>

            <div className="info-item" data-aos="fade-right" data-aos-delay="100">
              <HiOutlinePhone size={24} />
              <div className="info-text">
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon - Fri, 9am - 6pm</p>
              </div>
            </div>

            <div className="info-item" data-aos="fade-right" data-aos-delay="200">
              <HiOutlineLocationMarker size={24} />
              <div className="info-text">
                <h3>Visit Us</h3>
                <p>123 Recycling Way</p>
                <p>Eco City, EC 12345</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
