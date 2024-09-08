const portfolio = [
    {
        id: 0,
        projectName: "DeepShield",
        url: "https://github.com/doshi-kevin/AlphaQ_Aeravat",
        image: "projects/deepshield.png",
        projectDetail: "I achieved an impressive 96.13% precision in detecting deepfake videos and audio by employing a modular framework that integrates advanced detection methods. I enhanced accuracy by combining cutting-edge audio and sentiment analysis techniques with meticulous frame-by-frame image analysis. Additionally, I developed a robust weighted average scoring system to further optimize the precision and reliability of the detection.",
        technologiesUsed: [
            {
                tech: "Flask"
            },
            {
                tech: "Streamlit"
            },
            {
                tech: "Tensorflow"
            },
            {
                tech: "OpenCV"
            },
            {
                tech: "Librosa"
            },
        ]
    },
    {
        id: 0,
        projectName: "Learnify",
        url: "https://github.com/doshi-kevin/Devopia-BinaryCoders",
        image: "projects/learnify.png",
        projectDetail: "I developed an AI-driven K-12 education platform that provides personalized learning through features like text-to-comic converters and summarizers. The platform includes dashboard analytics, grade assessments, quiz tracking, and accessibility features such as sign language generation and text-to-speech. Additionally, I integrated a code editor, video recommendations, a feedback chatbot, and virtual conferencing with whiteboard capabilities.",
        technologiesUsed: [
            {
                tech: "Django"
            },
            {
                tech: "React"
            },
            {
                tech: "Tensorflow"
            },
            {
                tech: "Python"
            },
            {
                tech: "Postgress"
            },
        ]
    },
    {
        id: 0,
        projectName: "VoltVault",
        url: "https://voltvault-eight.vercel.app/login",
        image: "projects/voltvault.png",
        projectDetail: "I created a comprehensive power system database featuring secure multi-role authentication and an intuitive interface for managing and updating component information. I also produced detailed documentation and user manuals to support ongoing development. This project, developed during my internship at IIT Bombay, is now proposed to Tata Power.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "React"
            },
            {
                tech: "Firebase"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "StockWise",
        url: "",
        image: "projects/stockwise.png",
        projectDetail: "Implemented features for tracking and managing inventory, chatbots, inventory stock/sales prediction, and an algorithm for optimal stock supply management.",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "Django"
            },
            {
                tech: "ARIMA"
            },
            {
                tech: "Keras"
            },
            {
                tech: "SARIMAX"
            },
        ]
    },
    {
        id: 0,
        projectName: "Jobbee",
        url: "https://github.com/doshi-kevin/Jobbee",
        image: "projects/jon.png",
        projectDetail: "I developed a Job-Finding Platform with dual-level access for recruiters and applicants, offering a seamless experience. Recruiters can post job descriptions, locations, requirements, and deadlines, while applicants can browse listings, upload resumes, and manage applications. The platform includes essential functionalities like search, filtering, and application tracking, making it a comprehensive and user-friendly tool for job recruitment and search.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Django"
            },
            {
                tech: "AWS Bucket"
            },
            {
                tech: "Nextjs"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "MyDoc",
        url: "",
        image: "projects/mydoc.png",
        projectDetail: "Created a platform to detect diseases like pneumonia, lung cancer, and brain tumors through MRI image analysis using machine learning and deep learning.",
        technologiesUsed: [
            {
                tech: "Tensorflow"
            },
            {
                tech: "Keras"
            },
            {
                tech: "Flask"
            },
        ]
    },
    {
        id: 0,
        projectName: "6Valley",
        url: "",
        image: "projects/ecom.png",
        projectDetail: "I developed a multi-vendor e-commerce website featuring a dynamic marketplace where multiple vendors can list and manage their products. The platform includes robust functionalities for product catalog management, vendor-specific stores, secure payment processing, and real-time order tracking. Customers benefit from an intuitive shopping experience with advanced search, filtering options, and personalized recommendations, all while vendors can efficiently handle inventory, sales, and customer interactions.",
        technologiesUsed: [
            {
                tech: "Nextjs"
            },
            {
                tech: "Django"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
