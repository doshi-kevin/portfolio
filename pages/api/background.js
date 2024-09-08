const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Sardar Patel Institute of Technology',
                degree: 'BTech, Computer Science Engineering',
                detail: "Aggregate CGPA - 8.37",
                year: '2021-2025'
            },
            {
                id: 1,
                title: 'K.J.Somaiya College of Science and Commerce',
                degree: 'XII-HSC - Science',
                detail: "Percentage - 98.20%",
                year: '2019-2021'
            },
            {
                id: 2,
                title: 'Pawar Public School, Bhandup',
                degree: 'X-ICSE',
                detail: "Percentage - 95.83%",
                year: '2006-2019'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Indian Institute of Technology, Bombay',
                role: 'Research Intern',
                url: 'https://www.iitb.ac.in/',
                desc: 'I led the analysis of power system components and their properties to diagnose and resolve various system issues, ensuring optimal functionality and reliability. Additionally, I spearheaded the design and development of a platform aimed at efficiently mapping and facilitating data sharing of power system components, significantly improving collaboration and data accessibility. To support future system modifications, I authored comprehensive project documentation and user manuals, providing detailed instructions and technical insights for seamless implementation and maintenance.',
                year: '01/2024 - 06/2024',
                location: 'Mumbai, India'
            },
            {
                id: 2,
                title: 'Sardar Patel Institute of Technology',
                role: 'Teaching Assistant',
                url: 'under Dr. Sudhir Dhage ',
                desc: 'Under the supervision of Dr. Sudhir Dhage, I conducted lab sessions and provided conceptual guidance to AIML peers, helping them better understand distributed computing principles. I assessed and graded lab experiments and projects, offering constructive feedback to facilitate deeper learning and practical application of concepts. Additionally, I closely monitored student performance and reported progress to the professor, ensuring continuous academic improvement and alignment with course objectives.',
                year: '01/2024 - 05/2024',
                location: 'Mumbai, India'
            },
            {
                id: 3,
                title: 'I.E.E.E. S.P.I.T.',
                role: 'Head of Finance',
                url: 'https://ieee.spit.ac.in/',
                desc: "I oversaw financial operations, prepared budgets, and ensured strict adherence to expenditure limits to maintain financial stability. In addition, I directed event management, public relations, and marketing initiatives for the committee, successfully coordinating efforts to enhance visibility and engagement while ensuring smooth execution of all activities.",
                year: '08/2022 - 08/2023',
                location: 'Mumbai, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
