'use client';

import { useState } from 'react';
import { FaGraduationCap, FaChevronDown, FaChevronRight, FaCode, FaLink, FaLayerGroup, FaList, FaTree, FaProjectDiagram, FaHashtag, FaBars, FaTimes } from 'react-icons/fa';

export default function AcademicProjects() {
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

  const topics = [
    { name: 'Arrays', icon: FaCode, content: 'Arrays are fundamental data structures that store elements of the same type in contiguous memory locations. They provide O(1) access time but have fixed size limitations.' },
    { name: 'Linked Lists', icon: FaLink, content: 'Linked lists are dynamic data structures where elements are connected through pointers. They allow efficient insertions and deletions but have O(n) access time.' },
    { name: 'Stack', icon: FaLayerGroup, content: 'Stacks follow LIFO (Last In, First Out) principle. They are used for function call management, expression evaluation, and undo mechanisms.' },
    { name: 'Queue', icon: FaList, content: 'Queues follow FIFO (First In, First Out) principle. They are essential for scheduling, breadth-first search, and resource management.' },
    { name: 'Trees', icon: FaTree, content: 'Trees are hierarchical data structures with a root node and child nodes. Binary trees, BSTs, and heaps are common implementations.' },
    { name: 'Graphs', icon: FaProjectDiagram, content: 'Graphs represent relationships between entities. They consist of vertices and edges, used in social networks, maps, and dependency analysis.' },
    { name: 'HashMap', icon: FaHashtag, content: 'HashMaps provide O(1) average time complexity for insertions, deletions, and lookups using hash functions to map keys to values.' }
  ];

  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / topics.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F14] to-[#0F172A] text-white">
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
            <div className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl">
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
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">DSA Progress</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{progressPercentage}%</span>
                    <span className="text-sm text-gray-400">{completedCount}/{topics.length} completed</span>
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
                  {topics.map((topic) => {
                    const Icon = topic.icon;
                    const isCompleted = completedTopics[topic.name];
                    return (
                      <button
                        key={topic.name}
                        onClick={() => {
                          document.getElementById(`topic-${topic.name}`)?.scrollIntoView({ behavior: 'smooth' });
                          setSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-cyan-500/10 hover:border hover:border-cyan-500/30 ${
                          isCompleted ? 'bg-green-500/10 border border-green-500/30' : 'bg-gray-900/30'
                        }`}
                      >
                        <Icon className={`text-lg ${isCompleted ? 'text-green-400' : 'text-cyan-400'}`} />
                        <span className={`text-sm font-medium ${isCompleted ? 'text-green-300' : 'text-gray-300'}`}>
                          {topic.name}
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
        <div className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-black/20 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl z-10">
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
              <h3 className="text-sm font-semibold text-gray-300 mb-2">DSA Progress</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-cyan-400">{progressPercentage}%</span>
                <span className="text-sm text-gray-400">{completedCount}/{topics.length} completed</span>
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
              {topics.map((topic) => {
                const Icon = topic.icon;
                const isCompleted = completedTopics[topic.name];
                return (
                  <button
                    key={topic.name}
                    onClick={() => document.getElementById(`topic-${topic.name}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-cyan-500/10 hover:border hover:border-cyan-500/30 ${
                      isCompleted ? 'bg-green-500/10 border border-green-500/30' : 'bg-gray-900/30'
                    }`}
                  >
                    <Icon className={`text-lg ${isCompleted ? 'text-green-400' : 'text-cyan-400'}`} />
                    <span className={`text-sm font-medium ${isCompleted ? 'text-green-300' : 'text-gray-300'}`}>
                      {topic.name}
                    </span>
                    {isCompleted && <div className="w-2 h-2 bg-green-400 rounded-full ml-auto"></div>}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80 p-4 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 lg:mb-12">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Real-life Applications of Data Structures
              </h1>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                Explore how data structures power real-world applications and solve complex problems in software development.
              </p>
            </div>

            {/* Progress Card */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 mb-8 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">DSA Progress</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-cyan-400">{progressPercentage}%</span>
                <span className="text-sm text-gray-400">{completedCount}/{topics.length} completed</span>
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
              {topics.map((topic) => {
                const Icon = topic.icon;
                const isCompleted = completedTopics[topic.name];
                return (
                  <button
                    key={topic.name}
                    onClick={() => document.getElementById(`topic-${topic.name}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-cyan-500/10 hover:border hover:border-cyan-500/30 ${
                      isCompleted ? 'bg-green-500/10 border border-green-500/30' : 'bg-gray-900/30'
                    }`}
                  >
                    <Icon className={`text-lg ${isCompleted ? 'text-green-400' : 'text-cyan-400'}`} />
                    <span className={`text-sm font-medium ${isCompleted ? 'text-green-300' : 'text-gray-300'}`}>
                      {topic.name}
                    </span>
                    {isCompleted && <div className="w-2 h-2 bg-green-400 rounded-full ml-auto"></div>}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80 p-4 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 lg:mb-12">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Real-life Applications of Data Structures
              </h1>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                Explore how data structures power real-world applications and solve complex problems in software development.
              </p>
            </div>

            {/* Progress Card */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 mb-8 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">DSA Progress</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-cyan-400">{progressPercentage}%</span>
                <span className="text-sm text-gray-400">{completedCount}/{topics.length} completed</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Accordion Cards */}
            <div className="space-y-4">
              {topics.map((topic) => {
                const Icon = topic.icon;
                const isExpanded = expandedCards[topic.name];
                const isCompleted = completedTopics[topic.name];

                return (
                  <div
                    key={topic.name}
                    id={`topic-${topic.name}`}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-500/30"
                  >
                    <div
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 cursor-pointer"
                      onClick={() => toggleCard(topic.name)}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                        <div className={`p-2 sm:p-3 rounded-lg ${isCompleted ? 'bg-green-500/20' : 'bg-cyan-500/20'}`}>
                          <Icon className={`text-xl sm:text-2xl ${isCompleted ? 'text-green-400' : 'text-cyan-400'}`} />
                        </div>
                        <div>
                          <h3 className={`text-lg sm:text-xl font-semibold ${isCompleted ? 'text-green-300' : 'text-white'}`}>
                            {topic.name}
                          </h3>
                          <p className="text-gray-400 text-sm">Click to explore applications</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4">
                        {/* Toggle Switch */}
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Done</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCompleted(topic.name);
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

                        {isExpanded ? (
                          <FaChevronDown className="text-cyan-400 text-lg" />
                        ) : (
                          <FaChevronRight className="text-cyan-400 text-lg" />
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-6 pb-6 border-t border-gray-700/50">
                        <div className="pt-4">
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {topic.content}
                          </p>

                          {/* Real-world applications */}
                          <div className="bg-black/20 rounded-lg p-4 border border-gray-600/30">
                            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Real-world Applications:</h4>
                            <ul className="space-y-2 text-gray-300">
                              {topic.name === 'Arrays' && (
                                <>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Image processing and pixel manipulation in graphics software</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Database record storage and retrieval systems</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Audio processing and signal manipulation</span>
                                  </li>
                                </>
                              )}
                              {topic.name === 'Linked Lists' && (
                                <>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Memory management in operating systems</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Implementation of undo functionality in text editors</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Symbol table management in compilers</span>
                                  </li>
                                </>
                              )}
                              {topic.name === 'Stack' && (
                                <>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Function call stack in programming languages</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Expression evaluation and syntax parsing</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Browser back button functionality</span>
                                  </li>
                                </>
                              )}
                              {topic.name === 'Queue' && (
                                <>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Print job scheduling in operating systems</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Breadth-first search algorithms</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Message queues in distributed systems</span>
                                  </li>
                                </>
                              )}
                              {topic.name === 'Trees' && (
                                <>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>File system organization</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Database indexing (B-trees)</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Decision trees in machine learning</span>
                                  </li>
                                </>
                              )}
                              {topic.name === 'Graphs' && (
                                <>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Social network analysis</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>GPS and navigation systems</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Dependency resolution in package managers</span>
                                  </li>
                                </>
                              )}
                              {topic.name === 'HashMap' && (
                                <>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Database indexing and caching</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Symbol tables in compilers</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Associative arrays and dictionaries</span>
                                  </li>
                                </>
                              )}
                            </ul>
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
    </div>
  );
}