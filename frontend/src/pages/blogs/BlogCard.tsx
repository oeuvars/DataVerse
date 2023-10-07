// BlogCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
   id: number;
   main_heading: string;
   main_paragraph: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, main_heading, main_paragraph }) => {
  // Calculate the maximum number of lines you want to display
  const maxLines = 4;

  // Use CSS to truncate text after maxLines
  const paragraphStyle: React.CSSProperties = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: maxLines, // Limit the number of lines
    WebkitBoxOrient: 'vertical',
  };

  return (
    <Link to={`/blogs/${id}`} className="bg-white rounded-md shadow p-5 flex flex-col gap-3 hover:shadow-lg transition duration-500 ease-in-out cursor-pointer">
      <h2 className='text-xl'>{main_heading}</h2>
      <p className='text-base text-gray-800' style={paragraphStyle}>{main_paragraph}</p>
    </Link>
  );
};

export default BlogCard;
