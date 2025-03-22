// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'loading',
    description: '',
    date: '2024',
    location: '',
  },
  {
    name: 'Award',
    description: '',
    date: '2023',
    location: '',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: '',
    description: '',
    link: { href: '', label: '' },
    tags: ['']
  },
  {
    name: '',
    description: '',
    link: { href: '', label: '' },
    tags: ['', '']
  },
  {
    name: '',
    description: '',
    link: { href: '', label: '' },
    tags: ['']
  },
  {
    name: '',
    description: '',
    link: { href: '', label: '' },
    tags: ['']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'practical skills',
    description:
      'knowing and capable of conducting web crawler and data analysis and visualize them',
    date: '2024-4-5',
    location: '',
    link: '',
  },
  {
    name: 'personal qualitise',
    description:
      'I used to be a member of the Propaganda and Education Department of the Commity Youth League committee at the unibersity level .',
    date: '2022-09-01',
    location: '',
    link: '',
  },
  {
    name: 'lifestyle',
    description:
      'I am always self desplined, finishing the half marathon for three times , and various interests and made a good amout of progress',
    date: '2024-03-15',
    location: 'IMU',
  },
]
