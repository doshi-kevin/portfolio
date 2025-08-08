import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import CertificateCard from "../components/Certificates/CertificateCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Certificates = () => {
    const [selectedTag, setSelectedTag] = useState('All');
    const [sortBy, setSortBy] = useState('date'); // 'date' or 'alphabetical'
    
    const { isLoading, error, data } = useQuery('certificates', () =>
        axios.get('api/certificates')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching certificates:', error)));

    const availableTags = ['All', 'Educational', 'Achievement', 'Internship', 'Extra-curricular'];

    const getTagColor = (tag, isSelected) => {
        const baseColors = {
            'All': isSelected ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
            'Educational': isSelected ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200',
            'Achievement': isSelected ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
            'Internship': isSelected ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200',
            'Extra-curricular': isSelected ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
        };
        return baseColors[tag] || (isSelected ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300');
    };

    const filteredAndSortedData = data ? (() => {
        // Filter by selected tag
        let filtered = selectedTag === 'All' 
            ? data 
            : data.filter(cert => cert.tags?.includes(selectedTag));

        // Sort data
        if (sortBy === 'alphabetical') {
            filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        }
        // Default is already sorted by date from API
        
        return filtered;
    })() : [];

    const getCertificateCount = (tag) => {
        if (!data) return 0;
        if (tag === 'All') return data.length;
        return data.filter(cert => cert.tags?.includes(tag)).length;
    };
    
    return (
        <BannerLayout>
            <div className="flex flex-col items-center justify-center px-8 my-6">
                <h1 className="text-2xl md:text-3xl font-bold text-Snow mb-6">My Certificates</h1>
                <p className="text-LightGray text-center mb-10 max-w-3xl">
                    Here are my professional certifications and course completions, 
                    showcasing my commitment to continuous learning and skill development.
                </p>
                
                {/* Filter and Sort Controls */}
                <div className="w-full max-w-7xl mb-8">
                    {/* Tag Filters */}
                    <div className="mb-6">
                        <h3 className="text-Snow text-lg font-semibold mb-4 text-center">Filter by Category</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {availableTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${getTagColor(tag, selectedTag === tag)}`}
                                >
                                    {tag} ({getCertificateCount(tag)})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sort Controls */}
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-LightGray text-sm">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-DeepNightBlack border border-gray-600 text-Snow px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-purple-500 transition-colors duration-200"
                        >
                            <option value="date">Date (Newest First)</option>
                            <option value="alphabetical">Alphabetical</option>
                        </select>
                    </div>

                    {/* Results Count */}
                    <div className="text-center mt-4">
                        <p className="text-LightGray text-sm">
                            Showing {filteredAndSortedData.length} certificate{filteredAndSortedData.length !== 1 ? 's' : ''}
                            {selectedTag !== 'All' && ` in ${selectedTag}`}
                        </p>
                    </div>
                </div>
                
                <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid-rows-auto gap-6 w-full max-w-7xl">
                    {
                        isLoading ?
                            [1, 2, 3, 4, 5, 6].map((_, index) => (
                                <ImageAndParagraphSkeleton key={index} className={"w-full object-cover"} />
                            ))
                            :
                            filteredAndSortedData?.map((certificateData, key) => (
                                <CertificateCard key={key} data={certificateData} />
                            ))
                    }
                </div>
                
                {filteredAndSortedData && filteredAndSortedData.length === 0 && !isLoading && (
                    <div className="text-center py-12">
                        <p className="text-LightGray text-lg">
                            {selectedTag === 'All' 
                                ? "No certificates to display at the moment." 
                                : `No certificates found in ${selectedTag} category.`
                            }
                        </p>
                    </div>
                )}
                
                {error && (
                    <div className="text-center py-12">
                        <p className="text-red-400 text-lg">Error loading certificates. Please try again later.</p>
                    </div>
                )}
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Certificates;