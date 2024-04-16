import React from 'react';
import './App.css';

function AboutMe  ()  {
  return (
    <div className="about-me-container">
      <section className="intro-section">
        <h1> I'm  Iqra Iqbal</h1>
        <p>Welcome to my personal space! I'm passionate about Mobile application  and other Programming Languages also has expertise in Ui/Ux Mobile application .</p>
      </section>

      <section className="background-section">
        <h2>Background</h2>
        <p>I have a background in Computer Science . I graduated from University Of Lahore with a degree in Computer Science. Throughout my career, I've gained experience in Computer Course , Html , CSS , bootstrap , javascript (Web Development).</p>
      </section>

    
      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>Flutter </li>
          <li>Firebase</li>
          <li>Web Development</li>
          <li>Ui/Ux</li>
          {/* Add more skills */}
        </ul>
      </section>

      <section className="achievements-section">
        <h2>Achievements</h2>
        <p>One of my notable achievements includes [mention a significant accomplishment]. I received [any awards or recognition] for my work.</p>
      </section>

      <section className="mission-section">
        <h2>Mission</h2>
        <p>My mission is to [describe your professional mission or goals]. I believe in [your core values] and strive to [your work philosophy].</p>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Feel free to explore the rest of my portfolio and connect with me on social media. If you're interested in collaborating, don't hesitate to get in touch:</p>
        <p>Email:  iqraiqbalcs@gmail.com</p>
      </section>
    </div>
  );
};

export default AboutMe;
