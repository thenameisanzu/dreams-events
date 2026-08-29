'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { galleryItems } from '@/data/galleryData';

import styles from './gallery.module.css';

const categories = [
  'All',
  'Weddings',
  'Birthdays',
  'Decorations',
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter(
        (item) => item.category === activeFilter
      );

  /* =========================================
     KEYBOARD CONTROLS
  ========================================= */

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === 'Escape') {
        setLightboxIndex(null);
      }

      if (e.key === 'ArrowRight') {
        setLightboxIndex(
          (lightboxIndex + 1) % filteredItems.length
        );
      }

      if (e.key === 'ArrowLeft') {
        setLightboxIndex(
          (lightboxIndex - 1 + filteredItems.length) %
          filteredItems.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, filteredItems.length]);

  /* =========================================
     PREVIOUS IMAGE
  ========================================= */

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (lightboxIndex === null) return;

    setLightboxIndex(
      (lightboxIndex - 1 + filteredItems.length) %
      filteredItems.length
    );
  };

  /* =========================================
     NEXT IMAGE
  ========================================= */

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (lightboxIndex === null) return;

    setLightboxIndex(
      (lightboxIndex + 1) % filteredItems.length
    );
  };

  /* =========================================
     BODY SCROLL LOCK
  ========================================= */

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <div className={styles.page}>

      <Header />

      {/* =========================================
          HERO
      ========================================= */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.eyebrow}>
              OUR WORK
            </p>

            <h1 className={styles.title}>
              Our{' '}
              <span className={styles.titleAccent}>
                Gallery
              </span>
            </h1>

            <p className={styles.subtitle}>
              Explore moments, celebrations, and beautifully
              crafted event experiences brought to life by
              Dreams.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <section className={styles.content}>

        {/* =========================================
            FILTERS
        ========================================= */}

        <motion.div
          className={styles.filterBar}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterBtn} ${activeFilter === category
                  ? styles.filterBtnActive
                  : ''
                }`}
              onClick={() => {
                setActiveFilter(category);
                setLightboxIndex(null);
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* =========================================
            MASONRY GALLERY
        ========================================= */}

        <motion.div
          layout
          className={styles.grid}
        >
          <AnimatePresence mode="popLayout">

            {filteredItems.map((item, index) => (

              <motion.div
                key={item.id}
                layout
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.03,
                }}
                className={`${styles.card} ${styles[item.aspectRatio] || ''
                  }`}
                onClick={() => setLightboxIndex(index)}
              >

                <div className={styles.imgArea}>

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="
                      (max-width: 600px) 100vw,
                      (max-width: 992px) 50vw,
                      33vw
                    "
                    className={styles.cardImg}
                    quality={85}
                  />

                  {/* Hover Overlay */}

                  <div className={styles.overlay}>

                    <div className={styles.overlayContent}>

                      <span className={styles.tag}>
                        {item.category}
                      </span>

                      <h3 className={styles.cardTitle}>
                        {item.title}
                      </h3>

                    </div>

                    <div className={styles.expandIcon}>
                      <Maximize2 size={18} />
                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>
        </motion.div>

        {/* Empty State */}

        {filteredItems.length === 0 && (
          <div className={styles.emptyState}>
            <p>
              No gallery items found in this category.
            </p>
          </div>
        )}

      </section>

      {/* =========================================
          LIGHTBOX
      ========================================= */}

      <AnimatePresence>

        {lightboxIndex !== null &&
          filteredItems[lightboxIndex] && (

            <motion.div
              className={styles.lightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
            >

              {/* Close */}

              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setLightboxIndex(null)}
                aria-label="Close gallery"
              >
                <X size={22} />
              </button>

              {/* Previous */}

              <button
                type="button"
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Image Content */}

              <motion.div
                className={styles.lightboxContent}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.3,
                }}
                onClick={(e) => e.stopPropagation()}
              >

                <div className={styles.lightboxImgArea}>

                  <Image
                    src={
                      filteredItems[lightboxIndex].image
                    }
                    alt={
                      filteredItems[lightboxIndex].title
                    }
                    fill
                    sizes="90vw"
                    className={styles.lightboxImg}
                    quality={95}
                    priority
                  />

                </div>

                <div className={styles.lightboxDetails}>

                  <div>

                    <span className={styles.lightboxTag}>
                      {
                        filteredItems[lightboxIndex]
                          .category
                      }
                    </span>

                    <h3 className={styles.lightboxTitle}>
                      {
                        filteredItems[lightboxIndex]
                          .title
                      }
                    </h3>

                  </div>

                  <span className={styles.lightboxCounter}>
                    {lightboxIndex + 1}{' '}
                    <span>/</span>{' '}
                    {filteredItems.length}
                  </span>

                </div>

              </motion.div>

              {/* Next */}

              <button
                type="button"
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={handleNext}
                aria-label="Next image"
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