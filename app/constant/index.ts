import { Github, Linkedin, Instagram, MessageCircleMore } from "lucide-react";
import { Footer, Testimonials } from "@/lib/type";

export const testimonialsData: Testimonials[] = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    content:
      "Got 3x more interviews after using this AI resume builder. The suggestions were spot-on!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Marketing Manager",
    company: "Microsoft",
    content:
      "The AI understood my career goals and helped me highlight the right experiences.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Data Scientist",
    company: "Amazon",
    content:
      "Landed my dream job in 2 weeks. The job-specific optimization feature is incredible.",
    rating: 5,
  },
];

export const footerData: Footer = {
  links: [
    {
      title: "Product",
      items: [
        { label: "Templates", href: "#" },
        { label: "Examples", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Features", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Career Tips", href: "#" },
        { label: "Resume Guide", href: "#" },
        { label: "Interview Prep", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
  ],
  copyright: "Developed by Sagar Shah",
  socialLinks: [
    {
      href: "https://github.com/saga-r-code",
      icon: Github,
      style: "text-gray-500 hover:text-gray-600",
    },
    {
      href: "https://www.linkedin.com/in/thesagarshah",
      icon: Linkedin,
      style: "text-blue-500 hover:text-blue-600",
    },
    {
      href: "https://www.instagram.com/_sagar__1108",
      icon: Instagram,
      style: "text-pink-500 hover:text-pink-600",
    },
    {
      href: "https://wa.me/+919820938124",
      icon: MessageCircleMore,
      style: "text-green-500 hover:text-green-600",
    },
  ],
};
