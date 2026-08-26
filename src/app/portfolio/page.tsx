'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './portfolio.module.css';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  location: string;
  client: string;
  desc: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'The Bolgatty Island Palace Wedding',
    category: 'Weddings',
    image: '/hero-bg.jpg',
    date: 'December 2025',
    location: 'Bolgatty Palace, Kochi, Kerala',
    client: 'Krishnan Family',
    desc: 'A spectacular heritage palace wedding featuring custom-built floating floral ceilings, custom traditional mandap setups, and ambient neon-uplighting to create a fairy-tale look.'
  },
  {
    id: 2,
    title: 'Kerala IT Summit 2026',
    category: 'Corporate',
    image: '/corporate.jpg',
    date: 'March 2026',
    location: 'Lulu Bolgatty International Convention Centre, Kochi',
    client: 'Kerala IT Mission',
    desc: 'A grand state-level corporate tech summit managing staging, dual curved led backdrops, lighting design, live broadcasting, and seamless guest check-ins for 1,200 attendees.'
  },
  {
    id: 3,
    title: 'Kochi Music Festival Live Stage',
    category: 'Concerts',
    image: '/concert.jpg',
    date: 'January 2026',
    location: 'Jawaharlal Nehru Stadium Ground, Kochi, Kerala',
    client: 'Echoes Entertainment',
    desc: 'A massive high-energy music festival stage production. Handled professional sound engineering, pyrotechnics, laser light mapping, artist lounges, and strict crowd-barrier layouts.'
  },
  {
    id: 4,
    title: 'Traditional Gold & Orchid Canopy',
    category: 'Weddings',
    image: '/decor-details.jpg',
    date: 'February 2026',
    location: 'Raviz Ashtamudi, Kollam, Kerala',
    client: 'Dr. Nair & Family',
    desc: 'Luxury table settings featuring fine crystal glassware, traditional brass lamps, gold centerpiece stands, and center arrangements composed of white roses and orchids.'
  },
  {
    id: 5,
    title: 'Kerala Business Awards & Gala',
    category: 'Corporate',
    image: '/hero-bg.jpg',
    date: 'November 2025',
    location: 'Le Meridien, Kochi, Kerala',
    client: 'Kerala Financial Services',
    desc: 'A premium corporate gala dinner celebrating top achievers. Structured glass walkways, custom stage design, media wall photo ops, and live entertainment stages.'
  },
  {
    id: 6,
    title: 'Pulse Arena Kochi Concert Tour',
    category: 'Concerts',
    image: '/concert.jpg',
    date: 'April 2026',
    location: 'Kaloor Stadium Ground, Kochi, Kerala',
    client: 'Pulse Music Group',
    desc: 'Grand concert show layout built for 15,000 attendees, complete with safety barricades, VIP lounges, local government permits, and stage safety compliance inspections.'
  }
];

const categories = ['All', 'Weddings', 'Corporate', 'Concerts'];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className={styles.page}>
      <Header />

      {/* Portfolio Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Our Work Showcase</span>
          <h1 className={styles.title}>
            Gallery of <span className={styles.titleAccent}>Masterpieces</span>
          </h1>
          <p className={styles.subtitle}>
            Explore our curated database of luxury weddings, grand corporate events, concerts, and custom event designs that redefined standard planning.
          </p>
        </div>
        <div className="grid-bg" />
      </section>

      {/* Filter and Grid Content */}
      <section className={styles.content}>
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={styles.card}
                onClick={() => setSelectedItem(item)}
              >
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <span className={styles.cardTag}>{item.category}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>
                    {item.location} &bull; {item.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightbox}
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button className={styles.lightboxClose} onClick={() => setSelectedItem(null)} aria-label="Close Lightbox">
              <X size={24} />
            </button>

            {/* Lightbox Card */}
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring' as const, damping: 25, stiffness: 120 }}
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()} // Stop closing click
            >
              {/* Image Column */}
              <div className={styles.lightboxImgArea}>
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 992px) 100vw, 60vw"
                  quality={90}
                  className={styles.lightboxImg}
                />
              </div>

              {/* Details Column */}
              <div className={styles.lightboxDetails}>
                <span className={styles.lightboxTag}>{selectedItem.category}</span>
                <h2 className={styles.lightboxTitle}>{selectedItem.title}</h2>
                <p className={styles.lightboxDesc}>{selectedItem.desc}</p>

                <ul className={styles.metaList}>
                  <li className={styles.metaItem}>
                    <Calendar size={18} className={styles.metaIcon} style={{color: 'var(--primary)'}} />
                    <span className={styles.metaLabel}>Date:</span>
                    <span className={styles.metaValue}>{selectedItem.date}</span>
                  </li>
                  <li className={styles.metaItem}>
                    <MapPin size={18} className={styles.metaIcon} style={{color: 'var(--primary)'}} />
                    <span className={styles.metaLabel}>Location:</span>
                    <span className={styles.metaValue}>{selectedItem.location}</span>
                  </li>
                  <li className={styles.metaItem}>
                    <Award size={18} className={styles.metaIcon} style={{color: 'var(--primary)'}} />
                    <span className={styles.metaLabel}>Client:</span>
                    <span className={styles.metaValue}>{selectedItem.client}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
