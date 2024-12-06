"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSwipeable } from 'react-swipeable';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array gambar untuk slideshow
  const slides = [
    {
      image: "/images/com-9.jpeg",
      title: "AL - ALIM INDONESIA",
      subtitle: "Training Center Hotel & Cruises Ship"
    },
    {
      image: "/images/com-2.jpeg",
      title: "Pengalaman Belajar Terbaik",
      subtitle: "Dengan instruktur yang Berpengalaman"
    },
    {
      image: "/images/com-10.jpeg",
      title: "Siap Kerja",
      subtitle: "Di Industri Perhotelan dan Kapal Pesiar"
    }
  ];

  // Effect untuk mengatur slideshow otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const aboutContent = {
    title: "Tentang Kami",
    company: {
      title: "PT. MILENIAL ALALIM INDONESIA",
      description: `Merupakan salah satu perusahaan di Kota Bangkalan yang bergerak di bidang Pelatihan Kerja Pariwisata dan Perhotelan Swasta. Perusahaan kami menawarkan kerja sama dengan berbagai perusahaan nasional maupun instansi pemerintah berdasarkan bidang keahlian kami.`
    },
    companyProfile: {
      title: "Company Profile",
      description: `Company profile ini dibuat sebagai dasar pertimbangan, penawaran, kerja sama dan informasi jasa yang dapat dikerjakan oleh perusahaan kami. Perusahaan kami sangat berpengalaman dalam hal kerjasama dengan perusahaan-perusahaan nasional.`
    },
    experience: {
      description: `Dari beberapa pengalaman kerjasama yang telah kami bangun dapat menjadi salah satu pertimbangan memberikan kepercayaan kepada perusahaan kami.`
    },
    closing: `Demikian, kami ucapkan terimakasih atas kesempatan untuk dapat memberikan beberapa penyampaian tentang perusahaan kami dan kami harapkan kerjasamanya.`
  };

  // Array data portfolio untuk slideshow
  const portfolioSlides = [
    {
      image: "/images/porto-1.png",
      title: "(ACCOMODATION CLERK / ASST. EXECUTIVE HOUSEKEEPER DI KAPAL PESIAR)",
      subtitle: "Pengalaman sebagai staf kapal pesiar internasional",
    },
    {
      image: "/images/porto-2.png", 
      title: "STATEROOM STEWARD DI KAPAL PESIAR",
      subtitle: "Pengalaman sebagai staf kapal pesiar internasional",
    },
    {
      image: "/images/porto-3.png", 
      title: "UTILITY CLEANER DI KAPAL PESIAR",
      subtitle: "Pengalaman sebagai staf kapal pesiar internasional",
    },
    // Tambahkan slide lainnya sesuai kebutuhan
  ];

  const contactInfo = {
    phone: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telepon",
      info: "+62 813-1468-0003",
      link: "tel:+6281314680003"
    },
    email: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      info: "irawan.vicka@yahoo.com",
      link: "mailto:irawan.vicka@yahoo.com"
    },
    location: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Lokasi",
      info: "Jl. Trunojoyo III, RT. 002 / RW. 010, Pejagan, Bangkalan 69112",
      link: "https://maps.google.com/?q=Jl. Trunojoyo III, RT. 002 / RW. 010, Pejagan, Bangkalan 69112"
    }
  };

  // Effect untuk slideshow portfolio
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPortfolioSlide((prevSlide) => 
        prevSlide === portfolioSlides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(timer);
  }, []);

  const [currentPortfolioSlide, setCurrentPortfolioSlide] = useState(0);

  const nextPortfolioSlide = () => {
    setCurrentPortfolioSlide((prevSlide) => 
      prevSlide === portfolioSlides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevPortfolioSlide = () => {
    setCurrentPortfolioSlide((prevSlide) => 
      prevSlide === 0 ? portfolioSlides.length - 1 : prevSlide - 1
    );
  };

  // Tambahkan array gambar lokasi di bagian atas file, dekat dengan state lainnya
  const locationImages = [
    "/images/location.png",
    "/images/location-2.jpeg",
    "/images/location-3.png"
    // Tambahkan gambar lokasi lainnya sesuai kebutuhan
  ];

  const [currentLocationSlide, setCurrentLocationSlide] = useState(0);

  // Tambahkan useEffect untuk slideshow lokasi
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLocationSlide((prev) => 
        prev === locationImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Tambahkan fungsi untuk navigasi
  const nextLocationSlide = () => {
    setCurrentLocationSlide((prev) => 
      prev === locationImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevLocationSlide = () => {
    setCurrentLocationSlide((prev) => 
      prev === 0 ? locationImages.length - 1 : prev - 1
    );
  };

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

    {/* Hero Section dengan Slideshow */}
      <section id="home" className="pt-20 bg-gray-50 relative">
        <div className="relative h-[600px] overflow-hidden" {...handlers}>
          {/* Tombol Previous */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Tombol Next */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>Í
                  <p className="text-xl mb-8">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Indikator Slide */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{aboutContent.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{aboutContent.company.title}</h3>
              <p className="text-gray-600">
                {aboutContent.company.description}
              </p>
              <p className="text-gray-600">
                {aboutContent.companyProfile.description}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Pengalaman Kami</h3>
              <p className="text-gray-600">
                {aboutContent.experience.description}
              </p>
              <p className="text-gray-600 mt-4">
                {aboutContent.closing}
              </p>
              <p className="font-semibold mt-4">
                Hormat kami,<br />
                {aboutContent.company.title}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
          
          <div className="relative h-[500px] overflow-hidden rounded-xl">
            {/* Navigation Buttons */}
            <button 
              onClick={prevPortfolioSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button 
              onClick={nextPortfolioSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Slides */}
            {portfolioSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  currentPortfolioSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h3 className="text-2xl mb-4">{slide.title}</h3>
                    <p className="text-xl mb-4">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {portfolioSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentPortfolioSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentPortfolioSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Data Perusahaan</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="font-semibold">Nama Perusahaan</div>
                <div className="md:col-span-2">PT. Milenial Alaliim Indonesia</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="font-semibold">Alamat Perusahaan</div>
                <div className="md:col-span-2">Jl. Trunojoyo III, RT. 002 / RW. 010, Pejagan, Bangkalan 69112</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="font-semibold">Telepon</div>
                <div className="md:col-span-2">
                  <a href="tel:081314680003" className="text-blue-600 hover:underline">081314680003</a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="font-semibold">Email</div>
                <div className="md:col-span-2">
                  <a href="mailto:irawan.vicka@yahoo.com" className="text-blue-600 hover:underline">irawan.vicka@yahoo.com</a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="font-semibold">Akte Notaris Pendirian</div>
                <div className="md:col-span-2">AHU-017122.AH.01.30. Tahun 2024</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="font-semibold">NPWP Perusahaan</div>
                <div className="md:col-span-2">13.902.810.4-644.000</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="font-semibold">Rekening Bank</div>
                <div className="md:col-span-2">1850752547 (BCA)</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="font-semibold">Bidang Usaha</div>
                <div className="md:col-span-2">Pelatihan Kerja Pariwisata dan Perhotelan Swasta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {Object.entries(contactInfo).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 text-blue-600">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <a 
                href={value.link}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                target={key === 'location' ? '_blank' : undefined}
                rel={key === 'location' ? 'noopener noreferrer' : undefined}
              >
                {value.info}
              </a>
            </div>
          ))}
        </div>

        {/* Map Image Placeholder */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto relative h-[400px]">
          {/* Tombol Previous */}
          <button 
            onClick={prevLocationSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous location"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Tombol Next */}
          <button 
            onClick={nextLocationSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next location"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {locationImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                currentLocationSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Lokasi PT Millenial Alaliim Indonesia ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          ))}
          
          {/* Indikator Slide yang Diperbaiki */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {locationImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentLocationSlide === index ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentLocationSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p>&copy; 2024 PT. Milenial Alaliim Indonesia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
