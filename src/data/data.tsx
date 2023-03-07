import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/dark-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Shivram Krishnamurthy`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Bay Area based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently Pursuing My Master's Degree in Computer Science
        at <strong className="text-stone-100">Santa Clara University</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1tCxd44thoEshiA5wRT28STZ6phjUm1TX/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a computer science graduate student passionate about software development.`,
  aboutItems: [
    {label: 'Location', text: 'Santa Clara, CA', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'ML/AI, Distributed Systems', Icon: SparklesIcon},
    {label: 'Study', text: 'Santa Clara University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Domain Knowledge',
    skills: [
      {
        name: 'Backend Development',
        level: 8,
      },
      {
        name: 'Object Oriented Design',
        level: 9,
      },
      {
        name: 'Algorithm Design',
        level: 9,
      },
      {
        name: 'Database Design',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'HTML',
        level: 7,
      },
      {
        name: 'CSS',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Python',
        level: 4,
      },
      {
        name: 'C++',
        level: 4,
      },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      {
        name: 'Spring Framework',
        level: 9,
      },
      {
        name: 'Flask',
        level: 5,
      },
      {
        name: 'Elasticsearch',
        level: 4,
      },
      {
        name: 'Apache Kafka',
        level: 3,
      },
      {
        name: 'AWS',
        level: 3,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'Oracle SQL',
        level: 9,
      },
      {
        name: 'MySql',
        level: 9,
      },
      {
        name: 'MongoDB',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2023',
    location: 'Santa Clara University',
    title: 'Master of Science in Computer Science',
    content: <p>Coursework in Advanced Operating Systems, Design and Analysis of Algorithms, Adv Database Systems, Machine
    Learning, Design Patterns.</p>,
  },
  {
    date: 'May 2017',
    location: 'Amrita Vishwa Vidyapeetham',
    title: 'Bachelor of Technology in Computer Science',
    content: <p>Coursework in Data Structure & Algorithms, Object Oriented Analysis & Design, Web Programming</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2022 - December 2022',
    location: 'e2open',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Part of the Research & Development engineering team working on core Supply Chain Management Product
        <br/>
        Modified a search functionality for transport orders by leveraging Elasticsearch improving retrieval speed by 44%
        <br/>
        Designed and implemented a fix for a concurrency issue using synchronizations locks in Java resolving data inconsistency in microservice
        <br/>
        Added multiple filters and paginated a REST API endpoint to list the Transport Orders utilizing Spring Framework speeding up Supply Chain Process by 30%
        <br/>
        Increased data fetching performance of REST API by 47% by deploying Redis cache for storing frequently received queries
      </p>
    ),
  },
  {
    date: 'January 2020 - August 2021',
    location: 'Apisero Inc.',
    title: 'Software Engineer',
    content: (
      <p>
        Built REST APIs using Spring Boot for servicing orders between 4+ companies and its partners for automating purchasing process
        <br/>
        Optimized the performance of a compute expensive service by caching responses using Memcached for redundant requests by 40%
        <br/>
        Coordinated with product and sales team to develop a KPI analytics dashboard using Splunk for APIs exposed to the clients
      </p>
    ),
  },
  {
    date: 'July 2017 - August 2019',
    location: 'Ernst & Young',
    title: 'Software Engineer',
    content: (
      <p>
        Led efforts to build an in-house companywide communication tool broadcasting product update to all teams through Slack, email, and LinkedIn
        <br/>
        Created automation scripts to automate regression testing of applications which reduced testing efforts by 10hrs a week
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Muthukumaran Elango',
      text: 'Shivram is a passionate coder, hardworking teammate, humble person, and a dedicated individual. He never gives up, even when faced with challenges. His exceptional qualities and work ethic make him an invaluable asset to any team. I highly recommend him to anyone seeking a dedicated and inspiring team player.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Dhanush Thirunavukkarasu',
      text: 'I managed Shivram in EY for 2 years. He is a very hardworking and dedicated person. He is a very good team player and always ready to help others. He is a very good coder and always ready to learn new technologies. He is a very good person and always ready to help others. I highly recommend him to anyone seeking a dedicated and inspiring team player.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to mail me for any queries or suggestions or just to say hi! I\'ll try my best to respond as soon as I can',
  items: [
    {
      type: ContactType.Email,
      text: 'skrishnamurthy2@scu.edu',
      href: 'mailto:skrishnamurthy2@scu.edu',
    },
    {
      type: ContactType.Location,
      text: 'Santa Clara, California',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'Shivram49',
      href: 'https://github.com/Shivram49',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Shivram49'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/shivramkrishnamurthy/'},
];
