import { useNavigate } from "react-router";
// import { GeneticsData } from "./Accordion/Genetics-data";
import { useState } from "react";
import { Accordion } from './Accordion/Accordion';
import { motion } from "framer-motion";

import './Accordion/AccordionStyle.css';

function Genetics () {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const text = ""

    return (
        <div className="genetics-main">
            <div>
                <div className="box-angled"></div>
                <div className="genetics-header">
                    <div className="header-left">
                        <h4>When you discover you have a baby on the way, you may experience overwhelming joy followed closely by fear. Will the baby be healthy? </h4>
                    </div>
                    <motion.div className="header-right"
                        initial={{opacity:0, y:-70}}
                        whileInView={{opacity:1, y:0, transition:{ ease: "easeOut", duration:1}}}
                        viewport={{once: true}}>
                        <h2>Today, people get detailed answers about the health of their baby long before their<i> bundle of joy </i>is scheduled to arrive — and it all begins with <br/><span className="color-text">prenatal genetic testing.</span></h2>
                    </motion.div>
                </div>
                <div className="genetics-first">
                    <motion.div className="genetics-text  text-first"
                    initial={{opacity:0, y:-70}}
                    whileInView={{opacity:1, y:0, transition:{ ease: "easeOut", duration:1}}}
                    viewport={{once: false, amount: 0.1}}>
                        <span><b>Prenatal genetic diagnosis</b> refers to the process of detecting whether the fetus has some genetic diseases or abnormalities during fetal development by using various methods and techniques. The purpose of a prenatal genetic diagnosis is to provide prospective parents with genetic information about the fetus and to provide opportunities to adjust pregnancy management and/or postnatal care. </span>
                    </motion.div>
                    <motion.div
                    initial={{y:-70}}
                    whileInView={{ y:0, transition:{ ease: "easeOut", duration:1, delay:0.3}}}
                    viewport={{once: true}}>
                        <img  className="genetics-text" src="https://www.researchgate.net/profile/Anton-Bonne-2/publication/333798532/figure/fig2/AS:769983407738880@1560589758792/Figuur-2-Voorstelling-van-cffDNA-en-maternaal-cfDNA-in-de-maternale-circulatie-De.jpg" width={600}/>
                    </motion.div>
                </div>
                <div className="box-angled-two"></div>
                <div className="genetics-first">
                    <motion.div
                        initial={{opacity:0, y:-70}}
                        whileInView={{opacity:1, y:0, transition:{ ease: "easeOut", duration:1,delay:0.3}}}
                        viewport={{once: true}}>
                        <img className="genetics-text"   src="https://images.unsplash.com/photo-1489087584469-437d40177a45?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={600}/>
                    </motion.div>
                    <motion.div className="genetics-text text-two" 
                        initial={{opacity:0, y:-70}}
                        whileInView={{opacity:1, y:0, transition:{ ease: "easeOut", duration:1}}}
                        viewport={{once: false, amount: 0.1}}>
                        <p>There are two different kinds of tests: screening tests and diagnostic tests. Screening tests don’t diagnose genetic conditions, and an abnormal result doesn’t mean the fetus has a condition. It means there’s a higher risk for a genetic disorder.Your healthcare provider can help interpret results from genetic screening tests and explain the next steps. In some cases, they may recommend diagnostic testing.</p>
                        <p>Prenatal screenings don’t carry any risk. It’s a blood sample. There is a slightly higher risk if you move forward with diagnostic tests like amniocentesis or CVS.</p>
                        <p>The decision to get prenatal genetic testing is a personal choice.</p>
                    </motion.div>
                </div>
            </div>
        <Accordion/>
        <div className="goback-position">
            <button  onClick={()=> navigate(-1)} className="btn-goback"><span>Go Back</span></button>
        </div>
    </div>
    )
}
export default Genetics;