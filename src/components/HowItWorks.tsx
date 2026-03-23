'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit Your CV',
      description: 'Upload your CV and fill in a brief questionnaire about your goals.',
    },
    {
      number: '2',
      title: 'Choose a Plan',
      description: 'Select the editing package that best fits your needs.',
    },
    {
      number: '3',
      title: 'Make Payment',
      description: 'Securely pay via WhatsApp with our easy payment process.',
    },
    {
      number: '4',
      title: 'Expert Review',
      description: 'Our professional editors work on your CV with attention to detail.',
    },
    {
      number: '5',
      title: 'Receive & Review',
      description: 'Get your edited CV within 24-48 hours and review the changes.',
    },
    {
      number: '6',
      title: 'Final Delivery',
      description: 'Request revisions if needed, then download your perfect CV.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Six simple steps to get your professionally edited CV
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 w-8 h-1 bg-primary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
