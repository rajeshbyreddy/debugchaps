import Navbar from '../../components/Navbar';
import { FaBrain, FaCheckCircle, FaArrowRight, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function MLAI() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black px-4">
        <div className="absolute inset-0 bg-linear-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/20 to-transparent"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mb-6">
              <FaBrain className="text-4xl sm:text-5xl text-white" />
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 text-white bg-clip-text text-transparent font-montserrat leading-tight">
              ML/AI Interviews
            </h1>
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 leading-tight font-poppins px-2">
                Ace machine learning and AI interviews
              </h2>
              <div className="mt-2">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-purple-400 animate-typing font-roboto-mono">
                  algorithms, deep learning, and data science
                </span>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-inter font-light px-4">
              Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create intelligent applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
              <button className="w-full sm:w-auto group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-3 font-poppins text-sm sm:text-base">
                <FaBrain className="group-hover:rotate-12 transition-transform duration-300" />
                Request a Project
              </button>
              <button className="w-full sm:w-auto group border-2 border-gray-400 hover:border-purple-400 text-gray-300 hover:text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-black/5 hover:bg-black/10 font-poppins text-sm sm:text-base">
                <span className="flex items-center justify-center gap-2">
                  View Portfolio
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1 sm:h-3 bg-gray-600 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat px-2">What We Build</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-poppins font-light px-4">Advanced AI and machine learning solutions for modern business challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm">
              <div className="bg-purple-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <FaBrain className="text-4xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300 font-playfair">Predictive Analytics</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Machine learning models that forecast trends, customer behavior, and business outcomes.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Sales forecasting</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Customer segmentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Risk assessment</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 backdrop-blur-sm">
              <div className="bg-pink-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-pink-500/20 transition-colors duration-300">
                <FaBrain className="text-4xl text-pink-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-300 transition-colors duration-300 font-playfair">Computer Vision</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Image recognition, object detection, and visual data analysis systems.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Image classification</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Object detection</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Facial recognition</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm">
              <div className="bg-blue-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <FaBrain className="text-4xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300 font-playfair">Natural Language Processing</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Text analysis, sentiment detection, and conversational AI applications.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Chatbots & assistants</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Sentiment analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Text summarization</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm">
              <div className="bg-green-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
                <FaBrain className="text-4xl text-green-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300 font-playfair">Recommendation Systems</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Personalized recommendations that increase engagement and conversion rates.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Product recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Content personalization</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>User behavior analysis</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 backdrop-blur-sm">
              <div className="bg-yellow-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-yellow-500/20 transition-colors duration-300">
                <FaBrain className="text-4xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-300 transition-colors duration-300 font-playfair">Anomaly Detection</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">Identify unusual patterns and potential issues before they become problems.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Fraud detection</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>System monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Quality control</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm">
              <div className="bg-cyan-500/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-cyan-500/20 transition-colors duration-300">
                <FaBrain className="text-4xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300 font-playfair">Automated Workflows</h3>
              <p className="text-gray-400 leading-relaxed font-inter font-normal text-sm sm:text-base mb-4">AI-powered automation that streamlines business processes and reduces manual work.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Process automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Document processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400 text-xs" />
                  <span>Decision support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat px-2">Tech Stack</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-poppins font-light px-4">Modern AI and machine learning technologies we use to build intelligent solutions</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm text-center">
              <div className="bg-purple-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-purple-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaBrain className="text-3xl sm:text-4xl text-purple-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 font-inter">TensorFlow</span>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/20 backdrop-blur-sm text-center">
              <div className="bg-pink-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-pink-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaBrain className="text-3xl sm:text-4xl text-pink-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-pink-300 transition-colors duration-300 font-inter">PyTorch</span>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm text-center">
              <div className="bg-blue-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-blue-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaBrain className="text-3xl sm:text-4xl text-blue-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 font-inter">Scikit-learn</span>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/20 backdrop-blur-sm text-center">
              <div className="bg-green-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-green-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaBrain className="text-3xl sm:text-4xl text-green-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-green-300 transition-colors duration-300 font-inter">OpenAI API</span>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/20 backdrop-blur-sm text-center">
              <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-yellow-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaBrain className="text-3xl sm:text-4xl text-yellow-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300 font-inter">Hugging Face</span>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm text-center">
              <div className="bg-cyan-500/10 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300 mx-auto w-fit">
                <FaBrain className="text-3xl sm:text-4xl text-cyan-400" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 font-inter">Pandas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For & Timeline */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat">Who It's For</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:animate-ping"></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-purple-300 font-playfair mb-2 transition-colors duration-300">Data-Driven Companies</h3>
                      <p className="text-gray-300 group-hover:text-gray-200 font-inter font-normal text-sm sm:text-base transition-colors duration-300">Leverage AI to extract insights from your data and make smarter business decisions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-pink-900/20 to-blue-900/20 border border-pink-500/20 hover:border-pink-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 group">
                    <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0 group-hover:animate-ping"></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-pink-300 font-playfair mb-2 transition-colors duration-300">Tech Startups</h3>
                      <p className="text-gray-300 group-hover:text-gray-200 font-inter font-normal text-sm sm:text-base transition-colors duration-300">Build AI-powered products that solve real problems and scale rapidly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-900/20 to-green-900/20 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:animate-ping"></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 font-playfair mb-2 transition-colors duration-300">Enterprises</h3>
                      <p className="text-gray-300 group-hover:text-gray-200 font-inter font-normal text-sm sm:text-base transition-colors duration-300">Automate complex processes and gain competitive advantages with AI solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-montserrat">Timeline</h2>
                <div className="space-y-6 relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-6 bottom-6 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/20">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-blue-500/50 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white font-bold shadow-2xl shadow-purple-500/40 ring-4 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-500 group-hover:scale-110">
                      <span className="group-hover:animate-bounce">1</span>
                    </div>
                    <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-purple-300 font-playfair transition-colors duration-300">Week 1-2: Data Assessment & Planning</h3>
                      <p className="text-gray-300 group-hover:text-gray-200 font-inter font-normal text-sm sm:text-base transition-colors duration-300">Data analysis, problem definition, and AI solution architecture design.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-800 rounded-full flex items-center justify-center text-white font-bold shadow-2xl shadow-pink-500/40 ring-4 ring-pink-500/20 group-hover:ring-pink-500/40 transition-all duration-500 group-hover:scale-110">
                      <span className="group-hover:animate-bounce">2</span>
                    </div>
                    <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-pink-300 font-playfair transition-colors duration-300">Week 3-8: Model Development</h3>
                      <p className="text-gray-300 group-hover:text-gray-200 font-inter font-normal text-sm sm:text-base transition-colors duration-300">Data preprocessing, model training, and iterative optimization.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold shadow-2xl shadow-blue-500/40 ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-500 group-hover:scale-110">
                      <span className="group-hover:animate-bounce">3</span>
                    </div>
                    <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 font-playfair transition-colors duration-300">Week 9-10: Integration & Deployment</h3>
                      <p className="text-gray-300 group-hover:text-gray-200 font-inter font-normal text-sm sm:text-base transition-colors duration-300">System integration, testing, deployment, and performance monitoring.</p>
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent font-montserrat px-2">
              Ready to Harness AI Power?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed font-poppins font-light px-4">
              Let's explore how artificial intelligence can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3 mx-auto font-poppins">
                <FaBrain className="group-hover:rotate-12 transition-transform duration-300" />
                Request a Project
              </button>
            </div>
            {/* <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 text-gray-400">
              <div className="flex items-center gap-3 hover:text-purple-400 transition-colors duration-300">
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