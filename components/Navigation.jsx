import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    return (
        <div className='flex md:flex-row flex-col md:p-3 p-1 justify-between bg-white/20 backdrop-blur-sm sticky top-0 text-white items-center'>
            <div className="logo font-bold text-xl font-verdana ml-6 my-2 md:my-0">
                TaskPro&trade;
            </div>
            <nav className='flex list-none gap-7'>
                <Link href={'/'}><li className='md:p-3 p-2 md:text-base text-xs hover:bg-slate-600 cursor-pointer rounded-xl'>Home</li></Link>
                <Link href={'/'}><li className='md:p-3 p-2 md:text-base text-xs hover:bg-slate-600 cursor-pointer rounded-xl'>Finished Task</li></Link>
                <Link href={'/'}><li className='md:p-3 p-2 md:text-base text-xs hover:bg-slate-600 cursor-pointer rounded-xl'>GitHub</li></Link>
            </nav>
        </div>
    )
}

export default Navigation