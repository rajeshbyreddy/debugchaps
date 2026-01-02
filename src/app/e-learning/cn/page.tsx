'use client';

import Navbar from '../../../components/Navbar';

export default function CN() {
  const content = [
    {
      question: "What is Computer Network?",
      answer: "A computer network is a collection of computers and devices connected together to share resources and communicate with each other.\n\nReal Example:\n\n• Home WiFi network: Your laptop, phone, and smart TV connected to router\n• Office network: All computers connected to company server\n• Internet: Billions of devices worldwide connected together\n• Allows sharing files, printers, internet access"
    },
    {
      question: "What are different types of Networks?",
      answer: "LAN (Local Area Network): Small geographic area, high speed\nMAN (Metropolitan Area Network): City-wide network\nWAN (Wide Area Network): Large geographic area, uses telephone lines\nPAN (Personal Area Network): Very small, Bluetooth devices\n\nReal Example:\n\n• LAN: Office building network\n• MAN: Cable TV network in a city\n• WAN: Internet connecting countries\n• PAN: Bluetooth speaker connected to phone"
    },
    {
      question: "What is OSI Model?",
      answer: "OSI (Open Systems Interconnection) is a 7-layer conceptual model for network communication:\n\n• Layer 7: Application - User interface\n• Layer 6: Presentation - Data translation\n• Layer 5: Session - Dialog management\n• Layer 4: Transport - End-to-end communication\n• Layer 3: Network - Routing and addressing\n• Layer 2: Data Link - Node-to-node delivery\n• Layer 1: Physical - Physical medium\n\nReal Example:\n\n• Sending email: Application layer (email client) → Physical layer (network cable)\n• Each layer adds specific functionality and communicates with adjacent layers"
    },
    {
      question: "What is TCP/IP Model?",
      answer: "TCP/IP is a 4-layer practical model used in internet:\n\n• Application Layer: HTTP, FTP, SMTP, DNS\n• Transport Layer: TCP, UDP\n• Internet Layer: IP, ICMP, ARP\n• Network Access Layer: Ethernet, WiFi\n\nReal Example:\n\n• TCP/IP is the protocol suite that powers the internet\n• Most networks today use TCP/IP instead of pure OSI model\n• TCP/IP was designed for practical implementation"
    },
    {
      question: "What is the difference between OSI and TCP/IP?",
      answer: "OSI: 7 layers, theoretical model, developed by ISO\nTCP/IP: 4 layers, practical model, developed by DARPA\n\nReal Example:\n\n• OSI Layer 5,6,7 combined into TCP/IP Application layer\n• OSI Network layer = TCP/IP Internet layer\n• OSI Data Link + Physical = TCP/IP Network Access layer\n• TCP/IP is what actually runs the internet"
    },
    {
      question: "What is IP Address?",
      answer: "An IP address is a unique numerical identifier assigned to each device connected to a network. It allows devices to communicate with each other.\n\nReal Example:\n\n• IPv4: 192.168.1.100 (4 numbers, 0-255 each)\n• IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334 (longer format)\n• Your home router has public IP, devices have private IPs\n• Like street address for houses on the internet"
    },
    {
      question: "What is the difference between IPv4 and IPv6?",
      answer: "IPv4: 32-bit addresses, 4.3 billion possible addresses\nIPv6: 128-bit addresses, virtually unlimited addresses\n\nReal Example:\n\n• IPv4 exhaustion: We ran out of IPv4 addresses\n• IPv6 adoption: New devices get IPv6 addresses\n• IPv4: 192.168.1.1\n• IPv6: 2001:db8::1\n• IPv6 has better security and auto-configuration"
    },
    {
      question: "What is MAC Address?",
      answer: "MAC (Media Access Control) address is a unique hardware identifier assigned to network interface cards. It's burned into the hardware.\n\nReal Example:\n\n• Format: 00:1B:44:11:3A:B7 (6 pairs of hex digits)\n• Unique for each network card\n• Used for communication within local network\n• Router uses MAC addresses to deliver packets locally\n• Cannot be changed (unlike IP addresses)"
    },
    {
      question: "What is DNS?",
      answer: "DNS (Domain Name System) translates human-readable domain names into IP addresses that computers can understand.\n\nReal Example:\n\n• You type google.com in browser\n• DNS server translates to 142.250.190.78\n• Without DNS, you'd need to remember IP addresses\n• Like phone book: names → numbers\n• Hierarchical system: root servers → TLD servers → domain servers"
    },
    {
      question: "What is HTTP and HTTPS?",
      answer: "HTTP (HyperText Transfer Protocol): Protocol for transferring web pages\nHTTPS: Secure version using SSL/TLS encryption\n\nReal Example:\n\n• HTTP: http://website.com (insecure)\n• HTTPS: https://website.com (secure)\n• HTTPS encrypts data between browser and server\n• Required for banking, shopping, login pages\n• Padlock icon indicates HTTPS connection"
    },
    {
      question: "What is TCP?",
      answer: "TCP (Transmission Control Protocol) is a connection-oriented, reliable transport layer protocol. It ensures data delivery and proper ordering.\n\nReal Example:\n\n• TCP establishes connection before sending data (3-way handshake)\n• Guarantees delivery: Retransmits lost packets\n• Maintains order: Reorders out-of-sequence packets\n• Used for email (SMTP), web (HTTP), file transfer (FTP)\n• Like registered mail - guaranteed delivery"
    },
    {
      question: "What is UDP?",
      answer: "UDP (User Datagram Protocol) is a connectionless, unreliable transport layer protocol. It sends packets without establishing connection.\n\nReal Example:\n\n• Faster than TCP, no connection setup\n• No retransmission of lost packets\n• Used for video streaming, online gaming, DNS queries\n• VoIP calls use UDP for real-time communication\n• Like sending postcards - fast but no guarantee of delivery"
    },
    {
      question: "What is the difference between TCP and UDP?",
      answer: "TCP: Connection-oriented, reliable, ordered, slower\nUDP: Connectionless, unreliable, unordered, faster\n\nReal Example:\n\n• TCP: Downloading file - must get every byte in order\n• UDP: Live video stream - losing some frames is OK, speed matters\n• TCP: Email delivery\n• UDP: Online multiplayer game updates"
    },
    {
      question: "What is Subnetting?",
      answer: "Subnetting divides a large network into smaller sub-networks. It improves security, performance, and organization.\n\nReal Example:\n\n• Company network: 192.168.1.0/24\n• Subnetted into: 192.168.1.0/25 (first half), 192.168.1.128/25 (second half)\n• HR department on one subnet, Engineering on another\n• Reduces broadcast traffic, improves security\n• Like dividing building into separate floors"
    },
    {
      question: "What is Routing?",
      answer: "Routing is the process of selecting the best path for data packets to travel from source to destination across networks.\n\nReal Example:\n\n• Router maintains routing table with paths to different networks\n• Like GPS navigation for data packets\n• Static routing: Manually configured routes\n• Dynamic routing: Routers learn routes automatically\n• OSPF, BGP are dynamic routing protocols"
    },
    {
      question: "What is Switching?",
      answer: "Switching is the process of forwarding data packets within a local network based on MAC addresses.\n\nReal Example:\n\n• Ethernet switch connects multiple devices\n• Learns MAC addresses of connected devices\n• Forwards frames only to intended recipient\n• Creates separate collision domains\n• Unlike hub (broadcasts to all), switch is intelligent\n• Like postal service within a city"
    },
    {
      question: "What is Firewall?",
      answer: "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.\n\nReal Example:\n\n• Blocks unauthorized access to your network\n• Allows legitimate traffic (HTTP, HTTPS) but blocks suspicious traffic\n• Hardware firewall: Router with firewall\n• Software firewall: Windows Firewall, iptables\n• Like security guard at building entrance"
    },
    {
      question: "What is VPN?",
      answer: "VPN (Virtual Private Network) creates a secure, encrypted connection over a public network, allowing private networks to communicate securely.\n\nReal Example:\n\n• Remote worker connects to office network over internet\n• Encrypts all traffic between your computer and VPN server\n• Hides your real IP address and location\n• Used for privacy, bypassing geo-restrictions\n• Like secure tunnel through public highway"
    },
    {
      question: "What is DHCP?",
      answer: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network configuration to devices on a network.\n\nReal Example:\n\n• When you connect to WiFi, router assigns IP address automatically\n• Assigns IP, subnet mask, default gateway, DNS servers\n• Prevents IP conflicts\n• Like automatic seat assignment at restaurant\n• Without DHCP, you'd manually configure IP on each device"
    },
    {
      question: "What is NAT?",
      answer: "NAT (Network Address Translation) allows multiple devices on a private network to share a single public IP address.\n\nReal Example:\n\n• Your home router has one public IP (assigned by ISP)\n• Multiple devices (laptop, phone, TV) have private IPs\n• Router translates private IPs to public IP for internet access\n• Allows thousands of devices to share limited IPv4 addresses\n• Provides security by hiding internal network structure"
    },
    {
      question: "What is ARP?",
      answer: "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses within a local network.\n\nReal Example:\n\n• Computer wants to send data to 192.168.1.100\n• ARP broadcasts: \"Who has 192.168.1.100?\"\n• Device with that IP responds with its MAC address\n• Computer caches the mapping for future use\n• Essential for communication within local network"
    },
    {
      question: "What is ICMP?",
      answer: "ICMP (Internet Control Message Protocol) is used for error reporting and diagnostic functions in IP networks.\n\nReal Example:\n\n• Ping command uses ICMP Echo Request/Reply\n• Traceroute uses ICMP Time Exceeded messages\n• \"Destination unreachable\" error messages\n• Network troubleshooting and diagnostics\n• Like network's error reporting system"
    },
    {
      question: "What is Load Balancing?",
      answer: "Load balancing distributes network traffic across multiple servers to ensure no single server becomes overwhelmed.\n\nReal Example:\n\n• Netflix has thousands of servers\n• Load balancer directs user requests to least busy server\n• Ensures fast response times and high availability\n• If one server fails, traffic automatically goes to others\n• Like multiple cashiers at supermarket checkout"
    },
    {
      question: "What is CDN?",
      answer: "CDN (Content Delivery Network) is a distributed network of servers that delivers web content to users based on their geographic location.\n\nReal Example:\n\n• YouTube video hosted on servers worldwide\n• When you watch video in India, it comes from Indian server\n• Faster loading, reduced latency\n• Handles traffic spikes during viral videos\n• Like having warehouses in different cities for faster delivery"
    },
    {
      question: "What is Bandwidth?",
      answer: "Bandwidth is the maximum amount of data that can be transmitted over a network connection in a given time period.\n\nReal Example:\n\n• Internet plan: 100 Mbps (100 megabits per second)\n• Can download 100 megabits of data every second\n• Higher bandwidth = faster downloads\n• Like width of highway - wider road allows more cars\n• Shared bandwidth in apartment complexes"
    },
    {
      question: "What is Latency?",
      answer: "Latency is the time it takes for data to travel from source to destination. It's the delay in network communication.\n\nReal Example:\n\n• Ping 50ms: Data takes 50 milliseconds round trip\n• Satellite internet: High latency (22,000+ miles)\n• Fiber optic: Low latency (speed of light)\n• Affects real-time applications like gaming, video calls\n• Like distance in conversation - farther = more delay"
    },
    {
      question: "What is Throughput?",
      answer: "Throughput is the actual amount of data successfully transmitted over a network in a given time period.\n\nReal Example:\n\n• Theoretical bandwidth: 100 Mbps\n• Actual throughput: 85 Mbps (after overhead)\n• Depends on network conditions, interference\n• Like actual speed vs speed limit\n• Measured in bits per second (bps)"
    },
    {
      question: "What is Network Topology?",
      answer: "Network topology refers to the physical or logical arrangement of network devices and connections.\n\nReal Example:\n\n• Star topology: All devices connect to central hub (most common)\n• Bus topology: All devices on single cable\n• Ring topology: Devices in circle, each connected to two others\n• Mesh topology: Every device connected to every other device\n• Tree topology: Hierarchical structure like company organization"
    },
    {
      question: "What is Ethernet?",
      answer: "Ethernet is a family of networking technologies used for local area networks. It defines wiring and signaling standards.\n\nReal Example:\n\n• Ethernet cable: RJ45 connector, Cat5/Cat6 cables\n• Ethernet speeds: 10 Mbps, 100 Mbps, 1 Gbps, 10 Gbps\n• Most common wired network technology\n• CSMA/CD for collision detection\n• Like standard for how computers talk over wires"
    },
    {
      question: "What is WiFi?",
      answer: "WiFi is a wireless networking technology that allows devices to connect to the internet or communicate wirelessly.\n\nReal Example:\n\n• WiFi standards: 802.11n, 802.11ac, 802.11ax (WiFi 6)\n• Frequencies: 2.4 GHz, 5 GHz, 6 GHz\n• Wireless router creates WiFi network\n• Multiple devices connect without cables\n• Range depends on signal strength and obstacles"
    },
    {
      question: "What is Network Security?",
      answer: "Network security involves protecting network infrastructure and data from unauthorized access, misuse, or theft.\n\nReal Example:\n\n• Encryption: HTTPS, VPN, WPA3\n• Firewalls: Block unauthorized traffic\n• Intrusion Detection: Monitor suspicious activity\n• Access Control: User authentication and permissions\n• Regular security updates and patches"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-b border-gray-300 dark:border-gray-700 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Computer Networks Interview Questions
          </h1>
          <p className="text-blue-100 text-lg">Comprehensive guide covering OSI model, TCP/IP, protocols, and network concepts</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-blue-200">
            <span className="bg-white/10 px-3 py-1 rounded-full">30 Questions</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Advanced Level</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Interview Prep</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 mt-20">
        <div className="space-y-8">
          {content.map((item, index) => (
            <section key={index} className={`border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0 ${
              index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
            } p-6 rounded-lg shadow-sm`}>
              <h2 className="text-xl font-semibold mb-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 rounded-lg shadow-md">
                {index + 1}. {item.question}
              </h2>

              <div className="text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-700 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
                {item.answer.split('\n').map((line, i) => {
                  // Highlight important terms with different colors
                  const highlightedLine = line
                    .replace(/\b(OSI Model|TCP\/IP|HTTP|HTTPS|TCP|UDP|DNS|DHCP|NAT|ARP|ICMP|VPN|Firewall|CDN|Ethernet|WiFi|IPv4|IPv6|MAC Address|IP Address|Routing|Switching|Load Balancing|Bandwidth|Latency|Throughput|Subnetting)\b/g, '<span class="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-2 py-1 rounded font-semibold">$1</span>')
                    .replace(/\b(\d+(?:\.\d+)?%|\d+ (Mbps|Gbps|ms|GHz))\b/g, '<span class="bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 px-2 py-1 rounded font-semibold">$1</span>')
                    .replace(/\b(Real Example|Example)\b/g, '<span class="bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100 px-2 py-1 rounded font-semibold">$1</span>')
                    .replace(/•/g, '<span class="text-blue-600 dark:text-blue-400 font-bold">•</span>');

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