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
        <div className={styles.contentWrap}>
          <motion.div
            className={styles.logoWrap}
            initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              y: [0, -15, 0] // Floating effect
            }}
            transition={{ 
              layout: { duration: 0.3 },
              opacity: { duration: 0.5 },
              scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.3 },
              rotate: { type: "spring", stiffness: 260, damping: 20, delay: 0.3 },
              y: { duration: 3, ease: "easeInOut", repeat: Infinity } // Continuous float
            }}
          >
            <img src="/logo.png" alt="GlossGo" className={styles.logoImg} />
          </motion.div>
          <motion.div
              className={styles.sub}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
          >
            Gettin' soapy...
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Preloader
