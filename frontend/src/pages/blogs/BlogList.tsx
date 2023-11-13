import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import { ArrowLeftCircleIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

interface BlogType {
  main_heading: string;
  main_paragraph: string;
  id: number
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleClick = () => {
    if (token) {
      navigate('/blogs-upload')
    } else {
      navigate('/login')
    }
  }
  useEffect(() => {
    axios.get('https://dataverse-k1w7.onrender.com/api/blogs').then((response) => {
      setBlogs(response.data.blogs);
    });
  }, []);

  return (
    <div className="">
      <div className='w-[90%] mx-auto justify-between flex'>
        <Link to="/" className='my-auto'>
          <ArrowLeftCircleIcon className="h-8 w-8 text-neutral-800" />
        </Link>
        <h1 className='text-5xl text-center py-10'>Blog List</h1>
        <button onClick={handleClick} className='my-auto'>
          <PencilIcon className="h-7 w-7 text-neutral-800 my-auto" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 w-[95%] mx-auto py-12">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            id={blog.id}
            main_heading={blog.main_heading}
            main_paragraph={blog.main_paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
