// src/components/Header.jsx
import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow py-4">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-2xl font-bold text-purple-600">
          Pioneer Disability
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-gray-700">
          <li>
            <a href="#who-we-are" className="hover:text-white-600">
              Who We Are
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-purple-600">
              Services
            </a>
          </li>
          <li>
            <a href="#career" className="hover:text-purple-600">
              Career
            </a>
          </li>
          <li>
            <a href="#social-feed" className="hover:text-purple-600">
              Social Feed
            </a>
          </li>
          <li>
            <a href="#referrals" className="hover:text-purple-600">
              Referrals
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
