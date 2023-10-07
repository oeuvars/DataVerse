import React, { useState } from 'react';
import loginbg from "../../assets/images/login.webp";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Toaster, toast } from "react-hot-toast"
import useMediaQuery from '../../hooks/useMediaQuery';
import { ArrowLeftCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Login: React.FC = () => {

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
   const [user,Setuser] = useState({
      email : "",
      password : ""
    })
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
     try {
      setIsLoggingIn(true);
      const res = await axios.post('http://localhost:4000/api/login',user)
      const newToken = res.data.token;
      localStorage.setItem('token', newToken);
      navigate('/blogs-upload')
      toast.success("You are logged in!", {
        style: {
          border: "2px solid rgba(255, 255, 255, 0.1)",
          padding: "10px",
          color: "#000",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          fontSize: '1.1em',
          minWidth: "10em",
        },
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
      });
     } catch (err) {
      toast.error("Please check your credentials", {
        style: {
          border: "2px solid rgba(255, 255, 255, 0.1)",
          padding: "10px",
          color: "#000",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          fontSize: '1.1em',
          width: "50em",
        },
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
      });
     } finally {
      setIsLoggingIn(false);
     }
    }

  return (
    <div className="min-h-screen grid lg:grid-cols-[1fr_2fr] landing-bg">
      {isAboveSmallScreens ? (
        <Link to="/" className='relative'>
          <ArrowLeftCircleIcon  className='absolute w-10 h-10 text-white hover:text-gray-300 font-medium transition duration-300 m-5'/>
          <img src={loginbg} alt='' className='h-full object-cover'/>
        </Link>
      ) : (
        <></>
      )}
      <div className="p-8 shadow-md rounded-lg phone:w-[90%] lg:w-[50%] m-auto bg-white/50">
        <h1 className="text-4xl py-2 font-semibold mb-4 header text-center">Log In</h1>

          <div className='mb-2'>
          <label htmlFor="email" className="block text-lg text-gray-800 font-medium ml-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-lg px-4 py-2 border-2 border-white/40 rounded-md focus:outline-none bg-gray-100 focus:border-white/10 transition duration-500 text-gray-700 font-medium"
              onChange={(e)=>{Setuser({...user,email:e.target.value})}}
            />
          </div>
          <label htmlFor="password" className="block text-lg text-gray-800 font-medium ml-1">Password</label>
          <div className="flex">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="w-full text-lg px-4 py-2 border-2 border-white/40 rounded-md focus:outline-none bg-gray-100 focus:border-white/10 transition duration-500 text-gray-700 font-medium"
              onChange={(e)=>{Setuser({...user,password:e.target.value})}}
            />
            <button
                onClick={togglePasswordVisibility}
                className='text-white bg-transparent border-0 outline-none focus:outline-none cursor-pointer -ml-10 animation'
            >
                {showPassword ? (<EyeIcon className='w-6 h-6 text-gray-700'/>) : (<EyeSlashIcon className='w-6 h-6 text-gray-700'/>)}
            </button>
          </div>
          <Toaster
              position="top-center"
              reverseOrder={false}
            />
          <button
            className={`w-full py-2 rounded-sm text-lg mt-7 ${
               isLoggingIn
                 ? 'bg-neutext-gray-700 font-medium/10 cursor-not-allowed border border-black/10'
                 : 'bg-black text-gray-100 font-medium hover:bg-neutral-800 transition duration-500 ease-in-out'
             }`}
             onClick={handleClick}
             disabled={isLoggingIn}
          >
            {isLoggingIn ? 'Logging In...' : 'Login'}
          </button>
      </div>
    </div>
  );
};

export default Login;
