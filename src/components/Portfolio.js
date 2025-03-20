import React from 'react';

function Portfolio() {
  // Base styles without media queries
  const sectionStyles = {
    padding: '100px 5%',
    backgroundColor: '#f8f9fa',
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
  };

  const subheadingStyles = {
    fontSize: '18px',
    color: '#666',
    marginBottom: '50px',
  };

  const categoryHeadingStyles = {
    fontSize: '28px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '30px',
    position: 'relative',
    paddingLeft: '15px',
    borderLeft: '4px solid #6C63FF',
  };

  const inlineSectionContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    marginBottom: '30px',
  };

  const inlineSectionStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '30px',
  };

  // Use window.innerWidth to conditionally apply styles
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;

  // Apply responsive styles based on screen size
  const responsivePortfolioGridStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: '30px',
  };

  // Apply responsive styles to the inline section
  const responsiveInlineSectionStyles = {
    ...inlineSectionStyles,
    flexDirection: isTablet || isMobile ? 'column' : 'row',
  };

  // Apply responsive styles to the category heading
  const responsiveCategoryHeadingStyles = {
    ...categoryHeadingStyles,
    ...(isMobile && {
      fontSize: '24px',
      textAlign: 'center',
      paddingLeft: '0',
      borderLeft: 'none',
      borderBottom: '2px solid #6C63FF',
      paddingBottom: '10px',
    }),
  };

  // Apply responsive styles to section heading
  const responsiveHeadingStyles = {
    ...headingStyles,
    ...(isMobile && {
      fontSize: '28px',
      textAlign: 'center',
    }),
  };

  // Apply responsive styles to subheading
  const responsiveSubheadingStyles = {
    ...subheadingStyles,
    ...(isMobile && {
      fontSize: '16px',
      textAlign: 'center',
    }),
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

  // Updated to use backgroundImage instead of img tag
  const projectBackgroundStyles = (imageUrl) => ({
    width: '100%',
    height: '220px',
    backgroundImage: `url(${imageUrl || 'https://cdn2.vectorstock.com/i/1000x1000/01/71/hotel-workers-avatars-characters-vector-21070171.jpg'})`,
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

  // UI/UX Design projects
  const uiUxProjects = [
    {
      id: 1,
      title: 'Hotel App',
      description: 'Analytics dashboard for tracking performance across multiple social platforms.',
      image: '../../public/hero.png',
      link: 'https://www.figma.com/proto/CuPoHRhPrxdjmNB8WrCoH1?node-id=0-1&t=Rf0MKvbeFGuj4Uqd-6'
    },
   
  ];

  // Mobile App projects
  const mobileAppProjects = [
    {
      id: 1,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates.',
      image: 'mobile-project1.jpg',
      link: 'https://employee-app1-sigma.vercel.app/'
    },
  
  ];

  // Web Development projects
  const webDevProjects = [
    {
      id: 1,
      title: 'Employee Management System',
      description: 'A full-featured app for managing employee records and tasks.',
      image: 'web-project1.jpg',
      link: 'https://employee-app1-sigma.vercel.app/'
    },
   
  ];

  // Render a project card with background image and link
  const renderProjectCard = (project, category) => (
    <div key={`${category}-${project.id}`} style={projectCardStyles} 
         onMouseEnter={(e) => {
           const bgElement = e.currentTarget.querySelector('.project-bg');
           if (bgElement) bgElement.style.transform = 'scale(1.05)';
         }}
         onMouseLeave={(e) => {
           const bgElement = e.currentTarget.querySelector('.project-bg');
           if (bgElement) bgElement.style.transform = 'scale(1)';
         }}>
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

  // Add a window resize event listener to update styles when the window size changes
  React.useEffect(() => {
    const handleResize = () => {
      // Force a re-render when window is resized
      // In a real application, you would use state to trigger this
      // This is a simplified approach
      window.location.reload();
    };

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="portfolio" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={responsiveHeadingStyles}>My Portfolio</h2>
        <p style={responsiveSubheadingStyles}>Explore my work across different specialties</p>
        
        <div style={inlineSectionContainerStyles}>
          {/* UI/UX Design Section */}
          <div style={responsiveInlineSectionStyles}>
            <div style={sectionContentStyles}>
              <h3 style={responsiveCategoryHeadingStyles}>UI/UX Design</h3>
              <div style={responsivePortfolioGridStyles}>
                {uiUxProjects.map(project => renderProjectCard(project, 'ui'))}
              </div>
            </div>
          </div>
          
          {/* Mobile App Development Section */}
          <div style={responsiveInlineSectionStyles}>
            <div style={sectionContentStyles}>
              <h3 style={responsiveCategoryHeadingStyles}>Mobile App Development</h3>
              <div style={responsivePortfolioGridStyles}>
                {mobileAppProjects.map(project => renderProjectCard(project, 'mobile'))}
              </div>
            </div>
          </div>
          
          {/* Web Development Section */}
          <div style={responsiveInlineSectionStyles}>
            <div style={sectionContentStyles}>
              <h3 style={responsiveCategoryHeadingStyles}>Web Development</h3>
              <div style={responsivePortfolioGridStyles}>
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