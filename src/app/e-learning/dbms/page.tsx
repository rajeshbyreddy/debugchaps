'use client';

import Navbar from '../../../components/Navbar';

export default function DBMS() {
  const content = [
    {
      question: "What is a Database?",
      answer: "A database is an organized collection of structured information or data, typically stored electronically in a computer system. It's designed to efficiently store, retrieve, and manage data.\n\nReal Example:\n\n• Your bank's database stores your account balance, transaction history, and personal details\n• Amazon's database stores product information, customer orders, and inventory levels\n• Facebook's database stores user profiles, posts, comments, and friend connections"
    },
    {
      question: "What is DBMS?",
      answer: "DBMS (Database Management System) is software that enables users to create, maintain, and interact with databases. It provides an interface between the database and end users or application programs.\n\nReal Example:\n\n• MySQL - Popular open-source DBMS\n• PostgreSQL - Advanced open-source DBMS\n• Oracle - Enterprise-grade commercial DBMS\n• MongoDB - NoSQL document database"
    },
    {
      question: "What is the difference between DBMS and RDBMS?",
      answer: "DBMS = Any database management system (can be hierarchical, network, or relational)\nRDBMS = Relational Database Management System (uses tables with relationships)\n\nReal Example:\n\n• DBMS: File system storing data in files\n• RDBMS: MySQL, PostgreSQL with tables like Customer, Order, Product connected by relationships"
    },
    {
      question: "What is SQL?",
      answer: "SQL (Structured Query Language) is a standard language for accessing and manipulating databases. It allows you to:\n\n• Create databases and tables\n• Insert, update, delete data\n• Query and retrieve data\n• Control access permissions\n\nReal Example:\n\n• SELECT * FROM users WHERE age > 25\n• INSERT INTO orders (customer_id, product_id) VALUES (123, 456)\n• UPDATE products SET price = price * 1.1 WHERE category = 'electronics'"
    },
    {
      question: "What are the different types of SQL commands?",
      answer: "DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE\nDML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE\nDCL (Data Control Language): GRANT, REVOKE\nTCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT\n\nReal Example:\n\n• DDL: CREATE TABLE users (id INT, name VARCHAR(50))\n• DML: SELECT name FROM users WHERE id = 1\n• DCL: GRANT SELECT ON users TO john\n• TCL: COMMIT after transferring money between accounts"
    },
    {
      question: "What is a Primary Key?",
      answer: "A primary key is a column (or combination of columns) that uniquely identifies each row in a table. It cannot contain NULL values and must be unique.\n\nReal Example:\n\n• In a users table: user_id column (1, 2, 3, 4...)\n• In a products table: product_id column\n• Composite primary key: order_id + product_id in order items table"
    },
    {
      question: "What is a Foreign Key?",
      answer: "A foreign key is a column that creates a link between two tables. It refers to the primary key of another table, establishing a relationship.\n\nReal Example:\n\n• In orders table: customer_id refers to id in users table\n• In order_items table: order_id refers to id in orders table\n• This creates parent-child relationships between tables"
    },
    {
      question: "What is Normalization?",
      answer: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, related tables.\n\nReal Example:\n\n• Before normalization: One big table with customer name, address, and order details repeated for each order\n• After normalization: Separate tables for customers, orders, and products - each piece of data stored only once"
    },
    {
      question: "What are Normal Forms (1NF, 2NF, 3NF, BCNF)?",
      answer: "1NF: Eliminate repeating groups, ensure atomic values\n2NF: Remove partial dependencies (non-key attributes depend on part of composite key)\n3NF: Remove transitive dependencies (non-key attributes depend on other non-key attributes)\nBCNF: Every determinant is a candidate key\n\nReal Example:\n\n• 1NF violation: Storing multiple phone numbers in one column\n• 2NF violation: In orders table with composite key (order_id, product_id), storing product_name (depends only on product_id)\n• 3NF violation: Storing customer city in orders table when it depends on customer_id"
    },
    {
      question: "What is Denormalization?",
      answer: "Denormalization is the process of adding redundant data to improve read performance. It's the opposite of normalization.\n\nReal Example:\n\n• Storing customer name in orders table (even though it can be joined from customers table)\n• This avoids expensive JOIN operations for frequently accessed data\n• Used in data warehouses and reporting systems where read performance is critical"
    },
    {
      question: "What are ACID Properties?",
      answer: "ACID ensures reliable database transactions:\n\n• Atomicity: All operations in a transaction succeed or none do\n• Consistency: Database remains in valid state after transaction\n• Isolation: Concurrent transactions don't interfere with each other\n• Durability: Changes persist even after system failure\n\nReal Example:\n\n• Bank transfer: Money deducted from account A and added to account B, or neither happens\n• Online shopping: Order placed, payment processed, inventory updated - all together or not at all"
    },
    {
      question: "What is a Transaction?",
      answer: "A transaction is a single unit of work that contains one or more database operations. Either all operations succeed (commit) or all fail (rollback).\n\nReal Example:\n\n• ATM withdrawal: Check balance, deduct amount, dispense cash, update balance\n• If cash dispenser fails, money should be credited back to account\n• All steps must succeed together or be completely undone"
    },
    {
      question: "What is Indexing?",
      answer: "An index is a data structure that improves the speed of data retrieval operations on a database table. It's like a book index that helps you find information quickly.\n\nReal Example:\n\n• Without index: Scan entire phone book to find \"John Smith\"\n• With index: Go directly to page where names starting with 'S' are listed\n• Database index allows instant lookup instead of scanning all rows"
    },
    {
      question: "What are different types of Indexes?",
      answer: "Primary Index: Created automatically with primary key\nSecondary Index: Created on non-primary key columns\nClustered Index: Data physically sorted by index\nNon-clustered Index: Separate structure pointing to data\nComposite Index: Index on multiple columns\nUnique Index: Ensures no duplicate values\n\nReal Example:\n\n• Clustered index on employee_id (data stored in ID order)\n• Non-clustered index on employee_name (separate index structure)\n• Composite index on (department, salary) for queries filtering by both"
    },
    {
      question: "What is a JOIN?",
      answer: "JOIN combines rows from two or more tables based on a related column. It allows you to retrieve data from multiple tables in a single query.\n\nReal Example:\n\n• INNER JOIN: Get customers who have placed orders\n• LEFT JOIN: Get all customers, with order info if they have orders\n• RIGHT JOIN: Get all orders, with customer info\n• FULL JOIN: Get all customers and all orders, matching where possible"
    },
    {
      question: "What is the difference between INNER JOIN and LEFT JOIN?",
      answer: "INNER JOIN: Returns only matching rows from both tables\nLEFT JOIN: Returns all rows from left table, matching rows from right table (NULL for no match)\n\nReal Example:\n\n• INNER JOIN customers and orders: Only customers who have placed orders\n• LEFT JOIN customers and orders: All customers, with order details if they exist\n• Useful for finding customers who haven't placed any orders"
    },
    {
      question: "What is a View?",
      answer: "A view is a virtual table based on the result of a SELECT query. It doesn't store data itself but provides a way to look at data from one or more tables.\n\nReal Example:\n\n• Employee salary view: Shows only name and salary columns\n• Monthly sales view: Aggregates daily sales into monthly totals\n• Security view: Hides sensitive columns like passwords or salaries from certain users"
    },
    {
      question: "What is a Stored Procedure?",
      answer: "A stored procedure is a prepared SQL code that you can save and reuse. It's stored in the database and can be called by applications.\n\nReal Example:\n\n• Transfer money between accounts (deduct from one, add to another)\n• Calculate monthly interest for all savings accounts\n• Generate monthly reports\n• Validate and process new customer registrations"
    },
    {
      question: "What is a Trigger?",
      answer: "A trigger is a special type of stored procedure that automatically executes when a specific event occurs in the database (INSERT, UPDATE, DELETE).\n\nReal Example:\n\n• Audit trigger: Log all changes to sensitive tables\n• Update trigger: Automatically update last_modified timestamp\n• Validation trigger: Check data integrity before allowing changes\n• Cascade delete: Automatically delete related records"
    },
    {
      question: "What is a Cursor?",
      answer: "A cursor is a database object used to retrieve and manipulate data row by row. It allows you to process individual rows returned by a query.\n\nReal Example:\n\n• Process each employee to calculate their bonus\n• Send personalized emails to customers based on their order history\n• Update inventory levels for each product after a bulk order"
    },
    {
      question: "What is Database Locking?",
      answer: "Database locking prevents multiple users from modifying the same data simultaneously, ensuring data consistency in concurrent environments.\n\nReal Example:\n\n• Two users trying to book the last seat on a flight\n• Both check availability, both see the seat is available\n• Without locking, both might successfully book the same seat\n• With locking, second user waits until first transaction completes"
    },
    {
      question: "What are different types of Locks?",
      answer: "Shared Lock: Multiple transactions can read, but none can write\nExclusive Lock: Only one transaction can read/write\nRow-level Lock: Locks individual rows\nTable-level Lock: Locks entire table\nRead Lock: Allows others to read but not write\nWrite Lock: Prevents others from reading or writing\n\nReal Example:\n\n• Shared lock: Multiple users reading product catalog\n• Exclusive lock: One user updating product price\n• Row lock: User editing their profile information"
    },
    {
      question: "What is Deadlock?",
      answer: "A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular wait condition.\n\nReal Example:\n\n• Transaction A holds lock on Table1, wants Table2\n• Transaction B holds lock on Table2, wants Table1\n• Both transactions wait forever\n• Database detects and resolves deadlocks by rolling back one transaction"
    },
    {
      question: "What is Database Sharding?",
      answer: "Sharding is a database architecture pattern where large databases are split into smaller, more manageable pieces called shards.\n\nReal Example:\n\n• Instagram shards user data by user_id ranges\n• Users 1-1M on Shard1, 1M-2M on Shard2, etc.\n• Each shard can be on a different server\n• Allows horizontal scaling across multiple machines"
    },
    {
      question: "What is Database Replication?",
      answer: "Database replication creates and maintains multiple copies of the same database on different servers. Changes to one database are automatically propagated to others.\n\nReal Example:\n\n• Master-slave replication: One master handles writes, multiple slaves handle reads\n• Used for load balancing, backup, and disaster recovery\n• If master fails, a slave can be promoted to master"
    },
    {
      question: "What is CAP Theorem?",
      answer: "CAP theorem states that in a distributed system, you can only guarantee 2 out of 3 properties:\n\n• Consistency: All nodes see the same data at the same time\n• Availability: System remains operational despite failures\n• Partition Tolerance: System continues to work despite network failures\n\nReal Example:\n\n• CA system: Traditional RDBMS (consistent and available, but not partition tolerant)\n• AP system: DynamoDB, Cassandra (available and partition tolerant, but eventually consistent)\n• CP system: MongoDB, HBase (consistent and partition tolerant, but may not be available during partitions)"
    },
    {
      question: "What is NoSQL?",
      answer: "NoSQL databases are non-relational databases designed for large-scale data storage and flexible schemas. They don't use traditional SQL.\n\nReal Example:\n\n• Document databases (MongoDB): Store JSON-like documents\n• Key-value stores (Redis): Simple key-value pairs\n• Column-family stores (Cassandra): Store data in columns rather than rows\n• Graph databases (Neo4j): Store relationships between data"
    },
    {
      question: "What is the difference between SQL and NoSQL?",
      answer: "SQL databases: Structured, relational, use schemas, ACID transactions, good for complex queries\nNoSQL databases: Flexible schemas, horizontal scaling, eventual consistency, good for large volumes of unstructured data\n\nReal Example:\n\n• SQL: Banking system requiring strict consistency\n• NoSQL: Social media platform storing user posts, comments, likes\n• SQL: E-commerce product catalog with fixed structure\n• NoSQL: IoT sensor data with varying attributes"
    },
    {
      question: "What is Database Partitioning?",
      answer: "Database partitioning divides a large table into smaller, more manageable pieces called partitions. Each partition can be stored and accessed separately.\n\nReal Example:\n\n• Partition sales data by month: January sales in one partition, February in another\n• Partition user data by region: US users in one partition, EU users in another\n• Improves query performance and maintenance operations"
    },
    {
      question: "What is Database Clustering?",
      answer: "Database clustering involves running multiple database servers together to provide high availability and load balancing.\n\nReal Example:\n\n• Multiple database servers sharing the same storage\n• If one server fails, others continue serving requests\n• Used for mission-critical applications requiring 99.999% uptime\n• Automatic failover and load distribution"
    },
    {
      question: "What is Database Backup and Recovery?",
      answer: "Backup creates copies of database data for restoration in case of data loss. Recovery restores the database to a consistent state after a failure.\n\nReal Example:\n\n• Full backup: Complete copy of entire database\n• Incremental backup: Only changes since last backup\n• Point-in-time recovery: Restore to specific moment before failure\n• Disaster recovery: Restore operations after major incidents"
    },
    {
      question: "What is Database Security?",
      answer: "Database security involves protecting database from unauthorized access, modification, or destruction. Includes authentication, authorization, encryption, and auditing.\n\nReal Example:\n\n• User authentication: Verify user identity\n• Role-based access control: Different permissions for admin vs regular user\n• Data encryption: Encrypt sensitive data like passwords, credit cards\n• Audit logging: Track who accessed what data and when"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white border-b border-gray-300 dark:border-gray-700 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Database Management Systems Interview Questions
          </h1>
          <p className="text-blue-100 text-lg">Comprehensive guide covering SQL, normalization, transactions, and database design</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-blue-200">
            <span className="bg-white/10 px-3 py-1 rounded-full">30 Questions</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Intermediate Level</span>
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
                    .replace(/\b(ACID|DDL|DML|DCL|TCL|SQL|DBMS|RDBMS|Primary Key|Foreign Key|Normalization|Denormalization|Transaction|Indexing|JOIN|View|Stored Procedure|Trigger|Cursor|Locking|Deadlock|Sharding|Replication|CAP Theorem|NoSQL|Partitioning|Clustering)\b/g, '<span class="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-2 py-1 rounded font-semibold">$1</span>')
                    .replace(/\b(\d+(?:\.\d+)?%|\d+ nines|\d+ milliseconds?|\d+ seconds?|\d+ minutes?|\d+ hours?|\d+ (million|billion))\b/g, '<span class="bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 px-2 py-1 rounded font-semibold">$1</span>')
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