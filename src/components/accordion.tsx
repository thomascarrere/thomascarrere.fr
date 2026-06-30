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
      {items.map((item, index) => {
        const isOpen = ouvert === index;
        const panelId = `faq-panel-${index}`;
        const btnId = `faq-btn-${index}`;
        return (
          <div key={index}>
            <h3 className="m-0">
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOuvert(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer text-sm font-medium text-heading font-[family-name:var(--font-archivo)]"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`text-violet text-xl font-light shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`overflow-hidden px-6 transition-all duration-300 ${
                isOpen ? "max-h-[600px] pb-5" : "max-h-0"
              }`}
            >
              <p className="text-text text-[15px] leading-relaxed">
                {item.reponse}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
