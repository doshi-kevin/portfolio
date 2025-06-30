import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import Timeline from "../components/Background/Timeline";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import { School, Briefcase, Award, CalendarDays } from 'lucide-react';

function Background() {
    const [activeTab, setActiveTab] = useState("journey"); // Changed default to journey
    const [filter, setFilter] = useState("all"); // Filter for journey items
    
    const { isLoading, error, data } = useQuery('background', () =>
        axios.get('api/background')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching background data:', error)))

    // This combines all education, experience, and journey events into one unified dataset
    const getIntegratedJourneyData = () => {
        if (!data) return [];
        
        const journeyItems = data[2]?.journeyEvents || [];
        
        // Convert education items to journey format
        const educationItems = (data[0]?.eduCards || []).map(edu => ({
            id: `edu-${edu.id}`,
            title: edu.title,
            date: edu.year.split('-')[0] + '-01-01', // Convert year to date format
            category: 'education',
            description: `${edu.degree} • ${edu.detail}`,
            icon: 'School',
            image: edu.image,
            educationDetails: edu, // Keep original data for reference
            isMainCard: true
        }));
        
        // Convert experience items to journey format
        const experienceItems = (data[1]?.expCards || []).map(exp => ({
            id: `exp-${exp.id}`,
            title: exp.title,
            date: exp.year.split('-')[0] + '-01-01', // Extract year from range
            category: 'professional',
            description: `${exp.role} • ${exp.desc.substring(0, 100)}...`,
            icon: exp.title.includes('IEEE') ? 'Users' : 
                 exp.title.includes('Teaching') ? 'BookOpen' : 'Search',
            image: exp.image,
            experienceDetails: exp, // Keep original data for reference
            isMainCard: true
        }));
        
        // Combine all items and sort by date (newest first)
        const allItems = [...journeyItems, ...educationItems, ...experienceItems]
            .sort((a, b) => new Date(b.date) - new Date(a.date));
            
        // Apply filter if needed
        return filter === 'all' 
            ? allItems 
            : allItems.filter(item => item.category === filter);
    };

    return (
        <BannerLayout>
            {/* Tab navigation */}
            <div className="flex justify-center space-x-4 mb-8 pt-6">
                <button
                    onClick={() => setActiveTab("journey")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                        activeTab === "journey" 
                            ? "bg-Green text-MidNightBlack" 
                            : "bg-DeepNightBlack text-LightGray"
                    }`}
                >
                    My Journey
                </button>
            </div>
            
            {/* Journey Timeline Section with filtering */}
            {activeTab === "journey" && (
                <div className="px-4 pb-2">
                    {/* Category filters */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <button 
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 text-xs rounded-full font-medium transition flex items-center ${
                                filter === 'all' 
                                    ? 'bg-Green text-MidNightBlack' 
                                    : 'bg-DeepNightBlack text-LightGray'
                            }`}
                        >
                            <CalendarDays size={14} className="mr-1" />
                            All
                        </button>
                        <button 
                            onClick={() => setFilter('education')}
                            className={`px-4 py-2 text-xs rounded-full font-medium transition flex items-center ${
                                filter === 'education' 
                                    ? 'bg-blue-500 text-MidNightBlack' 
                                    : 'bg-DeepNightBlack text-LightGray'
                            }`}
                        >
                            <School size={14} className="mr-1" />
                            Education
                        </button>
                        <button 
                            onClick={() => setFilter('professional')}
                            className={`px-4 py-2 text-xs rounded-full font-medium transition flex items-center ${
                                filter === 'professional' 
                                    ? 'bg-purple-500 text-MidNightBlack' 
                                    : 'bg-DeepNightBlack text-LightGray'
                            }`}
                        >
                            <Briefcase size={14} className="mr-1" />
                            Professional
                        </button>
                        <button 
                            onClick={() => setFilter('achievement')}
                            className={`px-4 py-2 text-xs rounded-full font-medium transition flex items-center ${
                                filter === 'achievement' 
                                    ? 'bg-yellow-500 text-MidNightBlack' 
                                    : 'bg-DeepNightBlack text-LightGray'
                            }`}
                        >
                            <Award size={14} className="mr-1" />
                            Achievements
                        </button>
                    </div>
                    
                    {isLoading ? (
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((_, index) => (
                                <ParagraphSkeleton key={index} className={"p-8 h-24 w-full relative"} />
                            ))}
                        </div>
                    ) : (
                        data && (
                            <Timeline 
                                events={getIntegratedJourneyData()} 
                                showIntegratedView={true} 
                            />
                        )
                    )}
                </div>
            )}
            
            <Footer />
        </BannerLayout>
    );
}

export default Background;