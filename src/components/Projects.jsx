import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Projects = () => {
  const projects = [
    {
      title: 'BlueChat',
      description: 'A modern real-time chat application built with React and Firebase. Features include user authentication, message persistence, and a sleek UI.',
      tags: ['React', 'Firebase', 'Tailwind'],
      image: '💬',
      live: '#',
      github: '#',
    },
    {
      title: 'Minecraft Server Website',
      description: 'A beautiful landing page for a Minecraft server with server information, player stats, and community features.',
      tags: ['React', 'JavaScript', 'Design'],
      image: '⛏️',
      live: '#',
      github: '#',
    },
    {
      title: 'AI Portfolio Projects',
      description: 'A collection of innovative projects leveraging AI tools for automation, content creation, and intelligent workflows.',
      tags: ['AI', 'Automation', 'Tools'],
      image: '🤖',
      live: '#',
      github: '#',
    },
    {
      title: 'Social Media Web App',
      description: 'A comprehensive social media platform with user profiles, posts, likes, comments, and real-time notifications.',
      tags: ['React', 'Firebase', 'API'],
      image: '📱',
      live: '#',
      github: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-poppins font-bold mb-16 text-center">
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-6 md:gap-8"
              variants={containerVariants}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="glass p-6 md:p-8 rounded-2xl group overflow-hidden glow-blue hover:glow-purple transition-all duration-300"
                >
                  {/* Project image/icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-6xl md:text-7xl mb-4 inline-block"
                  >
                    {project.image}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-3 text-white group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed font-inter text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass-sm px-3 py-1 rounded-full text-xs md:text-sm text-accent-purple font-inter font-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-700">
                    <a
                      href={project.live}
                      className="flex-1 btn-primary text-center text-xs md:text-sm"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 btn-secondary text-center text-xs md:text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Projects
