import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IArtifact } from '@/types';
import { FaExternalLinkAlt } from 'react-icons/fa'; 

interface ArtifactCardProps {
  artifact: IArtifact;
}

const ArtifactCard = ({ artifact }: ArtifactCardProps) => {
  return (
    <div className="flex flex-col h-full bg-white shadow-md rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative w-full h-56">
        <Image
          src={artifact.imageUrl}
          alt={artifact.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Content container */}
      <div className="flex flex-col grow p-6">
        <h3 className="font-display text-2xl font-bold text-text mb-2">
          {artifact.title}
        </h3>

        <p className="font-sans text-base text-gray-700 mb-4 grow">
          {artifact.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {artifact.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-primary rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          {artifact.projectUrl && (
            <Link
              href={artifact.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-semibold text-primary hover:underline"
            >
              <FaExternalLinkAlt />
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;