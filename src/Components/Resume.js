import React from 'react'
import { Flip, Fade } from "react-reveal";
const Resume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Sarrthi_Jasrotia_Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Sarrthi_Jasrotia_Resume.pdf';
        alink.click();
      })
    })
  }
  return (
    <div id='Resume' className='project'>
      <Flip duration={1500} bottom><div className="title">Resume</div></Flip>

      <Fade delay={200} duration={1500} >
      <center>
        
        <div className='resumeTxt'>Click on below button to download the resume</div>
        <button onClick={onButtonClick} className='download'>
          Download PDF
        </button>
      </center></Fade>
    </div>
  )
}

export default Resume