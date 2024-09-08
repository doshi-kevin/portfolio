// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Anil Kulkarni',
    // image: "",
    designation: 'Professor | Indian Institute of Technology, Bombay',
    view: "Hey everyone! I’m excited to recommend Kevin Doshi for any opportunities related to building scalable systems and databases. During his internship at IIT Bombay, Kevin worked on the VoltVault project, showcasing impressive skills in system design and implementation. He tackled complex challenges with innovation and precision, led his team effectively, and communicated complex ideas clearly. Kevin’s dedication and technical expertise make him a valuable asset to any project or team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/anil-kulkarni-0a50378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: 1,
    name: 'Dr.Sudhir Dhage',
    // image: "images/sikandar.jpeg",
    designation: 'Professor, Sardar Patel Institute of Technology',
    view: "I highly recommend Mr. Kevin Doshi for any future endeavors. As a Teaching Assistant under my supervision, Kevin demonstrated exceptional teaching skills, a deep understanding of Distributed Computing, and a proactive approach to improving lab sessions. His ability to communicate complex concepts clearly and his dedication to student success were impressive. Kevin’s strong work ethic and commitment make him an invaluable asset to any team or academic setting.",
    linkednURL: "https://www.linkedin.com/in/dr-sudhir-dhage-955a3533/"
  },
  {
    id: 2,
    name: 'Rupali Sawant',
    // image: "images/nasir.jpg",
    designation: 'Assistant Professor, Sardar Patel Institute of Technology',
    view: "I highly recommend Mr. Kevin Doshi for any future opportunities. Kevin has demonstrated exceptional skills and dedication in projects such as 'Disease Detection Using Machine Learning' and the Grand Tomato Challenge. His technical expertise, innovative approach, and strong leadership abilities make him a valuable asset to any team or academic setting.",
    linkednURL: ""
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
