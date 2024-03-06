import React from 'react'
import unnamed from './unnamed.png'
import './Main.css';
function Main() {
  return (
    <div className='bin'>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EASY FOR ALL STUDENT5</title>
  <link rel="stylesheet" href="index.css" />
  <header className="header">
    <nav className="navbar">
      <h2 className="links">
        <a href="#">LEARN WITH YOU</a>
      </h2>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" id="hamburger-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={24}
          viewBox="0 0 24 24"
          width={24}
        >
          <path
            d="M3 12h18M3 6h18M3 18h18"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      </label>
      <ul className="links">
        <li>
          <a href="\Main.jsx">Home</a>
        </li>
        <li>
            <a href='#'>Portals</a>
            
        </li>
        <li>
          <a href="/Logins/Main/Sub">Department</a>
        </li>
        <li>
          <a href="/Logins/Main/about">About Us</a>
        </li>
        <li>
          <a href="/Logins/Main/Contact">Contact Us</a>
        </li>
      </ul>
      <div className="buttons">
        
        <a href="/Login" className="signup">
          Logout
        </a>
      </div>
    </nav>
  </header>
  <div className="hero-section">
    <div className="hero">
      <h2>Study Skill Development</h2>
      <p>
        Join us in the exciting world of programming and turn your ideas into
        reality. Unlock the world of endless possibilities - learn to code and
        shape the digital future with us.
      </p>
      <div className="buttons">
        <a href='https://chat.whatsapp.com/HBDKQNibZfnHopwCXNAAOI' className="join">
          Join Now
        </a>
        <a href="/contact" className="learn">
          Learn More
        </a>
      </div>
    </div>
    <div className="img">
      <img
        src={unnamed}
        alt="hero image"
      />
    </div>
  </div>
</>

    </div>
  )
}

export default Main
