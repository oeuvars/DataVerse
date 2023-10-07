import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

interface FormData {
  main_heading: string;
  main_paragraph: string;
  [key: string]: string;
}

const Upload: React.FC = () => {
  const initialFormData: FormData = {
    main_heading: '',
    main_paragraph: '',
  };
  const navigate = useNavigate();
  useEffect (() => {
    const token = localStorage.getItem("token");
    if(!token) {
      navigate('/login')
    }
  })

  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const file = e.target.files?.[0];
   setImage(file || null);
 };

  const subheadingsAndParagraphs = [
    { sub_heading: 'Sub Heading 1', para: 'Paragraph 1' },
    { sub_heading: 'Sub Heading 2', para: 'Paragraph 2' },
    { sub_heading: 'Sub Heading 3', para: 'Paragraph 3' },
    { sub_heading: 'Sub Heading 4', para: 'Paragraph 4' },
    { sub_heading: 'Sub Heading 5', para: 'Paragraph 5' },
    { sub_heading: 'Sub Heading 6', para: 'Paragraph 6' },
    { sub_heading: 'Sub Heading 7', para: 'Paragraph 7' },
    { sub_heading: 'Sub Heading 8', para: 'Paragraph 8' },
  ];

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.main_heading.trim() || !formData.main_paragraph.trim()) {
      toast.error('Main heading and main paragraph are required.');
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:4000/api/upload', formData);
      setIsSubmitting(false);
      toast.success('Blog submitted successfully!');
    } catch (error) {
      setIsSubmitting(false);
      toast.error('Failed to submit blog. Please try again.');
    }
  };

  return (
    <div className='w-2/3 mx-auto'>
      <div className='text-4xl text-center mt-10'>Hi Editor</div>
      <div className='mt-20 flex flex-col gap-2'>
        <div>
          <h1 className='text-3xl text-center'>Main Heading</h1>
          <input
            type='text'
            name='main_heading'
            className='w-full border rounded-md py-3 outline-none bg-white/40 px-7 text-lg'
            placeholder='Main Heading'
            value={formData.main_heading}
            onChange={handleInputChange}
          />
          <h1 className='text-3xl text-center'>Main Paragraph</h1>
          <textarea
            name='main_paragraph'
            className='w-full border rounded-md py-3 outline-none bg-white/40 px-7 text-lg'
            placeholder='Main Paragraph'
            value={formData.main_paragraph}
            onChange={handleInputChange}
          />
        </div>
        <div>
            <input
               type="file"
               onChange={handleImageChange}
               accept="image/*"
            />
         {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
         </div>
        {subheadingsAndParagraphs.map((item, index) => (
          <div className='mt-20 flex flex-col gap-1'>
            <h1 className='text-2xl'>{item.sub_heading}</h1>
            <input
               type='text'
               name={`sub_heading_${index + 1}`}
               className='w-full border rounded-md py-3 outline-none bg-white/40 px-7 text-lg'
               placeholder={item.sub_heading}
               value={formData[`sub_heading_${index + 1}`] || ''}
               onChange={handleInputChange}
            />
            <h1 className='text-xl'>{item.para}</h1>
            <textarea
               name={`para_${index + 1}`}
               className='w-full border rounded-md py-2 outline-none bg-white/40 px-7 text-lg'
               placeholder={item.para}
               value={formData[`para_${index + 1}`] || ''}
               onChange={handleInputChange}
            />
         </div>
        ))}
      </div>
      <div className='py-10 flex justify-center mx-auto'>
        <button
          className='py-2 px-20 bg-black text-white'
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
      <Toaster position='bottom-center' />
    </div>
  );
};

export default Upload;
