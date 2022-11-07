import React from 'react'

const Cards = (props) => {
  return (

    // full card
    <div className="projectCard">

        {/* img */}
      <div>
         <img className="cardPic"src={props.img}/>
      </div>
      
      {/* btns and text */}
      <div className="cardText">
        <div className='projectTitle'>{props.title}</div>
        <div className='techUsed'><span class='techTitle'>Tech used:</span> {props.techUsed}</div>
        <div className='linkBox'>
            <a href={props.github} className='links' target="_blank">Github</a>
            <a href={props.app}className='links' target="_blank">Live App</a>
        </div>
      </div>
    </div>
  )
}

export default Cards