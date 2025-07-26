import { LucideIcon } from "lucide-react";
import { ResumeValues } from "./validation";

//  Landing Page Type
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

//  Editor Page Type
export interface EditorBreadcrumbsProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

export interface EditorFooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

export interface EditorFormProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
}

