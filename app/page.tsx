"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-white shadow-md fixed w-full z-10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"  // Sesuaikan dengan nama file logo Anda
                alt="PT Millenial Alaliim Indonesia Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-sm">PT MILLENIAL ALALIIM <br /> INDONESIA</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a 
                  href="#home" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gray-50">
        <div className="container mx-auto px-6 py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Company</h1>
            <p className="text-xl text-gray-600 mb-8">We provide innovative solutions for your business</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Our Story</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
