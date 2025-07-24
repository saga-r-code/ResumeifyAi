import React from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Sparkles,
  FileText,
  CheckCircle,
  Brain,
  Target,
  Download,
} from "lucide-react";

const Features = () => {
  return (
    <section className="container mx-auto py-24 bg-muted/30 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our AI Resume Builder?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Leverage cutting-edge AI technology to create resumes that get
            noticed by recruiters and ATS systems.
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
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  AI-Powered Content Generation
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  Our advanced AI analyzes millions of successful resumes and
                  job postings to suggest the most impactful content for your
                  specific industry and role.
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
                <h3 className="text-xl font-semibold mb-3">
                  50+ Professional Templates
                </h3>
                <p className="text-muted-foreground text-sm">
                  Choose from expertly designed, ATS-friendly templates that
                  make your resume stand out.
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
                <h3 className="text-xl font-semibold mb-3">
                  Job-Specific Optimization
                </h3>
                <p className="text-muted-foreground text-sm">
                  Automatically tailor your resume for specific job postings
                  with keyword optimization.
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
                <h3 className="text-xl font-semibold mb-2">
                  Multi-Format Export & Integration
                </h3>
                <p className="text-muted-foreground text-sm">
                  Export to PDF, Word, or directly apply to 100+ job platforms
                  including LinkedIn, Indeed, and more.
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
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                3.2x
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                More Interviews
              </div>
              <div className="text-xs text-muted-foreground">
                Average increase reported by users
              </div>
            </CardContent>
          </Card>

          {/* Success Rate Card */}
          <Card className="md:col-span-2 lg:col-span-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
            <CardContent className="p-6 h-full flex flex-col justify-center text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                89%
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                Success Rate
              </div>
              <div className="text-xs text-muted-foreground">
                Users who got interviews within 30 days
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
