import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutDoctor from './components/AboutDoctor';
import Services from './components/Services';
import GoogleReviews from './components/GoogleReviews';
import AppointmentBooking from './components/AppointmentBooking';
import LocationAndHours from './components/LocationAndHours';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      {/* Top Navbar */}
      <Navbar onBookClick={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onBookClick={() => handleOpenBooking()} />
        <AboutDoctor onBookClick={() => handleOpenBooking()} />
        <Services onSelectService={(service) => handleOpenBooking(service)} />
        <GoogleReviews />
        <AppointmentBooking isModal={false} />
        <LocationAndHours />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onBookClick={() => handleOpenBooking()} />

      {/* Floating Action Buttons */}
      <FloatingActions onBookClick={() => handleOpenBooking()} />

      {/* Appointment Modal */}
      {isModalOpen && (
        <AppointmentBooking
          isModal={true}
          preselectedService={selectedService}
          onClose={handleCloseBooking}
        />
      )}
    </div>
  );
}
