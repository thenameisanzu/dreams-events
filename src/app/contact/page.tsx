'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './contact.module.css';

interface FormState {
  name: string;
  email: string;
  phone: string;
  category: string;
  date: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  date?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    category: '',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Phone number is invalid';
    }
    if (!formData.category) tempErrors.category = 'Please select a service category';
    if (!formData.date) tempErrors.date = 'Event date is required';
    if (!formData.message.trim()) tempErrors.message = 'Please specify brief details of your request';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error dynamically on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
      date: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* Contact Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.badge}>Get In Touch</span>
          <h1 className={styles.title}>
            Plan Your <span className={styles.titleAccent}>Masterpiece</span>
          </h1>
          <p className={styles.subtitle}>
            Have an event concept in mind? Let’s map it. Connect with our decorators and technical directors to set your consultation.
          </p>
        </div>
        <div className="grid-bg" />
      </section>

      {/* Main Grid Content */}
      <section className={styles.content}>
        {/* Info Column */}
        <div className={styles.infoCol}>
          <div className={styles.infoText}>
            <h2>Consultation Office</h2>
            <p>Our creative design office is open Monday to Saturday. Walk-ins are welcome by prior booking to ensure our stylists are available.</p>
          </div>

          <ul className={styles.infoDetails}>
            <li className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <MapPin size={22} />
              </div>
              <div>
                <span className={styles.infoLabel}>Headquarters</span>
                <span className={styles.infoVal}>Kidangoor South, Kottayam, Kerala - 686583, India</span>
              </div>
            </li>
            <li className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <Phone size={20} />
              </div>
              <div>
                <span className={styles.infoLabel}>Direct Line</span>
                <span className={styles.infoVal}>+91 85938 90765</span>
              </div>
            </li>
            <li className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <Mail size={20} />
              </div>
              <div>
                <span className={styles.infoLabel}>Email Address</span>
                <span className={styles.infoVal}>hello@dreamsevents.com</span>
              </div>
            </li>
            <li className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <Clock size={20} />
              </div>
              <div>
                <span className={styles.infoLabel}>Creative Hours</span>
                <span className={styles.infoVal}>Open 24 Hours</span>
              </div>
            </li>
          </ul>

          {/* Custom Interactive Map Placeholder */}
          <a 
            href="https://share.google/WTjXVVUWdRoSpqoad" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ display: 'block', width: '100%' }}
          >
            <div className={styles.mapMock}>
              <div className={styles.mapGrid} />
              <MapPin size={36} className={styles.mapMarker} />
              <span className={styles.mapText}>Dreams Event Warehouse</span>
              <span className={styles.mapSub}>Click to open location in Google Maps</span>
            </div>
          </a>
        </div>

        {/* Form Column */}
        <div className={styles.formCol}>
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={styles.successOverlay}
              >
                <div className={styles.successIcon}>
                  <Check size={40} />
                </div>
                <h3 className={styles.successTitle}>Consultation Booked!</h3>
                <p className={styles.successDesc}>
                  We received your request. One of our lead stylists will reach out within 24 hours to schedule your custom session.
                </p>
                <button className={styles.successBtn} onClick={resetForm}>
                  Send Another Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="Aishwarya Rai"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="aishwarya@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.input}
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="category" className={styles.label}>Event Type</label>
                <select
                  id="category"
                  name="category"
                  className={styles.select}
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  <option value="weddings">Luxury Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="concerts">Festival / Concert</option>
                  <option value="decorations">Bespoke Decoration</option>
                  <option value="other">Theme Party / Other</option>
                </select>
                {errors.category && <span className={styles.errorText}>{errors.category}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="date" className={styles.label}>Target Event Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className={styles.input}
                  value={formData.date}
                  onChange={handleInputChange}
                />
                {errors.date && <span className={styles.errorText}>{errors.date}</span>}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Brief Design/Logistics Request</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={styles.textarea}
                placeholder="Tell us about your venue, number of guests, and styling ideas..."
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && <span className={styles.errorText}>{errors.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
