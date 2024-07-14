import { useState } from "react";
import { motion } from "framer-motion";
import './AccordionStyle.css';

export const AccordionItem = ({key, test, method, image,  type, invasive, results, repeat}) => {
    const [isOpen, setIsOpen] = useState (false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    }

    return (
        <div className="accordion-position">
            <div className={`accordion-main ${isOpen ? "active" : "default"}`}  onClick={handleIsOpen}  >
                <div className="accordion-label">
                    <img className="image-tube" src="https://cdn-icons-png.flaticon.com/512/3439/3439765.png" alt="tube" width={50}/>
                    <p className="test-name">{test}</p>
                </div>
                <img className="image-tube" src={isOpen ? "https://img.icons8.com/?size=100&id=114091&format=png&color=000000" : "https://img.icons8.com/?size=100&id=1501&format=png&color=000000"} alt="button" width={50}/>
            </div>
            { 
                isOpen && 
                <motion.div className="content"
                    initial={{opacity:0, y:-70}}
                    whileInView={{opacity:1, y:0, transition:{ ease: "easeOut", duration:1, staggerChildren:0.5}}}
                    viewport={{once: true}}>
                    <img className="image-test" src={image} alt="accordion"/>
                    <motion.ul
                    initial={{opacity:0, y:-70}}
                    whileInView={{opacity:1, y:0, transition:{ ease: "easeOut", duration:1}}}
                    viewport={{once: true}}>
                        <li><b>Is it a screening or diagnostic test?</b> {type} </li>
                        <li> <b>How the test is performed?</b> {method}</li>
                        <li><b>Is this test invasive? </b>{invasive}</li>
                        <li>{results}</li>
                        <li>{repeat}</li>
                    </motion.ul>
                </motion.div>
            }
        </div>
    )
}