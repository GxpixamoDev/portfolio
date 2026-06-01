import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-gray-800">
      {/* Glow line effect */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-accent-purple to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 font-inter text-sm md:text-base">
            © {currentYear} <span className="text-accent-purple font-semibold">Gxpixamo</span>. All rights reserved.
          </p>
          <p className="text-gray-500 font-inter text-xs md:text-sm mt-2">
            Crafted with <span className="text-accent-purple">❤️</span> using React & Tailwind CSS
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mt-6 text-2xl"
        >
          ✨
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
