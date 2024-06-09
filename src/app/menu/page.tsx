// import { menu } from '@/data'
import { MenuType } from '@/types/types';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// API LOCAL POSTGRESQL
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed!");

  }

  return res.json()
}

const MenuPage = async () => {

  // Tampilkan data
  const menu: MenuType = await getData()

  return (
    <div className='p-8 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem) flex flex-col md:flex-row items-center mb-[calc(90rem-44rem)] sm:mb-20 lg:mb-4'>
      {menu.map(category => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className='w-full h-full bg-cover p-4 mb-2 bg-yellow-500 border-2 border-rose-600 rounded-md sm:h-1/2 md:mr-2 lg:md-3 md:p-6 md:h-4/6'
          style={{ backgroundImage: `url(${category.img})` }}>
          <div className={` mt-5 w-1/2 md:w-full lg:w-5/6`}>
            <h1 className='uppercase text1 text-black font-extrabold text-3xl bg-orange-500/60 px-4 rounded-md'>{category.title}</h1>
            <p className='bg-black/60 text2 rounded-md text-2 px-2 py-4 text-white text-sm my-4 md:my-8'>
              {category.desc}
            </p>
            <button className={`hidden text2 md:block border-2 border-rose-600 bg-rose-600 text-${category.color === "black" ? "white" : "white"} py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage
