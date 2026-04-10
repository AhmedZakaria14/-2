import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'أعمال معلم دهانات الرياض | صور دهانات وتشطيبات في أحياء الرياض',
  description: 'شاهد أعمال دهانات الرياض السابقة — دهانات منازل وفلل في أحياء النخيل والسفارات والورود والعليا. معلم دهانات الرياض ☎️ 0598971755',
};

export default function PortfolioPage() {
  const portfolio = [
    { img: '/images/work/10.jpeg', location: 'حي النخيل', type: 'دهانات داخلية' },
    { img: '/images/work/11.jpeg', location: 'حي السفارات', type: 'جبس بورد' },
    { img: '/images/work/12.jpeg', location: 'حي الملقا', type: 'إيبوكسي' },
    { img: '/images/work/13.jpeg', location: 'حي العليا', type: 'دهانات خارجية' },
    { img: '/images/work/14.jpeg', location: 'حي الربوة', type: 'ترميم' },
    { img: '/images/work/15.jpeg', location: 'حي الروضة', type: 'مظلات' },
    { img: '/images/work/22.jpeg', location: 'حي الياسمين', type: 'دهانات داخلية' },
    { img: '/images/work/23.jpeg', location: 'حي الصحافة', type: 'جبس بورد' },
    { img: '/images/work/24.jpeg', location: 'حي الغدير', type: 'ورق جدران' },
    { img: '/images/work/25.jpeg', location: 'حي الربيع', type: 'قرميد' },
    { img: '/images/work/2.jpeg', location: 'حي العقيق', type: 'دهانات خارجية' },
    { img: '/images/work/3.jpeg', location: 'حي الرائد', type: 'ترميم' },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "معرض أعمال معلم دهانات الرياض",
    "image": portfolio.map(item => item.img)
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <section className="pt-32 pb-16 bg-dark-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">أعمالنا السابقة</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">تصفح مجموعة من مشاريعنا المنفذة في مختلف أحياء مدينة الرياض.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter Tabs (Visual only for now) */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['الكل', 'دهانات', 'جبس بورد', 'مظلات', 'إيبوكسي', 'ترميم'].map((tab, i) => (
              <button key={i} className={`px-6 py-2 rounded-full font-medium transition-colors ${i === 0 ? 'bg-gold text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <div key={index} className="relative h-72 rounded-xl overflow-hidden group shadow-sm">
                <Image src={item.img} alt={`${item.type} في ${item.location}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">{item.location}</span>
                  <span className="text-white font-medium text-sm">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
