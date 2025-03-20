// components/Contact.js
import React, { useState } from 'react';

function Contact() {
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
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Add success message logic here
  };

  const sectionStyles = {
    padding: '100px 5%',
    backgroundColor: '#fff',
    '@media (max-width: 768px)': {
      padding: '60px 5%',
    }
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyles = {
    fontSize: '36px',
    marginBottom: '15px',
    fontWeight: '700',
    color: '#222',
    '@media (max-width: 768px)': {
      fontSize: '28px',
      textAlign: 'center',
    }
  };

  const subheadingStyles = {
    fontSize: '18px',
    color: '#666',
    marginBottom: '50px',
    '@media (max-width: 768px)': {
      fontSize: '16px',
      textAlign: 'center',
    }
  };

  const contactWrapperStyles = {
    display: 'flex',
    gap: '50px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    }
  };

  const contactInfoStyles = {
    flex: '1',
  };

  const contactMethodStyles = {
    marginBottom: '30px',
  };

  const contactMethodTitleStyles = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyles = {
    marginRight: '10px',
    color: '#6C63FF',
  };

  const contactDetailStyles = {
    fontSize: '16px',
    color: '#555',
    paddingLeft: '30px',
  };

  const socialLinksStyles = {
    display: 'flex',
    gap: '15px',
    marginTop: '30px',
  };

  const socialIconStyles = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#6C63FF',
      color: '#fff',
    }
  };

  const formContainerStyles = {
    flex: '1',
    backgroundColor: '#f8f9fa',
    padding: '30px',
    borderRadius: '10px',
  };

  const formGroupStyles = {
    marginBottom: '20px',
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
  };

  const inputStyles = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#333',
    transition: 'border-color 0.3s ease',
    ':focus': {
      borderColor: '#6C63FF',
      outline: 'none',
    }
  };

  const textareaStyles = {
    ...inputStyles,
    height: '150px',
    resize: 'vertical',
  };

  const buttonStyles = {
    backgroundColor: '#6C63FF',
    color: 'white',
    border: 'none',
    padding: '14px 30px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    ':hover': {
      backgroundColor: '#5a52d5',
      transform: 'translateY(-2px)',
    }
  };

  return (
    <section id="contact" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={headingStyles}>Get In Touch</h2>
        <p style={subheadingStyles}>Have a project in mind? Let's work together!</p>
        
        <div style={contactWrapperStyles}>
          <div style={contactInfoStyles}>
            <div style={contactMethodStyles}>
              <h3 style={contactMethodTitleStyles}>
                <svg width="24" height="24" viewBox="0 0 24 24" style={iconStyles}>
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </h3>
              <p style={contactDetailStyles}>mkhizes834@gmail.com</p>
            </div>
            
            <div style={contactMethodStyles}>
              <h3 style={contactMethodTitleStyles}>
                <svg width="24" height="24" viewBox="0 0 24 24" style={iconStyles}>
                  <path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/>
                </svg>
                Location
              </h3>
              <p style={contactDetailStyles}>Mpangeni, South Africa</p>
            </div>
            
            <div style={contactMethodStyles}>
              <h3 style={contactMethodTitleStyles}>
                <svg width="24" height="24" viewBox="0 0 24 24" style={iconStyles}>
                  <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2zm13.54-7.1l-1.41-1.41-3.54 3.54 1.41 1.41L20.16 3.69zM12 9l-4 4 4 4 1.41-1.41L11.83 14l1.58-1.59L12 9z"/>
                </svg>
                Phone
              </h3>
              <p style={contactDetailStyles}>+27 73 11 994 29</p>
            </div>
            
            <div>
              <h3 style={contactMethodTitleStyles}>
                <svg width="24" height="24" viewBox="0 0 24 24" style={iconStyles}>
                  <path fill="currentColor" d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/>
                </svg>
                Social Media
              </h3>
              <div style={socialLinksStyles}>
                <a href="#" style={socialIconStyles}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                  </svg>
                </a>
                <a href="#" style={socialIconStyles}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109s.493-1.109 1.1-1.109 1.1.496 1.1 1.109-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                <a href="#" style={socialIconStyles}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                  </svg>
                </a>
                <a href="#" style={socialIconStyles}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109s.493-1.109 1.1-1.109 1.1.496 1.1 1.109-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div style={formContainerStyles}>
            <form onSubmit={handleSubmit}>
              <div style={formGroupStyles}>
                <label htmlFor="name" style={labelStyles}>Your Name</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyles}
                  placeholder="John Doe"
                />
              </div>
              
              <div style={formGroupStyles}>
                <label htmlFor="email" style={labelStyles}>Email Address</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyles}
                  placeholder="john@example.com"
                />
              </div>
              
              <div style={formGroupStyles}>
                <label htmlFor="subject" style={labelStyles}>Subject</label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={inputStyles}
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div style={formGroupStyles}>
                <label htmlFor="message" style={labelStyles}>Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={textareaStyles}
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button type="submit" style={buttonStyles}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;