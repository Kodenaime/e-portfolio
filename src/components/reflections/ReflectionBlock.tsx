import React from 'react';
import { IReflection } from '@/types'; 


interface ReflectionBlockProps {
  reflection: IReflection;
}

const ReflectionBlock = ({ reflection }: ReflectionBlockProps) => {
  return (
     <article className="py-8 border-b border-gray-200">
      
      <h2 className="font-display text-3xl font-bold text-text mb-2">
        {reflection.title}
      </h2>

      
      <time className="font-sans text-sm italic text-gray-500">
        {reflection.date}
      </time>

     
      <p className="font-sans text-lg leading-relaxed text-gray-700 mt-4">
        {reflection.reflection}
      </p>
    </article>
  );
};

export default ReflectionBlock;