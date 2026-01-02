'use client';

import Navbar from '../../../components/Navbar';

export default function OS() {
  const content = [
    {
      question: "What is an Operating System?",
      answer: "An operating system is a software that acts as an intermediary between computer hardware and user applications. It manages computer resources and provides services to programs.\n\nReal Example:\n\n• Windows, macOS, Linux are operating systems\n• Without OS, you couldn't run applications like Chrome, Word, or games\n• OS manages memory, CPU, disk, and other hardware resources"
    },
    {
      question: "What are the main functions of an Operating System?",
      answer: "Process Management: Create, schedule, and terminate processes\nMemory Management: Allocate and deallocate memory\nFile System Management: Organize and store files\nDevice Management: Control hardware devices\nSecurity: Protect system and user data\nUser Interface: Provide interaction methods\n\nReal Example:\n\n• When you open multiple applications, OS decides which gets CPU time\n• When you save a file, OS manages where it's stored on disk\n• When you print a document, OS communicates with printer hardware"
    },
    {
      question: "What is a Process?",
      answer: "A process is a program in execution. It's an instance of a running program with its own memory space, resources, and execution state.\n\nReal Example:\n\n• When you open Chrome browser, it becomes a process\n• Each tab in Chrome might be a separate process or thread\n• Calculator app running is a process\n• Multiple instances of same program are different processes"
    },
    {
      question: "What is a Thread?",
      answer: "A thread is the smallest unit of execution within a process. Multiple threads can exist within one process and share the same memory space.\n\nReal Example:\n\n• In a video player: One thread plays video, another handles audio, another downloads next part\n• In a web browser: One thread renders page, another loads images, another handles user input\n• Threads are lighter than processes and share data easily"
    },
    {
      question: "What is the difference between Process and Thread?",
      answer: "Process: Independent execution unit with separate memory space\nThread: Lightweight execution unit within a process, shares memory\n\nReal Example:\n\n• Process: Running Chrome and Word separately - if one crashes, other continues\n• Thread: Multiple tabs in Chrome - if one tab crashes, browser might recover\n• Process switching is expensive, thread switching is fast"
    },
    {
      question: "What is Process Scheduling?",
      answer: "Process scheduling is the activity of selecting which process to run next on the CPU. The scheduler decides which process gets CPU time and for how long.\n\nReal Example:\n\n• You have multiple programs running: music player, web browser, antivirus\n• OS scheduler decides: play music for 10ms, then browser for 20ms, then antivirus for 5ms\n• This gives illusion that all programs run simultaneously"
    },
    {
      question: "What are different types of Process Schedulers?",
      answer: "Long-term Scheduler: Selects processes from job queue to ready queue\nShort-term Scheduler: Selects process from ready queue to CPU\nMedium-term Scheduler: Swaps processes between memory and disk\n\nReal Example:\n\n• Long-term: Decides which programs to start running\n• Short-term: Quickly switches between running programs\n• Medium-term: Moves rarely used programs to disk to free memory"
    },
    {
      question: "What are different Scheduling Algorithms?",
      answer: "FCFS (First Come First Served): Processes execute in arrival order\nSJF (Shortest Job First): Shortest jobs first (optimal for minimizing wait time)\nRound Robin: Each process gets fixed time slice\nPriority Scheduling: Higher priority processes first\nMultilevel Queue: Different queues for different priorities\n\nReal Example:\n\n• FCFS: People waiting in line at bank - first person serves first\n• SJF: At coffee shop, serve person who wants only coffee before person who wants full meal\n• Round Robin: Each child gets 5 minutes on playground swing"
    },
    {
      question: "What is Context Switching?",
      answer: "Context switching is the process of saving the state of a running process and loading the state of another process. It allows multiple processes to share a single CPU.\n\nReal Example:\n\n• You're writing email, then switch to watching video\n• OS saves email program's state (cursor position, unsaved text)\n• Loads video player's state (current playback position)\n• Later switches back to email with everything as you left it"
    },
    {
      question: "What is Memory Management?",
      answer: "Memory management is the process of controlling and coordinating computer memory, assigning memory to programs when needed and freeing it when no longer needed.\n\nReal Example:\n\n• When you open Photoshop, OS allocates memory for the program\n• If memory runs low, OS might move unused data to disk (virtual memory)\n• When you close Photoshop, OS frees up that memory for other programs"
    },
    {
      question: "What is Virtual Memory?",
      answer: "Virtual memory is a memory management technique that provides an idealized abstraction of the storage resources that are actually available on a given machine.\n\nReal Example:\n\n• Your computer has 8GB RAM but runs programs needing 16GB total\n• OS uses hard disk as extension of RAM\n• Frequently used data stays in fast RAM, less used data goes to slow disk\n• This allows running larger programs than physical memory allows"
    },
    {
      question: "What is Paging?",
      answer: "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. Memory is divided into fixed-size blocks called pages.\n\nReal Example:\n\n• Book pages: Chapter 1 might be on pages 1-10, but stored in different locations\n• Program's memory divided into 4KB pages\n• Page 1 might be in RAM location 1000, Page 2 at location 5000\n• OS maintains page table to track where each page is stored"
    },
    {
      question: "What is Segmentation?",
      answer: "Segmentation is a memory management technique where memory is divided into segments of different sizes. Each segment represents a logical unit like code, data, stack.\n\nReal Example:\n\n• Program divided into segments: code segment, data segment, stack segment\n• Code segment might be 100KB, data segment 50KB, stack 20KB\n• Each segment can grow independently\n• Protection: Code segment is read-only, data segment is read-write"
    },
    {
      question: "What is the difference between Paging and Segmentation?",
      answer: "Paging: Fixed-size blocks, invisible to programmer, efficient for OS\nSegmentation: Variable-size blocks, visible to programmer, logical division\n\nReal Example:\n\n• Paging: Like dividing book into fixed 100-page chapters, but chapters can be scattered\n• Segmentation: Like dividing book into logical chapters (Introduction, Chapter 1, etc.) of different lengths\n• Segmentation allows protection and sharing of logical units"
    },
    {
      question: "What is Deadlock?",
      answer: "A deadlock is a situation where two or more processes are unable to proceed because each is waiting for the other to release a resource.\n\nReal Example:\n\n• Process A holds Printer, waits for Scanner\n• Process B holds Scanner, waits for Printer\n• Neither can proceed - classic deadlock\n• Like two people each holding a door key the other needs"
    },
    {
      question: "What are the conditions for Deadlock?",
      answer: "Mutual Exclusion: Resources can't be shared\nHold and Wait: Process holds one resource while waiting for another\nNo Preemption: Resources can't be forcibly taken away\nCircular Wait: Processes wait in circular chain\n\nReal Example:\n\n• Mutual Exclusion: Only one person can use the printer\n• Hold and Wait: You have paper but need ink cartridge\n• No Preemption: Can't take ink from someone else\n• Circular Wait: A waits for B's resource, B waits for C's, C waits for A's"
    },
    {
      question: "How to prevent Deadlock?",
      answer: "Eliminate one of the four conditions:\n\n• Allow resource sharing (remove mutual exclusion)\n• Require processes to request all resources at once (no hold and wait)\n• Allow preemption of resources\n• Impose ordering on resource requests (no circular wait)\n\nReal Example:\n\n• Banker's algorithm: Check if granting request leads to safe state\n• Resource ordering: Always acquire resources in fixed order\n• Timeout: If wait too long, release all resources and retry"
    },
    {
      question: "What is a Semaphore?",
      answer: "A semaphore is a synchronization primitive used to control access to shared resources. It maintains a count that can be modified by wait() and signal() operations.\n\nReal Example:\n\n• Bathroom key: Only one person can use bathroom at a time\n• Wait(): Try to get key, if not available, wait\n• Signal(): Return key when done\n• Count represents available resources"
    },
    {
      question: "What is a Mutex?",
      answer: "A mutex (mutual exclusion) is a synchronization primitive that ensures only one thread can access a critical section at a time. It's a binary semaphore.\n\nReal Example:\n\n• Single bathroom door: Either locked or unlocked\n• Thread acquires mutex before entering critical section\n• Other threads wait until mutex is released\n• Prevents race conditions in shared data access"
    },
    {
      question: "What is a Critical Section?",
      answer: "A critical section is a segment of code that accesses shared resources and must not be executed by more than one process at a time.\n\nReal Example:\n\n• Updating bank balance: Read balance, add deposit, write back\n• If two processes do this simultaneously, might lose updates\n• Critical section ensures atomicity of the operation\n• Only one process can execute critical section at a time"
    },
    {
      question: "What is Race Condition?",
      answer: "A race condition occurs when multiple processes access shared data concurrently and the final result depends on the order of execution.\n\nReal Example:\n\n• Two people withdrawing money from joint account simultaneously\n• Both read balance = $1000\n• Person A withdraws $200, writes $800\n• Person B withdraws $300, writes $700\n• Account ends up with $700 instead of $500\n• Race condition caused incorrect result"
    },
    {
      question: "What is Starvation?",
      answer: "Starvation occurs when a process is perpetually denied access to a resource it needs, even though the resource becomes available.\n\nReal Example:\n\n• In priority scheduling, low priority processes never get CPU time\n• In reader-writer problem, writers might starve if readers keep coming\n• Process waits indefinitely while others get served\n• Different from deadlock - process is runnable but never selected"
    },
    {
      question: "What is File System?",
      answer: "A file system is a method of organizing and storing files on storage devices. It defines how files are named, stored, and retrieved.\n\nReal Example:\n\n• NTFS on Windows, ext4 on Linux\n• Defines file structure, directories, permissions\n• Manages free space, file allocation\n• Provides abstraction over physical storage blocks"
    },
    {
      question: "What is a File Descriptor?",
      answer: "A file descriptor is a unique identifier (usually a number) that the operating system assigns to an open file. Programs use it to read from or write to the file.\n\nReal Example:\n\n• When you open a file in C: fopen() returns FILE pointer\n• In Unix: open() returns integer file descriptor (3, 4, 5...)\n• File descriptor 0 = stdin, 1 = stdout, 2 = stderr\n• Used for reading, writing, seeking within file"
    },
    {
      question: "What is Buffering?",
      answer: "Buffering is a technique where data is temporarily stored in memory before being processed or transferred. It helps smooth out differences in processing speeds.\n\nReal Example:\n\n• Video streaming: Download 30 seconds ahead, play from buffer\n• Keyboard input: Characters stored in buffer until program reads them\n• Disk I/O: Read/write multiple blocks at once for efficiency\n• Prevents waiting for slow devices"
    },
    {
      question: "What is Spooling?",
      answer: "Spooling (Simultaneous Peripheral Operations On-Line) is a technique where data is temporarily stored on disk for later processing by a device.\n\nReal Example:\n\n• Print spooling: Documents sent to printer queue on disk\n• Printer processes one job while you send more jobs\n• Email spooling: Messages stored on mail server disk\n• Allows asynchronous processing of I/O operations"
    },
    {
      question: "What is Inter-Process Communication (IPC)?",
      answer: "IPC allows processes to communicate and synchronize their actions. Methods include pipes, message queues, shared memory, sockets.\n\nReal Example:\n\n• Pipe: One process output becomes another process input\n• Shared memory: Processes read/write same memory location\n• Message queue: Processes send/receive messages\n• Semaphore: Processes synchronize access to resources"
    },
    {
      question: "What is a System Call?",
      answer: "A system call is a programmatic way for a program to request service from the operating system kernel. It provides interface between user programs and OS.\n\nReal Example:\n\n• open(): Open a file\n• read(): Read from file\n• write(): Write to file\n• fork(): Create new process\n• exec(): Execute new program\n• exit(): Terminate process"
    },
    {
      question: "What is Kernel?",
      answer: "The kernel is the core part of the operating system that manages system resources and provides low-level services to user programs.\n\nReal Example:\n\n• Manages CPU scheduling, memory allocation, device drivers\n• Runs in privileged mode, can execute any instruction\n• User programs run in user mode, limited privileges\n• System calls transition from user mode to kernel mode"
    },
    {
      question: "What are different types of Kernels?",
      answer: "Monolithic Kernel: All OS services in kernel space (Linux)\nMicrokernel: Minimal services in kernel, others in user space (Mach)\nHybrid Kernel: Combination approach (Windows NT)\nExokernel: Minimal hardware abstraction (experimental)\n\nReal Example:\n\n• Linux kernel: Large, efficient, all services in kernel\n• macOS kernel: Hybrid with microkernel design\n• Windows kernel: Hybrid with good performance and stability"
    },
    {
      question: "What is a Device Driver?",
      answer: "A device driver is a software component that allows the operating system to communicate with hardware devices.\n\nReal Example:\n\n• Graphics card driver: Allows OS to display on screen\n• Printer driver: Translates print commands to printer language\n• Network driver: Handles network card communication\n• Without driver, OS can't use the hardware"
    },
    {
      question: "What is Virtual Machine?",
      answer: "A virtual machine is an emulation of a computer system that runs on physical hardware through software. It provides the functionality of a physical computer.\n\nReal Example:\n\n• VirtualBox: Run Windows on Mac hardware\n• VMware: Run multiple servers on one physical machine\n• Cloud computing: AWS EC2 instances are virtual machines\n• Each VM thinks it has its own CPU, memory, disk"
    },
    {
      question: "What is a Shell?",
      answer: "A shell is a user interface for accessing operating system services. It can be command-line interface or graphical user interface.\n\nReal Example:\n\n• Bash shell in Linux: Command-line interface\n• PowerShell in Windows: Command-line with scripting\n• GUI shell: Windows Explorer, macOS Finder\n• Shell interprets commands and executes programs"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <header className="border-gray-700 mt-16">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Operating Systems Interview Questions
          </h1>
          <p className="text-blue-100 text-lg">Comprehensive guide covering processes, memory management, scheduling, and synchronization</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-blue-200">
            <span className="bg-white/10 px-3 py-1 rounded-full">30 Questions</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Advanced Level</span>
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
                    .replace(/\b(Process|Thread|Scheduling|Context Switching|Memory Management|Virtual Memory|Paging|Segmentation|Deadlock|Semaphore|Mutex|Critical Section|Race Condition|Starvation|File System|Buffering|Spooling|IPC|System Call|Kernel|Device Driver|Virtual Machine|Shell|FCFS|SJF|Round Robin)\b/g, '<span class="bg-blue-800 text-blue-100 px-2 py-1 rounded font-semibold">$1</span>')
                    .replace(/\b(\d+(?:\.\d+)?%|\d+ milliseconds?|\d+ seconds?|\d+ minutes?|\d+ hours?|\d+ (GB|MB|KB))\b/g, '<span class="bg-green-800 text-green-100 px-2 py-1 rounded font-semibold">$1</span>')
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