import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/me.jpeg)] bg-left lg:bg-[20%] bg-cover"
    style={{backgroundSize: "30%"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex jusify-center items-center'>
            <div>
                <p data-aos="zoom-in-up">I am</p>
                <p data-aos="zoom-in-up">Zohaib</p>
                <p data-aos="zoom-in-up">Ahmed</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
