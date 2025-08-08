const certificates = [
  {
    id: 1,
    title: "Certified Blood Donor",
    issuer: "Deepak Foundations - Anviksha Blood Bank",
    date: "02/11/2024",
    pdfUrl: "/certificates/Blood Donation.pdf",
    description: "A certified and reguler donor of blood",
    tags: ["Extra-curricular"]
  },
  {
    id: 2,
    title: "Mentorship Program",
    issuer: "Sardar Patel Institute of Technology",
    date: "20/06/2025",
    pdfUrl: "/certificates/Certificate_Kevin Doshi_Mentor.pdf",
    description: "Help and guide juniors to get a better grasp of college life and academics.",
    tags: ["Extra-curricular"]
  },
  {
    id: 3,
    title: "Cloud Computing Intern",
    issuer: "Academor",
    date: "27/09/2023",
    pdfUrl: "/certificates/Cloud Computing Intern.pdf",
    description: "",
    tags: ["Internship"]
  },
  {
    id: 4,
    title: "Content Writer",
    issuer: "EvePaper",
    date: "03/11/2022",
    pdfUrl: "/certificates/Content Writer.pdf",
    description: "",
    tags: ["Internship"]
  },
  {
    id: 5,
    title: "Data Analytics with Python",
    issuer: "National Programme on Technology Enhanced Learning",
    date: "15/04/2024",
    pdfUrl: "/certificates/Data Analytics with Python.pdf",
    description: "",
    tags: ["Educational"]
  },
  {
    id: 6,
    title: "Winner - Devopia Hackathon",
    issuer: "K.J. Somaiya College of Engineering",
    date: "14/04/2024",
    pdfUrl: "/certificates/Devopia - Hackathon.pdf",
    description: "",
    tags: ["Achievement"]
  },
  {
    id: 7,
    title: "Director of Marketing",
    issuer: "Rotary Club of Mumbai, Juhu",
    date: "30/08/2023",
    pdfUrl: "/certificates/Director of Marketing.pdf",
    description: "",
    tags: ["Extra-curricular"]
  },
  {
    id: 8,
    title: "Environment and Development",
    issuer: "National Programme on Technology Enhanced Learning",
    date: "20/10/2024",
    pdfUrl: "/certificates/Env and Dev.pdf",
    description: "",
    tags: ["Educational"]
  },
  {
    id: 9,
    title: "Winner - Aeravat Hackathon",
    issuer: "Sardar Patel Institute of Technology",
    date: "20/02/2024",
    pdfUrl: "/certificates/hackathon-aeravat.pdf",
    description: "",
    tags: ["Achievement"]
  },
  {
    id: 10,
    title: "Top 20 - Hacktopia Hackathon",
    issuer: "Guru Nnak Institute of Technology",
    date: "26/08/2023",
    pdfUrl: "/certificates/hacktopia-hackathon.pdf",
    description: "",
    tags: ["Achievement"]
  },
  {
    id: 11,
    title: "Head of Finance - IEEE S.P.I.T.",
    issuer: "Sardar Patel Institute of Technology",
    date: "31/08/2023",
    pdfUrl: "/certificates/Head of Finance.pdf",
    description: "",
    tags: ["Extra-curricular"]
  },
  {
    id: 12,
    title: "Innovation in Marketing and Marketing of Innovation",
    issuer: "National Programme on Technology Enhanced Learning",
    date: "20/04/2024",
    pdfUrl: "/certificates/Innovation in marketing.pdf",
    description: "",
    tags: ["Educational"]
  },
  {
    id: 13,
    title: "Int. Rank 208 - International Mathematics Olympiad",
    issuer: "Science Olympiad Foundation",
    date: "08/12/2012",
    pdfUrl: "/certificates/International Mathematics Olympiad.pdf",
    description: "",
    tags: ["Achievement"]
  },
  {
    id: 14,
    title: "Junior Pizza Maker",
    issuer: "Dominos India - Jubilant Foodworks",
    date: "01/08/2016",
    pdfUrl: "/certificates/Junior Pizza Maker.pdf",
    description: "",
    tags: ["Extra-curricular"]
  },
  {
    id: 15,
    title: "Top 10 - Logithon Hackathon",
    issuer: "Datta Meghe College of Engineering",
    date: "15/05/2024",
    pdfUrl: "/certificates/Logithon - Hackathon.pdf",
    description: "",
    tags: ["Achievement"]
  },
  {
    id: 16,
    title: "Head of Finance - IEEE S.P.I.T.",
    issuer: "Sardar Patel Institute of Technology",
    date: "31/08/2023",
    pdfUrl: "/certificates/Head of Finance.pdf",
    description: "",
    tags: ["Extra-curricular"]
  },
  {
    id: 17,
    title: "Head of Finance - IEEE S.P.I.T.",
    issuer: "Sardar Patel Institute of Technology",
    date: "31/08/2023",
    pdfUrl: "/certificates/Head of Finance.pdf",
    description: "",
    tags: ["Extra-curricular"]
  },
  {
    id: 18,
    title: "Int. Rank 983 - National Science Olympiad",
    issuer: "Science Olympiad Foundation",
    date: "26/11/2013",
    pdfUrl: "/certificates/National Science Olympiad.pdf",
    description: "",
    tags: ["Achievement"]
  },
  {
    id: 19,
    title: "Community Service Participant",
    issuer: "Rotaract Club of Mulund Hills",
    date: "16/01/2025",
    pdfUrl: "/certificates/Rotaract Club of Mulund.pdf",
    description: "",
    tags: ["Extra-curricular"]
  },
  {
    id: 20,
    title: "100 Days of Code - Python Bootcamp",
    issuer: "Udemy",
    date: "10/06/2023",
    pdfUrl: "/certificates/Udemy - 100 Days Python.pdf",
    description: "",
    tags: ["Educational"]
  },
  {
    id: 21,
    title: "Django Masterclass",
    issuer: "Udemy",
    date: "18/01/2024",
    pdfUrl: "/certificates/Udemy - Django.pdf",
    description: "",
    tags: ["Educational"]
  },
  {
    id: 22,
    title: "MERN Stack full E-Commerce Site",
    issuer: "Udemy",
    date: "08/08/2025",
    pdfUrl: "/certificates/Udemy - Mern Ecommerce Website.pdf",
    description: "",
    tags: ["Educational"]
  },
  {
    id: 23,
    title: "Nextjs and Django",
    issuer: "Udemy",
    date: "02/04/2024",
    pdfUrl: "/certificates/Udemy - nextjs and Django.pdf",
    description: "",
    tags: ["Educational"]
  },
  {
    id: 24,
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "18/11/2022",
    pdfUrl: "/certificates/Udemy - Web Dev Bootcamp.pdf",
    description: "",
    tags: ["Educational"]
  },
  {
    id: 25,
    title: "Research Intern",
    issuer: "Indian Institute of Technology, Bombay",
    date: "24/09/2024",
    pdfUrl: "/certificates/Research Intern.pdf",
    description: "",
    tags: ["Educational"]
  },
];

// Sort certificates by date (newest first)
const sortedCertificates = certificates.sort((a, b) => {
  const dateA = new Date(a.date.split('/').reverse().join('/'));
  const dateB = new Date(b.date.split('/').reverse().join('/'));
  return dateB - dateA;
});

export default function handler(req, res) {
  res.status(200).json(sortedCertificates);
}