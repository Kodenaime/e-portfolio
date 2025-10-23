import { IArtifact, IReflection } from '@/types';


export const mockArtifacts: IArtifact[] = [
  {
    id: 'artifact-1',
    title: 'Executive Leadership Workshop',
    description:
      'An intensive 3-day workshop for emerging leaders, focusing on strategic communication, team empowerment, and resilient leadership.',
    imageUrl: 'https://via.placeholder.com/400x250/964B00/FFFFFF?text=Leadership+Workshop',
    projectUrl: '#', 
    tags: ['Leadership', 'Professional Development', 'Corporate Training'],
  },
  {
    id: 'artifact-2',
    title: 'Workforce Integration Program (Case Study)',
    description:
      'A case study on our partnership with a tech firm to integrate a new immigrant workforce, improving team cohesion and productivity by 25%.',
    imageUrl: 'https://via.placeholder.com/400x250/7BAF9E/FFFFFF?text=Workforce+Case+Study',
    projectUrl: '#', 
    tags: ['Workforce Development', 'Immigration Consulting', 'Case Study'],
  },
  {
    id: 'artifact-3',
    title: 'Download: The Resilient Career E-Book',
    description:
      'A free e-book offering actionable advice for professionals seeking to build resilience, navigate career transitions, and find fulfillment.',
    imageUrl: 'https://via.placeholder.com/400x250/F5EBDD/2C2C2C?text=Download+E-Book',
    projectUrl: '#', 
    tags: ['Personal Development', 'Career Coaching', 'Resource'],
  },
  {
    id: 'artifact-4',
    title: 'One-on-One Career Coaching',
    description:
      'Personalized coaching sessions to help individuals identify their strengths, overcome obstacles, and achieve their ultimate career goals.',
    imageUrl: 'https://via.placeholder.com/400x250/964B00/FFFFFF?text=Career+Coaching',
    projectUrl: '#',
    tags: ['Personal Development', 'Career Coaching'],
  },
];


export const mockReflections: IReflection[] = [
  {
    id: 'reflection-1',
    title: 'Beyond "Management": The Shift to True Leadership',
    date: 'October 15, 2025',
    reflection:
      'For years, companies asked for "managers" to enforce processes. Now, they need "leaders" who inspire growth. The key difference I\'ve seen? Empathy. In our last executive workshop, we saw a 40% increase in team-reported engagement after focusing solely on active listening and empathetic feedback. This is the new currency of the effective workplace.',
  },
  {
    id: 'reflection-2',
    title: 'The Untapped Potential in Your New-Hire Pool',
    date: 'September 28, 2025',
    reflection:
      'Many companies view their immigrant workforce through the lens of "challenge"—language barriers, cultural gaps. This is a mistake. The real lens is "opportunity." These individuals bring resilience, diverse perspectives, and a powerful drive. Our work proves that investing in targeted training and education isn\'t just a social good; it\'s a direct investment in your bottom line.',
  },
];