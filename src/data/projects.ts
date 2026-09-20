import type { ImageMetadata } from 'astro';
import betterbooksThumb from '../assets/projects/betterbooks.svg';
import easymoneyThumb from '../assets/projects/easymoney.svg';
import chess960Thumb from '../assets/projects/chess960.svg';
import sportsprojectThumb from '../assets/projects/sportsproject.svg';

export interface Project {
  slug: string;
  name: string;
  description: string;
  type: string;
  stack: string[];
  sourceUrl?: string;
  liveUrl?: string;
  thumbnail?: ImageMetadata;
}

export const projects: Project[] = [
  {
    slug: 'betterbooks',
    name: 'BetterBooks',
    description:
      'A private book tracking website to read with friends and loved ones!',
    type: 'Full Stack',
    stack: ['Python', 'Flask', 'PostgreSQL'],
    sourceUrl: '#',
    liveUrl: '#',
    thumbnail: betterbooksThumb,
  },
  {
    slug: 'easymoney',
    name: 'EasyMoney',
    description:
      'A financial tracking application for managing personal budgets and expenses.',
    type: 'Web App',
    stack: ['JavaScript', 'React'],
    sourceUrl: '#',
    thumbnail: easymoneyThumb,
  },
  {
    slug: 'chess960',
    name: 'Chess960',
    description:
      'A chess website focused on Chess 960 (Fischer Random) where you can learn info and news about the variant and play others!',
    type: 'Full Stack',
    stack: ['Go', 'Docker'],
    sourceUrl: '#',
    liveUrl: '#',
    thumbnail: chess960Thumb,
  },
  {
    slug: 'sportsproject',
    name: 'SportsProject',
    description:
      'A sports data platform for tracking stats and game results in real time.',
    type: 'Web App',
    stack: ['TypeScript', 'Node.js'],
    sourceUrl: '#',
    thumbnail: sportsprojectThumb,
  },
];
