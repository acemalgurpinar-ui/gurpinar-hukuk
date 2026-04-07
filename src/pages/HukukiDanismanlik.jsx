import { motion } from "framer-motion";
import SubPageHeader from "../components/SubPageHeader";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";

export default function HukukiDanismanlik() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] px-6 py-24 text-white">

      <SEO
        title="Samsun Hukuki Danışmanlık | Sözleşme ve Risk Analizi | Gürpınar Hukuk"
        description="Sözleşme hazırlama, risk analizi ve önleyici hukuk kapsamında hukuki danışmanlık hizmeti."
        canonical="https://gurpinarhukuk.com/hukuki-danismanlik-samsun"
      />

      <SchemaMarkup
        name="Samsun Hukuki Danışmanlık | Gürpınar Hukuk"
        description="Bireysel ve kurumsal hukuki danışmanlık hizmeti."
        url="https://gurpinarhukuk.com/hukuki-danismanlik-samsun"
        serviceType="Hukuki Danışmanlık"
      />

      <div className="mx-auto max-w-4xl">
        <SubPageHeader />
        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <h1 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Samsun Hukuki Danışmanlık
        </h1>

        <p className="mt-6 leading-8 text-white/70">
          Hukuki danışmanlık; uyuşmazlık çıkmadan önce risklerin belirlenmesi, sözleşme
          ve işlem yapısının doğru kurulması ve karar süreçlerinin hukuki güvenceyle
          desteklenmesini amaçlar.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Sözleşme İnceleme ve Hazırlama</h2>
          <p className="leading-8 text-white/70">
            Sözleşmelerin açık, dengeli ve hukuka uygun şekilde hazırlanması ileride ortaya
            çıkabilecek uyuşmazlıkların önlenmesinde önem taşır.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Risk Analizi</h2>
          <p className="leading-8 text-white/70">
            İşlem öncesi hukuki risklerin belirlenmesi, kişi ve kurumlara daha öngörülebilir
            karar alma imkânı sağlar.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Önleyici Hukuk Yaklaşımı</h2>
          <p className="leading-8 text-white/70">
            Uyuşmazlık ortaya çıkmadan önce alınacak doğru hukuki önlemler, uzun vadede daha
            güçlü ve daha güvenli sonuç verir.
          </p>
        </section>

        <motion.div
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold">Hukuki danışmanlık için iletişime geçin</h3>
          <p className="mt-4 text-white/60">
            Bireysel veya kurumsal hukuki danışmanlık ihtiyacınız için ofisimizle iletişime geçebilirsiniz.
          </p>
          <a href="/#iletisim" className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black">
            İletişime Geç
          </a>
        </motion.div>
      </div>
    </div>
  );
}