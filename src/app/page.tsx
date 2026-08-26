import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import ImageStream from "@/components/ImageStream";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <StatsSection />
        <Testimonials />
        <ImageStream />
      </main>
      <Footer />
    </>
  );
}
