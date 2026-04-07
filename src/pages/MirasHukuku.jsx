import { motion } from "framer-motion";
import SubPageHeader from "../components/SubPageHeader";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";

export default function MirasHukuku() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] px-6 py-24 text-white">

      <SEO
        title="Samsun Miras Hukuku Avukatı | Tenkis, Vasiyetname ve Miras Paylaşımı | Gürpınar Hukuk"
        description="Miras paylaşımı, tenkis, vasiyetname ve muris muvazaası davaları için Samsun’da miras hukuku desteği."
        canonical="https://gurpinarhukuk.com/miras-hukuku-samsun"
      />

      <SchemaMarkup
        name="Samsun Miras Hukuku Avukatı | Gürpınar Hukuk"
        description="Miras paylaşımı ve miras uyuşmazlıklarına ilişkin hukuki destek."
        url="https://gurpinarhukuk.com/miras-hukuku-samsun"
        serviceType="Miras Hukuku"
      />
      <div className="mx-auto max-w-4xl">
        <SubPageHeader />

        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <h1 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Samsun Miras Hukuku Avukatı
        </h1>

        <p className="mt-6 leading-8 text-white/70">
          Miras hukuku; mirasın paylaşımı, saklı pay, tenkis, vasiyetname,
          tereke işlemleri ve muris muvazaası gibi önemli başlıkları kapsar.
          Gürpınar Hukuk, Samsun Atakum merkezli olarak miras hukuku alanında
          hukuki danışmanlık ve dava takibi hizmeti sunmaktadır.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Miras Paylaşımı Nasıl Yapılır?</h2>
          <p className="leading-8 text-white/70">
            Miras paylaşımı, mirasçı sıfatı, terekenin kapsamı ve varsa önceki
            tasarruf işlemleri dikkate alınarak değerlendirilir. Uyuşmazlık hâlinde
            paylaşım yargı yoluyla da çözülebilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Saklı Pay ve Tenkis Nedir?</h2>
          <p className="leading-8 text-white/70">
            Saklı pay, belirli mirasçılar için kanunen korunan miras hakkını ifade eder.
            Bu hakkın ihlal edildiği durumlarda tenkis davası gündeme gelebilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Vasiyetnameye İtiraz Mümkün müdür?</h2>
          <p className="leading-8 text-white/70">
            Vasiyetnamenin şekil, ehliyet veya irade sakatlığı yönünden hukuka aykırı
            olduğu ileri sürülüyorsa iptal veya tenkis süreçleri değerlendirilebilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Muris Muvazaası Davaları</h2>
          <p className="leading-8 text-white/70">
            Mirasçılardan mal kaçırma amacı taşıyan işlemler muris muvazaası kapsamında
            incelenebilir. Bu tür uyuşmazlıklarda işlem geçmişi ve tapu kayıtları
            dikkatle değerlendirilmelidir.
          </p>
        </section>

        <motion.div
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold">
            Miras hukuku konusunda destek almak için iletişime geçin
          </h3>
          <p className="mt-4 text-white/60">
            Somut olayınıza uygun ön değerlendirme ve hukuki yol haritası için
            ofisimizle iletişim kurabilirsiniz.
          </p>
          <a
            href="/#iletisim"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            İletişime Geç
          </a>
        </motion.div>
      </div>
    </div>
  );
}