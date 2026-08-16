import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import services from "@/constants/services";

const ServicesSection = () => {
  return (
    <section className="flex flex-wrap gap-4">
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
    </section>
  );
};

export default ServicesSection;
