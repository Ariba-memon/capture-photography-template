import React from 'react'

interface HeroProps {
  heading: string
  message: string
}

const Hero: React.FC<HeroProps> = ({ heading, message }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen mb-[18rem] bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="p-5 text-white z-[2]  mt-[-10rem]">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-5 text-xl">{message}</p>
          <button className="px-8 py-2 border">Book</button>
        </div>
      </div>
    </>
  )
}

export default Hero
