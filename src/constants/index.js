import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    Emerging,
    msum,
    pethotel,
    tripguide,
    threejs,
    emergingdev,
    moviesagas,
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
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "React and Nextjs Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI Designer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Emerging Digital Academy",
      company_name: "Full Stack Developer",
      icon: Emerging,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Acquired hands-on experience in junior-level software development over an intensive 20-week period.",
        "Gained practical knowledge through a curriculum designed to replicate real-world on-the-job training for new developers.",
        "Mastered foundational web concepts and techniques essential for modern web development.",
        "Became proficient in using modern web technologies including HTML5, CSS, JavaScript, git, React, and Node.js.",
        "Enhanced collaboration and teamwork skills by working on projects and assignments with fellow students.",
        "Benefitted from guest speakers, gaining insights into industry best practices and trends.",
        "Built a strong professional network with fellow students, guest speakers, and local employers, which will be invaluable in future career endeavors.",
        "Developed a deep understanding of the software development lifecycle, from ideation to deployment.",
        "Cultivated a sense of community and collaboration, emphasizing the importance of teamwork in software development.",
      ],
    },
    {
      title: "Minnesota State University Moorhead",
      company_name: "Computer Information Technology",
      icon: msum,
      iconBg: "#E6DEDD",
      date: "Aug 2019 - May 2023",
      points: [
        "Actively participated in various university activities, enhancing interpersonal and leadership skills.",
        "Served as the Vice President of the African Student Union (ASU), leading initiatives and organizing events to promote cultural awareness and inclusivity.",
        "Collaborated with fellow students on multiple academic projects, gaining problem-solving skills.",
        "Engaged in group discussions, workshops, and seminars, expanding knowledge in Computer Information Technology.",
        "Leveraged opportunities to network with professionals and alumni, gaining insights into industry trends and best practices.",
        "Developed a strong foundation in web technologies, with a focus on creating user-centric applications.",
        "Balanced academic responsibilities with extracurricular activities, honing time management and multitasking skills."
          ],
    },
    
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Said is a true professional. He is very knowledgeable and passionate about his work. He is a great communicator and always delivers on time.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Said does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Said is a great developer. I had the pleasure of working with him on a few projects and he always delivered on time and exceeded expectations.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Emerging Dev",
      description:
        "Emerging Dev is a web-based platform designed to foster collaboration and knowledge sharing among different cohorts. Whether it's about assignments, solo projects, or client projects, users can ask questions and get insights from their peers and alumni.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: emergingdev,
      source_code_link: "https://github.com/ssaid20/emergingdev",
    },
    {
      name: "Movies Manager",
      description:
        "Movie Manager is a comprehensive movie management tool crafted with React, Redux, and Express. The application offers a user-friendly platform for movie enthusiasts to add, edit, and view their favorite movies, ensuring a personalized movie-manager experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "sagas",
          color: "pink-text-gradient",
        },
      ],
      image: moviesagas,
      source_code_link: "https://github.com/ssaid20/movies-react-sagas",
    },
    {
      name: "Pet Hotel",
      description:
        "This is a standard c-sharp project that was started with dotnet new react --no-https -o project-name. I collaborated with two of my cohort mates.User can add a new Pet Owner (and see error validations). User can add new Pets, associated with pet owners, User can check in a pet and see the timestamp on the table. User can check out a pet and delete it from the database aswell as update.",
      tags: [
        {
          name: ".NET",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: pethotel,
      source_code_link: "https://github.com/ssaid20/dotnet-pet-hotel",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };