import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import BlogCard from "../components/Blogs/BlogCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Blogs = () => {
    const { isLoading, error, data } = useQuery('blogs', () =>
        axios.get('api/blogs')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching blogs:', error)))
    
    return (
        <BannerLayout>
            <div className="flex flex-col items-center justify-center px-8 my-6">
                <h1 className="text-2xl md:text-3xl font-bold text-Snow mb-6">My Blog Posts</h1>
                <p className="text-LightGray text-center mb-10 max-w-3xl">
                    I write articles about Machine Learning, Deep Learning, and AI technologies.
                    Feel free to check out my blogs on Medium!
                </p>
                
                <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-6">
                    {
                        isLoading ?
                            [1, 2, 3, 4].map((_, index) => (
                                <ImageAndParagraphSkeleton key={index} className={"w-full object-cover"} />
                            ))
                            :
                            data?.map((blogData, key) => (
                                <BlogCard key={key} data={blogData} />
                            ))
                    }
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Blogs;