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
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className={styles.colLink}>{item}</a>
              ))}
            </div>
          ))}
          
          {/* Maps Section */}
          <div className={styles.mapCol}>
            <div className={styles.colTitle}>📍 Our Location</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126938.83401569766!2d106.4560731032338!3d-6.151745431548684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffdfb73c3b01%3A0xc3abcc15132d73f1!2sKec.%20Pasarkemis%2C%20Kabupaten%20Tangerang%2C%20Banten!5e0!3m2!1sid!2sid!4v1713500000000!5m2!1sid!2sid"
              width="100%"
              height="160"
              style={{ border: "2px solid var(--dark)", borderRadius: "12px", background: "#ccc", marginTop: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
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
