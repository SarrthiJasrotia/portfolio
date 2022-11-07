import React from 'react'

import { Flip } from 'react-reveal'

const Nav = () => {
  return (
    <Flip bottom  delay={1000} duration={2000}><div className='Nav'>
        <a href='#project'>Projects</a>
        <a href='#Resume'>Resume</a>
        <a href='#Contact'>Contact</a>
        
        </div></Flip>
  )
}

export default Nav