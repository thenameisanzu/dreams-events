'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className={styles.hero}>
      {/* Parallax / Floating Background Image */}
      <motion.div
        className={styles.bgImage}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 0.45 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
      >
        <Image
          src="/gallery/weddings/event-05.jpg"
          alt="Ivory and blush floral wedding stage under a draped canopy"
          fill
          priority
          sizes="100vw"
          quality={85}
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      {/* Dark Radial Overlay */}
      <div className={styles.overlay} />

      {/* Hero Content */}
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Badge */}
        <motion.div className={styles.badge} variants={itemVariants}>
          <Sparkles className={styles.badgeSparkle} size={14} />
          <span>CREATIVE EVENT SPECIALISTS</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 className={styles.title} variants={itemVariants}>
          {"We Create Moments."}<br />
          <span className={styles.titleAccent}>You Remember Forever.</span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p className={styles.subtitle} variants={itemVariants}>
          From intimate celebrations to grand occasions, we bring your dream events to life across Kerala.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className={styles.actions} variants={itemVariants}>
          <Link href="/services">
            <button className={styles.primaryBtn}>
              Explore Services
            </button>
          </Link>
          <Link href="/contact">
            <button className={styles.secondaryBtn}>
              Schedule Consultation
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>Scroll Down</span>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </motion.div>
    </section>
  );
}
