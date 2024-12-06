"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSwipeable } from 'react-swipeable';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

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
      title: "PT. MILENIAL ALALIIM INDONESIA",
      description: `Merupakan salah satu perusahaan di Kota Bangkalan yang bergerak di bidang Pelatihan Kerja Pariwisata dan Perhotelan Swasta. Perusahaan kami menawarkan kerja sama dengan berbagai perusahaan nasional maupun instansi pemerintah berdasarkan bidang keahlian kami.`
    },
    companyProfile: {
      title: "Company Profile",
      description: `Company profile ini dibuat sebagai dasar pertimbangan, penawaran, kerja sama dan informasi jasa yang dapat dikerjakan oleh perusahaan kami. Perusahaan kami sangat berpengalaman dalam hal kerjasama dengan perusahaan-perusahaan nasional.`
    },
    experience: {
      description: `Dari beberapa pengalaman kerjasama yang telah kami bangun dapat menjadi salah satu pertimbangan memberikan kepercayaan kepada perusahaan kami.`
    },
    closing: `Demikian, kami ucapkan terimakasih atas kesempatan untuk dapat memberikan beberapa penyampaian tentang perusahaan kami dan kami harapkan kerjasamanya.`,
    visiMisi: {
      visi: {
        title: "VISI",
        content: "Menjadi lembaga yang menghasilkan SDM yang kompeten, berkualitas, yang beraneka guna, terampil dan siap kerja."
      },
      misi: {
        title: "MISI",
        points: [
          "Menghasilkan SDM yang mandiri, percaya diri dan berani mengembangkan potensi yang dimilikinya.",
          "Membangun masyarakat yang berkualitas diri dalam menciptakan lapangan kerja.",
          "Membantu pemberantasan pengangguran dan penyaluran pekerjaan setelah pendidikan selesai."
        ]
      }
    },
    strategi: {
      title: "STRATEGI PERUSAHAAN",
      points: [
        "Melatih tenaga kerja dan menyediakan tenaga kerja yang sesuai dengan kebutuhan perusahaan atau pasar tenaga kerja.",
        "Peningkatan kerjasama dengan stakeholder dan pemerintah dalam penyerapan output lulusan yang ada di lembaga.",
        "Menjaga komitmen terhadap kualitas dan pelayanan yang baik kepada peserta pelatihan."
      ]
    }
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
      link: "https://maps.app.goo.gl/USYvafkyav3gBYZY9"
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

  // Tambahkan useEffect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset untuk header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <span className="text-sm font-semibold">PT. MILLENIAL ALALIIM <br /> INDONESIA</span>
            </div>
            
            {/* Desktop Navigation dengan active state */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 font-semibold'
                      : 'hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
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

          {/* Mobile Navigation dengan active state */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'portfolio', label: 'Portfolio' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-gray-50'
                        : 'hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

    {/* Hero Section dengan Slideshow */}
      <section id="home" className="pt-20 bg-gray-50 relative">
        <div className="relative h-[900px] overflow-hidden" {...handlers}>
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
          <h2 className="text-5xl font-bold text-center mb-12">{aboutContent.company.title}</h2>
          <h2 className="text-3xl font-bold text-center mb-12">Tentang Kami</h2>
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
            </div>
          </div>

          {/* Visi & Misi dalam grid terpisah */}
          <div className="grid md:grid-cols-2 gap-12 mt-4">
            {/* Visi */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{aboutContent.visiMisi.visi.title}</h3>
              <p className="text-gray-600">
                {aboutContent.visiMisi.visi.content}
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{aboutContent.visiMisi.misi.title}</h3>
              <ul className="space-y-2">
                {aboutContent.visiMisi.misi.points.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strategi Perusahaan */}
          <div className="mt-8 bg-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">{aboutContent.strategi.title}</h3>
            <ul className="space-y-4">
              {aboutContent.strategi.points.map((point, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="mr-2 font-bold">{index + 1}.</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
          
          <div className="relative h-[800px] overflow-hidden rounded-xl">
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
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h3 className="text-4xl mb-4">{slide.title}</h3>
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {Object.entries(contactInfo).map(([key, value]) => (
            <a 
              key={key}
              href={value.link}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              target={key === 'location' ? '_blank' : undefined}
              rel={key === 'location' ? 'noopener noreferrer' : undefined}
            >
              <div className="mb-4 text-blue-600">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <span className="text-gray-600 hover:text-blue-600 transition-colors">
                {value.info}
              </span>
            </a>
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
                alt={`Lokasi PT. Millenial Alaliim Indonesia ${index + 1}`}
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
      <footer className="bg-gradient-to-r from-blue-500 to-blue-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="PT Millenial Alaliim Indonesia Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div className="text-white">
                  <h3 className="font-bold text-lg">PT. Milenial Alaliim</h3>
                  <p className="text-blue-200">Indonesia</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm">
                Pelatihan Kerja Pariwisata dan Perhotelan Swasta yang berpengalaman dalam kerjasama dengan perusahaan-perusahaan nasional.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About Us' },
                  { href: '#portfolio', label: 'Portfolio' },
                  { href: '#contact', label: 'Contact' }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200 text-sm flex items-center"
                    >
                      <svg 
                        className="w-3 h-3 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                          clipRule="evenodd"
                        />
                      </svg>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-blue-200">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Jl. Trunojoyo III, RT. 002 / RW. 010, Pejagan, Bangkalan 69112</span>
                </li>
                <li>
                  <a href="tel:+6281314680003" className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors duration-200">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm">+62 813-1468-0003</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:irawan.vicka@yahoo.com" className="flex items-center space-x-3 text-blue-200 hover:text-white transition-colors duration-200">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm">irawan.vicka@yahoo.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 mt-8 border-t border-blue-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 text-sm">
                &copy; {new Date().getFullYear()} PT. Milenial Alaliim Indonesia. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
