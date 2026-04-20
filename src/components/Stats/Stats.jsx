import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Stats.module.css'

const stats = [
  { number: '5K+', label: 'Mobil dicuci', sublabel: 'dan terus nambah' },
  { number: '4.9', label: 'Rating bintang', sublabel: 'dari 1,200+ review' },
  { number: '3yr', label: 'Pengalaman', sublabel: 'di industri ini' },
  { number: '100%', label: 'Kepuasan', sublabel: 'atau uang kembali' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const childVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div 
      className={styles.stats} 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {stats.map((s) => (
        <motion.div key={s.label} className={styles.stat} variants={childVariants}>
          <div className={styles.statNumber}>{s.number}</div>
          <div className={styles.statLabel}>{s.label}</div>
          <div className={styles.statSub}>{s.sublabel}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Stats
