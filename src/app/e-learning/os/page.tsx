'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import { FaGraduationCap, FaChevronDown, FaChevronRight, FaMicrochip, FaMemory, FaCogs, FaLock, FaRocket, FaServer, FaShieldAlt, FaExchangeAlt, FaCode, FaSync, FaDatabase, FaTerminal } from 'react-icons/fa';

export default function OS() {
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({});
  const [completedTopics, setCompletedTopics] = useState<{[key: string]: boolean}>({});

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
      id: 'os-basics',
      question: "What is an Operating System?",
      icon: FaServer,
      answer: "An operating system is a software that acts as an intermediary between computer hardware and user applications. It manages computer resources and provides services to programs.\n\nReal Example:\n\n• Windows, macOS, Linux are operating systems\n• Without OS, you couldn't run applications like Chrome, Word, or games\n• OS manages memory, CPU, disk, and other hardware resources",
      keyPoints: ['Hardware-software interface', 'Resource management', 'Service provider', 'System control']
    },
    {
      id: 'os-functions',
      question: "What are the main functions of an Operating System?",
      icon: FaCogs,
      answer: "Process Management: Create, schedule, and terminate processes\nMemory Management: Allocate and deallocate memory\nFile System Management: Organize and store files\nDevice Management: Control hardware devices\nSecurity: Protect system and user data\nUser Interface: Provide interaction methods\n\nReal Example:\n\n• When you open multiple applications, OS decides which gets CPU time\n• When you save a file, OS manages where it's stored on disk\n• When you print a document, OS communicates with printer hardware",
      keyPoints: ['Process management', 'Memory management', 'File systems', 'Device control']
    },
    {
      id: 'process-concept',
      question: "What is a Process?",
      icon: FaMicrochip,
      answer: "A process is a program in execution. It's an instance of a running program with its own memory space, resources, and execution state.\n\nReal Example:\n\n• When you open Chrome browser, it becomes a process\n• Each tab in Chrome might be a separate process or thread\n• Calculator app running is a process\n• Multiple instances of same program are different processes",
      keyPoints: ['Program execution', 'Memory space', 'Resource allocation', 'Execution state']
    },
    {
      id: 'thread-concept',
      question: "What is a Thread?",
      icon: FaRocket,
      answer: "A thread is the smallest unit of execution within a process. Multiple threads can exist within one process and share the same memory space.\n\nReal Example:\n\n• In a video player: One thread plays video, another handles audio, another downloads next part\n• In a web browser: One thread renders page, another loads images, another handles user input\n• Threads are lighter than processes and share data easily",
      keyPoints: ['Execution unit', 'Process subdivision', 'Shared memory', 'Lightweight processes']
    },
    {
      id: 'process-vs-thread',
      question: "What is the difference between Process and Thread?",
      icon: FaExchangeAlt,
      answer: "Process: Independent execution unit with separate memory space\nThread: Lightweight execution unit within a process, shares memory\n\nReal Example:\n\n• Process: Running Chrome and Word separately - if one crashes, other continues\n• Thread: Multiple tabs in Chrome - if one tab crashes, browser might recover\n• Process switching is expensive, thread switching is fast",
      keyPoints: ['Independence level', 'Memory sharing', 'Switching cost', 'Failure isolation']
    },
    {
      id: 'process-scheduling',
      question: "What is Process Scheduling?",
      icon: FaSync,
      answer: "Process scheduling is the activity of selecting which process to run next on the CPU. The scheduler decides which process gets CPU time and for how long.\n\nReal Example:\n\n• You have multiple programs running: music player, web browser, antivirus\n• OS scheduler decides: play music for 10ms, then browser for 20ms, then antivirus for 5ms\n• This gives illusion that all programs run simultaneously",
      keyPoints: ['CPU allocation', 'Process selection', 'Time management', 'Multitasking illusion']
    },
    {
      id: 'scheduler-types',
      question: "What are different types of Process Schedulers?",
      icon: FaCogs,
      answer: "Long-term Scheduler: Selects processes from job queue to ready queue\nShort-term Scheduler: Selects process from ready queue to CPU\nMedium-term Scheduler: Swaps processes between memory and disk\n\nReal Example:\n\n• Long-term: Decides which programs to start running\n• Short-term: Quickly switches between running programs\n• Medium-term: Moves rarely used programs to disk to free memory",
      keyPoints: ['Long-term scheduler', 'Short-term scheduler', 'Medium-term scheduler', 'Queue management']
    },
    {
      id: 'scheduling-algorithms',
      question: "What are different Scheduling Algorithms?",
      icon: FaRocket,
      answer: "FCFS (First Come First Served): Processes execute in arrival order\nSJF (Shortest Job First): Shortest jobs first (optimal for minimizing wait time)\nRound Robin: Each process gets fixed time slice\nPriority Scheduling: Higher priority processes first\nMultilevel Queue: Different queues for different priorities\n\nReal Example:\n\n• FCFS: People waiting in line at bank - first person serves first\n• SJF: At coffee shop, serve person who wants only coffee before person who wants full meal\n• Round Robin: Each child gets 5 minutes on playground swing",
      keyPoints: ['FCFS algorithm', 'SJF algorithm', 'Round Robin', 'Priority scheduling']
    },
    {
      id: 'context-switching',
      question: "What is Context Switching?",
      icon: FaExchangeAlt,
      answer: "Context switching is the process of saving the state of a running process and loading the state of another process. It allows multiple processes to share a single CPU.\n\nReal Example:\n\n• You're writing email, then switch to watching video\n• OS saves email program's state (cursor position, unsaved text)\n• Loads video player's state (current playback position)\n• Later switches back to email with everything as you left it",
      keyPoints: ['State preservation', 'Process switching', 'CPU sharing', 'Execution context']
    },
    {
      id: 'memory-management',
      question: "What is Memory Management?",
      icon: FaMemory,
      answer: "Memory management is the process of controlling and coordinating computer memory, assigning memory to programs when needed and freeing it when no longer needed.\n\nReal Example:\n\n• When you open Photoshop, OS allocates memory for the program\n• If memory runs low, OS might move unused data to disk (virtual memory)\n• When you close Photoshop, OS frees up that memory for other programs",
      keyPoints: ['Memory allocation', 'Resource coordination', 'Dynamic management', 'Memory freeing']
    },
    {
      id: 'virtual-memory',
      question: "What is Virtual Memory?",
      icon: FaDatabase,
      answer: "Virtual memory is a memory management technique that provides an idealized abstraction of the storage resources that are actually available on a given machine.\n\nReal Example:\n\n• Your computer has 8GB RAM but runs programs needing 16GB total\n• OS uses hard disk as extension of RAM\n• Frequently used data stays in fast RAM, less used data goes to slow disk\n• This allows running larger programs than physical memory allows",
      keyPoints: ['Memory abstraction', 'Storage extension', 'Performance optimization', 'Large program support']
    },
    {
      id: 'paging',
      question: "What is Paging?",
      icon: FaMemory,
      answer: "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. Memory is divided into fixed-size blocks called pages.\n\nReal Example:\n\n• Book pages: Chapter 1 might be on pages 1-10, but stored in different locations\n• Program's memory divided into 4KB pages\n• Page 1 might be in RAM location 1000, Page 2 at location 5000\n• OS maintains page table to track where each page is stored",
      keyPoints: ['Fixed-size blocks', 'Non-contiguous allocation', 'Page tables', 'Memory mapping']
    },
    {
      id: 'segmentation',
      question: "What is Segmentation?",
      icon: FaCogs,
      answer: "Segmentation is a memory management technique where memory is divided into segments of different sizes. Each segment represents a logical unit like code, data, stack.\n\nReal Example:\n\n• Program divided into segments: code segment, data segment, stack segment\n• Code segment might be 100KB, data segment 50KB, stack 20KB\n• Each segment can grow independently\n• Protection: Code segment is read-only, data segment is read-write",
      keyPoints: ['Variable-size blocks', 'Logical division', 'Independent growth', 'Protection mechanisms']
    },
    {
      id: 'paging-vs-segmentation',
      question: "What is the difference between Paging and Segmentation?",
      icon: FaExchangeAlt,
      answer: "Paging: Fixed-size blocks, invisible to programmer, efficient for OS\nSegmentation: Variable-size blocks, visible to programmer, logical division\n\nReal Example:\n\n• Paging: Like dividing book into fixed 100-page chapters, but chapters can be scattered\n• Segmentation: Like dividing book into logical chapters (Introduction, Chapter 1, etc.) of different lengths\n• Segmentation allows protection and sharing of logical units",
      keyPoints: ['Fixed vs variable size', 'Programmer visibility', 'Efficiency trade-offs', 'Protection capabilities']
    },
    {
      id: 'deadlock',
      question: "What is Deadlock?",
      icon: FaLock,
      answer: "A deadlock is a situation where two or more processes are unable to proceed because each is waiting for the other to release a resource.\n\nReal Example:\n\n• Process A holds Printer, waits for Scanner\n• Process B holds Scanner, waits for Printer\n• Neither can proceed - classic deadlock\n• Like two people each holding a door key the other needs",
      keyPoints: ['Resource waiting', 'Circular dependency', 'Process blocking', 'System stall']
    },
    {
      id: 'deadlock-conditions',
      question: "What are the conditions for Deadlock?",
      icon: FaShieldAlt,
      answer: "Mutual Exclusion: Resources can't be shared\nHold and Wait: Process holds one resource while waiting for another\nNo Preemption: Resources can't be forcibly taken away\nCircular Wait: Processes wait in circular chain\n\nReal Example:\n\n• Mutual Exclusion: Only one person can use the printer\n• Hold and Wait: You have paper but need ink cartridge\n• No Preemption: Can't take ink from someone else\n• Circular Wait: A waits for B's resource, B waits for C's, C waits for A's",
      keyPoints: ['Mutual exclusion', 'Hold and wait', 'No preemption', 'Circular wait']
    },
    {
      id: 'deadlock-prevention',
      question: "How to prevent Deadlock?",
      icon: FaShieldAlt,
      answer: "Eliminate one of the four conditions:\n\n• Allow resource sharing (remove mutual exclusion)\n• Require processes to request all resources at once (no hold and wait)\n• Allow preemption of resources\n• Impose ordering on resource requests (no circular wait)\n\nReal Example:\n\n• Banker's algorithm: Check if granting request leads to safe state\n• Resource ordering: Always acquire resources in fixed order\n• Timeout: If wait too long, release all resources and retry",
      keyPoints: ['Condition elimination', 'Banker\'s algorithm', 'Resource ordering', 'Timeout mechanisms']
    },
    {
      id: 'semaphore',
      question: "What is a Semaphore?",
      icon: FaSync,
      answer: "A semaphore is a synchronization primitive used to control access to shared resources. It maintains a count that can be modified by wait() and signal() operations.\n\nReal Example:\n\n• Bathroom key: Only one person can use bathroom at a time\n• Wait(): Try to get key, if not available, wait\n• Signal(): Return key when done\n• Count represents available resources",
      keyPoints: ['Synchronization primitive', 'Resource control', 'Wait/signal operations', 'Counting mechanism']
    },
    {
      id: 'mutex',
      question: "What is a Mutex?",
      icon: FaLock,
      answer: "A mutex (mutual exclusion) is a synchronization primitive that ensures only one thread can access a critical section at a time. It's a binary semaphore.\n\nReal Example:\n\n• Single bathroom door: Either locked or unlocked\n• Thread acquires mutex before entering critical section\n• Other threads wait until mutex is released\n• Prevents race conditions in shared data access",
      keyPoints: ['Mutual exclusion', 'Critical section protection', 'Binary semaphore', 'Thread synchronization']
    },
    {
      id: 'critical-section',
      question: "What is a Critical Section?",
      icon: FaShieldAlt,
      answer: "A critical section is a segment of code that accesses shared resources and must not be executed by more than one process at a time.\n\nReal Example:\n\n• Updating bank balance: Read balance, add deposit, write back\n• If two processes do this simultaneously, might lose updates\n• Critical section ensures atomicity of the operation\n• Only one process can execute critical section at a time",
      keyPoints: ['Shared resource access', 'Mutual exclusion', 'Atomic operations', 'Concurrent protection']
    },
    {
      id: 'race-condition',
      question: "What is Race Condition?",
      icon: FaRocket,
      answer: "A race condition occurs when multiple processes access shared data concurrently and the final result depends on the order of execution.\n\nReal Example:\n\n• Two people withdrawing money from joint account simultaneously\n• Both read balance = $1000\n• Person A withdraws $200, writes $800\n• Person B withdraws $300, writes $700\n• Account ends up with $700 instead of $500\n• Race condition caused incorrect result",
      keyPoints: ['Concurrent access', 'Execution order dependency', 'Unpredictable results', 'Data corruption']
    },
    {
      id: 'starvation',
      question: "What is Starvation?",
      icon: FaLock,
      answer: "Starvation occurs when a process is perpetually denied access to a resource it needs, even though the resource becomes available.\n\nReal Example:\n\n• In priority scheduling, low priority processes never get CPU time\n• In reader-writer problem, writers might starve if readers keep coming\n• Process waits indefinitely while others get served\n• Different from deadlock - process is runnable but never selected",
      keyPoints: ['Resource denial', 'Priority issues', 'Indefinite waiting', 'Scheduling unfairness']
    },
    {
      id: 'file-system',
      question: "What is File System?",
      icon: FaDatabase,
      answer: "A file system is a method of organizing and storing files on storage devices. It defines how files are named, stored, and retrieved.\n\nReal Example:\n\n• NTFS on Windows, ext4 on Linux\n• Defines file structure, directories, permissions\n• Manages free space, file allocation\n• Provides abstraction over physical storage blocks",
      keyPoints: ['File organization', 'Storage management', 'Naming conventions', 'Access control']
    },
    {
      id: 'file-descriptor',
      question: "What is a File Descriptor?",
      icon: FaCode,
      answer: "A file descriptor is a unique identifier (usually a number) that the operating system assigns to an open file. Programs use it to read from or write to the file.\n\nReal Example:\n\n• When you open a file in C: fopen() returns FILE pointer\n• In Unix: open() returns integer file descriptor (3, 4, 5...)\n• File descriptor 0 = stdin, 1 = stdout, 2 = stderr\n• Used for reading, writing, seeking within file",
      keyPoints: ['Unique identifier', 'File access handle', 'I/O operations', 'System resource']
    },
    {
      id: 'buffering',
      question: "What is Buffering?",
      icon: FaMemory,
      answer: "Buffering is a technique where data is temporarily stored in memory before being processed or transferred. It helps smooth out differences in processing speeds.\n\nReal Example:\n\n• Video streaming: Download 30 seconds ahead, play from buffer\n• Keyboard input: Characters stored in buffer until program reads them\n• Disk I/O: Read/write multiple blocks at once for efficiency\n• Prevents waiting for slow devices",
      keyPoints: ['Temporary storage', 'Speed smoothing', 'Performance optimization', 'I/O efficiency']
    },
    {
      id: 'spooling',
      question: "What is Spooling?",
      icon: FaDatabase,
      answer: "Spooling (Simultaneous Peripheral Operations On-Line) is a technique where data is temporarily stored on disk for later processing by a device.\n\nReal Example:\n\n• Print spooling: Documents sent to printer queue on disk\n• Printer processes one job while you send more jobs\n• Email spooling: Messages stored on mail server disk\n• Allows asynchronous processing of I/O operations",
      keyPoints: ['Disk storage', 'Asynchronous processing', 'Device queuing', 'I/O optimization']
    },
    {
      id: 'ipc',
      question: "What is Inter-Process Communication (IPC)?",
      icon: FaExchangeAlt,
      answer: "IPC allows processes to communicate and synchronize their actions. Methods include pipes, message queues, shared memory, sockets.\n\nReal Example:\n\n• Pipe: One process output becomes another process input\n• Shared memory: Processes read/write same memory location\n• Message queue: Processes send/receive messages\n• Semaphore: Processes synchronize access to resources",
      keyPoints: ['Process communication', 'Synchronization', 'Data sharing', 'Cooperation mechanisms']
    },
    {
      id: 'system-call',
      question: "What is a System Call?",
      icon: FaTerminal,
      answer: "A system call is a programmatic way for a program to request service from the operating system kernel. It provides interface between user programs and OS.\n\nReal Example:\n\n• open(): Open a file\n• read(): Read from file\n• write(): Write to file\n• fork(): Create new process\n• exec(): Execute new program\n• exit(): Terminate process",
      keyPoints: ['OS service request', 'Kernel interface', 'Privileged operations', 'System services']
    },
    {
      id: 'kernel',
      question: "What is Kernel?",
      icon: FaServer,
      answer: "The kernel is the core part of the operating system that manages system resources and provides low-level services to user programs.\n\nReal Example:\n\n• Manages CPU scheduling, memory allocation, device drivers\n• Runs in privileged mode, can execute any instruction\n• User programs run in user mode, limited privileges\n• System calls transition from user mode to kernel mode",
      keyPoints: ['Core component', 'Resource management', 'Privileged execution', 'Low-level services']
    },
    {
      id: 'kernel-types',
      question: "What are different types of Kernels?",
      icon: FaCogs,
      answer: "Monolithic Kernel: All OS services in kernel space (Linux)\nMicrokernel: Minimal services in kernel, others in user space (Mach)\nHybrid Kernel: Combination approach (Windows NT)\nExokernel: Minimal hardware abstraction (experimental)\n\nReal Example:\n\n• Linux kernel: Large, efficient, all services in kernel\n• macOS kernel: Hybrid with microkernel design\n• Windows kernel: Hybrid with good performance and stability",
      keyPoints: ['Monolithic kernel', 'Microkernel', 'Hybrid kernel', 'Design approaches']
    },
    {
      id: 'device-driver',
      question: "What is a Device Driver?",
      icon: FaRocket,
      answer: "A device driver is a software component that allows the operating system to communicate with hardware devices.\n\nReal Example:\n\n• Graphics card driver: Allows OS to display on screen\n• Printer driver: Translates print commands to printer language\n• Network driver: Handles network card communication\n• Without driver, OS can't use the hardware",
      keyPoints: ['Hardware interface', 'OS communication', 'Device control', 'Hardware abstraction']
    },
    {
      id: 'virtual-machine',
      question: "What is Virtual Machine?",
      icon: FaServer,
      answer: "A virtual machine is an emulation of a computer system that runs on physical hardware through software. It provides the functionality of a physical computer.\n\nReal Example:\n\n• VirtualBox: Run Windows on Mac hardware\n• VMware: Run multiple servers on one physical machine\n• Cloud computing: AWS EC2 instances are virtual machines\n• Each VM thinks it has its own CPU, memory, disk",
      keyPoints: ['System emulation', 'Hardware virtualization', 'Isolated execution', 'Resource abstraction']
    },
    {
      id: 'shell',
      question: "What is a Shell?",
      icon: FaTerminal,
      answer: "A shell is a user interface for accessing operating system services. It can be command-line interface or graphical user interface.\n\nReal Example:\n\n• Bash shell in Linux: Command-line interface\n• PowerShell in Windows: Command-line with scripting\n• GUI shell: Windows Explorer, macOS Finder\n• Shell interprets commands and executes programs",
      keyPoints: ['User interface', 'Command interpretation', 'OS access', 'Program execution']
    }
  ];

  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / content.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F14] to-[#0F172A] text-white flex">
      <Navbar />
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-black/20 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl z-10 overflow-y-auto">
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
            <h3 className="text-sm font-semibold text-gray-300 mb-2">Operating Systems Progress</h3>
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
                  onClick={() => document.getElementById(`topic-${item.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-cyan-500/10 hover:border hover:border-cyan-500/30 ${
                    isCompleted ? 'bg-green-500/10 border border-green-500/30' : 'bg-gray-900/30'
                  }`}
                >
                  <Icon className={`text-lg ${isCompleted ? 'text-green-400' : 'text-cyan-400'}`} />
                  <span className={`text-sm font-medium text-left ${isCompleted ? 'text-green-300' : 'text-gray-300'}`}>
                    {item.question.split('?')[0]}
                  </span>
                  {isCompleted && <div className="w-2 h-2 bg-green-400 rounded-full ml-auto"></div>}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-80 p-8 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Operating Systems Interview Questions
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Master process management, memory allocation, scheduling algorithms, and system synchronization essential for technical interviews.
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
                              .replace(/\b(Process|Thread|Scheduling|Context Switching|Memory Management|Virtual Memory|Paging|Segmentation|Deadlock|Semaphore|Mutex|Critical Section|Race Condition|Starvation|File System|Buffering|Spooling|IPC|System Call|Kernel|Device Driver|Virtual Machine|Shell|FCFS|SJF|Round Robin)\b/g, '<span class="bg-blue-800 text-blue-100 px-2 py-1 rounded font-semibold">$1</span>')
                              .replace(/\b(\d+(?:\.\d+)?%|\d+ milliseconds?|\d+ seconds?|\d+ minutes?|\d+ hours?|\d+ (GB|MB|KB))\b/g, '<span class="bg-green-800 text-green-100 px-2 py-1 rounded font-semibold">$1</span>')
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