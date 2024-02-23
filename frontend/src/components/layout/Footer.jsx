import React from 'react'
import { Link } from 'react-router-dom'
import playStore from "../../images/playstore.png"
import appStore from "../../images/Appstore.png"

const Footer = () => {
  return (
    <footer className='mt-10 p-2 bg-blue-600 text-white flex items-center space-x-4'>
      <div className="flex flex-col items-center space-y-1">
      <h4 className='roboto text-sm md:text-lg'>DOWNLOAD OUR APP</h4>
      <p className='text-center text-sm font-sans md:text-lg'>Download App for Android and IOS</p>
      <img className="h-5 md:h-10  cursor-pointer" src={playStore} alt="playstore" />
      <img className=" h-5 md:h-10 selection:cursor-pointer"src={appStore} alt="Appstore" />
      </div>

      <div className='text-center space-y-1'>
        <h1 className='text-lg  md:text-xl font-roboto font-bold text-red-600'>EasyBuy</h1>
        <p className='max-w-40 font-sans text-sm md:text-lg'>Quality is our first priority</p>
        <p className='max-w-40 font-sans text-sm md:text-lg'>copyright 2021 &copy; EasyBuy</p>
      </div>

      <div className='flex flex-col items-center'>
        <h4 className='font-roboto text-sm md:text-lg underline'>Follow Us</h4>
        <Link to="https://www.instagram.com/" className='text-base md:text-lg font-sans font-medium text-white transition duration-500 ease-in-out m-1 hover:text-red-600'>Instagram</Link>
        <Link to="https://www.youtube.com/" className='text-base  md:text-lg font-sans font-medium text-white transition duration-500 ease-in-out m-1 hover:text-red-600'>YouTube</Link>
        <Link to="https://www.facebook.com/" className='text-base md:text-lg font-sans font-medium text-white transition duration-500 ease-in-out m-1 hover:text-red-600'>Facebook</Link>
      </div>
    </footer>
    
  )
}

export default Footer