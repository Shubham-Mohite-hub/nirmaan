import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Brand & Description */}
        <div>
          <h2 className="text-xl font-bold">YourBrand</h2>
          <p className="text-sm mt-2">
            Empowering businesses with smart solutions. Let's build the future together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-3 space-y-2">
            <a href="#" className="block hover:text-gray-400">Facebook</a>
            <a href="#" className="block hover:text-gray-400">Twitter</a>
            <a href="#" className="block hover:text-gray-400">Instagram</a>
            <a href="#" className="block hover:text-gray-400">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
