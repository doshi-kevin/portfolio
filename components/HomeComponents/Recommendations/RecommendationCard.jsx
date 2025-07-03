import React from 'react'
import CardLayout from '../../Common/CardLayout'

const RecommendationCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="p-8 h-full relative card_stylings transition">
                {/* Profile Image */}
                {data?.image && (
                    <img 
                        src={data.image} 
                        alt={data.name} 
                        className="absolute z-10 right-10 -top-5 border-Green w-16 h-16 border-[3px] rounded-full m-0" 
                    />
                )}

                {/* Name + LinkedIn */}
                <div className="text-Snow underline italic">
                    {data?.linkednURL ? (
                        <a href={data.linkednURL} target="_blank" rel="noreferrer">
                            {data.name}
                        </a>
                    ) : (
                        <span>{data.name}</span>
                    )}
                </div>

                {/* Designation */}
                <div className="text-xs text-LightGray italic mt-1">{data?.designation}</div>

                {/* View / Recommendation text */}
                <div className="text-sm mt-2 text-LightGray font-normal">{data?.view}</div>

                {/* PDF Download Button */}
                {data?.recommendationPDF && (
                    <div className="mt-4">
                        <a
                            href={data.recommendationPDF}
                            target="_blank"
                            rel="noreferrer"
                            className="text-Green font-semibold flex items-center gap-2 hover:underline"
                        >
                            <span>{data.pdfIcon}</span>
                            <span>{data.downloadText}</span>
                        </a>
                    </div>
                )}
            </div>
        </CardLayout>
    )
}

export default RecommendationCard
