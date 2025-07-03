const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Stevens Institute of Technology",
        degree: "",
        detail: "MS in CS",
        year: "2025-2027",
        image: "/images/sit.png",
      },
      {
        id: 1,
        title: "Sardar Patel Institute of Technology",
        degree: "",
        detail: "BTech, Computer Science Engineering - Aggregate CGPA - 8.69",
        year: "2021-2025",
        image: "/images/spit.jpg",
        cgpaData: [
          { semester: "Sem 1", cgpa: 6.77, date: "Dec 2021" },
          { semester: "Sem 2", cgpa: 7.5, date: "May 2022" },
          { semester: "Sem 3", cgpa: 8.5, date: "Dec 2022" },
          { semester: "Sem 4", cgpa: 8.5, date: "May 2023" },
          { semester: "Sem 5", cgpa: 8.8, date: "Dec 2023" },
          { semester: "Sem 6", cgpa: 9.83, date: "May 2024" },
          { semester: "Sem 7", cgpa: 9.63, date: "Dec 2024" },
          { semester: "Sem 8", cgpa: 10.0, date: "June 2025" },
        ],
      },
      {
        id: 2,
        title: "K.J.Somaiya College of Science and Commerce",
        degree: "",
        detail: "XII-HSC - Science - Percentage - 98.20%",
        year: "2019-2021",
        image: "/images/somaiya.png",
      },
      {
        id: 3,
        title: "Pawar Public School, Bhandup",
        degree: "",
        detail: "X-ICSE - Percentage - 95.83%",
        year: "2006-2019",
        image: "/images/pps.jpg",
      },
    ],
  },
  {
    expCards: [
      {
        id: 2,
        title: "Student Mentor - Sardar Patel Institute of Technology",
        role: "",
        url: "",
        desc: "As a student mentor, I supported juniors with academic guidance, project development, placement preparation, and career decisions. I conducted one-on-one mentoring sessions and group workshops to address common challenges and goals. Additionally, I offered insights on resume building, interview skills, and higher studies. My mentorship helped foster a collaborative and growth-oriented environment among students. Many juniors successfully secured internships and clarified their career paths through consistent guidance.",
        year: "01/08/2024 - 30/05/2025",
        location: "Mumbai, India",
        image: "/images/spit.jpg",
      },
      {
        id: 1,
        title: "Research Intern - Indian Institute of Technology, Bombay",
        role: "",
        url: "https://www.iitb.ac.in/",
        desc: "I led the analysis of power system components and their properties to diagnose and resolve various system issues, ensuring optimal functionality and reliability. Additionally, I spearheaded the design and development of a platform aimed at efficiently mapping and facilitating data sharing of power system components, significantly improving collaboration and data accessibility. To support future system modifications, I authored comprehensive project documentation and user manuals, providing detailed instructions and technical insights for seamless implementation and maintenance.",
        year: "01/01/2024 - 30/06/2024",
        location: "Mumbai, India",
        image: "/images/iitb.png",
      },
      {
        id: 2,
        title: "Teaching Assistant - Sardar Patel Institute of Technology",
        role: "",
        url: "under Dr. Sudhir Dhage ",
        desc: "Under the supervision of Dr. Sudhir Dhage, I conducted lab sessions and provided conceptual guidance to AIML peers, helping them better understand distributed computing principles. I assessed and graded lab experiments and projects, offering constructive feedback to facilitate deeper learning and practical application of concepts. Additionally, I closely monitored student performance and reported progress to the professor, ensuring continuous academic improvement and alignment with course objectives.",
        year: "01/01/2024 - 30/05/2024",
        location: "Mumbai, India",
        image: "/images/spit.jpg",
      },
      {
        id: 3,
        title: "Head of Finance - I.E.E.E. S.P.I.T.",
        role: "",
        url: "https://ieee.spit.ac.in/",
        desc: "I oversaw financial operations, prepared budgets, and ensured strict adherence to expenditure limits to maintain financial stability. In addition, I directed event management, public relations, and marketing initiatives for the committee, successfully coordinating efforts to enhance visibility and engagement while ensuring smooth execution of all activities.",
        year: "08/2022 - 08/2023",
        location: "Mumbai, India",
        image: "/images/ieee.jpg",
      },
      {
        id: 4,
        title: "Cloud Computing Intern – Academor Edutech",
        role: "",
        url: "",
        desc: "Deployed 7 projects across AWS and GCP, set up Virtul Machines, automated deployments, and improved deployment efficiency by 10%.",
        year: "07/2023 – 08/2023",
        location: "Mumbai, India",
        image: "/images/academor.jpg",
      },
      {
        id: 5,
        title: "Content Writer – The EvePaper",
        role: "",
        url: "https://evepaper.com/",
        desc: "Researched and authored 20+ engaging articles on tech and lifestyle topics, ensuring clarity, originality, and SEO optimization. Collaborated with editors to align content tone with brand voice and consistently met tight weekly deadlines.",
        year: "09/2022 –11/2022",
        location: "Mumbai, India",
        image: "/images/eve.png",
      },
    ],
  },
  {
    // Enhanced journey events with more details and proper date formatting
    journeyEvents: [
      {
        id: 1,
        title: "First Competitive Experience – E-Summit Case Study",
        date: "2022-01-20",
        category: "achievement",
        description:
          "Participated in my first national-level competition at SPIT E-Summit, finishing in the Top 12 out of 100+ teams across India.",
        icon: "Target",
      },
      {
        id: 2,
        title: "First Hackathon – Devopia, Hyderabad",
        date: "2023-09-15",
        category: "achievement",
        description:
          "Built an Inventory Tracker System with a team of 6 and finished in the Top 35 among 1000+ teams after 4 intense rounds.",
        icon: "Activity",
      },
      {
        id: 3,
        title: "First Hackathon Win – Aeravat AI Hackathon",
        date: "2024-02-20",
        category: "achievement",
        description:
          "Won first place at Aeravat AI Hackathon (SPIT) with a Deepfake Detection System. 800+ teams participated from 13+ cities.",
        icon: "Award",
      },
      {
        id: 4,
        title: "Second Hackathon Win – Learnify at KJSCE",
        date: "2024-04-12",
        category: "achievement",
        description:
          "Secured 3rd place out of 1200+ teams from 30+ cities with the Learnify AI Learning Platform at KJ Somaiya Hackathon.",
        icon: "Trophy",
      },
      {
        id: 5,
        title: "Started ML Blog Series",
        date: "2024-09-05",
        category: "achievement",
        description:
          "Launched my Introduction to Machine Learning blog series to simplify AI concepts for beginners.",
        icon: "PenTool",
      },
      {
        id: 6,
        title: "Open Source Contributor",
        date: "2024-10-20",
        category: "achievement",
        description:
          "Contributed to top libraries like NumPy, Pandas, Scikit-learn, and SciPy after consistent efforts and PRs.",
        icon: "GitBranch",
      },
      {
        id: 7,
        title: "Completed Major Research Project – WaveSplit",
        date: "2025-05-15",
        category: "achievement",
        description:
          "Finalized WaveSplit Audio Denoiser project based on NVIDIA CleanUNet; submitted for publication to IEEE Journal.",
        icon: "Mic",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
