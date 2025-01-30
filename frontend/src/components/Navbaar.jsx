import React from 'react'

const Navbaar = () => {
  return (
    <div>
      <nav className="bg-blue-600 p-4  mb-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold">MyApp</a>
        <ul className={`md:flex md:space-x-6 absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto left-0 md:flex-row flex-col items-center md:items-center`}>
          <li><a href="#" className="text-white px-4 py-2 block">Home</a></li>
          <li><a href="#" className="text-white px-4 py-2 block">About</a></li>
          <li><a href="#" className="text-white px-4 py-2 block">Services</a></li>
          <li><a href="#" className="text-white px-4 py-2 block">Contact</a></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbaar
