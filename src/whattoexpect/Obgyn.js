import { useNavigate } from "react-router";
import { useState } from "react";
import { ObgynData } from "./Obgyn-data";
import { motion } from "framer-motion";

function Obgyn () {
    const navigate = useNavigate();
    const [visit,setVisit] = useState(0);
    const {id, image, title, text, texttwo, textthree, textfour, textfive, textsix, textseven} = ObgynData[visit];

    const visitPrevious = () => {
        setVisit((visit => {
        visit--; 
        if (visit < 0) {
            visit = ObgynData.length-1
        }
        return visit  
        }))        
}

const visitNext = () => {
    setVisit((visit => {
        visit++;
        if (visit > ObgynData.length-1) {
            visit = 0
        }
        return visit
    }))
}

    return (
    <div className="page-container">
        <div className="main-container-slides">
            <button onClick={visitPrevious} className="btn"><img src="https://img.icons8.com/?size=100&id=100033&format=png&color=000000" width={50} alt="arrow back"/></button>
            <div key={id} className="slide-whole">
                <div className="heading-ob">
                    <h1>{title}</h1>
                </div>
            <div>
                <div className="image-text">
                    <motion.div className="rectangle-container"
                      initial={{y:-70}}
                      whileInView={{y:0, transition: {duration:0.7, staggerChildren: 1}}}
                      viewport={{once:true}}>
                        <motion.div
                          initial={{y:-70, opacity:0}}
                          whileInView={{y:0, opacity:1, transition: {duration:0.7}}}
                          viewport={{once:true}}>
                            <img className="ob-image" src={image} width={450} alt="OB/GYN"/>
                            <div className="rectangle"></div>
                            <div className="rectangle-two"></div>
                        </motion.div>
                            <button  onClick={()=> navigate(-1)} className="btn-goback"><span>Go Back</span></button> 
                    </motion.div>
                    <motion.div className="text-container"
                     initial={{y:-70, opacity: 0}}
                     whileInView={{y:0, opacity: 1, transition: {duration:0.7}}}
                     viewport={{once:true}}>
                        <p className="p-text">{text}</p>
                        <p className="p-text">{texttwo}</p>
                        <p className="p-text">{textthree}</p>
                        <p className="p-text">{textfour}</p>
                        <p className="p-text">{textfive}</p>
                        <p className="p-text">{textsix}</p>
                        <p className="p-text">{textseven}</p>
                    </motion.div>
                </div>    
            <div>
        </div>
    </div>
    </div>
        <button  onClick={visitNext} className="btn"><img src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" width={50} alt="arrow forward"/></button>       
    </div>
    </div>
    )
}
export default Obgyn;