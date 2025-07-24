import React from "react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-2 text-sm sm:text-base rounded-full "
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Powered by Advanced AI
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Build Your Perfect Resume with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Intelligence
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Create professional, ATS-optimized resumes in minutes. Our AI analyzes
          job descriptions and suggests the perfect content to land your dream
          job.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group"
          >
            Create My Resume
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent"
          >
            View Examples
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
            No credit card required
          </div>
          <div className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
            Free templates included
          </div>
          <div className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
            ATS-optimized
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
