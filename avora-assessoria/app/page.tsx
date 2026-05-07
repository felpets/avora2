import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import HowWorks from "@/components/HowWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Problems />
      <HowWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
