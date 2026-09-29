import React, { useState, useEffect } from 'react';
import { clinicData } from '../data/clinicData';
import { Calendar, Clock, User, Phone, CheckCircle2, MessageCircle, AlertCircle, Sparkles, X } from 'lucide-react';

export default function AppointmentBooking({ preselectedService = '', onClose = null, isModal = false }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'Tooth Fillings (< 30 Mins)',
    date: '',
    timeSlot: 'Morning (10:00 AM – 1:00 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const timeSlots = [
    'Morning (10:00 AM – 1:00 PM)',
    'Afternoon (4:00 PM – 6:30 PM)',
    'Evening (6:30 PM – 9:00 PM)'
  ];

  const servicesList = [
    'Tooth Fillings (< 30 Mins)',
    'Dental Implants',
    'Root Canal Therapy (RCT)',
    'Dental Bonding & Veneers',
    'Cosmetic Teeth Whitening',
    'Routine Check-up & Consultation',
    'Dentures & Bridges',
    'Wisdom Tooth Extraction',
    'Emergency Pain Relief',
    'Pediatric (Kids) Dentistry'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWebSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    const randomRef = 'DT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and contact number before opening WhatsApp.");
      return;
    }
    const message = `*Dental Consultation Request*\n*Doctor:* Dr. MOHAMMED THANZIL - Dental Surgeon\n*Patient Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Treatment:* ${formData.service}\n*Preferred Date:* ${formData.date || 'Earliest Available'}\n*Slot:* ${formData.timeSlot}\n*Notes:* ${formData.notes || 'None'}`;
    const url = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: 'Tooth Fillings (< 30 Mins)',
      date: '',
      timeSlot: 'Morning (10:00 AM – 1:00 PM)',
      notes: ''
    });
  };

  const content = (
    <div className={`bg-white rounded-3xl ${isModal ? 'p-6 sm:p-8' : 'p-6 sm:p-10 border border-slate-200/90 shadow-xl'}`}>
      
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-dental-50 text-dental-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Priority Slot Booking</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your Visit
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            With Dr. MOHAMMED THANZIL - Dental Surgeon • Closes 9:00 PM
          </p>
        </div>

        {isModal && onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      {submitted ? (
        <div className="py-8 text-center space-y-5">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-bold text-slate-900">
              Appointment Request Confirmed!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your consultation request has been registered under reference:
            </p>
            <div className="inline-block px-4 py-2 bg-slate-100 rounded-xl font-mono text-dental-700 font-bold text-lg">
              {bookingRef}
            </div>
            <p className="text-xs text-slate-500">
              Our clinic receptionist will call or WhatsApp you at <strong className="text-slate-800">{formData.phone}</strong> shortly to confirm your exact time.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`tel:${clinicData.contact.phone}`}
              className="px-5 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              Call Clinic Now: {clinicData.contact.phone}
            </a>
            <button
              onClick={resetForm}
              className="px-5 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleWebSubmit} className="space-y-4 sm:space-y-5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Patient Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-dental-600" />
                <span>Patient Full Name *</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Mohamed Riyaz"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-dental-500 focus:ring-2 focus:ring-dental-500/20 text-sm outline-none transition-all"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-dental-600" />
                <span>Mobile Number *</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. 094453 31683"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-dental-500 focus:ring-2 focus:ring-dental-500/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Treatment Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Treatment / Concern
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-dental-500 focus:ring-2 focus:ring-dental-500/20 text-sm outline-none transition-all cursor-pointer"
              >
                {servicesList.map((svc, i) => (
                  <option key={i} value={svc}>{svc}</option>
                ))}
              </select>
            </div>

            {/* Preferred Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-dental-600" />
                <span>Preferred Date</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-dental-500 focus:ring-2 focus:ring-dental-500/20 text-sm outline-none transition-all cursor-pointer"
              />
            </div>
          </div>

          {/* Time Slot Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-dental-600" />
              <span>Preferred Time Window</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    formData.timeSlot === slot
                      ? 'bg-dental-600 text-white border-dental-600 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Specific symptoms or notes (optional)
            </label>
            <textarea
              name="notes"
              rows={2}
              placeholder="e.g. Mild pain in upper molar, need routine cleaning..."
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-dental-500 focus:ring-2 focus:ring-dental-500/20 text-sm outline-none transition-all resize-none"
            />
          </div>

          {/* Two Action Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="submit"
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-dental-600 to-dental-500 hover:from-dental-700 hover:to-dental-600 text-white font-bold text-sm shadow-md shadow-dental-500/25 transition-all flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm Online Slot</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppBooking}
              className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Slot</span>
            </button>
          </div>

          <p className="text-center text-[11px] text-slate-400">
            Emergency cases can call <a href={`tel:${clinicData.contact.phone}`} className="text-dental-600 font-semibold underline">{clinicData.contact.displayPhone}</a> directly.
          </p>

        </form>
      )}

    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
        <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="book" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {content}
      </div>
    </section>
  );
}
