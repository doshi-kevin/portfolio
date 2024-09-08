import { useEffect, useState } from "react";

const Languages = () => {
    const [urdu, setUrdu] = useState(0);
    const [english, setEnglish] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (urdu < 98) {
                setUrdu(prevCount => prevCount + 1);
            }
            if (english < 88) {
                setEnglish(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [urdu, english]);

    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className="text-Snow text-xs font-bold">Languages</span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 justify-items-center">
                    <div className="w-20 h-8 flex items-center justify-center bg-gray-800 rounded-md">
                        <span className="text-xs font-bold text-white">Hindi</span>
                    </div>
                    <div className="w-20 h-8 flex items-center justify-center bg-gray-800 rounded-md">
                        <span className="text-xs font-bold text-white">English</span>
                    </div>
                    <div className="w-20 h-8 flex items-center justify-center bg-gray-800 rounded-md">
                        <span className="text-xs font-bold text-white">Gujarathi</span>
                    </div>
                    <div className="w-20 h-8 flex items-center justify-center bg-gray-800 rounded-md">
                        <span className="text-xs font-bold text-white">Marathi</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;
