import React from 'react';
import { clinicData } from '../data/clinicData';
import { Award, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';

export default function AboutDoctor({ onBookClick }) {
  const { doctor, features } = clinicData;

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-dental-50 text-dental-700 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Meet Your Dental Surgeon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Committed to Healthy Smiles & Painless Precision
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Dedicated oral healthcare delivered with gentle hands, high clinical standards, and modern diagnostic technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Info & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-bold text-dental-600 uppercase tracking-wider">
                {doctor.qualification}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {doctor.name}
              </h3>
              <p className="text-slate-500 font-medium text-sm">
                Dental Surgeon & Primary Oral Health Practitioner
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-base">
              {doctor.about}
            </p>

            <blockquote className="p-4 rounded-xl bg-slate-50 border-l-4 border-dental-500 text-slate-700 italic text-sm">
              &ldquo;{doctor.philosophy}&rdquo;
            </blockquote>

            {/* Quick Stat Counter Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <div className="text-2xl font-black text-dental-700">5.0 ★</div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">Google Rating</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <div className="text-2xl font-black text-slate-900">74+</div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">Happy Patients</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <div className="text-2xl font-black text-emerald-600">100%</div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">Sterile Protocol</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-dental-700 text-white font-bold text-sm shadow-md transition-colors inline-flex items-center space-x-2"
              >
                <span>Consult Dr. Thanzil Today</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Clinical Pillars / Why Patients Trust Dr. Thanzil */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-50 hover:bg-dental-50/50 border border-slate-200/80 hover:border-dental-200 transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-dental-600 group-hover:scale-110 group-hover:bg-dental-600 group-hover:text-white transition-all shadow-sm">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <HeartHandshake className="w-5 h-5" />}
                  {idx === 2 && <Sparkles className="w-5 h-5" />}
                  {idx === 3 && <Award className="w-5 h-5" />}
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-dental-800 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
