'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import { FaGraduationCap, FaChevronDown, FaChevronRight, FaGlobe, FaNetworkWired, FaServer, FaShieldAlt, FaExchangeAlt, FaWifi, FaCloud, FaLock, FaRocket, FaBars, FaTimes, FaCheck, FaTable, FaKey, FaLink, FaCogs, FaCode, FaSync, FaDatabase } from 'react-icons/fa';

export default function CN() {
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({});
  const [completedTopics, setCompletedTopics] = useState<{[key: string]: boolean}>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleCard = (topic: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  const toggleCompleted = (topic: string) => {
    setCompletedTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  const content = [
    {
      id: 'network-basics',
      question: "What is Computer Network?",
      icon: FaNetworkWired,
      answer: "A computer network is a collection of computers and devices connected together to share resources and communicate with each other.\n\nReal Example:\n\n• Home WiFi network: Your laptop, phone, and smart TV connected to router\n• Office network: All computers connected to company server\n• Internet: Billions of devices worldwide connected together\n• Allows sharing files, printers, internet access",
      keyPoints: ['Resource sharing', 'Communication', 'Data exchange', 'Device connectivity']
    },
    {
      id: 'network-types',
      question: "What are different types of Networks?",
      icon: FaGlobe,
      answer: "LAN (Local Area Network): Small geographic area, high speed\nMAN (Metropolitan Area Network): City-wide network\nWAN (Wide Area Network): Large geographic area, uses telephone lines\nPAN (Personal Area Network): Very small, Bluetooth devices\n\nReal Example:\n\n• LAN: Office building network\n• MAN: Cable TV network in a city\n• WAN: Internet connecting countries\n• PAN: Bluetooth speaker connected to phone",
      keyPoints: ['LAN - Local', 'MAN - Metropolitan', 'WAN - Wide Area', 'PAN - Personal']
    },
    {
      id: 'dbms-vs-rdbms',
      question: "What is the difference between DBMS and RDBMS?",
      icon: FaTable,
      answer: "DBMS = Any database management system (can be hierarchical, network, or relational)\nRDBMS = Relational Database Management System (uses tables with relationships)\n\nReal Example:\n\n• DBMS: File system storing data in files\n• RDBMS: MySQL, PostgreSQL with tables like Customer, Order, Product connected by relationships",
      keyPoints: ['DBMS types', 'RDBMS structure', 'Table relationships', 'Data organization']
    },
    {
      id: 'sql-language',
      question: "What is SQL?",
      icon: FaCode,
      answer: "SQL (Structured Query Language) is a standard language for accessing and manipulating databases. It allows you to:\n\n• Create databases and tables\n• Insert, update, delete data\n• Query and retrieve data\n• Control access permissions\n\nReal Example:\n\n• SELECT * FROM users WHERE age > 25\n• INSERT INTO orders (customer_id, product_id) VALUES (123, 456)\n• UPDATE products SET price = price * 1.1 WHERE category = 'electronics'",
      keyPoints: ['Query language', 'Data manipulation', 'Database operations', 'Standard syntax']
    },
    {
      id: 'sql-commands',
      question: "What are the different types of SQL commands?",
      icon: FaCogs,
      answer: "DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE\nDML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE\nDCL (Data Control Language): GRANT, REVOKE\nTCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT\n\nReal Example:\n\n• DDL: CREATE TABLE users (id INT, name VARCHAR(50))\n• DML: SELECT name FROM users WHERE id = 1\n• DCL: GRANT SELECT ON users TO john\n• TCL: COMMIT after transferring money between accounts",
      keyPoints: ['DDL operations', 'DML operations', 'DCL permissions', 'TCL transactions']
    },
    {
      id: 'primary-key',
      question: "What is a Primary Key?",
      icon: FaKey,
      answer: "A primary key is a column (or combination of columns) that uniquely identifies each row in a table. It cannot contain NULL values and must be unique.\n\nReal Example:\n\n• In a users table: user_id column (1, 2, 3, 4...)\n• In a products table: product_id column\n• Composite primary key: order_id + product_id in order items table",
      keyPoints: ['Unique identifier', 'No NULL values', 'Table uniqueness', 'Row identification']
    },
    {
      id: 'foreign-key',
      question: "What is a Foreign Key?",
      icon: FaLink,
      answer: "A foreign key is a column that creates a link between two tables. It refers to the primary key of another table, establishing a relationship.\n\nReal Example:\n\n• In orders table: customer_id refers to id in users table\n• In order_items table: order_id refers to id in orders table\n• This creates parent-child relationships between tables",
      keyPoints: ['Table relationships', 'Referential integrity', 'Parent-child links', 'Data consistency']
    },
    {
      id: 'normalization',
      question: "What is Normalization?",
      icon: FaSync,
      answer: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, related tables.\n\nReal Example:\n\n• Before normalization: One big table with customer name, address, and order details repeated for each order\n• After normalization: Separate tables for customers, orders, and products - each piece of data stored only once",
      keyPoints: ['Data organization', 'Redundancy reduction', 'Integrity improvement', 'Table division']
    },
    {
      id: 'normal-forms',
      question: "What are Normal Forms (1NF, 2NF, 3NF, BCNF)?",
      icon: FaTable,
      answer: "1NF: Eliminate repeating groups, ensure atomic values\n2NF: Remove partial dependencies (non-key attributes depend on part of composite key)\n3NF: Remove transitive dependencies (non-key attributes depend on other non-key attributes)\nBCNF: Every determinant is a candidate key\n\nReal Example:\n\n• 1NF violation: Storing multiple phone numbers in one column\n• 2NF violation: In orders table with composite key (order_id, product_id), storing product_name (depends only on product_id)\n• 3NF violation: Storing customer city in orders table when it depends on customer_id",
      keyPoints: ['1NF atomicity', '2NF partial dependencies', '3NF transitive dependencies', 'BCNF determinants']
    },
    {
      id: 'denormalization',
      question: "What is Denormalization?",
      icon: FaRocket,
      answer: "Denormalization is the process of adding redundant data to improve read performance. It's the opposite of normalization.\n\nReal Example:\n\n• Storing customer name in orders table (even though it can be joined from customers table)\n• This avoids expensive JOIN operations for frequently accessed data\n• Used in data warehouses and reporting systems where read performance is critical",
      keyPoints: ['Performance optimization', 'Redundant data', 'Read efficiency', 'JOIN avoidance']
    },
    {
      id: 'acid-properties',
      question: "What are ACID Properties?",
      icon: FaShieldAlt,
      answer: "ACID ensures reliable database transactions:\n\n• Atomicity: All operations in a transaction succeed or none do\n• Consistency: Database remains in valid state after transaction\n• Isolation: Concurrent transactions don't interfere with each other\n• Durability: Changes persist even after system failure\n\nReal Example:\n\n• Bank transfer: Money deducted from account A and added to account B, or neither happens\n• Online shopping: Order placed, payment processed, inventory updated - all together or not at all",
      keyPoints: ['Atomicity', 'Consistency', 'Isolation', 'Durability']
    },
    {
      id: 'transaction',
      question: "What is a Transaction?",
      icon: FaExchangeAlt,
      answer: "A transaction is a single unit of work that contains one or more database operations. Either all operations succeed (commit) or all fail (rollback).\n\nReal Example:\n\n• ATM withdrawal: Check balance, deduct amount, dispense cash, update balance\n• If cash dispenser fails, money should be credited back to account\n• All steps must succeed together or be completely undone",
      keyPoints: ['Work unit', 'All-or-nothing', 'Commit/rollback', 'Data consistency']
    },
    {
      id: 'indexing',
      question: "What is Indexing?",
      icon: FaRocket,
      answer: "An index is a data structure that improves the speed of data retrieval operations on a database table. It's like a book index that helps you find information quickly.\n\nReal Example:\n\n• Without index: Scan entire phone book to find \"John Smith\"\n• With index: Go directly to page where names starting with 'S' are listed\n• Database index allows instant lookup instead of scanning all rows",
      keyPoints: ['Data structure', 'Query performance', 'Fast retrieval', 'Lookup optimization']
    },
    {
      id: 'index-types',
      question: "What are different types of Indexes?",
      icon: FaCogs,
      answer: "Primary Index: Created automatically with primary key\nSecondary Index: Created on non-primary key columns\nClustered Index: Data physically sorted by index\nNon-clustered Index: Separate structure pointing to data\nComposite Index: Index on multiple columns\nUnique Index: Ensures no duplicate values\n\nReal Example:\n\n• Clustered index on employee_id (data stored in ID order)\n• Non-clustered index on employee_name (separate index structure)\n• Composite index on (department, salary) for queries filtering by both",
      keyPoints: ['Primary/secondary', 'Clustered/non-clustered', 'Composite indexes', 'Unique constraints']
    },
    {
      id: 'join-operation',
      question: "What is a JOIN?",
      icon: FaLink,
      answer: "JOIN combines rows from two or more tables based on a related column. It allows you to retrieve data from multiple tables in a single query.\n\nReal Example:\n\n• INNER JOIN: Get customers who have placed orders\n• LEFT JOIN: Get all customers, with order info if they have orders\n• RIGHT JOIN: Get all orders, with customer info\n• FULL JOIN: Get all customers and all orders, matching where possible",
      keyPoints: ['Table combination', 'Related columns', 'Multiple table queries', 'Data relationships']
    },
    {
      id: 'join-types',
      question: "What is the difference between INNER JOIN and LEFT JOIN?",
      icon: FaTable,
      answer: "INNER JOIN: Returns only matching rows from both tables\nLEFT JOIN: Returns all rows from left table, matching rows from right table (NULL for no match)\n\nReal Example:\n\n• INNER JOIN customers and orders: Only customers who have placed orders\n• LEFT JOIN customers and orders: All customers, with order details if they exist\n• Useful for finding customers who haven't placed any orders",
      keyPoints: ['Matching rows only', 'All left table rows', 'NULL handling', 'Data completeness']
    },
    {
      id: 'database-view',
      question: "What is a View?",
      icon: FaServer,
      answer: "A view is a virtual table based on the result of a SELECT query. It doesn't store data itself but provides a way to look at data from one or more tables.\n\nReal Example:\n\n• Employee salary view: Shows only name and salary columns\n• Monthly sales view: Aggregates daily sales into monthly totals\n• Security view: Hides sensitive columns like passwords or salaries from certain users",
      keyPoints: ['Virtual table', 'Query result', 'Data abstraction', 'Security layer']
    },
    {
      id: 'stored-procedure',
      question: "What is a Stored Procedure?",
      icon: FaCode,
      answer: "A stored procedure is a prepared SQL code that you can save and reuse. It's stored in the database and can be called by applications.\n\nReal Example:\n\n• Transfer money between accounts (deduct from one, add to another)\n• Calculate monthly interest for all savings accounts\n• Generate monthly reports\n• Validate and process new customer registrations",
      keyPoints: ['Reusable SQL code', 'Database storage', 'Application calls', 'Business logic']
    },
    {
      id: 'database-trigger',
      question: "What is a Trigger?",
      icon: FaSync,
      answer: "A trigger is a special type of stored procedure that automatically executes when a specific event occurs in the database (INSERT, UPDATE, DELETE).\n\nReal Example:\n\n• Audit trigger: Log all changes to sensitive tables\n• Update trigger: Automatically update last_modified timestamp\n• Validation trigger: Check data integrity before allowing changes\n• Cascade delete: Automatically delete related records",
      keyPoints: ['Automatic execution', 'Event-driven', 'Data integrity', 'Audit logging']
    },
    {
      id: 'database-cursor',
      question: "What is a Cursor?",
      icon: FaRocket,
      answer: "A cursor is a database object used to retrieve and manipulate data row by row. It allows you to process individual rows returned by a query.\n\nReal Example:\n\n• Process each employee to calculate their bonus\n• Send personalized emails to customers based on their order history\n• Update inventory levels for each product after a bulk order",
      keyPoints: ['Row-by-row processing', 'Data manipulation', 'Query results', 'Individual operations']
    },
    {
      id: 'database-locking',
      question: "What is Database Locking?",
      icon: FaLock,
      answer: "Database locking prevents multiple users from modifying the same data simultaneously, ensuring data consistency in concurrent environments.\n\nReal Example:\n\n• Two users trying to book the last seat on a flight\n• Both check availability, both see the seat is available\n• Without locking, both might successfully book the same seat\n• With locking, second user waits until first transaction completes",
      keyPoints: ['Concurrency control', 'Data consistency', 'Simultaneous access', 'Transaction isolation']
    },
    {
      id: 'lock-types',
      question: "What are different types of Locks?",
      icon: FaShieldAlt,
      answer: "Shared Lock: Multiple transactions can read, but none can write\nExclusive Lock: Only one transaction can read/write\nRow-level Lock: Locks individual rows\nTable-level Lock: Locks entire table\nRead Lock: Allows others to read but not write\nWrite Lock: Prevents others from reading or writing\n\nReal Example:\n\n• Shared lock: Multiple users reading product catalog\n• Exclusive lock: One user updating product price\n• Row lock: User editing their profile information",
      keyPoints: ['Shared/exclusive', 'Row/table level', 'Read/write locks', 'Concurrency management']
    },
    {
      id: 'deadlock',
      question: "What is Deadlock?",
      icon: FaExchangeAlt,
      answer: "A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular wait condition.\n\nReal Example:\n\n• Transaction A holds lock on Table1, wants Table2\n• Transaction B holds lock on Table2, wants Table1\n• Both transactions wait forever\n• Database detects and resolves deadlocks by rolling back one transaction",
      keyPoints: ['Circular waiting', 'Lock conflicts', 'Transaction blocking', 'Automatic resolution']
    },
    {
      id: 'database-sharding',
      question: "What is Database Sharding?",
      icon: FaCloud,
      answer: "Sharding is a database architecture pattern where large databases are split into smaller, more manageable pieces called shards.\n\nReal Example:\n\n• Instagram shards user data by user_id ranges\n• Users 1-1M on Shard1, 1M-2M on Shard2, etc.\n• Each shard can be on a different server\n• Allows horizontal scaling across multiple machines",
      keyPoints: ['Data partitioning', 'Horizontal scaling', 'Performance improvement', 'Distributed storage']
    },
    {
      id: 'database-replication',
      question: "What is Database Replication?",
      icon: FaSync,
      answer: "Database replication creates and maintains multiple copies of the same database on different servers. Changes to one database are automatically propagated to others.\n\nReal Example:\n\n• Master-slave replication: One master handles writes, multiple slaves handle reads\n• Used for load balancing, backup, and disaster recovery\n• If master fails, a slave can be promoted to master",
      keyPoints: ['Data copies', 'Automatic synchronization', 'High availability', 'Load distribution']
    },
    {
      id: 'cap-theorem',
      question: "What is CAP Theorem?",
      icon: FaServer,
      answer: "CAP theorem states that in a distributed system, you can only guarantee 2 out of 3 properties:\n\n• Consistency: All nodes see the same data at the same time\n• Availability: System remains operational despite failures\n• Partition Tolerance: System continues to work despite network failures\n\nReal Example:\n\n• CA system: Traditional RDBMS (consistent and available, but not partition tolerant)\n• AP system: DynamoDB, Cassandra (available and partition tolerant, but eventually consistent)\n• CP system: MongoDB, HBase (consistent and partition tolerant, but may not be available during partitions)",
      keyPoints: ['Consistency', 'Availability', 'Partition tolerance', 'Trade-off choices']
    },
    {
      id: 'nosql-databases',
      question: "What is NoSQL?",
      icon: FaDatabase,
      answer: "NoSQL databases are non-relational databases designed for large-scale data storage and flexible schemas. They don't use traditional SQL.\n\nReal Example:\n\n• Document databases (MongoDB): Store JSON-like documents\n• Key-value stores (Redis): Simple key-value pairs\n• Column-family stores (Cassandra): Store data in columns rather than rows\n• Graph databases (Neo4j): Store relationships between data",
      keyPoints: ['Non-relational', 'Flexible schemas', 'Large-scale storage', 'No SQL requirement']
    },
    {
      id: 'sql-vs-nosql',
      question: "What is the difference between SQL and NoSQL?",
      icon: FaTable,
      answer: "SQL databases: Structured, relational, use schemas, ACID transactions, good for complex queries\nNoSQL databases: Flexible schemas, horizontal scaling, eventual consistency, good for large volumes of unstructured data\n\nReal Example:\n\n• SQL: Banking system requiring strict consistency\n• NoSQL: Social media platform storing user posts, comments, likes\n• SQL: E-commerce product catalog with fixed structure\n• NoSQL: IoT sensor data with varying attributes",
      keyPoints: ['Structured vs flexible', 'ACID vs eventual consistency', 'Complex queries vs scaling', 'Use case differences']
    },
    {
      id: 'database-partitioning',
      question: "What is Database Partitioning?",
      icon: FaCogs,
      answer: "Database partitioning divides a large table into smaller, more manageable pieces called partitions. Each partition can be stored and accessed separately.\n\nReal Example:\n\n• Partition sales data by month: January sales in one partition, February in another\n• Partition user data by region: US users in one partition, EU users in another\n• Improves query performance and maintenance operations",
      keyPoints: ['Table division', 'Performance improvement', 'Maintenance ease', 'Separate storage']
    },
    {
      id: 'database-clustering',
      question: "What is Database Clustering?",
      icon: FaServer,
      answer: "Database clustering involves running multiple database servers together to provide high availability and load balancing.\n\nReal Example:\n\n• Multiple database servers sharing the same storage\n• If one server fails, others continue serving requests\n• Used for mission-critical applications requiring 99.999% uptime\n• Automatic failover and load distribution",
      keyPoints: ['High availability', 'Load balancing', 'Failover protection', 'Multiple servers']
    },
    {
      id: 'backup-recovery',
      question: "What is Database Backup and Recovery?",
      icon: FaShieldAlt,
      answer: "Backup creates copies of database data for restoration in case of data loss. Recovery restores the database to a consistent state after a failure.\n\nReal Example:\n\n• Full backup: Complete copy of entire database\n• Incremental backup: Only changes since last backup\n• Point-in-time recovery: Restore to specific moment before failure\n• Disaster recovery: Restore operations after major incidents",
      keyPoints: ['Data protection', 'Failure recovery', 'Backup strategies', 'Disaster recovery']
    },
    {
      id: 'database-security',
      question: "What is Database Security?",
      icon: FaLock,
      answer: "Database security involves protecting database from unauthorized access, modification, or destruction. Includes authentication, authorization, encryption, and auditing.\n\nReal Example:\n\n• User authentication: Verify user identity\n• Role-based access control: Different permissions for admin vs regular user\n• Data encryption: Encrypt sensitive data like passwords, credit cards\n• Audit logging: Track who accessed what data and when",
      keyPoints: ['Access control', 'Data encryption', 'Authentication', 'Audit logging']
    }
  ];

  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / content.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F14] to-[#0F172A] text-white">
      <Navbar />
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-20 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-lg shadow-lg transition-colors duration-200"
        >
          {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
          <div className="relative">
            <div className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl overflow-y-auto">
              <div className="p-6">
                {/* Close button */}
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <FaTimes size={20} />
                </button>

                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    DebugChaps
                  </span>
                </div>

                {/* Progress Card */}
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 mb-8 shadow-lg">
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">Computer Networks Progress</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{progressPercentage}%</span>
                    <span className="text-sm text-gray-400">{completedCount}/{content.length} completed</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Topics</h3>
                  {content.map((item) => {
                    const Icon = item.icon;
                    const isCompleted = completedTopics[item.id];
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                          setSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-cyan-500/10 hover:border hover:border-cyan-500/30 ${
                          isCompleted ? 'bg-green-500/10 border border-green-500/30' : 'bg-gray-900/30'
                        }`}
                      >
                        <Icon className={`text-lg ${isCompleted ? 'text-green-400' : 'text-cyan-400'}`} />
                        <span className={`text-sm font-medium text-left ${isCompleted ? 'text-green-300' : 'text-gray-300'}`}>
                          {item.question.length > 40 ? item.question.substring(0, 40) + '...' : item.question}
                        </span>
                        {isCompleted && <div className="w-2 h-2 bg-green-400 rounded-full ml-auto"></div>}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-black/20 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl z-10 overflow-y-auto">
          <div className="p-6">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                DebugChaps
              </span>
            </div>

            {/* Progress Card */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 mb-8 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Computer Networks Progress</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-cyan-400">{progressPercentage}%</span>
                <span className="text-sm text-gray-400">{completedCount}/{content.length} completed</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Topics</h3>
              {content.map((item) => {
                const Icon = item.icon;
                const isCompleted = completedTopics[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-cyan-500/10 hover:border hover:border-cyan-500/30 ${
                      isCompleted ? 'bg-green-500/10 border border-green-500/30' : 'bg-gray-900/30'
                    }`}
                  >
                    <Icon className={`text-lg ${isCompleted ? 'text-green-400' : 'text-cyan-400'}`} />
                    <span className={`text-sm font-medium text-left ${isCompleted ? 'text-green-300' : 'text-gray-300'}`}>
                      {item.question.length > 40 ? item.question.substring(0, 40) + '...' : item.question}
                    </span>
                    {isCompleted && <div className="w-2 h-2 bg-green-400 rounded-full ml-auto"></div>}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-80 p-4 lg:p-8 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Computer Networks Interview Questions
            </h1>
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
              Master networking concepts, protocols, and architectures for technical interviews.
            </p>
          </div>

          {/* Accordion Cards */}
          <div className="space-y-4">
            {content.map((item, index) => {
              const Icon = item.icon;
              const isExpanded = expandedCards[item.id];
              const isCompleted = completedTopics[item.id];

              return (
                <div
                  key={item.id}
                  id={`topic-${item.id}`}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-500/30"
                >
                  <div
                    className="flex items-center justify-between p-6 cursor-pointer"
                    onClick={() => toggleCard(item.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${isCompleted ? 'bg-green-500/20' : 'bg-cyan-500/20'}`}>
                        <Icon className={`text-2xl ${isCompleted ? 'text-green-400' : 'text-cyan-400'}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${isCompleted ? 'text-green-300' : 'text-white'}`}>
                          {item.question}
                        </h3>
                        <p className="text-gray-400 text-sm">Click to explore the answer and key concepts</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {isExpanded ? (
                        <FaChevronDown className="text-cyan-400 text-lg" />
                      ) : (
                        <FaChevronRight className="text-cyan-400 text-lg" />
                      )}

                      {/* Toggle Switch */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Done</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCompleted(item.id);
                          }}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                            isCompleted ? 'bg-green-500' : 'bg-gray-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                              isCompleted ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-700/50">
                      <div className="pt-4">
                        <div className="text-gray-300 leading-relaxed mb-4">
                          {item.answer.split('\n').map((line, i) => {
                            // Highlight important terms with different colors
                            const highlightedLine = line
                              .replace(/\b(ACID|DDL|DML|DCL|TCL|SQL|DBMS|RDBMS|Primary Key|Foreign Key|Normalization|Denormalization|Transaction|Indexing|JOIN|View|Stored Procedure|Trigger|Cursor|Locking|Deadlock|Sharding|Replication|CAP Theorem|NoSQL|Partitioning|Clustering)\b/g, '<span class="bg-blue-800 text-blue-100 px-2 py-1 rounded font-semibold">$1</span>')
                              .replace(/\b(\d+(?:\.\d+)?%|\d+ nines|\d+ milliseconds?|\d+ seconds?|\d+ minutes?|\d+ hours?|\d+ (million|billion))\b/g, '<span class="bg-green-800 text-green-100 px-2 py-1 rounded font-semibold">$1</span>')
                              .replace(/\b(Real Example|Example)\b/g, '<span class="bg-purple-800 text-purple-100 px-2 py-1 rounded font-semibold">$1</span>')
                              .replace(/•/g, '<span class="text-blue-400 font-bold">•</span>');

                            return (
                              <p key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                            );
                          })}
                        </div>

                        {/* Key Points */}
                        <div className="bg-black/20 rounded-lg p-4 border border-gray-600/30">
                          <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Points:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.keyPoints.map((point, idx) => (
                              <span key={idx} className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                                {point}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}