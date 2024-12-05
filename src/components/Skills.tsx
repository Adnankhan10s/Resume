import React from 'react'
import { FaHtml5 , FaCss3Alt , FaReact ,FaJsSquare, FaGithub ,FaNodeJs } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";




const skillIcons = [
    {icon : <FaHtml5 size={120} className='md:w-[100px] w-[60px]' /> , label : "HTML"},
    {icon : <FaCss3Alt size={120} className='md:w-[100px] w-[60px]' /> , label : "CSS"},
    {icon : <FaJsSquare size={120} className='md:w-[100px] w-[60px]' /> , label : "JavaScript"},
    { icon : <FaReact size={90} className='md:w-[100px] w-[60px]'/> , label : "React Js"},
    {icon : <FaNodeJs size={120} className='md:w-[100px] w-[60px]' /> , label : "Node Js"},
    {icon : <RiNextjsFill size={120} className='md:w-[100px] w-[60px]' /> , label : "Next Js"},
    {icon : <SiRedux size={120} className='md:w-[100px] w-[60px]' /> , label : "Redux"},
    {icon : <FaGithub size={120} className='md:w-[100px] w-[60px]' /> , label : "Git"},


] ;



const Skills = () => {
  return (
    
    <div className='w-full bg-[linear-gradient(to_top,#000,#381a5f_80%)]  md:py-24 py-20 '>
       <div className='w-full text-white text-center mx-auto'>
              <h2 className='md:text-6xl text-4xl font-bold mb-6'>What I Do </h2>
        
        <div className='w-full mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-5 md:px-0 md:gap-6 justify-items-center '>
            {
                skillIcons.map((skill,index)=>{
                    return(
                        <div key={index} className='w-[140px] h-[180px] md:w-[220px] md:h-[220px] bg-white/10 flex flex-col justify-center items-center   rounded-xl' >
                       {skill.icon}
                       <p className='mt-2'>{skill.label}</p>
                        </div>
                    )
                }
                )
            }

        </div>


       </div>
        </div>









  )
}

export default Skills