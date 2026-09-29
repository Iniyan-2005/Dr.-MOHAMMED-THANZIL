import React, { useState, useEffect } from 'react';
import { clinicData } from '../data/clinicData';
import { Phone, Calendar, Clock, Star, Menu, X, ShieldCheck, MapPin } from 'lucide-react';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Google Reviews', href: '#reviews' },
    { label: 'Clinic & Hours', href: '#location' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-dental-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-dental-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <span className="flex items-center space-x-1.5 text-dental-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open · Closes 9:00 PM</span>
            </span>

            <span className="hidden md:inline text-slate-500">•</span>

            <span className="hidden md:flex items-center space-x-1 text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-white">5.0</span>
              <span className="text-slate-300">({clinicData.ratings.totalReviews} Google Reviews)</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${clinicData.contact.phone}`} 
              className="flex items-center space-x-1.5 text-white hover:text-dental-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-dental-400" />
              <span>{clinicData.contact.displayPhone}</span>
            </a>

            <a
              href={clinicData.contact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-1 text-slate-300 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'glass-header shadow-md border-b border-slate-200/80 py-3' 
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-dental-600 via-dental-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-dental-500/20 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8 2 5 4.5 5 8c0 2.8 1.4 5.2 2.8 7.5.9 1.5 1.8 3.5 1.8 5 0 .8.6 1.5 1.4 1.5s1.4-.7 1.4-1.5c0-1.5 1-3 1.6-4 .6-1 1-2.2 1-3.5 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 1.3-.4 2.5-1 3.5-.6 1-1.6 2.5-1.6 4 0 .8.6 1.5 1.4 1.5s1.4-.7 1.4-1.5c0-1.5.9-3.5 1.8-5C17.6 13.2 19 10.8 19 8c0-3.5-3-6-7-6z" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg leading-tight group-hover:text-dental-700 transition-colors">
                Dr. MOHAMMED THANZIL
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xs uppercase tracking-wider font-semibold text-dental-600 bg-dental-50 px-1.5 py-0.5 rounded">
                  Dental Surgeon
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">• Clinic & Restorative Care</span>
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="hover:text-dental-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-dental-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Action */}
          <div className="hidden sm:flex items-center space-x-3">
            <a 
              href={`tel:${clinicData.contact.phone}`}
              className="px-4 py-2.5 rounded-xl text-slate-700 hover:text-dental-700 bg-slate-100 hover:bg-dental-50 text-sm font-bold transition-all border border-slate-200/80 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-dental-600" />
              <span>Call Clinic</span>
            </a>

            <button
              onClick={onBookClick}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-dental-600 to-dental-500 hover:from-dental-700 hover:to-dental-600 text-white text-sm font-bold shadow-md shadow-dental-500/25 hover:shadow-lg hover:shadow-dental-500/35 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onBookClick}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-dental-600 text-white text-xs font-bold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-slate-800 font-medium hover:bg-dental-50 hover:text-dental-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2.5">
              <a
                href={`tel:${clinicData.contact.phone}`}
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-sm text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-dental-600" />
                <span>Call {clinicData.contact.displayPhone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-dental-600 to-dental-500 text-white font-bold text-sm shadow-md flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
