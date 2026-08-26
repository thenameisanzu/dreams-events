import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <Image
              src="/logo.jpg"
              alt="Dreams Event management & Decorations Logo"
              width={40}
              height={40}
              className={styles.logoImage}
            />
            <span>Dreams</span>
          </div>
          <p className={styles.desc}>
            Crafting spectacular experiences, luxury designs, and seamless logistics. Dreams Event management & Decorations handles everything from corporate retreats to luxury weddings.
          </p>
          <div className={styles.socials}>
            {/* Facebook Custom SVG */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* Instagram Custom SVG */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            {/* LinkedIn Custom SVG */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* YouTube Custom SVG */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="10 15 15 12 10 9"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className={styles.title}>Explore</h3>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/about">About Us</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/contact">Book Consultation</Link>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className={styles.title}>Services</h3>
          <ul className={styles.linksList}>
            <li className={styles.linkItem}>
              <Link href="/services#corporate-events">Corporate Events</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services#convention-exhibition">Convention Exhibitions</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services#german-hangar">German Hangar Tents</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services#live-events">Live Music Shows</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/services#venue-selection">Venue Selection Audits</Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className={styles.title}>Contact Us</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <MapPin size={20} />
              <span>101 Luxury Boulevard, Suite 500, Mumbai, India</span>
            </li>
            <li className={styles.contactItem}>
              <Phone size={18} />
              <span>+91 85938 90765</span>
            </li>
            <li className={styles.contactItem}>
              <Mail size={18} />
              <span>hello@dreamsevents.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.bottom}>
        <p>&copy; {currentYear} Dreams Event management & Decorations. All rights reserved.</p>
        <div className={styles.legal}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
