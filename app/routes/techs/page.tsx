"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { everyDayLifeTools } from '@/app/lib/data/techStack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Techs = () => {

  const mainContainer = useRef(null);

  useGSAP(
    () => {
      gsap.from(".reveal", { y: 100, duration: 1, ease: "power4.in", opacity: 0, delay: 0.5, stagger: 0.6 }); // <-- automatically reverted
      gsap.from(".element-come-from-right", { x: 100, duration: 1, ease: "power4.in", opacity: 0, delay: 2.5, stagger: 0.6 }); // <-- automatically reverted
    },
    { scope: mainContainer }
  );


  return (
    <>
      <div className="container" >
        <div className="max-w-md" ref={mainContainer}>
          <h1 className={`text-4xl font-bold reveal `}>
            Tools and Techs I use to Develop!
          </h1>

          <p className={`my-4 reveal`}>
            I mainly Work on <span className="text-secondary">Full Stack Projects</span> , Now there Is another part of me who work on Complex things like which I can use In my real life , Then There is <span className='text-secondary'>Embedded systems</span> , <span className='text-secondary'>Block-Chain</span>, Trying out new Stuff along this journey.
          </p>


          <div className={"container flex flex-col justify-center items-start w-full gap-4 my-4"}>
            <h3 className={`font-bold reveal `}>
              Personal Preference :-
            </h3>
            {everyDayLifeTools.map((eachItem, index) =>
              <div key={index} className={`w-full flex gap-4 items-center fade-in`}>
                <div className={`element-come-from-right w-6`}>
                  <FontAwesomeIcon size={"xl"} icon={eachItem.icon} />
                </div>
                <p className={`element-come-from-right`}>
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
