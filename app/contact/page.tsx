import { Metadata } from 'next';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'اتصل بمعلم دهانات الرياض | استشارة مجانية وعرض سعر',
  description: 'تواصل مع معلم دهانات الرياض للحصول على استشارة مجانية وعرض سعر. هاتف وواتساب: 0598971755. نخدم جميع أحياء الرياض.',
};

export default function ContactPage() {
  const areas = [
    'حي النخيل', 'حي السفارات', 'حي الورود', 'حي العليا', 'حي الروضة',
    'حي الملقا', 'حي الربوة', 'حي المرسلات', 'حي الريان', 'حي الرائد',
    'شمال الرياض', 'شرق الرياض', 'غرب الرياض', 'جنوب الرياض'
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-dark-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">نحن مستعدون للرد على استفساراتكم وتقديم أفضل عروض الأسعار لخدمات الدهانات والتشطيبات.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark-primary mb-2">اتصل بنا مباشرة</h3>
                <p className="text-gray-600 mb-4">نستقبل مكالماتكم يومياً</p>
                <a href="tel:+966598971755" className="text-2xl font-bold text-gold block" dir="ltr">059 897 1755</a>
                <a href="https://wa.me/966598971755" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded-md font-bold hover:bg-green-600 transition-colors">مراسلة واتساب</a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark-primary mb-2">ساعات العمل</h3>
                <p className="text-gray-600">السبت - الخميس</p>
                <p className="text-lg font-bold text-dark-primary mt-1">7:00 صباحاً - 9:00 مساءً</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-dark-primary mb-6">أرسل لنا استفسارك</h2>
                <form action="#" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">الاسم الكريم</label>
                      <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" placeholder="أدخل اسمك" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">رقم الجوال</label>
                      <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" placeholder="05xxxxxxxx" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">نوع الخدمة المطلوبة</label>
                    <select id="service" name="service" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white">
                      <option value="painting">دهانات داخلية وخارجية</option>
                      <option value="gypsum">أعمال جبس بورد</option>
                      <option value="epoxy">دهانات إيبوكسي</option>
                      <option value="renovation">ترميم منازل</option>
                      <option value="other">خدمة أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">تفاصيل الطلب</label>
                    <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" placeholder="اكتب تفاصيل طلبك هنا..." required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gold hover:bg-yellow-600 text-white font-bold py-4 rounded-md transition-colors text-lg">
                    إرسال الطلب
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-primary mb-4">نخدم جميع أحياء الرياض</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">أينما كنت في الرياض، فريقنا مستعد للوصول إليك</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                <span className="text-sm font-medium text-dark-primary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
