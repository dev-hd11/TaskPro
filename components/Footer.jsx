import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-around font-nunito text-white bg-slate-800 h-[8vh] md:text-lg text-xs'>
        <div className="version">
            Version 1.0
        </div>
      <footer>
        <span className='font-ubuntu'>TaskPro&trade;</span> &copy; Himank Deka, 2023 - {new Date().getFullYear()}.
      </footer>
    </div>
  )
}

export default Footer
