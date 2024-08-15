import { useGSAP } from "@gsap/react";
import {gsap} from "gsap";

function BloodGsapText() {
  useGSAP(
    ()=> {
        gsap.from ('p', {y:-200, duration:0.5, stagger: 0.05, opacity:0})
    }
)
  return(
    <div className="heading-text" >
                <p><span className="colortext">Pregnancy bloodwork </span>is a group of blood tests</p>
                <p>that are done during pregnancy to check</p>
                <p>for diseases, infections, and hormones.</p>
                <p>It can confirm pregnancy, assess</p>
                <p><span className="colortext-two">the health of the mother and the baby,</span> </p>
                <p>and guide treatments.</p>
                <p>Some of these tests are done with </p>
                <p>a<span className="colortext-three"> blood sample.</span></p>
                <p> Others use a urine sample or a sample of fluid taken</p>
                <p>from your vagina, cervix, or rectum.</p>
                <p> These tests can help find conditions that may increase </p>
                <p>the risk of complications for you and your fetus.</p>
                <p> Many problems found by these tests</p>
                <p> can be treated during pregnancy.</p>
            </div>
  )
}
export default BloodGsapText

