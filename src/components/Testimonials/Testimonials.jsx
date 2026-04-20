import { motion } from 'framer-motion'
import styles from './Testimonials.module.css'

const reviews = [
  {
    id: 'ar',
    stars: 5,
    text: '"Mobilku literal jadi kayak baru keluar showroom. Tim-nya profesional banget dan cepet. Highly recommend fr."',
    initials: 'AR',
    name: 'Aldi Ramadhan',
    car: 'Toyota Fortuner',
    color: '#1346c0',
  },
  {
    id: 'dn',
    stars: 5,
    text: '"Harga worth it banget, hasilnya ga pernah ngecewain. Udah langganan 6 bulan, no cap tetap konsisten."',
    initials: 'DN',
    name: 'Dewi Nurhayati',
    car: 'Honda Jazz',
    color: '#0d35a0',
  },
  {
    id: 'bh',
    stars: 5,
    text: '"Nano coating-nya gila sih, air langsung nge-roll off. Mobilku sekarang anti kotor aesthetic. 10/10 no debate."',
    initials: 'BH',
    name: 'Budi Hartono',
    car: 'BMW X3',
    color: '#3a68e8',
  },
]

const StarRating = ({ count }) => (
  <div className={styles.stars}>
    {'★'.repeat(count)}
  </div>
)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const Testimonials = () => {
  return (
    <section className={styles.wrap} id="gallery">
      <div className={styles.inner}>
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="eyebrow">real talk</span>
          <h2 className="big-title">They said it,<br/>not us.</h2>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviews.map((r) => (
            <motion.div key={r.id} className={styles.card} id={`review-${r.id}`} variants={fadeUp} whileHover={{ y: -5 }}>
              <StarRating count={r.stars} />
              <p className={styles.text}>{r.text}</p>
              <div className={styles.foot}>
                <div
                  className={styles.avatar}
                  style={{ background: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.car}>{r.car} 🚗</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.ratingBadge}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <span className={styles.ratingNum}>4.9</span>
          <div>
            <div className={styles.ratingStars}>★★★★★</div>
            <div className={styles.ratingLabel}>dari 1,200+ review</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
