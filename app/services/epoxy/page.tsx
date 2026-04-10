import { Metadata } from 'next';
import Image from 'next/image';
import { Phone, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'دهانات إيبوكسي الرياض | أرضيات وجدران إيبوكسي احترافية',
  description: 'دهانات إيبوكسي بالرياض للمطابخ والمستودعات والحمامات. مقاوم للرطوبة والكيماويات. معلم دهانات الرياض ☎️ 0598971755',
};

export default function EpoxyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/work/28.jpeg" alt="دهانات إيبوكسي الرياض" fill className="object-cover brightness-[0.4]" priority referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">دهانات إيبوكسي بالرياض</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">أرضيات وجدران إيبوكسي شديدة التحمل، مثالية للمستودعات، المواقف، والمطابخ.</p>
          <a href="tel:+966598971755" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"><Phone size={24} /> اتصل للاستشارة</a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-dark-primary mb-6">مميزات دهانات الإيبوكسي</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">يعتبر الإيبوكسي الخيار الأمثل للأماكن التي تتطلب تحمل أوزان ثقيلة ومقاومة للكيماويات والرطوبة. نحن متخصصون في تطبيق الإيبوكسي بأعلى المعايير في الرياض.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">مقاومة عالية للخدوش والاحتكاك</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">سهولة التنظيف ومقاومة البقع والزيوت</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">عزل تام للرطوبة (مناسب للخزانات والمسابح)</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">مظهر لامع وجذاب متوفر بعدة ألوان</span></li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <Image src="/images/work/29.jpeg" alt="أرضيات إيبوكسي" width={400} height={400} className="rounded-lg object-cover h-full" referrerPolicy="no-referrer" />
                <Image src="/images/work/30.jpeg" alt="إيبوكسي مواقف" width={400} height={400} className="rounded-lg object-cover h-full translate-y-8" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
