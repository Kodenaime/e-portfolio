import { mockReflections } from '@/data/mockData';
import ReflectionBlock from '@/components/reflections/ReflectionBlock';

export default function ReflectionsPage() {
  return (
    <section className="container py-12 mt-7 md:mt-10">
      <h1 className="font-display text-4xl font-bold">Reflections</h1>     
      <div className="flex flex-col gap-8 mt-12 max-w-4xl">
        {mockReflections.map((reflection) => (
          <ReflectionBlock key={reflection.id} reflection={reflection} />
        ))}
      </div>
    </section>
  );
}