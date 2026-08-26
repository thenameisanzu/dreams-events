'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './about.module.css';

const milestones = [
  {
    year: '2014',
    title: 'Company Inception',
    desc: 'Founded as a boutique floral and local wedding decoration firm in Mumbai, focus on luxury visual concepts.'
  },
  {
    year: '2018',
    title: 'First Arena Show Production',
    desc: 'Contracted stage architecture, laser mapping, and crowd flow logistics for a 8,000-delegate electronic music showcase.'
  },
  {
    year: '2022',
    title: 'Multicity Storage & Warehousing',
    desc: 'Established custom furniture warehouses and decorator units across Jaipur, Goa, and Delhi to manage multicity demands.'
  },
  {
    year: '2026',
    title: 'National Design Excellence Award',
    desc: 'Recognized as the Country’s Top Luxury Event Stylists after successfully completing over 500 premium productions.'
  }
];

const teamMembers = [
  {
    initials: 'RM',
    name: 'Rohan Malhotra',
    role: 'Co-Founder & CEO',
    bio: 'Oversees vendor operations, logistics timelines, and contract matrices. Ensures the back-end runs as beautifully as the front-end.'
  },
  {
    initials: 'AS',
    name: 'Aishwarya Sen',
    role: 'Head of Event Design',
    bio: 'An artist at heart. Speeds visual mockups, floral ceiling layouts, and color coordination palettes for luxury banquets.'
  },
  {
    initials: 'KM',
    name: 'Kabir Mehta',
    role: 'Technical Operations Director',
    bio: 'Staging, audio-visual grids, laser mappings, and crowd safety specialist. Keeps concert layouts high-energy and compliant.'
  }
];

export default function AboutPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 60, damping: 15 }
    }
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* About Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Behind The Magic</span>
          <h1 className={styles.title}>
            The Creative <span className={styles.titleAccent}>Force</span>
          </h1>
          <p className={styles.subtitle}>
            Learn about Dreams Event Management & Decorations—our journey, core values, and the visionaries crafting high-end productions.
          </p>
        </div>
        <div className="grid-bg" />
      </section>

      <section className={styles.content}>
        {/* Story and Timeline Section */}
        <div className={styles.storySection}>
          <div className={styles.storyText}>
            <h2>Our Story</h2>
            <p>
              Founded in 2014, Dreams Event Management & Decorations set out to bridge the gap between artistic, high-concept decor and disciplined event logistics. We started as a small styling outfit, dressing local wedding stages with customized marigolds and orchids.
            </p>
            <p>
              Over the last decade, we expanded our design warehouses and specialized technical teams. Today, we manage stadium rock concerts, multi-day tech conferences, and elite destination weddings with equal dedication, delivering experiences that are cohesive, striking, and flawless.
            </p>
          </div>

          {/* Timeline */}
          <div className={styles.timeline}>
            {milestones.map((m) => (
              <div key={m.year} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineTitle}>{m.title}</div>
                <p className={styles.timelineDesc}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={styles.teamSection}>
          <div className={styles.sectionHeader}>
            <h2>Meet the Visionaries</h2>
            <p>Our leaders combine art, organization, and technical engineering to shape spectacular events.</p>
          </div>

          <motion.div 
            className={styles.teamGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className={styles.memberCard}
              >
                <div className={styles.avatar}>
                  {member.initials}
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <div className={styles.memberRole}>{member.role}</div>
                <p className={styles.memberBio}>{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
