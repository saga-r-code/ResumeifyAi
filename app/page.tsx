"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, FileText, Star, Moon, Sun, CheckCircle, Brain, Target, Download } from "lucide-react"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content",
      description: "Smart suggestions for skills, experience, and achievements tailored to your industry",
    },
    {
      icon: Sparkles,
      title: "Professional Templates",
      description: "Choose from 50+ ATS-friendly templates designed by career experts",
    },
    {
      icon: Target,
      title: "Job-Specific Optimization",
      description: "Automatically optimize your resume for specific job postings and keywords",
    },
    {
      icon: Download,
      title: "Multi-Format Export",
      description: "Export to PDF, Word, or directly apply to 100+ job platforms",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      content: "Got 3x more interviews after using this AI resume builder. The suggestions were spot-on!",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Manager",
      company: "Microsoft",
      content: "The AI understood my career goals and helped me highlight the right experiences.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Amazon",
      content: "Landed my dream job in 2 weeks. The job-specific optimization feature is incredible.",
      rating: 5,
    },
  ]

  const companies = ["Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix", "Spotify", "Uber"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ResumeAI
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm sm:text-base">
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
            Create professional, ATS-optimized resumes in minutes. Our AI analyzes job descriptions and suggests the
            perfect content to land your dream job.
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

      {/* Features Section - Bento Layout */}
      <section className="container mx-auto py-24 bg-muted/30 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our AI Resume Builder?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Leverage cutting-edge AI technology to create resumes that get noticed by recruiters and ATS systems.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {/* Large Feature Card - AI-Powered Content */}
            <Card className="md:col-span-3 lg:col-span-4 md:row-span-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 overflow-hidden group">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col justify-between relative">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Brain className="h-20 w-20 sm:h-24 sm:w-24" />
                </div>
                <div>
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 sm:mb-6">
                    <Brain className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AI-Powered Content Generation</h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Our advanced AI analyzes millions of successful resumes and job postings to suggest the most
                    impactful content for your specific industry and role.
                  </p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Industry-specific suggestions</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Achievement quantification</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Skills optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medium Feature Card - Templates */}
            <Card className="md:col-span-3 lg:col-span-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">50+ Professional Templates</h3>
                  <p className="text-muted-foreground text-sm">
                    Choose from expertly designed, ATS-friendly templates that make your resume stand out.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-10 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm border-2 border-white"></div>
                    <div className="w-8 h-10 bg-gradient-to-b from-purple-400 to-purple-600 rounded-sm border-2 border-white"></div>
                    <div className="w-8 h-10 bg-gradient-to-b from-green-400 to-green-600 rounded-sm border-2 border-white"></div>
                    <div className="w-8 h-10 bg-gradient-to-b from-orange-400 to-orange-600 rounded-sm border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">+46</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medium Feature Card - Job Optimization */}
            <Card className="md:col-span-3 lg:col-span-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Job-Specific Optimization</h3>
                  <p className="text-muted-foreground text-sm">
                    Automatically tailor your resume for specific job postings with keyword optimization.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Match Score</span>
                    <span className="font-semibold text-green-600">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wide Feature Card - Export Options */}
            <Card className="md:col-span-6 lg:col-span-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardContent className="p-6 h-full flex flex-col sm:flex-row items-center justify-between">
                <div className="flex-1 mb-4 sm:mb-0 sm:mr-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Format Export & Integration</h3>
                  <p className="text-muted-foreground text-sm">
                    Export to PDF, Word, or directly apply to 100+ job platforms including LinkedIn, Indeed, and more.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                      <FileText className="h-5 w-5 text-red-500" />
                      <span className="text-sm font-medium">PDF</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <span className="text-sm font-medium">Word</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                      <Target className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                      <Sparkles className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium">+97 more</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="md:col-span-2 lg:col-span-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20">
              <CardContent className="p-6 h-full flex flex-col justify-center text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">3.2x</div>
                <div className="text-sm text-muted-foreground mb-2">More Interviews</div>
                <div className="text-xs text-muted-foreground">Average increase reported by users</div>
              </CardContent>
            </Card>

            {/* Success Rate Card */}
            <Card className="md:col-span-2 lg:col-span-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
              <CardContent className="p-6 h-full flex flex-col justify-center text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">89%</div>
                <div className="text-sm text-muted-foreground mb-2">Success Rate</div>
                <div className="text-xs text-muted-foreground">Users who got interviews within 30 days</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof - Companies */}
      <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground mb-8 text-base sm:text-lg">
            Trusted by professionals at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-xl sm:text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Join thousands of professionals who landed their dream jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic text-base sm:text-lg">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-base sm:text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-24 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Join over 100,000 professionals who've upgraded their careers with AI-powered resumes.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white text-blue-600 hover:bg-gray-100 group"
          >
            Start Building Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-xs sm:text-sm mt-4 opacity-75">
            Free to start • No credit card required • 14-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ResumeAI
                </span>
              </div>
              <p className="text-muted-foreground text-sm">Build professional resumes with the power of AI.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Career Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Resume Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Interview Prep
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 ResumeAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
