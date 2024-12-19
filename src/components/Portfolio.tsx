"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import project from '../assets/proj2.jpg';
import project1 from '../assets/proj1.png';
import project3 from '../assets/proj3.png'

const projects= [
    {
        title: "TODO-APP",
        desc : "This Todo App Created in Next.js 15 using AppRouter RESTFUL API Project.",
        devstack : "Next-Js , Mongo-DB , Typescript ",
        link : "https://todo-app-4gu3.vercel.app/",
        git : "https://github.com/Adnankhan10s/Todo-app",
        src: project1
    },
    {
        title: "Virtual Assistance Services Website",
        desc : "MNtrusted website provide real-estate VA services across the world lot of Services provides with professionals ",
        devstack : "Next.js , MongoDB , Ts , Framer-Motion , Nodemailer & Cloudinary",
        link : "https://mn-trusted.vercel.app/",
        git :"https://github.com/Adnankhan10s/MN-trusted",
        src: project  
    },
    {
        title: "Weather App",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore aut natus veritatis ab itaque nemo ducimus maiores, dolores veniam reprehenderit deleniti cumque voluptatum.",
        devstack : "Next.js , Tailwind CSS",
        link : "https://weather-steel-nine.vercel.app/",
        git :"https://github.com/Adnankhan10s/Weather",
        src: project3 
    }
]




const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-16 w-full' id='portfolio'>
        <h1 className='text-white md:text-6xl text-4xl text-center max-w-[320px] mx-auto font-semibold p-4 mb-4'> Selected 
        <span className='text-orange-400'> Projects </span> </h1>
        <div className='px-6 md:px-0 max-w-[1000px] mx-auto md:mt-40 mt-10 space-y-24'>
            {
                projects.map((project , index)=>(
                    <motion.div 
                    key={index}
                    initial={{opacity :0, y:75}}
                    whileInView={{opacity : 1 , y : 0}}
                    viewport={{once:false}}
                    transition={{duration : 0.5 , delay : 0.25 }}
                    className={`mt-12 flex flex-col gap-6 ${index % 2 === 1 ? " md:flex-row-reverse gap-12": " md:flex-row"}`}
                    >
                        <div className='space-y-2 w-full'>
                         <h2 className='text-white/70 text-7xl my-4'>{`0 ${index +1}`}</h2>
                         <h2 className='text-4xl'>{project.title}</h2>
                         <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                         <p className='text-xl text-orange-400 font-semibold'>{project.devstack}</p>
                         <div className='w-64 h-[1px] bg-gray-400 my-4'>
                         </div>
                         <div className='space-x-2 pt-3'>
                            <a href={project.link} className='px-4 py-2 bg-green-400 hover:text-gray-400 rounded'>Link </a>
                            <a href={project.git} className='px-4 py-2 bg-emerald-600 hover:text-gray-400 rounded'>Git</a>
                            </div>
                        </div>
                        <div className='flex justify-center items-center md:h-[300px] md:w-[500px] w-[310px] h-[270px] object-contain '>
                            <Image width={800} height={50} priority src={project.src} alt={project.title} className='md:h-[300px] md:w-[500px] h-[270px] border rounded border-gray-400 object-center' />
                        </div>

                    </motion.div>
                ))
            }

        </div>
          
    </div>
    
  )
}

export default Portfolio