import { Metadata } from 'next';
import Image from 'next/image';
import { Phone, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'جبس بورد الرياض | أسقف معلقة وديكورات جدارية',
  description: 'أعمال جبس بورد بالرياض: أسقف معلقة، ديكورات جدارية، تقسيمات. تركيب احترافي بضمان الجودة. معلم دهانات الرياض ☎️ 0598971755',
};

export default function GypsumPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/work/26.jpeg" alt="أعمال جبس بورد الرياض" fill className="object-cover brightness-[0.4]" priority referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">أعمال الجبس بورد بالرياض</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">أسقف معلقة، ديكورات جدارية، وتقسيمات غرف بتصاميم عصرية وتنفيذ دقيق.</p>
          <a href="tel:+966598971755" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"><Phone size={24} /> اطلب عرض سعر</a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-dark-primary mb-6">لماذا تختار خدماتنا في الجبس بورد؟</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">نقدم حلولاً متكاملة لأعمال الجبس بورد في الرياض، بدءاً من التصميم وحتى التنفيذ النهائي. نستخدم أفضل أنواع ألواح الجبس المقاومة للرطوبة والحريق لضمان سلامة وجمال منزلك.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">تصاميم عصرية تناسب جميع الأذواق</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">استخدام ألواح مقاومة للرطوبة (للحمامات والمطابخ)</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">تنفيذ دقيق وإخفاء كامل للفواصل</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">إمكانية دمج الإضاءة المخفية (LED) باحترافية</span></li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/work/27.jpeg" alt="تنفيذ جبس بورد بالرياض" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
