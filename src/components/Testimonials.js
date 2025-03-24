import React, { useState, useEffect } from 'react';
// Import your images properly
import certificate1 from '../../src/Asset/certificate-1.jpg';
import certificate2 from '../../src/Asset/certificate (1)_page-0001.jpg';
import certificate3 from '../../src/Asset/certificate (2)_page-0001.jpg';
import certificate4 from '../../src/Asset/certificate (3)_page-0001.jpg';

function Certificates() {
  // State for the selected certificate modal
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  // State for the current displayed certificate index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track if we're on mobile view
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to check screen size and update isMobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Certificates data
  const certificates = [
    {
      id: 1,
      title: "Introduction to SQL",
      issuer: "DataCamp",
      date: " 27 AUG 2024",
      image: certificate1,
    },
    {
      id: 2,
      title: "AWS cloud Practitioner",
      issuer: "DataCamp",
      date: "08 Nov 2024",
      image: certificate2,
    },
    {
      id: 3,
      title: "AWS Security and Cost Management Concepts",
      issuer: "DataCamp",
      date: "08 Nov 2024",
      image: certificate3,
    },
    {
      id: 4,
      title: "AWS Concepts",
      issuer: "DataCamp",
      date: "08 Nov 2024",
      image: certificate4,
    },
  ];

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  // Styles with responsiveness
  const sectionStyles = {
    padding: isMobile ? '60px 3%' : '100px 5%',
    backgroundColor: '#f8f9fa',
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyles = {
    fontSize: isMobile ? '28px' : '36px',
    marginBottom: '15px',
    fontWeight: '700',
    color: '#222',
    textAlign: isMobile ? 'center' : 'left',
  };

  const subheadingStyles = {
    fontSize: isMobile ? '16px' : '18px',
    color: '#666',
    marginBottom: isMobile ? '30px' : '50px',
    textAlign: isMobile ? 'center' : 'left',
  };

  const carouselContainerStyles = {
    position: 'relative',
    maxWidth: isMobile ? '100%' : '800px',
    margin: '0 auto',
    padding: isMobile ? '0 20px' : '0',
  };

  const certificateCardStyles = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    width: '100%',
  };

  const certificateImageContainerStyles = {
    height: isMobile ? '200px' : '300px',
    overflow: 'hidden',
  };

  const certificateImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  };

  const certificateInfoStyles = {
    padding: isMobile ? '15px' : '20px',
  };

  const certificateTitleStyles = {
    fontSize: isMobile ? '18px' : '20px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
    textAlign: 'center',
  };

  const certificateIssuerStyles = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#666',
    marginBottom: '5px',
    textAlign: 'center',
  };

  const certificateDateStyles = {
    fontSize: '14px',
    color: '#888',
    textAlign: 'center',
  };

  const navigationButtonStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: isMobile ? '32px' : '40px',
    height: isMobile ? '32px' : '40px',
    fontSize: isMobile ? '18px' : '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'background-color 0.3s',
  };

  const prevButtonStyles = {
    ...navigationButtonStyles,
    left: isMobile ? '0' : '-50px',
  };

  const nextButtonStyles = {
    ...navigationButtonStyles,
    right: isMobile ? '0' : '-50px',
  };

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    gap: '10px',
  };

  const dotStyles = {
    width: isMobile ? '10px' : '12px',
    height: isMobile ? '10px' : '12px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: '#333',
    transform: 'scale(1.2)',
  };

  // Modal styles with responsiveness
  const modalOverlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '10px' : '0',
  };

  const modalContentStyles = {
    backgroundColor: '#fff',
    padding: isMobile ? '20px' : '30px',
    borderRadius: '10px',
    width: '95%',
    maxWidth: '800px',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 1,
  };

  const modalImageStyles = {
    width: '100%',
    maxHeight: isMobile ? '300px' : '500px',
    objectFit: 'contain',
    marginBottom: '20px',
  };

  const modalTitleStyles = {
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '10px',
  };

  const modalDetailsStyles = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#666',
    marginBottom: '5px',
  };

  const modalDescriptionStyles = {
    fontSize: isMobile ? '14px' : '16px',
    lineHeight: '1.6',
    color: '#555',
    marginTop: '15px',
  };

  // Swipe handling for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // The minimum distance required for a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section id="certificates" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={headingStyles}>My Certifications</h2>
        <p style={subheadingStyles}>Professional qualifications and achievements that showcase my expertise</p>
        
        <div style={carouselContainerStyles}>
          {/* Previous button */}
          <button 
            style={prevButtonStyles} 
            onClick={goToPrevious}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
          >
            &#10094;
          </button>
          
          {/* Current certificate card with touch events for mobile */}
          <div 
            style={certificateCardStyles}
            onClick={() => openModal(certificates[currentIndex])}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              if (e.currentTarget.querySelector('img')) {
                e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              if (e.currentTarget.querySelector('img')) {
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              }
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div style={certificateImageContainerStyles}>
              <img 
                src={certificates[currentIndex].image} 
                alt={certificates[currentIndex].title} 
                style={certificateImageStyles}
              />
            </div>
            <div style={certificateInfoStyles}>
              <h3 style={certificateTitleStyles}>{certificates[currentIndex].title}</h3>
              <p style={certificateIssuerStyles}>Issued by: {certificates[currentIndex].issuer}</p>
              <p style={certificateDateStyles}>Date: {certificates[currentIndex].date}</p>
            </div>
          </div>
          
          {/* Next button */}
          <button 
            style={nextButtonStyles} 
            onClick={goToNext}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
          >
            &#10095;
          </button>
          
          {/* Navigation dots */}
          <div style={dotsContainerStyles}>
            {certificates.map((_, index) => (
              <div 
                key={index} 
                style={index === currentIndex ? activeDotStyles : dotStyles}
                onClick={() => goToIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {selectedCertificate && (
        <div style={modalOverlayStyles} onClick={closeModal}>
          <div style={modalContentStyles} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyles} onClick={closeModal}>×</button>
            <img 
              src={selectedCertificate.image} 
              alt={selectedCertificate.title} 
              style={modalImageStyles}
            />
            <h3 style={modalTitleStyles}>{selectedCertificate.title}</h3>
            <p style={modalDetailsStyles}>Issued by: {selectedCertificate.issuer}</p>
            <p style={modalDetailsStyles}>Date: {selectedCertificate.date}</p>
            {selectedCertificate.description && (
              <p style={modalDescriptionStyles}>{selectedCertificate.description}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;