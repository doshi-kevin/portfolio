const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am an accomplished full-stack developer with extensive experience in building robust web applications using technologies like MongoDB, SQL, Express.js, React.js, and Django. I have a deep expertise in server-side rendering, seamless API integration, and efficient database management, enabling me to deliver high-performance, scalable web solutions tailored to meet diverse requirements.',
    },
    {
        id: 1,
        title: 'Research Skills',
        desc: "I have a strong foundation in research, particularly in power systems and data management. During my internship at IIT Bombay, I led the design and development of a comprehensive platform for mapping and sharing power system data. This involved in-depth analysis of power system components and diagnosing system inefficiencies. I also authored detailed project documentation to ensure the platform’s adaptability for future enhancements.",
    },
    {
        id: 2,
        title: 'Teaching Assistanceship',
        desc: 'As a Teaching Assistant at Sardar Patel Institute of Technology, I provided hands-on guidance to students in distributed computing under the supervision of Dr. Sudhir Dhage. I facilitated lab sessions, clarified complex concepts, and assisted students with their projects, ensuring they gained a deeper understanding of the subject matter. In addition to delivering constructive feedback on lab experiments, I was responsible for evaluating and grading student submissions. My role also involved closely monitoring academic progress and reporting key insights to the professor, contributing to the continuous improvement of student performance and course outcomes.',
    },
    {
        id: 3,
        title: 'Blogging',
        desc: "I write a Machine Learning blog series designed for all skill levels, from beginners to those with some background in ML. The series covers a wide range of topics, starting with foundational concepts and progressing to advanced techniques and real-world applications. My blog provides clear explanations, code snippets, and practical case studies, focusing on hands-on learning using Python libraries like NumPy, Pandas, Scikit-learn, TensorFlow, and PyTorch. The goal is to help readers understand both the theory and practical implementation of Machine Learning algorithms while building their skills to solve real-world problems.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "As an open-source contributor, I actively engage with prominent projects such as Pandas, SciPy, and Open-Deep-ML. These contributions have provided me with valuable learning experiences and the opportunity to collaborate with developers from around the world, helping to solve complex problems within the community.",
    },
    {
        id: 5,
        title: 'Hackathon and Competitive Programming',
        desc: "Having secured first place in the Aeravat AI Hackathon for AI in Security, I possess a strong background in competitive programming and hackathon challenges. My innovative approaches to deepfake detection and AI-based security solutions have been recognized for their precision and impact. In addition, I have consistently ranked among the top 5 in several other prestigious hackathons, both within and outside Mumbai, including national-level competitions such as the All India Hackathon. I continue to pursue cutting-edge research in AI and machine learning.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
