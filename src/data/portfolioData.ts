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
    name: "Mr Skeleton",
    title: "Web Developer",
    description:
      "Hi, I'm a web Developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi numquam dolor a deserunt incidunt esse molestias voluptatum porro ullam.",
    profileImage: "/book-portfolio/Logo.png",
  } as PersonalInfo,

  socialMedia: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  } as SocialMedia,

  workExperience: [
    {
      id: "work1",
      period: "2018 - 2020",
      position: "Web Developer",
      company: "Software Pro",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae minus eius nemo. Optio cupiditate nostrum commodi repellendus nemo quod in?",
    },
    {
      id: "work2",
      period: "2021 - 2022",
      position: "Web Designer",
      company: "Software Pro",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae minus eius nemo. Optio cupiditate nostrum commodi repellendus nemo quod in?",
    },
    {
      id: "work3",
      period: "2022 - 2023",
      position: "Graphic Designer",
      company: "Software Pro",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae minus eius nemo. Optio cupiditate nostrum commodi repellendus nemo quod in?",
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
