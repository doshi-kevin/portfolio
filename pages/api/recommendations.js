// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Dr. A. M. Kulkarni',
    designation: 'Professor, Electrical Engineering, IIT Bombay',
    view: "Kevin demonstrated exceptional skills while creating a central repository for power system data at IIT Bombay. He designed scalable database schemas, implemented MongoDB pipelines, developed role-based access control, and created an intuitive UI. His proficiency in NextJS, TailwindCSS, and MongoDB, along with his diligent work ethic, made him a valuable asset to our research team.",
    linkednURL: "https://www.linkedin.com/in/anil-kulkarni-0a50378",
    recommendationPDF: "/recommendation_letters/kulkarni_recommendation.pdf",
    pdfIcon: "📄", // PDF icon for download button
    downloadText: "Download Full Letter"
  },
  {
    id: 1,
    name: 'Dr. Sudhir Dhage',
    designation: 'Professor (Dean of Academics), Computer Engineering, SPIT',
    view: "Kevin excelled as my Teaching Assistant for Distributed Computing, demonstrating exceptional teaching and communication skills. His expertise in Message Passing systems and Clock Synchronization algorithms enabled him to explain complex concepts with remarkable clarity. His initiative in organizing additional sessions and creating supplementary materials for struggling students showcased his unwavering commitment to educational excellence.",
    linkednURL: "https://www.linkedin.com/in/dr-sudhir-dhage-955a3533/",
    recommendationPDF: "/recommendation_letters/dhage_recommendation.pdf",
    pdfIcon: "📄", // PDF icon for download button
    downloadText: "Download Full Letter"
  },
  {
    id: 2,
    name: 'Professor Anand Godbole',
    designation: 'Professor, Computer Engineering, SPIT',
    view: "Kevin earned an A+ in Data Structures and is currently working on 'WaveSplit', a cutting-edge project combining CNNs with wavelet transformations for audio signal processing. His thorough research approach, proficiency in complex algorithm design using Python and TensorFlow, and persistence in optimizing performance demonstrate both his technical expertise and innovative thinking. His drive to tackle interdisciplinary challenges makes him an outstanding candidate.",
    linkednURL: "",
    recommendationPDF: "/recommendation_letters/godbole_recommendation.pdf",
    pdfIcon: "📄", // PDF icon for download button
    downloadText: "Download Full Letter"
  },
]

export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}