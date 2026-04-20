import { motion } from 'framer-motion'
import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    title: 'Book online',
    desc: 'Pilih paket dan jadwal langsung dari website atau WA. Ga ribet, serius.',
    emoji: '📱',
  },
  {
    num: '02',
    title: 'Kita yang dateng',
    desc: 'Tim kita nyampe ke lokasi kamu on time, lengkap dengan semua peralatan.',
    emoji: '🚗',
  },
  {
    num: '03',
    title: 'Chill & wait',
    desc: 'Santai aja, scrolling atau ngopi. Kita beresin semua sampe beres.',
    emoji: '☕',
  },
  {
    num: '04',
    title: 'Pay & flex',
    desc: 'Bayar digital, review bintang 5, trus foto mobilmu yang kinclong buat konten.',
    emoji: '✨',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const HowItWorks = () => {
  return (
    <section className={styles.wrap} id="how-it-works">
      <div className={styles.inner}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>how it works</span>
          <h2 className={`big-title ${styles.title}`}>
            Literally <em>so easy</em>,<br/>no effort needed.
          </h2>
          <p className={`body-text ${styles.sub}`}>
            Kamu tinggal duduk santai, kita yang urus semuanya.
          </p>
        </motion.div>

        <motion.div 
          className={styles.steps}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, i) => (
            <motion.div key={step.num} className={styles.step} variants={itemVariants}>
              <div className={styles.badge}>
                <span className={styles.emoji}>{step.emoji}</span>
                {step.num}
              </div>
              <div className={styles.connector}>
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
