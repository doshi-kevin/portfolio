const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'Expert full-stack developer with proven track record in MongoDB, SQL, Express.js, React.js, and Django. Specialized in creating high-performance web applications with seamless API integration and optimized database architecture. Consistently deliver scalable solutions that exceed client requirements.',
    },
    {
        id: 1,
        title: 'Machine Learning & Deep Learning',
        desc: 'Passionate ML/DL practitioner with extensive experience implementing neural networks, computer vision, and NLP solutions. Proficient in TensorFlow, PyTorch, and scikit-learn for developing predictive models and data-driven solutions. Strong focus on solving complex business problems through innovative AI approaches.',
    },
    {
        id: 2,
        title: 'Research Experience',
        desc: 'Led critical research initiatives at IIT Bombay, designing comprehensive platforms for power system data management. Applied advanced analytical methods to diagnose inefficiencies and developed scalable solutions. Created detailed technical documentation enabling seamless knowledge transfer.',
    },
    {
        id: 3,
        title: 'Academic Leadership',
        desc: 'Teaching Assistant for Distributed Computing at SPIT under Dr. Sudhir Dhage. Facilitated complex concept mastery, provided hands-on technical guidance, and evaluated student work. Implemented data-driven approaches to track and improve learning outcomes.',
    },
    {
        id: 4,
        title: 'Technical Content Creation',
        desc: 'Author of a popular Machine Learning blog series with comprehensive coverage from fundamentals to advanced implementations. Develop practical tutorials featuring NumPy, Pandas, scikit-learn, TensorFlow, and PyTorch that bridge theoretical concepts with real-world applications.',
    },
    {
        id: 5,
        title: 'Open Source & Competitive Excellence',
        desc: 'Active contributor to major open-source projects including Pandas, SciPy, and Open-Deep-ML. Champion of the Aeravat AI Hackathon (AI in Security) with innovative deepfake detection solutions. Consistently ranked in top 5 at national-level competitions, including the All India Hackathon.',
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}