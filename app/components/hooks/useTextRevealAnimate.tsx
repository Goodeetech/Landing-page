import React, { useEffect } from "react";
import { useAnimate, stagger } from "motion/react";
import SplitType from "split-type";

const useTextRevealAnimate = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;
    new SplitType(scope.current, {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  const entranceAnimation = () => {
    if (!scope.current) return Promise.resolve();
    return animate(
      scope.current.querySelectorAll(".word"),
      {
        "--tw-translate-y": "0%",
      },
      {
        duration: 0.5,
        delay: stagger(0.15),
      }
    );
  };

  const exitAnimation = () => {
    if (!scope.current) return Promise.resolve(); // Prevent null errors

    return animate(
      scope.current.querySelectorAll(".word"),
      {
        // Override Tailwind
        "--tw-translate-y": "100%",
      },
      {
        duration: 0.3,
        delay: stagger(-0.025, {
          startDelay: scope.current.querySelectorAll(".word").length * 0.025,
        }),
      }
    );
  };

  return {
    scope,
    entranceAnimation,
    exitAnimation,
  };
};

export default useTextRevealAnimate;
