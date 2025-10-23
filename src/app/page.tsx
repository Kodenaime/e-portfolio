export default function Home() {
  return (
  
    <section className="py-16 md:py-24">
      {/*  Hero section constrained  */}
      <div className="container">
        {/*  Main heading */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
          Professional Identity Statement
        </h1>

        {/*  Subheading paragraph */}
        <p className="font-sans text-lg md:text-xl text-gray-700 max-w-3xl">
          A brief, approachable statement about who you are, what you do, and
          your professional philosophy.
        </p>
      </div>
    </section>
  );
}