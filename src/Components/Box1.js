import { Parallax } from "react-parallax";
import pfp from '../Images/pfp.jpg'
import { Flip, Bounce } from "react-reveal";
const Box1 = () => (
    <Parallax className="box1" ><Bounce top>
        <div className="content1">

            <div className="intro">

                <span className="quotation" style={{ color: "rgb(248, 162, 42)", fontSize: "3rem" }}>" </span>
                <span className="hi" style={{ color: "rgb(248, 162, 42)", fontSize: "3rem" }}>Hi, </span>
                <span className="name" style={{ color: "rgb(248, 162, 42)", fontSize: "3rem" }}>I am Sarrthi,</span>
                <span className="where" style={{ fontSize: "2rem" }}><br />
                    I am a full-stack software developer located in Houston,Texas.</span> <br />
                <br /><span className="quotation2" style={{ color: "rgb(248, 162, 42)", fontSize: "3rem" }}>"</span>

            </div>
            <Flip left delay={500} duration={1500}>
                <img src={pfp} className="pfp" /></Flip>

        </div>
    </Bounce>
    
    </Parallax>
)

export default Box1



   