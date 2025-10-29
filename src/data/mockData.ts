import { IArtifact, IReflection } from '@/types';

export const mockArtifacts: IArtifact[] = [
  {
    id: 'artifact-1',
    title: 'Strategic Workforce Planning Workshop',
    description:
      'Facilitated an executive leadership session for senior managers, focusing on building sustainable workforce strategies, performance alignment, and employee engagement across organizational levels.',
    imageUrl: '/artifact-1.webp',
    projectUrl: 'https://www.linkedin.com/in/matthew-ogieva/',
    tags: ['Leadership Development', 'Strategic HR', 'People Management'],
  },
  {
    id: 'artifact-2',
    title: 'Public Sector Workforce Reform Program',
    description:
      'Consulted with Crown Agents to design and implement public sector HR reform and capacity-building initiatives in Nigeria, improving organizational efficiency and people performance.',
    imageUrl: '/artifact-2.webp',
    projectUrl: 'https://www.linkedin.com/in/matthew-ogieva/',
    tags: ['Public Sector Consulting', 'Change Management', 'Workforce Strategy'],
  },
  {
    id: 'artifact-3',
    title: 'Executive Coaching & Leadership Advisory',
    description:
      'Provided one-on-one executive coaching and leadership advisory services to C-suite and mid-level managers, equipping them with tools for high-impact leadership and strategic decision-making.',
    imageUrl: '/artifact-3.webp',
    projectUrl: 'https://www.linkedin.com/in/matthew-ogieva/',
    tags: ['Executive Coaching', 'Leadership', 'Talent Development'],
  },
  {
    id: 'artifact-4',
    title: 'People Management Transformation for SMEs',
    description:
      'Led consulting engagements with local and international SMEs under ICMS Professional Services, implementing people strategy frameworks and HR systems that drive measurable performance improvement.',
    imageUrl: '/artifact-4.webp',
    projectUrl: 'https://www.linkedin.com/in/matthew-ogieva/',
    tags: ['HR Consulting', 'Organizational Development', 'SME Transformation'],
  },
];


export const mockReflections: IReflection[] = [
  {
    id: 'reflection-1',
    title: 'The Power of People: Why Strategy Starts with Culture',
    date: 'October 25, 2025',
    reflection:
      'Every business challenge ultimately comes down to people how they think, act, and lead. In our recent leadership engagements, I’ve observed that organizations investing in culture transformation see a compounding effect on performance. Strategy may set direction, but culture determines speed.',
  },
  {
    id: 'reflection-2',
    title: 'Workforce Agility: Preparing for the Future of Work',
    date: 'September 10, 2025',
    reflection:
      'As industries evolve, the workforce must evolve faster. Developing agile talent isn’t about more training  it’s about creating learning ecosystems that empower individuals to adapt and innovate. At ICMS, we’ve seen clients outperform competitors simply by embedding flexibility into their HR strategy.',
  },
  {
    id: 'reflection-3',
    title: 'Leadership in Transition: Moving from Supervision to Influence',
    date: 'August 30, 2025',
    reflection:
      'True leadership has shifted from positional authority to authentic influence. The leaders I coach who prioritize empathy, communication, and accountability consistently achieve higher team engagement and lower turnover. Influence, not instruction, drives transformation.',
  },
  {
    id: 'reflection-4',
    title: 'The New Equation of HR: Purpose + Performance',
    date: 'July 18, 2025',
    reflection:
      'Modern HR is no longer an administrative function. It’s a strategic driver of purpose and performance. Aligning people goals with organizational strategy allows teams to see not just what they do, but why it matters. That clarity fuels sustainable growth.',
  },
];


export const publicationsData = [
  {
    id: "pub-1",
    title: "The relevance of energy efficient projects to the US economy",
    journal: "American Journal of Humanities and Social Sciences Research (AJHSSR)",
    date: "2024",
    description:
      "This articlet explores the critical role of energy-efficient projects in shaping the economic, environmental, and national security landscape of the United States. As global energy demands surge and environmental concerns intensify, energy efficiency has emerged as a cornerstone of the U.S",
    fileUrl: "/pdfs/publication-1.pdf",
  },
  {
    id: "pub-2",
    title: "Energy Sustainability and Tax Savings: Comparative Insights from Nigeria and the United States",
    journal: "American Journal of Humanities and Social Sciences Research (AJHSSR)",
    date: "2025",
    description:
      "This article analyzes the interplay between energy sustainability initiatives and tax-policy instruments in Nigeria and the United States. It elucidates how tax incentivesranging from import-duty waivers and Pioneer Status incentives in Nigeria to Investment Tax Credits (ITC), Production Tax Credits (PTC), and their successor Clean Electricity Credits in the United Statesfacilitate the reduction of investment costs, enhance project viability, and catalyze the deployment of renewable energy.",
    fileUrl: "/pdfs/publication-2.pdf",
  },
  {
    id: "pub-3",
    title: "Exploring green energy initiatives within the black community",
    journal: "American Journal of Humanities and Social Sciences Research (AJHSSR)",
    date: "2024",
    description:
      "The global transition to renewable energy presents a unique opportunity to address both environmental and social inequities, particularly within marginalized communities such as the Black community.",
    fileUrl: "/pdfs/publication-3.pdf",
  },
];
