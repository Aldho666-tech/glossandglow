import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from './Packages.module.css'

const packages = [
  {
    id: 'interior-wash',
    name: 'Wash Interior',
    desc: 'Deep vacuum, dashboard cleaning, aroma therapy, & kaca bening. Segerin daleman mobilmu.',
    price: 'Rp 60K',
    unit: '/ sesi',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="8" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12h10M10 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    iconBg: '#dde7f9',
    hot: false,
  },
  {
    id: 'exterior-wash',
    name: 'Wash Exterior',
    desc: 'Sabun pH balanced, cuci kolong, semir ban, & drying manual. Kinclong luar dalam sekejap.',
    price: 'Rp 50K',
    unit: '/ sesi',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 3 Q20 11 20 16 A7 7 0 0 1 6 16 Q6 11 13 3Z" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
    iconBg: '#e8f5ee',
    hot: false,
  },
  {
    id: 'full-wash',
    name: 'Full Wash',
    desc: 'Paket komplit Interior + Exterior. Bersih total, wangi, siap pamer di jalan.',
    price: 'Rp 100K',
    unit: '/ sesi',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M13 8v10M8 13h10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    iconBg: 'rgba(255, 255, 255, 0.1)',
    hot: true,
    badge: 'best seller',
  },
  {
    id: 'detailing-exterior',
    name: 'Detailing Exterior',
    desc: 'Poles 3 step, hilangkan jamur kaca, dekontaminasi cat, & wax coating premium.',
    price: 'Rp 250K',
    unit: '/ treatment',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" fill="currentColor" />
      </svg>
    ),
    iconBg: '#fdf3e7',
    hot: false,
  },
  {
    id: 'detailing-interior',
    name: 'Detailing Interior',
    desc: 'Bongkar jok (opsional), cuci plafon, karpet dasar, treatment jok kulit/beludru.',
    price: 'Rp 300K',
    unit: '/ treatment',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10v10h14V10H6zm2-4h10v4H8V6z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    iconBg: '#f0eae8',
    hot: false,
  },
  {
    id: 'full-detailing',
    name: 'Full Detailing',
    desc: 'Luar-dalam-mesin bersih sempurna. Restorasi total kayak mobil baru keluar dealer.',
    price: 'Rp 500K',
    unit: '/ treatment',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 7v12l10 5 10-5V7L13 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="13" cy="13" r="4" fill="currentColor" />
      </svg>
    ),
    iconBg: 'rgba(180, 244, 32, 0.2)',
    hot: false,
  },
]

const Packages = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-100%"]);

  return (
    <section className={styles.wrap} id="services" ref={targetRef}>
      <div className={styles.stickyWrap}>
        <div className={styles.inner}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="eyebrow">our services</span>
            <h2 className="big-title">Pilih <em>Level</em><br/>Glow-up Mobilmu.</h2>
            <p className="body-text">Geser ke kanan untuk melihat semua paket.</p>
          </motion.div>

          <div className={styles.carouselContainer}>
            <motion.div style={{ x }} className={styles.flexGrid}>
              {packages.map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  className={`${styles.card} ${pkg.hot ? styles.hot : ''}`}
                  id={`pkg-${pkg.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
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
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20GlossGo%2C%20mau%20book%20paket%20${pkg.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.bookBtn} ${pkg.hot ? styles.bookBtnHot : ''}`}
                  >
                    Ambil Paket Ini →
                  </a>
                </motion.div>
              ))}
              
              {/* Extra CTA Card at the end */}
              <div className={styles.ctaCard}>
                 <p>Butuh paket custom atau langganan kantoran?</p>
                 <a href="https://wa.me/6281234567890" className={styles.secBtn}>Chat Admin →</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages
