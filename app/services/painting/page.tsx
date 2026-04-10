import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Shield, Droplets, PaintBucket, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'دهانات داخلية وخارجية بالرياض | جوتن 5000 بضمان 5 سنوات',
  description: 'دهانات داخلية وخارجية بالرياض بجوتن 5000 ودهانات الجزيرة. معالجة رطوبة قبل الدهان. ضمان 5 سنوات. تشطيب منازل وفلل في جميع أحياء الرياض ☎️ 0598971755',
};

export default function PaintingServicePage() {
  const faqs = [
    { q: 'ما هو أفضل نوع دهان داخلي؟', a: 'نحن نوصي باستخدام دهانات جوتن (مثل فينوماستيك) أو دهانات الجزيرة (مثل نوفل) لجودتها العالية وقابليتها للغسيل.' },
    { q: 'كم تستغرق عملية دهان فيلا بالكامل؟', a: 'تعتمد المدة على حجم الفيلا وحالة الجدران، ولكن في المتوسط تستغرق من أسبوع إلى أسبوعين مع معالجة الرطوبة.' },
    { q: 'هل تقدمون ضمان على الدهانات الخارجية؟', a: 'نعم، نقدم ضماناً لمدة 5 سنوات على الدهانات الخارجية ضد التقشير وتغير اللون بسبب العوامل الجوية.' },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/work/19.jpeg" alt="دهانات داخلية وخارجية بالرياض" fill className="object-cover brightness-[0.4]" priority referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">دهانات داخلية وخارجية بالرياض</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">تشطيبات احترافية بجوتن 5000 ودهانات الجزيرة مع معالجة الرطوبة وضمان 5 سنوات.</p>
          <a href="tel:+966598971755" className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"><Phone size={24} /> اطلب معاينة مجانية</a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-dark-primary mb-6">لماذا يتشقق الدهان؟ (وكيف نحلها)</h2>
              <p className="text-gray-600 text-lg mb-4">يعاني الكثير من أهالي الرياض من مشكلة تشقق الدهان وتقشره بعد فترة قصيرة من تنفيذه. السبب الرئيسي ليس في نوع الدهان، بل في <strong>عدم معالجة الرطوبة والأساسات بشكل صحيح</strong>.</p>
              <p className="text-gray-600 text-lg mb-6">نحن في &quot;معلم دهانات الرياض&quot; لا نقوم بالدهان مباشرة. خطوتنا الأولى هي فحص الجدران، معالجة الرطوبة بمواد عازلة متخصصة، وصنفرة المعجون حتى يصبح السطح أملساً تماماً ومستعداً لاستقبال الدهان النهائي.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">فحص شامل للرطوبة والتشققات</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">استخدام عوازل مائية متطورة</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" /><span className="text-lg font-medium">تأسيس بمعجون عالي الجودة</span></li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <Image src="/images/work/20.jpeg" alt="معالجة الرطوبة بالرياض" width={400} height={400} className="rounded-lg object-cover h-full" referrerPolicy="no-referrer" />
                <Image src="/images/work/21.jpeg" alt="دهان جوتن الرياض" width={400} height={400} className="rounded-lg object-cover h-full translate-y-8" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-primary mb-12">خطوات العمل لدينا</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'المعاينة والفحص', desc: 'زيارة الموقع وفحص الجدران وتحديد المشاكل.' },
              { step: '2', title: 'الحماية والتنظيف', desc: 'تغطية الأثاث والأرضيات بالكامل لحمايتها.' },
              { step: '3', title: 'المعالجة والتأسيس', desc: 'معالجة الرطوبة وصنفرة الجدران ووضع الأساس.' },
              { step: '4', title: 'الدهان النهائي', desc: 'تطبيق طبقات الدهان النهائي (جوتن أو الجزيرة).' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm relative">
                <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-dark-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-primary mb-12">معرض أعمال الدهانات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['حي النخيل', 'حي الملقا', 'حي العليا', 'حي السفارات'].map((area, i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden group">
                <Image src={`/images/work/${22 + i}.jpeg`} alt={`دهانات في ${area}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-bold">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-dark-primary mb-12">الأسئلة الشائعة عن الدهانات</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-dark-primary mb-3">س: {faq.q}</h3>
                <p className="text-gray-700">ج: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
