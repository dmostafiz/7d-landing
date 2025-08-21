"use client";

import { useState } from "react";

export default function Faqs() {
  const faqs = [
    {
      faqHeading: "Why is this different from a typical course?",
      faqText:
        "This isn’t a course you buy and forget. This is a living, breathing community with live training, updates, and collaboration where members help each other win",
    },
    {
      faqHeading: "Is this just affiliate marketing?",
      faqText:
        "No. We teach multiple paths to online income including affiliate marketing, digital products, network marketing, coaching, and more. Plus offline income like real estate and local businesses",
    },
    {
      faqHeading: "Why is it only $7?",
      faqText:
        "We don’t want tire-kickers or freebie-seekers. $7 filters for action-takers. Our goal isn’t to profit from the fee. It’s to build a thriving community of serious entrepreneurs",
    },
    {
      faqHeading: "What kind of people are inside?",
      faqText:
        "Motivated, like-minded builders. No complainers or hype chasers. Just people who are serious about creating real freedom and helping each other grow.",
    },
    {
      faqHeading: "Do I need experience or an audience?",
      faqText:
        "No. We show you how to start from scratch, build systems, and create income with or without a following",
    },
    {
      faqHeading: "Is there support?",
      faqText:
        "Yes. You’ll have lifetime access to the private chat, weekly masterminds, and direct access to training and Q and A.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="hl-faq cfaq-7J4UTWjSHn noBorder radius0 none">
      {faqs.map((faq, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className={`faq-separated-child hl-faq-child ${
              isActive ? "active" : ""
            }`}
          >
            <div
              className={`hl-faq-child-heading ${isActive ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="hl-faq-child-head">
                <span className="hl-faq-child-heading-text">
                  <h4>
                    {index + 1}: {faq.faqHeading}
                  </h4>
                </span>
              </div>
              <i className="hl-faq-child-heading-icon right fa"></i>
            </div>

            <div
              className="hl-faq-child-panel"
              style={
                isActive ? {} : { padding: "0", height: "0", opacity: "0" }
              }
            >
              <span className="hl-faq-child-item-text item-text">
                <p>{faq.faqText}</p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
