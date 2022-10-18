import React from 'react'
import { Rotate } from 'react-reveal'

const Nav = () => {
  return (
    <Rotate bottom  delay={600} duration={1500}><div className='Nav'>
        <div>Projects</div>
        <div>TechStack</div>
        <div>Contact</div>
        
        </div></Rotate>
  )
}

export default Nav