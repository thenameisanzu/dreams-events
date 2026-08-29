'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './HappyMoments.module.css';

const moments = [
  {
    title: 'Rose-petal wedding celebration',
    meta: 'Wedding celebration',
    image: '/gallery/weddings/event-03.jpg',
    gridCol: '1 / 7',
    gridRow: '1 / 3',
  },
  {
    title: 'Floral reception stage with fairy lights',
    meta: 'Wedding décor',
    image: '/gallery/birthdays/event-12.jpg',
    gridCol: '7 / 10',
    gridRow: '1 / 4',
  },
  {
    title: 'White rose chandeliers venue',
    meta: 'Ceremony décor',
    image: '/gallery/decorations/event-09.jpg',
    gridCol: '10 / 13',
    gridRow: '1 / 3',
  },
  {
    title: 'Pastel swan christening dessert table',
    meta: 'Baby shower',
    image: '/gallery/decorations/event-11.jpg',
    gridCol: '1 / 4',
    gridRow: '3 / 5',
  },
  {
    title: 'Ivory arch stage with blush florals',
    meta: 'Wedding décor',
    image: '/gallery/weddings/event-05.jpg',
    gridCol: '4 / 10',
    gridRow: '3 / 5',
  },
  {
    title: "Mutha's princess first birthday",
    meta: 'Birthday celebration',
    image: '/gallery/decorations/event-16.jpg',
    gridCol: '10 / 13',
    gridRow: '3 / 5',
  },
];

export default function HappyMoments() {
  const [selectedMoment, setSelectedMoment] = useState<(typeof moments)[number] | null>(null);

  return (
    <>
      <section className={styles.section} id="happy-moments">
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Happy Moments</span>
            <h2 className={styles.title}>
              Stories we help <span className={styles.titleAccent}>celebrate</span>
            </h2>
            <p className={styles.desc}>
              Every event we design is full of emotion, energy, and meaningful memories. These are a few of the joyful moments our clients keep revisiting long after the lights go down.
            </p>
          </div>

          <div className={styles.grid}>
            {moments.map((moment, index) => (
              <motion.article
                key={`${moment.title}-${index}`}
                className={styles.card}
                style={{
                  gridColumn: moment.gridCol,
                  gridRow: moment.gridRow,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
              >
                <button
                  type="button"
                  className={styles.imageButton}
                  onClick={() => setSelectedMoment(moment)}
                  aria-label={`Open ${moment.title}`}
                >
                  <div className={styles.imageWrap}>
                    <img src={moment.image} alt={moment.title} />
                  </div>
                  <div className={styles.overlay}>
                    <span className={styles.meta}>{moment.meta}</span>
                    <h3>{moment.title}</h3>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedMoment && (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMoment(null)}
          >
            <motion.div
              className={styles.lightbox}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setSelectedMoment(null)}
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>

              <img src={selectedMoment.image} alt={selectedMoment.title} className={styles.lightboxImage} />
              <div className={styles.lightboxContent}>
                <span className={styles.lightboxMeta}>{selectedMoment.meta}</span>
                <h3>{selectedMoment.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
