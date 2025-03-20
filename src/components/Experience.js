import React from 'react';

function Experience() {
  const sectionStyles = {
    padding: '100px 5%',
    backgroundColor: '#fff',
    '@media (max-width: 768px)': {
      padding: '60px 5%',
    }
  };

  const containerStyles = {
    maxWidth: '1000px',
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

  const timelineStyles = {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const timelineLineStyles = {
    position: 'absolute',
    width: '4px',
    backgroundColor: '#e5e5e5',
    top: '0',
    bottom: '0',
    left: '18px',
    '@media (min-width: 768px)': {
      left: '50%',
      transform: 'translateX(-50%)',
    }
  };

  const timelineItemStyles = (isLeft) => ({
    position: 'relative',
    marginBottom: '50px',
    paddingLeft: '45px',
    width: '100%',
    '@media (min-width: 768px)': {
      width: '50%',
      paddingLeft: isLeft ? '0' : '40px',
      paddingRight: isLeft ? '40px' : '0',
      marginLeft: isLeft ? '0' : '50%',
      textAlign: isLeft ? 'right' : 'left',
    }
  });

  const timelineDotStyles = {
    position: 'absolute',
    width: '16px',
    height: '16px',
    backgroundColor: '#6C63FF',
    border: '4px solid #fff',
    borderRadius: '50%',
    top: '5px',
    left: '12px',
    zIndex: 1,
    '@media (min-width: 768px)': {
      left: 'auto',
      right: '-8px',
    }
  };

  const timelineDotStylesRight = {
    ...timelineDotStyles,
    '@media (min-width: 768px)': {
      left: '-8px',
      right: 'auto',
    }
  };

  const timelineDateStyles = {
    display: 'inline-block',
    padding: '5px 15px',
    backgroundColor: '#6C63FF',
    color: 'white',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '15px',
  };

  const cardStyles = {
    backgroundColor: '#f8f9fa',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  };

  const experienceTitleStyles = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#333',
  };

  const experienceCompanyStyles = {
    fontSize: '16px',
    color: '#6C63FF',
    fontWeight: '500',
    marginBottom: '15px',
  };

  const experienceDescriptionStyles = {
    fontSize: '14px',
    lineHeight: '1.7',
    color: '#555',
  };

  const skillsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '15px',
  };

  const skillTagStyles = {
    backgroundColor: '#e0e0ff',
    color: '#6C63FF',
    padding: '4px 10px',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: '500',
  };

  // Experience data
  const experiences = [
    {
      id: 1,
      date: 'Jul 2024 - Present',
      title: 'Developer Trainee',
      company: 'CodeTribe Digital Solutions - mLab Southern Africa',
      description: 'Collaborate with trainees to define and develop requirements. Identify and collaborate with local small businesses to develop digital solutions. Learn to develop applications that adhere to designs supporting business requirements. Write requirement specifications and design documents for various development tasks. Participate in implementing new software features and maintain existing ones. Attend to refactoring, debugging, and implementing necessary changes. Document processes for specifications to ensure quality. Participate in all Scrum events including stand-up meetings, planning, review, and retrospective.',
      skills: ['React.js', 'React Native', 'HTML5', 'CSS', 'MongoDB', 'Firebase', 'Redux', 'Figma', 'SQL'],
      location: 'South Africa (On-site)'
    }
  ];

  return (
    <section id="experience" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={headingStyles}>Work Experience</h2>
        <p style={subheadingStyles}>My professional journey and career highlights</p>
        
        <div style={timelineStyles}>
          <div style={timelineLineStyles}></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              style={timelineItemStyles(index % 2 === 0)}
            >
              <div 
                style={index % 2 === 0 ? timelineDotStyles : timelineDotStylesRight}
              ></div>
              <div style={timelineDateStyles}>{exp.date}</div>
              <div style={cardStyles}>
                <h3 style={experienceTitleStyles}>{exp.title}</h3>
                <p style={experienceCompanyStyles}>{exp.company} {exp.location && `· ${exp.location}`}</p>
                <p style={experienceDescriptionStyles}>{exp.description}</p>
                {exp.skills && (
                  <div style={skillsStyles}>
                    {exp.skills.map((skill, i) => (
                      <span key={i} style={skillTagStyles}>{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;