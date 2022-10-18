import { Parallax } from "react-parallax";
import { Rotate,Zoom,Bounce } from "react-reveal";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import Project from "./Projects";
const Box2 =()=>(
    <Zoom duration={1500}>
    <Parallax className="box2" strength={1000}>
       
        <div className="content2">
              <Nav/>
            
                <div className="box2column">
                <Bounce left delay={1500} duration={1200}> <div className="columnDiv1"><AboutMe/></div></Bounce>
                <Bounce right delay={1500} duration={1200}><div className="columnDiv2"><TechStack/></div></Bounce>
             </div>
             
                
        </div>
        
        <Project/>

    </Parallax></Zoom>
)

export default Box2