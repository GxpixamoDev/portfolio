import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Social = () => {
  const socials = [
    {
      name: 'GitHub',
      icon: '🐙',
      link: '#',
      color: 'hover:text-gray-300',
      glow: 'hover:glow-blue',
    },
    {
      name: 'YouTube',
      icon: '▶️',
      link: '#',
      color: 'hover:text-red-500',
      glow: 'hover:glow-purple',
    },
    {
      name: 'Discord',
      icon: '💬',
      link: '#',
      color: 'hover:text-blue-500',
      glow: 'hover:glow-blue',
    },
    {
      name: 'TikTok',
      icon: '🎵',
      link: '#',
      color: 'hover:text-black dark:hover:text-white',
      glow: 'hover:glow-purple',
    },
    {
      name: 'Instagram',
      icon: '📷',
      link: '#',
      color: 'hover:text-pink-500',
      glow: 'hover:glow-purple',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="social" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-poppins font-bold mb-16">
              Connect <span className="gradient-text">With Me</span>
            </motion.h2>

            <motion.div
              className="flex flex-wrap justify-center gap-6 md:gap-8"
              variants={containerVariants}
            >
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`glass p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-300 group ${social.glow}`}
                  title={social.name}
                >
                  <div className="text-5xl md:text-6xl mb-3 group-hover:scale-125 transition-transform inline-block">
                    {social.icon}
                  </div>
                  <p className={`text-sm md:text-base font-inter font-600 text-accent-purple ${social.color} transition-colors`}>
                    {social.name}
                  </p>
                </motion.a>
              ))}
            </motion.div>

            {/* Alternative contact info */}
            <motion.div
              variants={itemVariants}
              className="mt-12 md:mt-16 space-y-4"
            >
              <p className="text-gray-300 font-inter text-base md:text-lg">
                Or reach out directly:
              </p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8"
              >
                <a
                  href="mailto:your-email@example.com"
                  className="glass px-6 py-3 rounded-lg text-accent-purple hover:text-white transition-colors font-inter font-600"
                >
                  📧 Email
                </a>
                <a
                  href="#"
                  className="glass px-6 py-3 rounded-lg text-accent-purple hover:text-white transition-colors font-inter font-600"
                >
                  💬 Discord: @GxpixamoDev
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Social
