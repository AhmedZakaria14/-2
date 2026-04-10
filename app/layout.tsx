import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

const cairo = Cairo({ subsets: ['arabic'], variable: '--font-arabic' });

export const metadata: Metadata = {
  metadataBase: new URL('https://dahanat-alriyadh.com'),
  title: {
    template: '%s | معلم دهانات الرياض',
    default: 'معلم دهانات الرياض | دهانات احترافية بضمان 5 سنوات',
  },
  description: 'معلم دهانات الرياض ☎️ 0598971755 — دهانات داخلية وخارجية، جوتن 5000، جبس بورد، إيبوكسي. معالجة رطوبة قبل الدهان. ضمان 5 سنوات. خدمة في جميع أحياء الرياض.',
  keywords: [
    'معلم دهانات الرياض', 'معلم دهانات بالرياض', 'معلم بويه الرياض', 'دهانات الرياض', 'دهان الرياض',
    'دهان معلم دهانات', 'مقاول دهان بالرياض', 'دهانات مباني الرياض', 'معلم دهانات',
    'دهان جوتن الرياض', 'دهانات جوتن 5000', 'دهانات الجزيرة الرياض', 'دهان جوتن 2000', 'دهان إيبوكسي الرياض',
    'دهانات داخلية الرياض', 'دهانات خارجية الرياض', 'دهانات ديكورات الرياض', 'ديكورات دهان الرياض',
    'جبس بورد الرياض', 'ورق جدران الرياض', 'مقاول دهان مباني', 'ترميم منازل الرياض', 'معالجة رطوبة الرياض',
    'دهانات حي النخيل', 'دهانات حي السفارات', 'دهانات حي الورود', 'دهانات حي العليا', 'دهانات حي الروضة',
    'دهانات حي الملقا', 'دهانات حي الربوة', 'دهانات حي المرسلات', 'دهانات حي الريان', 'دهانات حي الرائد',
    'دهانات شمال الرياض', 'دهانات شرق الرياض', 'دهانات غرب الرياض', 'دهانات جنوب الرياض'
  ],
  openGraph: {
    locale: 'ar_SA',
    type: 'website',
    siteName: 'معلم دهانات الرياض',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "معلم دهانات الرياض",
    "description": "خدمات دهانات احترافية بالرياض",
    "telephone": "+966598971755",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الرياض",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "url": "https://dahanat-alriyadh.com",
    "areaServed": "الرياض",
    "priceRange": "$$",
    "openingHours": "Mo-Su 07:00-21:00",
    "image": "https://dahanat-alriyadh.com/images/og-image.jpg"
  };

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-arabic bg-gray-50 text-dark-primary flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}