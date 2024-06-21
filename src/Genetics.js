import { useNavigate } from "react-router";
import { GeneticsData } from "./Accordion/Genetics-data";
import { useState } from "react";
import { Accordion } from './Accordion/Accordion';

function Genetics () {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)

    return (<div>

        
<Accordion/>




        <button  onClick={()=> navigate(-1)} className="btn">Go Back</button>
        </div>
    )
}
export default Genetics;