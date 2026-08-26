import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div style={{ background: '#0A0A0C', color: '#F3F4F6', minHeight: '100vh' }}>
      <Header />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '10rem 2rem 6rem' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
        <p style={{ color: '#9CA3AF', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          At Dreams Event Management & Decorations, we respect your privacy. This policy details how we collect, store, and utilize client details provided through our consultation booking forms.
        </p>
        <h2 style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Information Collection</h2>
        <p style={{ color: '#9CA3AF', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          We collect names, emails, telephone numbers, event details, and target dates solely for planning consultation logistics. We do not sell or lease client database records to third parties.
        </p>
        <h2 style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Contact Us</h2>
        <p style={{ color: '#9CA3AF', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          If you have any questions regarding your data privacy, email us at <strong>privacy@dreamsevents.com</strong>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
