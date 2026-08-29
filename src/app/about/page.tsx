'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './about.module.css';

const milestones = [
  {
    year: '2014',
    title: 'Where It Started',
    desc: 'Dreams Event Management & Decorations began with a simple idea — to bring thoughtful decoration and better coordination to celebrations.',
  },
  {
    year: '2018',
    title: 'Growing With Every Celebration',
    desc: 'As more clients trusted us with their special occasions, our work expanded across weddings, private celebrations, corporate gatherings, and larger productions.',
  },
  {
    year: '2022',
    title: 'A Stronger Creative Foundation',
    desc: 'We continued building our resources, creative capabilities, and event network to handle different types of celebrations with greater flexibility.',
  },
  {
    year: 'Today',
    title: 'Creating Meaningful Moments',
    desc: 'Today, Dreams brings together decoration, planning, coordination, and creative ideas to create celebrations that feel personal and memorable.',
  },
];

const values = [
  {
    number: '01',
    title: 'Thoughtful Design',
    description:
      'Every colour, detail, arrangement, and element has a purpose. We create designs that complement the occasion rather than simply fill a space.',
  },
  {
    number: '02',
    title: 'Personal Approach',
    description:
      'No two celebrations are exactly alike. We take the time to understand what matters to you and shape the experience around your ideas.',
  },
  {
    number: '03',
    title: 'Reliable Execution',
    description:
      'Beautiful ideas need careful execution. From preparation to the final detail, we coordinate the process so you can stay present in the moment.',
  },
];

const teamMembers = [
  {
    image: '/team/tony-mathew.png',
    name: 'Tony Mathew',
    role: 'Founder & Managing Director',
    bio: 'The driving force behind Dreams Event Management & Decorations, Tony leads the team with a vision built around thoughtful design, personal service, and seamless execution.',
  },
  {
    initials: 'AN',
    name: 'Anjali Nair',
    role: 'Creative & Event Design',
    bio: 'Anjali brings a strong creative eye to every project, working across themes, colour palettes, floral arrangements, styling, and visual details to give each celebration its own character.',
  },
  {
    initials: 'KK',
    name: 'Kabir Kurian',
    role: 'Event Operations',
    bio: 'Kabir focuses on the practical side of events, coordinating setup, production requirements, vendors, and on-ground execution to help everything come together smoothly.',
  },
];

