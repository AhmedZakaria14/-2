import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Shield, Droplets, Clock, Star, ChevronLeft, Phone } from 'lucide-react';

export default function Home() {
  const services = [
    { title: 'دهانات داخلية وخارجية', desc: 'تشطيبات راقية بجوتن 5000 والجزيرة', img: '/images/work/2.jpeg', href: '/services/painting' },
    { title: 'جبس بورد', desc: 'أسقف معلقة وديكورات جدارية حديثة', img: '/images/work/3.jpeg', href: '/services/gypsum' },
    { title: 'دهانات إيبوكسي', desc: 'أرضيات قوية للمطابخ والمستودعات', img: '/images/work/4.jpeg', href: '/services/epoxy' },
    { title: 'ترميم منازل', desc: 'معالجة الرطوبة والشقوق قبل الدهان', img: '/images/work/5.jpeg', href: '/services/renovation' },
    { title: 'ورق جدران', desc: 'تركيب احترافي لجميع أنواع الورق', img: '/images/work/6.jpeg', href: '/services/wallpaper' },
    { title: 'مظلات وسواتر', desc: 'تركيب مظلات سيارات وسواتر', img: '/images/work/7.jpeg', href: '/services/shelters' },
    { title: 'تركيب قرميد', desc: 'قرميد واجهات وأسقف بجودة عالية', img: '/images/work/8.jpeg', href: '/services/tiles' },
    { title: 'ديكورات خشبية', desc: 'بديل الخشب وبديل الرخام', img: '/images/work/9.jpeg', href: '/services/painting' },
  ];

  const portfolio = [
    { img: '/images/work/10.jpeg', location: 'حي النخيل' },
    { img: '/images/work/11.jpeg', location: 'حي السفارات' },
    { img: '/images/work/12.jpeg', location: 'حي الملقا' },
    { img: '/images/work/13.jpeg', location: 'حي العليا' },
    { img: '/images/work/14.jpeg', location: 'حي الربوة' },
    { img: '/images/work/15.jpeg', location: 'حي الروضة' },
  ];

  const areas = [
    'حي النخيل', 'حي السفارات', 'حي الورود', 'حي العليا', 'حي الروضة',
    'حي الملقا', 'حي الربوة', 'حي المرسلات', 'حي الريان', 'حي الرائد',
    'حي الياسمين', 'حي الصحافة', 'حي الغدير', 'حي الربيع', 'حي العقيق',
    'شمال الرياض', 'شرق الرياض', 'غرب الرياض', 'جنوب الرياض', 'وسط الرياض'
  ];

  const faqs = [
    { q: 'كم مدة ضمان الدهانات؟', a: 'نقدم ضمان لمدة 5 سنوات على جميع أعمال الدهانات الداخلية والخارجية ضد التقشير وتغير اللون.' },
    { q: 'هل تعالجون الرطوبة قبل الدهان؟', a: 'نعم، معالجة الرطوبة هي خطوتنا الأولى. نستخدم مواد عازلة متخصصة لضمان عدم عودة الرطوبة وتلف الدهان الجديد.' },
    { q: 'ما هي أنواع الدهانات المستخدمة؟', a: 'نستخدم أفضل العلامات التجارية مثل جوتن (Jotun 5000) ودهانات الجزيرة لضمان أعلى جودة.' },
    { q: 'كم الدفعة المقدمة المطلوبة؟', a: 'نطلب دفعة مقدمة 30% فقط للبدء في العمل وشراء المواد الأساسية، والباقي على دفعات حسب الإنجاز.' },
    { q: 'هل تقدمون خدمة تنظيف بعد العمل؟', a: 'بالتأكيد، نحرص على تغطية الأثاث والأرضيات قبل البدء، ونقوم بتنظيف المكان يومياً وبعد انتهاء المشروع بالكامل.' },
    { q: 'هل تخدمون جميع أحياء الرياض؟', a: 'نعم، فريقنا يغطي جميع أحياء شمال، شرق، غرب، وجنوب الرياض.' },
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
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/work/1.jpeg" alt="معلم دهانات الرياض" fill className="object-cover brightness-[0.3]" priority referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold font-bold mb-4 border border-gold/30">أفضل مقاول دهان بالرياض</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">معلم دهانات الرياض | تشطيبات تدوم 5 سنوات دون تقشير</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">دهانات داخلية وخارجية بجوتن 5000، معالجة رطوبة جذرية، جبس بورد، وإيبوكسي. نخدم جميع أحياء الرياض بأسعار تنافسية وضمان حقيقي.</p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+966598971755" className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center gap-2"><Phone size={24} /> اتصل الآن</a>
              <a href="https://wa.me/966598971755" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center gap-2">واتساب</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-white py-8 border-b border-gray-100 shadow-sm relative z-20 -mt-8 mx-4 md:mx-auto md:max-w-6xl rounded-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2"><Droplets className="text-gold" size={32} /><h3 className="font-bold text-dark-primary">معالجة الرطوبة أولاً</h3></div>
            <div className="flex flex-col items-center gap-2"><Shield className="text-gold" size={32} /><h3 className="font-bold text-dark-primary">ضمان 5 سنوات</h3></div>
            <div className="flex flex-col items-center gap-2"><CheckCircle2 className="text-gold" size={32} /><h3 className="font-bold text-dark-primary">دفعة مقدمة 30% فقط</h3></div>
            <div className="flex flex-col items-center gap-2"><Clock className="text-gold" size={32} /><h3 className="font-bold text-dark-primary">تنظيف يومي</h3></div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-4">خدماتنا في الرياض</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">نقدم مجموعة متكاملة من خدمات الدهانات والتشطيبات بأعلى معايير الجودة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link href={service.href} key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative h-48">
                  <Image src={service.img} alt={`${service.title} بالرياض`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-primary mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <span className="text-gold font-bold flex items-center gap-1">المزيد <ChevronLeft size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-4">أعمالنا السابقة</h2>
              <p className="text-gray-600 text-lg">نماذج من أعمالنا في مختلف أحياء الرياض</p>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-gold font-bold hover:text-yellow-600 transition-colors">عرض كل الأعمال <ChevronLeft size={20} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div key={index} className="relative h-72 rounded-xl overflow-hidden group">
                <Image src={item.img} alt={`أعمال دهانات في ${item.location}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/work/16.jpeg" alt="معلم دهانات الرياض أثناء العمل" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute bottom-6 right-6 bg-white p-6 rounded-xl shadow-lg max-w-[250px]">
                  <div className="text-gold font-bold text-4xl mb-2">+10</div>
                  <div className="text-dark-primary font-bold">سنوات من الخبرة في دهانات الرياض</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-6">قصتنا مع الدهانات في الرياض</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">بدأنا رحلتنا كمعلم دهانات في الرياض منذ أكثر من 10 سنوات. واجهنا العديد من التحديات، كان أبرزها مشكلة تشقق الدهان بسبب الرطوبة والحرارة العالية في الرياض.</p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">لذلك، تخصصنا في معالجة الرطوبة والأساسات قبل البدء بأي أعمال دهان. نستخدم أفضل المواد من جوتن والجزيرة لنضمن لعملائنا تشطيبات تدوم طويلاً.</p>
              <div className="space-y-6">
                <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0"><span className="text-gold font-bold">2013</span></div><div><h4 className="font-bold text-dark-primary text-lg">البداية</h4><p className="text-gray-600">انطلاق أعمالنا في شمال الرياض.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0"><span className="text-gold font-bold">2018</span></div><div><h4 className="font-bold text-dark-primary text-lg">التوسع</h4><p className="text-gray-600">تغطية جميع أحياء الرياض وإضافة خدمات الجبس بورد.</p></div></div>
                <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0"><span className="text-gold font-bold">الآن</span></div><div><h4 className="font-bold text-dark-primary text-lg">الريادة</h4><p className="text-gray-600">أكثر من 500 مشروع ناجح بضمان 5 سنوات.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Stats Section */}
      <section className="py-16 bg-dark-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl md:text-5xl font-bold text-gold mb-2">+500</div><div className="text-gray-300">مشروع منجز</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-gold mb-2">+10</div><div className="text-gray-300">سنوات خبرة</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-gold mb-2">5</div><div className="text-gray-300">سنوات ضمان</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-gold mb-2">%80</div><div className="text-gray-300">عملاء متكررون</div></div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-4">ماذا يقول عملاؤنا؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">نفخر بثقة عملائنا في مختلف أحياء الرياض</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'أبو محمد', area: 'حي الملقا', text: 'شغل نظيف ومرتب، عالجوا الرطوبة في الجدار قبل الدهان والآن كملنا سنة والدهان كأنه جديد. أنصح بالتعامل معهم.' },
              { name: 'عبدالله العتيبي', area: 'حي النخيل', text: 'التزام بالوقت ودقة في المواعيد. استخدموا دهانات جوتن الأصلية والنتيجة كانت ممتازة جداً. شكراً لمعلم الدهانات.' },
              { name: 'أم خالد', area: 'حي العليا', text: 'سوو لي ديكورات جبس بورد مع دهانات داخلية للفيلا. الشغل يبيض الوجه والعمال محترمين وينظفون المكان كل يوم.' }
            ].map((test, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl relative">
                <div className="flex text-gold mb-4">{[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={20} />)}</div>
                <p className="text-gray-700 mb-6 italic">&quot;{test.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-dark-primary font-bold text-xl">{test.name.charAt(0)}</div>
                  <div><h4 className="font-bold text-dark-primary">{test.name}</h4><p className="text-sm text-gray-500">{test.area}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-4">نخدم جميع أحياء الرياض</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">فريقنا مستعد لتلبية طلباتكم أينما كنتم في العاصمة</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100 hover:border-gold transition-colors">
                <span className="font-medium text-dark-primary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-4">الأسئلة الشائعة</h2></div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-dark-primary mb-3 flex items-start gap-3"><span className="text-gold font-black">س:</span> {faq.q}</h3>
                <p className="text-gray-700 leading-relaxed pr-8"><span className="text-dark-primary font-black ml-2">ج:</span> {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Final */}
      <section className="py-20 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/work/17.jpeg')] mix-blend-overlay bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">هل تعبت من دهان يتشقق؟</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر. نضمن لك عملاً احترافياً يريحك لسنوات.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+966598971755" className="bg-dark-primary hover:bg-gray-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center gap-2 shadow-lg"><Phone size={24} /> اتصل الآن</a>
            <a href="https://wa.me/966598971755" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center gap-2 shadow-lg">واتساب</a>
          </div>
        </div>
      </section>
    </>
  );
}
