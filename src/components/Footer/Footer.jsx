import styles from './Footer.module.css'

const links = {
  services: ['Basic Wash', 'Premium Gloss', 'Full Detailing', 'Nano Coating'],
  social: ['Instagram', 'TikTok', 'WhatsApp'],
  company: ['About us', 'How it works', 'Contact', 'Careers'],
}

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="#" className={styles.brandName}>
            <img src="/logo.png" alt="GlossGo & Wash" className={styles.logoImg} />
          </a>
          <p className={styles.brandDesc}>
            Cuci mobil premium yang dateng ke kamu. Pasarkemis area — mobile service tersedia setiap hari.
          </p>
          <div className={styles.socialRow}>
            {['ig', 'tiktok', 'wa'].map((s) => (
              <a key={s} href="#" className={styles.socialIcon} aria-label={s}>
                {s === 'ig' && '📷'}
                {s === 'tiktok' && '🎵'}
                {s === 'wa' && '💬'}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.cols}>
          {Object.entries(links).map(([col, items]) => (
            <div key={col} className={styles.col}>
              <div className={styles.colTitle}>{col}</div>
              {items.map((item) => (
                <a key={item} href="#" className={styles.colLink}>{item}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 GlossGo & Wash. All rights reserved.</span>
        <span className={styles.heartNote}>Made with 💙 in Pasarkemis</span>
      </div>
    </footer>
  )
}

export default Footer
