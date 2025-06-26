import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineering",
    icon: <FullStackIcon />,
  },
  {
    title: "Product Management",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  // {
  //   title: "C",
  //   icon: <ProblemSolvingIcon />,
  // },
  // {
  //   title: "Freelancer",
  //   icon: <FreelancerIcon />,
  // },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Solidity",
      icon: "/assets/tech/Solidity.png",
      link: "https://soliditylang.org/",
    },
    {
      name: "HTML",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "C/C++/C#",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Ruby",
      icon: "/assets/tech/ruby.svg",
      link: "https://www.ruby-lang.org/en/",
    },

  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "React.js",
      icon: "/assets/tech/react.js.png",
      link: "https://reactjs.org/",
    },
    {
      name: "Angular",
      icon: "/assets/tech/angular.png",
      link: "https://angular.io/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    // {
    //   name: "Three.js",
    //   icon: "/assets/tech/threejs.svg",
    //   link: "https://threejs.org/",
    // },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Pandas",
      icon: "/assets/tech/pandas1.png",
      link: "https://pandas.pydata.org/",
    },
    // {
    //   name: "Zustand",
    //   icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    //   link: "https://zustand-demo.pmnd.rs",
    // },
    // {
    //   name: "Redux/Redux-toolkit",
    //   icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    //   link: "https://redux.js.org",
    // },
    {
      name: "Mongoose",
      icon: "/assets/tech/mongoose1.png",
      link: "https://mongoosejs.com/",
    },
    // {
    //   name: "Prisma",
    //   icon: "/assets/tech/prisma.svg",
    //   link: "https://www.prisma.io/",
    // },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    // {
    //   name: "Postman",
    //   icon: "/assets/tech/postman.svg",
    //   link: "https://www.postman.com/",
    // },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Microsoft Azure",
      icon: "/assets/tech/Azure.png",
      link: "https://azure.microsoft.com/en-us/",
    },
    {
      name: "Google Cloud",
      icon: "/assets/tech/google_cloud.webp",
      link: "https://cloud.google.com/",
    },
    {
      name: "AWS",
      icon: "/assets/tech/aws2.png",
      link: "https://aws.amazon.com/",
    },
    {
      name: "Google Kubernetes Engine",
      icon: "/assets/tech/gke1.png",
      link: "https://cloud.google.com/kubernetes-engine",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    // {
    //   name: "PostgreSQL",
    //   icon: "/assets/tech/postgresql.png",
    //   link: "https://www.postgresql.org",
    // },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Frontend Developer Intern",
    company_name: "Intern at Curowell Healthcare Private Ltd",
    icon: "/assets/company/curowell-logo.svg",
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Developing a healthcare SaaS platform using Next.js, TypeScript, and Tailwind CSS, significantly enhancing user experience.",
      "Maintaining an efficient codebase under senior guidance, ensuring adherence to best practices in software development.",
      "Contributing to the DND form microfrontend, improving user interaction by 30%.",
      "Collaborating in UI/UX design efforts, leading to a 25% reduction in component development time.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Intern at DRDO CABS",
    icon: "/assets/company/drdo-cabs.png",
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Developed a Facility Bookings Manager for DRDO CABS using TypeScript, React, Node.js, Express, Prisma, and MySQL within a month.",
      "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
      "Led the design and implementation of the frontend, providing a user-friendly interface for efficient facility management.",
      "Collaborated with a backend intern throughout the internship to deliver a comprehensive solution tailored to DRDO CABS's needs.",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "GKE-PubSub-AutoScaler",
    description:
      "GKE-PubSub-AutoScaler is a Kubernetes-based solution that automatically scales Google Kubernetes Engine (GKE) clusters based on Pub/Sub message load. It leverages Google Cloud's serverless capabilities to optimize resource usage and reduce costs.",
    tags: [
      {
        name: "Google Cloud",
        color: "blue-text-gradient",
      },
      {
        name: "Google Kubernetes Engine",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "red-text-gradient",
      },
      {
        name: "PubSub",
        color: "orange-text-gradient",
      },
      {
        name: "Terraform",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/gke.png",
    source_code_link: "https://github.com/LegendaryPenguin/gke-pubsub-autoscaler",
  },
  {
    name: "EcoPrint",
    description:
      "EcoPrint is a decentralized carbon tracking platform with 100% auditability via Pinata IPFS integration and Autonomys AI-driven scoring.",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "react.js",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Ecoprint.png",
    source_code_link: "https://github.com/LegendaryPenguin/EcoPrint",
  },
  {
    name: "Verifisure",
    description:
      "Verifisure is an AI agent attestation system utilizing OCR/NLP, Gaia Ai Nodes, and Othentic stack, and Boundless zkVM sdk integration, achieving 94%+ data extraction accuracy and reducing fraud resolution time by 85%.",
    tags: [
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "pink-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "rust",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/Verifisure.png",
    source_code_link: "https://github.com/micahborg/verisure",
  },
  {
    name: "Ecoxchange",
    description:
      "Ecoxchange is an XRPL-based carbon credit dApp enabling EPA-aligned tokenization; tested with 200+ users and cut reporting overhead by 40%.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "xrp.js",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "testnet",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/Eco.png",
    source_code_link:
      "https://github.com/LegendaryPenguin/ecoXchange",
      },
  {
    name: "Terraflow",
    description:
      "Terraflow is a decentralized AgriTech investment platform using Solidity smart contracts deployed on the Flow blockchain for high-throughput transactions and Privy embedded wallet SDK for seamless Web2-style user authentication into Web3 dApp frontend.",
    tags: [
      {
        name: "privy sdk",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
    {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "cadence",
        color: "pink-text-gradient",
      },
      {
        name: "flow",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/Terraflow1.png",
    source_code_link: "https://github.com/SuhaanSyed/TerraFlow",
  },
  {
    name: "MindMentor",
    description:
      "MindMentor is a personalized ai study tool that utilizes AWS generative ai to create personalized learning pathways and review material.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "aws bedrock",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/Mindmentor1.png",
    source_code_link: "https://github.com/saikiransomanagoudar/mind-mentor",
  },
  {
  	name: "FTC Robotics",
  	description:
  		"Built a competition-ready robot for FTC using Java (FTC SDK), custom hardware, and CAD-designed components to navigate autonomous and teleoperated tasks. Integrated sensors, odometry pods, and vision processing for precise movement, while iterating on mechanical subsystems.",
  	tags: [
  		{
  			name: "Fusion 360",
  			color: "blue-text-gradient"
  		},
  		{
  			name: "AutoCAD",
  			color: "green-text-gradient"
  		},
  		{
  			name: "CNC Router",
  			color: "pink-text-gradient"
  		},
      {
  			name: "OpenCV",
  			color: "yellow-text-gradient"
  		},
      {
        name: "Odometry",
        color: "orange-text-gradient",
      },
  	],
  	image: "/assets/projects/Kinetic.png",
  	source_code_link: "https://docs.google.com/presentation/d/1_hiKsqJGxliIiqsrENMSlsCZOT2SIqjreWs61F-ye4Q/present?slide=id.g28470fa1830_0_48",
  },
  {
  	name: "Vertical Cross Tension Car",
  	description:
  		"This car was built using Fusion 360 and AutoCAD to model the car with vertical cross sections to maximize tension withstanded from the rubber band power mechanism while retaining light weight to maximize speed. The car incorporates as 3D printed frame for lightweight durability, and laser cut axles and hubs for smooth operation. This car won 2nd place at the KU Engineering Design Competition in the Mechanical Engineering section.",
  	tags: [
  		{
  			name: "Fusion 360",
  			color: "blue-text-gradient"
  		},
  		{
  			name: "AutoCAD",
  			color: "green-text-gradient"
  		},
  		{
  			name: "Ultimaker Cura",
  			color: "pink-text-gradient"
  		},
      {
  			name: "Laser Cutting",
  			color: "yellow-text-gradient"
  		}
  	],
  	image: "/assets/projects/Car.png",
  	source_code_link: "https://engr.ku.edu/hsd-2023-winners",
  }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/LegendaryPenguin",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/nischay-rawal",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/nisch_rawal",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/nischay__rawal/",
  },
];

const heroTexts = [
  "Software Engineer",
  500,
  "Blockchain/Web3 Engineer",
  500,
  "Cloud Engineer",
  500,
  "Product Management",
  500,
  "Frontend Engineer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
