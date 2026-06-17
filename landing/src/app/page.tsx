import Reveal from "@/components/Reveal";
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

export default function Page() {
  return (
    <>
      <Reveal />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
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
