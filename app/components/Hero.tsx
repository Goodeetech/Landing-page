"use client";

import React, { useEffect, useRef } from "react";
import photo from "../components/images/photo.jpg";
import Image from "next/image";
import {
  motion,
  useAnimate,
  stagger,
  useScroll,
  useTransform,
} from "motion/react";
import SplitType from "split-type";
const Hero = () => {
  const [titleScope, titleAnimate] = useAnimate();

  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    }),
      titleAnimate(
        titleScope.current.querySelectorAll(".word"),
        {
          "--tw-translate-y": "0%",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
  }, []);
  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="flex flex-col mt-26 md:mt-0 items-start gap-6 p-6 md:px-10 !max-w-full">
            <motion.h1
              ref={titleScope}
              className="text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Crafting digital experience through code and creative design
            </motion.h1>
            <div className="flex flex-col gap-4 md:flex-row items-start md:items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.75,
                }}
              >
                <button className="p-2 my-4  uppercase  border-2 flex gap-2 border-dotted hover:bg-orange-400 hover:text-white transition duration-500 border-orange-400 rounded-xl items-center cursor-pointer group/button">
                  <span>View My work</span>
                  <div className="overflow-hidden size-5">
                    <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2.2,
                }}
                className="relative "
              >
                <button className="uppercase after:content-[''] after:h-px after:w-0 after:top-full after:bg-orange-500 hover:after:w-full after:absolute after:duration-500 after:transition-all after:left-0 cursor-pointer">
                  Let&apos;s Talk
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:size-full md:right-0 md:absolute md:mt-0 max-md:!w-full"
            style={{
              width: portraitWidth,
            }}
          >
            <Image src={photo} alt="photo" className="size-full object-cover" />
          </motion.div>
        </div>
      </div>
      <div ref={scrollingDiv} className="md:h-[200vh]"></div>
    </section>
  );
};

export default Hero;
