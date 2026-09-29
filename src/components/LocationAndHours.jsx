import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

export default function LocationAndHours() {
  const { name, contact, timings } = clinicData;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contact.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-dental-50 text-dental-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic Location & Hours
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Conveniently accessible clinic with dedicated parking and extended evening consultation hours until 9:00 PM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Clinic Contact & Hours Card */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Main Clinic Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6">
              
              {/* Clinic Name Header */}
              <div className="space-y-1.5 pb-4 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-dental-600">
                  Dental Clinic & Surgery
                </span>
                <h3 className="text-2xl font-black text-slate-900 leading-snug">
                  {name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Led by Dr. Mohammed Thanzil • Dental Surgeon
                </p>
              </div>

              {/* Address Section */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-dental-100 text-dental-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">Clinic Address</div>
                    <div className="text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed">
                      {contact.address}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-1 pl-12">
                  <a
                    href={contact.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-dental-600 hover:bg-dental-700 text-white text-xs font-bold shadow-sm transition-colors inline-flex items-center space-x-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>

                  <button
                    onClick={handleCopyAddress}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors inline-flex items-center space-x-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & Contact */}
              <div className="flex items-start space-x-3 pt-4 border-t border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-dental-100 text-dental-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">Direct Reception & Booking</div>
                  <div className="mt-0.5">
                    <a 
                      href={`tel:${contact.phone}`} 
                      className="text-base font-extrabold text-dental-700 hover:underline"
                    >
                      {contact.displayPhone}
                    </a>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Call directly for slot inquiry or urgent emergencies.
                  </div>
                </div>
              </div>

              {/* Working Hours Schedule */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-dental-600" />
                    <span className="text-xs font-bold uppercase text-slate-600 tracking-wider">
                      Operating Hours
                    </span>
                  </div>
                  <span className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>{timings.status}</span>
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  {timings.schedule.map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-none">
                      <span className="font-semibold text-slate-700">{row.days}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-slate-900">{row.hours}</span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold">
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Google Profile Verification Box */}
            <div className="p-4 rounded-2xl bg-dental-50 border border-dental-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-dental-600 text-white flex items-center justify-center font-bold text-xs">
                  G
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Verified Google Business Profile</div>
                  <div className="text-[11px] text-slate-600">Rated 5.0 ★ with 74 Google Reviews</div>
                </div>
              </div>
              <a
                href={contact.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-dental-700 hover:text-dental-900 flex items-center space-x-1"
              >
                <span>View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive View & Navigation card */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg bg-slate-100 min-h-[420px]">
            
            {/* Top Bar for Map */}
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Google Maps Location</span>
              </div>
              <a
                href={contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-dental-300 hover:text-white flex items-center space-x-1 font-semibold transition-colors"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Interactive Map */}
            <div className="relative flex-1 w-full min-h-[340px] bg-slate-200">
              <iframe
                title="Dr. Mohammed Thanzil Dental Clinic Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent("Dr. MOHAMMED THANZIL Dental Surgeon")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Bottom Directions Callout */}
            <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Wheelchair accessible & sanitization protocols maintained</span>
              </div>
              <a
                href={contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-dental-700 hover:underline shrink-0"
              >
                Start GPS Navigation &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
