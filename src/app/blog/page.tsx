'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import styles from './blog.module.css';

const categories = ['All', 'Weddings', 'Corporate', 'Concerts'];

export default function BlogIndexPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPosts = activeFilter === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <div className={styles.page}>
      <Header />

      {/* Blog Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Dreams Insights</span>
          <h1 className={styles.title}>
            Event Planning & <span className={styles.titleAccent}>Design Guide</span>
          </h1>
          <p className={styles.subtitle}>
            Read behind-the-scenes breakdowns of luxury event staging, wedding themes, laser maps, and production checklists.
          </p>
        </div>
        <div className="grid-bg" />
      </section>

      {/* Filter and Grid Content */}
      <section className={styles.content}>
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={styles.card}
              >
                <div className={styles.cardImgArea}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    className={styles.cardImg}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardTag}>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                  </Link>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className={styles.cardLink}>
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
