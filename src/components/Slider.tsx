"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Masakan Nusantara yang beraneka ragam",
    image: "/slider1.jpg",
  },
  {
    id: 2,
    title: "Sate ayam dengan citarasa terbaik di Purwokerto",
    image: "/slider2_.jpg",
  },
  {
    id: 3,
    title: "Olahan ikan yang bervariasi dan menggiurkan lidah",
    image: "/slider3.jpg",
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col h-auto lg:h-[calc(100vh-8rem)] lg:flex-row bg-fuchsia-50'>
      {/* IMAGE CONTAINER */}
      <div className=' w-full h-[calc(100vh-4rem)] relative lg:h-full lg:w-full'>
        <Image src={data[currentSlide].image} alt="" fill className='object-cover object-center' />

        {/* TEXT CONTAINER */}
        <div className='absolute flex-1 flex items-center justify-center flex-col gap-8 bg-black/60 font-bold h-full w-full'>
          <h1 className='text-5xl z-10 text-center uppercase p-4 md:p-10 text-amber-400 md:text-6xl xl:text-7xl'>
            {data[currentSlide].title}
          </h1>
          <button className='bg-amber-400 z-40 text-white py-4 px-8'>Order Now</button>
        </div>
      </div>

    </div>
  )
}

export default Slider
