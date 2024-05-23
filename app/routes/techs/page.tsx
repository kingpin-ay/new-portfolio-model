"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { everyDayLifeTools } from '@/app/lib/data/techStack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Techs = () => {

  const mainContainer = useRef(null);
  const revealDefaultCss = `translate-y-[100px] opacity-0`;

  useGSAP(
    () => {
      gsap.to(".reveal", { y: 0, duration: 1, ease: "power4.in", opacity: 1, delay: 1 }); // <-- automatically reverted
      gsap.to(".reveal2", { y: 0, duration: 1, ease: "power4.in", opacity: 1, delay: 2 }); // <-- automatically reverted
      gsap.to(".reveal3", { y: 0, duration: .5, ease: "power4.in", opacity: 1, delay: 2.5 }); // <-- automatically reverted

      const tl = gsap.timeline({ delay: 3 });
      tl.to(".fade-in", { opacity: 1, ease: "power3.in", duration: 1 });
      tl.pause();
      tl.resume();


      const tl_icon = gsap.timeline({ delay: 3 });
      tl_icon.to(".icon-come-right", { x: 0, ease: "power3.in", duration: 1.5 });
      tl_icon.pause();
      tl_icon.resume();

      const tl_text = gsap.timeline({ delay: 3 });
      tl_text.to(".text-come-left", { x: 0, ease: "power3.in", duration: 1.5 });
      tl_text.pause();
      tl_text.resume();
    },
    { scope: mainContainer }
  );


  return (
    <>
      <div className="container" >
        <div className="max-w-md" ref={mainContainer}>
          <h1 className={`text-4xl font-bold reveal ${revealDefaultCss}`}>
            Tools and Techs I use to Develop!
          </h1>

          <p className={`my-4 reveal2 ${revealDefaultCss}`}>
            I mainly Work on <span className="text-secondary">Full Stack Projects</span> , Now there Is another part of me who work on Complex things like which I can use In my real life , Then There is <span className='text-secondary'>Embedded systems</span> , <span className='text-secondary'>Block-Chain</span>, Trying out new Stuff along this journey.
          </p>


          <div className={"container flex flex-col justify-center items-start w-full gap-4 my-4"}>
            <h3 className={`font-bold reveal3 ${revealDefaultCss}`}>
              Personal Preference :-
            </h3>
            {everyDayLifeTools.map((eachItem, index) =>
              <div key={index} className={`w-full opacity-0 flex gap-4 items-center fade-in`}>
                <div className={`icon-come-right -translate-x-9 w-8`}>
                  <FontAwesomeIcon size={"xl"} icon={eachItem.icon} />
                </div>
                <p className={`text-come-left translate-x-9`}>
                  {eachItem.name} <span className='text-success'>( {eachItem.context} )</span>
                </p>
              </div>)
            }
          </div>
        </div >
      </div >
    </>
  );
};

export default Techs;
