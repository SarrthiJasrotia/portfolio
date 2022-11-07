import Cards from "./Cards";
import { Flip,Fade } from "react-reveal";
import CoTeach from '../Images/Coteach.png';
import Itravelynot from '../Images/Itravelynot.png';
import TravelBlog from '../Images/TravelBlog.png'
import Portfolio from '../Images/Portfolio.png'
const Project =()=>(
  <div className="project">
    <Flip duration={1500}bottom><div className="title">Projects</div></Flip>
  <Fade delay={500} duration={2000}><div className="projectGrid">
    {/* project 1 */}
  <Cards img={CoTeach} title={'CoTeach'} techUsed={'React, MongoDB, Express, CSS, Google Firebase'} github={'https://github.com/SarrthiJasrotia/CoTeach_frontend.git'} app={'https://vocal-figolla-43a5cd.netlify.app/'} />
  
  {/* project 2 */}
  <Cards img={Itravelynot} title={'ITravelYNot'} techUsed={'Javascript, JQuery, APIs, CSS, HTML'} github={'https://github.com/SarrthiJasrotia/Project_ITravelYNot.git'} app={'https://itravelynot.com/'} />
  
  {/* project 3 */}
  <Cards img={TravelBlog} title={'TravelBlog'} techUsed={'Node, CSS, HTML, Express, Bcrypt, MongoDB'} github={'https://github.com/SarrthiJasrotia/Project_ITravelYNot.git'} app={'https://travelblog-362615.uc.r.appspot.com/'} />
  
  {/* project 4 */}
  <Cards img={Portfolio} title={'Portfolio site'} techUsed={'React, EmailJS, CSS'} github={'https://github.com/SarrthiJasrotia/portfolio.git'} app={'https://sarrthijasrotia.com/'} />
  {/* <Cards img={''} title={''} github={''} app={''} /> */}
  {/* <Cards img={''} title={''} github={''} app={''} /> */}
  {/* <Cards img={''} title={''} github={''} app={''} /> */}
  {/* <Cards img={''} title={''} github={''} app={''} /> */}
  </div></Fade>
  </div>

)

export default Project