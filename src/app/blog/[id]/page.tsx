'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { blogPosts } from '@/data/blogData';

import styles from './post.module.css';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { id } = use(params);

  const post = blogPosts.find(
    (item) => String(item.id) === String(id)
  );

  /* =========================================
     POST NOT FOUND
  ========================================= */

  if (!post) {
    return (
      <div className={styles.page}>
        <Header />

        <main className={styles.notFound}>
          <div className={styles.notFoundContent}>

            <span className={styles.notFoundNumber}>
              404
            </span>

            <h1>
              Story Not Found
            </h1>

            <p>
              The blog post you are looking for
              could not be found.
            </p>

            <Link
              href="/blog"
              className={styles.backButton}
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

          </div>
        </main>

        <Footer />
      </div>
    );
  }

  /* =========================================
     READ TIME
  ========================================= */

  const wordCount = post.content
    ? post.content.trim().split(/\s+/).length
    : 120;

  const readTime =
    `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  return (
    <div className={styles.page}>

      <Header />

      <main>

        {/* =====================================
            ARTICLE HERO
        ===================================== */}

        <section className={styles.hero}>

          <div className={styles.heroContainer}>

            {/* Back to Blog */}

            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Link
                href="/blog"
                className={styles.backLink}
              >
                <ArrowLeft size={17} />
                <span>
                  Back to Blog
                </span>
              </Link>
            </motion.div>


            {/* Category */}

            <motion.div
              className={styles.categoryWrapper}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
            >
              <span className={styles.category}>
                {post.category}
              </span>
            </motion.div>


            {/* Title */}

            <motion.h1
              className={styles.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.15,
              }}
            >
              {post.title}
            </motion.h1>


            {/* Excerpt */}

            <motion.p
              className={styles.excerpt}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
            >
              {post.excerpt}
            </motion.p>


            {/* Meta */}

            <motion.div
              className={styles.meta}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.35,
              }}
            >

              <span className={styles.author}>
                By {post.author}
              </span>

              <span className={styles.metaDot}>
                •
              </span>

              <span className={styles.metaItem}>
                <Calendar size={15} />
                {post.date}
              </span>

              <span className={styles.metaDot}>
                •
              </span>

              <span className={styles.metaItem}>
                <Clock size={15} />
                {readTime}
              </span>

            </motion.div>

          </div>

        </section>


        {/* =====================================
            FEATURED IMAGE
        ===================================== */}

        <section className={styles.featuredSection}>

          <motion.div
            className={styles.featuredImage}
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
          >

            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              quality={90}
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 95vw,
                1200px
              "
              className={styles.featuredImg}
            />

          </motion.div>

        </section>


        {/* =====================================
            ARTICLE CONTENT
        ===================================== */}

        <section className={styles.articleSection}>

          <article className={styles.article}>

            <div className={styles.articleContent}>

              {post.content
                ?.split('\n')
                .map((paragraph, index) => {

                  const text = paragraph.trim();

                  /* Empty line */

                  if (!text) {
                    return (
                      <div
                        key={index}
                        className={styles.paragraphSpace}
                      />
                    );
                  }


                  /* H1 markdown */

                  if (text.startsWith('# ')) {
                    return (
                      <h2 key={index}>
                        {text.substring(2)}
                      </h2>
                    );
                  }


                  /* H2 markdown */

                  if (text.startsWith('## ')) {
                    return (
                      <h2 key={index}>
                        {text.substring(3)}
                      </h2>
                    );
                  }


                  /* H3 markdown */

                  if (text.startsWith('### ')) {
                    return (
                      <h3 key={index}>
                        {text.substring(4)}
                      </h3>
                    );
                  }


                  /* Bullet */

                  if (text.startsWith('- ')) {
                    return (
                      <div
                        key={index}
                        className={styles.bullet}
                      >
                        <span className={styles.bulletDot}>
                          •
                        </span>

                        <span>
                          {text.substring(2)}
                        </span>
                      </div>
                    );
                  }


                  /* Numbered list */

                  if (/^\d+\.\s/.test(text)) {
                    return (
                      <div
                        key={index}
                        className={styles.numbered}
                      >
                        {text}
                      </div>
                    );
                  }


                  /* Normal paragraph */

                  return (
                    <p key={index}>
                      {text}
                    </p>
                  );

                })}

            </div>

          </article>

        </section>


        {/* =====================================
            BOTTOM NAVIGATION
        ===================================== */}

        <section className={styles.bottomNavigation}>

          <div className={styles.bottomLine} />

          <Link
            href="/blog"
            className={styles.exploreLink}
          >
            <span className={styles.exploreIcon}>
              <ArrowLeft size={18} />
            </span>

            <span>
              Explore More Stories
            </span>
          </Link>

        </section>

      </main>

      <Footer />

    </div>
  );
}