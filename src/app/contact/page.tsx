import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <section className="container py-12 mt-7 md:mt-10">
      <h1 className="font-display text-4xl font-bold">Contact Me</h1>

      {/* Descriptive text tailored to the client */}
      <p className="font-sans text-lg text-gray-700 mt-4 max-w-3xl">
        Ready to start your transformation? Whether you're interested in
        one-on-one coaching, a corporate workshop, or a speaking engagement, I'd
        love to hear from you.
      </p>

     
      <div className="max-w-lg mx-auto mt-12">
        <ContactForm />
      </div>
    </section>
  );
}