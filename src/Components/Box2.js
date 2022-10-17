import { Parallax } from "react-parallax";
import Nav from "./Nav";
const Box2 =()=>(
    <Parallax className="box2" strength={800}>
        <div className="content2">
            <Nav/>
        </div>
    </Parallax>
)

export default Box2