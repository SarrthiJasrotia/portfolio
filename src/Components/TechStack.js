import React from 'react'
import react from '../Images/react.png'
import python from '../Images/python.png'
import node from '../Images/node.png'
import mongo from '../Images/mongo.png'
import js from '../Images/js.png'
import html from '../Images/html-5.png'
import css from '../Images/css-3.png'
import git from '../Images/git-original.svg'
import Django from '../Images/Django.svg'
import nextjs from '../Images/nextjs.svg'
import tailwind from '../Images/tailwind.svg'


const TechStack = () => {
  return (
    <div className='TechStack'> <h1>Skills</h1>
    <div className='skillGrid'>
    <div><img src={react}/>REACT.JS</div>
    <div><img src={python}/>PYTHON</div>
    <div><img src={node}/>NODE.JS</div>
    <div><img src={nextjs}/>NEXT.JS</div> 
    <div><img src={mongo}/>MONGODB</div>
    <div><img src={js}/>JAVASCRIPT</div>
    <div><img src={html}/>HTML 5</div>
    <div><img src={css}/>CSS 3</div> 
    <div><img src={tailwind}/>TAILWIND</div> 

    <div><img src={Django}/>DJANGO</div>   
    <div><img src={git}/>GIT</div> 
    </div>
    </div>
  )
}

export default TechStack