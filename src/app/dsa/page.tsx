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
    {
      name: 'Arrays',
      icon: FaCode,
      content: 'Arrays are fundamental data structures that store elements of the same type in contiguous memory locations.',
      questions: [
        { title: 'Find the maximum and minimum element in an array', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
        { title: 'Reverse an array in place', url: 'https://leetcode.com/problems/reverse-array/' },
        { title: 'Find the kth largest element in an array', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
        { title: 'Move all zeros to the end of the array', url: 'https://leetcode.com/problems/move-zeroes/' },
        { title: 'Find the duplicate number in an array', url: 'https://leetcode.com/problems/find-the-duplicate-number/' },
        { title: 'Rotate an array by k positions', url: 'https://leetcode.com/problems/rotate-array/' },
        { title: 'Find the intersection of two arrays', url: 'https://leetcode.com/problems/intersection-of-two-arrays/' },
        { title: 'Merge two sorted arrays', url: 'https://leetcode.com/problems/merge-sorted-array/' },
        { title: 'Find the majority element (appears more than n/2 times)', url: 'https://leetcode.com/problems/majority-element/' },
        { title: 'Remove duplicates from sorted array', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' }
      ]
    },
    {
      name: 'Linked Lists',
      icon: FaLink,
      content: 'Linked lists are dynamic data structures where elements are connected through pointers.',
      questions: [
        { title: 'Reverse a linked list', url: 'https://leetcode.com/problems/reverse-linked-list/' },
        { title: 'Detect a cycle in a linked list', url: 'https://leetcode.com/problems/linked-list-cycle/' },
        { title: 'Find the middle of a linked list', url: 'https://leetcode.com/problems/middle-of-the-linked-list/' },
        { title: 'Merge two sorted linked lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
        { title: 'Remove nth node from end of list', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
        { title: 'Add two numbers represented by linked lists', url: 'https://leetcode.com/problems/add-two-numbers/' },
        { title: 'Find intersection point of two linked lists', url: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
        { title: 'Remove duplicates from sorted linked list', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/' },
        { title: 'Palindrome linked list', url: 'https://leetcode.com/problems/palindrome-linked-list/' },
        { title: 'Reorder list', url: 'https://leetcode.com/problems/reorder-list/' }
      ]
    },
    {
      name: 'Stack',
      icon: FaLayerGroup,
      content: 'Stacks follow LIFO (Last In, First Out) principle.',
      questions: [
        { title: 'Implement stack using arrays', url: 'https://leetcode.com/problems/implement-stack-using-queues/' },
        { title: 'Valid parentheses', url: 'https://leetcode.com/problems/valid-parentheses/' },
        { title: 'Next greater element', url: 'https://leetcode.com/problems/next-greater-element-i/' },
        { title: 'Largest rectangle in histogram', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
        { title: 'Min stack (get minimum element in O(1))', url: 'https://leetcode.com/problems/min-stack/' },
        { title: 'Evaluate reverse polish notation', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
        { title: 'Daily temperatures', url: 'https://leetcode.com/problems/daily-temperatures/' },
        { title: 'Trapping rain water', url: 'https://leetcode.com/problems/trapping-rain-water/' },
        { title: 'Remove k digits', url: 'https://leetcode.com/problems/remove-k-digits/' },
        { title: 'Simplify path', url: 'https://leetcode.com/problems/simplify-path/' }
      ]
    },
    {
      name: 'Queue',
      icon: FaList,
      content: 'Queues follow FIFO (First In, First Out) principle.',
      questions: [
        { title: 'Implement queue using stacks', url: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
        { title: 'Sliding window maximum', url: 'https://leetcode.com/problems/sliding-window-maximum/' },
        { title: 'First unique character in string', url: 'https://leetcode.com/problems/first-unique-character-in-a-string/' },
        { title: 'Rotting oranges', url: 'https://leetcode.com/problems/rotting-oranges/' },
        { title: 'Binary tree level order traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
        { title: 'Implement stack using queues', url: 'https://leetcode.com/problems/implement-stack-using-queues/' },
        { title: 'Moving average from data stream', url: 'https://leetcode.com/problems/moving-average-from-data-stream/' },
        { title: 'Number of islands', url: 'https://leetcode.com/problems/number-of-islands/' },
        { title: 'Open the lock', url: 'https://leetcode.com/problems/open-the-lock/' },
        { title: 'Perfect squares', url: 'https://leetcode.com/problems/perfect-squares/' }
      ]
    },
    {
      name: 'Trees',
      icon: FaTree,
      content: 'Trees are hierarchical data structures with a root node and child nodes.',
      questions: [
        { title: 'Maximum depth of binary tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
        { title: 'Validate binary search tree', url: 'https://leetcode.com/problems/validate-binary-search-tree/' },
        { title: 'Symmetric tree', url: 'https://leetcode.com/problems/symmetric-tree/' },
        { title: 'Binary tree level order traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
        { title: 'Convert sorted array to binary search tree', url: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/' },
        { title: 'Path sum', url: 'https://leetcode.com/problems/path-sum/' },
        { title: 'Lowest common ancestor', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
        { title: 'Binary tree maximum path sum', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' },
        { title: 'Serialize and deserialize binary tree', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
        { title: 'Kth smallest element in BST', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/' }
      ]
    },
    {
      name: 'Graphs',
      icon: FaProjectDiagram,
      content: 'Graphs represent relationships between entities.',
      questions: [
        { title: 'Number of islands', url: 'https://leetcode.com/problems/number-of-islands/' },
        { title: 'Clone graph', url: 'https://leetcode.com/problems/clone-graph/' },
        { title: 'Course schedule (detect cycle in directed graph)', url: 'https://leetcode.com/problems/course-schedule/' },
        { title: 'Pacific Atlantic water flow', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/' },
        { title: 'Word ladder', url: 'https://leetcode.com/problems/word-ladder/' },
        { title: 'Network delay time (Dijkstra\'s algorithm)', url: 'https://leetcode.com/problems/network-delay-time/' },
        { title: 'Cheapest flights within k stops', url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/' },
        { title: 'Number of connected components', url: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/' },
        { title: 'Graph valid tree', url: 'https://leetcode.com/problems/graph-valid-tree/' },
        { title: 'Alien dictionary', url: 'https://leetcode.com/problems/alien-dictionary/' }
      ]
    },
    {
      name: 'HashMap',
      icon: FaHashtag,
      content: 'HashMaps provide O(1) average time complexity for insertions, deletions, and lookups.',
      questions: [
        { title: 'Two sum', url: 'https://leetcode.com/problems/two-sum/' },
        { title: 'Group anagrams', url: 'https://leetcode.com/problems/group-anagrams/' },
        { title: 'Longest substring without repeating characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
        { title: 'Top k frequent elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/' },
        { title: 'Valid anagram', url: 'https://leetcode.com/problems/valid-anagram/' },
        { title: 'Intersection of two arrays II', url: 'https://leetcode.com/problems/intersection-of-two-arrays-ii/' },
        { title: 'Happy number', url: 'https://leetcode.com/problems/happy-number/' },
        { title: 'Isomorphic strings', url: 'https://leetcode.com/problems/isomorphic-strings/' },
        { title: 'Minimum window substring', url: 'https://leetcode.com/problems/minimum-window-substring/' },
        { title: 'Subarray sum equals k', url: 'https://leetcode.com/problems/subarray-sum-equals-k/' }
      ]
    }
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
                Top DSA Interview Questions
              </h1>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                Master the most frequently asked data structures and algorithms questions in technical interviews.
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
                          <p className="text-gray-400 text-sm">Click to view top 10 questions</p>
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

                          {/* Top 10 Questions */}
                          <div className="bg-black/20 rounded-lg p-4 border border-gray-600/30">
                            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Top 10 Interview Questions:</h4>
                            <ol className="space-y-2 text-gray-300">
                              {topic.questions.map((question, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-cyan-400 mt-1 font-semibold">{index + 1}.</span>
                                  <a
                                    href={question.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 underline hover:no-underline"
                                  >
                                    {question.title}
                                  </a>
                                </li>
                              ))}
                            </ol>
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