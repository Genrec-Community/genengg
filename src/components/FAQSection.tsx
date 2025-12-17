"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
  category?: string
}

const faqData: FAQItem[] = [
  {
    question: "What is structural steel detailing?",
    answer: "Structural steel detailing is the process of creating detailed drawings and specifications for the fabrication and erection of steel structures. It involves preparing shop drawings, erection plans, and connection details that comply with engineering designs and industry standards such as AISC, BS, and Canadian codes. Gen Engineering provides comprehensive structural steel detailing services for commercial, industrial, and infrastructure projects worldwide.",
    category: "Services"
  },
  {
    question: "What is AISC certification and why is it important?",
    answer: "AISC (American Institute of Steel Construction) certification demonstrates that a company meets rigorous quality standards for steel fabrication and erection. Gen Engineering INC is AISC certified, which means our processes, personnel, and quality control systems have been independently verified to meet industry-leading standards. This certification ensures clients receive high-quality, code-compliant structural steel detailing services.",
    category: "Quality & Standards"
  },
  {
    question: "What is BIM and how does it benefit construction projects?",
    answer: "Building Information Modeling (BIM) is a digital representation of the physical and functional characteristics of a building. BIM enables multidisciplinary coordination, clash detection, quantity estimation, and 4D scheduling. Gen Engineering provides BIM services including 3D structural models, IFC models for coordination, clash detection reports, and 4D erection scheduling, which reduce errors, improve collaboration, and optimize project timelines.",
    category: "Technology"
  },
  {
    question: "What industries does Gen Engineering serve?",
    answer: "Gen Engineering INC serves diverse industries including industrial facilities, commercial buildings, mining infrastructure, bridge and highway construction, residential projects, and retrofit/renovation work. Our structural engineering and steel detailing expertise applies to any project requiring steel structures, from small commercial buildings to large industrial complexes.",
    category: "Services"
  },
  {
    question: "What standards and codes does Gen Engineering follow?",
    answer: "Gen Engineering provides services compliant with international standards including AISC (American), BS (British Standards), CAN (Canadian), European codes, OSHA safety standards, South African standards, and Indian standards (IS codes). We also maintain ISO 9001:2015-aligned quality processes to ensure consistent, high-quality deliverables across all projects.",
    category: "Quality & Standards"
  },
  {
    question: "How long does structural steel detailing typically take?",
    answer: "The timeline for structural steel detailing depends on project size and complexity. Small projects may take 2-4 weeks, while large commercial or industrial projects can take 8-16 weeks or more. Gen Engineering works with clients to establish realistic schedules and provides dedicated project management to ensure timely delivery. Contact us with your project details for a specific timeline estimate.",
    category: "Project Timeline"
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1F3B64] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            <HelpCircle className="w-4 h-4" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Common Questions About
            <br />
            <span className="text-[#1F3B64]">Our Engineering Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to frequently asked questions about structural steel detailing, BIM services, and our engineering processes.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#1F3B64] transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <div className="flex-1 pr-4">
                  {faq.category && (
                    <span className="inline-block text-xs font-semibold text-[#1F3B64] bg-blue-50 px-3 py-1 rounded-full mb-2">
                      {faq.category}
                    </span>
                  )}
                  <h3 itemProp="name" className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-6 md:px-8 pb-6 pt-2">
                      <div className="prose prose-lg max-w-none">
                        <p itemProp="text" className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-[#1F3B64] to-[#003366] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-200 text-lg mb-6">
              Our team is here to help. Contact us for personalized answers to your project questions.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-[#1F3B64] hover:bg-gray-100 font-semibold rounded-full px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
