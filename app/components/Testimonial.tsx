"use client";
import Image from "next/image";
import React, { useRef } from "react";
import image1 from "../components/images/headshot1.jpg";
import image2 from "../components/images/headshot2.jpg";
import image3 from "../components/images/headshot3.jpg";
import image4 from "../components/images/headshot4.jpeg";

import image5 from "../components/images/headshot5.jpg";
import { motion, useScroll, useTransform } from "motion/react";
import Testi from "./Testi";
const testimonials = [
  {
    name: "John Doe",
    company: "TechWave Solutions",
    role: "Software Engineer",
    quote:
      "This product transformed the way we manage our workflow. Highly recommended!",
    image: image1,
    imagePositionY: "-20px",
  },
  {
    name: "Jane Smith",
    company: "MediCore Labs",
    role: "Data Analyst",
    quote:
      "An absolute game-changer! The ease of use and efficiency is unmatched.",
    image: image2,
    imagePositionY: "0px",
  },
  {
    name: "Robert Johnson",
    company: "FinTech Innovators",
    role: "Product Manager",
    quote:
      "We've seen a 40% increase in productivity since implementing this tool.",
    image: image3,
    imagePositionY: "-10px",
  },
  {
    name: "Emily Davis",
    company: "Creative Minds Agency",
    role: "UI/UX Designer",
    quote:
      "User-friendly and visually stunning! This is exactly what we needed.",
    image: image4,
    imagePositionY: "-30px",
  },
  {
    name: "Michael Brown",
    company: "CloudNet Systems",
    role: "DevOps Engineer",
    quote:
      "Scalable, efficient, and easy to integrate. A must-have for any tech team.",
    image: image5,
    imagePositionY: "-15px",
  },
];

const Testimonial = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const testimonialsIndex = 0;
  return (
    <section className="md:px-10 px-6 py-16 mt-12" id="testimonial">
      <h2
        className="flex flex-col text-5xl md:text-xl lg:text-8xl overflow-hidden"
        ref={scrollRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: transformBottom,
          }}
        >
          Some nice words from my past clients
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-orange-400"
          style={{
            x: transformTop,
          }}
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
      <div className="mt-16">
        {testimonials.map(
          ({ name, company, role, quote, image, imagePositionY }, index) =>
            index === testimonialsIndex && (
              <Testi
                name={name}
                company={company}
                image={image}
                quote={quote}
                role={role}
                key={name}
              />
            )
        )}
      </div>
      <div className="flex items-center gap-6  my-4 ml-6">
        <button className="border  inline-flex items-center border-stone-400 rounded-full p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 lg:size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="border inline-flex items-center border-stone-400 rounded-full p-4 hover:bg-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 lg:size-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
