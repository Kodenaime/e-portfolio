"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';

import { mockArtifacts } from '@/data/mockData';
import ArtifactCard from '@/components/artifacts/ArtifactCard';

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
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-6">
              Empowering Leaders, Transforming Teams
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-700 max-w-lg mb-8">
              A brief, approachable statement about who you are, what you do, and
              your professional philosophy.
            </p>
            <Link
              href="/artifacts"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors text-lg"
            >
              Explore My Work <FaArrowRight />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hero.webp" 
              alt="A professional photo of the consultant"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </motion.section>

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <FaCheckCircle className="text-accent text-3xl mb-4" />
            <h3 className="font-display text-2xl font-semibold mb-2">
              Leadership Coaching
            </h3>
            <p className="font-sans text-gray-700">
              One-on-one coaching for new and established leaders to enhance
              their impact.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <FaCheckCircle className="text-accent text-3xl mb-4" />
            <h3 className="font-display text-2xl font-semibold mb-2">
              Team Workshops
            </h3>
            <p className="font-sans text-gray-700">
              Engaging, hands-on workshops on communication, strategy, and team
              cohesion.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <FaCheckCircle className="text-accent text-3xl mb-4" />
            <h3 className="font-display text-2xl font-semibold mb-2">
              Workforce Consulting
            </h3>
            <p className="font-sans text-gray-700">
              Strategic guidance on integrating and developing your professional
              workforce.
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

      
      <motion.section
        className="w-full bg-secondary py-20"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={sectionAnimation.transition}
      >
        <div className="container text-center max-w-3xl">
          <FaQuoteLeft className="text-primary text-4xl mb-6 mx-auto" />
          <p className="font-display text-3xl font-medium text-text mb-6">
            "Working with Matthew was a game-changer. Their insights on
            leadership completely transformed our management approach."
          </p>
          <p className="font-sans text-xl font-bold text-gray-700">
            - Jane Doe, CEO at TechCorp
          </p>
        </div>
      </motion.section>
    </div>
  );
}