export default function AboutPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* =========================================
          HERO
      ========================================= */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.heroContainer}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Behind Dreams
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            We believe every
            <br />
            <span className={styles.titleAccent}>
              celebration has a story.
            </span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            Dreams Event Management & Decorations is built around thoughtful
            design, personal attention, and dependable execution — helping
            people turn important occasions into beautiful memories.
          </motion.p>
        </div>

        <div className="grid-bg" />
      </section>

      {/* =========================================
          STORY
      ========================================= */}
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <motion.div
            className={styles.storyIntro}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div
              className={styles.eyebrow}
              variants={itemVariants}
            >
              OUR STORY
            </motion.div>

            <motion.h2 variants={itemVariants}>
              From an idea to
              <span> countless celebrations.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className={styles.storyBody}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              Dreams started with a simple belief: good events are not just
              about how they look. They are about how they make people feel.
            </motion.p>

            <motion.p variants={itemVariants}>
              What began with decoration and styling gradually grew into a
              broader event management journey. Along the way, we have worked
              with different people, venues, ideas, and celebrations — learning
              that every event deserves its own approach.
            </motion.p>

            <motion.p variants={itemVariants}>
              Today, we bring together creative styling, event coordination,
              decoration, and practical planning to create experiences that
              feel natural, considered, and genuinely personal.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          TIMELINE
      ========================================= */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>
              OUR JOURNEY
            </span>

            <h2>
              Growing with every <span>moment.</span>
            </h2>

            <p>
              A few milestones that have shaped the Dreams journey over the
              years.
            </p>
          </div>

          <motion.div
            className={styles.timeline}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={styles.timelineItem}
                variants={itemVariants}
              >
                <div className={styles.timelineMarker}>
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>
                    {milestone.year}
                  </div>

                  <h3>{milestone.title}</h3>

                  <p>{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          VALUES
      ========================================= */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <motion.div
            className={styles.valuesHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.span
              className={styles.eyebrow}
              variants={itemVariants}
            >
              WHAT WE BELIEVE
            </motion.span>

            <motion.h2 variants={itemVariants}>
              More Than Just
              <span> an Event.</span>
            </motion.h2>

            <motion.p variants={itemVariants}>
              We believe the best celebrations are the ones that feel
              effortless, personal, and true to the people behind them.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.valuesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
          >
            {values.map((value) => (
              <motion.article
                key={value.number}
                className={styles.valueCard}
                variants={itemVariants}
              >
                <span className={styles.valueNumber}>
                  {value.number}
                </span>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          FOUNDER
      ========================================= */}
      <section className={styles.founderSection}>
        <div className={styles.founderContainer}>

          {/* Founder Image */}
          <motion.div
            className={styles.founderVisual}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className={styles.founderGlow} />

            <Image
              src="/team/tony-mathew.png"
              alt="Tony Mathew - Founder of Dreams Event Management & Decorations"
              fill
              priority
              sizes="(max-width: 992px) 100vw, 500px"
              className={styles.founderImage}
            />

            <div className={styles.founderOverlay} />

            <div className={styles.founderSince}>
              <span>EST.</span>
              <strong>2014</strong>
            </div>
          </motion.div>

          {/* Founder Content */}
          <motion.div
            className={styles.founderContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.span
              className={styles.eyebrow}
              variants={itemVariants}
            >
              THE PERSON BEHIND DREAMS
            </motion.span>

            <motion.h2 variants={itemVariants}>
              Tony <span>Mathew.</span>
            </motion.h2>

            <motion.div
              className={styles.founderRole}
              variants={itemVariants}
            >
              Founder & Managing Director
            </motion.div>

            <motion.p variants={itemVariants}>
              Dreams was founded by Tony Mathew with the intention of
              creating celebrations that combine creativity with care.
            </motion.p>

            <motion.p variants={itemVariants}>
              From the first conversation with a client to the final
              detail at the venue, Tony believes in staying involved and
              understanding what makes each occasion meaningful.
            </motion.p>

            <motion.p variants={itemVariants}>
              His approach is simple — listen carefully, plan thoughtfully,
              create beautifully, and make sure the experience feels as
              good as the finished event looks.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          TEAM
      ========================================= */}
      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>

          <motion.div
            className={styles.teamHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.span
              className={styles.eyebrow}
              variants={itemVariants}
            >
              THE PEOPLE BEHIND DREAMS
            </motion.span>

            <motion.h2 variants={itemVariants}>
              Meet the <span>Team.</span>
            </motion.h2>

            <motion.p variants={itemVariants}>
              A small team bringing together creativity, planning, and
              on-ground experience to make every celebration feel special.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.teamGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
          >
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                className={styles.memberCard}
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >

                {/* Tony's image */}
                {member.image ? (
                  <div className={styles.memberImage}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="120px"
                      className={styles.memberImageInner}
                    />
                  </div>
                ) : (
                  <div className={styles.avatar}>
                    {member.initials}
                  </div>
                )}

                <h3>{member.name}</h3>

                <span className={styles.memberRole}>
                  {member.role}
                </span>

                <p>{member.bio}</p>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />

        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>
            LET&apos;S CREATE TOGETHER
          </span>

          <h2>
            Your moment deserves
            <span> to feel like yours.</span>
          </h2>

          <p>
            Tell us what you are planning. We will help you shape the idea,
            bring the details together, and create something worth remembering.
          </p>

          <a
            href="/contact"
            className={styles.ctaButton}
          >
            Start a Conversation
            <span>→</span>
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}