import { useState } from "react"

export const AccordionItem = ({test, method, invasive, results,showMore}) => {
    const [isOpen, setIsOpen] = useState (false);

    const handleIsOpen = () => {
        showMore = !showMore;
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className={`accordion-main ${showMore ? "active" : "default"}`}  onClick={handleIsOpen}>
                {test}
                <img src={showMore ? "https://img.icons8.com/?size=100&id=ebWDmQ5dxgJ1&format=png&color=000000" : "https://img.icons8.com/?size=100&id=RqRHFijf5yzf&format=png&color=000000"} alt="button" width={30}/>
                {/* https://img.icons8.com/?size=100&id=ebWDmQ5dxgJ1&format=png&color=000000 */}
            </div>
            
            { 
                isOpen && <div className="content">
                    <ul>
                        <li> How the test is performed? {method}</li>
                        <li>Is this test invasive? {invasive}</li>
                        <li>{results}</li>
                    </ul>
                          
                          </div>
            }
         
        </div>
    )
}