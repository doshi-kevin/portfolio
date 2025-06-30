import React from 'react'
import Image from 'next/image'

const BlogCard = ({ data }) => {
    return (
        <div className="card_stylings bg-EveningBlack flex flex-col gap-y-4 h-auto boxShodow hover:scale-[1.02] transition-all">
            <a href={data?.url} target="_blank" rel="noreferrer">
                <div className="relative w-full h-48 overflow-hidden">
                    <img 
                        src={data?.image} 
                        alt={data?.blogName}
                        className="w-full h-full object-cover rounded-t-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-EveningBlack/80 to-transparent"></div>
                </div>
                <div className="p-4">
                    <h2 className='text-Snow font-medium text-base md:text-xl cursor-pointer'>{data?.blogName}</h2>
                </div>
                <div className="px-4">
                    <div className="h-[1px] w-full bg-[#1d1d1d]"></div>
                </div>
                <div className="px-4 py-1">
                    <p className='text-sm text-gray-400'>{data?.blogDetail}</p>
                </div>
                <div className="bg-MidNightBlack p-4 mt-auto">
                    <div className='flex flex-wrap items-center gap-2'>
                        {data?.technologies?.map((tech, i) => (
                            <span key={i} className='bg-EveningBlack text-Snow text-xs px-2 py-1 rounded'>{tech?.tech}</span>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BlogCard