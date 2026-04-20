import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './BookingForm.module.css'

const packagesList = [
  "Wash Exterior (Rp 75.000)",
  "Wash Interior (Rp 100.000)",
  "Full Wash (Rp 170.000)",
  "Detailing Exterior (Rp 150.000)",
  "Detailing Interior (Rp 150.000)",
  "Custom / Lainnya (Chat Admin)"
]

const SteamGunSVG = () => (
  <svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg" className={styles.ornamentSVG}>
    <defs>
      <linearGradient id="foamGradBooking" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="var(--blue)" />
      </linearGradient>
    </defs>
    
    {/* Steam/Water Spray Animation */}
    <motion.path 
      d="M 130 90 Q 230 20 330 70 Q 350 90 330 120 Q 230 160 130 110 Z" 
      fill="url(#foamGradBooking)" opacity="0.9"
      initial={{ scaleX: 0.85, opacity: 0.6 }}
      animate={{ scaleX: 1.15, opacity: 1 }}
      transition={{ duration: 0.4, repeat: Infinity, repeatType: "mirror" }}
      style={{ originX: "130px", originY: "100px" }}
    />
    
    <motion.circle cx="200" cy="60" r="18" fill="#fff" initial={{ x: 0, opacity: 1 }} animate={{ x: 60, opacity: 0, scale: 1.5 }} transition={{ duration: 0.5, repeat: Infinity }} />
    <motion.circle cx="260" cy="110" r="24" fill="#fff" initial={{ x: 0, opacity: 1 }} animate={{ x: 50, opacity: 0, scale: 1.5 }} transition={{ duration: 0.7, repeat: Infinity, delay: 0.2 }} />
    <motion.circle cx="170" cy="130" r="12" fill="#fff" initial={{ x: 0, opacity: 1 }} animate={{ x: 70, opacity: 0, scale: 1.5 }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
    <motion.circle cx="300" cy="80" r="16" fill="#fff" initial={{ x: 0, opacity: 1 }} animate={{ x: 40, opacity: 0, scale: 1.5 }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }} />

    {/* High Pressure Washer Gun Body */}
    <rect x="50" y="80" width="80" height="40" rx="8" fill="var(--dark)" />
    
    {/* Gun Handle */}
    <rect x="60" y="115" width="28" height="65" rx="6" fill="var(--dark)" transform="rotate(-15 60 115)" />
    
    {/* Metallic Nozzle */}
    <rect x="130" y="90" width="20" height="20" rx="4" fill="#d5d1c6" />
    <rect x="150" y="94" width="10" height="12" rx="2" fill="#f0eee8" />
    
    {/* Trigger */}
    <path d="M 95 120 Q 105 140 90 155" fill="none" stroke="var(--green)" strokeWidth="6" strokeLinecap="round" />
    
    {/* Hose Tube */}
    <path d="M 50 100 Q 10 100 0 160" fill="none" stroke="#444" strokeWidth="14" strokeLinecap="round" />
    
    {/* Branding on Gun */}
    <text x="65" y="105" fill="var(--green)" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">GO</text>
  </svg>
)

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    package: packagesList[0],
    notes: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const message = `Halo tim GlossGo & Wash! 🚗✨
Saya ingin membooking layanan cuci mobil panggilan dengan detail berikut:

*👤 INFORMASI PEMESAN:*
- Nama: ${formData.name}
- No. WhatsApp: ${formData.phone}
- Alamat Lengkap: ${formData.address}

*📅 JADWAL BOOKING:*
- Tanggal: ${formData.date}
- Pukul: ${formData.time} WIB

*🛠 PILIHAN LAYANAN:*
- Paket: ${formData.package}

*📝 CATATAN TAMBAHAN:*
${formData.notes ? `- ${formData.notes}` : '- Tidak ada catatan tambahan'}

Tolong konfirmasi ketersediaan jadwalnya ya min. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const waNumber = "6281234567890"; 
    const waLink = `https://wa.me/${waNumber}?text=${encodedMessage}`;
    
    window.open(waLink, '_blank');
  }

  return (
    <section className={styles.booking} id="booking">
      <div className={styles.container}>
        
        {/* Hard Selling Left Column */}
        <motion.div 
          className={styles.sellingContent}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.promoBadge}>🔥 SLOT TERBATAS!</span>
          
          <h2 className={styles.title}>
            Mobil Kusam?<br/>
            <em>Kita Bikin Kinclong!</em>
          </h2>
          
          <p className={styles.subtitle}>
            Tim kami langsung datang ke rumah membawa mesin *High Pressure* dan sabun *pH Balanced*. Anda cukup duduk santai, biar kami yang bekerja!
          </p>

          <ul className={styles.benefitsList}>
            <li>
              <span className={styles.checkIcon}>✅</span>
              <div>
                <strong>Alat & Listrik Bawa Sendiri</strong>
                <p>Tidak merepotkan pemilik rumah.</p>
              </div>
            </li>
            <li>
              <span className={styles.checkIcon}>✅</span>
              <div>
                <strong>Aman Untuk Cat Mobil</strong>
                <p>Menggunakan Chemical & Microfiber premium.</p>
              </div>
            </li>
            <li>
              <span className={styles.checkIcon}>✅</span>
              <div>
                <strong>Garansi Bersih 100%</strong>
                <p>Kurang puas? Kami cuci ulang gratis.</p>
              </div>
            </li>
          </ul>

          <div className={styles.ornamentContainer}>
             <SteamGunSVG />
          </div>
        </motion.div>

        {/* The Form Right Column */}
        <motion.form 
          className={styles.formCard}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.formHeader}>
            <h3>Isi Data Booking</h3>
            <p>Proses cepat, langsung terhubung ke WhatsApp Admin.</p>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Nama Lengkap</label>
            <input 
              type="text" id="name" name="name" 
              placeholder="Cth: Budi Santoso" 
              required value={formData.name} onChange={handleChange} 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone">Nomor WhatsApp Aktif</label>
            <input 
              type="tel" id="phone" name="phone" 
              placeholder="Cth: 081234567890" 
              required value={formData.phone} onChange={handleChange} 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="address">Alamat Lengkap Rumah / Lokasi</label>
            <textarea 
              id="address" name="address" rows="3" 
              placeholder="Sebutkan patokan rumah agar mudah dicari (Cth: Pagar hitam samping pos satpam...)" 
              required value={formData.address} onChange={handleChange} 
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="date">Tanggal Pengerjaan</label>
              <input 
                type="date" id="date" name="date" 
                required value={formData.date} onChange={handleChange} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="time">Jam Kedatangan</label>
              <input 
                type="time" id="time" name="time" 
                required value={formData.time} onChange={handleChange} 
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="package">Pilihan Paket Layanan</label>
            <div className={styles.selectWrapper}>
              <select id="package" name="package" required value={formData.package} onChange={handleChange}>
                {packagesList.map((pkg, i) => (
                  <option key={i} value={pkg}>{pkg}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="notes">Catatan Tambahan (Opsional)</label>
            <input 
              type="text" id="notes" name="notes" 
              placeholder="Cth: Warna mobil hitam, tolong hati-hati ada baret..." 
              value={formData.notes} onChange={handleChange} 
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Booking Sekarang (Via WA) 🚀
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default BookingForm
