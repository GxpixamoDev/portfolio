import { useEffect, useRef } from 'react'

const CursorGlow = () => {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const handleMouseMove = (e) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed w-64 h-64 pointer-events-none z-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        display: 'none',
      }}
      onMouseEnter={(e) => (e.target.style.display = 'block')}
      onMouseLeave={(e) => (e.target.style.display = 'none')}
    />
  )
}

export default CursorGlow
