import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'دهانات داخلية وخارجية', href: '/services/painting' },
    { name: 'أعمال الجبس بورد', href: '/services/gypsum' },
    { name: 'دهانات الإيبوكسي', href: '/services/epoxy' },
    { name: 'أعمال الترميم', href: '/services/renovation' },
    { name: 'ورق الجدران', href: '/services/wallpaper' },
    { name: 'مظلات وسواتر', href: '/services/shelters' },
    { name: 'تركيب قرميد', href: '/services/tiles' },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "معلم دهانات الرياض",
    "url": "https://dahanat-alriyadh.com",
    "logo": "https://dahanat-alriyadh.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966598971755",
      "contactType": "customer service",
      "areaServed": "SA",
      "availableLanguage": "Arabic"
    }
  };

  return (
    <footer className="bg-dark-primary text-gray-300 pt-16 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              معلم دهانات <span className="text-gold">الرياض</span>
            </h3>
            <p className="mb-6 leading-relaxed">
              نقدم خدمات دهانات احترافية بالرياض، دهانات داخلية وخارجية، جبس بورد، إيبوكسي، وترميم. نضمن لك جودة العمل بضمان 5 سنوات ومعالجة الرطوبة قبل الدهان.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-gold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-white">رقم الهاتف والواتساب</p>
                  <a href="tel:+966598971755" className="hover:text-gold transition-colors block mt-1" dir="ltr">
                    059 897 1755
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-white">الموقع</p>
                  <p className="mt-1">الرياض، المملكة العربية السعودية<br/>نخدم جميع أحياء الرياض</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-white">ساعات العمل</p>
                  <p className="mt-1">السبت - الخميس: 7:00 صباحاً - 9:00 مساءً</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} معلم دهانات الرياض. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
