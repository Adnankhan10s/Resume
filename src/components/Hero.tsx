"use client"
import React from 'react'
import Image from 'next/image';
import cursor from '../assets/icon1.png';
import lightining from '../assets/icon2.png'
import messege from '../assets/icon2.png';
import {motion} from 'framer-motion';
import profilepic from '../assets/profilepic.png'


const Hero = () => {
  return (
    <div className='w-full py-24   relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>
      
      <div className='absolute rounded-[50%] w-[3000px] h-[1300px] md:top-[550px] top-[400px] left-[50%] -translate-x-1/2
      bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'></div>
      <div className='relative'>
        <div className='md:text-8xl text-4xl font-bold text-center'>
            <h1 className='text-[#98B4CE]'>Hi, I am</h1>
            <h1 className='text-[#E48A57]'>Adnan Khan</h1>
        </div>
        <motion.div
        className='hidden md:block absolute md:left-[220px] md:top-[170px]'
        drag>
            <Image src={cursor} height={170} width={170} alt='cursor' draggable='false' />

        </motion.div>
        <motion.div
        className='hidden md:block absolute md:right-[220px] md:top-[20px]'
        drag>
            <Image src={lightining} height={120} width={120} alt='cursor' draggable='false' />

        </motion.div>
      
      <p className='text-xl text-center max-w-[500px] mx-auto mt-8 text-white/80'>
        I am a full-stack developer focused on creating websites that provide the best experience for users.
      </p>
    <Image
    src={profilepic}
    alt='profile picture'
    className='h-auto w-auto mx-auto'
    />
    </div>
    </div>
  )
}

export default Hero