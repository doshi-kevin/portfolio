import React from 'react';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';

const SimpleCGPAChart = ({ data }) => {
    // Calculate the average CGPA
    const averageCGPA = data.reduce((sum, item) => sum + item.cgpa, 0) / data.length;
    
    // Calculate improvement from first to last semester
    const improvement = data[data.length-1].cgpa - data[0].cgpa;
    
    // Custom tooltip component
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-DeepNightBlack p-3 border border-Green/20 rounded-md shadow-lg">
                    <p className="text-Snow font-medium">{label}</p>
                    <p className="text-Green">{`CGPA: ${payload[0].value}`}</p>
                    <p className="text-xs text-LightGray">{payload[0].payload.date}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-EveningBlack/80 rounded-xl p-6">
            <h3 className="text-Snow text-lg font-medium mb-4">CGPA Progression</h3>
            
            <div className="flex flex-wrap items-center justify-between mb-4">
                <div className="flex space-x-6">
                    <div className="text-center">
                        <p className="text-xs text-LightGray">Starting</p>
                        <p className="text-Snow text-xl font-medium">{data[0].cgpa}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-LightGray">Current</p>
                        <p className="text-Snow text-xl font-medium">{data[data.length-1].cgpa}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-LightGray">Average</p>
                        <p className="text-Snow text-xl font-medium">{averageCGPA.toFixed(2)}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-LightGray">Improvement</p>
                        <p className="text-Green text-xl font-medium">+{improvement.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis 
                            dataKey="semester" 
                            stroke="#aaa"
                            tick={{ fill: '#aaa', fontSize: 12 }}
                        />
                        <YAxis 
                            domain={[6, 10]} 
                            stroke="#aaa"
                            tick={{ fill: '#aaa', fontSize: 12 }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <ReferenceLine 
                            y={averageCGPA} 
                            stroke="#8884d8" 
                            strokeDasharray="3 3" 
                            label={{ 
                                value: 'Average', 
                                position: 'right', 
                                fill: '#8884d8' 
                            }} 
                        />
                        <Line 
                            name="CGPA" 
                            type="monotone" 
                            dataKey="cgpa" 
                            stroke="#1fdf64" 
                            strokeWidth={3}
                            dot={{ fill: '#1fdf64', r: 6 }}
                            activeDot={{ r: 8, fill: '#fff', stroke: '#1fdf64' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            
            <div className="flex justify-between mt-4 text-xs text-LightGray">
                <div>From {data[0].date}</div>
                <div>To {data[data.length-1].date}</div>
            </div>
        </div>
    );
};

export default SimpleCGPAChart;