'use client';

import { motion } from 'framer-motion';

const skills = [
  'Human Capital Strategy',
  'Organizational Development',
  'Leadership & Change Management',
  'Talent Management',
  'Supply Chain HR Consulting',
  'Performance Management Systems',
  'Coaching & Workforce Planning',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-gray-900 mb-8 text-center"
        >
          Core Skills & Expertise
        </motion.h2>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition bg-gray-50"
            >
              <p className="text-gray-800 font-medium text-center">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
