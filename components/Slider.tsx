'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { SliderData } from './SliderData'

interface Slide {
  image: string
}

interface SliderProps {
  slides: Slide[]
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div>
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current ? 'opacity-[1] ease-in-1000 ' : 'opacity-0'
              }
            >
              <div className="relative flex justify-center p-4">
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  className="absolute top-[50%] left-[30%] text-white/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    objectFit="cover"
                    width={1440}
                    height={600}
                    alt="/"
                  />
                )}
                <FaArrowCircleRight
                  onClick={nextSlide}
                  className="absolute top-[50%] right-[30%] text-white/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Slider
