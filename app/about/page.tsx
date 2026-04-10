import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Target, Users, ThumbsUp, Star, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'من نحن | معلم دهانات الرياض – خبرة 10 سنوات في الدهانات',
  description: 'تعرف على معلم دهانات الرياض — خبرة 10 سنوات، ضمان 5 سنوات على التشطيبات، معالجة الرطوبة قبل الدهان. نخدم جميع أحياء الرياض.',
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن – لماذا نختلف عن باقي معلمي الدهانات؟</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">خبرة تمتد لأكثر من عقد من الزمان في تقديم أرقى خدمات الدهانات والتشطيبات في مدينة الرياض.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-dark-primary mb-6">قصتنا مع الدهانات</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">بدأت رحلتنا في عالم الدهانات والتشطيبات في الرياض برؤية واضحة: تقديم جودة لا تضاهى تدوم لسنوات. لاحظنا أن الكثير من المنازل تعاني من تشقق الدهان بعد فترة قصيرة بسبب عدم معالجة الرطوبة بشكل صحيح.</p>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">لذلك، قررنا أن نكون مختلفين. نحن لا نقوم بالدهان فقط، بل نعالج الأساسات، ونستخدم أفضل المواد العازلة، ونطبق دهانات جوتن والجزيرة الأصلية لضمان نتيجة مثالية.</p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/work/18.jpeg" alt="فريق عمل معلم دهانات الرياض" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-primary mb-12">مسيرتنا المهنية</h2>
          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {[
              { year: '2013', title: 'البداية', desc: 'تأسيس فريق العمل والبدء في تنفيذ مشاريع دهانات صغيرة في شمال الرياض.' },
              { year: '2016', title: 'التوسع في الخدمات', desc: 'إضافة خدمات الجبس بورد والديكورات الداخلية لتلبية احتياجات العملاء.' },
              { year: '2019', title: 'اعتماد الجودة', desc: 'الاعتماد الرسمي لاستخدام دهانات جوتن والجزيرة مع تقديم ضمان 5 سنوات.' },
              { year: 'الآن', title: 'الريادة', desc: 'تنفيذ أكثر من 500 مشروع ناجح في جميع أحياء الرياض مع فريق عمل متكامل.' }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gold text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-dark-primary text-xl">{item.title}</h3>
                    <span className="font-bold text-gold">{item.year}</span>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-primary mb-12">قيمنا الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-xl"><Shield className="mx-auto text-gold mb-4" size={48} /><h3 className="text-xl font-bold mb-2">الجودة والضمان</h3><p className="text-gray-600">نضمن أعمالنا لمدة 5 سنوات ضد التقشير.</p></div>
            <div className="p-6 bg-gray-50 rounded-xl"><Target className="mx-auto text-gold mb-4" size={48} /><h3 className="text-xl font-bold mb-2">الدقة في المواعيد</h3><p className="text-gray-600">نلتزم بتسليم المشاريع في الوقت المتفق عليه.</p></div>
            <div className="p-6 bg-gray-50 rounded-xl"><Users className="mx-auto text-gold mb-4" size={48} /><h3 className="text-xl font-bold mb-2">فريق محترف</h3><p className="text-gray-600">عمالة مدربة وذات خبرة طويلة في المجال.</p></div>
            <div className="p-6 bg-gray-50 rounded-xl"><ThumbsUp className="mx-auto text-gold mb-4" size={48} /><h3 className="text-xl font-bold mb-2">رضا العميل</h3><p className="text-gray-600">غايتنا الأولى هي تقديم نتيجة تفوق التوقعات.</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تبحث عن معلم دهانات موثوق في الرياض؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">نحن هنا لتحويل رؤيتك إلى واقع. تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر.</p>
          <div className="flex justify-center gap-4">
            <a href="tel:+966598971755" className="bg-dark-primary hover:bg-gray-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center gap-2 shadow-lg"><Phone size={24} /> اتصل الآن</a>
          </div>
        </div>
      </section>
    </>
  );
}
