export interface Project {
  name: string;
  description: string;
  type: string;
  stack: string[];
  sourceUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    name: 'BetterBooks',
    description:
      'A private book tracking website to read with friends and loved ones!',
    type: 'Full Stack',
    stack: ['Python', 'Flask', 'PostgreSQL'],
    sourceUrl: '#',
    liveUrl: '#',
  },
  {
    name: 'EasyMoney',
    description:
      'A financial tracking application for managing personal budgets and expenses.',
    type: 'Web App',
    stack: ['JavaScript', 'React'],
    sourceUrl: '#',
  },
  {
    name: 'Chess960',
    description:
      'A chess website focused on Chess 960 (Fischer Random) where you can learn info and news about the variant and play others!',
    type: 'Full Stack',
    stack: ['Go', 'Docker'],
    sourceUrl: '#',
    liveUrl: '#',
  },
  {
    name: 'SportsProject',
    description:
      'A sports data platform for tracking stats and game results in real time.',
    type: 'Web App',
    stack: ['TypeScript', 'Node.js'],
    sourceUrl: '#',
  },
];
