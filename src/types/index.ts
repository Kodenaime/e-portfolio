export interface IArtifact {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string; 
  githubUrl?: string; 
  tags: string[];
}

export interface IReflection {
  id: string;
  title: string;
  date: string; 
  reflection: string;
}