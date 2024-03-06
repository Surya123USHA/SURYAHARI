import React from 'react'
import'./Sub.css'
import Cyber from './Cyber - Copy.jpeg'
import IT from './IT.jpg'
import CSE from './Cyber - Copy.jpeg'
function Sub() {




  return (
    <div className='keem'>
      <>
  {/* Coding By CodingNepal - www.codingnepalweb.com */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Card Design HTML and CSS | CodingNepal</title>
  {/* Font Awesome Icons */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
  <h2 className='tit'>Select your current sem with Department</h2>
  <div className="card-list">
    
    <div href="#" className="card-item">
      <img src={Cyber} alt="Card Image" />
      <span className="developer">Cyber security</span>
      <h3 >Sem1
        <a href='/Logins/Main/Sub/Sem'>Click here</a>
      </h3>
      <h3 >Sem2
        <a href='/Logins/Main/Sub/Semn'>Click here</a>
      </h3>
      <h3 >Sem3
        <a href='/Logins/Main/Sub/Semns'>Click here</a>
      </h3>
      <div className="arrow">
        <i className="fas fa-arrow-right card-icon" />
      </div>
    </div>
    <a href="#" className="card-item">
      <img src={IT} alt="Card Image" />
      <span className="designer">IT</span>
      <h3>Sem1<a href='/Sem'>  Click here</a></h3>
      <h3 >Sem2
        <a href='/Semn'>Click here</a>
      </h3>
      <h3 >Sem3
        <a href='Semns'>Click here</a>
      </h3>
      <div className="arrow">
        <i className="fas fa-arrow-right card-icon" />
      </div>
    </a>
    <a href="#" className="card-item">
      <img src={CSE} alt="Card Image" />
      <span className="editor">CSE</span>
      <h3 >Sem1
        <a href='/Sem'>  Click here</a>
      </h3><h3 >Sem2
        <a href='/semn'>  Click here</a>
      </h3>
      <h3 >Sem3
        <a href='Semns'>Click here</a>
      </h3>
      <div className="arrow">
        <i className="fas fa-arrow-right card-icon" />
      </div>
    </a>
  </div>
</>

    </div>
  )
}

export default Sub