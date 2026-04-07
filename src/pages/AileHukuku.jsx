import { motion } from "framer-motion";
import SubPageHeader from "../components/SubPageHeader";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";

export default function AileHukuku() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] px-6 py-24 text-white">

      <SEO
        title="Samsun Aile Hukuku Avukatı | Boşanma, Velayet ve Nafaka | Gürpınar Hukuk"
        description="Gürpınar Hukuk, Samsun Atakum’da boşanma, velayet, nafaka ve mal rejimi uyuşmazlıklarına ilişkin aile hukuku danışmanlığı ve dava takibi hizmeti sunmaktadır."
        canonical="https://gurpinarhukuk.com/aile-hukuku-samsun"
      />

      <SchemaMarkup
        name="Samsun Aile Hukuku Avukatı | Gürpınar Hukuk"
        description="Boşanma, velayet, nafaka ve mal rejimi uyuşmazlıklarına ilişkin aile hukuku danışmanlığı ve dava takibi hizmeti."
        url="https://gurpinarhukuk.com/aile-hukuku-samsun"
        serviceType="Aile Hukuku"
      />
      <div className="mx-auto max-w-4xl">
        <SubPageHeader />

        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <h1 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Samsun Aile Hukuku Avukatı
        </h1>

        <p className="mt-6 leading-8 text-white/70">
          Aile hukuku; boşanma, velayet, nafaka ve mal paylaşımı gibi bireylerin
          hayatını doğrudan etkileyen hukuki süreçleri kapsar. Gürpınar Hukuk,
          Samsun Atakum merkezli olarak aile hukuku alanında danışmanlık ve dava
          takibi hizmeti sunmaktadır.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Boşanma Süreci Nasıl İşler?</h2>
          <p className="leading-8 text-white/70">
            Boşanma davaları anlaşmalı veya çekişmeli olarak yürütülür. Anlaşmalı
            boşanmada taraflar temel hususlarda mutabakata varırken, çekişmeli
            boşanmada velayet, nafaka ve mal paylaşımı gibi konular mahkeme
            tarafından değerlendirilir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Velayet Nasıl Belirlenir?</h2>
          <p className="leading-8 text-white/70">
            Mahkeme, çocuğun üstün yararını esas alarak karar verir. Ebeveynlerin
            sosyal, ekonomik ve kişisel koşulları bu süreçte dikkate alınır.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Nafaka Türleri Nelerdir?</h2>
          <ul className="list-disc pl-6 leading-8 text-white/70">
            <li>Tedbir nafakası</li>
            <li>İştirak nafakası</li>
            <li>Yoksulluk nafakası</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Süreçte Sık Yapılan Hatalar</h2>
          <ul className="list-disc pl-6 leading-8 text-white/70">
            <li>Eksik belge ile sürece başlanması</li>
            <li>Duygusal reflekslerle hareket edilmesi</li>
            <li>Profesyonel hukuki destek alınmaması</li>
          </ul>
        </section>

        <motion.div
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold">
            Hukuki destek almak için iletişime geçin
          </h3>
          <p className="mt-4 text-white/60">
            Dosyanıza özel değerlendirme ve danışmanlık için bizimle iletişime
            geçebilirsiniz.
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