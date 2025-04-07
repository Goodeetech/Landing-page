import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Testi = (
  props: {
    name: string;
    quote: string;
    role: string;
    company: string;
    image: string | StaticImport;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const { name, image, role, company, quote, className, ...rest } = props;
  return (
    <div
      key={name}
      className={twMerge(
        "grid md:grid-cols-5 gap-8 md:items-center lg:gap-16",
        className
      )}
      {...rest}
    >
      <div className="aspect-square md:aspect-[9/16] lg:aspect-[9/10] md:col-span-2">
        <Image src={image} alt={name} className="size-full object-cover" />
      </div>
      <div className="md:col-span-3 items-center">
        <blockquote>
          <div className="text-3xl md:text-4xl lg:text-5xl mt-8">
            <span>&ldquo;</span>
            <span>{quote}</span>
            <span>&rdquo;</span>
          </div>
          <cite className="mt-4 md:mt-6 md:text-lg lg:text-xl w-full block">
            {name}, {role} at {company}
          </cite>
        </blockquote>
      </div>
    </div>
  );
};

export default Testi;
