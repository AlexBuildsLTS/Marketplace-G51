// src/components/layout/Sidebar/SidebarFooter.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Facebook,
  Instagram,
  HelpCircle,
  FileText,
  Shield,
} from "lucide-react";

export const SidebarFooter = () => {
  return (
    <div className="p-4 border-t border-border/40">
      <div className="flex justify-center mb-4 space-x-2">
        {[
          { icon: Github, label: "GitHub" },
          { icon: Twitter, label: "Twitter" },
          { icon: Facebook, label: "Facebook" },
          { icon: Instagram, label: "Instagram" },
        ].map(({ icon: Icon, label }) => (
          <Button
            key={label}
            variant="ghost"
            size="icon"
            className="hover:bg-brand-green/10 group"
          >
            <Icon className="w-4 h-4 text-muted-foreground group-hover:text-brand-green" />
            <span className="sr-only">{label}</span>
          </Button>
        ))}
      </div>
      <div className="space-y-1">
        {[
          { icon: HelpCircle, label: "Help Center" },
          { icon: FileText, label: "Terms of Service" },
          { icon: Shield, label: "Privacy Policy" },
        ].map(({ icon: Icon, label }) => (
          <Button
            key={label}
            variant="ghost"
            size="sm"
            className="justify-start w-full hover:bg-brand-green/10 group"
          >
            <Icon className="w-4 h-4 mr-2 text-muted-foreground group-hover:text-brand-green" />
            <span className="group-hover:text-brand-green">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
