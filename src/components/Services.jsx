import React, { useState } from 'react';
import { clinicData } from '../data/clinicData';
import { Check, Clock, Sparkles, ChevronRight, Stethoscope, ShieldAlert } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'popular', label: 'Most Requested' },
    { id: 'restorative', label: 'Restorative & Fillings' },
    { id: 'cosmetic', label: 'Cosmetic & Implants' },
    { id: 'emergency', label: 'Emergency Care' },
  ];

  const filteredServices = clinicData.services.filter(svc => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'popular') return ['fillings', 'implants', 'checkups', 'bonding'].includes(svc.id);
    if (activeCategory === 'restorative') return ['fillings', 'rct', 'dentures-bridges', 'bonding'].includes(svc.id);
    if (activeCategory === 'cosmetic') return ['cosmetics', 'implants', 'bonding'].includes(svc.id);
    if (activeCategory === 'emergency') return ['emergency', 'rct', 'wisdom-surgery'].includes(svc.id);
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-cyan-100/70 text-dental-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-dental-600" />
            <span>Comprehensive Dental Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Care for Every Dental Need
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From swift 30-minute restorations to long-lasting implants and emergency relief, all performed with utmost hygiene and care.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-dental-600 text-white shadow-md shadow-dental-500/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between hover:shadow-card hover:-translate-y-1 ${
                service.id === 'fillings' 
                  ? 'border-dental-400 ring-2 ring-dental-400/20 shadow-md' 
                  : 'border-slate-200/90 hover:border-dental-300'
              }`}
            >
              <div className="p-6 space-y-4">
                {/* Header with Badge & Duration */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-lg ${
                    service.id === 'fillings'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-dental-50 text-dental-700'
                  }`}>
                    {service.badge}
                  </span>

                  <span className="flex items-center space-x-1 text-xs font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-dental-500" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                {/* Service Name & Highlight */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-dental-600 mt-1">
                    {service.highlight}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100 rounded-b-2xl flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  Doctor Consultation Available
                </span>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="px-3.5 py-2 rounded-lg bg-dental-600 hover:bg-dental-700 text-white text-xs font-bold transition-colors flex items-center space-x-1 shadow-sm"
                >
                  <span>Book Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Notice Callout */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-navy-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base">Suffering from severe toothache or dental trauma?</div>
              <div className="text-xs text-slate-300">We prioritize urgent emergency cases immediately during clinic hours.</div>
            </div>
          </div>

          <a
            href={`tel:${clinicData.contact.phone}`}
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-md transition-colors shrink-0 flex items-center space-x-2"
          >
            <span>Emergency Call: {clinicData.contact.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
