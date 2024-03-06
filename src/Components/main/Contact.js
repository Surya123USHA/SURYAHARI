import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
function Contact() {
    
    const form = useRef('');
    const sendEmail = (e) =>{
        e.preventDefult()

        emailjs.sendForm('service_odx3x61', 'template_se6kyis' , form.current , 'k2ET7ln45p_wHCpPH').then =(result) => {
            console.log(result.test);
        }; 
    
    
    
    }
        

           
    
    
  return (
    <div>
        <>
  <div>
    
      <div className="pageTitle title">Contact Us</div>
      <div className="secondaryTitle title">We'd love to hear from you.!</div>
      <form className="tutorial" ref={form} onSubmit={(e)=>sendEmail}  >
      <input
        type="text"
        className="y formEntry"
        placeholder="Enter Your Name.!"
        name='from_name'
      />
      <input
        type="text"
        className="a formEntry"
        placeholder="Enter Your Email.!"
        name='from_email'
      />
      <textarea
        className="b formEntry"
        placeholder="Enter Your Message.!"
        defaultValue={""}
      />
      <input type="checkbox" className="x" defaultValue="Term" />
      <label style={{ color: "#2C3E50" }} htmlFor="terms">
        Accepting{" "}
        <span>
          <b>Terms</b>
        </span>{" "}
        &amp;{" "}
        <span style={{ color: "#2C3E50" }}>
          <b>Privacy Policy</b>
        </span>
        .{" "}
      </label>
      <br />
      <button className="c formEntry" onclick="thanks()">
        Submit
      </button>
    </form>
  </div>
</>

    </div>
  )
}

export default Contact