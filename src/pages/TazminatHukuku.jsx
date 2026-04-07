import { motion } from "framer-motion";
import SubPageHeader from "../components/SubPageHeader";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";

export default function TazminatHukuku() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] px-6 py-24 text-white">
      <SEO
        title="Samsun Tazminat Hukuku Avukatı | Maddi ve Manevi Tazminat | Gürpınar Hukuk"
        description="Samsun Atakum’da haksız fiil ve sözleşmeye aykırılıktan doğan maddi ve manevi tazminat taleplerine ilişkin hukuki danışmanlık ve dava takibi hizmeti."
        canonical="https://gurpinarhukuk.com/tazminat-hukuku-samsun"
      />

      <SchemaMarkup
        name="Samsun Tazminat Hukuku Avukatı | Gürpınar Hukuk"
        description="Haksız fiil ve sözleşmeye aykırılıktan doğan maddi ve manevi tazminat taleplerine ilişkin hukuki danışmanlık ve dava takibi hizmeti."
        url="https://gurpinarhukuk.com/tazminat-hukuku-samsun"
        serviceType="Tazminat Hukuku"
      />

      <div className="mx-auto max-w-4xl">
        <SubPageHeader />

        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <h1 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Samsun Tazminat Hukuku Avukatı
        </h1>

        <p className="mt-6 leading-8 text-white/70">
          Tazminat hukuku; haksız fiil, sözleşmeye aykırılık, maddi zarar ve
          manevi zarar gibi başlıkları kapsar. Gürpınar Hukuk, Samsun Atakum
          merkezli olarak tazminat taleplerinin değerlendirilmesi ve hukuki
          takibi konusunda destek sunmaktadır.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Maddi ve Manevi Tazminat</h2>
          <p className="leading-8 text-white/70">
            Zararın niteliğine göre maddi ve manevi tazminat talepleri birlikte
            veya ayrı ayrı değerlendirilebilir. Talebin dayanağı ve ispat yapısı
            sürecin temel unsurudur.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Zararın Hesaplanması</h2>
          <p className="leading-8 text-white/70">
            Tazminat miktarı belirlenirken zarar kalemleri, olayın niteliği,
            tarafların durumu ve deliller birlikte değerlendirilir. Bazı
            dosyalarda bilirkişi incelemesi önem kazanır.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Delil ve Başvuru Süreci</h2>
          <p className="leading-8 text-white/70">
            Başvuru öncesinde olayla ilgili belge, yazışma, rapor, tutanak ve
            benzeri kayıtların düzenli şekilde değerlendirilmesi hak kaybı riskini
            azaltır.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Stratejik Hukuki Takip</h2>
          <p className="leading-8 text-white/70">
            Tazminat dosyalarında doğru hukuki yolun seçilmesi, talep kalemlerinin
            uygun kurulması ve sürecin düzenli takibi sonuç üzerinde belirleyicidir.
          </p>
        </section>

        <motion.div
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold">
            Tazminat hukuku konusunda destek almak için iletişime geçin
          </h3>
          <p className="mt-4 text-white/60">
            Dosyanızın niteliğine uygun ön değerlendirme ve hukuki destek için
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