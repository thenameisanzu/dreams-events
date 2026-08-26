'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    feedback: "Dreams transformed our venue in Kumarakom into a magical setup. The floral ceilings, cascading traditional lamps, and lighting layout left our 600 guests speechless. Their execution was absolutely flawless!",
    name: "Anjali & Gautham Krishnan",
    role: "Bride & Groom | Kerala Destination Wedding"
  },
  {
    feedback: "Managing our state convention with 1,200 delegates requires absolute precision. The team handled our staging, dual screens, live broadcasting, and seating layout perfectly. Highly recommended!",
    name: "Vinod Kumar",
    role: "Convenor, Kerala IT Summit"
  },
  {
    feedback: "The stage design, acoustics, and laser mapping for our concert in Kochi was insane. They handled the crowd barriers, crew passes, and main artists with the highest professionalism. Best event team in Kerala.",
    name: "Kabir Khan",
    role: "Co-founder, Kochi Music Festival"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' as const }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' as const }
    })
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>
            What Our Clients <span className={styles.titleAccent}>Say</span>
          </h2>
          <p className={styles.desc}>
            Hear directly from the couples, corporates, and producers who trusted Dreams to bring their event concepts to life.
          </p>
        </div>

        <div className={styles.sliderWrapper}>
          <div className={styles.sliderTrack}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.card}
              >
                <Quote size={50} className={styles.quoteIcon} />
                <blockquote className={styles.feedback}>
                  &ldquo;{testimonials[index].feedback}&rdquo;
                </blockquote>
                <div className={styles.author}>
                  <cite className={styles.name}>{testimonials[index].name}</cite>
                  <span className={styles.role}>{testimonials[index].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button className={styles.btn} onClick={handlePrev} aria-label="Previous Testimonial">
              <ArrowLeft size={20} />
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${index === i ? styles.dotActive : ''}`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className={styles.btn} onClick={handleNext} aria-label="Next Testimonial">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
