import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import HappyMoments from "@/components/HappyMoments";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <StatsSection />
        <HappyMoments />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
