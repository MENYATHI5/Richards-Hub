'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">RH</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Richards hub</h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-gray-700 hover:text-primary transition">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-primary transition">
              Services
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary transition">
              Pricing
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary transition">
              How It Works
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link href="#about" className="block text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="#services" className="block text-gray-700 hover:text-primary">
              Services
            </Link>
            <Link href="#pricing" className="block text-gray-700 hover:text-primary">
              Pricing
            </Link>
            <Link href="#how-it-works" className="block text-gray-700 hover:text-primary">
              How It Works
            </Link>
            <Link href="#contact" className="block text-gray-700 hover:text-primary">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
