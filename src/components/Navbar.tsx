"use client"
import Link from "next/link";
import React ,{ useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
    {title:"Home",path:"/"},
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav)
    };
    const closeNav = () => {
        setNav(false)
    }
    const menuVarients={
        open:{
            x:0,
            transition: {
                stiffness:20,
                damping: 15
            }
        },
        closed: {
            x:'-100%',
            transition: {
                stiffness:20,
                damping: 15
            }
        }
    }
    return (
        <div  className="text-white/70 pt-6 w-full ">
            <div className="hidden  md:flex justify-between px-10 items-center py-2  w-full">
               <div>
                 <h1 className="text-3xl font-bold text-[#E48A57] ">Adnan Khan</h1>
                </div> 
                <ul className="flex items-center flex-row p-4 space-x-8">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    <p className="hover:text-[#E48A57] duration-300 text-lg font-bold"> {link.title}</p>
                                </Link>
                            </li>

                        ))}
                    <li>
                        <a href="#contact" className="group">
                            <h1 className="text-lg font-bold text-white/70 cursor-pointer">Contact Me</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            {/* Mobile View */}
             <div className="md:hidden fixed bg-[linear-gradient(to_bottom,#000,#2B1942_45%,#8F5C55_90%)] top-0 py-5  w-full z-50 flex justify-between items-center px-4">
                <div><h1 className=" text-3xl font-bold text-[#E48A57] ">Adnan Khan</h1></div>
            <div onClick={toggleNav} className="  border rounded text-[#E48A57] border-[#E48A57] p-2 ">
               {nav ? <AiOutlineClose size={30} />: <AiOutlineMenu size={30}/>}
            </div>
            </div>
        <motion.div
        initial ={false}
        animate ={nav ? 'open' : 'closed' }
        variants={menuVarients}
        className="fixed top-0 left-0 w-full z-40 bg-[linear-gradient(to_top,#000,#2B1942_45%,#8F5C55_80%)]"
        >
            <ul className="text-4xl font-semibold my-24 text-center space-y-8">
                {
                    navLinks.map((link , index)=>(
                        <li key={index} className="text-white/60 font-bold hover:text-[#E48A57] ">
                        <Link href={link.path} onClick={closeNav}>
                        {link.title}
                        </Link>
                        </li>
                    ))
                }
                <li className="w-full group" >
                    <Link href={"#contact"} onClick={closeNav} className="cursor-pointer  text-white/60 "><span className="transition-all duration-300 hover:font-bold hover:text-orange-600">Contact</span></Link>
                   
                    <div className=" mx-auto w-[100px] mt-1 h-1  transition-all duration-300 ease-out bg-orange-400 rounded-full  group-hover:w-[120px]"></div>
                    <div className=" mx-auto  w-[70px] h-1  transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-[100px]"></div>
                    
                        {/* <a href="#contact" className="group">
                            <h1 className="text-2xl font-bold text-white/70 cursor-pointer">Contact Me</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
                            </div>
                        </a> */}
                    </li>
            </ul>

        </motion.div>

        </div>
    )
}

export default Navbar





