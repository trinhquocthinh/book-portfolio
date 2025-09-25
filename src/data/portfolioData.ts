import type {
  PersonalInfo,
  SocialMedia,
  WorkExperienceItem,
  EducationItem,
  ServiceItem,
  SkillCategory,
  Project,
} from "../types";

export const portfolioData = {
  personalInfo: {
    name: "Trinh Quoc Thinh",
    title: "Senior Front-end Developer",
    description:
      "Hi, I am a front-end developer with solid experience in mobile applications, web management, and platforms in e-commerce, insurance, and banking. I aim to grow into a technical architect leader within the next three years, focusing on building scalable systems and creating practical applications that improve user experience.",
    profileImage: "/book-portfolio/logo.jpg",
  } as PersonalInfo,

  socialMedia: {
    facebook: "https://www.facebook.com/trinh.q.thinh/",
    twitter: "#",
    instagram: "https://www.instagram.com/koolmaster1408/",
    linkedin: "www.linkedin.com/in/trịnh-quốc-thịnh-54900b13b",
  } as SocialMedia,

  workExperience: [
    {
      id: "work1",
      period: "Apr, 2023 - now",
      position: "Senior Front-end Developer",
      company: "Idealife",
      description:
        "Built core features for Izion24 App and Agent App. Developed and optimized five business portals (ReactJS, Angular, WordPress). Conducted code audits and peer reviews. Proposed and delivered frontend optimizations, boosting overall performance and user satisfaction",
    },
    {
      id: "work2",
      period: "Feb, 2022 - Jan, 2023",
      position: "Senior Front-end Developer",
      company: "Tiki",
      description:
        "Developed and optimized Tiki web features, improving performance and user experience. Provided technical advice to product owners and supported smooth CI/CD processes.",
    },
    {
      id: "work3",
      period: "Apr, 2021 - Feb, 2022",
      position: "Senior Front-end Developer",
      company: "Clever Age",
      description:
        "Supported bug fixing and delivered solutions for the front end of Magento and WordPress projects, ensuring stability and usability.",
    },
  ] as WorkExperienceItem[],

  education: [
    {
      id: "edu1",
      period: "2016 - 2018",
      degree: "College",
      institution: "Local College",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae minus eius nemo. Optio cupiditate nostrum commodi repellendus nemo quod in?",
    },
    {
      id: "edu2",
      period: "2018 - 2020",
      degree: "Intermediate",
      institution: "University",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae minus eius nemo. Optio cupiditate nostrum commodi repellendus nemo quod in?",
    },
    {
      id: "edu3",
      period: "2020 - 2024",
      degree: "BS Computer Science",
      institution: "University",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae minus eius nemo. Optio cupiditate nostrum commodi repellendus nemo quod in?",
    },
  ] as EducationItem[],

  services: [
    {
      id: "service1",
      icon: "bx bx-code-alt",
      title: "Web Development",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quae accusamus aliquam.",
    },
    {
      id: "service2",
      icon: "bx bxs-paint",
      title: "Creative Design",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quae accusamus aliquam.",
    },
    {
      id: "service3",
      icon: "bx bx-bar-chart-alt",
      title: "Digital Marketing",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quae accusamus aliquam.",
    },
    {
      id: "service4",
      icon: "bx bx-search",
      title: "SEO",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quae accusamus aliquam.",
    },
  ] as ServiceItem[],

  skills: [
    {
      category: "Front-End",
      skills: [
        { name: "HTML", icon: "bx bxl-html5" },
        { name: "CSS", icon: "bx bxl-css3" },
        { name: "JS", icon: "bx bxl-javascript" },
        { name: "Angular", icon: "bx bxl-angular" },
        { name: "React Js", icon: "bx bxl-react" },
        { name: "BootStrap", icon: "bx bxl-bootstrap" },
        { name: "Jquery", icon: "bx bxl-jquery" },
      ],
    },
    {
      category: "Back-End",
      skills: [
        { name: "Python", icon: "bx bxl-python" },
        { name: "Java", icon: "bx bxl-java" },
        { name: "Node JS", icon: "bx bxl-nodejs" },
        { name: "PHP", icon: "bx bxl-php" },
      ],
    },
    {
      category: "UI/UX Design",
      skills: [{ name: "Figma", icon: "bx bxl-figma" }],
    },
  ] as SkillCategory[],

  latestProject: {
    id: "project1",
    title: "Project Name",
    image: "/book-portfolio/website 3.png",
    techUsed: "React, TypeScript, SCSS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vel ipsum quis possimus quaerat voluptatem temporibus saepe veniam?",
    liveUrl: "#",
    sourceUrl: "#",
  } as Project,
};
