import { motion } from 'framer-motion'
import styles from './Preloader.module.css'

const Preloader = ({ onComplete }) => {
  return (
    <motion.div 
      className={styles.preloader}
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
    >
      <div className={styles.inner}>
        <motion.div 
          className={styles.waterFill}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.h1 
          className={styles.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          GLOSSGO
        </motion.h1>
         <motion.div
            className={styles.sub}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
         >
           Gettin' soapy...
         </motion.div>
      </div>
    </motion.div>
  )
}

export default Preloader
