import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon,
  iconColor = "text-accent"
}: FeatureCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="mb-4">
          <div className={`${iconColor} bg-secondary inline-flex p-3 rounded-lg`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}