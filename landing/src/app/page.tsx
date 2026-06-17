import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import SocialProof from "@/components/SocialProof";
import Gallery from "@/components/Gallery";
import ConversionSection from "@/components/ConversionSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function HomePage() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Numbers />
        <Services />
        <WhyChooseUs />
        <SocialProof />
        <Gallery />
        <ConversionSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
