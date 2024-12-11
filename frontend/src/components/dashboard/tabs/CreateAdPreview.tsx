// src/components/dashboard/tabs/CreateAdPreview.tsx
import React from "react";
import { Badge } from "@/components/ui";

interface CreateAdPreviewProps {
  item: {
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    // Add other necessary fields
  };
}

export const CreateAdPreview: React.FC<CreateAdPreviewProps> = ({ item }) => {
  return (
    <div className="p-4 border rounded-md shadow-md border-border/40">
      <img
        src={item.image}
        alt={item.title}
        className="object-cover w-full h-48 rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-muted-foreground">{item.description}</p>
      <div className="flex items-center justify-between mt-2">
        <Badge variant="accent">{item.category}</Badge>
        <span className="text-xl font-bold">{`$${item.price}`}</span>
      </div>
    </div>
  );
};
