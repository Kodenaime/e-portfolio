'use client';

import { motion } from 'framer-motion';
import BookCard from './BookCard';
import PublicationCard from "./PublicationCard";
import { publicationsData } from "@/data/mockData";

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

export const books = [
  {
    id: 'book-1',
    title: 'Why A Positive Attitude Is All You Need: Your Cornerstone To Success',
    description:
      'Positive attitude is a very important asset for anyone of us to possess. With the right attitude, we can achieve a great deal in most aspects of our lives because Positive Attitude is a skill which any of us can develop if we have the right training.',
    imageUrl: '/book-1.jpg',
    link: 'https://www.amazon.com/Why-Positive-Attitude-All-Need-ebook/dp/B01EAV0ZBI/ref=sr_1_2?dib=eyJ2IjoiMSJ9.y-4ZPUB65iN9VRbJ41UJiMh5nw_NxZwzaxlAVetMIBU.7_85M003UcI8yr5AVq30ovSd_OADT5xwe_OzM3RmTMM&dib_tag=se&qid=1761666709&refinements=p_27%3AMatthew+Ogieva&s=digital-text&sr=1-2',
  },
  {
    id: 'book-2',
    title: 'Conveying Influence',
    description:
      'Conveying Influence by Matthew Ogieva is a transformative guide that reveals the undeniable connection between influence and leadership. With over 20 years of global consulting experience, Ogieva distills the essence of leadership into a clear and actionable blueprint for success. This book is not just a guide; rather, it is an enlightening exploration of the essence of leading with influence and purpose.',
    imageUrl: '/book-2.jpg',
    link: 'https://www.amazon.com/Conveying-Influence-Matthew-Ogieva-ebook/dp/B0DJKB4WSK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.y-4ZPUB65iN9VRbJ41UJiMh5nw_NxZwzaxlAVetMIBU.7_85M003UcI8yr5AVq30ovSd_OADT5xwe_OzM3RmTMM&dib_tag=se&qid=1761666709&refinements=p_27%3AMatthew+Ogieva&s=digital-text&sr=1-1',
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
         Books & Publications 
        </motion.h2>

        {/* Books Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium mb-6 text-brown-700">Books</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {publicationsData.map((pub) => (
            <PublicationCard key={pub.id} {...pub} />
          ))}
        </div>


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
