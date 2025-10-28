"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdArrowUp } from "react-icons/io";

interface BookCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function BookCard({ title, description, imageUrl, link }: BookCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden border border-gray-100 flex flex-col md:flex-row items-start gap-6 p-6"
    >
      {/* Book Image */}
      <div className="shrink-0 mx-auto md:mx-0">
        <div className="relative w-[145px] h-[218px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-md shadow-sm"
            sizes="(max-width: 768px) 145px, 145px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-md">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#964B00] hover:underline font-medium text-sm"
        >
          View on Amazon <IoMdArrowUp size={16} />
        </a>
      </div>
    </motion.div>
  );
}
