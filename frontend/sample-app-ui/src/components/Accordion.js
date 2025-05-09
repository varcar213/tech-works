import React, { useState } from 'react';
import '../styles/Accordion.scss';

const faqData = [
  {
    question: "What services does Sahasra Synergy offer?",
    answer: "We offer cybersecurity audits, DPDP compliance, penetration testing, ISO 27001 consulting, and more."
  },
  {
    question: "Do you provide cloud security assessments?",
    answer: "Yes, we assess AWS, Azure, and GCP environments to identify and remediate vulnerabilities."
  },
  {
    question: "Can you help us become SOC 2 compliant?",
    answer: "Absolutely. Our experts guide you through readiness, gap analysis, and ongoing monitoring."
  }
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="accordion">
      {faqData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>&#9660;</span>
          </div>
          <div className={`accordion-body ${activeIndex === index ? 'open' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
