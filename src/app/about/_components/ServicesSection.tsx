import Services from "@/components/services";

const ServicesSection = () => {
  return (
    <section className="text-center space-y-4">
      <hgroup className="space-y-2">
        <h3 className="font-semibold text-xl sm:text-2xl">What We Do</h3>
        <p className="text-muted-foreground">
          ArticleHub helps you stay informed, inspired, and ahead by connecting
          you with ideas that matter.
        </p>
      </hgroup>

      <Services />
    </section>
  );
};

export default ServicesSection;
