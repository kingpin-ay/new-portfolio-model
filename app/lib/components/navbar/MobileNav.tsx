"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, routeCollection } from "../../data/route";
import { IonIcon } from "@ionic/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  linkAppearAnimationVariant,
  linkContainerAnimationVariants,
  navScreenVariant,
} from "../../animation/navbarVariants";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {!isNavOpen && (
        <div
          className="fixed right-12 top-12 md:hidden text-neutral-50"
          onClick={() => {
            setIsNavOpen(true);
          }}
        >
          Open
        </div>
      )}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            variants={navScreenVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full flex flex-col justify-between absolute origin-top bg-main backdrop-blur-md md:hidden text-neutral-50 p-8"
          >
            <motion.div className="flex justify-between p-4 items-center">
              <motion.p className="font-bold text-lg">Ayush</motion.p>
              <motion.p
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                Close
              </motion.p>
            </motion.div>
            <motion.div
              variants={linkContainerAnimationVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              className="flex flex-col justify-between items-center gap-4"
            >
              {routeCollection.map((eachRoute, index) => (
                <div className="overflow-hidden">
                  <LinkRender
                    key={index}
                    eachRoute={eachRoute}
                    pathName={pathname}
                    closeTab={() => {
                      setIsNavOpen(false);
                    }}
                  />
                </div>
              ))}
            </motion.div>
            <motion.a
              href="mailto:ayushmondal001@gmail.com"
              className="underline underline-offset-2 text-center"
            >
              Contact Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const LinkRender = ({
  eachRoute,
  pathName,
  closeTab,
}: {
  eachRoute: Route;
  pathName: string;
  closeTab: () => void;
}) => {
  return (
    <motion.div variants={linkAppearAnimationVariant} onClick={closeTab}>
      <Link href={eachRoute.address}>
        <motion.div
          className={`flex gap-2 items-center font-bold text-md ${
            pathName === eachRoute.address ? "text-extraLight" : ""
          }`}
        >
          <IonIcon icon={eachRoute.iconText}></IonIcon>
          <span>{eachRoute.name}</span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default MobileNav;
