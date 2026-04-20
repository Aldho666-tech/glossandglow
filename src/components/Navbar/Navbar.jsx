import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.navLogo}>
        <img src="/logo.png" alt="GlossGo & Wash" className={styles.logoImg} />
      </a>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        {['Services', 'How It Works', 'Gallery', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.navRight}>
        <a href="#booking" className={styles.navPill} id="nav-book-btn">Book Now</a>
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
