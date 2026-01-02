import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { FaDatabase, FaNetworkWired, FaCogs, FaCode, FaJava, FaProjectDiagram, FaBookOpen, FaQuestionCircle, FaLightbulb, FaRocket, FaServer, FaGlobe, FaMicrochip, FaLaptopCode, FaBrain } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "E-Learning Platform - CSE Interview Preparation",
  description: "Comprehensive CSE interview preparation platform with detailed Q&A guides for DBMS, OS, CN, OOPS, and System Design. Master core computer science concepts with real-world examples and Java code.",
  keywords: [
    "CSE interview preparation",
    "computer science interview",
    "DBMS interview questions",
    "operating systems interview",
    "computer networks interview",
    "OOPS interview questions",
    "system design interview",
    "Java programming interview",
    "coding interview preparation",
    "technical interview questions"
  ],
  openGraph: {
    title: "CSE Interview Preparation Platform - DebugChaps",
    description: "Master computer science fundamentals with comprehensive Q&A guides, real-world examples, and Java code snippets for your next technical interview.",
    url: "https://debugchaps.com/e-learning",
    siteName: "DebugChaps",
    images: [
      {
        url: "/og-elearning.jpg",
        width: 1200,
        height: 630,
        alt: "CSE Interview Preparation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSE Interview Preparation Platform",
    description: "Master computer science fundamentals with comprehensive Q&A guides for technical interviews.",
    images: ["/og-elearning.jpg"],
  },
  alternates: {
    canonical: "https://debugchaps.com/e-learning",
  },
};

export default function ELearning() {
  const subjects = [
    {
      id: 'dbms',
      title: 'Database Management Systems',
      icon: FaServer,
      color: 'blue',
      description: 'Master SQL, normalization, transactions, and database design for interviews',
      topics: ['SQL Queries', 'Normalization', 'ACID Properties', 'Indexing', 'Joins', 'Triggers']
    },
    {
      id: 'cn',
      title: 'Computer Networks',
      icon: FaGlobe,
      color: 'green',
      description: 'Understand OSI model, TCP/IP, routing, and network protocols',
      topics: ['OSI Model', 'TCP/IP', 'HTTP/HTTPS', 'DNS', 'Routing', 'Firewalls']
    },
    {
      id: 'os',
      title: 'Operating Systems',
      icon: FaMicrochip,
      color: 'purple',
      description: 'Learn process scheduling, memory management, and system calls',
      topics: ['Process Scheduling', 'Memory Management', 'Deadlocks', 'File Systems', 'System Calls', 'Virtual Memory']
    },
    {
      id: 'oops',
      title: 'Object-Oriented Programming',
      icon: FaLaptopCode,
      color: 'yellow',
      description: 'Master OOP concepts, design patterns, and principles',
      topics: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction', 'Design Patterns', 'SOLID Principles']
    },
    {
      id: 'system-design',
      title: 'System Design',
      icon: FaBrain,
      color: 'pink',
      description: 'Design scalable systems, microservices, and high-level architecture',
      topics: ['Scalability', 'Load Balancing', 'Caching', 'Microservices', 'Databases', 'APIs']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-black dark:bg-black dark:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center ">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <FaRocket className="text-yellow-300" />
              <span className="text-white font-medium">Interview Preparation</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent font-montserrat leading-tight">
              Master CS Fundamentals
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight font-poppins px-2">
                Ace Your <span className="text-yellow-300 font-semibold">Technical Interviews</span> with Expert Guidance
              </h2>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-inter font-light px-2 sm:px-4">
              Comprehensive interview preparation covering core computer science subjects with real-world examples and proven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-20 px-0 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent font-playfair">
              Computer Science Subjects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-inter">
              Explore comprehensive Q&A guides for core computer science subjects to prepare for technical interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => {
              const IconComponent = subject.icon;
              return (
                <div
                  key={subject.id}
                  className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${subject.color}-500 to-${subject.color}-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {subject.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-inter mb-6 text-sm">
                      {subject.description}
                    </p>

                    {/* Topics Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {subject.topics.slice(0, 3).map((topic, i) => (
                          <span key={i} className="text-xs bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                            {topic}
                          </span>
                        ))}
                        {subject.topics.length > 3 && (
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full">
                            +{subject.topics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <Link
                      href={`/e-learning/${subject.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                    >
                      View Questions
                      <FaRocket className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Why This Resource?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Designed specifically for interview preparation with comprehensive coverage of essential topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaQuestionCircle className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Comprehensive Coverage</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Detailed Q&A format covering all essential topics for technical interviews at top tech companies.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Clear Explanations</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Simple, easy-to-understand explanations with practical examples to reinforce your understanding.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaRocket className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Interview Ready</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Structured content designed to help you confidently answer technical questions in interviews.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}