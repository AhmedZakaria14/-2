'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'الخدمات', href: '/services' },
    { name: 'أعمالنا', href: '/portfolio' },
    { name: 'المقالات', href: '/blog' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  const LogoTag = pathname === '/' ? 'h1' : 'span';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <LogoTag className="text-2xl font-bold text-dark-primary">
            معلم دهانات <span className="text-gold">الرياض</span>
          </LogoTag>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-gold ${
                pathname === link.href ? 'text-gold' : 'text-dark-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/966598971755?text=مرحباً، أريد الاستفسار عن خدمات الدهانات"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-bold transition-colors"
          >
            واتساب
          </a>
          <a
            href="tel:+966598971755"
            className="flex items-center gap-2 bg-gold hover:bg-yellow-600 text-white px-4 py-2 rounded-md font-bold transition-colors"
          >
            <Phone size={18} />
            <span dir="ltr">059 897 1755</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-dark-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block text-lg font-medium ${
                pathname === link.href ? 'text-gold' : 'text-dark-secondary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
            <a
              href="tel:+966598971755"
              className="flex items-center justify-center gap-2 bg-gold text-white px-4 py-3 rounded-md font-bold"
            >
              <Phone size={18} />
              اتصل الآن: <span dir="ltr">059 897 1755</span>
            </a>
            <a
              href="https://wa.me/966598971755?text=مرحباً، أريد الاستفسار عن خدمات الدهانات"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-md font-bold"
            >
              تواصل عبر الواتساب
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
