import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {  return (
    <footer className="bg-gray-100 border-t w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 md:py-6 text-center sm:text-left">
          {/* Logo and About Section */}          <div className="col-span-1 sm:col-span-2 space-y-2">
            <div className="flex flex-col items-center sm:items-start space-y-2">
              <Logo width="24px" className="sm:w-[30px]" />
              <span className="text-base sm:text-lg font-bold text-gray-800">MegaBlog</span>
            </div>
            <p className="text-gray-600 max-w-md mx-auto sm:mx-0 text-center sm:text-left text-xs sm:text-sm">
              Share your thoughts, stories, and expertise with the world. Join our community of writers and readers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-all duration-200 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-posts" className="text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:translate-x-1 inline-block">
                  All Posts
                </Link>
              </li>
              <li>
                <Link to="/add-post" className="text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Write a Post
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Contact</h3>
            <ul className="space-y-2">
              <li className="flex flex-col items-center sm:flex-row sm:items-start space-x-0 sm:space-x-3 text-gray-600 group hover:text-gray-900 transition-colors duration-200">
                <svg className="h-5 w-5 group-hover:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>nilesh0051bgs@gmail.com</span>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start space-x-0 sm:space-x-3 text-gray-600 group hover:text-gray-900 transition-colors duration-200">
                <svg className="h-5 w-5 group-hover:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Patna, India</span>
              </li>
            </ul>
          </div>
        </div>        {/* Social Media Links */}
        <div className="border-t border-gray-200 py-3 mt-2 text-center">
          <div className="text-center space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/sm_nileshkr121/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.013 7.052.072 5.773.13 4.548.39 3.465 1.473 2.382 2.556 2.122 3.781 2.064 5.06.013 8.332 0 8.756 0 12s.013 3.668.072 4.948c.058 1.279.318 2.504 1.401 3.587 1.083 1.083 2.308 1.343 3.587 1.401C8.332 23.987 8.756 24 12 24s3.668-.013 4.948-.072c1.279-.058 2.504-.318 3.587-1.401 1.083-1.083 1.343-2.308 1.401-3.587.059-1.28.072-1.704.072-4.948s-.013-3.668-.072-4.948c-.058-1.279-.318-2.504-1.401-3.587-1.083-1.083-2.308-1.343-3.587-1.401C15.668.013 15.244 0 12 0z" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              <a href="https://github.com/nilesh0198" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/nilesh0198/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>        {/* Copyright */}        <div className="border-t border-gray-200 py-3 mt-2 text-center">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} MegaBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer