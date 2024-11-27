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
      name: "Sabir Asmare",
      designation: "Software Engineer",
      company: "Palo Alto Networks",
      image: "https://media.licdn.com/dms/image/D5603AQFxWBEeQnijMA/profile-displayphoto-shrink_800_800/0/1674528415044?e=1704931200&v=beta&t=Xi9yidpQjF62VermlqBEK_1Qkn_XWyN4iYjXri5KRRo",
    },
    {
      testimonial:
        "Transforms complex problems into elegant, user-friendly solutions, and is constantly learning new technologies and techniques to expand his skill set.",
      name: "Natnael Teferi",
      designation: "Software Engineer",
      company: "LinkenIn",
      image: "https://media.licdn.com/dms/image/D5603AQGJ9R9EqwdeFQ/profile-displayphoto-shrink_800_800/0/1693346500172?e=1704931200&v=beta&t=9Aiilm1PCf8Ssh1djBpRV5NZdUOOR4hJQmApBdBI8SY",
    },
    {
      testimonial:
        "Said is a great developer. I had the pleasure of working with him on a few projects and he always exceeded expectations.",
      name: "Abenezar Mario",
      designation: "Software Engineer",
      company: "LinkedIn",
      image: "https://media.licdn.com/dms/image/D5603AQH68cMpF0LcFA/profile-displayphoto-shrink_800_800/0/1686249648372?e=1704931200&v=beta&t=nwzH0enkio7PIyRhmCA08xu9bgxFeQPjXJKNrh3GJ-c",
    },
  ];
  
  const projects = [
    {
      name: "Haley's Hope Student Tracker",
      description:
        "It's an innovative platform tailored to support the unique needs of students with dyslexia, enhancing educational accessibility and individualized learning strategies.",
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
      image: haleyshope,
      source_code_link: "https://github.com/ssaid20/Haleys-Hope",
    },
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