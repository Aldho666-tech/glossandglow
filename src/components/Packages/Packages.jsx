import { motion } from 'framer-motion'
import styles from './Packages.module.css'

const packages = [
  {
    id: 'basic',
    name: 'Basic Wash',
    desc: 'Exterior rinse, sabun, roda bersih, keringkan tangan. Buat refresh harian.',
    price: 'Rp 50K',
    unit: '/ cuci',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 3 Q20 11 20 16 A7 7 0 0 1 6 16 Q6 11 13 3Z" fill="#1346c0" opacity="0.8"/>
        <ellipse cx="10.5" cy="10" rx="2" ry="3.5" fill="rgba(255,255,255,0.5)"/>
      </svg>
    ),
    iconBg: '#dde7f9',
    hot: false,
  },
  {
    id: 'premium',
    name: 'Premium Gloss',
    desc: 'Full exterior + vacuum interior, dashboard, tire shine, dan semprotan wangi.',
    price: 'Rp 120K',
    unit: '/ sesi',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="13,2 15.5,9.5 23,9.5 17,14.5 19.5,22 13,17 6.5,22 9,14.5 3,9.5 10.5,9.5" fill="rgba(240,238,232,0.9)"/>
      </svg>
    ),
    iconBg: 'rgba(240,238,232,0.2)',
    hot: true,
    badge: 'most popular',
  },
  {
    id: 'detailing',
    name: 'Full Detailing',
    desc: 'Deep cleaning, poles cat, wax coating, kondisi kulit, treatment bau.',
    price: 'Rp 350K',
    unit: '/ sesi',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="9" stroke="#1d9e75" strokeWidth="2" fill="none"/>
        <circle cx="13" cy="13" r="5" fill="#1d9e75" opacity="0.7"/>
        <circle cx="10.5" cy="10.5" r="1.5" fill="rgba(255,255,255,0.6)"/>
      </svg>
    ),
    iconBg: '#e8f5ee',
    hot: false,
  },
  {
    id: 'nano',
    name: 'Nano Coating',
    desc: 'Perlindungan hidrofobik nano keramik — kilap berbulan-bulan, no debate.',
    price: 'Rp 800K',
    unit: '/ treatment',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="18" height="18" rx="5" fill="#d85a30" opacity="0.15"/>
        <rect x="7" y="7" width="12" height="12" rx="3" fill="#d85a30" opacity="0.35"/>
        <rect x="10" y="10" width="6" height="6" rx="2" fill="#d85a30" opacity="0.8"/>
      </svg>
    ),
    iconBg: '#f0eae8',
    hot: false,
  },
]

const Packages = () => {
  return (
    <section className={styles.wrap} id="services">
      <div className={styles.inner}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">packages</span>
          <h2 className="big-title">Pick your <em>vibe</em>,<br/>we handle the rest.</h2>
          <p className="body-text">Dari cuci kilat sampe detailing full buat yang mau mobilnya on another level.</p>
        </motion.div>

        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              className={`${styles.card} ${pkg.hot ? styles.hot : ''}`}
              id={`pkg-${pkg.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {pkg.badge && (
                <span className={styles.badge}>{pkg.badge}</span>
              )}
              <div
                className={styles.icon}
                style={{ background: pkg.iconBg }}
              >
                {pkg.icon}
              </div>
              <div className={styles.name}>{pkg.name}</div>
              <p className={styles.desc}>{pkg.desc}</p>
              <div className={styles.price}>
                {pkg.price} <span>{pkg.unit}</span>
              </div>
              <button
                className={`${styles.bookBtn} ${pkg.hot ? styles.bookBtnHot : ''}`}
                id={`book-${pkg.id}`}
              >
                Book this →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
