import { Metadata } from 'next';
import Image from 'next/image';
import { Phone, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ترميم منازل الرياض | معالجة رطوبة وترميم شامل',
  description: 'ترميم منازل وفلل بالرياض: معالجة رطوبة، إصلاح شقوق، تجديد تشطيبات. خبرة 10 سنوات. معلم دهانات الرياض ☎️ 0598971755',
};

export default function RenovationPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/work/31.jpeg" alt="ترميم منازل الرياض" fill className="object-cover brightness-[0.4]" priority referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ترميم منازل وفلل بالرياض</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">تجديد شامل، معالجة التشققات والرطوبة، وإعادة المنزل كأنه جديد.</p>
          <a href="tel:+966598971755" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"><Phone size={24} /> اطلب معاينة مجانية</a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-dark-primary mb-6">خدمات الترميم المتكاملة</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">الترميم ليس مجرد دهان جديد، بل هو معالجة للمشاكل الهيكلية والسطحية لضمان استدامة المبنى. نقدم خدمات ترميم شاملة في الرياض تعيد الحياة لمنزلك.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">معالجة الشقوق والتصدعات في الجدران</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">عزل ومعالجة الرطوبة والأملاح</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">تجديد الواجهات الخارجية</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">تغيير وتجديد الديكورات الداخلية</span></li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/work/32.jpeg" alt="أعمال ترميم بالرياض" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
