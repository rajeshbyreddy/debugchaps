'use client';

import Navbar from '../../../components/Navbar';

export default function SystemDesign() {
  const content = [
    {
      question: "What is System Design?",
      answer: "System design is planning how to build a software system before actually building it. It's like drawing a blueprint before constructing a building.\n\nReal Example: Before building WhatsApp, engineers had to decide:\n\n• Where to store billions of messages?\n• How to send messages instantly to users?\n• How to handle 2 billion users online at the same time?"
    },
    {
      question: "What is the difference between HLD and LLD?",
      answer: "HLD (High-Level Design) = Big picture, overall system structure\nLLD (Low-Level Design) = Detailed implementation, actual code design\n\nReal Example - Designing Uber:\n\n• HLD: \"We need a mobile app, backend servers, database, payment gateway, and maps API\"\n• LLD: \"The Trip class will have fields like tripId, userId, driverId, startLocation, endLocation, and methods like calculateFare(), updateLocation()\""
    },
    {
      question: "What is Monolithic Architecture?",
      answer: "All features of an application are built as one single unit. Everything runs together in one codebase.\n\nReal Example:\n\n• Old Amazon (early 2000s) - Product search, cart, checkout, user login, recommendations - everything was in one application\n• If one part crashed, the entire website went down\n• Deploy the whole application even for a small change"
    },
    {
      question: "What is Microservices Architecture?",
      answer: "Break the application into small, independent services. Each service handles one specific job.\n\nReal Example - Netflix (today):\n\n• User Service - handles login, profiles\n• Video Service - streams movies/shows\n• Recommendation Service - suggests what to watch\n• Billing Service - handles payments\n• If recommendation service crashes, you can still watch videos"
    },
    {
      question: "What is Scalability?",
      answer: "The ability of a system to handle more users or requests without breaking.\n\nReal Example:\n\n• BookMyShow during Avengers Endgame ticket release:\n  - Normal day: 10,000 users\n  - Movie release day: 10 million users trying to book tickets\n  - System must scale to handle 1000x traffic without crashing"
    },
    {
      question: "What is Availability?",
      answer: "How often your system is up and running without downtime.\n\nReal Example:\n\n• 99.9% availability (3 nines) = Down for 8.76 hours per year\n  - Example: Your personal blog - acceptable if it's down occasionally\n• 99.99% availability (4 nines) = Down for 52 minutes per year\n  - Example: Gmail - users expect it to be always available\n• 99.999% availability (5 nines) = Down for 5 minutes per year\n  - Example: Google Pay, PhonePe - payment systems cannot afford downtime"
    },
    {
      question: "What is Performance?",
      answer: "How fast your system responds and completes tasks.\n\nReal Example:\n\n• Google Search - Must show results in less than 0.5 seconds\n• YouTube video loading - Should start playing within 1-2 seconds\n• Banking transaction - Can take 3-5 seconds, but must be accurate"
    },
    {
      question: "What is Latency?",
      answer: "Time taken to complete one single request.\n\nReal Example:\n\n• You send a message on WhatsApp\n• Latency = Time from clicking \"Send\" to message reaching your friend\n• Good latency: 50-100 milliseconds (instant feeling)\n• Bad latency: 2000 milliseconds (2 seconds - feels slow)"
    },
    {
      question: "What is Throughput?",
      answer: "Number of requests a system can handle per second.\n\nReal Example:\n\n• Instagram during New Year's Eve:\n  - Everyone posts \"Happy New Year\" at 12:00 AM\n  - System needs to handle 1 million photo uploads per second\n  - High throughput = Can process many requests at once"
    },
    {
      question: "What is the difference between Latency and Throughput?",
      answer: "Latency = How fast for ONE request\nThroughput = How many TOTAL requests in a time period\n\nReal Example - Food Delivery (Swiggy/Zomato):\n\n• Latency: Time for one order to be delivered = 30 minutes\n• Throughput: Number of orders delivered per hour = 10,000 orders\n\nYou can deliver 10,000 orders per hour (high throughput), but each order still takes 30 minutes (latency stays same)."
    },
    {
      question: "What is Vertical Scaling?",
      answer: "Adding more power to existing servers. Like upgrading your computer from 8GB RAM to 16GB RAM.\n\nReal Example:\n\n• Your website runs on a single server with 4 CPU cores and 8GB RAM\n• Traffic increases, so you upgrade to 8 CPU cores and 32GB RAM\n• Same server, just more powerful"
    },
    {
      question: "What is Horizontal Scaling?",
      answer: "Adding more servers to handle load. Like having multiple computers instead of one powerful computer.\n\nReal Example:\n\n• Your website runs on 1 server\n• Traffic increases, so you add 4 more identical servers\n• Load balancer distributes requests across all 5 servers"
    },
    {
      question: "What is SPOF (Single Point of Failure)?",
      answer: "A single component that can bring down the entire system if it fails.\n\nReal Example:\n\n• A single database server for your entire application\n• If that database crashes, your whole website goes down\n• No other database to take over"
    },
    {
      question: "Give a real-world example combining multiple concepts.",
      answer: "Designing Instagram's photo upload system:\n\n• Scalability: Handle millions of photo uploads per second\n• Availability: System should be up 99.9% of the time\n• Performance: Photos should load within 2 seconds\n• Latency: Keep response time under 500ms\n• Throughput: Process 1 million uploads per second\n• No SPOF: Multiple servers, databases, and load balancers"
    },
    {
      question: "What is Client-Server Model?",
      answer: "Client requests services, server provides them. Like a restaurant where you (client) order food and waiter (server) brings it.\n\nReal Example:\n\n• Web browser (client) requests a webpage\n• Web server (server) sends back the HTML, CSS, and JavaScript\n• Your phone (client) requests weather data from a weather API server"
    },
    {
      question: "What is Request-Response Cycle?",
      answer: "Client sends request → Server processes → Server sends response → Client receives.\n\nReal Example:\n\n1. You type google.com in browser (request)\n2. Google servers find results (processing)\n3. Google sends search results back (response)\n4. Browser displays results (client receives)"
    },
    {
      question: "What is Stateless?",
      answer: "Server doesn't remember previous requests. Each request is independent.\n\nReal Example:\n\n• REST APIs are typically stateless\n• Each API call contains all needed information\n• Server doesn't store user session data"
    },
    {
      question: "What is Stateful?",
      answer: "Server remembers previous requests and maintains state.\n\nReal Example:\n\n• Shopping cart on e-commerce website\n• Server remembers what items you added\n• Login sessions where server tracks if you're logged in"
    },
    {
      question: "What is Synchronous Communication?",
      answer: "Sender waits for response before continuing. Like a phone call.\n\nReal Example:\n\n• User clicks 'Submit order' on website\n• System waits for payment processing to complete\n• Only then shows 'Order confirmed' message"
    },
    {
      question: "What is Asynchronous Communication?",
      answer: "Sender doesn't wait for response. Like sending an email.\n\nReal Example:\n\n• User uploads a video to YouTube\n• System starts processing in background\n• User can continue browsing while video processes\n• Gets notification later when processing completes"
    },
    {
      question: "When to use Synchronous vs Asynchronous?",
      answer: "Use Synchronous when:\n• Result is needed immediately\n• Operations are quick\n• User is waiting for response\n\nUse Asynchronous when:\n• Operations take time (video processing, email sending)\n• User doesn't need immediate result\n• System can process in background"
    },
    {
      question: "What is CAP Theorem?",
      answer: "In a distributed system, you can only guarantee 2 out of 3:\n• Consistency: All nodes see same data at same time\n• Availability: System remains operational despite failures\n• Partition Tolerance: System continues despite network failures\n\nYou must choose: CA, CP, or AP system."
    },
    {
      question: "What is Consistency in CAP Theorem?",
      answer: "All nodes in the system see the same data at the same time.\n\nReal Example:\n\n• You update your bank balance from $100 to $50\n• All ATMs and online banking show $50 immediately\n• No one sees $100 anymore"
    },
    {
      question: "What is Availability in CAP Theorem?",
      answer: "System remains operational and responsive even when some components fail.\n\nReal Example:\n\n• One server in Google crashes\n• Google.com still works for users\n• System reroutes requests to working servers"
    },
    {
      question: "What is Partition Tolerance in CAP Theorem?",
      answer: "System continues to function even when network connections between servers are broken.\n\nReal Example:\n\n• Network cable between two data centers gets cut\n• Each data center continues operating independently\n• Data syncs when network is restored"
    },
    {
      question: "CAP Theorem - Real World Trade-offs",
      answer: "CA (Consistency + Availability): Traditional databases like PostgreSQL\n• Great for banking where consistency is critical\n• But if network fails, system might become unavailable\n\nCP (Consistency + Partition Tolerance): MongoDB, Redis\n• Data stays consistent across failures\n• But some requests might be rejected during failures\n\nAP (Availability + Partition Tolerance): Cassandra, DynamoDB\n• System stays available during failures\n• But data might be temporarily inconsistent"
    },
    {
      question: "CAP Theorem Summary with Examples",
      answer: "Banking System: Needs CA (money must be consistent, but brief downtime OK)\n\nSocial Media: Needs AP (can tolerate some inconsistency, but must stay available)\n\nE-commerce Inventory: Needs CP (inventory must be accurate, brief unavailability OK)\n\nReal-time Chat: Needs AP (availability more important than perfect consistency)"
    },
    {
      question: "Interview Question - 'Is CAP Theorem absolute?'",
      answer: "CAP theorem applies to distributed systems during network partitions. In normal operation, you can have all three properties. CAP only forces a choice during partition scenarios.\n\nReal systems often provide different consistency levels (eventual consistency, strong consistency) to balance trade-offs."
    },
    {
      question: "What is Load Balancing?",
      answer: "Distributing incoming requests across multiple servers to prevent overload.\n\nReal Example:\n\n• Netflix has thousands of servers\n• Load balancer decides which server handles your request\n• If one server is busy, requests go to less busy servers\n• Ensures no single server gets overwhelmed"
    },
    {
      question: "What is Caching?",
      answer: "Storing frequently accessed data in fast storage for quick retrieval.\n\nReal Example:\n\n• Browser cache stores website images and files\n• Redis/Memcached store database query results\n• CDN caches website content closer to users\n• Reduces database load and improves response time"
    },
    {
      question: "What is a Database?",
      answer: "Organized collection of data that can be easily accessed, managed, and updated.\n\nReal Example:\n\n• SQL databases (MySQL, PostgreSQL): Like Excel spreadsheets with relationships\n• NoSQL databases (MongoDB, Cassandra): Like flexible document storage\n• Stores user profiles, product catalogs, transaction history"
    },
    {
      question: "Indexing in Databases",
      answer: "Data structure that improves speed of data retrieval operations.\n\nReal Example:\n\n• Book index helps you find topics quickly\n• Database index on 'email' column speeds up user login\n• Without index: Scan all 1 million users\n• With index: Find user in milliseconds"
    },
    {
      question: "What is a Proxy?",
      answer: "Intermediary server that sits between client and server.\n\nReal Example:\n\n• Like a middleman who handles requests on your behalf\n• Can cache responses, filter requests, or hide your identity\n• Used for security, performance, and anonymity"
    },
    {
      question: "Forward Proxy",
      answer: "Proxy that sits in front of clients. Clients send requests to proxy, proxy forwards to internet.\n\nReal Example:\n\n• Corporate proxy server\n• Employees access internet through company proxy\n• Proxy can block certain websites or log activity\n• Used for content filtering and monitoring"
    },
    {
      question: "Reverse Proxy",
      answer: "Proxy that sits in front of servers. Clients send requests to proxy, proxy forwards to appropriate server.\n\nReal Example:\n\n• Load balancer in front of web servers\n• nginx or Apache as reverse proxy\n• Can handle SSL termination, caching, and routing\n• Protects backend servers from direct client access"
    },
    {
      question: "Forward Proxy vs Reverse Proxy",
      answer: "Forward Proxy: Protects clients, hides client identity from servers\nReverse Proxy: Protects servers, hides server details from clients\n\nForward Proxy: Used by clients to access restricted resources\nReverse Proxy: Used by servers to improve performance and security"
    },
    {
      question: "Disadvantages of Proxies",
      answer: "Single point of failure: If proxy goes down, everything stops working\n\nPerformance overhead: Extra hop adds latency\n\nComplexity: Additional component to maintain and configure\n\nSecurity risks: Proxy can see all traffic, potential attack vector"
    },
    {
      question: "When to Use Proxies",
      answer: "Load balancing: Distribute requests across multiple servers\n\nCaching: Store frequently requested content\n\nSecurity: Filter malicious requests, SSL termination\n\nAnonymity: Hide client/server identities\n\nMonitoring: Log and analyze traffic patterns"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <header className="border-gray-700 mt-16">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            System Design Interview Questions
          </h1>
          <p className="text-blue-100 text-lg">Comprehensive guide with real-world examples and key concepts</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-blue-200">
            <span className="bg-white/10 px-3 py-1 rounded-full">38 Questions</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Expert Level</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Interview Prep</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-2 sm:px-4 py-8 mt-0">
        <div className="space-y-8">
          {content.map((item, index) => (
            <section key={index} className="border-b border-gray-700 pb-8 last:border-b-0 bg-gray-900 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 rounded-lg shadow-md">
                {index + 1}. {item.question}
              </h2>

              <div className="text-gray-300 leading-relaxed bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
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
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}