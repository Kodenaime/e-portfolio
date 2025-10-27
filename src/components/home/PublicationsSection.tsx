'use client';

import { motion } from 'framer-motion';

const publications = [
  {
    title: 'Ownership Influence',
    date: 'Dec 2021',
    description:
      'An article exploring the role of ownership and accountability in effective leadership and organizational performance.',
    link: 'https://www.linkedin.com/in/matthew-ogieva/',
  },
  {
    title: 'Engaging the Next Gen',
    date: 'Feb 2020',
    description:
      'A thought piece on managing generational diversity and empowering the modern workforce to thrive.',
    link: 'https://www.linkedin.com/in/matthew-ogieva/',
  },
  {
    title: 'Creating the Workforce of the Future',
    date: 'May 2019',
    description:
      'Keynote insights on how organizations can adapt HR strategies to prepare for future work dynamics.',
    link: 'https://www.linkedin.com/in/matthew-ogieva/',
  },
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-gray-900 mb-8 text-center"
        >
          Publications & Highlights
        </motion.h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {pub.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{pub.date}</p>
              <p className="text-gray-700 mb-4">{pub.description}</p>
              <a
                href={pub.link}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
