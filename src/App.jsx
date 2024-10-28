import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">My Portfolio</div>
        <ul className="navbar-right">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
  <div className="home-content">
    <img className="profile-image" src="profile.png" alt="profile" />
    <h1>Hello!</h1>
    <p>I am Mary Katherine Kate Ballescas.</p>
    <p>Welcome to my Portfolio!</p>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="about-content">
        <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I am Mary Katherine Kate Ballescas, a 3rd-year Bachelor of Science in Information Technology (BSIT) student at Western Institute of Technology. I am currently exploring different areas and fields of IT, eager to learn more and new things. Whether it’s coding, networking, web development, or systems management, I like exploring into the details and figuring out how everything works together to create innovative solutions.
            </p>

            <p>I am passionate about continuous learning and growth, and I believe that every challenge is an opportunity to develop new skills. My journey in IT is fueled by curiosity and a desire to know more and contribute to real-world solutions, with a focus on making technology more accessible and impactful.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card1">
            <h3>Sweet Temptations Website</h3>
            <img src="st1.png" alt="ST" className="project-image" />
            <p>This is a website made for a business proposal project. It is created using HTML and CSS.</p>
            <div className="tech-stack">
            </div>
          </div>
          <div className="project-card2">
            <h3>Awesome Todos App</h3>
            <img src="awesome.png" alt="Awesome" className="project-image" />
            <p>This project is a full stack web application using MERN Stack (MongoDB, Express, React, and Node.).</p>
            <div className="tech-stack">
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
      <h2>Contact Me </h2>
      <p>Feel free to reach out!</p>
        <div className="contact-icons">
          <a href="mailto:kateballescas108@gmail.com">
            <img src="gmail.png" alt="Email" />
          </a>
          <a href="https://www.facebook.com/katherine.ballescas.5" target="_blank" rel="noreferrer">
            <img src="fb.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/katherineballescas/" target="_blank" rel="noreferrer">
            <img src="ig.png" alt="Instagram" />
          </a>
          <a href="https://github.com/katherineballescas098" target="_blank" rel="noreferrer">
      <img src="github.png" alt="GitHub" />
    </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Mary Katherine Kate Ballescas. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
