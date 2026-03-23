'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Hi! I'm ${formData.name} (${formData.email}). I'm interested in ${formData.service}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have questions? Reach out to us via WhatsApp or contact form
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="CV Writing">CV Writing</option>
                    <option value="CV Editing">CV Editing</option>
                    <option value="ATS Optimization">ATS Optimization</option>
                    <option value="Cover Letter">Cover Letter</option>
                    <option value="LinkedIn Profile">LinkedIn Profile</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                <p className="text-gray-600">
                  Reach out to us via WhatsApp for the fastest response.
                </p>
              </div>
              <Link
                href="https://wa.me/27732880601?text=Hi%20I%27m%20interested%20in%20your%20CV%20editing%20services"
                className="block p-6 bg-green-50 border-2 border-green-500 rounded-lg hover:bg-green-100 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">💬</div>
                  <div>
                    <h4 className="font-bold text-green-700">WhatsApp</h4>
                    <p className="text-green-600">+27 73 288 0601</p>
                  </div>
                </div>
              </Link>

              <div>
                <h4 className="font-bold mb-3">Why WhatsApp?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Instant communication</li>
                  <li>✓ Easy file sharing</li>
                  <li>✓ Secure payments</li>
                  <li>✓ Quick responses</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Business Hours</h4>
                <p className="text-gray-700">
                  Monday - Friday: 9 AM - 6 PM<br />
                  Saturday: 10 AM - 4 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
