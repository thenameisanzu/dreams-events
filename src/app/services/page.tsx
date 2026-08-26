'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { servicesData } from '@/data/servicesData';
import styles from './services.module.css';

export default function ServicesPage() {
  const blockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 50, damping: 15 }
    }
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* Services Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Dreams Services</span>
          <h1 className={styles.title}>
            Curated Event <span className={styles.titleAccent}>Services</span>
          </h1>
          <p className={styles.subtitle}>
            From luxury wedding arrangements to high-tech corporate staging and high-energy music festivals, we plan and execute to absolute perfection.
          </p>
        </div>
        <div className="grid-bg" />
      </section>

      {/* Services Content Blocks */}
      <section className={styles.content}>
        {servicesData.map((service, index) => {
          const IconComponent = service.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              id={service.id}
              className={`${styles.serviceBlock} ${!isEven ? styles.serviceBlockReverse : ''}`}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              style={{
                '--primary': service.color,
              } as React.CSSProperties}
            >
              {/* Image Side */}
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 992px) 100vw, 45vw"
                  quality={85}
                  className={styles.serviceImage}
                />
              </div>

              {/* Text Side */}
              <div className={styles.textWrapper}>
                <div className={styles.serviceHeader}>
                  <IconComponent size={24} />
                  <span>Premium Production</span>
                </div>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.desc}</p>

                <ul className={styles.featuresList}>
                  {service.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <CheckCircle2 size={16} className={styles.featureIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <button className={styles.ctaBtn}>Inquire About This Service</button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
