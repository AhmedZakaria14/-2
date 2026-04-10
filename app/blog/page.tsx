import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'مقالات دهانات الرياض | نصائح وحلول لمشاكل الدهانات',
  description: 'مقالات ونصائح من معلم دهانات الرياض: حلول لتقشير الدهان، مقارنة جوتن 5000 و2000، أفضل دهانات للمناخ الحار. ☎️ 0598971755',
};

export default function BlogPage() {
  const posts = [
    {
      slug: 'limatha-yatashakkaq-aldahan',
      title: 'لماذا يتشقق الدهان بعد شهرين؟ (الأسباب الحقيقية والحل)',
      desc: 'تعرف على الأسباب الرئيسية لتشقق الدهان في منازل الرياض وكيفية معالجة الرطوبة قبل البدء بالدهان.',
      img: '/images/work/1.jpeg',
      date: '15 أكتوبر 2025'
    },
    {
      slug: 'joton-5000-vs-2000',
      title: 'جوتن 5000 مقابل جوتن 2000 — أيهما أفضل لمنزلك في الرياض؟',
      desc: 'مقارنة شاملة بين أشهر أنواع دهانات جوتن لمساعدتك في اختيار الأنسب لاحتياجاتك وميزانيتك.',
      img: '/images/work/16.jpeg',
      date: '02 نوفمبر 2025'
    },
    {
      slug: 'warraq-jidran-almatabikh',
      title: 'هل يمكن تركيب ورق جدران في المطبخ بالرياض؟',
      desc: 'كل ما تحتاج معرفته عن تركيب ورق الجدران في المطابخ والأنواع المقاومة للحرارة والرطوبة.',
      img: '/images/work/19.jpeg',
      date: '20 نوفمبر 2025'
    },
    {
      slug: 'limatha-tatahallak-almuthalah',
      title: 'لماذا تتهالك المظلة بعد سنة في الرياض؟ — الأسباب والحل',
      desc: 'أسباب تلف مظلات السيارات بسرعة في مناخ الرياض الحار وكيف تختار المظلة التي تدوم طويلاً.',
      img: '/images/work/26.jpeg',
      date: '05 ديسمبر 2025'
    },
    {
      slug: 'altarmim-am-aldahan-aljadid',
      title: 'الترميم أم الدهان الجديد؟ — متى تحتاج كل منهما',
      desc: 'دليلك لمعرفة متى يكفي الدهان الجديد ومتى يكون من الضروري إجراء ترميم شامل للجدران.',
      img: '/images/work/28.jpeg',
      date: '18 ديسمبر 2025'
    },
    {
      slug: 'afdal-dahanat-lilmanatiq-alharrah',
      title: 'أفضل أنواع الدهانات لمناخ الرياض الحار — دليل شامل 2025',
      desc: 'استعراض لأفضل الدهانات الخارجية التي تتحمل أشعة الشمس القوية في الرياض دون أن يتغير لونها.',
      img: '/images/work/31.jpeg',
      date: '10 يناير 2026'
    }
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-dark-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">مقالات ونصائح الدهانات</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">نشارك معك خبرتنا الطويلة في مجال الدهانات والتشطيبات في الرياض.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link href={`/blog/${post.slug}`} className="block relative h-56">
                  <Image src={post.img} alt={post.title} fill className="object-cover" referrerPolicy="no-referrer" />
                </Link>
                <div className="p-6">
                  <span className="text-sm text-gray-500 mb-2 block">{post.date}</span>
                  <h2 className="text-xl font-bold text-dark-primary mb-3 hover:text-gold transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.desc}</p>
                  <Link href={`/blog/${post.slug}`} className="text-gold font-bold hover:underline">
                    اقرأ المزيد
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
