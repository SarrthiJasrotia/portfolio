import Cards from "./Cards";
import { Flip,Fade } from "react-reveal";
import CoTeach from '../Images/Coteach.gif';
import Itravelynot from '../Images/Itravelynot.gif';

const Project =()=>(
  <div className="project">
    <Flip duration={1500}bottom><div className="title">Projects</div></Flip>
  <Fade delay={500} duration={2000}><div className="projectGrid">
  <Cards img={CoTeach} title={'CoTeach'} github={'https://github.com/SarrthiJasrotia/CoTeach_frontend.git'} app={'https://vocal-figolla-43a5cd.netlify.app/'} />
  <Cards img={Itravelynot} title={'ITravelYNot'} github={'https://github.com/SarrthiJasrotia/Project_ITravelYNot.git'} app={'https://itravelynot.com/'} />
  <Cards img={''} title={''} github={''} app={''} />
  <Cards img={''} title={''} github={''} app={''} />
  </div></Fade>
  </div>

)

export default Project