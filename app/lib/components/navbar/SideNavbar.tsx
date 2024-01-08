"use client";
import React from "react";
import { routeCollection } from "@/app/lib/data/route";
import { usePathname } from "next/navigation";
import { IonIcon } from "@ionic/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const SideNavbar = () => {
  const pathname = usePathname();
  return (
    <>
      <MobileNav />
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-main h-full md:flex flex-col gap-3 justify-around p-5 hidden"
      >
        <motion.div className="flex justify-center items-center">
          <Image
            className="rounded-full"
            src={"/dp.jpg"}
            width={200}
            height={200}
            alt="This is a image of Ayush Mondal"
          />
        </motion.div>
        <motion.div className="flex flex-col gap-3 justify-center p-5">
          <p className="font-bold text-3xl text-extraLight">
            Content On this Website
          </p>
          <div className="flex flex-col justify-between text-extraDark ps-1 gap-3">
            {routeCollection.map((eachRoute, index) => (
              <Link href={eachRoute.address} key={index}>
                <motion.div
                  whileHover={
                    eachRoute.address === pathname
                      ? { scale: 0.9, x: 0 }
                      : { scale: 1.1, x: 20 }
                  }
                  whileTap={
                    eachRoute.address === pathname
                      ? { scale: 1.2, x: 20 }
                      : { scale: 0.9, x: 20 }
                  }
                  className={`flex gap-2 items-center font-bold text-xl ${
                    eachRoute.address === pathname
                      ? "scale-110 ps-5 text-neutral-50 hover:text-neutral-300"
                      : "hover:text-neutral-500"
                  }`}
                >
                  <IonIcon icon={eachRoute.iconText}></IonIcon>
                  <span>
                    {eachRoute.name}
                    {eachRoute.address === pathname ? "  ->" : ""}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div className="flex justify-center">
          <p className="font-bold text-md text-extraLight">
            Want to Notify Something ? please{" "}
            <a
              href="mailto:ayushmondal001@gmail.com"
              target="_blank"
              className="text-base-100 underline underline-offset-2"
            >
              contact me {" >"}
            </a>
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SideNavbar;
