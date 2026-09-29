import React, { useState, useEffect } from 'react';
import { clinicData } from '../data/clinicData';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';

export default function FloatingActions({ onBookClick }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent("Hello Dr. Thanzil, I would like to book a dental consultation appointment.")}`;

  return (
    <>
      {/* Floating Action Buttons on Bottom Right */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-3">
        
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Chat Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center bg-emerald-500 hover:bg-emerald-600 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs sm:text-sm font-bold pl-0 group-hover:pl-2">
            WhatsApp Doctor
          </span>
        </a>

        {/* Direct Call Button (Highlighted on mobile) */}
        <a
          href={`tel:${clinicData.contact.phone}`}
          aria-label="Call Clinic"
          className="group sm:hidden flex items-center bg-dental-600 text-white p-3 rounded-full shadow-lg shadow-dental-500/30 transition-all hover:scale-105"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Sticky Quick Booking Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${clinicData.contact.phone}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
        >
          <Phone className="w-4 h-4 text-dental-600" />
          <span>Call Clinic</span>
        </a>

        <button
          onClick={onBookClick}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-dental-600 to-dental-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md shadow-dental-500/25 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </div>
    </>
  );
}
