import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Let's Create Together`;

export const ABOUT_TEXT = `As an AWS Certified Cloud Practitioner and experienced software engineer, I specialize in web development, DevOps, and leveraging AWS services. I excel in API integration and strategic problem-solving to deliver innovative solutions that optimize efficiency and enhance user experiences. My approach combines technical expertise with a proactive mindset to achieve impactful results and drive continuous improvement across projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Engineer",
    company: "Apex Innovations",
    description: `Upgraded PHP from version 7.2 to 8.2, resolved compatibility issues, and configuration conflicts in 3 months. Developed client-facing RESTful APIs for streaming data, integrated AJAX calls with backend services using object-oriented programming and JWTAuth for streamlined interactions. Utilized AWS ECS, Cloudflare, and New Relic for comprehensive system performance tracking and issue identification. Managed code deployment through Git, AWS CodePipeline, and GitHub Actions, utilizing webhooks for automated testing to ensure code integrity and foster effective team collaboration. Integrated AWS S3 storage for efficient management and secure storage of project assets, ensuring 99.9% data accuracy and accessibility while enhancing scalability. Strengthened security by mitigating SQL injection vulnerabilities, optimized database queries achieving an 80% performance boost. Implemented a certificate verification system in the company's app, halting all fake certificate creation by clients.`,
    technologies: ["Php", "Laravel", "React", "JavaScript", "MySQL", "mongoDB", "Git", "Docker", "AWS Services"],
  },
  {
    year: "2023",
    role: "React Native Developer - Capstone Project",
    company: "CGI",
    description: `•	Successfully developed a responsive health management web app with a team of three within a 3-month deadline, receiving positive feedback from CGI’s software engineers. Led the team in utilizing React Native, Firebase (including Firebase Authentication), and JavaScript to implement key functionalities, ensure seamless integration of real-time data management, and analyze team progress using Jira data.`,
    technologies: ["React Native", "React.js", "Vue.js", "FireBase", "Jira",],
  },

  {
    year: "2022 - 2023",
    role: "Graduate Assistant",
    company: "University of Louisiana at Lafayette",
    description: `Organized the Undergraduate Research Conference 2022, overseeing 250 students and faculty members while managing speakers. Streamlined faculty tasks by developing a dynamic web app with PHP, JavaScript, AWS Lambda, and MySQL. Conducted comprehensive training sessions for 12 faculty members.  `,
    technologies: ["Php", "MySQL", "JavaScript", "AWS Services"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Austin, Texas",
  email: "ipekkaya024@gmail.com",
};
