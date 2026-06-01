import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-center">
              Get In <span className="gradient-text">Touch</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-center mb-12 font-inter text-lg"
            >
              Have a question or want to collaborate? I'd love to hear from you!
            </motion.p>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="glass p-8 md:p-12 rounded-2xl glow-purple space-y-6"
            >
              {/* Name Input */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm md:text-base font-inter font-600 mb-2 text-gray-200">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full glass-sm px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all font-inter"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm md:text-base font-inter font-600 mb-2 text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full glass-sm px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all font-inter"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm md:text-base font-inter font-600 mb-2 text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                  className="w-full glass-sm px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all font-inter resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary py-3 md:py-4 text-base md:text-lg font-poppins"
              >
                {submitted ? 'Message Sent! 🎉' : 'Send Message'}
              </motion.button>

              {/* Success message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 glass-sm rounded-lg border border-accent-purple text-accent-purple text-center font-inter"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.div>
              )}
            </motion.form>

            {/* Additional contact methods */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid md:grid-cols-2 gap-6 text-center"
            >
              <motion.div
                className="glass p-6 rounded-lg"
                whileHover={{ y: -5 }}
              >
                <p className="text-2xl mb-2">📧</p>
                <p className="text-gray-300 text-sm md:text-base font-inter mb-2">Email</p>
                <a href="mailto:your-email@example.com" className="text-accent-purple hover:text-white transition-colors font-inter font-600">
                  your-email@example.com
                </a>
              </motion.div>
              <motion.div
                className="glass p-6 rounded-lg"
                whileHover={{ y: -5 }}
              >
                <p className="text-2xl mb-2">💬</p>
                <p className="text-gray-300 text-sm md:text-base font-inter mb-2">Discord</p>
                <a href="#" className="text-accent-purple hover:text-white transition-colors font-inter font-600">
                  @GxpixamoDev
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
