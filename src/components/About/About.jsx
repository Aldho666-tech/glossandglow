import { motion } from 'framer-motion'
import styles from './About.module.css'

const WasherPerson = () => (  <div className={styles.washerWrapper}>
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className={styles.washerSVG}>
      <defs>
        <linearGradient id="sprayGradAboutPerson" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(100,180,255,0)" />
        </linearGradient>
      </defs>
      
      {/* Dynamic Water Spray */}
      <motion.path 
        d="M 65 75 L 10 -40 Q 65 -60 120 -40 Z" 
        fill="url(#sprayGradAboutPerson)"
        initial={{ opacity: 0.4, scaleY: 0.9, rotate: -5 }}
        animate={{ opacity: 0.8, scaleY: 1.1, rotate: 5 }}
        transition={{ duration: 0.15, repeat: Infinity, repeatType: "mirror" }}
        style={{ originX: "65px", originY: "75px" }}
      />
      {/* Bubbles */}
      <motion.circle cx="40" cy="0" r="5" fill="#fff" initial={{ y: 75, opacity: 1 }} animate={{ y: -50, opacity: 0, x: -20 }} transition={{ duration: 0.5, repeat: Infinity }} />
      <motion.circle cx="80" cy="-10" r="7" fill="#fff" initial={{ y: 80, opacity: 1 }} animate={{ y: -60, opacity: 0, x: 20 }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }} />
      <motion.circle cx="100" cy="5" r="4" fill="#fff" initial={{ y: 75, opacity: 1 }} animate={{ y: -40, opacity: 0, x: 30 }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }} />

      {/* Hose */}
      <path d="M 65 80 Q 80 120 140 120" fill="none" stroke="#222" strokeWidth="6" strokeLinecap="round" />
      <line x1="65" y1="75" x2="65" y2="85" stroke="#ccc" strokeWidth="8" strokeLinecap="round" />

      {/* Body */}
      <rect x="45" y="100" width="40" height="25" rx="10" fill="#1346c0" />
      <circle cx="65" cy="112" r="16" fill="#0d35a0" />
      
      {/* Arms */}
      <path d="M 45 110 L 60 85" stroke="#1346c0" strokeWidth="8" strokeLinecap="round" />
      <path d="M 85 110 L 70 85" stroke="#1346c0" strokeWidth="8" strokeLinecap="round" />
      
      {/* Head/Hat */}
      <circle cx="65" cy="112" r="12" fill="#ffcc99" />
      <path d="M 55 110 Q 65 100 75 110" fill="none" stroke="#0d0d0d" strokeWidth="4" strokeLinecap="round" />
      <circle cx="65" cy="116" r="13" fill="#0d0d0d" />
    </svg>
  </div>
)

const TopDownCar = () => (
  <svg viewBox="0 0 200 420" xmlns="http://www.w3.org/2000/svg" className={styles.carSVG}>
    <defs>
      <linearGradient id="carBodyAbout" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e0ddd5" />
        <stop offset="50%" stopColor="#f0eee8" />
        <stop offset="100%" stopColor="#d5d1c6" />
      </linearGradient>
      <linearGradient id="glassAbout" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
    </defs>
    <rect x="45" y="55" width="112" height="300" rx="40" fill="rgba(0,0,0,0.15)" filter="blur(8px)" />
    <rect x="50" y="50" width="100" height="300" rx="45" fill="url(#carBodyAbout)" />
    <path d="M60 55 Q100 45 140 55 L135 70 Q100 65 65 70 Z" fill="#d5d1c6" />
    <path d="M55 140 Q100 120 145 140 L135 180 Q100 170 65 180 Z" fill="url(#glassAbout)" />
    <path d="M65 145 Q100 130 135 145 L130 155 Q100 145 70 155 Z" fill="rgba(255,255,255,0.15)" />
    <path d="M60 270 Q100 285 140 270 L130 250 Q100 258 70 250 Z" fill="url(#glassAbout)" />
    <rect x="70" y="195" width="60" height="40" rx="10" fill="url(#glassAbout)" />
    <rect x="42" y="150" width="10" height="22" rx="4" fill="#d5d1c6" />
    <rect x="148" y="150" width="10" height="22" rx="4" fill="#d5d1c6" />
    <rect x="60" y="55" width="22" height="14" rx="6" fill="#fffbe6" />
    <rect x="118" y="55" width="22" height="14" rx="6" fill="#fffbe6" />
    <circle cx="68" cy="62" r="4" fill="#fff" filter="blur(2px)" />
    <circle cx="132" cy="62" r="4" fill="#fff" filter="blur(2px)" />
    <path d="M58 335 Q65 348 72 345 L70 338 Z" fill="#ff4d4d" />
    <path d="M142 335 Q135 348 128 345 L130 338 Z" fill="#ff4d4d" />
    <line x1="58" y1="180" x2="58" y2="250" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
    <line x1="142" y1="180" x2="142" y2="250" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
  </svg>
)

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <motion.div 
          className={styles.eyebrowContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sparkle}>⚡</span>
          <span className={styles.eyebrow}>WELCOME TO GLOSS GO & WASH (WE GO)</span>
        </motion.div>

        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Premium Wash <br/>
          <em>& Detailing.</em>
        </motion.h2>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.highlight}>Gloss Go & Wash</span> adalah layanan cuci kendaraan panggilan ke rumah dengan konsep: <strong>Praktis, Hemat waktu, Hasil bersih dan Aman untuk kendaraan,</strong> harga tetap terjangkau.
        </motion.p>
        
        <motion.div
           className={styles.sceneContainer}
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.sceneWrapper}>
            <WasherPerson />
            <TopDownCar />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
