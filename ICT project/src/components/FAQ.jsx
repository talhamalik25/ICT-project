import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/programsData';
import SectionHeader from './SectionHeader';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="section-pad bg-[#F4F7FC]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="FAQ" title="Frequently asked questions" subtitle="Quick answers for new admission students" />

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`overflow-hidden rounded-xl border border-[#D6E4F7] bg-white transition-all duration-250 ${
                open === i ? 'border-l-4 border-l-[#003087] bg-[#EBF3FF]' : ''
              }`}
              style={{ marginBottom: open === i ? undefined : '12px' }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-[#0A0A1A]">{item.q}</span>
                <span className={`shrink-0 text-[1.25rem] font-light text-[#003087] transition-all ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-[#D6E4F7] px-5 pb-4 pt-2 text-sm leading-relaxed text-[#4A5568]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
