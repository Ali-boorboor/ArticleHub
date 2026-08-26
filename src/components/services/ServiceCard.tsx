import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import services from "@/constants/services";

type ServiceCardProps = Omit<(typeof services)[number], "id">;

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="min-w-64 flex-1">
      <CardContent className="grid gap-3 auto-rows-auto justify-items-center sm:justify-items-start">
        <span
          className="bg-primary/30 text-sidebar-primary w-fit p-2 rounded-lg [&_svg]:size-6 shadow-md shadow-primary/30"
          aria-hidden
        >
          {icon}
        </span>
        <CardTitle>
          <h3 className="line-clamp-1">{title}</h3>
        </CardTitle>
        <CardDescription className="line-clamp-2 text-center sm:text-left">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
