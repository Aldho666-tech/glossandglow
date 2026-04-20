import styles from './Ticker.module.css'

const items = [
  '5,000+ mobil dicuci',
  'rating 4.9 bintang ⭐',
  'dateng ke lokasi kamu 📍',
  'glossy guaranteed ✨',
  'mulai Rp 50.000 💸',
  'no scratch policy 🛡️',
]

const Ticker = () => {
  const doubled = [...items, ...items, ...items] // Tripled for ultra-smooth loop

  return (
    <div className={styles.wrap}>
      <div className={styles.tickerGroup}>
        <div className={styles.tickerInner}>
          {doubled.map((item, i) => (
            <div key={i} className={styles.tickItem}>
              {item}
              <span className={styles.sep} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ticker
