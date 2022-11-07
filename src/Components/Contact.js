import React from 'react'
import { Flip, Fade } from "react-reveal";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Github from '../Images/github-logo.png'
import Linkedin from '../Images/linkedin.png'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nbk8snt', 'template_o5filvb', form.current, 'I5Dm93lYqNShAkmkR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div>
      <Flip duration={1500} bottom><div className="title">Contact</div></Flip>
      
      
      <div className='contact-icons'>
      
      
      <a href='https://github.com/SarrthiJasrotia' target='_blank'><img src={Github}/></a> 
      <a href='https://www.linkedin.com/in/sarrthi-jasrotia/' target='_blank'><img src={Linkedin}/></a> 
      </div>


      <div className="letter-image">
        <Fade delay={500 }duration={1500}>
          <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
          
            
            
            <div className="letter-context">
              <h1>Get in touch</h1>
              <form ref={form} onSubmit={sendEmail}>
                <div className="letter-data">
             <input type="text" placeholder="Full Name" name = 'name' className='user-name' required/>
                <input type="email" placeholder="Email" name = 'email'  className='email' required/>
          </div>
               
                <input  type="text" placeholder="Subject" name = 'subject' className='subject' required/>
                <textarea className="message" placeholder='Type your message here...' name='message'/> 
                <button type='submit'>Send Message</button>
              
              </form>
            </div>
          
          </div>
          <div className="top-fold"></div>
          <div className="right-fold"></div>
          <div className="left-fold"></div>
        </div>
</Fade>
      </div>
    </div>
  )
}

export default Contact