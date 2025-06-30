const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Sardar Patel Institute of Technology',
                degree: 'BTech, Computer Science Engineering',
                detail: "Aggregate CGPA - 8.37",
                year: '2021-2025',
                image: '/images/spit.jpg',
                cgpaData: [
                    { semester: 'Sem 1', cgpa: 6.77, date: 'Dec 2021' },
                    { semester: 'Sem 2', cgpa: 7.50, date: 'May 2022' },
                    { semester: 'Sem 3', cgpa: 8.50, date: 'Dec 2022' },
                    { semester: 'Sem 4', cgpa: 8.50, date: 'May 2023' },
                    { semester: 'Sem 5', cgpa: 8.80, date: 'Dec 2023' },
                    { semester: 'Sem 6', cgpa: 9.83, date: 'May 2024' },
                    { semester: 'Sem 7', cgpa: 9.63, date: 'Dec 2024' },
                ]
            },
            {
                id: 1,
                title: 'K.J.Somaiya College of Science and Commerce',
                degree: 'XII-HSC - Science',
                detail: "Percentage - 98.20%",
                year: '2019-2021',
                image: '/images/somaiya.jpg',
            },
            {
                id: 2,
                title: 'Pawar Public School, Bhandup',
                degree: 'X-ICSE',
                detail: "Percentage - 95.83%",
                year: '2006-2019',
                image: '/images/pawar.jpg',
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
                location: 'Mumbai, India',
                image: '/images/iitb.jpg',
            },
            {
                id: 2,
                title: 'Sardar Patel Institute of Technology',
                role: 'Teaching Assistant',
                url: 'under Dr. Sudhir Dhage ',
                desc: 'Under the supervision of Dr. Sudhir Dhage, I conducted lab sessions and provided conceptual guidance to AIML peers, helping them better understand distributed computing principles. I assessed and graded lab experiments and projects, offering constructive feedback to facilitate deeper learning and practical application of concepts. Additionally, I closely monitored student performance and reported progress to the professor, ensuring continuous academic improvement and alignment with course objectives.',
                year: '01/2024 - 05/2024',
                location: 'Mumbai, India',
                image: '/images/spit_ta.jpg',
            },
            {
                id: 3,
                title: 'I.E.E.E. S.P.I.T.',
                role: 'Head of Finance',
                url: 'https://ieee.spit.ac.in/',
                desc: "I oversaw financial operations, prepared budgets, and ensured strict adherence to expenditure limits to maintain financial stability. In addition, I directed event management, public relations, and marketing initiatives for the committee, successfully coordinating efforts to enhance visibility and engagement while ensuring smooth execution of all activities.",
                year: '08/2022 - 08/2023',
                location: 'Mumbai, India',
                image: '/images/ieee.jpg',
            },
        ]
    },
    {
        // Enhanced journey events with more details and proper date formatting
        journeyEvents: [
            {
                id: 1,
                title: 'Started Computer Science Engineering',
                date: '2021-08-01',
                category: 'education',
                description: 'Began my journey in Computer Science at SPIT.',
                icon: 'School',
            },
            {
                id: 2,
                title: 'First Technical Project',
                date: '2021-11-15',
                category: 'achievement',
                description: 'Completed my first technical project, a web application using React.',
                icon: 'Code',
            },
            {
                id: 3,
                title: 'Joined IEEE SPIT',
                date: '2022-01-10',
                category: 'professional',
                description: 'Became a member of IEEE SPIT student branch.',
                icon: 'Users',
            },
            {
                id: 4,
                title: 'Appointed as Head of Finance at IEEE',
                date: '2022-08-15',
                category: 'professional',
                description: 'Promoted to Head of Finance position at IEEE SPIT.',
                icon: 'TrendingUp',
            },
            {
                id: 5,
                title: 'First Hackathon Win',
                date: '2022-10-20',
                category: 'achievement',
                description: 'Won first place in college hackathon with an innovative ML solution.',
                icon: 'Award',
            },
            {
                id: 6,
                title: 'Published First Research Paper',
                date: '2023-03-05',
                category: 'achievement',
                description: 'Published research paper on machine learning algorithms in IEEE conference.',
                icon: 'FileText',
            },
            {
                id: 7,
                title: 'Started Teaching Assistant Role',
                date: '2024-01-15',
                category: 'professional',
                description: 'Began role as TA under Dr. Sudhir Dhage.',
                icon: 'BookOpen',
            },
            {
                id: 8,
                title: 'Research Internship at IIT Bombay',
                date: '2024-01-20',
                category: 'professional',
                description: 'Started research internship at IIT Bombay focusing on power systems.',
                icon: 'Search',
            },
            {
                id: 9,
                title: 'Achieved Highest CGPA',
                date: '2024-05-10',
                category: 'achievement',
                description: 'Reached personal best CGPA of 9.83 in Semester 6.',
                icon: 'Star',
            }
        ]
    }
]

export default function handler(req, res) {
    res.status(200).json(background)
}