'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import styles from './ServicesPreview.module.css';

export default function ServicesPreview() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 85, damping: 15 },
    },
  };

  return (
    <section className={styles.section} id="services-preview">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>What We Excel At</span>
          <h2 className={styles.title}>
            Crafting Extraordinary <span className={styles.titleAccent}>Experiences</span>
          </h2>
          <p className={styles.desc}>
            Dreams Event management & Decorations combines artistic design with strategic logistics to deliver events that are flawless, memorable, and visually stunning.
          </p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Render top 6 services on the homepage */}
          {servicesData.slice(0, 6).map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={styles.card}
                style={{
                  '--card-hover-border': service.color + '40',
                  '--primary': service.color,
                } as React.CSSProperties}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={28} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <Link href={`/services#${service.id}`} className={styles.cardLink}>
                  <span>Explore Details</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA Button */}
        <div className={styles.moreBtnWrapper}>
          <Link href="/services">
            <button className={styles.moreBtn}>View All Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
