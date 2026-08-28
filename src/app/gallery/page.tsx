'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { galleryItems } from '@/data/galleryData';
import styles from './gallery.module.css';

const categories = ['All', 'Weddings', 'Birthdays', 'Decorations'];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* Gallery Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>
            Our <span className={styles.titleAccent}>Gallery</span>
          </h1>
          <p className={styles.subtitle}>
            Explore photos of our live event rigging, custom stage decorations, and curated luxury styling across Kerala.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        {/* Category Filters */}
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
              onClick={() => {
                setActiveFilter(cat);
                setLightboxIndex(null); // Reset lightbox scope
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`${styles.card} ${styles[item.aspectRatio]}`}
                onClick={() => setLightboxIndex(idx)}
              >
                <div className={styles.imgArea}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImg}
                    quality={80}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.tag}>{item.category}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <div className={styles.expandIcon}>
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>


      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightbox}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={handlePrev}
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.lightboxImgArea}>
                <Image
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  className={styles.lightboxImg}
                  priority
                />
              </div>
              <div className={styles.lightboxDetails}>
                <span className={styles.lightboxTag}>{filteredItems[lightboxIndex].category}</span>
                <h3 className={styles.lightboxTitle}>{filteredItems[lightboxIndex].title}</h3>
                <span className={styles.lightboxCounter}>
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>

            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={handleNext}
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
