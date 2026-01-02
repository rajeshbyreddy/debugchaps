import Navbar from '../../components/Navbar';
import { FaMobileAlt, FaCheckCircle, FaArrowRight, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function MobileDevelopment() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black px-4">
        <div className="absolute inset-0 bg-linear-to-r from-green-600/10 via-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-900/20 to-transparent"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-600 to-green-800 rounded-full mb-6">
              <FaMobileAlt className="text-4xl sm:text-5xl text-white" />
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent font-montserrat leading-tight">
              Mobile Development
            </h1>
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 leading-tight font-poppins px-2">
                Native and cross-platform mobile apps
              </h2>
              <div className="mt-2">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-green-400 animate-typing font-roboto-mono">
                  that deliver exceptional user experiences
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-inter font-light px-4">
              Create powerful mobile applications that engage users, drive growth, and work seamlessly across iOS and Android platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
              <button className="w-full sm:w-auto group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center justify-center gap-3 font-poppins text-sm sm:text-base">
                <FaMobileAlt className="group-hover:rotate-12 transition-transform duration-300" />
                Request a Project
              </button>
              <button className="w-full sm:w-auto group border-2 border-gray-400 hover:border-green-400 text-gray-300 hover:text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 font-poppins text-sm sm:text-base">
                <span className="flex items-center justify-center gap-2">
                  View Portfolio
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat px-2">What We Build</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-poppins font-light px-4">Comprehensive mobile solutions for iOS, Android, and cross-platform development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm">
              <div className="bg-green-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
                <FaMobileAlt className="text-4xl text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300 font-playfair">Native iOS Apps</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">High-performance iOS applications built with Swift and SwiftUI for the best user experience.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Swift & SwiftUI</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>App Store optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>iOS design guidelines</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm">
              <div className="bg-blue-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <FaMobileAlt className="text-4xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300 font-playfair">Native Android Apps</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Robust Android applications using Kotlin and Jetpack Compose for modern development.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Kotlin & Jetpack Compose</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Google Play Store</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Material Design</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm">
              <div className="bg-purple-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <FaMobileAlt className="text-4xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300 font-playfair">Cross-Platform Apps</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">React Native and Flutter applications that work seamlessly on both iOS and Android.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>React Native & Flutter</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Code sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Faster development</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 backdrop-blur-sm">
              <div className="bg-pink-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-pink-500/20 transition-colors duration-300">
                <FaMobileAlt className="text-4xl text-pink-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-300 transition-colors duration-300 font-playfair">E-commerce Apps</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Mobile shopping experiences with secure payments and smooth user interfaces.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Mobile payments</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Push notifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Offline shopping</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 backdrop-blur-sm">
              <div className="bg-yellow-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-yellow-500/20 transition-colors duration-300">
                <FaMobileAlt className="text-4xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300 font-playfair">Social Networking Apps</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Community platforms with real-time messaging, media sharing, and user engagement.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Real-time messaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Media sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>User profiles</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm">
              <div className="bg-cyan-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-cyan-500/20 transition-colors duration-300">
                <FaMobileAlt className="text-4xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300 font-playfair">Productivity Apps</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Task management, collaboration, and workflow optimization tools for mobile users.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Task management</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Cloud sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Offline support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-green-900/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat px-2">Tech Stack</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-poppins font-light px-4">Modern technologies we use to build exceptional mobile applications</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/20 backdrop-blur-sm text-center">
              <div className="bg-green-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-green-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaMobileAlt className="text-3xl sm:text-4xl text-green-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-green-300 transition-colors duration-300 font-inter">React Native</span>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm text-center">
              <div className="bg-blue-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-blue-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaMobileAlt className="text-3xl sm:text-4xl text-blue-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 font-inter">Flutter</span>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm text-center">
              <div className="bg-purple-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-purple-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaMobileAlt className="text-3xl sm:text-4xl text-purple-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 font-inter">Swift</span>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/20 backdrop-blur-sm text-center">
              <div className="bg-pink-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-pink-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaMobileAlt className="text-3xl sm:text-4xl text-pink-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-pink-300 transition-colors duration-300 font-inter">Kotlin</span>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/20 backdrop-blur-sm text-center">
              <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-yellow-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaMobileAlt className="text-3xl sm:text-4xl text-yellow-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300 font-inter">Firebase</span>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm text-center">
              <div className="bg-cyan-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaMobileAlt className="text-3xl sm:text-4xl text-cyan-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 font-inter">SQLite</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For & Timeline */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat">Who It's For</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20">
                    <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white font-playfair mb-2">Consumer Apps</h3>
                      <p className="text-gray-300 font-inter font-normal text-sm sm:text-base">Engage users with intuitive mobile experiences that drive downloads and retention.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white font-playfair mb-2">Business Solutions</h3>
                      <p className="text-gray-300 font-inter font-normal text-sm sm:text-base">Mobile apps that streamline operations and improve productivity for your team.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white font-playfair mb-2">Startups & Enterprises</h3>
                      <p className="text-gray-300 font-inter font-normal text-sm sm:text-base">Scale your mobile presence with apps that grow with your business needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat">Timeline</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white font-playfair">Week 1-2: Planning & Design</h3>
                      <p className="text-gray-300 font-inter font-normal text-sm sm:text-base">User research, wireframing, and mobile UI/UX design for both platforms.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white font-playfair">Week 3-8: Development</h3>
                      <p className="text-gray-300 font-inter font-normal text-sm sm:text-base">Native or cross-platform development with regular testing and iterations.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white font-playfair">Week 9-10: Testing & Launch</h3>
                      <p className="text-gray-300 font-inter font-normal text-sm sm:text-base">Beta testing, app store submissions, and post-launch monitoring.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent font-montserrat px-2">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed font-poppins font-light px-4">
              Let's discuss your mobile app vision and bring it to life across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
              <button className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 mx-auto font-poppins">
                <FaMobileAlt className="group-hover:rotate-12 transition-transform duration-300" />
                Request a Project
              </button>
            </div>
            {/* <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 text-gray-400">
              <div className="flex items-center gap-3 hover:text-green-400 transition-colors duration-300">
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
    </div>
  );
}