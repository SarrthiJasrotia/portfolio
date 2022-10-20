import { Parallax } from "react-parallax";
import pfp from '../Images/pfp.jpg'
import Typewriter from "typewriter-effect";
import { Bounce, Flip, Roll } from "react-reveal";
const Box1 = () => (
    <Parallax className="box1" >

        <div className="content1">

            {/* the animated sqaures in the banner */}
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="intro">

                <span className="hi" >
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Hi, ")
                                .pauseFor(1000)
                                .typeString("I am Sarrthi,")
                                .stop()
                                .start()
                        }} />
                </span>

                <span className="where" >
                    <Typewriter 
                    onInit={(typewriter)=>{
                        
                        typewriter
                        .pauseFor(3500)
                        .typeString('I am a full-stack software developer')
                        .typeString('<br/>')
                        .pauseFor(500) 
                        .typeString('located in Houston Texas')
                        // .pasteString('I ')
                        // .pasteString('am')
                        // .pasteString(' a ')
                        // .pasteString('full')
                        // .pasteString('-stack')
                        // .pasteString(' soft')
                        // .pasteString('ware')
                        // .pasteString(' deve')
                        // .pasteString('loper')
                        // .typeString('<br/>')
                        // .pasteString(' located')
                        // .pasteString(' in')
                        // .pasteString(' Houston')
                        // .pasteString(" Texas")
                        .start()
                    }}
                    />
                    </span> 






            </div>
            {/* <Bounce right delay={500} duration={2500} > */}
                <img src={pfp} className="pfp" />
                {/* </Bounce> */}

        </div>


    </Parallax>
)

export default Box1



