// src/component/About.jsx
import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className="page about">
      <section className="about-section">
        <h1>About Us</h1>
        <p className="lead">We build small, fast, maintainable web apps.</p>

        <div className="team">
          <div className="member card">
            <h4>Developer</h4>
            <p>Builds and maintains the code.</p>
          </div>
          <div className="member card">
            <h4>Designer</h4>
            <p>Creates UI/UX and visuals.</p>
          </div>
          <div className="member card">
            <h4>Product</h4>
            <p>Defines features and roadmap.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About