import AdCard from "@/app/(Home)/_components/AdCard";
import IntroSection from "@/app/(Home)/_components/IntroSection";
import LatestArticlesSection from "@/app/(Home)/_components/LatestArticlesSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-4 space-y-8 container mx-auto">
        <IntroSection />

        <Services />

        <LatestArticlesSection />

        <AdCard />
      </main>

      <Footer />
    </>
  );
}
