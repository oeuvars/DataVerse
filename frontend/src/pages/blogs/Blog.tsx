import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blogData, setBlogData] = useState<any>({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/blog/${id}`)
      .then((response) => {
        const fetchedBlog = response.data.blog[0];
        setBlogData(fetchedBlog);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const subheadingsAndParagraphs = [
    { sub_heading: blogData.sub_heading_1, paragraph: blogData.para_1 },
    { sub_heading: blogData.sub_heading_2, paragraph: blogData.para_2 },
    { sub_heading: blogData.sub_heading_3, paragraph: blogData.para_3 },
    { sub_heading: blogData.sub_heading_4, paragraph: blogData.para_4 },
    { sub_heading: blogData.sub_heading_5, paragraph: blogData.para_5 },
    { sub_heading: blogData.sub_heading_6, paragraph: blogData.para_6 },
    { sub_heading: blogData.sub_heading_7, paragraph: blogData.para_7 },
    { sub_heading: blogData.sub_heading_8, paragraph: blogData.para_8 },
  ];

  const formatText = (text: string): string => {
    const urlRegex = /((https?:\/\/|www\.)[^\s,]+)/g; // Updated regex
    const textWithLinks = text.replace(urlRegex, (url: string) => {
      let displayUrl = url;
      if (url.startsWith('http://') || url.startsWith('https://')) {
        displayUrl = url;
      } else if (url.startsWith('www.')) {
        displayUrl = `http://${url}`;
      }
      return `<a href="${displayUrl}" target="_blank" rel="noopener noreferrer" style="color: blue;">${url}</a>`;
    });
    const formattedText = textWithLinks.replace(/(\d+\.\s+)([^:]+:\s*)/g, (match: string, numberPart: string, boldPart: string) => {
      return `<strong>${boldPart}</strong>`;
    });
    const textWithLineBreaks = formattedText.replace(/\n/g, '<br />');
    return textWithLineBreaks;
  };

  return (
    <div className="w-[60%] mx-auto py-[5vw] flex flex-col gap-12">
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-wix-semibold text-left w-2/3'>{blogData.main_heading}</h1>
        <p className='text-lg font-medium'>{blogData.main_paragraph}</p>
      </div>
      {subheadingsAndParagraphs.map((item, index) => {
        if (item.sub_heading && item.paragraph) {
          return (
            <div className='flex flex-col gap-3' key={index}>
              <h1 className='text-xl font-wix-semibold'>{item.sub_heading}</h1>
              <p
                className='text-lg font-medium'
                dangerouslySetInnerHTML={{ __html: formatText(item.paragraph) }}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Blog;
