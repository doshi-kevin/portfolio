import { useState, useRef } from 'react';
import { FiExternalLink, FiCalendar, FiAward, FiMaximize2, FiTag } from 'react-icons/fi';

const CertificateCard = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPreviewLoaded, setIsPreviewLoaded] = useState(false);
    const [showFullPreview, setShowFullPreview] = useState(false);
    const iframeRef = useRef(null);

    const handleViewCertificate = () => {
        window.open(data.pdfUrl, '_blank');
    };

    const toggleFullPreview = () => {
        setShowFullPreview(!showFullPreview);
    };

    const getTagColor = (tag) => {
        const colors = {
            'Educational': 'bg-blue-600 text-blue-100',
            'Achievement': 'bg-yellow-600 text-yellow-100',
            'Internship': 'bg-green-600 text-green-100',
            'Extra-curricular': 'bg-purple-600 text-purple-100'
        };
        return colors[tag] || 'bg-gray-600 text-gray-100';
    };

    return (
        <div 
            className="bg-DeepNightBlack border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center text-purple-400 mb-2">
                    <FiAward className="mr-2" size={20} />
                    <span className="text-sm font-medium">{data.issuer}</span>
                </div>
                <button
                    onClick={handleViewCertificate}
                    className="text-LightGray hover:text-white transition-colors duration-200 transform hover:scale-110"
                    title="View Certificate"
                >
                    <FiExternalLink size={18} />
                </button>
            </div>
            
            <h3 className="text-xl font-bold text-Snow mb-3 line-clamp-2">
                {data.title}
            </h3>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
                {data.tags?.map((tag, index) => (
                    <span
                        key={index}
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                    >
                        <FiTag className="mr-1" size={10} />
                        {tag}
                    </span>
                ))}
            </div>
            
            <p className="text-LightGray text-sm mb-4 line-clamp-3">
                {data.description}
            </p>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center text-LightGray text-sm">
                    <FiCalendar className="mr-2" size={16} />
                    <span>{data.date}</span>
                </div>
                
                <button
                    onClick={handleViewCertificate}
                    className={`px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-all duration-200 transform ${
                        isHovered ? 'scale-105' : ''
                    }`}
                >
                    View PDF
                </button>
            </div>
            
            {/* PDF Preview Rectangle */}
            <div className="mt-4 bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-LightGray text-xs">Certificate Preview</span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleFullPreview}
                            className="text-LightGray hover:text-white transition-colors duration-200"
                            title="Toggle full preview"
                        >
                            <FiMaximize2 size={14} />
                        </button>
                        <div className={`w-2 h-2 rounded-full ${isPreviewLoaded ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                    </div>
                </div>
                
                {showFullPreview ? (
                    <div className="w-full h-96 bg-white rounded border-2 border-gray-500 overflow-hidden">
                        <iframe
                            ref={iframeRef}
                            src={`${data.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                            width="100%"
                            height="100%"
                            title={`${data.title} Certificate Preview`}
                            className="border-0"
                            onLoad={() => setIsPreviewLoaded(true)}
                            onError={() => setIsPreviewLoaded(false)}
                        />
                    </div>
                ) : (
                    <div className="w-full h-32 bg-white rounded border-2 border-gray-500 overflow-hidden relative">
                        <iframe
                            src={`${data.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&zoom=50`}
                            width="200%"
                            height="200%"
                            title={`${data.title} Certificate Preview`}
                            className="border-0 absolute top-0 left-0 transform scale-50 origin-top-left"
                            onLoad={() => setIsPreviewLoaded(true)}
                            onError={() => setIsPreviewLoaded(false)}
                        />
                        <div 
                            className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 cursor-pointer flex items-center justify-center"
                            onClick={handleViewCertificate}
                        >
                            <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 text-center">
                                <FiExternalLink className="mx-auto mb-1 text-gray-800" size={20} />
                                <span className="text-gray-800 text-xs font-medium">Click to open</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CertificateCard;