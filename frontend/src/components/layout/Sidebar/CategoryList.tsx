// src/components/layout/Sidebar/CategoryList.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Category, SubCategory } from "@/types/user";
import { ChevronRight } from "lucide-react";

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList = ({ categories }: CategoryListProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="p-2 space-y-1">
        {categories.map((category) => (
          <div key={category.id} className="space-y-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="primary"
                  className="justify-between w-full transition-colors hover:bg-brand-green/10 group"
                  onClick={() => toggleCategory(category.id)}>
                  <div className="flex items-center">
                    <category.icon className="w-4 h-4 mr-2 text-brand-green group-hover:text-brand-green" />
                    <span className="font-semibold group-hover:text-brand-green">
                      {category.name}
                    </span>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                      expandedCategory === category.id ? "rotate-90" : ""
                    }`}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-card border-border">
                <p>{category.description}</p>
              </TooltipContent>
            </Tooltip>

            {expandedCategory === category.id && (
              <div className="ml-6 space-y-1 animate-in slide-in-from-left-2">
                {category.subcategories.map((subcategory: SubCategory) => (
                  <Button
                    key={subcategory.id}
                    variant="primary"
                    className="justify-between w-full text-sm transition-colors hover:bg-brand-green/10 group">
                    <span className="group-hover:text-brand-green">
                      {subcategory.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {subcategory.itemCount}
                    </span>
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
