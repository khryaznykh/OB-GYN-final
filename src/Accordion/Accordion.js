
import { AccordionItem } from './AccordionItem';
import { GeneticsData } from './Genetics-data';

import './AccordionStyle.css'

export const Accordion = () => {
    return (
        <div>
        {GeneticsData.map ((item,index)=>{
            return(
            <AccordionItem key={index} 
                test = {item.test} 
                method = {item.method}
                invasive = {item.invasive}
                results = {item.results}/>
        )})}
        </div>
    )
}