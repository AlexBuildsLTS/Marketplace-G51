// src/hooks/useDragAndDrop.ts
import { useState, DragEvent } from "react";

interface UseDragAndDropProps {
  maxFiles?: number;
  maxSize?: number; // in MB
  onFileAccepted: (file: string) => void;
}

import { useToast } from "@/hooks/use-toast";
export const useDragAndDrop = ({
  maxFiles = 4,
  maxSize = 5,
  onFileAccepted,
}: UseDragAndDropProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);

    if (files.length > maxFiles) {
      toast({
        title: "Error",
        description: `Maximum ${maxFiles} files allowed`,
      });
      return;
    }

    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Error",
          description: "Only image files are allowed",
        });
        continue;
      }

      if (file.size > maxSize * 1024 * 1024) {
        toast({
          title: "Error",
          description: `Image size should be less than ${maxSize}MB`,
        });
        continue;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onFileAccepted(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    isDragging,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
