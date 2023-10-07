import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

interface BlogType {
  main_heading: string;
  main_paragraph: string;
  id: number
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/blogs').then((response) => {
      setBlogs(response.data.blogs);
    });
  }, []);

  return (
    <div className="">
      <h1 className='text-5xl text-center py-10'>Blog List</h1>
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
