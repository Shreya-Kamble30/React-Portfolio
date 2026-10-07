import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="portfolio">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <h1 className="nav-logo">SK</h1>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Shreya Kamble</h1>
          <h2 className="hero-subtitle">Software Developer</h2>
          <p className="hero-description">
            Aspiring Software Developer with strong proficiency in Java, web development, and database management. 
            Passionate about building efficient, user-friendly applications with clean and maintainable code.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Shreya-Kamble30" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/shreya-kamble-166507308/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
          <div className="about-content">
            <p>
              I am an aspiring Software Developer with strong proficiency in Java, web development, and database management. 
              I am passionate about building efficient, user-friendly applications with clean and maintainable code. 
              Eager to apply my technical skills, problem-solving abilities, and continuous learning mindset to contribute 
              to impactful projects in a reputed organisation while growing into a successful full-stack developer.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <strong>Location</strong>
                Pune, Maharashtra, India
              </div>
              <div className="detail-item">
                <strong>Email</strong>
                shreyakamble3012@gmail.com
              </div>
              <div className="detail-item">
                <strong>Phone</strong>
                +91 9763284156
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Spring MVC</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">JPA/Hibernate</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Version Control</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Jira</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Development Practices</h3>
              <div className="skill-tags">
                <span className="skill-tag">SDLC</span>
                <span className="skill-tag">Agile/Scrum</span>
                <span className="skill-tag">RESTful Architecture</span>
                <span className="skill-tag">Unit Testing</span>
                <span className="skill-tag">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
          <div className="projects-grid">
            <div className="project-card">
              <h3>CentralPerk - Food Ordering Web Application</h3>
              <p>
                Developed a food ordering web application with user authentication, menu browsing, cart management, 
                order placement, and order history. Built the frontend using React, and the backend using Spring Boot, 
                REST APIs, and MySQL, with role-based access for users and admin.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">REST APIs</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreya-Kamble30/central-perk-frontend" target="_blank" rel="noopener noreferrer">
                  Frontend Repo
                </a>
                <a href="https://github.com/Shreya-Kamble30/central-perk-backend" target="_blank" rel="noopener noreferrer">
                  Backend Repo
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>FreshTrack - Grocery Management System</h3>
              <p>
                Developed FreshTrack, a user-friendly Grocery Management System featuring a quick product search, 
                a dynamic shopping cart, and an admin panel for efficient inventory management. Built with HTML, CSS, 
                JavaScript frontend, and Java-MySQL backend to enhance shopping and streamline operations.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreya-Kamble30/Freshtrack-Grocery-Managaement-System-" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Spring - TodoList</h3>
              <p>
                A comprehensive todo list application built with Spring Boot, demonstrating backend development skills 
                with RESTful APIs and database integration.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">MySQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreya-Kamble30" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>React - ProductStore</h3>
              <p>
                A product store application built with React, showcasing frontend development skills with modern 
                React patterns and state management.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreya-Kamble30" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
          <div className="experience-card">
            <div className="experience-header">
              <h3>Graduate Trainee</h3>
              <span className="experience-company">Amphenol Interconnect India Pvt. Ltd.</span>
              <span className="experience-date">Nov 2025 - Present</span>
            </div>
            <ul className="experience-details">
              <li>Developed and enhanced small-scale internal applications using C#, .NET, and SQL, helping automate and improve internal business processes</li>
              <li>Wrote and optimized SQL queries for data retrieval, reporting, and application functionality</li>
              <li>Assisted in resolving technical issues faced by employees, ensuring smooth system operations</li>
              <li>Collaborated with team members in building and supporting internal applications</li>
              <li>Gained exposure to project workflows and basic project management practices</li>
              <li>Developed an understanding of ERP systems and real-time business processes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
          <div className="education-card">
            <div className="education-header">
              <h3>B.Sc [Computer Science]</h3>
              <span className="education-school">Savitribai Phule Pune University [SPPU]</span>
              <span className="education-location">Pune</span>
              <span className="education-year">2025</span>
            </div>
            <p className="education-cgpa">CGPA: <span>7.48</span></p>
          </div>
          <div className="education-card">
            <div className="education-header">
              <h3>HSC</h3>
              <span className="education-year">Percentage: 60%</span>
            </div>
          </div>
          <div className="education-card">
            <div className="education-header">
              <h3>ICSE</h3>
              <span className="education-year">Percentage: 71.2%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and build something amazing together</p>
          <div className="contact-content">
            <p className="contact-description">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            <div className="contact-links">
              <a href="mailto:shreyakamble3012@gmail.com" className="contact-link">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                shreyakamble3012@gmail.com
              </a>
              <a href="https://github.com/Shreya-Kamble30" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                github.com/Shreya-Kamble30
              </a>
              <a href="https://www.linkedin.com/in/shreya-kamble-166507308/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Shreya Kamble. Built with React ❤️</p>
      </footer>

      <button 
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
      </button>
    </div>
  )
}

export default App
