import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import services from "@/constants/services";

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

      <div className="flex flex-wrap gap-4">
        {services.map((service) => (
          <Card className="min-w-64 flex-1" key={service.id}>
            <CardContent className="grid gap-3 auto-rows-auto justify-items-center sm:justify-items-start">
              <span
                className="bg-primary/30 text-primary w-fit p-2 rounded-lg [&_svg]:size-6 shadow-md shadow-primary/30"
                aria-hidden
              >
                {service.icon}
              </span>
              <CardTitle>
                <h3 className="line-clamp-1">{service.title}</h3>
              </CardTitle>
              <CardDescription className="line-clamp-2 text-center sm:text-left">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
