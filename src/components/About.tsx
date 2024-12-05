"use client"
import React from 'react';
import Image from 'next/image';
import aboutImg from '../assets/profilepic.png';
import book from '../assets/book.png';
import pc from '../assets/pc.png';
import card from '../assets/card.png';
import finance from '../assets/finance.png';

const About = () => {
    return (
        <div className='w-full mx-auto md:px-4'id='about' >
              <div className='flex justify-center items-center md:my-10 my-5'>
             <button className='px-4 md:px-6 md:py-4 py-2 font-bold text-black rounded hover:text-gray-600 bg-gradient-to-r bg-orange-600 via-orange-400 from-white/45' >
                <a href="./AdnanKhan.pdf.docx" download='My-CV'>
                      Download CV
                </a>
             </button> 
            </div>
            <h1  className='text-white md:text-6xl text-center text-4xl max-w-[320px] mx-auto font-semibold p-4 mb-4'> About 
                <span className='text-orange-400'> Me </span> </h1>

            <div className='px-6 md:px-0 grid md:grid-cols-8 gap-6 place-items-center'>

                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex md:flex-row flex-col p-6'>
                        <Image src={book} alt='book' className='md:w-auto w-[100px] mx-auto md:mx-0 h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                            <p className='md:text-lg text-sm text-white/70 mt-2'>I hold a degree in Computer Science and I am focusing on technologies like HTML ,CSS ,Javascript ,React ,Next.js ,Express.js and Tailwind CSS.</p>
                        </div>
                    </div>

                </div>


                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex md:flex-row flex-col p-6'>
                        <Image src={pc} alt='book' className='md:w-auto w-[100px] mx-auto md:mx-0 h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Problem-Solving</h2>
                            <p className='md:text-lg text-sm text-white/70 mt-2'>I approach challenges with a logical and systematic mindset</p>
                        </div>
                    </div>

                </div>


                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex md:flex-row flex-col p-6'>
                        <Image src={card} alt='book' className='md:w-auto w-[100px] mx-auto md:mx-0 h-[130px]' />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
                            <p className='md:text-lg text-sm text-white/70 mt-2'>I have a diverse portfolio of projects</p>
                        </div>
                    </div>

                </div>


                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex md:flex-row flex-col p-6'>
                        <Image src={finance} alt='book' className='md:w-auto w-[100px] mx-auto md:mx-0 h-[130px]' />
                        <div className='flex flex-col  mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
                            <p className='md:md:text-lg text-sm  text-white/70 mt-2'>As a Fullstack Web Developer, I specialize in Salesforce, React JS, Next.js and Tailwind CSS. My expertise extends to creating responsive, user-friendly interfaces and efficient backend solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About