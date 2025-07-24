import { LucideIcon } from "lucide-react";

export interface Testimonials {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface Footer {
  links: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
  copyright: string;
  socialLinks: {
    href: string;
    icon: LucideIcon;
    style: string;
  }[];
}
