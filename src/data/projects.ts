import type { ImageMetadata } from 'astro';
import betterbooksThumb from '../assets/projects/betterbooks.png';
import flybudgetThumb from '../assets/projects/flybudget.png';
import contentCreationToolThumb from '../assets/projects/content-creation-tool.png';

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
    name: 'Grove',
    description:
      'A private book tracking website to read with friends and loved ones!',
    type: 'Full Stack',
    stack: ['Python', 'Flask', 'PostgreSQL'],
    sourceUrl: '#',
    liveUrl: '#',
    thumbnail: betterbooksThumb,
  },
  {
    slug: 'flybudget',
    name: 'FlyBudget',
    description:
      'A financial tracking application for managing personal budgets and expenses.',
    type: 'Web App',
    stack: ['JavaScript', 'React'],
    sourceUrl: '#',
    thumbnail: flybudgetThumb,
  },
  {
    slug: 'content-creation-tool',
    name: 'Content Creation Tool',
    description:
      'A tool for creating, editing, and organizing content across multiple formats and platforms.',
    type: 'Full Stack',
    stack: ['Python', 'React'],
    sourceUrl: '#',
    liveUrl: '#',
    thumbnail: contentCreationToolThumb,
  },
];
