import AdCard from "@/app/(Home)/_components/AdCard";
import IntroSection from "@/app/(Home)/_components/IntroSection";
import LatestArticlesSection from "@/app/(Home)/_components/LatestArticlesSection";
import ServicesSection from "@/app/(Home)/_components/ServicesSection";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-4 space-y-8 container mx-auto">
        <IntroSection />

        <ServicesSection />

        <LatestArticlesSection />

        <AdCard />
      </main>
    </>
  );
}
