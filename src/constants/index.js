import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  java,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  mongodb,
  cprog,
  cplusplus,
  git,
  figma,
  docker,
  //meta,
  //starbucks,
  //tesla,
  //shopify,
  hook,
  wizzair,
  //carrent,
  // jobit,
  // tripguide,
  python,
  postman,
  todo,
  pong,
  morse,
  profnaved,
  profoscar,
  cecilia,
  // threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C",
    icon: cprog,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
    {
    name: "Postman",
    icon: postman,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "International Mentor",
    company_name: "HÖOK - Hallgatói Önkormányzatok Országos Konferenciája",
    icon: hook,
    iconBg: "#383E56",
    date: "Jul 2023 - Present",
    points: [
      "Supported Stipendium Hungaricum scholars in navigating administrative processes and academic integration.",
      "Facilitated mentees' adaptation to Hungarian transportation, culture, and societal norms.",
      "Provided continuous guidance and problem-solving assistance to ensure a seamless transition into university life.",
    ],
  },
  {
    title: "Evidence Collection Agent",
    company_name: "Wizz Air",
    icon: wizzair,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Built and maintained a comprehensive database for tracking flight disruptions, enhancing investigative processes to align with EU261 compliance standards.",
      "Coordinated cross-functional collaboration with airports and internal departments.",
      "Streamlined the collection of key data to strengthen support for Customer Experience and Legal teams in high-stakes proceedings.",
    ],
  },
  

  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  ];

const testimonials = [
  {
    testimonial:
      "Ibrahim exemplifies collaborative innovation, integrating technology, to create real-world solutions—his work on TransPoint at EELISA Innovation Week is a testament to that.",
    name: "Òscar O. Santos-Sopena",
    designation: "Associate Vice-Rector for Inclusion and Social Commitment-Engagement",
    company: "Universidad Politécnica de Madrid",
    image: profoscar,
  },
  {
    testimonial:
      "One of a sharpest minds. Ibrahim have a method, the vision and the drive to make things happen. He is a true leader and a great team player.",
    name: "Cecilia MoSze Tham",
    designation: "CEO",
    company: "Futurity Systems",
    image: cecilia,
  },
  {
    testimonial:
      "Ibrahim is an exceptional talent—one of the best I've taught. His passion for learning and adapting to industry demands is unmatched. Any team would be lucky to have him.",
    name: "Dr Naved Qureshi",
    designation: "Associate Professor",
    company: "AMU",
    image: profnaved,
  },

];

const projects = [
  {
    name: "To-Do List Application",
    description:
      "The To-Do List Application is a Java-based desktop task management system designed to help users organize and track their daily tasks efficiently with a clean Swing based GUI.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "java-swing",
        color: "green-text-gradient",
      },
      {
        name: "junittest",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/ibrahimify/TodoListApp",
  },
  {
    name: "Pong Game",
    description:
      "A two-player modern implementation of the classic Pong arcade game. The game features score tracking, high score management, and smooth gameplay mechanics.",
     tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "sfml",
        color: "pink-text-gradient",
      },
    ],
    image: pong,
    source_code_link: "https://github.com/ibrahimify/pong",
  },
  {
    name: "Morse Code Translator",
    description:
      "A command-line program for translating text to Morse code and vice versa. The application supports both English and Morse code input and saves history of operations in a text file.",
    tags: [
      {
        name: "c",
        color: "blue-text-gradient",
      },
      {
        name: "cli",
        color: "green-text-gradient",
      },
      {
        name: "file_handling",
        color: "pink-text-gradient",
      },
    ],
    image: morse,
    source_code_link: "https://github.com/ibrahimify/MorseCodeTranslator",
  },
];

export { services, technologies, experiences, testimonials, projects };
