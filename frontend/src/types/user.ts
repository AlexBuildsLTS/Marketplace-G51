// src/types/user.ts
import { LucideIcon } from "lucide-react";

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'buyer' | 'seller';
  avatar?: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  seller: User;
  createdAt: Date;
}

export interface SubCategory {
  id: string;
  name: string;
  itemCount: number;
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  subcategories: SubCategory[];
}
