import { motion } from "framer-motion";
import SubPageHeader from "../components/SubPageHeader";
import SEO from "../components/SEO";
import SchemaMarkup from "../components/SchemaMarkup";

export default function IcraIflasHukuku() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] px-6 py-24 text-white">

      <SEO
        title="Samsun İcra ve İflas Hukuku Avukatı | Alacak ve Haciz | Gürpınar Hukuk"
        description="Alacak tahsili, icra takipleri ve haciz işlemleri için Samsun’da icra ve iflas hukuku desteği."
        canonical="https://gurpinarhukuk.com/icra-ve-iflas-hukuku-samsun"
      />

      <SchemaMarkup
        name="Samsun İcra ve İflas Hukuku Avukatı | Gürpınar Hukuk"
        description="İcra takipleri ve alacak tahsiline ilişkin hukuki destek."
        url="https://gurpinarhukuk.com/icra-ve-iflas-hukuku-samsun"
        serviceType="İcra ve İflas Hukuku"
      />
      <div className="mx-auto max-w-4xl">
        <SubPageHeader />

        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <h1 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Samsun İcra ve İflas Hukuku Avukatı
        </h1>

        <p className="mt-6 leading-8 text-white/70">
          İcra ve iflas hukuku; alacakların tahsili, ilamlı ve ilamsız takipler,
          haciz işlemleri ve borçlunun malvarlığına yönelik hukuki süreçleri
          kapsar. Gürpınar Hukuk, Samsun Atakum merkezli olarak bu alanda
          hukuki danışmanlık ve takip desteği sunmaktadır.
        </p>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">İcra Takibi Nasıl Başlatılır?</h2>
          <p className="leading-8 text-white/70">
            Alacağın niteliğine göre ilamlı veya ilamsız icra takibi başlatılabilir.
            Başvuru öncesinde dayanak belgenin ve sürecin hukuki çerçevesinin doğru
            değerlendirilmesi gerekir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Haciz ve Tahsil Süreci</h2>
          <p className="leading-8 text-white/70">
            Takibin kesinleşmesinden sonra borçlunun malvarlığına yönelik işlemler
            gündeme gelebilir. Bu aşamada sürelerin ve usul kurallarının dikkatle
            takibi önem taşır.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Borçlu ve Alacaklı Açısından Riskler</h2>
          <p className="leading-8 text-white/70">
            İcra süreçleri hem alacaklı hem borçlu bakımından önemli hukuki sonuçlar
            doğurur. Hak kaybı yaşamamak için sürecin profesyonel şekilde yönetilmesi
            gerekir.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold">Nafaka ve Diğer Alacak Takipleri</h2>
          <p className="leading-8 text-white/70">
            Nafaka, ticari alacak, sözleşme alacağı ve benzeri birçok talep icra
            hukuku kapsamında değerlendirilir. Her dosyada uygun takip türünün
            seçilmesi önemlidir.
          </p>
        </section>

        <motion.div
          className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold">
            İcra ve iflas hukuku konusunda destek almak için iletişime geçin
          </h3>
          <p className="mt-4 text-white/60">
            Alacak takibi ve icra süreçlerine ilişkin ön değerlendirme için
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