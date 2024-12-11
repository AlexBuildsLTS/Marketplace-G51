// src/components/layout/Sidebar/SearchBar.tsx
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search categories..."
        className="pl-8 bg-secondary/50 border-border/40 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
      />
    </div>
  );
};
