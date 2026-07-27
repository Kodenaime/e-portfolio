'use client';

import { motion } from 'framer-motion';
import BookCard from './BookCard';
import PublicationCard from "./PublicationCard";
import { publicationsData } from "@/data/mockData";



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



      </div>
    </section>
  );
}
