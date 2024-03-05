import { meta, shopify, starbucks, tesla,vit,sunbeam,shell } from "../assets/images";
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
    firebase,
    c,
    java,
    php,
    aws,
    python,
    threejs,
    cc,
    dns
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cc,
        name: "C",
        type: "Language",
    },
    {
        imageUrl: c,
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: threejs,
        name: "ThreeJS",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Tool",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Secondary School",
        company_name: "Sunbeam School Lahartara",
        icon: sunbeam,
        iconBg: "LightCyan",
        date: "March 2017 - March 2018",
        points: [
            "Graduated from the Central Board of Secondary Education (CBSE) for Class 10th.",
            "Focused on Physics, Chemistry, and Mathematics, nurturing a robust understanding of scientific fundamentals.",
            "Achieved exceptional academic results, culminating in a final score of 95.2%.",
        ],
    },
    {
        title: "Higher Secondary",
        company_name: "Sunbeam School Lahartara",
        icon: sunbeam,
        iconBg: "LightPink",
        date: "March 2019 - March 2020",
        points: [
            "Graduated from the Central Board of Secondary Education (CBSE) for Class 12th.",
            "Specialized in Physics, Chemistry and Mathematics as the main subjects.",
            "Attained an outstanding academic performance with a final percentage of 95%.",
        ],
    },
    {
        title: "B.Tech",
        company_name: "VIT Vellore",
        icon: vit,
        iconBg: "lightgreen",
        date: "Aug 2020 - July 2024",
        points: [
            "Completed Bachelor of Technology in Computer Science Core from Vellore Institute of Technology, Vellore.",
            "Studied subjects including Data Structures & Algorithms, Database Management System and many more.",
            "Achieved a final CGPA of 9.31, reflecting consistent academic excellence and dedication.",
        ],
    },
    {
        title: "Associate IT Engineer",
        company_name: "Shell",
        icon: shell,
        iconBg: "lightblue",
        date: "Aug 2024 - Present",
        points: [
            "Providing support in maintaining and troubleshooting IT infrastructure at Shell.",
            "Focusing on acquiring and implementing IT security protocols and best practices.",
            "Offering initial technical assistance to end-users, resolving hardware and software issues.",
        ],
    },
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
        link: 'https://github.com/akshayrai14',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akshay-rai-5b21a3223/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Connect-Ed',
        description: 'An integrated online learning platform that seamlessly manages teacher and student registration, facilitates live classes through video calls, and provides a chat app for efficient doubt clearing.',
        link: 'https://github.com/akshayrai14/ConnectEd',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'CryptoSpace',
        description: 'The Cryptocurrency App is an advanced React-based application that empowers users with real-time cryptocurrency information. Leveraging Redux Toolkit for efficient state management and Ant Design for creating a visually appealing UI, the app offers interactive charts powered by Chart.js.',
        link: 'https://github.com/akshayrai14/CryptoSpace',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Automatic Fare',
        description: 'Automatic fare generation system in python will take the image of a car and detect its license plate number and even calculate the fare automatically by the in time and out time of the car',
        link: 'https://github.com/akshayrai14/AUTOMATIC-FARE-GENERATION',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Secure Chat Hub',
        description: 'A Java hybrid cryptography system that encrypts messages using the AES (Advanced Encryption Standard) and RSA (Rivest, Shamir, Adleman) algorithms.',
        link: 'https://github.com/akshayrai14/Hybrid-Encrypted-Client-Server-Model',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Weather App',
        description: 'Easily track weather conditions globally.Get real-time updates for your current location, and search results. Enjoy hourly updates, three-day forecasts, and essential weather highlights. This project was developed as a task for Trademarkia.',
        link: 'https://github.com/akshayrai14/Weather-app-trademarkia',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'V-Academics',
        description: 'A web application that contains resources for any course which VIT offers under the B.Tech cse core program .Resources include course curriculam overview, course syllabus ,youtube playlists best suitable for that particular course ,course book pdfs as well as class ppts.',
        link: 'https://github.com/akshayrai14/V-academics',
    },
    {
        iconUrl: dns,
        theme: 'btn-back-green',
        name: 'DNS Auth Server',
        description: 'Developed an authentication server as a defense against DNS spoofing, safeguarding systems from malicious attacks. This server verifies the authenticity of DNS responses, enhancing security measures.',
        link: 'https://github.com/akshayrai14/DNS-Authentication-Server',
    },
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Tesla Clone',
        description: 'A beginner-friendly project which is a clone of the Tesla website. Ventured into using styled components, Material UI, and React Reveal for the first time.',
        link: 'https://github.com/akshayrai14/Tesla-Clone-',
    },
];