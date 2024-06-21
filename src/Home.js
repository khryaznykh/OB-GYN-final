
// import Video from "./Video";
// import dataFrontMain from "./dataFrontMain";
// import gsap from 'gsap';
// import { useGSAP } from "@gsap/react";


// import { Link } from "react-router-dom";

// function Home() {
//     useGSAP(
//       ()=> {
//         gsap.from ('.tab', {x:-100, stagger: 0.3, opacity:0})
//       }
//     )
//     return(
//     <div className="mainPagePositioning">

//     <div className="firstTab">
//       <div className="tab">
//         <Video/>
//       </div>
     
//       <div className="tab">
//         <p className="mainText">Welcome to our website where we tried to collect the major information for the expectant moms!</p>
//         <p className="mainText-add">If you still have any other questions that you think would be helpful for our visitors, don't hesitate and contact us!</p>
      
               
//         <Link className="center" to="/ContactUs">
//             <button className="btn-contact">Contact Us</button>
//         </Link>
//       </div>
//     </div>

//       <div className="line-container">
//         <div className="line"></div>
//       </div>

//     {dataFrontMain.map(element => {
//       const {id, image, text} = element;
//       return(
//         <div className="">
//           <div className = {`${id%2 === 0 ? "firstTab" : "firstTabReverse"}`} key = {id}>
//             <div className="tab">
//               <img src={image} className="image" alt="imageFirstPage" width={400}/>
//             </div>
//             <div className="tab">
//               <p className="mainText" >{text}</p>
//             </div>
//           </div>

//           <div className="line-container">
//             <div className="line"></div>
//           </div>
//       </div>
//       )
//     })}
//   </div>

// )}
// export default Home;



import Video from "./Video";
import dataFrontMain from "./dataFrontMain";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


import { Link } from "react-router-dom";

function Home() {
    useGSAP(
      ()=> {
        gsap.from ('.tab', {x:-200, stagger: 0.3, opacity:0})
      }
    )
    return(
    <div className="mainPagePositioning">

    <div className="container-two-practice">
      <div className="tab">
        <Video/>
        <div className="tab-two">
          <div className="tab-two-text">
          <p className="mainText">Welcome to our website where we tried to collect the major information for the expectant moms!</p>
          <p className="mainText-add">If you still have any other questions that you think would be helpful for our visitors, don't hesitate and contact us!</p>
          </div>
          
          <Link className="center" to="/ContactUs">
            <button className="btn-contact">Contact Us</button>
          </Link>
        </div>
      </div >
    </div>

      <div className="line-container">
        <div className="line"></div>
      </div>

    {dataFrontMain.map(element => {
      const {id, image, text} = element;
      return(
        <div key = {id}>
          <div className = {`${id%2 === 0 ? "firstTab" : "firstTabReverse"}`} >
            <div className="tab tab-mar">
              <img src={image} className="image" alt="imageFirstPage" width={400}/>
            </div>
            <div className="tab tab-mar">
              <p className = {`${id%2 === 0 ? "mainText-add-reverse" : "mainText-add"}`}>{text}</p>
            </div>
          </div>

          <div className="line-container">
            <div className="line"></div>
          </div>
      </div>
      )
    })}
  </div>

)}
export default Home;