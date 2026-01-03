'use client';

import { useState } from 'react';
import { FaCode, FaCubes, FaShieldAlt, FaEye, FaSitemap, FaShapes, FaPlus, FaMinus, FaCheck, FaToggleOn, FaToggleOff, FaBookOpen, FaGraduationCap, FaLightbulb, FaPuzzlePiece, FaCog, FaNetworkWired, FaDatabase, FaRocket, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Navbar from '../../../components/Navbar';

export default function SystemDesign() {
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleTopic = (id: string) => {
    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompletedTopics(newCompleted);
  };

  const toggleCard = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const content = [
    {
      id: 'system-design-intro',
      question: "What is System Design?",
      icon: FaCode,
      answer: "System design is planning how to build a software system before actually building it. It's like drawing a blueprint before constructing a building.\n\nReal Example: Before building WhatsApp, engineers had to decide:\n\n• Where to store billions of messages?\n• How to send messages instantly to users?\n• How to handle 2 billion users online at the same time?",
      keyPoints: ['Planning phase', 'Blueprint creation', 'Scalability decisions', 'Architecture planning']
    },
    {
      id: 'hld-vs-lld',
      question: "What is the difference between HLD and LLD?",
      icon: FaCubes,
      answer: "HLD (High-Level Design) = Big picture, overall system structure\nLLD (Low-Level Design) = Detailed implementation, actual code design\n\nReal Example - Designing Uber:\n\n• HLD: \"We need a mobile app, backend servers, database, payment gateway, and maps API\"\n• LLD: \"The Trip class will have fields like tripId, userId, driverId, startLocation, endLocation, and methods like calculateFare(), updateLocation()\"",
      keyPoints: ['High-level overview', 'Low-level details', 'System architecture', 'Implementation design']
    },
    {
      id: 'monolithic-architecture',
      question: "What is Monolithic Architecture?",
      icon: FaShieldAlt,
      answer: "All features of an application are built as one single unit. Everything runs together in one codebase.\n\nReal Example:\n\n• Old Amazon (early 2000s) - Product search, cart, checkout, user login, recommendations - everything was in one application\n• If one part crashed, the entire website went down\n• Deploy the whole application even for a small change",
      keyPoints: ['Single unit', 'Tight coupling', 'Single codebase', 'All-or-nothing deployment']
    },
    {
      id: 'microservices-architecture',
      question: "What is Microservices Architecture?",
      icon: FaEye,
      answer: "Break the application into small, independent services. Each service handles one specific job.\n\nReal Example - Netflix (today):\n\n• User Service - handles login, profiles\n• Video Service - streams movies/shows\n• Recommendation Service - suggests what to watch\n• Billing Service - handles payments\n• If recommendation service crashes, you can still watch videos",
      keyPoints: ['Independent services', 'Loose coupling', 'Specific responsibilities', 'Fault isolation']
    },
    {
      id: 'scalability',
      question: "What is Scalability?",
      icon: FaSitemap,
      answer: "The ability of a system to handle more users or requests without breaking.\n\nReal Example:\n\n• BookMyShow during Avengers Endgame ticket release:\n  - Normal day: 10,000 users\n  - Movie release day: 10 million users trying to book tickets\n  - System must scale to handle 1000x traffic without crashing",
      keyPoints: ['Load handling', 'Performance maintenance', 'Resource adaptation', 'Growth capacity']
    },
    {
      id: 'availability',
      question: "What is Availability?",
      icon: FaShapes,
      answer: "How often your system is up and running without downtime.\n\nReal Example:\n\n• 99.9% availability (3 nines) = Down for 8.76 hours per year\n  - Example: Your personal blog - acceptable if it's down occasionally\n• 99.99% availability (4 nines) = Down for 52 minutes per year\n  - Example: Gmail - users expect it to be always available\n• 99.999% availability (5 nines) = Down for 5 minutes per year\n  - Example: Google Pay, PhonePe - payment systems cannot afford downtime",
      keyPoints: ['Uptime percentage', 'Service reliability', 'Downtime tolerance', 'Business criticality']
    },
    {
      id: 'performance',
      question: "What is Performance?",
      icon: FaPlus,
      answer: "How fast your system responds and completes tasks.\n\nReal Example:\n\n• Google Search - Must show results in less than 0.5 seconds\n• YouTube video loading - Should start playing within 1-2 seconds\n• Banking transaction - Can take 3-5 seconds, but must be accurate",
      keyPoints: ['Response time', 'Task completion', 'User experience', 'System efficiency']
    },
    {
      id: 'latency',
      question: "What is Latency?",
      icon: FaMinus,
      answer: "Time taken to complete one single request.\n\nReal Example:\n\n• You send a message on WhatsApp\n• Latency = Time from clicking \"Send\" to message reaching your friend\n• Good latency: 50-100 milliseconds (instant feeling)\n• Bad latency: 2000 milliseconds (2 seconds - feels slow)",
      keyPoints: ['Request completion time', 'Network delay', 'User perception', 'Real-time requirements']
    },
    {
      id: 'throughput',
      question: "What is Throughput?",
      icon: FaRocket,
      answer: "Number of requests a system can handle per second.\n\nReal Example:\n\n• Instagram during New Year's Eve:\n  - Everyone posts \"Happy New Year\" at 12:00 AM\n  - System needs to handle 1 million photo uploads per second\n  - High throughput = Can process many requests at once",
      keyPoints: ['Requests per second', 'Processing capacity', 'Concurrent operations', 'System load']
    },
    {
      id: 'latency-vs-throughput',
      question: "What is the difference between Latency and Throughput?",
      icon: FaCog,
      answer: "Latency = How fast for ONE request\nThroughput = How many TOTAL requests in a time period\n\nReal Example - Food Delivery (Swiggy/Zomato):\n\n• Latency: Time for one order to be delivered = 30 minutes\n• Throughput: Number of orders delivered per hour = 10,000 orders\n\nYou can deliver 10,000 orders per hour (high throughput), but each order still takes 30 minutes (latency stays same).",
      keyPoints: ['Individual request speed', 'Total request volume', 'Performance metrics', 'System capacity']
    },
    {
      id: 'vertical-scaling',
      question: "What is Vertical Scaling?",
      icon: FaDatabase,
      answer: "Adding more power to existing servers. Like upgrading your computer from 8GB RAM to 16GB RAM.\n\nReal Example:\n\n• Your website runs on a single server with 4 CPU cores and 8GB RAM\n• Traffic increases, so you upgrade to 8 CPU cores and 32GB RAM\n• Same server, just more powerful",
      keyPoints: ['Server upgrade', 'Resource increase', 'Single machine', 'Hardware scaling']
    },
    {
      id: 'horizontal-scaling',
      question: "What is Horizontal Scaling?",
      icon: FaNetworkWired,
      answer: "Adding more servers to handle load. Like having multiple computers instead of one powerful computer.\n\nReal Example:\n\n• Your website runs on 1 server\n• Traffic increases, so you add 4 more identical servers\n• Load balancer distributes requests across all 5 servers",
      keyPoints: ['Multiple servers', 'Load distribution', 'Server addition', 'Distributed scaling']
    },
    {
      id: 'spof',
      question: "What is SPOF (Single Point of Failure)?",
      icon: FaPuzzlePiece,
      answer: "A single component that can bring down the entire system if it fails.\n\nReal Example:\n\n• A single database server for your entire application\n• If that database crashes, your whole website goes down\n• No other database to take over",
      keyPoints: ['System vulnerability', 'Failure impact', 'Redundancy lack', 'Risk assessment']
    },
    {
      id: 'system-design-example',
      question: "Give a real-world example combining multiple concepts.",
      icon: FaLightbulb,
      answer: "Designing Instagram's photo upload system:\n\n• Scalability: Handle millions of photo uploads per second\n• Availability: System should be up 99.9% of the time\n• Performance: Photos should load within 2 seconds\n• Latency: Keep response time under 500ms\n• Throughput: Process 1 million uploads per second\n• No SPOF: Multiple servers, databases, and load balancers",
      keyPoints: ['Real-world application', 'Multiple concepts', 'System requirements', 'Architecture design']
    },
    {
      id: 'client-server-model',
      question: "What is Client-Server Model?",
      icon: FaBookOpen,
      answer: "Client requests services, server provides them. Like a restaurant where you (client) order food and waiter (server) brings it.\n\nReal Example:\n\n• Web browser (client) requests a webpage\n• Web server (server) sends back the HTML, CSS, and JavaScript\n• Your phone (client) requests weather data from a weather API server",
      keyPoints: ['Request-response pattern', 'Service provision', 'Distributed computing', 'Client-server architecture']
    },
    {
      id: 'request-response-cycle',
      question: "What is Request-Response Cycle?",
      icon: FaGraduationCap,
      answer: "Client sends request → Server processes → Server sends response → Client receives.\n\nReal Example:\n\n1. You type google.com in browser (request)\n2. Google servers find results (processing)\n3. Google sends search results back (response)\n4. Browser displays results (client receives)",
      keyPoints: ['Communication flow', 'Processing steps', 'Client-server interaction', 'HTTP cycle']
    },
    {
      id: 'stateless',
      question: "What is Stateless?",
      icon: FaStar,
      answer: "Server doesn't remember previous requests. Each request is independent.\n\nReal Example:\n\n• REST APIs are typically stateless\n• Each API call contains all needed information\n• Server doesn't store user session data",
      keyPoints: ['No state persistence', 'Independent requests', 'Self-contained calls', 'Scalability benefit']
    },
    {
      id: 'stateful',
      question: "What is Stateful?",
      icon: FaShieldAlt,
      answer: "Server remembers previous requests and maintains state.\n\nReal Example:\n\n• Shopping cart on e-commerce website\n• Server remembers what items you added\n• Login sessions where server tracks if you're logged in",
      keyPoints: ['State persistence', 'Session management', 'Context maintenance', 'User tracking']
    },
    {
      id: 'synchronous-communication',
      question: "What is Synchronous Communication?",
      icon: FaEye,
      answer: "Sender waits for response before continuing. Like a phone call.\n\nReal Example:\n\n• User clicks 'Submit order' on website\n• System waits for payment processing to complete\n• Only then shows 'Order confirmed' message",
      keyPoints: ['Blocking communication', 'Response waiting', 'Sequential processing', 'Immediate feedback']
    },
    {
      id: 'asynchronous-communication',
      question: "What is Asynchronous Communication?",
      icon: FaSitemap,
      answer: "Sender doesn't wait for response. Like sending an email.\n\nReal Example:\n\n• User uploads a video to YouTube\n• System starts processing in background\n• User can continue browsing while video processes\n• Gets notification later when processing completes",
      keyPoints: ['Non-blocking communication', 'Background processing', 'Event-driven', 'Delayed response']
    },
    {
      id: 'sync-vs-async-when',
      question: "When to use Synchronous vs Asynchronous?",
      icon: FaShapes,
      answer: "Use Synchronous when:\n• Result is needed immediately\n• Operations are quick\n• User is waiting for response\n\nUse Asynchronous when:\n• Operations take time (video processing, email sending)\n• User doesn't need immediate result\n• System can process in background",
      keyPoints: ['Use case selection', 'Performance requirements', 'User experience', 'System design choice']
    },
    {
      id: 'cap-theorem',
      question: "What is CAP Theorem?",
      icon: FaPlus,
      answer: "In a distributed system, you can only guarantee 2 out of 3:\n• Consistency: All nodes see same data at same time\n• Availability: System remains operational despite failures\n• Partition Tolerance: System continues despite network failures\n\nYou must choose: CA, CP, or AP system.",
      keyPoints: ['Distributed systems', 'Three properties', 'Trade-off choice', 'System design constraint']
    },
    {
      id: 'consistency-cap',
      question: "What is Consistency in CAP Theorem?",
      icon: FaMinus,
      answer: "All nodes in the system see the same data at the same time.\n\nReal Example:\n\n• You update your bank balance from $100 to $50\n• All ATMs and online banking show $50 immediately\n• No one sees $100 anymore",
      keyPoints: ['Data uniformity', 'Simultaneous visibility', 'State synchronization', 'Data integrity']
    },
    {
      id: 'availability-cap',
      question: "What is Availability in CAP Theorem?",
      icon: FaRocket,
      answer: "System remains operational and responsive even when some components fail.\n\nReal Example:\n\n• One server in Google crashes\n• Google.com still works for users\n• System reroutes requests to working servers",
      keyPoints: ['System uptime', 'Fault tolerance', 'Operational continuity', 'Failure handling']
    },
    {
      id: 'partition-tolerance-cap',
      question: "What is Partition Tolerance in CAP Theorem?",
      icon: FaCog,
      answer: "System continues to function even when network connections between servers are broken.\n\nReal Example:\n\n• Network cable between two data centers gets cut\n• Each data center continues operating independently\n• Data syncs when network is restored",
      keyPoints: ['Network failure resilience', 'Independent operation', 'Data synchronization', 'Distributed reliability']
    },
    {
      id: 'cap-tradeoffs',
      question: "CAP Theorem - Real World Trade-offs",
      icon: FaDatabase,
      answer: "CA (Consistency + Availability): Traditional databases like PostgreSQL\n• Great for banking where consistency is critical\n• But if network fails, system might become unavailable\n\nCP (Consistency + Partition Tolerance): MongoDB, Redis\n• Data stays consistent across failures\n• But some requests might be rejected during failures\n\nAP (Availability + Partition Tolerance): Cassandra, DynamoDB\n• System stays available during failures\n• But data might be temporarily inconsistent",
      keyPoints: ['Database choices', 'Consistency priorities', 'Availability needs', 'Partition handling']
    },
    {
      id: 'cap-summary',
      question: "CAP Theorem Summary with Examples",
      icon: FaNetworkWired,
      answer: "Banking System: Needs CA (money must be consistent, but brief downtime OK)\n\nSocial Media: Needs AP (can tolerate some inconsistency, but must stay available)\n\nE-commerce Inventory: Needs CP (inventory must be accurate, brief unavailability OK)\n\nReal-time Chat: Needs AP (availability more important than perfect consistency)",
      keyPoints: ['Application examples', 'System requirements', 'Trade-off decisions', 'Real-world applications']
    },
    {
      id: 'cap-absolute',
      question: "Interview Question - 'Is CAP Theorem absolute?'",
      icon: FaPuzzlePiece,
      answer: "CAP theorem applies to distributed systems during network partitions. In normal operation, you can have all three properties. CAP only forces a choice during partition scenarios.\n\nReal systems often provide different consistency levels (eventual consistency, strong consistency) to balance trade-offs.",
      keyPoints: ['Theorem limitations', 'Normal operation', 'Partition scenarios', 'Consistency levels']
    },
    {
      id: 'load-balancing',
      question: "What is Load Balancing?",
      icon: FaLightbulb,
      answer: "Distributing incoming requests across multiple servers to prevent overload.\n\nReal Example:\n\n• Netflix has thousands of servers\n• Load balancer decides which server handles your request\n• If one server is busy, requests go to less busy servers\n• Ensures no single server gets overwhelmed",
      keyPoints: ['Request distribution', 'Server load', 'Performance optimization', 'Resource utilization']
    },
    {
      id: 'caching',
      question: "What is Caching?",
      icon: FaBookOpen,
      answer: "Storing frequently accessed data in fast storage for quick retrieval.\n\nReal Example:\n\n• Browser cache stores website images and files\n• Redis/Memcached store database query results\n• CDN caches website content closer to users\n• Reduces database load and improves response time",
      keyPoints: ['Data storage', 'Quick retrieval', 'Performance improvement', 'Resource optimization']
    },
    {
      id: 'database-intro',
      question: "What is a Database?",
      icon: FaGraduationCap,
      answer: "Organized collection of data that can be easily accessed, managed, and updated.\n\nReal Example:\n\n• SQL databases (MySQL, PostgreSQL): Like Excel spreadsheets with relationships\n• NoSQL databases (MongoDB, Cassandra): Like flexible document storage\n• Stores user profiles, product catalogs, transaction history",
      keyPoints: ['Data organization', 'Access management', 'Data persistence', 'Query capabilities']
    },
    {
      id: 'database-indexing',
      question: "Indexing in Databases",
      icon: FaStar,
      answer: "Data structure that improves speed of data retrieval operations.\n\nReal Example:\n\n• Book index helps you find topics quickly\n• Database index on 'email' column speeds up user login\n• Without index: Scan all 1 million users\n• With index: Find user in milliseconds",
      keyPoints: ['Data retrieval speed', 'Search optimization', 'Query performance', 'Data structure']
    },
    {
      id: 'proxy-intro',
      question: "What is a Proxy?",
      icon: FaShieldAlt,
      answer: "Intermediary server that sits between client and server.\n\nReal Example:\n\n• Like a middleman who handles requests on your behalf\n• Can cache responses, filter requests, or hide your identity\n• Used for security, performance, and anonymity",
      keyPoints: ['Intermediary role', 'Request handling', 'Security enhancement', 'Performance improvement']
    },
    {
      id: 'forward-proxy',
      question: "Forward Proxy",
      icon: FaEye,
      answer: "Proxy that sits in front of clients. Clients send requests to proxy, proxy forwards to internet.\n\nReal Example:\n\n• Corporate proxy server\n• Employees access internet through company proxy\n• Proxy can block certain websites or log activity\n• Used for content filtering and monitoring",
      keyPoints: ['Client protection', 'Content filtering', 'Access control', 'Traffic monitoring']
    },
    {
      id: 'reverse-proxy',
      question: "Reverse Proxy",
      icon: FaSitemap,
      answer: "Proxy that sits in front of servers. Clients send requests to proxy, proxy forwards to appropriate server.\n\nReal Example:\n\n• Load balancer in front of web servers\n• nginx or Apache as reverse proxy\n• Can handle SSL termination, caching, and routing\n• Protects backend servers from direct client access",
      keyPoints: ['Server protection', 'Load balancing', 'SSL termination', 'Traffic routing']
    },
    {
      id: 'forward-vs-reverse-proxy',
      question: "Forward Proxy vs Reverse Proxy",
      icon: FaShapes,
      answer: "Forward Proxy: Protects clients, hides client identity from servers\nReverse Proxy: Protects servers, hides server details from clients\n\nForward Proxy: Used by clients to access restricted resources\nReverse Proxy: Used by servers to improve performance and security",
      keyPoints: ['Protection direction', 'Identity hiding', 'Use case differences', 'Security benefits']
    },
    {
      id: 'proxy-disadvantages',
      question: "Disadvantages of Proxies",
      icon: FaPlus,
      answer: "Single point of failure: If proxy goes down, everything stops working\n\nPerformance overhead: Extra hop adds latency\n\nComplexity: Additional component to maintain and configure\n\nSecurity risks: Proxy can see all traffic, potential attack vector",
      keyPoints: ['Failure risk', 'Performance cost', 'Maintenance complexity', 'Security concerns']
    },
    {
      id: 'proxy-when-to-use',
      question: "When to Use Proxies",
      icon: FaMinus,
      answer: "Load balancing: Distribute requests across multiple servers\n\nCaching: Store frequently requested content\n\nSecurity: Filter malicious requests, SSL termination\n\nAnonymity: Hide client/server identities\n\nMonitoring: Log and analyze traffic patterns",
      keyPoints: ['Load distribution', 'Content caching', 'Security enhancement', 'Traffic analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <header className="border-b border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            System Design Interview Questions
          </h1>
          <p className="text-blue-100 text-lg">Master distributed systems, scalability, and architecture design</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-blue-200">
            <span className="bg-white/10 px-3 py-1 rounded-full">38 Questions</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Expert Level</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Interview Prep</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 text-white">Progress Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Completed</span>
                  <span className="text-green-400 font-semibold">{completedTopics.size}/{content.length}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedTopics.size / content.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-md font-semibold mb-3 text-white">Topics</h4>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {content.map((item, index) => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${
                        completedTopics.has(item.id) ? 'bg-green-900/30' : 'hover:bg-gray-800'
                      }`}
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                        completedTopics.has(item.id) ? 'bg-green-500 border-green-500' : 'border-gray-500'
                      }`}>
                        {completedTopics.has(item.id) && <FaCheck className="text-black text-xs" />}
                      </div>
                      <span className={`text-sm text-left ${completedTopics.has(item.id) ? 'text-green-400' : 'text-gray-300'}`}>
                        {index + 1}. {item.question.length > 40 ? item.question.substring(0, 40) + '...' : item.question}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="space-y-6">
              {content.map((item, index) => (
                <div key={item.id} id={item.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  {/* Card Header */}
                  <div
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800/50 transition-colors"
                    onClick={() => toggleCard(item.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          completedTopics.has(item.id) ? 'bg-green-600' : 'bg-blue-600'
                        }`}>
                          <item.icon className="text-white text-lg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {index + 1}. {item.question}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            {item.keyPoints.slice(0, 3).map((point, i) => (
                              <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                {point}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTopic(item.id);
                        }}
                        className={`flex items-center gap-2 px-3 py-1 rounded transition-colors ${
                          completedTopics.has(item.id)
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        }`}
                      >
                        {completedTopics.has(item.id) ? <FaToggleOn /> : <FaToggleOff />}
                        <span className="text-sm">
                          {completedTopics.has(item.id) ? 'Completed' : 'Mark Complete'}
                        </span>
                      </button>

                      {expandedCards.has(item.id) ? (
                        <FaChevronUp className="text-gray-400 text-lg" />
                      ) : (
                        <FaChevronDown className="text-gray-400 text-lg" />
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  {expandedCards.has(item.id) && (
                    <div className="px-6 pb-6 border-t border-gray-700">
                      <div className="pt-4">
                        <div className="text-gray-300 leading-relaxed">
                          {item.answer.split('\n').map((line, i) => {
                            // Highlight important terms with different colors
                            const highlightedLine = line
                              .replace(/\b(HLD|LLD|CAP Theorem|Latency|Throughput|Scalability|Availability|Performance|Consistency|Partition Tolerance|Monolithic|Microservices|Stateless|Stateful|Synchronous|Asynchronous|SPOF|Load Balancing|Caching|Proxy|Database|Indexing)\b/g, '<span class="bg-blue-800 text-blue-100 px-2 py-1 rounded font-semibold">$1</span>')
                              .replace(/\b(\d+(?:\.\d+)?%|\d+ nines|\d+ milliseconds?|\d+ seconds?|\d+ minutes?|\d+ hours?|\d+ (million|billion))\b/g, '<span class="bg-green-800 text-green-100 px-2 py-1 rounded font-semibold">$1</span>')
                              .replace(/\b(Real Example|Example)\b/g, '<span class="bg-purple-800 text-purple-100 px-2 py-1 rounded font-semibold">$1</span>')
                              .replace(/•/g, '<span class="text-blue-400 font-bold">•</span>');

                            return (
                              <p key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                            );
                          })}
                        </div>

                        {/* Key Points */}
                        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                          <h4 className="text-sm font-semibold text-blue-300 mb-3">Key Points:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {item.keyPoints.map((point, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                <FaCheck className="text-green-400 flex-shrink-0" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}