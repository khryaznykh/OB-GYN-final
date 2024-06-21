import { useNavigate } from "react-router";
import { BloodData } from "./Blood-data";


function Blood () {
    const navigate = useNavigate();
    

    return (
    <div>
        <div className="heading">
            <p>Pregnancy bloodwork is a group of blood tests that are done during pregnancy to check for diseases, infections, and hormones1234. Pregnancy bloodwork can confirm pregnancy, assess the health of the mother and the baby, and guide treatments1234. Pregnancy bloodwork typically includes blood type and Rh factor, complete blood count, rubella immunity, Hepatitis B, syphilis, HIV, and hCG levels</p>
        </div>

        <div className="container-flip-cards">
            {BloodData.map((item)=>{
                const {id, titlefront, text, texttwo, textthree} = item;
                    return (
                    <div class="flip-card">
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
                    </div>
                    )
            })}
        </div>
        <div>
            <button  onClick={()=> navigate(-1)} className="btn-goback">Go Back</button>
        </div>
        
        </div>
    )
}
export default Blood;