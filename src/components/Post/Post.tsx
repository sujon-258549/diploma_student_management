
"use client"
import { motion } from "framer-motion";
import { BookOpen, Code, Palette, ChevronRight, ArrowRight } from "lucide-react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const PostCard = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="bg-cyan-50 dark:bg-cyan-900/20 py-12 px-4 sm:px-6 lg:px-8 rounded-xl border border-cyan-100 dark:border-cyan-800/50 shadow-sm"
    >
      {/* Animated Section Header */}
      <motion.div variants={item} className="text-center mb-10">
        <h1 className="text-3xl font-bold text-cyan-800 dark:text-cyan-100 mb-2 relative inline-block">
          Post Section
          <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400/50 dark:bg-cyan-500/30 transform translate-y-1"></span>
        </h1>
        <p className="text-cyan-600/80 dark:text-cyan-300/80 max-w-2xl mx-auto">
          Discover our latest articles and tutorials
        </p>
      </motion.div>

      {/* Animated Posts Grid */}
      <motion.div 
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Post Card 1 */}
        <motion.div 
          variants={item}
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-cyan-100 dark:border-cyan-800/50"
        >
          <div className="h-40 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <BookOpen className="h-12 w-12 text-white" />
            </motion.div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200"
              >
                Tutorial
              </motion.span>
              <span className="text-sm text-cyan-600 dark:text-cyan-400">5 min read</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-cyan-600 transition-colors">
              React Hooks Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              Master useState and useEffect in functional components...
            </p>
            <motion.button 
              whileHover={{ x: 3 }}
              className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
            >
              Read more <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Post Card 2 */}
        <motion.div 
          variants={item}
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-cyan-100 dark:border-cyan-800/50"
        >
          <div className="h-40 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Code className="h-12 w-12 text-white" />
            </motion.div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200"
              >
                Guide
              </motion.span>
              <span className="text-sm text-cyan-600 dark:text-cyan-400">8 min read</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-cyan-600 transition-colors">
              TypeScript Patterns
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              Essential techniques for better TypeScript code...
            </p>
            <motion.button 
              whileHover={{ x: 3 }}
              className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
            >
              Read more <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Post Card 3 */}
        <motion.div 
          variants={item}
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-cyan-100 dark:border-cyan-800/50"
        >
          <div className="h-40 bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Palette className="h-12 w-12 text-white" />
            </motion.div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200"
              >
                Design
              </motion.span>
              <span className="text-sm text-cyan-600 dark:text-cyan-400">6 min read</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-cyan-600 transition-colors">
              Color Theory
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              Choosing colors effectively for web projects...
            </p>
            <motion.button 
              whileHover={{ x: 3 }}
              className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
            >
              Read more <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated View All Button */}
      <motion.div 
        variants={item}
        className="text-center mt-10"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-full shadow-sm transition-all inline-flex items-center gap-2"
        >
          View all posts
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};