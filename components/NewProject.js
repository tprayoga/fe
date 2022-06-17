import React from 'react'
import { AiFillGithub } from "react-icons/ai"
import { MdArrowRightAlt } from "react-icons/md"
import { BsBoxArrowUpRight } from "react-icons/bs"

const NewProject = () => {
  return (
    <div>
      <div className="container">
        <div className='px-4'>
            <h1 className='pt-8 pb-4 font-semibold text-4xl'>Let's build something new.</h1>
            <p className='text-slate-600 font-semibold pb-4'>To deploy a new Project, import an existing Git Repository or get started with one of our Templates.</p>
        </div>
        <div className=''>
          <div className=" bg-[#F8F8F8] p-4 mt-8">
            <div className="bg-white p-4 rounded">
              <h1 className='text-center font-medium text-lg pb-4'> File Name</h1>
              <div className='bg-[#F8F8F8] py-10 px-8 rounded '>
                <input type="text" placeholder='Title' className='rounded w-full py-2 px-4' />
                <button className='w-full py-1 bg-black text-white rounded mt-4 border border-black hover:bg-white hover:text-black  ease-in-out duration-200'>Create</button>
              </div>
            </div>
          </div>
          <div className=" bg-[#F8F8F8] p-4 ">
            <div className="bg-white p-4 rounded">
              <h1 className='text-center font-medium text-lg pb-4'> Import Git Repository</h1>
              <div className='bg-[#F8F8F8] pt-20 px-8 rounded '>
                <p className='text-center text-slate-700 text-sm px-10 pb-10'>Select a Git Provider to import an exiting project from a Git Repository</p>
                <button className="bg-black flex w-full px-4 rounded py-2 hover:opacity-80 ease-in-out duration-200">
                  <AiFillGithub className='text-white text-2xl'/>
                  <span className='text-white mx-auto'>Continue with github</span>
                </button>
                <div className='flex items-center justify-center pt-8 pb-12 text'>
                  <a href="#" className='flex items-center text-sky-500'>Manage Login Connecions <MdArrowRightAlt className='pt-1'/><BsBoxArrowUpRight /></a>
                  
                </div>
              </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default NewProject
