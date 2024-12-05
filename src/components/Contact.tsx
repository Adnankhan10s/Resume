"use client";
import React from 'react';
import Image from 'next/image';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import {  z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const schema = z.object({
    firstname:z.string().min(3,'Name must be atleast 3 characters'),
    lastname:z.string().min(3,'Name must be atleast 3 characters'),
    email:z.string().email("Invalid email address").nonempty('Email is Required'),
    phone:z.string().nonempty("Phone Number is Required"),
    message:z.string().nonempty("Message is required")

})
type FormData = z.infer<typeof schema>;



const Contact = () => {
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
    }=useForm<FormData>({
        resolver:zodResolver(schema),
    })

    const onSubmit=async(data:FormData)=>{
          const res = await axios.post("/api/users",data);
          reset();
          toast.success("Message Sent !");
          return 
    }
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>
         <ToastContainer />
        <div className='flex justify-center items-center'>
            <ul className='space-y-4'>
                <li className='flex items-center'>
                    <Image src={phone} alt='phone' className='md:h-[110px] md:w-auto w-[50px] mr-6' />
                    <p className='md:text-xl text-lg'>+92 3101126216</p>
                </li>
                <li className='flex items-center'>
                    <Image src={mail} alt='mail' className='md:h-[110px] md:w-auto w-[50px] mr-6' />
                    <p className='md:text-xl  text-lg '>adnankhan34r@gmail.com</p>
                </li>
            </ul>
        </div>
        <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
        <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let's Connect</h2>
        <p className='text-white/70 mb-6'>Send me a message and lets schedule a call !</p>
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)} >
           
            <div className='grid md:grid-cols-2 gap-4'>
                <input type='text' {...register("firstname")} className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='First Name' />
                {errors.firstname && <p className='font-semibold text-red-500'>{errors.firstname.message}</p>}
                <input type='text' {...register("lastname")} className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Last Name' />
                {errors.lastname && <p className='font-semibold text-red-500'>{errors.lastname.message}</p>}

                <input type='email' {...register("email")} className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Email' />
                {errors.email && <p className='font-semibold text-red-500'>{errors.email.message}</p>}

                <input type='phone' {...register("phone")} className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Phone' />
                {errors.phone && <p className='font-semibold text-red-500'>{errors.phone.message}</p>}

            </div>
            <textarea  {...register("message")} className='bg-black/70 rounded-xl w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Your Message' />
            {errors.message && <p className='font-semibold text-red-500'>{errors.message.message}</p>}

            <button type='submit' className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>

        </form>


        </div>

    </div>
  )
}

export default Contact