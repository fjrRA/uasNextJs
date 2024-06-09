"use client"

import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

const CategoryPage = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust this as needed

  // Searching
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPizzas, setFilteredPizzas] = useState(pizzas);

  useEffect(() => {
    // Perform filtering based on searchTerm
    const filtered = pizzas.filter((pizza) =>
      pizza.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pizza.price.toString().includes(searchTerm) // Adjust filter criteria as needed
    );

    setFilteredPizzas(filtered);
    setCurrentPage(1); // Reset to the first page when searchTerm changes
  }, [searchTerm]);

  // Calculate the current items to display based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPizzas = filteredPizzas.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="">
      <input
        className='m-5 p-2 bg-amber-100 rounded-md'
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search pizzas..."
      />
      <div className="flex flex-wrap text-red-500">
        {displayedPizzas.map((item) => (
          <Link
            className="w-full h-[60vh] border-r-2 border-b-2 border-b-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50"
            href={`/product/${item.id}`}
            key={item.id}
          >
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
        ))}
      </div>

      <div className="flex justify-center p-4 gap-5">
        {/* Buttons or links to navigate pages */}
        <button
          className='hover:bg-amber-400 size-auto p-2'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: Math.ceil(filteredPizzas.length / itemsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? 'active font-bold bg-amber-400 size-10' : 'font-thin'}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className='hover:bg-amber-400 size-auto p-2'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredPizzas.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default CategoryPage
