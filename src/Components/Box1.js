import { Parallax } from "react-parallax";
import pfp from '../Images/pfp.jpg'
const Box1 = () => (
    <Parallax className="box1" >
        <div className="content1">

            <div className="intro">

                <span className="quotation" style={{ color: "rgb(248, 162, 42)", fontSize: "5rem" }}>"</span> 
                <span className="name"style={{ color: "rgb(248, 162, 42)", fontSize: "3rem" }}>Hi, my name is Sarrthi Jasrotia,</span>
                <span className="where" style={{ fontSize: "2rem" }}><br/>
                I am a full-stack software developer located in Houston,Texas.</span> <br/><br/>
                <span className="why">
                Field of Tech is something I have been interested in since a very young age. I have always found the way technology works fascinating, I still remember taking Rc toys and computers apart and then putting them back together just to see how everything worked when I was younger.
                I spent the last 4-5 years involved with the hardware side of things such as robotics through competing at state and national levels, and industrial machine learning at my career technical school. I decided to pivot to the software development because of the field being more flexible hence giving me more opportunities and a better work-life balance.</span>
                <br/><span className="quotation2" style={{ color: "rgb(248, 162, 42)", fontSize: "5rem" }}>"</span>

            </div>
            <img src={pfp} className="pfp" />
        </div>
    </Parallax>
)

export default Box1