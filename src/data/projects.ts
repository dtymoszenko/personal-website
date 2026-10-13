import type { ImageMetadata } from 'astro';
import betterbooksThumb from '../assets/projects/betterbooks.png';
import flybudgetThumb from '../assets/projects/flybudget.png';
import contentCreationToolThumb from '../assets/projects/content-creation-tool.png';
import flybudgetDashboard from '../assets/projects/flybudget/dashboard.webp';
import flybudgetDashboardDark from '../assets/projects/flybudget/dark-dashboard.webp';
import flybudgetBudget from '../assets/projects/flybudget/budget.webp';
import flybudgetBudgetDark from '../assets/projects/flybudget/dark-budget.webp';
import flybudgetRuleEditor from '../assets/projects/flybudget/rule-editor.webp';
import flybudgetRuleEditorDark from '../assets/projects/flybudget/dark-rule-editor.webp';
import flybudgetReports from '../assets/projects/flybudget/reports.webp';
import flybudgetReportsDark from '../assets/projects/flybudget/dark-reports.webp';
import flybudgetCashFlow from '../assets/projects/flybudget/cash-flow.webp';
import flybudgetCashFlowDark from '../assets/projects/flybudget/dark-cash-flow.webp';

export interface Project {
  slug: string;
  name: string;
  description: string;
  type: string;
  stack: string[];
  sourceUrl?: string;
  liveUrl?: string;
  thumbnail?: ImageMetadata;
  heroImage?: ImageMetadata;
  heroImageDark?: ImageMetadata;
  websiteUrl?: string;
  overview?: string[];
  features?: ProjectFeature[];
  build?: string[];
}

export interface ProjectFeature {
  title: string;
  body: string;
  image: ImageMetadata;
  darkImage?: ImageMetadata;
}

export const projects: Project[] = [
  {
    slug: 'flybudget',
    name: 'FlyBudget',
    description:
      'A local-first, open-source budgeting app with 100+ GitHub stars and 600+ downloads.',
    type: 'Desktop App',
    stack: ['TypeScript', 'React', 'Electron', 'SQLite'],
    sourceUrl: 'https://github.com/dtymoszenko/FlyBudget',
    liveUrl: 'https://flybudget.org/demo/',
    thumbnail: flybudgetThumb,
    heroImage: flybudgetDashboard,
    heroImageDark: flybudgetDashboardDark,
    websiteUrl: 'https://flybudget.org',
    overview: [
      'FlyBudget is a budgeting app I built that keeps your financial data on your own computer instead of in the cloud. It is free and open source, and it has over 100 stars on GitHub and over 600 downloads (500+ Docker image pulls and 100+ desktop app downloads).',
      'You can install it as a desktop app on Windows, Mac or Linux. You can also run it on your own server with Docker and open it in a web browser, including on your phone.',
    ],
    features: [
      {
        title: 'Monthly budget',
        body: 'Each category shows what you planned to spend, what you actually spent and what is left. The bars change color as you get close to or go over your plan.',
        image: flybudgetBudget,
        darkImage: flybudgetBudgetDark,
      },
      {
        title: 'Rules',
        body: 'Rules sort transactions automatically, for example putting every purchase from a coffee shop called Daily Grind under Coffee Shops. While you write a rule, the app shows which past transactions it would match.',
        image: flybudgetRuleEditor,
        darkImage: flybudgetRuleEditorDark,
      },
      {
        title: 'Reports',
        body: 'Charts for net worth, spending over time and a calendar of transactions. You can move the charts around and build your own reports.',
        image: flybudgetReports,
        darkImage: flybudgetReportsDark,
      },
      {
        title: 'Cash flow',
        body: 'A diagram showing where your income comes from, where it goes and how much you saved.',
        image: flybudgetCashFlow,
        darkImage: flybudgetCashFlowDark,
      },
    ],
    build: [
      'The front end is written in TypeScript with React. The back end is an Express server that stores everything in a SQLite database. The desktop version packages both together with Electron.',
      'Since the app can connect to bank accounts, I spent a lot of time on security. The details the app uses to sync with banks are encrypted. In the desktop app, the encryption key is kept by the operating system instead of in the database, so a copied database file does not give anyone access to your bank. Releases are built by GitHub Actions, so anyone can check that a download came from the public code.',
      'To catch bugs in the budget math and the rules, I test them against hundreds of randomly generated examples. I also use Playwright to click through the app automatically in a browser, on both desktop and phone screen sizes. Pull requests are reviewed by CodeRabbit, an AI code review tool.',
    ],
  },
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
