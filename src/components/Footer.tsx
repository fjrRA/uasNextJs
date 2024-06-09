import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <div className='h-auto md:h-24 p-4 lg:p-20 xl:p-10 text-white bg-amber-400 flex items-center justify-between'>
      <Link href="/" className='font-bold text-xl'>FAJAR CORP</Link>
      <p>© ALL RIGHT RESERVED</p>
    </div>
  )
}

export default Footer
