// src/component/Home.jsx
import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="page home">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the site</h1>
          <p className="lead">This is the Home page. Explore features and get started quickly.</p>

          <div className="features">
            <div className="card">
              <h3>Fast</h3>
              <p>Lightweight and fast development with Vite and React.</p>
            </div>
            <div className="card">
              <h3>Simple</h3>
              <p>Small, focused components that are easy to read and reuse.</p>
            </div>
            <div className="card">
              <h3>Modern</h3>
              <p>Uses modern JS, hooks, and routing for single-page apps.</p>
            </div>
          </div>

          <button className="cta-button">Get Started</button>
        </div>
      </header>
    </div>
  )
}

export default Home