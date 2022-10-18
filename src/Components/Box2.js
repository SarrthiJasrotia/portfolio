import { Parallax } from "react-parallax";
import { Rotate,Zoom,Bounce } from "react-reveal";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
const Box2 =()=>(
    <Zoom duration={1500}>
    <Parallax className="box2" strength={800}>
       
        <div className="content2">
             <Rotate bottom right delay={600} duration={1500}> <Nav/></Rotate>
             <Bounce delay={1500} duration={1500}><div className="box2column">
                <div className="columnDiv1"><AboutMe/></div>
                <div className="columnDiv2"><TechStack/></div>
             </div></Bounce>
             
                
        </div>
        
    </Parallax></Zoom>
)

export default Box2