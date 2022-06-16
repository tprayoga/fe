import React, {useState} from 'react'
import { BiSearchAlt2, BiCoinStack, BiStar } from "react-icons/bi"

const Dashboard = () => {
  const [start, setStart] = useState(false)

  const handleClick = () => {}
  return (
    <>
       <div className="h-screen md:px-20 pl-2 pr-4 bg-[#FAFAFA]">
        {/* SEARCH BAR */}
        <div className="flex mt-4 mb-4 w-full gap-4">
            <label class="relative w-full ">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <BiSearchAlt2  className='text-slate-400 text-xl'/>
                </span>
                <input class="placeholder:text-p block border rounded py-1.5 pl-9 pr-3 focus:outline text-slate-200 w-full ease-in-out duration-100 " placeholder="Search..." type="text" name="search"/>
            </label>
            <div className="bg-black flex items-center justify-center rounded hover:bg-white border border-black ease-in-out duration-150 group cursor-pointer sm:w-1/3 xl:w-1/5" >
                <button className='text-white px-3 group-hover:text-black sm:hidden'>+</button>
                <button className='text-white px-3 group-hover:text-black hidden sm:inline-block'>+ New Project</button>
            </div>
        </div>

        {/* LIST */}
        <div className="">
            <a href='#' className="flex w-full justify-between items-center border-b pb-4 pt-4 hover:bg-slate-100">
                <div className='flex  items-center'>
                    <BiCoinStack className='mr-4 text-xl'/>
                    <p>Khayangan.id</p>
                </div>
                <div className='mr-2'>
                    <BiStar className='cursor-pointer text-slate-500 hover:text-black ease-in-out duration-100'/>
                </div>
            </a>
            <a href='#' className="flex w-full justify-between items-center border-b pb-4 pt-4 hover:bg-slate-100">
                <div className='flex  items-center'>
                    <BiCoinStack className='mr-4 text-xl'/>
                    <p>Khayangan.id</p>
                </div>
                <div className='mr-2'>
                    <BiStar className='cursor-pointer text-slate-500 hover:text-black ease-in-out duration-100'/>
                </div>
            </a>
            <a href='#' className="flex w-full justify-between items-center border-b pb-4 pt-4 hover:bg-slate-100">
                <div className='flex  items-center'>
                    <BiCoinStack className='mr-4 text-xl'/>
                    <p>Khayangan.id</p>
                </div>
                <div className='mr-2'>
                    <BiStar className='cursor-pointer text-slate-500 hover:text-black ease-in-out duration-100'/>
                </div>
            </a>
        </div>
       </div>
    </>
  )
}

export default Dashboard
