import React from "react";

const footer = [
  {
    name: "home",
    value: "#home",
  },
  {
    name: "projects",
    value: "projects",
  },
  {
    name: "testimonials",
    value: "#testimonials",
  },
  {
    name: "FAQs",
    value: "#faqs",
  },
  {
    name: "contact",
    value: "#contact",
  },
];
const Footer = () => {
  return (
    <footer
      className="md:px-8 px-6 mb-0 pt-10 mt-12 bg-black text-gray-100"
      id="contact"
    >
      <div className="grid md:grid-cols-8 py-10 gap-8 md:gap-8 items-center">
        <div className="md:col-span-6">
          <div className="flex items-center   justify-center gap-6 md:justify-start">
            <div className="h-4 w-4 animate-ping duration-150 bg-green-400 rounded-full" />
            <h2 className="uppercase ">One spot available for next month</h2>
          </div>
          <div>
            <h2 className="text-3xl mt-6 md:text-6xl">
              Enough talk. Let&apos;s make something great together
            </h2>
            <button className="mt-6 flex gap-8 border border-orange-400 border-dotted p-2 rounded-lg">
              <div>
                <h2 className="uppercase text-lg">info@alextaylor.com</h2>
              </div>
              <div>
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
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-8 md:col-span-2">
          {footer.map(({ name, value }, index) => (
            <div key={name}>
              <a href={value} className="uppercase md:text-xl">
                {name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center pt-8  text-sm text-gray-500   cursor-pointer">
        &copy; {new Date().getFullYear()} Goodee. All rights reserved.
      </footer>
    </footer>
  );
};

export default Footer;
