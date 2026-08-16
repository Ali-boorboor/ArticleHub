import IntroSection from "@/app/about/_components/IntroSection";
import ServicesSection from "@/app/about/_components/ServicesSection";

const page = () => {
  return (
    <main className="px-4 space-y-8 container mx-auto">
      <IntroSection />

      <ServicesSection />
    </main>
  );
};

export default page;
