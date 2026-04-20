import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Packages.module.css'

const washPackages = [
  {
    id: 'exterior-wash',
    name: 'Wash Exterior',
    desc: 'Cocok untuk Mobil yang ingin bersih cepat di bagian luar.',
    price: '75',
    unit: 'Rb',
    duration: '⏱ 45 Menit - 1 Jam',
    features: [
      'Pre-rinse', 
      'Snow Foam', 
      'Hand Wash & Dry', 
      'Window & Mirror Cleaning', 
      'Deep Wheel (velg)', 
      'Tire Dressing (Semir Ban)'
    ],
    hot: false,
  },
  {
    id: 'interior-wash',
    name: 'Wash Interior',
    desc: 'Cocok untuk Mobil yang Kabin kotor, Karpet berdebu atau bau.',
    price: '100',
    unit: 'Rb',
    duration: '⏱ 1 Jam 40 Menit',
    features: [
      'Full Wipe Down Disinfection', 
      'Vacuum Interior & Floor Mats', 
      'Door Jambs Cleaning', 
      'Trunk Cleaning', 
      'Window & Mirror Cleaning (dalam)', 
      'Air Freshener Treatment'
    ],
    hot: false,
  },
  {
    id: 'full-wash',
    name: 'Full Wash',
    desc: 'Kombinasi: Exterior + Interior. Cocok untuk Mobil Kotor luar dalam.',
    price: '170',
    unit: 'Rb',
    duration: '⏱ 2 Jam 30 Menit+',
    features: [
      'Exterior Wash Lengkap', 
      'Interior Wash Lengkap', 
      'Air Freshener Treatment (aroma fresh)'
    ],
    hot: true,
    badge: 'Best Seller',
  }
];

const detailingPackages = [
  {
    id: 'detailing-exterior',
    name: 'Detailing Exterior',
    desc: 'Cocok untuk Mobil kotor berat, noda sedang & butuh tampilan maksimal.',
    price: '150',
    unit: 'Rb',
    duration: '⏱ 1 Jam 40 Menit',
    features: [
      'Foam Pre Wash (Touchless)', 
      'Pre-rinse & Snow Foam Hand Wash', 
      'Window & Mirror Cleaning', 
      'Minor Remover (kerak/jamur/aspal)', 
      'Deep Wheel & Stain Remover (karat)', 
      '3-4 Month Sealant Spray Wax', 
      'Tire Dressing (Semir Ban)'
    ],
    hot: false,
  },
  {
    id: 'detailing-interior',
    name: 'Detailing Interior',
    desc: 'Cocok untuk Mobil kotor berat, noda sedang & butuh kabin maksimal segar.',
    price: '150',
    unit: 'Rb',
    duration: '⏱ 1 Jam 40 Menit',
    features: [
      'Deep Vacuum Plafon, Jok & Karpet', 
      'Pembersihan Noda Jok / Dashboard', 
      'Disinfeksi Kabin & AC (Odor removal)', 
      'Dressing Panel Interior (Gloss/Matte)', 
      'Leather/Fabric Treatment', 
      'Air Freshener Treatment'
    ],
    hot: false,
  }
];

const Packages = () => {
  const [activeTab, setActiveTab] = useState('wash');

  const displayedPackages = activeTab === 'wash' ? washPackages : detailingPackages;

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
          <span className="eyebrow">our services</span>
          <h2 className="big-title">Pilih <em>Level</em><br/>Glow-up Mobilmu.</h2>
          
          <div className={styles.tabContainer}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'wash' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('wash')}
            >
              Regular Wash
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'detailing' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('detailing')}
            >
              Premium Detailing
            </button>
          </div>
        </motion.div>

        <div className={styles.carouselContainer}>
          <div className={styles.flexGrid}>
            <AnimatePresence mode="wait">
              {displayedPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.id}
                  className={`${styles.card} ${pkg.hot ? styles.hot : ''}`}
                  id={`pkg-${pkg.id}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
                >
                  {pkg.badge && (
                    <span className={styles.badge}>{pkg.badge}</span>
                  )}
                  
                  <div className={styles.name}>{pkg.name}</div>
                  <p className={styles.desc}>{pkg.desc}</p>
                  
                  <ul className={styles.featuresList}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  <div className={styles.priceBox}>
                    <div className={styles.duration}>{pkg.duration}</div>
                    <div className={styles.price}>
                      {pkg.price} <span>{pkg.unit}</span>
                    </div>
                  </div>

                  <a
                    href="#booking"
                    className={styles.bookBtn}
                  >
                    Ambil Paket Ini →
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Extra CTA Card at the end */}
            <motion.div 
              className={styles.ctaCard}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, delay: displayedPackages.length * 0.1 }}
            >
               <p>Butuh paket custom atau langganan kantoran?</p>
               <a href="https://wa.me/6281234567890" className={styles.secBtn}>Chat Admin →</a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Packages
