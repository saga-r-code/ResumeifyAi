"use client";

import Cta from "./LandingPage/components/Cta";
import Features from "./LandingPage/components/Features";
import Footer from "./LandingPage/components/Footer";
import Header from "./LandingPage/components/Header";
import Hero from "./LandingPage/components/Hero";
import Testimonials from "./LandingPage/components/Testimonials";

export default function Page() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">

      {/* Site Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <Cta />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
