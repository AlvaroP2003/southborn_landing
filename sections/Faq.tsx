"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqData = [
    {
      question: "Where is Southborn based?",
      answer:
        "Southborn is a proudly South African gym and streetwear brand, designed and run locally.",
    },
    {
      question: "Do you have a physical store I can visit?",
      answer:
        "We're currently online-only, which lets us keep prices competitive and focus on getting new drops to you faster. You can browse and shop the full Southborn collection right here on our website.",
    },
    {
      question: "Do you ship outside of South Africa?",
      answer:
        "Right now Southborn only ships within South Africa. We're focused on serving local customers first, with international shipping on the roadmap as we grow.",
    },
    {
      question:
        "What makes Southborn different from other gym and streetwear labels?",
      answer:
        "South Africa is massive and deserves its own—not a copy of overseas trends. We build for the local community first, giving people what they actually want instead of chasing what's big somewhere else.",
    },
    {
      question: "Who's behind Southborn?",
      answer:
        "We're two brothers bootstrapping this from the ground up—proudly South African, self-funded, and building something real for our community.",
    },
    {
      question: "Why the name Southborn?",
      answer:
        "The name wasn't overthought—it just came to us, and once it did, it screamed South Africa. Southborn means born in South Africa, and that's exactly what we're building around.",
    },
    {
      question:
        "Is Southborn clothing designed for the gym, the street, or both?",
      answer:
        "Both, without compromise. Southborn pieces are made to be worn anywhere—straight from your workout into the rest of your day.",
    },
    {
      question:
        "Does Southborn collaborate with local athletes, gyms, or creators?",
      answer:
        "Yes—we're actively working to team up with local influencers, gyms, and creators who represent the community we're building for, helping us grow together.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        id="faq"
        className="flex flex-col lg:flex-row justify-between px-5 lg:px-50 py-20"
      >
        <div className="flex-1">
          <h1 className="text-4xl lg:text-6xl text-white">QUESTIONS ANSWERED</h1>
        </div>

        <div className="flex-1">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="border-b border-neutral-700">
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : i)
                  }
                  className="flex w-full items-center justify-between py-4 lg:py-6 text-left cursor-pointer"
                >
                  <h3 className="lg:text-lg text-neutral-200 pr-6">
                    {item.question}
                  </h3>

                  <ChevronLeft
                    size={22}
                    className={`text-white transition-transform duration-300 ${
                      isOpen ? "-rotate-90" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs lg:text-sm leading-7 text-neutral-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}