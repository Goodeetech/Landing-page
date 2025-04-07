import React from "react";
import image1 from "../components/images/image1.jpeg";
import image2 from "../components/images/image2.jpg";
import image3 from "../components/images/image3.jpg";
import image4 from "../components/images/image4.jpg";
import Image from "next/image";
import Link from "next/link";
import { div } from "framer-motion/client";

const projects = [
  {
    name: "Artisan Brew",
    image: image1,
  },
  {
    name: "Bloom Botanicals",
    image: image2,
  },
  {
    name: "Nova Fitness",
    image: image3,
  },
  {
    name: "Urban Plates",
    image: image4,
  },
];

const Projects = () => {
  return (
    <section className="md:px-10 px-4 py-16" id="projects">
      <h1 className="text-4xl md:text-6xl">Selected Works</h1>
      <div className="mt-10 lg:mt-14 ">
        {projects.map((project) => {
          return (
            <a href="" key={project.name}>
              <div className="mt-10 p-2 border-b border-stone-400 border-dotted  relative group">
                <div className="absolute bottom-0 duration-700 w-full h-0 left-0 group-hover:h-full transition-all bg-stone-300 -z-20  "></div>
                <div className="aspect-video md:hidden relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    height={200}
                    width={200}
                    className="size-full object-contain "
                  />
                </div>

                <div className="flex justify-between mt-2 md:mt-0 md:text-3xl text-xl py-2 lg:text-4xl  md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                  <h3>{project.name}</h3>
                  <div className="relative ">
                    <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2  opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-10">
                      <Image
                        src={project.image}
                        alt={project.name}
                        height={200}
                        width={200}
                        className="size-full object-contain "
                      />
                    </div>
                  </div>
                  <div className="size-6 overflow-hidden">
                    <div className="group-hover:-translate-x-1/2 transition-transform duration-400  flex h-6 w-12">
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
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
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
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
