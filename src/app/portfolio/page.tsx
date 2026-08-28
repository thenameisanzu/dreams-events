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
    title: 'Rose-Petal Wedding Celebration',
    category: 'Weddings',
    image: '/gallery/weddings/event-03.jpg',
    date: 'Wedding celebration',
    location: 'Indoor venue',
    client: 'Private celebration',
    desc: 'A joyful couple’s celebration framed by falling rose petals, warm lighting, and a decorated reception stage.'
  },
  {
    id: 2,
    title: 'Pink and Gold Banquet Seating',
    category: 'Decorations',
    image: '/gallery/decorations/event-15.jpg',
    date: 'Reception décor',
    location: 'Banquet hall',
    client: 'Private celebration',
    desc: 'A banquet hall dressed with pink chair bows, gold seating, and tall floral centrepieces.'
  },
  {
    id: 3,
    title: 'Wedding Party on a Floral Stage',
    category: 'Weddings',
    image: '/gallery/decorations/event-08.jpg',
    date: 'Wedding celebration',
    location: 'Indoor venue',
    client: 'Private celebration',
    desc: 'Guests celebrate together in front of a floral wedding stage with warm chandeliers and a black backdrop.'
  },
  {
    id: 4,
    title: 'Illuminated Event Entrance',
    category: 'Decorations',
    image: '/gallery/weddings/event-14.jpg',
    date: 'Evening event',
    location: 'Auditorium entrance',
    client: 'Private celebration',
    desc: 'A red-carpet entrance tunnel defined by warm geometric light frames and decorative light installations.'
  },
  {
    id: 5,
    title: 'Pastel Floral Birthday Stage',
    category: 'Decorations',
    image: '/gallery/decorations/event-17.jpg',
    date: 'Birthday celebration',
    location: 'Indoor venue',
    client: 'Private celebration',
    desc: 'A pastel floral stage with a personalised backdrop, white table setting, lanterns, and soft string lights.'
  },
  {
    id: 6,
    title: 'Pastel Floral Backdrop Detail',
    category: 'Decorations',
    image: '/gallery/decorations/event-18.jpg',
    date: 'Birthday celebration',
    location: 'Indoor venue',
    client: 'Private celebration',
    desc: 'A close view of the pastel floral arrangement and illuminated personalised sign on the celebration backdrop.'
  }
];

const categories = ['All', 'Weddings', 'Decorations'];

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
