export interface Credential {
  name: string;
  description: string;
  type: 'Education' | 'Certification' | 'In Progress';
  url?: string;
}

export const credentials: Credential[] = [
  {
    name: 'University of Wisconsin-Madison',
    description: 'Bachelor of Science in Computer Science',
    type: 'Education',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    description: 'Amazon Web Services foundational cloud certification.',
    type: 'Certification',
    url: 'https://www.credly.com/badges/8cfec7a5-6108-46da-9ffa-2d9ffad22ca4/linked_in_profile',
  },
  {
    name: 'AWS Solutions Architect',
    description: 'Currently working on this certification.',
    type: 'In Progress',
  },
];
