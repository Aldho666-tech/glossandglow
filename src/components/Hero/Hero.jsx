import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const WasherPerson = () => (
  <div className={styles.washerWrapper}>
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className={styles.washerSVG}>
      <defs>
        <linearGradient id="sprayGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(100,180,255,0)" />
        </linearGradient>
      </defs>

      {/* Dynamic Water Spray (Animated) */}
      <motion.path 
        d="M 65 75 L 10 -40 Q 65 -60 120 -40 Z" 
        fill="url(#sprayGrad)"
        initial={{ opacity: 0.4, scaleY: 0.9, rotate: -5 }}
        animate={{ opacity: 0.8, scaleY: 1.1, rotate: 5 }}
        transition={{ duration: 0.15, repeat: Infinity, repeatType: "mirror" }}
        style={{ originX: "65px", originY: "75px" }}
      />
      {/* Secondary particles */}
      <motion.circle cx="40" cy="0" r="5" fill="#fff" initial={{ y: 75, opacity: 1 }} animate={{ y: -50, opacity: 0, x: -20 }} transition={{ duration: 0.5, repeat: Infinity }} />
      <motion.circle cx="80" cy="-10" r="7" fill="#fff" initial={{ y: 80, opacity: 1 }} animate={{ y: -60, opacity: 0, x: 20 }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }} />
      <motion.circle cx="100" cy="5" r="4" fill="#fff" initial={{ y: 75, opacity: 1 }} animate={{ y: -40, opacity: 0, x: 30 }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }} />

      {/* Hose */}
      <path d="M 65 80 Q 80 120 140 120" fill="none" stroke="#222" strokeWidth="6" strokeLinecap="round" />
      <line x1="65" y1="75" x2="65" y2="85" stroke="#ccc" strokeWidth="8" strokeLinecap="round" />

      {/* Shoulders / Body */}
      <rect x="45" y="100" width="40" height="25" rx="10" fill="#1346c0" />
      <circle cx="65" cy="112" r="16" fill="#0d35a0" />
      
      {/* Arms to Hose */}
      <path d="M 45 110 L 60 85" stroke="#1346c0" strokeWidth="8" strokeLinecap="round" />
      <path d="M 85 110 L 70 85" stroke="#1346c0" strokeWidth="8" strokeLinecap="round" />
      
      {/* Head / Hat */}
      <circle cx="65" cy="112" r="12" fill="#ffcc99" />
      {/* Cap visor */}
      <path d="M 55 110 Q 65 100 75 110" fill="none" stroke="#0d0d0d" strokeWidth="4" strokeLinecap="round" />
      <circle cx="65" cy="116" r="13" fill="#0d0d0d" />
    </svg>
  </div>
)

const TopDownCar = () => (
  <svg viewBox="0 0 200 420" xmlns="http://www.w3.org/2000/svg" className={styles.carSVG}>
    <defs>
      <linearGradient id="carBody" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e0ddd5" />
        <stop offset="50%" stopColor="#f0eee8" />
        <stop offset="100%" stopColor="#d5d1c6" />
      </linearGradient>
      <linearGradient id="glass" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
    </defs>
    {/* Shadow cast on ground */}
    <rect x="45" y="55" width="112" height="300" rx="40" fill="rgba(0,0,0,0.5)" filter="blur(14px)" />
    
    {/* Body */}
    <rect x="50" y="50" width="100" height="300" rx="45" fill="url(#carBody)" />
    
    {/* Front Bumper Detail */}
    <path d="M60 55 Q100 45 140 55 L135 70 Q100 65 65 70 Z" fill="#d5d1c6" />
    
    {/* Windshield */}
    <path d="M55 140 Q100 120 145 140 L135 180 Q100 170 65 180 Z" fill="url(#glass)" />
    <path d="M65 145 Q100 130 135 145 L130 155 Q100 145 70 155 Z" fill="rgba(255,255,255,0.15)" /> {/* Glare */}

    {/* Rear Window */}
    <path d="M60 270 Q100 285 140 270 L130 250 Q100 258 70 250 Z" fill="url(#glass)" />
    
    {/* Sunroof */}
    <rect x="70" y="195" width="60" height="40" rx="10" fill="url(#glass)" />

    {/* Mirrors */}
    <rect x="42" y="150" width="10" height="22" rx="4" fill="#d5d1c6" />
    <rect x="148" y="150" width="10" height="22" rx="4" fill="#d5d1c6" />

    {/* Headlights */}
    <rect x="60" y="55" width="22" height="14" rx="6" fill="#fffbe6" />
    <rect x="118" y="55" width="22" height="14" rx="6" fill="#fffbe6" />
    <circle cx="68" cy="62" r="4" fill="#fff" filter="blur(2px)" />
    <circle cx="132" cy="62" r="4" fill="#fff" filter="blur(2px)" />

    {/* Taillights */}
    <path d="M58 335 Q65 348 72 345 L70 338 Z" fill="#ff4d4d" />
    <path d="M142 335 Q135 348 128 345 L130 338 Z" fill="#ff4d4d" />
    
    {/* Side lines */}
    <line x1="58" y1="180" x2="58" y2="250" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
    <line x1="142" y1="180" x2="142" y2="250" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />
  </svg>
)

const fadeUp = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
}

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Dynamic Water Background */}
      <div className={styles.waterBg}>
        <div className={styles.waterNoise} />
        <motion.div 
          className={styles.ripple1} 
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
          className={styles.ripple2} 
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 4, ease: "easeOut", delay: 1, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      <motion.div 
        className={styles.graphicContainer}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.textLayer} variants={fadeUp}>
          <h2 className={styles.textLets}>LET'S</h2>
          <h1 className={styles.textWashn}>WASH N'</h1>
          <h1 className={styles.textRoll}>ROLL</h1>
        </motion.div>

        <motion.div 
          className={styles.carLayer}
          initial={{ y: 200, opacity: 0, rotate: -5 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <div className={styles.carWake}>
            {/* Wake SVG Behind Car */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0 Q180 50 200 150 Q100 100 0 150 Q20 50 100 0 Z" fill="rgba(255,255,255,0.15)" filter="blur(10px)"/>
              <path d="M100 20 Q160 60 180 140 Q100 110 20 140 Q40 60 100 20 Z" fill="rgba(255,255,255,0.25)" filter="blur(6px)"/>
            </svg>
          </div>
          <WasherPerson />
          <TopDownCar />
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.bottomContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className={styles.actionsBox}>
          <button className="btn-cream" id="hero-book-btn">Book a wash ↗</button>
          <button className="btn-ghost" id="hero-packages-btn">See Packages</button>
        </div>
      </motion.div>

      {/* Bottom Wave/Swoosh matching reference */}
      <div className={styles.bottomWaveContainer}>
        <svg className={styles.bottomWave} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="var(--cream)" fillOpacity="1" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
