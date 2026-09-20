import { HeroSection, WhyUsSection, CtaSection } from "@/components/sitio/home";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <WhyUsSection />
      <CtaSection />
    </main>
  );
}
