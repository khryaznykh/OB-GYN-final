import Video from "../Video";
import dataFrontMain from "../dataFrontMain";
import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import SweetAlert from "./SweetAlert";
import SweetAlertCongrats from "./SweetAlertCongrats";
import SweetAlertWeeks from "./SweetAlertWeeks";
import SweetAlertDate from "./SweetAlertDate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Home() {
    const [dueDate, setDueDate] = useState(null);
    const [diff, setDiff] = useState(null);
    const [showAlert, setShowAlert] = useState(false); // Добавлено состояние для управления отображением алертов
    const today = new Date();

    const handleSubmit = () => {
      const oneDay = 1000 * 60 * 60 * 24;
      const diff = Math.ceil((dueDate - today) / oneDay);
      setDiff(diff);
      setShowAlert(true); // Показываем алерт после нажатия кнопки "Enter"
  }

    return(
    <div className="mainPagePositioning">

      <div className="container-two-practice">
        <motion.div className="tab"
          initial={{y:-70}}
          whileInView={{y:0, transition: {duration:0.7, staggerChildren: 0.7}}}
          viewport={{once:true}}>
          <Video/>
          <div className="tab-two">
            <motion.div className="tab-two-text"
                initial={{y:-70}}
                whileInView={{y:0, y:0, transition:{ ease: "easeOut", duration:1}}}
                viewport={{once: false, amount: 0.1}}>
              <p className="mainText">Welcome to our website where we tried to collect the major information for the expectant moms!</p>
              <p className="mainText-small">If you still have any other questions that you think would be helpful for our visitors, don't hesitate and contact us!</p>
            </motion.div>
          
            <Link className="center" to="/ContactUs">
              <button className="btn-contact front-contact">Contact Us</button>
            </Link>
          </div>
        </motion.div >
      </div>

      <div className="line-container">
        <div className="line"></div>
      </div>

      {dataFrontMain.map(element => {
        const {id, image, text} = element;
        return(
        <div key = {id} >
          <div className = {`${id%2 === 0 ? "firstTab" : "firstTabReverse"}`} >
            <motion.div className="tab tab-mar"
              initial={{opacity:0, y:-70}} 
              whileInView={{opacity:1, y:0, transition:{ ease: "easeOut", duration:1}}}
              viewport={{once: true}}>
              <img src={image} className="image" alt="imageFirstPage" width={400}/>
            </motion.div>
            <motion.div className="tab tab-mar"
              initial={{opacity:0, y:-70}} 
              whileInView={{opacity:1, y:0, transition:{ ease: "easeOut", duration:1, delay:0.3}}}
              viewport={{once: false, amount: 0.1}}>
              <p className = {`${id%2 === 0 ? "mainText-add-reverse" : "mainText-add"}`}>{text}</p>
            </motion.div>
          </div>
          <div className="line-container">
            <div className="line"></div>
          </div>
      </div>
      )
    })}
    
    <div>
      <div className="bar-container">
        <motion.div className="tab tab-mar"
            initial={{opacity:0, y:-70}} 
            whileInView={{opacity:1, y:0, transition:{ ease: "easeOut", duration:1}}}
            viewport={{once: true}}>
          <img className="image" src="https://images.unsplash.com/photo-1510154221590-ff63e90a136f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={400}/>
        </motion.div>

        <motion.div className="datepicker-form tab"
            initial={{opacity:0, y:-70}} 
            whileInView={{opacity:1, y:0, transition:{ ease: "easeOut", duration:1, delay:0.3}}}
            viewport={{once: false, amount: 0.1}}>
          <p>Enter your expected due date to see how soon you're gonna meet you little baby!</p>
          <DatePicker
                    selected={dueDate}
                    onChange={(date) => { setDueDate(date); setShowAlert(false); setDiff(null); }} // Изменено для сброса алерта при изменении даты
                    value={dueDate}
                    autoFocus={true}
                    closeCalendar={true}
                    type="date"
                    className="datepicker-width"
          />
          <button className='btn-calc-submit' onClick={handleSubmit}>Enter</button>
        </motion.div>
        {showAlert && (
                <div className="alert-container">
                    {diff > 0 ? <SweetAlertWeeks days={diff} /> :
                        diff < 0 ? <SweetAlert /> :
                            diff === 0 ? <SweetAlertCongrats /> :
                                isNaN(diff) ? <SweetAlertDate /> : ""}
                </div>
        )}
      </div>
      <div className="line-container">
        <div className="line"></div>
      </div>
    </div>
  </div>
)}
export default Home;