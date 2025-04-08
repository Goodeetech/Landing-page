import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, {
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useEffect,
} from "react";
import { twMerge } from "tailwind-merge";
import useTextRevealAnimate from "./hooks/useTextRevealAnimate";
import { usePresence, motion } from "motion/react";

const Testi = (
  props: {
    name: string;
    quote: string;
    role: string;
    company: string;
    image: string | StaticImport;
    className?: string;
    isAnimating: boolean; // ✅ Add this
    setIsAnimating: Dispatch<SetStateAction<boolean>>;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const {
    name,
    image,
    role,
    company,
    quote,
    className,
    setIsAnimating,
    isAnimating,
    ...rest
  } = props;
  const {
    scope: quoteScope,
    entranceAnimation: animateQuote,
    exitAnimation: exitAnimationQuote,
  } = useTextRevealAnimate();

  const [isPresent, safeToRemove] = usePresence();
  const {
    scope: citeScope,
    entranceAnimation: animateCite,
    exitAnimation: exitAnimationCite,
  } = useTextRevealAnimate();

  useEffect(() => {
    if (isPresent) {
      setIsAnimating(true);
      animateQuote().then(() => {
        animateCite().then(() => {
          setIsAnimating(false);
        });
      });
    } else {
      Promise.all([exitAnimationQuote(), exitAnimationCite()]).then(() => {
        safeToRemove(); // Ensure removal happens only after exit animation
      });
    }
  }, [isPresent]);

  return (
    <div
      key={name}
      className={twMerge(
        "grid md:grid-cols-5 gap-8 md:items-center lg:gap-16",
        className
      )}
      {...rest}
    >
      <div className="aspect-square md:aspect-[8/12]  lg:aspect-[10/9] md:col-span-2 relative">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{
            width: "100%",
          }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.4 }}
        ></motion.div>

        <Image
          src={image}
          alt={name}
          priority
          className="size-full object-cover"
        />
      </div>
      <div className="md:col-span-3 items-center">
        <blockquote>
          <div
            className="text-3xl md:text-4xl lg:text-6xl mt-8"
            ref={quoteScope}
          >
            <span>&ldquo;</span>
            {quote}
            <span>&rdquo;</span>
          </div>
          <cite
            className="mt-4 md:mt-6 md:text-lg lg:text-xl w-full block"
            ref={citeScope}
          >
            {name}, {role} at {company}
          </cite>
        </blockquote>
      </div>
    </div>
  );
};

export default Testi;
