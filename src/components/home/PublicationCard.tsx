"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

interface PublicationCardProps {
  title: string;
  journal: string;
  date: string;
  description: string;
  fileUrl: string;
}

export default function PublicationCard({
  title,
  journal,
  date,
  description,
  fileUrl,
}: PublicationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden border border-gray-100 p-6 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-1">
          <strong>Journal:</strong> {journal}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Published:</strong> {date}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#964B00] text-white rounded-lg text-sm font-medium hover:bg-[#7e3f00] transition"
        >
          <FileText size={16} />
          View PDF
        </a>
        <a
          href={fileUrl}
          download
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#964B00] text-[#964B00] rounded-lg text-sm font-medium hover:bg-[#964B00]/10 transition"
        >
          <ExternalLink size={16} />
          Download
        </a>
      </div>
    </motion.div>
  );
}
