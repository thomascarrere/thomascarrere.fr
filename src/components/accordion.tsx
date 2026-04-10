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
    <div className="bg-white border border-border rounded-xl overflow-hidden divide-y divide-border">
      {items.map((item, index) => (
        <div
          key={index}
          className="px-6 py-5 cursor-pointer"
          onClick={() => setOuvert(ouvert === index ? null : index)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-heading">{item.question}</h3>
            <span
              className={`text-violet text-xl font-light shrink-0 ml-4 transition-transform duration-300 ${
                ouvert === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
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
