import { useNavigate } from "react-router";
import { useState } from "react";
import { ObgynData } from "./Obgyn-data";

function Obgyn () {
    const navigate = useNavigate();
    const [visit,setVisit] = useState(0);
    const {id, image, title, text, texttwo, textthree, textfour} = ObgynData[visit];

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
        <div className="heading">
            <p>You can take the best care of yourself and your baby by getting early and regular prenatal care. Your physician will check to make sure you and your baby are healthy at each visit. If there are any problems, early action will help you and the baby.</p>
        </div>
        
        <div className="main-container-slides">
            <button onClick={visitPrevious} className="btn"><img src="https://img.icons8.com/?size=100&id=100033&format=png&color=000000" width={50} alt="arrow back"/></button>
        
            <div key={id}>
                <div className="heading-ob">
                    <h1>{title}</h1>
                </div>
                <div>
                    <div className="image-text">
                        <img className="ob-image" src={image} width={350} alt="image"/>
                        <div className="text-container">
                            <p>{text}</p>
                            <p>{texttwo}</p>
                            <p>{textthree}</p>
                            <p>{textfour}</p>
                        </div>
                    </div>
                    
                    <div>
                      
                      
                    </div>
                </div>
            </div>
            <button  onClick={visitNext} className="btn"><img src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" width={50} alt="arrow forward"/></button>       
        </div>
        <button  onClick={()=> navigate(-1)} className="btn-goback">Go Back</button> 
    </div>
    )
}
export default Obgyn;