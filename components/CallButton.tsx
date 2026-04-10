'use client';

import { Phone } from 'lucide-react';

export default function CallButton() {
  return (
    <a
      href="tel:+966598971755"
      className="md:hidden fixed bottom-6 left-6 z-50 bg-gold text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
      aria-label="اتصل بنا"
    >
      <Phone size={28} />
    </a>
  );
}
