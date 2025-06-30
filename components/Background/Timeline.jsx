import React, { useState } from 'react';
import { School, Code, Users, TrendingUp, Award, FileText, BookOpen, Search, Star, ChevronDown, ChevronUp } from 'lucide-react';
import SimpleCGPAChart from './SimpleCGPAChart';

const Timeline = ({ events, showIntegratedView = false }) => {
    const [expandedItems, setExpandedItems] = useState({});
    
    // Function to get icon component based on icon name
    const getIcon = (iconName) => {
        const iconProps = { size: 20, className: getCategoryColor(iconName, "text") };
        
        switch(iconName) {
            case 'School': return <School {...iconProps} />;
            case 'Code': return <Code {...iconProps} />;
            case 'Users': return <Users {...iconProps} />;
            case 'TrendingUp': return <TrendingUp {...iconProps} />;
            case 'Award': return <Award {...iconProps} />;
            case 'FileText': return <FileText {...iconProps} />;
            case 'BookOpen': return <BookOpen {...iconProps} />;
            case 'Search': return <Search {...iconProps} />;
            case 'Star': return <Star {...iconProps} />;
            default: return <Award {...iconProps} />;
        }
    };
    
    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    };
    
    // Format year range from a dateString with a year range like "2021-2025"
    const formatYearRange = (yearRange) => {
        if (!yearRange) return '';
        
        // If it contains hyphen, it's already a range
        if (yearRange.includes('-')) {
            return yearRange;
        }
        
        // Otherwise, it's a single date
        return new Date(yearRange).getFullYear().toString();
    };
    
    // Get color based on category or icon (for backward compatibility)
    const getCategoryColor = (category, type = "bg") => {
        // For integrated view, determine category based on 'category' property
        if (showIntegratedView) {
            switch(category) {
                case 'education':
                    return type === "bg" ? "bg-blue-900/30 text-blue-300" : "text-blue-300";
                case 'professional':
                    return type === "bg" ? "bg-purple-900/30 text-purple-300" : "text-purple-300";
                case 'achievement':
                    return type === "bg" ? "bg-yellow-900/30 text-yellow-300" : "text-yellow-300";
                default:
                    return type === "bg" ? "bg-green-900/30 text-green-300" : "text-green-300";
            }
        }
        
        // For original view, determine based on icon
        switch(category) {
            case 'School':
                return type === "bg" ? "bg-blue-900/30 text-blue-300" : "text-blue-300";
            case 'Users':
            case 'TrendingUp':
            case 'Search':
            case 'BookOpen':
                return type === "bg" ? "bg-purple-900/30 text-purple-300" : "text-purple-300";
            case 'Award':
            case 'Star':
            case 'Code':
            case 'FileText':
                return type === "bg" ? "bg-yellow-900/30 text-yellow-300" : "text-yellow-300";
            default:
                return type === "bg" ? "bg-green-900/30 text-green-300" : "text-green-300";
        }
    };
    
    // Toggle expanded state for an item
    const toggleExpanded = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="w-full">
            {showIntegratedView ? (
                /* Integrated Timeline View */
                <div className="relative pl-8 border-l-2 border-Green/30">
                    {events.map((event) => {
                        const isExpanded = !!expandedItems[event.id];
                        const isMainEvent = event.isMainCard || (event.educationDetails || event.experienceDetails);
                        
                        return (
                            <div key={event.id} className={`mb-10 relative ${isMainEvent ? 'card_stylings p-5 rounded-lg' : ''}`}>
                                {/* Timeline dot */}
                                <div className={`absolute ${isMainEvent ? '-left-[35px]' : '-left-[25px]'} p-1 bg-DeepNightBlack rounded-full border-2 border-${getCategoryColor(event.category, "text")}`}>
                                    {getIcon(event.icon || (event.category === 'education' ? 'School' : event.category === 'professional' ? 'Briefcase' : 'Award'))}
                                </div>
                                
                                {/* Content header */}
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-1">
                                        {/* Image if available */}
                                        {event.image && isMainEvent && (
                                            <div className="mr-4 w-16 h-16 overflow-hidden rounded-md hidden md:block">
                                                <img 
                                                    src={event.image} 
                                                    alt={event.title} 
                                                    className="w-full h-full object-cover" 
                                                />
                                            </div>
                                        )}
                                        
                                        <div className="flex-1">
                                            <div className="text-xs text-LightGray/70 mb-1">
                                                {event.date ? formatDate(event.date) : ''}
                                                {event.educationDetails?.year && ` (${formatYearRange(event.educationDetails.year)})`}
                                                {event.experienceDetails?.year && ` (${event.experienceDetails.year})`}
                                            </div>
                                            <h3 className="text-lg text-Snow font-medium">{event.title}</h3>
                                            
                                            {/* Subtitle based on type */}
                                            {event.educationDetails && (
                                                <div className="text-sm text-LightGray mt-1 italic">
                                                    {event.educationDetails.degree}
                                                </div>
                                            )}
                                            {event.experienceDetails && (
                                                <div className="text-sm text-LightGray mt-1 italic">
                                                    {event.experienceDetails.role}
                                                </div>
                                            )}
                                            
                                            {/* Description */}
                                            <div className="text-sm text-LightGray mt-2">
                                                {event.description}
                                            </div>
                                            
                                            {/* Expand button for main education/experience cards */}
                                            {isMainEvent && (
                                                <button 
                                                    onClick={() => toggleExpanded(event.id)}
                                                    className="flex items-center text-xs text-Green mt-2 hover:text-Green/80"
                                                >
                                                    {isExpanded ? (
                                                        <>Less details <ChevronUp size={14} className="ml-1" /></>
                                                    ) : (
                                                        <>More details <ChevronDown size={14} className="ml-1" /></>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Category badge */}
                                    <span className={`inline-block px-3 py-1 text-xs rounded-full ${getCategoryColor(event.category)}`}>
                                        {event.category === 'education' ? 'Education' : 
                                         event.category === 'professional' ? 'Professional' : 'Achievement'}
                                    </span>
                                </div>
                                
                                {/* Expanded content */}
                                {isExpanded && (
                                    <div className="mt-4 pl-0 md:pl-20">
                                        {/* For education cards */}
                                        {event.educationDetails && (
                                            <>
                                                <div className="text-sm text-LightGray mb-4">
                                                    {event.educationDetails.detail}
                                                </div>
                                                
                                                {/* CGPA chart if available */}
                                                {event.educationDetails.cgpaData && (
                                                    <SimpleCGPAChart data={event.educationDetails.cgpaData} />
                                                )}
                                            </>
                                        )}
                                        
                                        {/* For experience cards */}
                                        {event.experienceDetails && (
                                            <>
                                                <div className="text-sm text-LightGray mb-4">
                                                    {event.experienceDetails.desc}
                                                </div>
                                                
                                                <div className="flex flex-col space-y-2 mb-4">
                                                    {event.experienceDetails.location && (
                                                        <div className="text-xs text-LightGray/70">
                                                            Location: {event.experienceDetails.location}
                                                        </div>
                                                    )}
                                                    {event.experienceDetails.url && (
                                                        <div className="text-xs text-Green hover:text-Green/80">
                                                            <a href={event.experienceDetails.url.startsWith('http') ? event.experienceDetails.url : '#'} 
                                                            target="_blank" 
                                                            rel="noreferrer">
                                                                {event.experienceDetails.url}
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : (
                /* Original Timeline View */
                <div className="relative pl-8 border-l-2 border-Green/30">
                    {events.map((event, index) => (
                        <div key={event.id} className="mb-10 relative">
                            {/* Timeline dot */}
                            <div className="absolute -left-[25px] p-1 bg-DeepNightBlack rounded-full border-2 border-Green">
                                {getIcon(event.icon)}
                            </div>
                            
                            {/* Content */}
                            <div className="card_stylings p-4 ml-6">
                                <div className="text-xs text-Green font-medium mb-1">
                                    {formatDate(event.date)}
                                </div>
                                <h3 className="text-lg text-Snow font-medium">{event.title}</h3>
                                <div className="text-sm text-LightGray mt-2">{event.description}</div>
                                
                                {/* Category badge */}
                                <span className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${
                                    event.category === 'education' 
                                        ? 'bg-blue-900/30 text-blue-300' 
                                        : event.category === 'professional'
                                            ? 'bg-purple-900/30 text-purple-300'
                                            : 'bg-yellow-900/30 text-yellow-300'
                                }`}>
                                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Timeline;