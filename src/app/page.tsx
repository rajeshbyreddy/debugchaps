import Navbar from '../components/Navbar';
import Link from 'next/link';
import { FaCode, FaMobileAlt, FaBrain, FaGraduationCap, FaRocket, FaCheckCircle, FaNodeJs, FaPython, FaDatabase, FaCloud, FaArrowRight, FaEnvelope, FaWhatsapp, FaLightbulb, FaClock, FaHandshake, FaTrophy } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home",
  description: "DebugChaps - Professional web development, mobile app development, and machine learning solutions. Transform your ideas into powerful digital experiences with cutting-edge technology.",
  keywords: [
    "web development company",
    "mobile app development",
    "machine learning solutions",
    "software development",
    "React development",
    "Next.js development",
    "Node.js development",
    "Python development",
    "academic project help",
    "full-stack development"
  ],
  openGraph: {
    title: "DebugChaps - Modern Development Solutions",
    description: "Professional web development, mobile app development, and machine learning solutions. Transform your ideas into powerful digital experiences.",
    url: "https://debugchaps.com",
    siteName: "DebugChaps",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "DebugChaps - Modern Development Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DebugChaps - Modern Development Solutions",
    description: "Professional web development, mobile app development, and machine learning solutions.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "https://debugchaps.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-black px-4">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/20 to-transparent"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent font-montserrat leading-tight">
              DebugChaps
            </h1>
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 leading-tight font-poppins px-2">
                Building <span className="text-blue-400 font-semibold">Web</span>, <span className="text-green-400 font-semibold">Mobile</span> & <span className="text-purple-400 font-semibold">Machine Learning</span>
              </h2>
              <div className="mt-2">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-blue-400 animate-typing font-roboto-mono">
                  Applications
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-inter font-light px-4">
              End-to-end development solutions for real-world and academic use cases. Transform your ideas into powerful digital experiences with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
              <button className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 font-poppins text-sm sm:text-base">
                <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
                Request a Project
              </button>
              <button className="w-full sm:w-auto group border-2 border-gray-400 hover:border-blue-400 text-gray-300 hover:text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-black/5 hover:bg-black/10 font-poppins text-sm sm:text-base">
                <span className="flex items-center justify-center gap-2">
                  Contact Us
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
            <div className="flex justify-center">
              <FaCode className="text-6xl sm:text-7xl md:text-8xl text-blue-400/60 animate-float" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1 sm:h-3 bg-gray-600 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-gray-900/50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent font-playfair px-2">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-inter font-light px-4">Comprehensive development solutions tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Link href="/web-development" className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm">
              <div className="bg-blue-500/10 p-3 sm:p-4 rounded-xl w-fit mb-4 sm:mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <FaCode className="text-3xl sm:text-4xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-300 transition-colors duration-300 font-montserrat">Web Application Development</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Modern, responsive web applications built with cutting-edge technologies and best practices.</p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-300 transition-colors duration-300 font-inter font-medium text-sm">
                Learn More
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
            <Link href="/mobile-development" className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm">
              <div className="bg-green-500/10 p-3 sm:p-4 rounded-xl w-fit mb-4 sm:mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
                <FaMobileAlt className="text-3xl sm:text-4xl text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-green-300 transition-colors duration-300 font-montserrat">Mobile Application Development</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Cross-platform mobile apps for iOS and Android using React Native and modern frameworks.</p>
              <div className="flex items-center text-green-600 group-hover:text-green-300 transition-colors duration-300 font-inter font-medium text-sm">
                Learn More
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
            <Link href="/ml-ai" className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm">
              <div className="bg-purple-500/10 p-3 sm:p-4 rounded-xl w-fit mb-4 sm:mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <FaBrain className="text-3xl sm:text-4xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-purple-300 transition-colors duration-300 font-montserrat">Machine Learning Solutions</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">AI-powered solutions for data analysis, prediction, and intelligent automation systems.</p>
              <div className="flex items-center text-purple-600 group-hover:text-purple-300 transition-colors duration-300 font-inter font-medium text-sm">
                Learn More
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
            <Link href="/academic-projects" className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 backdrop-blur-sm">
              <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-xl w-fit mb-4 sm:mb-6 group-hover:bg-yellow-500/20 transition-colors duration-300">
                <FaGraduationCap className="text-3xl sm:text-4xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300 font-montserrat">Academic Project Development</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Comprehensive support for academic projects and research implementations with guidance.</p>
              <div className="flex items-center text-yellow-600 group-hover:text-yellow-300 transition-colors duration-300 font-inter font-medium text-sm">
                Learn More
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat px-2">How We Work</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-poppins font-light px-4">Our streamlined process ensures quality and efficiency</p>
          </div>
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 rounded-full animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12">
              <div className="relative group">
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-2xl shadow-blue-500/40 group-hover:scale-110 transition-all duration-500 mx-auto lg:mx-0 mb-4 lg:mb-0 ring-4 ring-blue-500/20 group-hover:ring-blue-500/40">
                  <span className="group-hover:animate-bounce">1</span>
                </div>
                <div className="mt-4 lg:mt-24 bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-blue-900/10 group-hover:to-purple-900/10">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-blue-300 font-playfair text-center lg:text-left transition-colors duration-300">Requirement Discussion</h3>
                  <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base text-center lg:text-left group-hover:text-gray-300 transition-colors duration-300">We start by understanding your project requirements, goals, and vision in detail through comprehensive discussions.</p>
                </div>
              </div>

              <div className="relative group">
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-gradient-to-br from-purple-600 to-purple-800 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-2xl shadow-purple-500/40 group-hover:scale-110 transition-all duration-500 mx-auto lg:mx-0 mb-4 lg:mb-0 ring-4 ring-purple-500/20 group-hover:ring-purple-500/40">
                  <span className="group-hover:animate-bounce">2</span>
                </div>
                <div className="mt-4 lg:mt-24 bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-purple-900/10 group-hover:to-pink-900/10">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-purple-300 font-playfair text-center lg:text-left transition-colors duration-300">Planning & Architecture</h3>
                  <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base text-center lg:text-left group-hover:text-gray-300 transition-colors duration-300">Design scalable architecture, create detailed project roadmap, and establish technical specifications.</p>
                </div>
              </div>

              <div className="relative group">
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-gradient-to-br from-pink-600 to-pink-800 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-2xl shadow-pink-500/40 group-hover:scale-110 transition-all duration-500 mx-auto lg:mx-0 mb-4 lg:mb-0 ring-4 ring-pink-500/20 group-hover:ring-pink-500/40">
                  <span className="group-hover:animate-bounce">3</span>
                </div>
                <div className="mt-4 lg:mt-24 bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-pink-900/10 group-hover:to-purple-900/10">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-pink-300 font-playfair text-center lg:text-left transition-colors duration-300">Development & Testing</h3>
                  <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base text-center lg:text-left group-hover:text-gray-300 transition-colors duration-300">Agile development with continuous integration, testing, and quality assurance throughout the process.</p>
                </div>
              </div>

              <div className="relative group">
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-gradient-to-br from-green-600 to-green-800 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-2xl shadow-green-500/40 group-hover:scale-110 transition-all duration-500 mx-auto lg:mx-0 mb-4 lg:mb-0 ring-4 ring-green-500/20 group-hover:ring-green-500/40">
                  <span className="group-hover:animate-bounce">4</span>
                </div>
                <div className="mt-4 lg:mt-24 bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-green-900/10 group-hover:to-blue-900/10">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-green-300 font-playfair text-center lg:text-left transition-colors duration-300">Delivery & Deployment Support</h3>
                  <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base text-center lg:text-left group-hover:text-gray-300 transition-colors duration-300">Seamless deployment, comprehensive testing, and ongoing support for your production application.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DebugChaps Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat px-2">Why Choose DebugChaps</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-poppins font-light px-4">What sets us apart in delivering exceptional development solutions</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="bg-blue-500/10 p-3 sm:p-4 rounded-xl group-hover:bg-blue-500/20 transition-colors duration-300 flex-shrink-0">
                <FaCode className="text-2xl sm:text-3xl text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300 font-playfair">Clean & Scalable Code</h3>
                <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base">Well-structured, maintainable code that grows with your business and adapts to future requirements.</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-green-500/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="bg-green-500/10 p-3 sm:p-4 rounded-xl group-hover:bg-green-500/20 transition-colors duration-300 flex-shrink-0">
                <FaRocket className="text-2xl sm:text-3xl text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors duration-300 font-playfair">Modern Tech Stack</h3>
                <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base">Latest technologies and frameworks ensuring optimal performance, security, and scalability.</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="bg-purple-500/10 p-3 sm:p-4 rounded-xl group-hover:bg-purple-500/20 transition-colors duration-300 flex-shrink-0">
                <FaLightbulb className="text-2xl sm:text-3xl text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300 font-playfair">Industry-Standard Practices</h3>
                <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base">Following best practices, design patterns, and security standards for robust applications.</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-xl group-hover:bg-yellow-500/20 transition-colors duration-300 flex-shrink-0">
                <FaClock className="text-2xl sm:text-3xl text-yellow-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300 font-playfair">On-Time Delivery</h3>
                <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base">Reliable timelines with milestone-based delivery and transparent project management.</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-pink-500/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="bg-pink-500/10 p-3 sm:p-4 rounded-xl group-hover:bg-pink-500/20 transition-colors duration-300 flex-shrink-0">
                <FaHandshake className="text-2xl sm:text-3xl text-pink-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-pink-300 transition-colors duration-300 font-playfair">Clear Communication</h3>
                <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base">Regular updates, transparent communication, and collaborative approach throughout development.</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="bg-cyan-500/10 p-3 sm:p-4 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300 flex-shrink-0">
                <FaTrophy className="text-2xl sm:text-3xl text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300 font-playfair">Deployment Support</h3>
                <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base">Full support from development to production deployment with monitoring and maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat px-2">Our Tech Stack</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-poppins font-light px-4">Cutting-edge technologies we use to build exceptional solutions</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FaCode className="text-3xl sm:text-4xl text-blue-400" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 font-inter">Next.js</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FaCode className="text-3xl sm:text-4xl text-blue-400" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 font-inter">React</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-cyan-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <FaCode className="text-3xl sm:text-4xl text-cyan-400" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 font-inter">Tailwind CSS</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
                  <FaMobileAlt className="text-3xl sm:text-4xl text-green-400" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300 font-inter">React Native</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
                  <FaNodeJs className="text-3xl sm:text-4xl text-green-400" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300 font-inter">Node.js</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
                  <FaPython className="text-3xl sm:text-4xl text-yellow-400" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300 font-inter">Python</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <FaDatabase className="text-3xl sm:text-4xl text-purple-400" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 font-inter">MongoDB / MySQL</span>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FaCloud className="text-3xl sm:text-4xl text-blue-400" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 font-inter">Cloud Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent font-montserrat px-2">
              Have an idea or project in mind?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed font-poppins font-light px-4">
              Let's bring it to life together. Transform your vision into reality.
            </p>
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 mx-auto mb-6 sm:mb-8">
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            {/* <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 text-gray-400">
              <div className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300">
                <FaEnvelope className="text-xl sm:text-2xl" />
                <span className="text-base sm:text-lg">rajeshbyreddy95@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-green-400 transition-colors duration-300">
                <FaWhatsapp className="text-xl sm:text-2xl" />
                <span className="text-base sm:text-lg">7075979652</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-purple-900/5"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat">
              DebugChaps
            </h3>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-poppins font-light px-4">
              DebugChaps builds modern web applications, mobile applications, and machine learning–based academic and real-world solutions.
            </p>
          </div>

          {/* <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 text-gray-500 mb-4 sm:mb-6">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lg sm:text-xl" />
                <span className="text-sm sm:text-base">Contact: rajeshbyreddy95@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-lg sm:text-xl" />
                <span className="text-sm sm:text-base">7075979652</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto font-inter font-normal px-4">
              Project development and implementation support for academic learning purposes.
            </p>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
