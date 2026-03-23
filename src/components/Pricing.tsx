'use client';

import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Quick Edit',
      price: 50,
      currency: 'R',
      period: 'one-time',
      features: [
        'CV Review & Alterations',
        '24-48 Hour Turnaround',
        'Up to 1 Revision Round',
        'Format Optimization',
        'Email Support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Complete Revamp',
      price: 90,
      currency: 'R',
      period: 'one-time',
      features: [
        'Complete CV Rewrite',
        'Professional Formatting',
        'ATS Optimization',
        'Unlimited Revisions',
        'Priority Support',
        'Content Restructuring',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Premium Package',
      price: 140,
      currency: 'R',
      period: 'one-time',
      features: [
        'Complete CV Rewrite',
        'Professional Design',
        'ATS Optimization',
        'Unlimited Revisions',
        'Priority Support',
        'Cover Letter Included',
        'LinkedIn Profile Optimization',
        'Interview Prep Session',
      ],
      cta: 'Get Started',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Choose the plan that works best for you
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 transition-all ${
                plan.popular
                  ? 'bg-primary text-white shadow-2xl transform scale-105'
                  : 'bg-gray-50 text-gray-900 shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.currency}{plan.price}</span>
                <span className={`ml-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="https://wa.me/27732880601?text=Hi%20I%27m%20interested%20in%20the%20" className={`block w-full text-center py-3 rounded-lg font-bold transition-all ${
                plan.popular
                  ? 'bg-white text-primary hover:bg-gray-100'
                  : 'btn-primary'
              }`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
