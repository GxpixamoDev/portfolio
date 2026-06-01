import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          rotate: [0, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 left-10 w-80 h-80 bg-accent-purple opacity-10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, -50, 0],
          rotate: [360, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-accent-blue opacity-10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Main heading */}
        <motion.h1 variants={itemVariants} className="font-poppins font-bold text-5xl md:text-7xl mb-6">
          <span className="block mb-2">Hi, I'm</span>
          <span className="gradient-text text-6xl md:text-8xl glow-text">Gxpixamo</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-accent-purple mb-4 font-inter font-500"
        >
          Developer • AI App Builder • Website Creator
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-inter"
        >
          I create modern apps, websites, and creative projects using AI-powered tools and modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="btn-primary cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn-secondary cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={itemVariants}
          className="mt-16"
        >
          <div className="text-accent-blue text-sm font-inter">
            <p>Scroll to explore</p>
            <div className="mt-2 flex justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
