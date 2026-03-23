'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white pt-28 pb-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Your CV Deserves to Shine ✨
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let our expert CV editors transform your resume into a powerful tool that gets you noticed by top employers. Professional editing, guaranteed results.
            </p>
            <div className="flex gap-4">
              <Link href="https://wa.me/27732880601?text=Hi%20I%27m%20interested%20in%20your%20CV%20editing%20services" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Contact via WhatsApp
              </Link>
              <Link href="#pricing" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                View Pricing
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Professional Review</h3>
                    <p className="text-gray-600 text-sm">Expert CV editors review your document</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Quick Turnaround</h3>
                    <p className="text-gray-600 text-sm">Receive your edited CV within 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Easy Payment</h3>
                    <p className="text-gray-600 text-sm">Secure payment via WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
