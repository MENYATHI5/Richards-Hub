'use client';

export default function Services() {
  const services = [
    {
      icon: '📝',
      title: 'CV Writing',
      description: 'Professional CV writing from scratch, tailored to your industry and experience level.',
    },
    {
      icon: '✏️',
      title: 'CV Editing',
      description: 'Comprehensive editing to improve content, formatting, and ATS compatibility.',
    },
    {
      icon: '🎯',
      title: 'ATS Optimization',
      description: 'Optimize your CV to pass Applicant Tracking Systems and reach hiring managers.',
    },
    {
      icon: '💼',
      title: 'LinkedIn Profile',
      description: 'Professional LinkedIn profile optimization to complement your CV.',
    },
    {
      icon: '🔍',
      title: 'Cover Letter',
      description: 'Compelling cover letters that complement your CV perfectly.',
    },
    {
      icon: '📊',
      title: 'Interview Prep',
      description: 'Guidance and tips to prepare for interviews based on your CV.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive CV editing services to help you land your dream job
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
