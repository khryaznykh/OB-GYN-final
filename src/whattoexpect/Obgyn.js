import { useNavigate } from "react-router";
import { useState } from "react";
import { ObgynData } from "./Obgyn-data";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

function Obgyn () {
    useGSAP(
        ()=> {
            gsap.from ('.rectangle-container', { y:-200, duration:1, opacity:0})
            gsap.from ('.text-container', { y:-200, delay: 0.3, duration:1, opacity:0})
        }
    )

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
                    <div className="rectangle-container">
                        <div>
                            <img className="ob-image" src={image} width={450} alt="image"/>
                            <div className="rectangle"></div>
                                <div className="rectangle-two"></div>
                            </div>
                            <button  onClick={()=> navigate(-1)} className="btn-goback"><span>Go Back</span></button> 
                        </div>
                    <div className="text-container">
                        <p className="p-text">{text}</p>
                        <p className="p-text">{texttwo}</p>
                        <p className="p-text">{textthree}</p>
                        <p className="p-text">{textfour}</p>
                        <p className="p-text">{textfive}</p>
                        <p className="p-text">{textsix}</p>
                        <p className="p-text">{textseven}</p>
                    </div>
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