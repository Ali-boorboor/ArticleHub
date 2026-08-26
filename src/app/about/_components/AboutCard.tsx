import aboutCards from "@/app/about/_constants/aboutCards";
import { Separator } from "@/components/ui/separator";

type AboutCardProps = Omit<(typeof aboutCards)[number], "id">;

const AboutCard = ({ icon, title, text }: AboutCardProps) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <span className="size-6 text-primary drop-shadow-xs drop-shadow-primary">
          {icon}
        </span>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-muted-foreground">{text}</p>
        </div>
      </div>

      <Separator
        className="bg-foreground/30 hidden xl:block last:hidden"
        orientation="vertical"
      />
    </>
  );
};

export default AboutCard;
