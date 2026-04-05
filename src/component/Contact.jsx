// src/component/Contact.jsx
import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="page contact">
      <section className="contact-section">
        <h1>Contact</h1>
        <p className="lead">Send us a message and we'll get back to you.</p>

        <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Your message" />
          </label>
          <button className="cta-button" type="submit">Send</button>
        </form>

        <div className="contact-meta">
          <p>Email: hello@example.com</p>
          <p>Phone: +84 123 456 789</p>
        </div>
      </section>
    </div>
  )
}

export default Contact