export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Louis'
export const headline = 'A student studying in Inner Mongolia university'
export const introduction =
  "Hello,amigos. My name is Louis. I'm from Inner mongolia and a student who is always curious about new things and eager to achieve dreams and ethusiastic about future.Welcome to my page."
export const email = 'nicelouis0711@gmail.com'
export const githubUsername = 'derekhut'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Hello,amigos. My name is Louis. I'm from Inner mongolia and a student who is always curious about new things and eager to achieve dreams and ethusiastic about future.Welcome to my page.",
  'Currently I am working on learning python and web construction, as to improve my data analysis skills for offical need.',
  "I started this blog to share the insights I learn every day. Most blogs focus on the lastest infomation about programming and general computer science, recording my improvment in daily life while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: '',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: '',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
