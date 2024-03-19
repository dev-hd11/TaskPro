'use client'
import Navigation from "@/components/Navigation";
import { GoArrowRight } from 'react-icons/go'
import Link from "next/link";


export default function Home() {
  return (
    <div className="pic-bg backdrop-blur-lg">
      <Navigation />
      <div className="container md:h-[82vh] h-[79.5vh] flex flex-col gap-10 justify-center">
        <div className="flex flex-col justify-center items-center gap-7 bg-white bg-opacity-0 md:mb-8 mb-5">
          <h1 className="text-center md:text-7xl text-4xl font-extrabold font-verdana bg-gradient-to-r from-cyan-600 via-green-300 to-indigo-600 inline-block text-transparent bg-clip-text">
            Welcome to <span className="font-ubuntu">TaskPro&trade;</span>
          </h1>
          <p className="text-white md:text-xl text-xs font-ubuntu font-semibold">A light-weight version of Confidante&trade; to manage your tasks.</p>
        </div>
        <div className="flex items-center justify-center">
          <Link href={'/tasks'} className="btn text-white bg-white/10 backdrop-blur-sm md:p-5 p-3 flex items-center gap-3 rounded-xl border-2 border-slate-600 hover:border-cyan-300 transition-all duration-500"><span className="inner-content transition-all duration-500 flex items-center md:gap-3 gap-1"><span className="md:text-base text-xs">Get Started</span>  <GoArrowRight className="md:text-2xl text-md" /></span></Link>
        </div>
      </div>
    </div>
  );
}
