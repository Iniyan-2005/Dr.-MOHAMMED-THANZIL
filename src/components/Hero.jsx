import React from 'react';
import { clinicData } from '../data/clinicData';
import { Star, ShieldCheck, Clock, Phone, Calendar, MessageCircle, CheckCircle2, Sparkles, HeartPulse, ChevronRight } from 'lucide-react';

export default function Hero({ onBookClick }) {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent("Hello Dr. Thanzil, I would like to book a dental consultation appointment.")}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dental-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-dental-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Google Rating Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:border-dental-300 transition-colors">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                5.0 Google Rating
              </span>
              <span className="text-xs text-slate-500 font-medium">
                ({clinicData.ratings.totalReviews} Verified Reviews)
              </span>
              <span className="h-3 w-px bg-slate-200 hidden sm:inline" />
              <span className="text-xs font-semibold text-emerald-600 hidden sm:inline">
                Open · Closes 9 PM
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Your Smile Deserves <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-600 via-dental-500 to-cyan-500">
                  Painless & Gentle
                </span>{' '}
                Dental Care.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to <strong className="text-slate-900 font-bold">{clinicData.name}</strong>. 
                Specialized in rapid tooth restorations, dental implants, cosmetic procedures, and emergency dental treatments with zero anxiety.
              </p>
            </div>

            {/* Quick Proof Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center space-x-1.5 bg-white/90 border border-slate-200/90 px-3 py-1.5 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-dental-600" />
                <span>Fillings in &lt; 30 Mins</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white/90 border border-slate-200/90 px-3 py-1.5 rounded-lg shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Hospital-Grade Sterilization</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white/90 border border-slate-200/90 px-3 py-1.5 rounded-lg shadow-sm">
                <HeartPulse className="w-4 h-4 text-rose-500" />
                <span>Emergency Dental Care</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-dental-600 via-dental-500 to-cyan-600 hover:from-dental-700 hover:to-cyan-700 text-white font-bold text-base shadow-lg shadow-dental-500/30 hover:shadow-xl hover:shadow-dental-500/40 transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Online</span>
                <ChevronRight className="w-4 h-4 opacity-75" />
              </button>

              <a
                href={`tel:${clinicData.contact.phone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm hover:border-slate-400 transition-all flex items-center justify-center space-x-2.5"
              >
                <Phone className="w-5 h-5 text-dental-600" />
                <span>Call {clinicData.contact.displayPhone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-base border border-emerald-200 transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Highlighted Review Quote Card */}
            <div className="p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm max-w-xl mx-auto lg:mx-0 flex items-start space-x-3.5 text-left">
              <div className="w-9 h-9 rounded-full bg-dental-100 text-dental-700 flex items-center justify-center font-bold text-sm shrink-0">
                G
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Google Verified Patient</span>
                </div>
                <p className="text-sm font-medium text-slate-700 italic">
                  &ldquo;Dr. Thanzil sir did my tooth fillings in less than 30 minutes. Very gentle and no pain at all.&rdquo;
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Clinic Card & Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Accent Background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-dental-500 to-cyan-400 rounded-3xl blur-xl opacity-30 transform rotate-1 group-hover:rotate-0 transition duration-500"></div>

              {/* Main Clinic Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-2xl">
                
                {/* Real Clinic Photo Container */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900 group">
                  <img 
                    src="/images/media_1790341361592.png" 
                    alt="Dr. Mohammed Thanzil treating patient at clinic"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Badges inside Photo */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Modern Operatory</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs text-dental-300 font-semibold tracking-wider uppercase">
                      In-Clinic Care
                    </div>
                    <div className="text-lg font-bold">
                      Dr. MOHAMMED THANZIL
                    </div>
                    <div className="text-xs text-slate-300">
                      Dental Surgeon • Advanced Operatory Setup
                    </div>
                  </div>
                </div>

                {/* Card Lower Detail Section */}
                <div className="p-6 bg-white space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-2xl font-black text-dental-700">5.0 ★</div>
                      <div className="text-xs font-semibold text-slate-500">74 Google Reviews</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-2xl font-black text-slate-900">&lt; 30m</div>
                      <div className="text-xs font-semibold text-slate-500">Fast Tooth Fillings</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-600">
                    <span className="flex items-center space-x-1.5">
                      <Clock className="w-4 h-4 text-dental-600" />
                      <span>Mon - Sat: 9:30 AM - 9:00 PM</span>
                    </span>
                    <span className="font-bold text-emerald-600">
                      Closes 9 PM
                    </span>
                  </div>
                </div>

              </div>

              {/* Verified Clinical Badge Overhang */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Hospital Sanitization</div>
                  <div className="text-[11px] text-slate-500">100% Autoclaved Instruments</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
