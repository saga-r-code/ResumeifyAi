import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/app/components/ui/button'

const Cta = () => {
  return (
    <section className="container mx-auto py-24 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Land Your Dream Job?
      </h2>
      <p className="text-lg sm:text-xl mb-8 opacity-90">
        Join over 100,000 professionals who&apos;ve upgraded their careers with
        AI-powered resumes.
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
        Free to start • No credit card required • 14-day money-back
        guarantee
      </p>
    </div>
  </section>
  )
}

export default Cta