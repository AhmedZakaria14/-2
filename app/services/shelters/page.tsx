import { Metadata } from 'next';
import Image from 'next/image';
import { Phone, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'تركيب مظلات الرياض | مظلات سيارات وسواتر فيبر جلاس',
  description: 'تركيب مظلات سيارات وسواتر بالرياض من فيبر جلاس عالي الجودة. تحمل الشمس والمطر. ضمان الجودة. ☎️ 0598971755',
};

export default function SheltersPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/work/7.jpeg" alt="تركيب مظلات الرياض" fill className="object-cover brightness-[0.4]" priority referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تركيب مظلات وسواتر بالرياض</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">حماية سيارتك ومنزلك من أشعة الشمس القوية بأفضل أنواع المظلات والسواتر.</p>
          <a href="tel:+966598971755" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"><Phone size={24} /> اطلب مظلتك الآن</a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-dark-primary mb-6">جودة تتحمل مناخ الرياض</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">نظراً لحرارة الشمس العالية في الرياض، نوفر مظلات وسواتر مصنوعة من مواد عالية الجودة (PVC، بولي إيثيلين، فيبر جلاس) توفر نسبة ظل تصل إلى 100% ومقاومة للأشعة فوق البنفسجية.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">مظلات سيارات (هرمية، مخروطية، كابولي)</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">مظلات حدائق وجلسات خارجية</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">سواتر خشبية وحديدية وقماشية</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">ضمان على الهيكل الحديدي والقماش</span></li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/work/14.jpeg" alt="مظلات سيارات بالرياض" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
