import React from 'react';
import { clinicData } from '../data/clinicData';
import { Phone, MapPin, Clock, Star, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onBookClick }) {
  const { name, contact, doctor, timings } = clinicData;

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Brand & Doctor Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-dental-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8 2 5 4.5 5 8c0 2.8 1.4 5.2 2.8 7.5.9 1.5 1.8 3.5 1.8 5 0 .8.6 1.5 1.4 1.5s1.4-.7 1.4-1.5c0-1.5 1-3 1.6-4 .6-1 1-2.2 1-3.5 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 1.3-.4 2.5-1 3.5-.6 1-1.6 2.5-1.6 4 0 .8.6 1.5 1.4 1.5s1.4-.7 1.4-1.5c0-1.5.9-3.5 1.8-5C17.6 13.2 19 10.8 19 8c0-3.5-3-6-7-6z" />
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-white text-base tracking-tight leading-tight">
                  Dr. MOHAMMED THANZIL
                </div>
                <div className="text-xs font-semibold text-dental-400">
                  Dental Surgeon & Healthcare
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Providing gentle, patient-centered dental solutions including 30-minute tooth fillings, dental implants, cosmetic dentistry, and emergency tooth preservation.
            </p>

            <div className="flex items-center space-x-2 text-xs text-amber-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Star Rated</span>
              <span className="text-slate-400">(74 Google Reviews)</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Dr. Thanzil</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dental Treatments</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Google Reviews</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Clinic & Hours</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
              <li>
                <button onClick={onBookClick} className="text-dental-400 hover:text-dental-300 font-semibold transition-colors">
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Dental Procedures */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Specialized Care
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Rapid Tooth Fillings (&lt; 30 mins)</li>
              <li>• Dental Implants & Bone Grafting</li>
              <li>• Painless Rotary Root Canal Therapy</li>
              <li>• Cosmetic Whitening & Veneers</li>
              <li>• Wisdom Tooth Surgical Extraction</li>
              <li>• Emergency Dental Trauma Relief</li>
            </ul>
          </div>

          {/* Clinic Contact & Hours Summary */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Clinic & Appointments
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-dental-400 shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-dental-400 shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-white font-semibold">
                  {contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-semibold">{timings.status}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={contact.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3 text-dental-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {name}. Developed by <a href="https://www.iniyan-s.me/" target="_blank" rel="noopener noreferrer" className="text-slate-300 font-semibold hover:text-dental-400 transition-colors underline decoration-slate-700 underline-offset-4 hover:decoration-dental-400">Iniyan S -Freelancer</a>. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Sterile, patient-first dentistry committed to your smile</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
