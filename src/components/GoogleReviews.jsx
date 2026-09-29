import React from 'react';
import { clinicData } from '../data/clinicData';
import { Star, ShieldCheck, ExternalLink, ThumbsUp, Quote } from 'lucide-react';

export default function GoogleReviews() {
  const { ratings, reviews, contact } = clinicData;

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Google Profile Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            5.0 Stars Across 74+ Patient Reviews
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real feedback from patients treated by Dr. Mohammed Thanzil on Google Maps and Search.
          </p>
        </div>

        {/* Google Summary Scorecard Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
          {/* Subtle Google colors background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-dental-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Score & Stars */}
            <div className="md:col-span-4 text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">5.0</span>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">
                    Based on 74 Google Reviews
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-xs text-emerald-400 font-semibold pt-1">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Recommended by Patients</span>
              </div>
            </div>

            {/* Rating Bars */}
            <div className="md:col-span-5 space-y-1.5 border-y md:border-y-0 md:border-x border-slate-700/60 py-4 md:py-0 md:px-6">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-3 text-xs">
                  <span className="w-3 text-slate-400 font-semibold">{stars}</span>
                  <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${stars === 5 ? 'bg-amber-400 w-full' : 'bg-slate-700 w-0'}`} 
                    />
                  </div>
                  <span className="w-8 text-right text-slate-400 font-mono">
                    {stars === 5 ? '100%' : '0%'}
                  </span>
                </div>
              ))}
            </div>

            {/* Profile CTA */}
            <div className="md:col-span-3 text-center md:text-right space-y-3">
              <div className="text-xs text-slate-400">
                Official Google Business Listing
              </div>
              <a
                href={contact.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs shadow-md transition-colors"
              >
                <span>View Google Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-dental-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-slate-50 border transition-all duration-300 flex flex-col justify-between ${
                rev.highlight
                  ? 'border-dental-300 bg-dental-50/40 shadow-md ring-1 ring-dental-300'
                  : 'border-slate-200/80 hover:border-slate-300 hover:shadow-card'
              }`}
            >
              <div className="space-y-4">
                {/* Reviewer Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-dental-600 to-cyan-500 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{rev.name}</div>
                      <div className="text-[11px] text-slate-500 flex items-center space-x-1">
                        <span className="text-emerald-600 font-medium">Verified Patient</span>
                        <span>•</span>
                        <span>{rev.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Body */}
                <p className="text-sm text-slate-700 leading-relaxed italic relative">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {rev.highlight && (
                <div className="mt-4 pt-3 border-t border-dental-200/60 flex items-center justify-between text-xs text-dental-800 font-semibold">
                  <span className="flex items-center space-x-1">
                    <Quote className="w-3.5 h-3.5 text-dental-600" />
                    <span>Featured Fast-Filling Review</span>
                  </span>
                  <span className="text-dental-600 font-bold">&lt; 30 mins</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
