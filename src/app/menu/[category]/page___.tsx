import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 border-b-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
          {/* img */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image className='object-contain' src={item.img} alt="" fill />
            </div>
          )}
          {/* text */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">Rp {item.price}</h2>
            <button className="hidden uppercase group-hover:block bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))
      }
    </div >
  )
}

export default CategoryPage
