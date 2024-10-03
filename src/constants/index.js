import { meta, shopify, starbucks, tesla, amazon, aws } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    aws1,
    blender,
    davinci,
    daz,
    docker,
    figma,
    godot,
    kali,
    python,
    threejs,
    unity,
    unreal
} from "../assets/icons";

export const skills = [
    {
        imageUrl: aws,
        name: "AWS",
        type: "Infrastructure",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "Design",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: davinci,
        name: "Davinci",
        type: "Video Editing",
    },
    {
        imageUrl: daz,
        name: "Daz3d",
        type: "3D Modeling",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Infrastructure",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: godot,
        name: "Godot",
        type: "Game Engine",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: kali,
        name: "Kali Linux",
        type: "Security",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Everything else",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "ThreeJS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: unreal,
        name: "Unreal Engine",
        type: "Game Engine",
    }
];

export const experiences = [
    {
        title: "Assistant Area Manager",
        company_name: "Amazon",
        icon: amazon,
        iconBg: "#FFD9B3",
        date: "Nov 2019 - Mar 2021",
        points: [
            "Utilized real-time tracking systems to monitor customer shipments from online orders to dock departure.",
            "Managed a team of 30 hourly associates in Amazon Fulfillment Engine, overseeing picking, packing, and processing of customer shipments.",
            "Controlled logistical movements and workload monitoring using proprietary data systems, ensuring adherence to safety standards and protocols while training new higher and management level personnel.",
        ],
    },
    {
        title: "Cloud Support Engineer I (Security)",
        company_name: "AWS",
        icon: aws,
        iconBg: "#FF8754",
        date: "Mar 2021 - Sep 2022",
        points: [
            "Supported business and enterprise tier customers with technical advice with issues they are facing in their environments using services such as IAM, SSO, Cognito, KMS, CloudHSM, Config, STS, etc.",
            "Ensured that all critical and private data is kept secured from inadvertent leakage through correspondence to and from customers using chat, email, and phone calls.",
            "Aided in the development of newly hired associates and engineers to learn proper techniques and skills to be the best that they can be at supporting customers.",
            "Drove for the development of system improvements that allowed all teammates to better support customers.",
        ],
    },
    {
        title: "Software Support Engineer III (DevOps)",
        company_name: "Amazon",
        icon: amazon,
        iconBg: "#FFD9B3",
        date: "Sep 2022 - Sep 2024",
        points: [
            "Support software development team with DevOps remediations involving dependency updates and operational code fixes for production environments.",
            "Do code reviews for necessary alterations in primarily Java based codebase to ensure code quality and maintainability.",
            "Aid in the development of newly hired engineers to help them learn proper techniques and skills to understand development operations of the team.",
            "Drive for the development of system improvements that allow all teammates to better develop our application storefront.",
            "Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];