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
            <div className="mb-2 text-sm md:text-base font-semibold text-gray-500 tracking-wide">
               Matthew Ogieva, BSc., MSc., MBA, CMC, FIMC, FIMS, CMILT, AEE, ASEM
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-text mb-6 leading-tight">
               Reimagining Leadership. <br className="hidden md:block"/> Transforming Organizations. <br className="hidden md:block"/> Driving Impact.
            </h1>
            <div className="font-sans text-lg text-gray-700 max-w-lg mb-8 space-y-4">
              <p>
                <b>Matthew Ogieva</b> is an accomplished management consultant and leadership professional who helps organizations align strategy, operations, and people to achieve sustainable growth. By leveraging expertise in engineering management, systems thinking, and organizational development, he partners with executives and entrepreneurs to navigate complex challenges and build high-performing institutions.
              </p>
              <p>
                His approach distinguishes him from traditional leadership coaches by combining technical rigor with business acumen. This unique ability to bridge engineering principles with executive leadership enables organizations to transform vision into execution while fostering innovation and operational excellence.
              </p>
            </div>
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
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Engineering Management', desc: 'Aligning technical operations and business objectives to improve efficiency and innovation.' },
            { title: 'Leadership Development', desc: 'Equipping leaders to inspire teams, build trust, and lead organizational change.' },
            { title: 'Business Transformation', desc: 'Guiding organizations through strategic growth and cultural transformation.' },
            { title: 'Operations & Process Excellence', desc: 'Applying engineering principles to streamline workflows and enhance effectiveness.' },
            { title: 'Organizational Development', desc: 'Building high-performing teams and strengthening workplace culture.' },
            { title: 'Executive Coaching', desc: 'Supporting leaders in developing influence, decision-making, and presence.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <FaCheckCircle className="text-accent text-3xl mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-gray-700">
                {item.desc}
              </p>
            </div>
          ))}
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
        className="container py-16"
        initial={sectionAnimation.initial}
        whileInView={sectionAnimation.animate}
        viewport={{ once: true }}
        transition={sectionAnimation.transition}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-display text-2xl font-bold mb-6">Speaking Topics</h3>
            <ul className="space-y-3 font-sans text-gray-700 list-disc pl-5 marker:text-accent">
              <li>Engineering Leadership in a Changing World</li>
              <li>Redefining Influence in Modern Organizations</li>
              <li>Building High-Performance Teams</li>
              <li>Leadership Beyond Authority</li>
              <li>Business Transformation and Organizational Growth</li>
              <li>Strategic Thinking for Emerging Leaders</li>
              <li>Leading Through Change and Uncertainty</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-display text-2xl font-bold mb-6">Why Organizations Work with Matthew</h3>
            <ul className="space-y-3 font-sans text-gray-700 list-disc pl-5 marker:text-accent">
              <li>Combined engineering and business expertise</li>
              <li>Extensive leadership development and transformation experience</li>
              <li>Strategic and operational insight</li>
              <li>People-centered leadership philosophy</li>
              <li>Practical, results-driven solutions</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center max-w-4xl mx-auto border-t-4 border-primary">
          <h2 className="font-display text-3xl font-bold mb-4">Work With Matthew</h2>
          <p className="font-sans text-lg text-gray-700 mb-6">
            Matthew partners with corporations, educational institutions, nonprofits, and government agencies to strengthen leadership capacity and improve performance.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 text-sm md:text-base font-medium text-primary bg-primary/5 p-4 rounded-lg">
            <span>Consulting</span> <span className="hidden md:inline">•</span> <span>Speaking</span> <span className="hidden md:inline">•</span> <span>Executive Coaching</span> <span className="hidden md:inline">•</span> <span>Leadership Development</span> <span className="hidden md:inline">•</span> <span>Engineering Management Advisory</span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold mb-8">Ready to transform your leadership and build a stronger organization?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/contact" className="bg-primary text-white py-3 px-6 rounded-md font-bold hover:bg-opacity-90 transition">Schedule a Consultation</Link>
             <Link href="/contact" className="bg-secondary text-primary py-3 px-6 rounded-md font-bold hover:bg-opacity-80 transition border border-primary/20">Book for Speaking</Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="w-full bg-secondary py-20"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
        transition={sectionAnimation.transition}
      >
        <div className="container text-center max-w-3xl">
          <div>
            <FaQuoteLeft className="text-primary text-4xl mb-6 mx-auto" />
            <h2 className="font-display text-2xl font-bold text-text mb-2 text-center uppercase tracking-widest">
               Signature Philosophy
            </h2>
            <p className="font-display text-3xl font-medium text-text mb-6">
              “Influence is not about control. It is about connection.”
            </p>
            <p className="font-sans text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              Success is built by leaders who unite people around a shared vision, create systems that support excellence, and inspire meaningful action.
            </p>
          </div>

          <div className='mt-16'>
            <FaQuoteLeft className="text-primary text-4xl mb-6 mx-auto" />
            <p className="font-display text-3xl font-medium text-text mb-6">
              “Matthew is an exceptional leader with a deep understanding of people, strategy, and culture. His insights and leadership have transformed how our team operates.”
            </p>
            <p className="font-sans text-xl font-bold text-gray-700">
              Anthony Awobajo, Group Head, HR (Mutual Benefits Assurance Plc)
            </p>
          </div>
        </div>
       
      </motion.section>
    </div>
  );
}