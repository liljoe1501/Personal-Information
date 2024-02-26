import React from 'react'

interface Props {
    img: string;
    title: string;
  }



const ProjectItem = ({img, title}: Props) => {
  return (
    <div className='relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'> 
           <img src={img} alt="" className='rounded-xl group-hover:opacity-50'/>
           <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='font-bold text-1xl text-white tracking-wider text-center'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center '>LIL_JOE</p>
            <a href="">
                <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg '>More Info</p>
            </a>
           </div>
    </div>
  )
}

export default ProjectItem
