import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, User, Calendar, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogData';
import styles from './post.module.css';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  // Calculate read time roughly
  const wordCount = post.content.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.article}>
        <Link href="/blog" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Back to Articles</span>
        </Link>

        <article>
          <header className={styles.header}>
            <span className={styles.tag}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <User size={16} className={styles.metaIcon} />
                <span>By {post.author}</span>
              </div>
              <div className={styles.metaItem}>
                <Calendar size={16} className={styles.metaIcon} />
                <span>{post.date}</span>
              </div>
              <div className={styles.metaItem}>
                <BookOpen size={16} className={styles.metaIcon} />
                <span>{readTime} Min Read</span>
              </div>
            </div>
          </header>

          <div className={styles.imageWrapper}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              quality={90}
              className={styles.image}
            />
          </div>

          <div className={styles.body}>
            {/* Split content by double newlines and render paragraphs/headings */}
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('###') || paragraph.startsWith('##')) {
                const cleanHeading = paragraph.replace(/[#\s]+/g, '');
                return <h2 key={index}>{cleanHeading}</h2>;
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
