import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div style={{ background: '#0A0A0C', color: '#F3F4F6', minHeight: '100vh' }}>
      <Header />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '10rem 2rem 6rem' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of Service</h1>
        <p style={{ color: '#9CA3AF', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Welcome to Dreams Event management & Decorations. By accessing our website, you agree to comply with our general usage terms.
        </p>
        <h2 style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Consultation & Booking</h2>
        <p style={{ color: '#9CA3AF', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Scheduling a consultation does not constitute a formal event booking contract. Service execution parameters are only active after double-signing our Master Service Agreement (MSA) and securing token advances.
        </p>
        <h2 style={{ fontFamily: 'var(--font-outfit), sans-serif', fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Copyright & Styling Rights</h2>
        <p style={{ color: '#9CA3AF', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          All decor designs, layouts, blueprints, and digital photography displayed are properties of Dreams Event management & Decorations. Reproduction is prohibited.
        </p>
      </main>
      <Footer />
    </div>
  );
}
