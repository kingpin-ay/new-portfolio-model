"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Techs = () => {

  const mainContainer = useRef(null);
  const revealDefaultCss = `translate-y-[100px] opacity-0`;

  useGSAP(
    () => {
      gsap.to(".reveal", { y: 0, duration: 1, ease: "power4.in", opacity: 1, delay: 1 }); // <-- automatically reverted
      gsap.to(".reveal2", { y: 0, duration: 1, ease: "power4.in", opacity: 1, delay: 2 }); // <-- automatically reverted
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
        </div >
      </div >
    </>
  );
};

export default Techs;
