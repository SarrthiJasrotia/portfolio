import { Parallax } from "react-parallax";
import { Zoom,Bounce } from "react-reveal";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import Project from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const Box2 =()=>(
    <Zoom duration={1500}>
    <Parallax className="box2" strength={1000}>
       
        <div className="content2">
              <Nav/>
            
                <div className="box2column">
                <Bounce right delay={1500} duration={2000}> <div className="columnDiv1"><AboutMe/></div></Bounce>
                <Bounce left delay={1500} duration={2000}><div className="columnDiv2"><TechStack/></div></Bounce>
             </div>
             
                
        </div>

        <Resume/>
        <Project/>
        
        <Contact/>
        
    </Parallax>
    </Zoom>

)

export default Box2