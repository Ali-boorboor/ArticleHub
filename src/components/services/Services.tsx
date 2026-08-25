import ServiceCard from "@/components/services/ServiceCard";
import services from "@/constants/services";

const Services = () => {
  return (
    <section className="flex flex-wrap gap-4">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  );
};

export default Services;
