import { mockArtifacts } from '@/data/mockData';
import ArtifactCard from '@/components/artifacts/ArtifactCard';

export default function ArtifactsPage() {
  return (
    <section className="container py-12 mt-7 md:mt-10">
      <h1 className="font-display text-4xl font-bold">Artifacts</h1>     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">        
        {mockArtifacts.map((artifact) => (
          <ArtifactCard key={artifact.id} artifact={artifact} />
        ))}
      </div>
    </section>
  );
}