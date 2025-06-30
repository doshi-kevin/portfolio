const blogs = [
    {
        id: 0,
        blogName: "0.0 - Machine Learning for Mortals: A Step-by-Step Guide to Not Losing Your Mind",
        url: "https://medium.com/@convey2kevin1012/0-0-machine-learning-for-mortals-a-step-by-step-guide-to-not-losing-your-mind-54b04f14dbdc",
        image: "blogs/blog0.webp",
        blogDetail: "This comprehensive guide introduces the fundamental concepts of Machine Learning, ideal for beginners without prior ML experience. Covering supervised and unsupervised learning with practical Python examples using scikit-learn, this blog serves as your starting point in understanding ML algorithms and applications.",
        technologies: [
            {
                tech: "Machine Learning"
            },
            {
                tech: "Python"
            },
            {
                tech: "scikit-learn"
            },
            {
                tech: "Data Science"
            }
        ]
    },
    {
        id: 1,
        blogName: "1.0 — The Why and What of Machine Learning: Uncovering the Basics",
        url: "https://medium.com/@convey2kevin1012/1-0-the-why-and-what-of-machine-learning-uncovering-the-basics-6542768b49a3",
        image: "blogs/blog1.webp",
        blogDetail: "An in-depth explanation of neural networks and deep learning architectures. This blog breaks down complex concepts like backpropagation, activation functions, and gradient descent into understandable components, complemented by TensorFlow implementation examples.",
        technologies: [
            {
                tech: "Regression"
            },
            {
                tech: "Classification"
            },
            {
                tech: "Testing"
            },
            {
                tech: "Applications of ML"
            }
        ]
    },
    {
        id: 2,
        blogName: "2.0 — Building an End-to-End Machine Learning Project: A Step-by-Step Guide",
        url: "https://medium.com/@convey2kevin1012/3-0-building-an-end-to-end-machine-learning-project-a-step-by-step-guide-0faf3e0350ca",
        image: "blogs/blog2.webp",
        blogDetail: "Explore practical computer vision applications using OpenCV and Python. This tutorial covers image processing, feature detection, object recognition, and video analysis with easy-to-follow code examples that demonstrate real-world solutions to common CV problems.",
        technologies: [
            {
                tech: "Fine Tuning"
            },
            {
                tech: "Pre-Processing"
            },
            {
                tech: "Machine Learning Projects"
            },
            {
                tech: "Visualizing Data"
            }
        ]
    },
    {
        id: 3,
        blogName: "3.0 — Classification Algorithms",
        url: "https://medium.com/@convey2kevin1012/3-0-classification-algorithms-455427cbd0ed",
        image: "blogs/blog3.webp",
        blogDetail: "This comprehensive guide to Natural Language Processing walks through text preprocessing, sentiment analysis, named entity recognition, and language generation. Learn how to implement NLP solutions using NLTK, spaCy, and transformers with practical Python code examples.",
        technologies: [
            {
                tech: "Classification"
            },
            {
                tech: "MNIST"
            },
            {
                tech: "Confusion Matrix"
            },
            {
                tech: "Precision and Recall"
            }
        ]
    },
]

export default function handler(req, res) {
    res.status(200).json(blogs)
}