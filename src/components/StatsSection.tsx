'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import styles from './StatsSection.module.css';

const stats = [
  { number: '500+', label: 'Events Executed' },
  { number: '12+', label: 'Years Experience' },
  { number: '15+', label: 'Design Awards' },
  { number: '99.8%', label: 'Happy Clients' },
];

export default function StatsSection() {
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 60, damping: 15, delay: 0.1 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 60, damping: 15, delay: 0.2 },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring' as const, 
        stiffness: 100, 
        damping: 15, 
        delay: 0.3 + index * 0.1 
      },
    }),
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Side: Content & Stats */}
        <motion.div 
          className={styles.content}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className={styles.badge}>Why Choose Dreams</span>
          <h2 className={styles.title}>
            Impeccable Design. <br />
            <span className={styles.titleAccent}>Flawless Execution.</span>
          </h2>
          <p className={styles.description}>
            We believe that every event is a canvas for storytelling. Whether it is an intimate wedding or a massive stadium concert, we oversee every detail—from custom ceiling hangings and luxury lightscapes to vendors, stage layouts, and runtime sheets—with utmost devotion.
          </p>

          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                custom={idx}
                variants={statItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className={styles.statCard}
              >
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Image with Floating Card */}
        <motion.div 
          className={styles.imageArea}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Image
            src="/decor-details.jpg"
            alt="Intricate luxury table settings, roses and candle lights at an event"
            fill
            sizes="(max-width: 992px) 100vw, 45vw"
            quality={90}
            className={styles.decorImage}
          />
          <motion.div 
            className={styles.floatingCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 80 }}
            viewport={{ once: true }}
          >
            <div className={styles.floatingIcon}>
              <ShieldCheck size={24} />
            </div>
            <div className={styles.floatingText}>
              <span className={styles.floatingTitle}>100% Quality Assurance</span>
              <span className={styles.floatingSub}>Certified luxury vendors & premium materials</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
