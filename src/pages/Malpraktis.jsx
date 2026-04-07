import { motion } from "framer-motion";
import SubPageHeader from "../components/SubPageHeader";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";

export default function Malpraktis() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] px-6 py-24 text-white">

      <SEO
        title="Samsun Malpraktis Avukatı | Tıbbi Uygulama Hatası | Gürpınar Hukuk"
        description="Tıbbi uygulama hatalarına ilişkin sorumluluk, bilirkişi ve dava süreçlerinde hukuki destek."
        canonical="https://gurpinarhukuk.com/malpraktis-avukati-samsun"
      />

      <SchemaMarkup
        name="Samsun Malpraktis Avukatı | Gürpınar Hukuk"
        description="Tıbbi uygulama hatalarına ilişkin hukuki destek."
        url="https://gurpinarhukuk.com/malpraktis-avukati-samsun"
        serviceType="Malpraktis"
      />

      <div className="mx-auto max-w-4xl">
        <SubPageHeader />
        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <h1 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Samsun Malpraktis Avukatı
        </h1>

        <p className="mt-6 leading-8 text-white/70">
          Malpraktis; tıbbi uygulama sırasında standartlara aykırılık iddiası nedeniyle
          ortaya çıkan sorumluluk uyuşmazlıklarını ifade eder. Bu alanda kayıtların ve
          bilirkişi sürecinin doğru yönetimi önemlidir.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Tıbbi Uygulama Hatası İddiaları</h2>
          <p className="leading-8 text-white/70">
            Tıbbi standartlara aykırılık iddiası bulunan dosyalarda olayın tıbbi ve hukuki
            boyutu birlikte değerlendirilmelidir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Dosya ve Kayıt İncelemesi</h2>
          <p className="leading-8 text-white/70">
            Tıbbi kayıtlar, aydınlatma belgeleri ve tedavi süreci dosyanın esasını oluşturur.
            Eksik veya çelişkili kayıtlar ayrıca önem taşır.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Bilirkişi ve Uzman Süreci</h2>
          <p className="leading-8 text-white/70">
            Malpraktis dosyalarında bilirkişi incelemesi çoğu zaman belirleyici niteliktedir.
            Bu nedenle teknik ve hukuki ilişkinin doğru kurulması gerekir.
          </p>
        </section>

        <motion.div
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold">Malpraktis desteği alın</h3>
          <p className="mt-4 text-white/60">
            Tıbbi uygulama hatası iddialarına ilişkin ön değerlendirme için iletişime geçebilirsiniz.
          </p>
          <a href="/#iletisim" className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
            İletişime Geç
          </a>
        </motion.div>
      </div>
    </div>
  );
}