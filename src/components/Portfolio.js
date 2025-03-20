import React, { useState, useEffect } from 'react';

function Portfolio() {
  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // Effect to handle window resize
  useEffect(() => {
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Function to determine screen size
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
  };

  // Base styles
  const sectionStyles = {
    padding: '100px 5%',
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
    marginBottom: '50px',
    textAlign: isMobile ? 'center' : 'left',
  };

  const categoryHeadingStyles = {
    fontSize: isMobile ? '24px' : '28px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '30px',
    position: 'relative',
    paddingLeft: isMobile ? '0' : '15px',
    borderLeft: isMobile ? 'none' : '4px solid #6C63FF',
    textAlign: isMobile ? 'center' : 'left',
    paddingBottom: isMobile ? '10px' : '0',
    borderBottom: isMobile ? '2px solid #6C63FF' : 'none',
  };

  const inlineSectionContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    marginBottom: '30px',
  };

  const inlineSectionStyles = {
    display: 'flex',
    flexDirection: isMobile || isTablet ? 'column' : 'row',
    alignItems: 'flex-start',
    gap: '30px',
  };

  const portfolioGridStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: '30px',
  };

  const sectionContentStyles = {
    flex: '1',
  };

  const projectCardStyles = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const projectImageContainerStyles = {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
    position: 'relative',
  };

  const projectBackgroundStyles = (imageUrl) => ({
    width: '100%',
    height: '220px',
    backgroundImage: `url(${imageUrl || 'https://via.placeholder.com/400x220'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    transition: 'transform 0.5s ease',
  });

  const projectCategoryStyles = {
    position: 'absolute',
    top: '15px',
    left: '15px',
    backgroundColor: 'rgba(108, 99, 255, 0.9)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
  };

  const projectInfoStyles = {
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  };

  const projectTitleStyles = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  };

  const projectDescriptionStyles = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
    lineHeight: '1.6',
    flexGrow: 1,
  };

  const projectLinkStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#6C63FF',
    fontWeight: '500',
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    marginTop: 'auto',
  };

  // Project data
  const uiUxProjects = [
    {
      id: 1,
      title: 'Hotel App',
      description: 'Analytics dashboard for tracking performance across multiple social platforms.',
      image: '../../public/hero.png',
      link: 'https://www.figma.com/proto/CuPoHRhPrxdjmNB8WrCoH1?node-id=0-1&t=Rf0MKvbeFGuj4Uqd-6'
    },
  ];

  const mobileAppProjects = [
    {
      id: 1,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates.',
      image: 'mobile-project1.jpg',
      link: 'https://employee-app1-sigma.vercel.app/'
    },
  ];

  const webDevProjects = [
    {
      id: 1,
      title: 'Employee Management System',
      description: 'A full-featured app for managing employee records and tasks.',
      image: 'web-project1.jpg',
      link: 'https://employee-app1-sigma.vercel.app/'
    },
  ];

  // Render a project card
  const renderProjectCard = (project, category) => (
    <div 
      key={`${category}-${project.id}`} 
      style={projectCardStyles} 
      onMouseEnter={(e) => {
        const bgElement = e.currentTarget.querySelector('.project-bg');
        if (bgElement) bgElement.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        const bgElement = e.currentTarget.querySelector('.project-bg');
        if (bgElement) bgElement.style.transform = 'scale(1)';
      }}
    >
      <div style={projectImageContainerStyles}>
        <div 
          className="project-bg"
          style={projectBackgroundStyles(project.image)} 
        />
        <span style={projectCategoryStyles}>
          {category === 'ui' ? 'UI/UX Design' : 
           category === 'mobile' ? 'Mobile App' : 'Web Development'}
        </span>
      </div>
      <div style={projectInfoStyles}>
        <h3 style={projectTitleStyles}>{project.title}</h3>
        <p style={projectDescriptionStyles}>{project.description}</p>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={projectLinkStyles}
          onMouseEnter={(e) => e.target.style.color = '#5a52d5'}
          onMouseLeave={(e) => e.target.style.color = '#6C63FF'}
        >
          View Project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '5px' }}>
            <path d="M8 12L12 8M12 8L8 4M12 8H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <section id="portfolio" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={headingStyles}>My Portfolio</h2>
        <p style={subheadingStyles}>Explore my work across different specialties</p>
        
        <div style={inlineSectionContainerStyles}>
          {/* UI/UX Design Section */}
          <div style={inlineSectionStyles}>
            <div style={sectionContentStyles}>
              <h3 style={categoryHeadingStyles}>UI/UX Design</h3>
              <div style={portfolioGridStyles}>
                {uiUxProjects.map(project => renderProjectCard(project, 'ui'))}
              </div>
            </div>
          </div>
          
          {/* Mobile App Development Section */}
          <div style={inlineSectionStyles}>
            <div style={sectionContentStyles}>
              <h3 style={categoryHeadingStyles}>Mobile App Development</h3>
              <div style={portfolioGridStyles}>
                {mobileAppProjects.map(project => renderProjectCard(project, 'mobile'))}
              </div>
            </div>
          </div>
          
          {/* Web Development Section */}
          <div style={inlineSectionStyles}>
            <div style={sectionContentStyles}>
              <h3 style={categoryHeadingStyles}>Web Development</h3>
              <div style={portfolioGridStyles}>
                {webDevProjects.map(project => renderProjectCard(project, 'web'))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;