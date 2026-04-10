import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone } from 'lucide-react';

// Mock data for the blog posts
const postsData: Record<string, any> = {
  'limatha-yatashakkaq-aldahan': {
    title: 'لماذا يتشقق الدهان بعد شهرين؟ (الأسباب الحقيقية والحل)',
    h1: 'لماذا يتشقق الدهان في المنازل بالرياض؟ — الأسباب والحلول',
    content: `
      <p>يعاني الكثير من أصحاب المنازل في الرياض من مشكلة تشقق الدهان وتقشره بعد فترة قصيرة من تنفيذه، مما يسبب إحباطاً كبيراً وخسارة مالية. في هذا المقال، سنوضح الأسباب الحقيقية وراء هذه المشكلة وكيفية تجنبها.</p>
      <h2>السبب الأول: الرطوبة الخفية</h2>
      <p>الرطوبة هي العدو الأول للدهانات. في كثير من الأحيان، تكون هناك تسربات مياه خفية في الجدران أو رطوبة متصاعدة من الأرضيات. إذا تم الدهان فوق هذه الرطوبة دون معالجتها، فإن الماء سيحاول التبخر، مما يؤدي إلى دفع طبقة الدهان وتقشرها.</p>
      <h2>السبب الثاني: الجبس الضعيف أو غير المعالج</h2>
      <p>استخدام أنواع رديئة من الجبس أو عدم صنفرة وتجهيز الجدار بشكل صحيح يمنع التصاق الدهان بقوة. يجب استخدام معجون أساس عالي الجودة وصنفرته جيداً.</p>
      <h2>السبب الثالث: العجلة في التنفيذ</h2>
      <p>بعض المقاولين يتسرعون في وضع طبقات الدهان فوق بعضها قبل أن تجف الطبقة السابقة تماماً. هذا يحبس الرطوبة بين الطبقات ويؤدي إلى التشقق لاحقاً.</p>
      <h2>الحل الجذري</h2>
      <p>الحل يكمن في الاستعانة بمعلم دهانات محترف يقوم بفحص الجدران أولاً، ومعالجة أي مصدر للرطوبة باستخدام عوازل متخصصة، ثم التأسيس الصحيح قبل وضع الدهان النهائي.</p>
    `,
    img: '/images/work/1.jpeg',
    date: '15 أكتوبر 2025'
  },
  'joton-5000-vs-2000': {
    title: 'جوتن 5000 مقابل جوتن 2000 — أيهما أفضل لمنزلك في الرياض؟',
    h1: 'مقارنة بين جوتن 5000 وجوتن 2000',
    content: '<p>مقارنة شاملة بين أشهر أنواع دهانات جوتن لمساعدتك في اختيار الأنسب لاحتياجاتك وميزانيتك...</p>',
    img: '/images/work/16.jpeg',
    date: '02 نوفمبر 2025'
  },
  'warraq-jidran-almatabikh': {
    title: 'هل يمكن تركيب ورق جدران في المطبخ بالرياض؟',
    h1: 'تركيب ورق الجدران في المطابخ: المزايا والعيوب',
    content: '<p>كل ما تحتاج معرفته عن تركيب ورق الجدران في المطابخ والأنواع المقاومة للحرارة والرطوبة...</p>',
    img: '/images/work/19.jpeg',
    date: '20 نوفمبر 2025'
  },
  'limatha-tatahallak-almuthalah': {
    title: 'لماذا تتهالك المظلة بعد سنة في الرياض؟ — الأسباب والحل',
    h1: 'أسباب تلف المظلات بسرعة في الرياض',
    content: '<p>أسباب تلف مظلات السيارات بسرعة في مناخ الرياض الحار وكيف تختار المظلة التي تدوم طويلاً...</p>',
    img: '/images/work/26.jpeg',
    date: '05 ديسمبر 2025'
  },
  'altarmim-am-aldahan-aljadid': {
    title: 'الترميم أم الدهان الجديد؟ — متى تحتاج كل منهما',
    h1: 'الفرق بين الترميم الشامل والدهان الجديد',
    content: '<p>دليلك لمعرفة متى يكفي الدهان الجديد ومتى يكون من الضروري إجراء ترميم شامل للجدران...</p>',
    img: '/images/work/28.jpeg',
    date: '18 ديسمبر 2025'
  },
  'afdal-dahanat-lilmanatiq-alharrah': {
    title: 'أفضل أنواع الدهانات لمناخ الرياض الحار — دليل شامل 2025',
    h1: 'أفضل الدهانات الخارجية لمناخ الرياض',
    content: '<p>استعراض لأفضل الدهانات الخارجية التي تتحمل أشعة الشمس القوية في الرياض دون أن يتغير لونها...</p>',
    img: '/images/work/31.jpeg',
    date: '10 يناير 2026'
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = postsData[resolvedParams.slug];
  
  if (!post) {
    return { title: 'مقال غير موجود' };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 150).replace(/<[^>]*>?/gm, ''),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = postsData[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.img,
    "datePublished": "2025-10-15T08:00:00+08:00",
    "author": {
      "@type": "Organization",
      "name": "معلم دهانات الرياض"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://dahanat-alriyadh.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المقالات",
        "item": "https://dahanat-alriyadh.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gold">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gold">المقالات</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 truncate">{post.title}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-dark-primary mb-6 leading-tight">
            {post.h1}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-500 mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>بواسطة: معلم دهانات الرياض</span>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
            <Image src={post.img} alt={post.title} fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          <div 
            className="prose prose-lg prose-gold max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100">
            <h3 className="text-2xl font-bold text-dark-primary mb-4">هل تواجه مشاكل في دهانات منزلك بالرياض؟</h3>
            <p className="text-gray-600 mb-6">نحن هنا للمساعدة. تواصل معنا للحصول على استشارة مجانية ومعاينة للموقع.</p>
            <div className="flex justify-center gap-4">
              <a href="tel:+966598971755" className="bg-gold hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-bold transition-colors flex items-center gap-2"><Phone size={20} /> اتصل الآن</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
