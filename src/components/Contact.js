import React, { useState } from 'react';
import '../Contact.css'; // Import the CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });
    
    try {
      const response = await fetch('https://formspree.io/f/mayrqqze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ submitting: false, success: false, error: true });
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, error: false }));
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subheading">Have a project in mind? Let's work together!</p>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-method">
              <h3 className="contact-method-title">
                <svg width="24" height="24" viewBox="0 0 24 24" className="contact-method-icon">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </h3>
              <p className="contact-detail">mkhizes834@gmail.com</p>
            </div>
            
            <div className="contact-method">
              <h3 className="contact-method-title">
                <svg width="24" height="24" viewBox="0 0 24 24" className="contact-method-icon">
                  <path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/>
                </svg>
                Location
              </h3>
              <p className="contact-detail">Mpangeni, South Africa</p>
            </div>
            
            <div className="contact-method">
              <h3 className="contact-method-title">
                <svg width="24" height="24" viewBox="0 0 24 24" className="contact-method-icon">
                  <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2zm13.54-7.1l-1.41-1.41-3.54 3.54 1.41 1.41L20.16 3.69zM12 9l-4 4 4 4 1.41-1.41L11.83 14l1.58-1.59L12 9z"/>
                </svg>
                Phone
              </h3>
              <p className="contact-detail">+27 73 11 994 29</p>
            </div>
            
            <div>
              <h3 className="contact-method-title">
                <svg width="24" height="24" viewBox="0 0 24 24" className="contact-method-icon">
                  <path fill="currentColor" d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/>
                </svg>
                Social Media
              </h3>
              <div className="social-links">
  <a 
    href="https://www.facebook.com/profile.php?id=100036624901009" 
    className="social-icon" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  </a>
  <a 
    href="https://www.linkedin.com/in/sanele-mkhize-4490242a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
    className="social-icon" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109s.493-1.109 1.1-1.109 1.1.496 1.1 1.109-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
    </svg>
  </a>
  <a 
    href="https://www.instagram.com/saneh_magcwabe?igsh=MTFjd3pnMWN3d2x2dw==" 
    className="social-icon" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
    </svg>
  </a>
</div>
            </div>
          </div>
          
          <div className="form-container">
            {formStatus.success && (
              <div className="form-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {formStatus.error && (
              <div className="form-message error">
                There was an error sending your message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="John Doe"
                  disabled={formStatus.submitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="john@example.com"
                  disabled={formStatus.submitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Project Inquiry"
                  disabled={formStatus.submitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  disabled={formStatus.submitting}
                />
              </div>
              
              <button 
                type="submit" 
                className="form-button"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;