import React from 'react'
import { FaHtml5 , FaCss3Alt , FaReact ,FaJsSquare  } from 'react-icons/fa';


const skillIcons = [
    {icon : <FaHtml5 size={120} /> , label : "HTML"},
    {icon : <FaCss3Alt size={120} /> , label : "CSS"},
    { icon : <FaReact size={90} /> , label : "React"},
    {icon : <FaJsSquare size={120} /> , label : "JavaScript"},
] ;



const Skills = () => {
  return (
    <div className='w-full bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32 overflow-clip '>
        <div className='text-white  w-full md:w-full mx-auto p-8 text-center'>
            <h2 className='md:text-6xl text-4xl font-bold md:mb-4 mb-6'>What I Do </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3 '>
                {skillIcons.map((skill , index)=>(
                    <div key={index} className=' w-[120px] h-[180px] p-2 flex flex-col justify-between items-center bg-white/10 rounded-xl md:h-[220px] md:w-[220px]'>
                        {skill.icon}
                        <p className='mt-2'>{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    // <div className='w-full bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32 '>
    //    <div className='w-full text-white mx-auto'>

    //    </div>
    //     </div>









  )
}

export default Skills