'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Music, Palette, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './services.module.css';

const servicesData = [
  {
    id: 'weddings',
    title: 'Luxury Weddings',
    desc: 'We design romantic, high-end weddings that capture your unique story. From choosing the venue to floral ceiling setups, table setups, and stage design, our wedding team covers every facet of production with class.',
    icon: Heart,
    color: '#EC4899',
    image: '/hero-bg.jpg',
    features: [
      'Bespoke Stage & Mandap Styling',
      'Cascading Floral & Lighting Ceilings',
      'Exclusive Vendor & Caterer Liaison',
      'Guest RSVP & Accommodation Mapping',
      'Bridal Styling & Glamour Spaces',
      'Flawless On-Site Runtime Execution'
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    desc: 'Establish your brand presence with precision-crafted corporate events. We coordinate conference layouts, award ceremonies, dual screens, audio arrays, and dinner galas with strict adherence to timeline schedules.',
    icon: Briefcase,
    color: '#10B981',
    image: '/corporate.jpg',
    features: [
      'Dual Screens & Curved LED Backdrop',
      'Professional Acoustics & Microphone Arrays',
      'Artist & Keynote Speaker Management',
      'Digital Registration & RFID Check-ins',
      'Bespoke Seating & Dining Protocols',
      'Branded Media Walls & Photobooths'
    ]
  },
  {
    id: 'concerts',
    title: 'Festivals & Concerts',
    desc: 'Unleash energy on a grand scale. We build stadium and outdoor concert layouts complete with high-end PA setups, lasers, fire effects, crowd safety parameters, artist green rooms, and licensing handles.',
    icon: Music,
    color: '#8B5CF6',
    image: '/concert.jpg',
    features: [
      'High-End PA & Sound Engineering',
      'Laser Light Mapping & Fire Pyrotechnics',
      'Crowd Control Barriers & Security Mapping',
      'Artist Lounge & VIP Styling Rooms',
      'Local Permits, Fire & Sound Licences',
      'Staging & Structural Safety Checks'
    ]
  },
  {
    id: 'decorations',
    title: 'Bespoke Decorations',
    desc: 'Transform any blank space into a visual wonderland. Our decoration crew customizes theme arches, glass flooring, floral walls, neon hangings, and table setups to give your events a signature artistic look.',
    icon: Palette,
    color: '#F59E0B',
    image: '/decor-details.jpg',
    features: [
      'Custom Theme Centerpieces & Linens',
      'Floral Backdrop Architecture',
      'Glass & Acrylic Stage Walkways',
      'Intelligent LED Accent Uplighting',
      'Entrance Arches & Canopy Walkways',
      'Bespoke Interactive Photobooth Sets'
    ]
  }
];

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
