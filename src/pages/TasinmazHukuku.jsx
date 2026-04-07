import { motion } from "framer-motion";
import SubPageHeader from "../components/SubPageHeader";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";

export default function TasinmazHukuku() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] px-6 py-24 text-white">

      <SEO
        title="Samsun Taşınmaz Hukuku Avukatı | Tapu, Kira ve Ecrimisil | Gürpınar Hukuk"
        description="Tapu iptal ve tescil, kira ilişkileri, ecrimisil ve mülkiyet kaynaklı uyuşmazlıklar için Samsun Atakum’da taşınmaz hukuku desteği."
        canonical="https://gurpinarhukuk.com/tasinmaz-hukuku-samsun"
      />

      <SchemaMarkup
        name="Samsun Taşınmaz Hukuku Avukatı | Gürpınar Hukuk"
        description="Tapu iptal ve tescil, kira ilişkileri ve mülkiyet uyuşmazlıklarına ilişkin hukuki destek."
        url="https://gurpinarhukuk.com/tasinmaz-hukuku-samsun"
        serviceType="Taşınmaz Hukuku"
      />

      <div className="mx-auto max-w-4xl">
        <SubPageHeader />
        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <h1 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Samsun Taşınmaz Hukuku Avukatı
        </h1>

        <p className="mt-6 leading-8 text-white/70">
          Taşınmaz hukuku; tapu kayıtları, mülkiyet hakkı, kira ilişkileri ve taşınmazın
          kullanımından doğan uyuşmazlıkları kapsar. Gürpınar Hukuk, Samsun Atakum’da
          taşınmaz hukukuna ilişkin hukuki danışmanlık ve dava takibi hizmeti sunmaktadır.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Tapu İptal ve Tescil Davaları</h2>
          <p className="leading-8 text-white/70">
            Tapu kayıtlarının gerçeğe aykırı olduğu veya hukuka aykırı işlemler sonucu
            oluştuğu iddia edildiğinde tapu iptal ve tescil davaları gündeme gelebilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Kira ve Tahliye Uyuşmazlıkları</h2>
          <p className="leading-8 text-white/70">
            Kira sözleşmeleri, kira bedeli, tahliye ve kullanım haklarına ilişkin uyuşmazlıklar
            taşınmaz hukukunun uygulamada en sık karşılaşılan alanlarından biridir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Ecrimisil ve Haksız Kullanım</h2>
          <p className="leading-8 text-white/70">
            Taşınmazın haksız kullanımı hâlinde ecrimisil talepleri doğabilir. Bu süreçte
            kullanımın niteliği ve talebin hukuki dayanağı önem taşır.
          </p>
        </section>

        <motion.div
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold">Taşınmaz hukuku konusunda destek alın</h3>
          <p className="mt-4 text-white/60">
            Tapu, kira ve mülkiyet kaynaklı uyuşmazlıklar için ofisimizle iletişim kurabilirsiniz.
          </p>
          <a href="/#iletisim" className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
            İletişime Geç
          </a>
        </motion.div>
      </div>
    </div>
  );
}