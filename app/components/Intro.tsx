"use client";
import { useAnimate, useInView, stagger } from "motion/react";
import React, { useEffect } from "react";
import SplitType from "split-type";

const Intro = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          "--tw-translate-y": "0%",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView]);

  return (
    <section
      className="md:px-10 px-6 my-20 py-16 md:py-16  md:mt-16 lg:max-w-5xl"
      id="intro"
      ref={scope}
    >
      <h2 className="text-5xl md:text-7xl">
        Building beautiful website with clean code and thoughtful design to help
        your business grow and stand out online
      </h2>
    </section>
  );
};

export default Intro;
