import { motion } from 'framer-motion'

const Button = ({ children, variant = 'solid', className = '', ...props }) => {
  const base =
    'inline-flex items-center justify-center rounded-full border font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'
  const variants = {
    solid:
      'bg-accent text-primary border-transparent hover:bg-accent/90 hover:text-white',
    outline:
      'border-primary bg-white text-primary hover:bg-primary hover:text-white',
  }

  return (
    <motion.button 
      className={`${base} ${variants[variant]} ${className}`} 
      {...props}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}

export default Button
