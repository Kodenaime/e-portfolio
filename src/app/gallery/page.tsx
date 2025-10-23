import Image from 'next/image';
import React from 'react';

export default function GalleryPage() {
  return (
    <section className="container py-12 mt-7 md:mt-10">
      <h1 className="font-display text-4xl font-bold">Gallery</h1>
      <p className="font-sans text-lg text-gray-700 mt-4 max-w-3xl">
        See our consultant in action, engaging audiences at national conferences,
        leading intensive corporate workshops, and empowering professionals to
        reach their potential.
      </p>

      <h2 className="font-display text-3xl font-semibold mt-16 mb-6 border-b-2 border-primary pb-2">
        Keynote Speaking & Events
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <Image
          src="/gallery-1.webp"
          alt="Consultant speaking on stage at a leadership conference."
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full aspect-square shadow-md"
        />
        <Image
          src="/gallery-2.webp"
          alt="Consultant sitting on a panel discussion with other industry experts."
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full aspect-square shadow-md"
        />
        <Image
          src="/gallery-3.webp"
          alt="Consultant engaging with the audience during a Q&A session."
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full aspect-square shadow-md"
        />
        <Image
          src="/gallery-4.webp"
          alt="Consultant networking with attendees after a speaking event."
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full aspect-square shadow-md"
        />
      </div>

     
      <h2 className="font-display text-3xl font-semibold mt-16 mb-6 border-b-2 border-primary pb-2">
        Workshops & Corporate Training
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Image
          src="/gallery-5.webp"
          alt="Consultant leading a strategy session at a whiteboard."
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full aspect-square shadow-md"
        />
        <Image
          src="/gallery-6.webp"
          alt="Consultant facilitating a group discussion during a corporate workshop."
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full aspect-square shadow-md"
        />
        <Image
          src="/gallery-7.webp"
          alt="Consultant in a one-on-one coaching session with a client."
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full aspect-square shadow-md"
        />
        <Image
          src="/gallery-8.webp"
          alt="A breakout group working on an exercise during a training day."
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full aspect-square shadow-md"
        />
      </div>
    </section>
  );
}