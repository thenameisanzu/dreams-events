'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Music, Palette, ChevronRight } from 'lucide-react';
import styles from './ServicesPreview.module.css';

const services = [
  {
    title: 'Luxury Weddings',
    desc: 'From fairy-tale set designs to seamless coordination, we curate weddings that tell your unique love story with sheer elegance and grandeur.',
    icon: Heart,
    color: '#EC4899', // Pink
    link: '/services#weddings',
  },
  {
    title: 'Corporate Events',
    desc: 'Impactful conferences, product launches, gala dinners, and exhibitions managed with immaculate precision and state-of-the-art logistics.',
    icon: Briefcase,
    color: '#10B981', // Emerald
    link: '/services#corporate',
  },
  {
    title: 'Concerts & Festivals',
    desc: 'Mega musical concerts, cultural festivals, and community celebrations built with professional acoustics, lighting layouts, and crowd control.',
    icon: Music,
    color: '#8B5CF6', // Purple
    link: '/services#concerts',
  },
  {
    title: 'Bespoke Decorations',
    desc: 'Spectacular floral ceilings, grand stage backdrops, ambient uplighting, and table designs customized to transform any blank canvas.',
    icon: Palette,
    color: '#F59E0B', // Amber
    link: '/services#decorations',
  },
];

export default function ServicesPreview() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
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
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={styles.card}
                style={{
                  // Dynamic subtle glow properties based on index colors
                  '--card-hover-border': `rgba(${
                    service.color === '#EC4899' ? '236, 72, 153' :
                    service.color === '#10B981' ? '16, 185, 129' :
                    service.color === '#8B5CF6' ? '139, 92, 246' : '245, 158, 11'
                  }, 0.35)`,
                  '--primary': service.color,
                } as React.CSSProperties}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={28} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <Link href={service.link} className={styles.cardLink}>
                  <span>Explore Details</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
