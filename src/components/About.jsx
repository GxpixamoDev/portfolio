import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-poppins font-bold mb-8">
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Text content */}
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed font-inter">
                  I'm a passionate developer and creative builder focused on crafting modern, beautiful digital experiences. With a strong foundation in web development and a keen eye for design, I combine technical expertise with creative thinking.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed font-inter">
                  My passion lies in building apps and websites that not only work flawlessly but look stunning too. I'm deeply interested in UI/UX design and constantly exploring new technologies and tools to improve my craft.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 font-inter">Building modern web applications with React and cutting-edge tools</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 font-inter">Creating beautiful UIs with modern design principles</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 font-inter">Leveraging AI tools to boost productivity and creativity</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 font-inter">Always learning and exploring new technologies</p>
                  </div>
                </div>
              </div>

              {/* Stats or visual element */}
              <motion.div
                className="glass p-8 rounded-2xl glow-purple"
                whileHover={{ y: -10 }}
              >
                <div className="space-y-6">
                  <div className="text-center">
                    <motion.p
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-5xl font-bold gradient-text mb-2"
                    >
                      50+
                    </motion.p>
                    <p className="text-gray-300 font-inter">Projects Created</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent-blue mb-2">100%</p>
                    <p className="text-gray-300 font-inter">Dedication to Quality</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent-purple mb-2">∞</p>
                    <p className="text-gray-300 font-inter">Always Learning</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About
