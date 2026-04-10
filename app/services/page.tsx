import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'خدمات دهانات الرياض | دهانات داخلية خارجية جبس بورد إيبوكسي',
  description: 'خدمات دهانات الرياض الشاملة: دهانات داخلية وخارجية، جبس بورد، إيبوكسي، مظلات، ترميم، ورق جدران. معلم دهانات بالرياض ☎️ 0598971755',
};

export default function ServicesPage() {
  const services = [
    { title: 'دهانات داخلية وخارجية', desc: 'تشطيبات راقية بجوتن 5000 والجزيرة مع ضمان 5 سنوات.', img: '/images/work/2.jpeg', href: '/services/painting' },
    { title: 'أعمال الجبس بورد', desc: 'أسقف معلقة وديكورات جدارية حديثة وتقسيمات.', img: '/images/work/3.jpeg', href: '/services/gypsum' },
    { title: 'دهانات الإيبوكسي', desc: 'أرضيات قوية للمطابخ والمستودعات مقاومة للكيماويات.', img: '/images/work/4.jpeg', href: '/services/epoxy' },
    { title: 'ترميم منازل', desc: 'معالجة الرطوبة والشقوق وتجديد التشطيبات القديمة.', img: '/images/work/5.jpeg', href: '/services/renovation' },
    { title: 'ورق الجدران', desc: 'تركيب احترافي لجميع أنواع ورق الجدران للمنازل والمكاتب.', img: '/images/work/6.jpeg', href: '/services/wallpaper' },
    { title: 'مظلات وسواتر', desc: 'تركيب مظلات سيارات وسواتر فيبر جلاس عالية الجودة.', img: '/images/work/7.jpeg', href: '/services/shelters' },
    { title: 'تركيب قرميد', desc: 'قرميد واجهات وأسقف بجودة عالية وتركيب احترافي.', img: '/images/work/8.jpeg', href: '/services/tiles' },
    { title: 'ديكورات خشبية', desc: 'تركيب بديل الخشب وبديل الرخام بأحدث التصاميم.', img: '/images/work/9.jpeg', href: '/services/painting' },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.title,
      "description": service.desc,
      "url": `https://dahanat-alriyadh.com${service.href}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <section className="pt-32 pb-16 bg-dark-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خدمات دهانات الرياض</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">نقدم مجموعة متكاملة من خدمات الدهانات والتشطيبات بأعلى معايير الجودة في جميع أحياء الرياض.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link href={service.href} key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative h-56">
                  <Image src={service.img} alt={`${service.title} بالرياض`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-dark-primary mb-3 group-hover:text-gold transition-colors">{service.title}</h2>
                  <p className="text-gray-600 mb-4 text-lg">{service.desc}</p>
                  <span className="text-gold font-bold flex items-center gap-1">تفاصيل الخدمة <ChevronLeft size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
