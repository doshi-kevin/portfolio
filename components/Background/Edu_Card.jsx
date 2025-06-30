import React, { useState } from 'react'
import CardLayout from '../Common/CardLayout'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Edu_Card = ({ data }) => {
    const [showCGPA, setShowCGPA] = useState(false);
    
    // Handle toggling CGPA chart for SPIT
    const toggleCGPA = () => {
        if (data.cgpaData) {
            setShowCGPA(!showCGPA);
        }
    };

    // Custom tooltip component for the chart
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-DeepNightBlack p-3 border border-Green/20 rounded-md shadow-lg">
                    <p className="text-Snow text-sm font-medium">{label}</p>
                    <p className="text-Green text-sm">{`CGPA: ${payload[0].value}`}</p>
                    <p className="text-xs text-LightGray">{payload[0].payload.date}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <CardLayout className='keepItEmpty'>
            <div className="card_stylings transition px-8 py-10">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-start">
                            {/* Add the image */}
                            {data.image && (
                                <div className="mr-4 w-16 h-16 overflow-hidden rounded-md">
                                    <img 
                                        src={data.image} 
                                        alt={data.title} 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            )}
                            <div className="flex-1">
                                <div className="flex-initial text-[17px] text-Snow font-medium">{data.title}</div>
                                <div className="text-xs text-LightGray font-normal italic mt-1">
                                    {data.degree}
                                </div>
                                <div className="text-LightGray text-sm font-normal mt-4">
                                    {data.detail}
                                </div>
                                
                                {/* Show CGPA Chart button only for SPIT */}
                                {data.cgpaData && (
                                    <button 
                                        onClick={toggleCGPA}
                                        className="text-Green text-xs mt-4 hover:text-Green/80 underline"
                                    >
                                        {showCGPA ? "Hide CGPA Progress" : "Show CGPA Progress"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-items-center justify-center text-LightGray bg-DeepNightBlack ml-2 w-32 lg:w-28 h-10 text-xs rounded-full py-3 font-normal opacity-50 text-center">
                        {" "}
                        {data.year}{" "}
                    </div>
                </div>
                
                {/* CGPA Chart for SPIT */}
                {showCGPA && data.cgpaData && (
                    <div className="mt-6 bg-DeepNightBlack p-4 rounded-lg">
                        <div className="flex justify-between mb-4">
                            <h4 className="text-Snow text-sm">CGPA Progression</h4>
                            <div className="text-xs text-Green">
                                +{(data.cgpaData[data.cgpaData.length-1].cgpa - data.cgpaData[0].cgpa).toFixed(2)} growth
                            </div>
                        </div>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={data.cgpaData}
                                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis 
                                        dataKey="semester" 
                                        stroke="#aaa"
                                        tick={{ fill: '#aaa', fontSize: 10 }}
                                    />
                                    <YAxis 
                                        domain={[6, 10]} 
                                        stroke="#aaa"
                                        tick={{ fill: '#aaa', fontSize: 10 }}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line 
                                        type="monotone" 
                                        dataKey="cgpa" 
                                        stroke="#1fdf64" 
                                        strokeWidth={2}
                                        dot={{ fill: '#1fdf64', r: 4 }}
                                        activeDot={{ r: 6, fill: '#fff', stroke: '#1fdf64' }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex justify-between text-xs text-LightGray mt-2">
                            <div>{data.cgpaData[0].date}</div>
                            <div>{data.cgpaData[data.cgpaData.length-1].date}</div>
                        </div>
                    </div>
                )}
            </div>
        </CardLayout>
    )
}

export default Edu_Card