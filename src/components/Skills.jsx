import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '🏗️', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Firebase', icon: '🔥', color: 'from-orange-400 to-yellow-500' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-500 to-gray-700' },
    { name: 'Figma', icon: '🎭', color: 'from-purple-500 to-pink-500' },
    { name: 'Canva', icon: '🖼️', color: 'from-blue-600 to-purple-600' },
    { name: 'AI Tools', icon: '🤖', color: 'from-purple-500 to-blue-500' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-600 to-cyan-600' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-poppins font-bold mb-16 text-center">
              Skills & <span className="gradient-text">Tools</span>
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
              variants={containerVariants}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`glass p-6 rounded-xl text-center cursor-pointer group transition-all duration-300 hover:glow-purple`}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-4xl md:text-5xl mb-3 group-hover:scale-125 transition-transform"
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-sm md:text-base font-inter font-600 text-gray-200 group-hover:text-accent-purple transition-colors">
                    {skill.name}
                  </h3>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className={`h-1 bg-gradient-to-r ${skill.color} rounded-full mt-3`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Skills
