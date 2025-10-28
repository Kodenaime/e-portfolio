"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';

import { mockArtifacts } from '@/data/mockData';
import ArtifactCard from '@/components/artifacts/ArtifactCard';
import SkillsSection from '@/components/home/SkillsSection';
import PublicationsSection from '@/components/home/PublicationsSection';

export default function Home() {
  
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeInOut' },
  } as const; 

  return (
    <div className="flex mt-7 md:mt-10 flex-col gap-24 md:gap-32">
     
      {/* 3. Wrap section in motion.div */}
      <motion.section
        className="container pt-16 md:pt-24"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={sectionAnimation.transition}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-text mb-6">
              Human Capital Management Consultant | Leadership & Organizational Development | Workforce Strategy
            </h1>
            <p className="font-sans text-lg text-gray-700 max-w-lg mb-8">
              Matthew Ogieva (ACIPM, SHRM-SCP) is a dynamic People Management Consultant who provides strategic workforce solutions, helping organizations optimize their human capital potential. He has over a decade of experience driving leadership transformation, people engagement, and business performance improvement across multiple sectors.
              
            </p>
            <Link
              href="/artifacts"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors text-lg"
            >
              Explore My Work <FaArrowRight />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-130 md:h-135 rounded-sm overflow-hidden">
            <Image
              src="/hero.jpg" 
              alt="A professional photo of the consultant"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </motion.section>

      {/* skills section component */}
      <SkillsSection />

      {/*
      --- 2. SERVICES SECTION ---
      */}
      <motion.section
        className="container"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={sectionAnimation.transition}
      >
        <h2 className="font-display text-4xl font-bold text-center mb-12">
          How I Can Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <FaCheckCircle className="text-accent text-3xl mb-4" />
            <h3 className="font-display text-2xl font-semibold mb-2">
               People Management Consulting
            </h3>
            <p className="font-sans text-gray-700">
              Strategic advisory on people management, talent optimization, and HR systems.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <FaCheckCircle className="text-accent text-3xl mb-4" />
            <h3 className="font-display text-2xl font-semibold mb-2">
              Review of Existing Policies
            </h3>
            <p className="font-sans text-gray-700">
              Evaluate and align HR or people-related policies to drive compliance and efficiency.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <FaCheckCircle className="text-accent text-3xl mb-4" />
            <h3 className="font-display text-2xl font-semibold mb-2">
              Public Speaking & Change Management Engagements
            </h3>
            <p className="font-sans text-gray-700">
              Deliver workshops and keynotes on leadership, organizational transformation, and change management.
            </p>
          </div>
           {/* Service 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <FaCheckCircle className="text-accent text-3xl mb-4" />
            <h3 className="font-display text-2xl font-semibold mb-2">
              Executive Coaching
            </h3>
            <p className="font-sans text-gray-700">
              Helping leaders and managers build effective teams and drive high impact results.
            </p>
          </div>
        </div>
      </motion.section>

      
      <motion.section
        className="container"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={sectionAnimation.transition}
      >
        <h2 className="font-display text-4xl font-bold text-center mb-12">
          Featured Work
        </h2>
        {/* We slice the mock data to only show the first 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArtifacts.slice(0, 3).map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/artifacts"
            className="inline-flex items-center gap-2 bg-secondary text-primary font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors text-lg"
          >
            View All Artifacts
          </Link>
        </div>
      </motion.section>

      {/* publications section component  */}
      <PublicationsSection />

      
      <motion.section
        className="w-full bg-secondary py-20"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={sectionAnimation.transition}
      >
        <div className="container text-center max-w-3xl">
          <div>
            <FaQuoteLeft className="text-primary text-4xl mb-6 mx-auto" />
            <p className="font-display text-3xl font-medium text-text mb-6">
              “Matthew is an exceptional HR leader with a deep understanding of people, strategy, and culture. His insights and leadership have transformed how our team operates.”
            </p>
            <p className="font-sans text-xl font-bold text-gray-700">
              Anthony Awobajo, Group Head, HR (Mutual Benefits Assurance Plc)
            </p>
          </div>

          <div className='mt-5'>
            <FaQuoteLeft className="text-primary text-4xl mb-6 mx-auto" />
            <p className="font-display text-3xl font-medium text-text mb-6">
              “He brings both professionalism and empathy to his consulting engagements. A truly results-driven HR strategist.”
  
            </p>
            <p className="font-sans text-xl font-bold text-gray-700">
              Berry Omorodion, HR Consultant
            </p>
          </div>
        </div>
       
      </motion.section>
    </div>
  );
}