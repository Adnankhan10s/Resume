import React from 'react'
import { FaHtml5 , FaCss3Alt , FaReact ,FaJsSquare  } from 'react-icons/fa';


const skillIcons = [
    {icon : <FaHtml5 size={120} className='md:w-[100px] w-[60px]' /> , label : "HTML"},
    {icon : <FaCss3Alt size={120} className='md:w-[100px] w-[60px]' /> , label : "CSS"},
    { icon : <FaReact size={90} className='md:w-[100px] w-[60px]'/> , label : "React"},
    {icon : <FaJsSquare size={120} className='md:w-[100px] w-[60px]' /> , label : "JavaScript"},
] ;



const Skills = () => {
  return (
    // <div className='w-full bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32 overflow-clip '>
    //     <div className='text-white  w-full md:w-full mx-auto p-8 text-center'>
    //         <h2 className='md:text-6xl text-4xl font-bold md:mb-4 mb-6'>What I Do </h2>
    //         <div className='grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3 '>
    //             {skillIcons.map((skill , index)=>(
    //                 <div key={index} className=' w-[120px] h-[180px] p-2 flex flex-col justify-between items-center bg-white/10 rounded-xl md:h-[220px] md:w-[220px]'>
    //                     {skill.icon}
    //                     <p className='mt-2'>{skill.label}</p>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // </div>
    <div className='w-full bg-[linear-gradient(to_top,#000,#381a5f_80%)] md:py-32 py-20 '>
       <div className='w-full text-white text-center mx-auto'>
              <h2 className='md:text-6xl text-4xl font-bold mb-6'>What I Do </h2>
        
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center '>
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