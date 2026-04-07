import { motion } from "framer-motion";
import SubPageHeader from "../components/SubPageHeader";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";

export default function SaglikHukuku() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] px-6 py-24 text-white">

      <SEO
        title="Samsun Sağlık Hukuku Avukatı | Hasta Hakları ve Uyuşmazlıklar | Gürpınar Hukuk"
        description="Hasta hakları ve sağlık hizmetlerinden doğan uyuşmazlıklar için Samsun’da sağlık hukuku desteği."
        canonical="https://gurpinarhukuk.com/saglik-hukuku-samsun"
      />

      <SchemaMarkup
        name="Samsun Sağlık Hukuku Avukatı | Gürpınar Hukuk"
        description="Sağlık hizmetlerinden doğan uyuşmazlıklara ilişkin hukuki destek."
        url="https://gurpinarhukuk.com/saglik-hukuku-samsun"
        serviceType="Sağlık Hukuku"
      />
      <div className="mx-auto max-w-4xl">
        <SubPageHeader />
        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <h1 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Samsun Sağlık Hukuku Avukatı
        </h1>

        <p className="mt-6 leading-8 text-white/70">
          Sağlık hukuku; hasta, hekim, sağlık kurumu ve idari yapı arasındaki hukuki
          ilişkileri kapsar. Tedavi süreci, aydınlatma, onam ve hasta hakları bu alanın
          temel başlıkları arasındadır.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Hasta Hakları</h2>
          <p className="leading-8 text-white/70">
            Sağlık hizmeti sunumu sırasında hastanın bilgilendirilmesi, onam süreci ve
            kayıt düzeni önemli hukuki sonuçlar doğurabilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Sağlık Kurumlarına Danışmanlık</h2>
          <p className="leading-8 text-white/70">
            Sağlık kurumlarının mevzuata uyum, belge düzeni ve sorumluluk yönetimi bakımından
            hukuki destek ihtiyacı doğabilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Belge ve Süreç İncelemesi</h2>
          <p className="leading-8 text-white/70">
            Dosya içeriğindeki kayıtlar, onam formları ve tıbbi süreç belgeleri hukuki
            değerlendirmede birlikte ele alınmalıdır.
          </p>
        </section>

        <motion.div
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold">Sağlık hukuku desteği alın</h3>
          <p className="mt-4 text-white/60">
            Sağlık hizmet sunumundan doğan uyuşmazlıklar için ofisimizle iletişim kurabilirsiniz.
          </p>
          <a href="/#iletisim" className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
            İletişime Geç
          </a>
        </motion.div>
      </div>
    </div>
  );
}