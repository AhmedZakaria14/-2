import { Metadata } from 'next';
import Image from 'next/image';
import { Phone, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'تركيب ورق جدران الرياض | أفضل أنواع الورق بتركيب احترافي',
  description: 'تركيب ورق جدران بالرياض للمنازل والفنادق والمكاتب. جميع الأنواع والتصاميم. معلم دهانات الرياض ☎️ 0598971755',
};

export default function WallpaperPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/work/33.jpeg" alt="تركيب ورق جدران الرياض" fill className="object-cover brightness-[0.4]" priority referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تركيب ورق جدران بالرياض</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">لمسة جمالية رائعة لمنزلك مع تركيب احترافي لجميع أنواع ورق الجدران.</p>
          <a href="tel:+966598971755" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"><Phone size={24} /> اتصل الآن</a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-dark-primary mb-6">تركيب احترافي بدون فقاعات</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">سر جمال ورق الجدران يكمن في طريقة تركيبه. نحن نضمن لك تركيباً مثالياً بدون فقاعات هواء أو فواصل ظاهرة، مع تجهيز الجدار مسبقاً لضمان التصاق قوي.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">تركيب ورق الجدران الكوري والأوروبي</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">ورق جدران ثلاثي الأبعاد (3D)</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">تجهيز وصنفرة الجدار قبل التركيب</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">استخدام مواد لاصقة عالية الجودة</span></li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <Image src="/images/work/34.jpeg" alt="ورق جدران 3D" width={400} height={400} className="rounded-lg object-cover h-full" referrerPolicy="no-referrer" />
                <Image src="/images/work/35.jpeg" alt="ورق جدران كلاسيك" width={400} height={400} className="rounded-lg object-cover h-full translate-y-8" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
