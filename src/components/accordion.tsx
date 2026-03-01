"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  reponse: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [ouvert, setOuvert] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-lg p-6 cursor-pointer"
          onClick={() => setOuvert(ouvert === index ? null : index)}
        >
          <div className="flex items-center justify-between">
            <h5 className="text-sm font-medium text-heading">{item.question}</h5>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`text-heading transition-transform duration-300 shrink-0 ml-4 ${
                ouvert === index ? "rotate-180" : ""
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              ouvert === index ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <p className="text-text text-[15px] leading-relaxed">
              {item.reponse}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
