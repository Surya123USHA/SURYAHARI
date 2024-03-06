import React from 'react'
import './About.css'
import GOJO from  './GOJO.jpg'
function About() {
  return (
    <div className='ron'>
        <>
  <div className="about-section">
    <h1>About Us Page</h1>
    <p>Some text about who we are and what we do</p>
    <p>
      Resize the browser window to see that this page is responsive by the way.
    </p>
  </div>
  <h2 className='title' style={{ textAlign: "center" }}>Our Team</h2>
  <div className="row">
    <div className="column">
      <div className="card">
        <img src={GOJO} alt="Vicky" style={{ width: "100%" }} />
        <div className="container">
          <h2 className='title'>Vignesh.s</h2>
          <h4 className="title">Information Technology</h4>
          <p className='title'>
            Hi Buddy, I'm Vignesh from Gojan school of Business and Technology.
            Here is a one of the most affordable website for one day Learner just like me
            you study here and also develop your skills because Skill can grow you.
            Below my Email:
           {" "}
          </p>
          <a  href='mailto:suryabkuvnm@gmail.com'>Click Here</a>
          <p>
            <button className="button">Home</button>
          </p>
        </div>
      </div>
    </div>
  <div>
    <div className="column">
      <div className="card">
        <img src={GOJO} alt="Tamil" style={{ width: "100%" }} />
        <div className="container">
          <h2 className='title'>Tamilarasu</h2>
          <p className="title">Information Technology</p>
          <p className='title'>
            Hi Bro, I'm Tamilarasu from Gojan School of Business and Technology.
            About this page I can say few thnings because some buddy is think os very hard to study
            here is the website to connect all students like fastbenchers to lastbenchers.   
          </p>
          <a href='mailto:'>Click Here</a>
          <p>
            <button className="button">Home</button>
          </p>
        </div>
      </div>
    </div>
  </div>
    <div className="column">
      <div className="card">
        <img src={GOJO} alt="Rohit" style={{ width: "100%" }} />
        <div className="container">
          <h2 className='title'>rohith.s</h2>
          <p className="title">Information Technology</p>
          <p className='title'>
            Hi Buddy, I'm rohith from Gojan school of Business and Technology.
            I'm studying 2 year here is one of the platform you learn with yourself
            because some students can't understand theory you easily understand by this website.
          </p>
          <a href='mailto:rohir645@gmail.com'>Click Here</a>
          <p>
            <button className="button">Home</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default About