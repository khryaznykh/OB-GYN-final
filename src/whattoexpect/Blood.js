import { useNavigate } from "react-router";
import { BloodData } from "./Blood-data";
import { motion } from "framer-motion";
import BloodGsapText from "./BloodGsapText";

function Blood () {
    const navigate = useNavigate();

    return (
    <div className="genetics-main">
        <div className="heading">
            <div className="logo-holder">
                <div className="bg"></div>
                <div className="bar"></div>
                <div className="bar fill4"></div>
                <div className="bar fill2"></div>
                <div className="bar fill3"></div>
                <div className="bar fill5"></div>
                <div className="bar fill1"></div>
                <div className="bar fill4"></div>
                <div className="bar fill1"></div>
                <div className="bar fill2"></div>
                <div className="bar fill5"></div>
                <div className="bar fill6"></div>
                <div className="bar fill3"></div>
                <div className="bar fill1"></div>
                <div className="bar fill5"></div>
                <div className="bar fill6"></div>
                <div className="bar fill2"></div>
                <div className="bar fill3"></div>
                <div className="bar fill4"></div>
                <div className="bar fill6"></div>
                <div className="bar"></div>
            </div>
            <BloodGsapText/>
        </div>

        <div className="container-flip-cards">
            {BloodData.map((item)=>{
                const {id, titlefront, text, texttwo, textthree} = item;
                    return (
                    <motion.div class="flip-card"
                    initial={{opacity:0, y:40}} 
                    whileInView={{opacity:1, y:0, transition:{ease: "easeOut", duration:0.7}}}
                    viewport={{once: false, amount: 0.3}}>
                        <div class="flip-card-inner">
                            <div key = {id} class="flip-card-front">
                                <div className="flip-text">
                                    <p class="title">{titlefront}</p>
                                    <p className="hover-text">Hover Me</p>
                                </div>
                            </div>
                            <div class="flip-card-back">
                                <div className="flip-text">
                                    <p>{text}</p>
                                    <p>{texttwo}</p>
                                    <p>{textthree}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    )
            })}
        </div>
        <div className="goback-position">
            <button  onClick={()=> navigate(-1)} className="btn-goback"><span>Go Back</span></button>
        </div>
    </div>
    )
}
export default Blood;