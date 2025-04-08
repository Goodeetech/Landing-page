"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
const faqs = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with the product, you can request a refund within 30 days of purchase.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we provide 24/7 customer support through email and live chat. Our team is always ready to assist you.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade your plan at any time from your account settings or by contacting our support team.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to sign up.",
  },
  {
    question: "Do you have a mobile app?",
    answer:
      "Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play.",
  },
];

const FAQ = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <section className="md:px-10 px-6 py-16 mt-12" id="faq">
      <h2 className="text-4xl md:text-6xl">FAQs</h2>
      <div className="flex flex-col  mt-10 cursor-pointer">
        {faqs.map(({ question, answer }, index) => (
          <div key={index}>
            <div
              className={clsx(
                "flex justify-between items-center border-t last:border-b border-stone-300 py-4"
              )}
              onClick={() => {
                if (selectedIndex === index) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(index);
                }
              }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl">{question}</h2>
              </div>
              <div
                className={twMerge(
                  "p-2 border border-stone-400 rounded-full transition duration-500 ",
                  index === selectedIndex && "rotate-45"
                )}
              >
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
            <AnimatePresence>
              {selectedIndex === index && (
                <motion.div
                  className=" overflow-hidden "
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <p className="bg-stone-100 p-4 text-xl">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
