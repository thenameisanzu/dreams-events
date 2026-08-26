'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ImageStream.module.css';

const streamImages = [
  { src: '/hero-bg.jpg', alt: 'Luxury Wedding Stage Decor' },
  { src: '/concert.jpg', alt: 'Stadium Concert Sound and Lights' },
  { src: '/corporate.jpg', alt: 'Tech Conference Executive Stage' },
  { src: '/decor-details.jpg', alt: 'Traditional Sadya Floral Backdrop' },
  { src: '/hero-bg.jpg', alt: 'Kumarakom Lakeside Canopy Ceremony' },
  { src: '/concert.jpg', alt: 'Live Music Festival Laser Show' },
  { src: '/corporate.jpg', alt: 'VIP Panel Seminar Setup' },
  { src: '/decor-details.jpg', alt: 'Floral Gateway Entrance Decor' },
  { src: '/hero-bg.jpg', alt: 'Intimate Home Birthday Anniversary Canopy' }
];

export default function ImageStream() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Title */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Our Work, <span className={styles.titleAccent}>Front and Centre.</span>
          </h2>
          <p className={styles.subtitle}>
            A 3D visual showcase leading with design excellence. Explore the moments of luxury styling, stadium rigging, and elegant floral installations.
          </p>
        </div>

        {/* 3D Perspective Image Stream Corridor */}
        <div className={styles.streamWrapper}>
          <div className={styles.stream}>
            {streamImages.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.streamItem} ${styles[`item-${idx}`]}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100px, 150px"
                  className={styles.img}
                  quality={70}
                />
                <div className={styles.overlay}>
                  <p className={styles.caption}>{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className={styles.footerCta}>
          <p className={styles.ctaText}>
            A corridor built on events that left a lasting impression.
          </p>
          <Link href="/gallery">
            <button className={styles.ctaBtn}>Explore Our Gallery</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
