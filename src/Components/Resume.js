import React from 'react'
import { Flip,Fade } from "react-reveal";
const Resume = () => {
  return (
    <div className='project'> 
        <Flip duration={1500}bottom><div className="title">Resume</div></Flip>
    </div>
  )
}

export default Resume