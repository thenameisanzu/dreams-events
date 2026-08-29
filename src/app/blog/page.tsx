'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import styles from './blog.module.css';

const categories = ['All', 'Weddings', 'Birthdays', 'Decorations'];

export default function BlogIndexPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPosts =
    activeFilter === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  return (
    <div className={styles.page}>
      <Header />

      {/* =========================
          BLOG HERO
      ========================== */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Dreams Journal</span>

          <h1 className={styles.title}>
            Ideas, Inspiration &{' '}
            <span className={styles.titleAccent}>Celebrations</span>
          </h1>

          <p className={styles.subtitle}>
            Discover ideas, decoration inspiration, celebration themes, and
            behind-the-scenes stories from events created by Dreams.
          </p>
        </div>

        <div className="grid-bg" />
      </section>

      {/* =========================
          BLOG CONTENT
      ========================== */}
      <section className={styles.content}>

        {/* Category Filters */}
        <div className={styles.filterBar}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterBtn} ${activeFilter === category
                  ? styles.filterBtnActive
                  : ''
                }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => {
              const wordCount = post.content
                ? post.content.split(/\s+/).length
                : 120;

              const readTime =
                Math.max(1, Math.ceil(wordCount / 200)) + ' min read';

              return (
                <motion.article
                  key={post.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                  }}
                  className={styles.card}
                >
                  {/* Image */}
                  <Link
                    href={`/blog/${post.id}`}
                    className={styles.cardImgArea}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="
                        (max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw
                      "
                      quality={85}
                      className={styles.cardImg}
                    />

                    {/* Image Overlay */}
                    <div className={styles.imageOverlay}>
                      <span className={styles.imageCategory}>
                        {post.category}
                      </span>

                      <span className={styles.readMore}>
                        Read Story →
                      </span>
                    </div>
                  </Link>

                  {/* Details */}
                  <div className={styles.cardDetails}>

                    {/* Meta */}
                    <div className={styles.cardMeta}>
                      <span>by {post.author}</span>

                      <span className={styles.metaDot}>
                        •
                      </span>

                      <span>{post.date}</span>

                      <span className={styles.metaDot}>
                        •
                      </span>

                      <span>{readTime}</span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.id}`}>
                      <h2 className={styles.cardTitle}>
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className={styles.cardExcerpt}>
                      {post.excerpt}
                    </p>

                    {/* Read Link */}
                    <Link
                      href={`/blog/${post.id}`}
                      className={styles.readLink}
                    >
                      Read article
                      <span>→</span>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className={styles.emptyState}>
            <h3>No stories found</h3>
            <p>
              We don't have any articles in this category yet.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}