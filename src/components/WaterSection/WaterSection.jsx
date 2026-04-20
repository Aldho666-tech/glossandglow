import { motion } from 'framer-motion'
import styles from './WaterSection.module.css'

const pills = [
  'Eco-friendly formula 🌱',
  'Waterless option 💧',
  'pH balanced',
  'No scratch guaranteed 🛡️',
  'Certified detailers ✅',
]

const BigDrop = () => (
  <svg width="140" height="190" viewBox="0 0 140 190"
    style={{ animation: 'float 3.5s ease-in-out infinite' }}>
    <defs>
      <radialGradient id="dropGrad" cx="38%" cy="32%" r="60%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.55)"/>
        <stop offset="40%" stopColor="rgba(120,180,255,0.6)"/>
        <stop offset="100%" stopColor="rgba(30,100,220,0.85)"/>
      </radialGradient>
    </defs>
    <path d="M70 5 Q135 80 135 120 A65 65 0 0 1 5 120 Q5 80 70 5Z" fill="url(#dropGrad)"/>
    <ellipse cx="48" cy="65" rx="14" ry="22" fill="rgba(255,255,255,0.35)" transform="rotate(-25,48,65)"/>
    <ellipse cx="62" cy="48" rx="5" ry="8" fill="rgba(255,255,255,0.5)" transform="rotate(-25,62,48)"/>
    <circle cx="90" cy="130" r="8" fill="rgba(255,255,255,0.12)"/>
  </svg>
)

const smallDrops = [
  { cls: 'da', x: '30px', top: '20px', w: 36, h: 50, vb: '0 0 36 50', d: 'M18 0 Q36 22 36 32 A18 18 0 0 1 0 32 Q0 22 18 0Z', fill: 'rgba(140,200,255,0.7)', rx: 12, ry: 18, exrx: 4, exry: 7, glare: 'rgba(255,255,255,0.4)', delay: '0s' },
  { cls: 'db', x: '50%', top: '0', w: 24, h: 34, vb: '0 0 24 34', d: 'M12 0 Q24 15 24 22 A12 12 0 0 1 0 22 Q0 15 12 0Z', fill: 'rgba(100,170,255,0.75)', rx: 8, ry: 12, exrx: 2.5, exry: 5, glare: 'rgba(255,255,255,0.45)', delay: '0.6s' },
  { cls: 'dc', right: '30px', top: '40px', w: 18, h: 25, vb: '0 0 18 25', d: 'M9 0 Q18 11 18 16 A9 9 0 0 1 0 16 Q0 11 9 0Z', fill: 'rgba(120,190,255,0.65)', rx: 6, ry: 9, exrx: 2, exry: 3.5, glare: 'rgba(255,255,255,0.4)', delay: '1.2s' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const WaterSection = () => {
  return (
    <section className={styles.wrap}>
      <motion.div 
        className={styles.visual}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BigDrop />
        {smallDrops.map((d, i) => (
          <div
            key={i}
            className={styles.miniDrop}
            style={{
              left: d.x,
              top: d.top,
              right: d.right,
              animationDelay: d.delay,
            }}
          >
            <svg width={d.w} height={d.h} viewBox={d.vb}>
              <path d={d.d} fill={d.fill}/>
              <ellipse cx={d.rx} cy={d.ry} rx={d.exrx} ry={d.exry} fill={d.glare}/>
            </svg>
          </div>
        ))}
      </motion.div>

      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span variants={fadeUp} className={styles.eyebrow}>why glossgo</motion.span>
        <motion.h2 variants={fadeUp} className={styles.title}>
          Formula yang <em>bikin</em><br/>speechless.
        </motion.h2>
        <motion.p variants={fadeUp} className={styles.body}>
          Produk eco-friendly, teknik profesional, dan tim yang genuinely care soal mobilmu.
          Bukan cuma cuci biasa — ini pengalaman.
        </motion.p>
        <motion.div variants={fadeUp} className={styles.pills}>
          {pills.map((pill) => (
            <motion.span key={pill} className={styles.pill} whileHover={{ scale: 1.05 }}>{pill}</motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WaterSection
