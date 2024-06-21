import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css"
import SweetAlert from "./SweetAlert";
import SweetAlertCongrats from "./SweetAlertCongrats";
import SweetAlertWeeks from "./SweetAlertWeeks";
import SweetAlertDate from "./SweetAlertDate";
import InputFeedback from "./InputFeedback";
import FeedbackShow from "./FeedbackShow";
import { v4 as uuidv4 } from 'uuid';
import { FeedbackData } from "./FeedbackData";


function Calculator () {

const [dueDate, setDueDate] = useState();
const [diff, setDiff] = useState();
const [isClicked,setIsClicked] = useState(true);
const today = new Date();


const [feedbackBank, setFeedbackBank] = useState(FeedbackData)
// const [feedbackBank, setFeedbackBank] = useState( localStorage.feedbackBank ? JSON.parse(localStorage.feedbackBank) : [FeedbackData]);
const [newFeedback,setNewFeedback] = useState("")



// useEffect(()=>{
//     localStorage.setItem("feedbackBank", JSON.stringify(feedbackBank))
//    },[feedbackBank]);


    const addSubmitFeedback = ()=> {
        const addFeedback = {
            id: uuidv4(),
            text: newFeedback.text,
            name: newFeedback.name,
            email: newFeedback.email,
         }
        setFeedbackBank([addFeedback, ...feedbackBank])

        console.log (feedbackBank)
    }

    
   

    
    // const handleClicked = ()=> {
    //     setIsClicked (false)
    //     console.log ("child false work")
    // }


    const handleSubmit = (e) => {
        // e.preventDefault();
        const oneDay = 1000*60*60*24
        const diff = Math.ceil((dueDate - today) / oneDay);
        setDiff(diff);
        console.log(diff);
        // setIsClicked(true)
        // console.log(isClicked)
       
    }


    return(
        <div className="calculatormain-container">
           
            <div className="input-container">
            <FeedbackShow 
                feedbackBank={feedbackBank}/>
            <InputFeedback 
                updatedFeedback={updatedFeedback}
                newFeedback = {newFeedback}
                setNewFeedback = {setNewFeedback}
                setFeedbackBank = {setFeedbackBank}
                feedbackBank={feedbackBank}
                addSubmitFeedback = { addSubmitFeedback }/>
           
            </div>

            <div className="datepicker-form">
                <DatePicker 
                    selected={dueDate}
                    onChange = {(date)=>setDueDate(date)} 
                    value= {dueDate} 
                    autoFocus={true}
                    closeCalendar={true}
                    type="date" 
                    className="datepicker-width"
                    />
                <button className='btn-calc-submit' onClick={handleSubmit}>Enter</button>
            </div>
            
            <div className={isClicked ? "seen" : "notseen"} >
                {diff > 0 ? <SweetAlertWeeks days = {diff}/> :   diff < 0 ? <SweetAlert/> : diff === 0 ? <SweetAlertCongrats />  : diff === NaN ? <SweetAlertDate/>  : ""}
            </div>
        </div>
    )
}

export default Calculator;