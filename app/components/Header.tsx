"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";

import { motion, useAnimate } from "motion/react";
import { a } from "framer-motion/client";

const nav = [
  {
    name: "About",
    value: "#intro",
  },
  {
    name: "Selected Works",
    value: "#projects",
  },

  {
    name: "Testimonial",
    value: "#testimonial",
  },
  {
    name: "FAQ",
    value: "#faq",
  },
  {
    name: "Contact",
    value: "#contact",
  },
];

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [upLineScope, upLineAnimate] = useAnimate();
  const [downLineScope, downLineAnimate] = useAnimate();
  const [navScope, navScopeAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      upLineAnimate([
        [upLineScope.current, { translateY: 4 }],
        [
          upLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]),
        downLineAnimate([
          [
            downLineScope.current,
            {
              translateY: -4,
            },
          ],
          [
            downLineScope.current,
            {
              rotate: -45,
            },
          ],
        ]),
        navScopeAnimate([
          [
            navScope.current,
            {
              height: "100%",
            },
            { duration: 0.7 },
          ],
        ]);
    } else {
      upLineAnimate([
        [
          upLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          upLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]),
        downLineAnimate([
          [
            downLineScope.current,
            {
              rotate: 0,
            },
          ],
          [
            downLineScope.current,
            {
              translateY: 0,
            },
          ],
        ]),
        navScopeAnimate([
          [
            navScope.current,
            {
              height: 0,
            },
          ],
        ]);
    }
  }, [isOpen]);

  const handleClickMobileNavIcon = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setisOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="">
      <div
        className="fixed top-0 left-0 h-0 overflow-hidden w-full bg-stone-900 z-10
          "
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col ">
          {nav.map(({ name, value }) => (
            <a
              href={value}
              key={name}
              onClick={handleClickMobileNavIcon}
              className="text-stone-200 last:border-b  py-8 border-t border-stone-600 group   relative  isolate"
            >
              <div className="absolute w-full h-0 bg-stone-800 group-hover:h-full transition-all duration-500 bottom-0 -z-10"></div>
              <div className="!max-w-full md:px-10 px-6 flex justify-between items-center">
                <span className="text-2xl transition-all duration-500 group-hover:pl-4">
                  {name}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </a>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full bg-blend-difference backdrop-blur-md z-50">
        <div className="!max-w-full md:px-10 px-6   ">
          <div className="flex items-center h-16 justify-between">
            <div>
              <a href="/">
                <span className="text-2xl text-orange-700 uppercase  font-bold hover:text-yellow-200 ">
                  Goodee Alex
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full bg-transparent z-50">
        <div className="!max-w-full md:px-10 px-6">
          <div className="flex items-center  h-16 justify-end ">
            <div className="flex items-center justify-between gap-4">
              <div
                className="p-2 rounded-full border-1 border-stone-700 inline-flex justify-center items-center cursor-pointer bg-stone-200 hover:bg-stone-100"
                onClick={() => setisOpen(!isOpen)}
              >
                {/* <svg
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
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg> */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="7"
                    width="18"
                    ref={upLineScope}
                    height="2"
                    fill="currentColor"
                    style={{
                      transformOrigin: "12px 8px",

                      // transform: "translateY(4px) rotate(45deg)",
                    }}
                  />
                  <rect
                    x="3"
                    y="15"
                    width="18"
                    ref={downLineScope}
                    height="2"
                    fill="currentColor"
                    style={{
                      transformOrigin: "12px 16px",
                      // transform: "translateY(-4px) rotate(-45deg)",
                    }}
                  />
                </svg>
              </div>
              <button className="p-2 bg-orange-400 text-white rounded-xl items-center hidden md:inline-flex  justify-center cursor-pointer">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
