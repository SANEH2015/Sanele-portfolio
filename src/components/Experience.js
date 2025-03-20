import React from 'react';
import '../Experience.css'; // Import the CSS file

function Experience() {
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
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="heading">Work Experience</h2>
        <p className="subheading">My professional journey and career highlights</p>
        
        <div className="timeline">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : ''}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.date}</div>
              <div className="card">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company} {exp.location && `· ${exp.location}`}</p>
                <p className="experience-description">{exp.description}</p>
                {exp.skills && (
                  <div className="skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
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