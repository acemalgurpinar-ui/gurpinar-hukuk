import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./components/SEO";
import SchemaMarkup from "./components/SchemaMarkup";
import { blogPosts } from "./data/blogPosts";

const logoSrc = "/logo.svg";
const heroImage = "/hero-masa.jpg";
const lawyerImage = "/avukat.jpg";
const bookshelfImage = "/kitaplik.jpg";

const practiceAreas = [
  {
    slug: "aile-hukuku",
    title: "Aile Hukuku",
    desc: "Boşanma (anlaşmalı/çekişmeli), velayet, nafaka ve mal rejimi uyuşmazlıklarının hukuki planlanması ve dava süreçlerinin yürütülmesi.",
    detailTitle: "Aile Hukuku",
    detailIntro:
      "Aile hukuku; evlilik birliği, boşanma, velayet, nafaka ve mal rejimi gibi kişisel ve mali sonuçları bulunan süreçleri kapsar. Bu alandaki hukuki destek, yalnızca dava takibinden ibaret değildir; sürecin doğru planlanması, delil yapısının değerlendirilmesi ve hak kaybı risklerinin önlenmesi bakımından da önem taşır.",
    scope: [
      "Anlaşmalı ve çekişmeli boşanma süreçleri",
      "Velayet ve kişisel ilişki düzenlemeleri",
      "Tedbir, iştirak ve yoksulluk nafakası",
      "Mal rejiminin tasfiyesi ve katkı payı talepleri",
    ],
  },
  {
    slug: "tazminat-hukuku",
    title: "Tazminat Hukuku",
    desc: "Haksız fiil ve sözleşmeye aykırılıktan doğan maddi–manevi tazminat taleplerinin tespiti, hesaplanması ve etkin takibi.",
    detailTitle: "Tazminat Hukuku",
    detailIntro:
      "Tazminat hukuku; kişiye, mala veya ticari ilişkiye yönelik zararların giderilmesine ilişkin talepleri konu alır. Maddi ve manevi zararların hukuki çerçevede değerlendirilmesi, uygun talep kalemlerinin belirlenmesi ve ispat yapısının kurulması sürecin temelini oluşturur.",
    scope: [
      "Maddi ve manevi tazminat talepleri",
      "Haksız fiilden doğan zararların değerlendirilmesi",
      "Sözleşmeye aykırılık kaynaklı zarar hesaplamaları",
      "Delil, bilirkişi ve dava stratejisinin planlanması",
    ],
  },
  {
    slug: "tasinmaz-hukuku",
    title: "Taşınmaz Hukuku",
    desc: "Tapu iptal ve tescil, kira ilişkileri, ecrimisil ve mülkiyet kaynaklı uyuşmazlıkların çözümü.",
    detailTitle: "Taşınmaz Hukuku",
    detailIntro:
      "Taşınmaz hukuku; mülkiyet, kullanım, zilyetlik ve tapu kayıtlarından kaynaklanan uyuşmazlıkları kapsar. Özellikle tapu kayıtlarının incelenmesi, ayni hakların niteliği ve taşınmaz üzerindeki tasarrufların hukuki sonucu dikkatle değerlendirilmelidir.",
    scope: [
      "Tapu iptal ve tescil davaları",
      "Kira ilişkileri ve tahliye süreçleri",
      "Ecrimisil ve haksız kullanım talepleri",
      "Mülkiyet ve ayni hak uyuşmazlıkları",
    ],
  },
  {
    slug: "kat-mulkiyeti-hukuku",
    title: "Kat Mülkiyeti Hukuku",
    desc: "Apartman/site yönetimi, aidat ve ortak giderler, yönetim planı ve komşuluk ihtilaflarına ilişkin hukuki süreçler.",
    detailTitle: "Kat Mülkiyeti Hukuku",
    detailIntro:
      "Kat mülkiyeti hukuku; apartman ve site yaşamından doğan ortak kullanım, aidat, yönetim ve komşuluk ilişkilerine dair uyuşmazlıkları düzenler. Bu alanda uyuşmazlıkların çözümü çoğu zaman hem mevzuat hem de yönetim planı hükümlerinin birlikte değerlendirilmesini gerektirir.",
    scope: [
      "Aidat ve ortak gider alacakları",
      "Yönetim planı ve kurul kararları",
      "Site ve apartman yönetimi uyuşmazlıkları",
      "Komşuluk hukukundan doğan ihtilaflar",
    ],
  },
  {
    slug: "miras-hukuku",
    title: "Miras Hukuku",
    desc: "Mirasın paylaşımı, tenkis, vasiyetname ve muris muvazaası davalarının hazırlanması ve takibi.",
    detailTitle: "Miras Hukuku",
    detailIntro:
      "Miras hukuku; ölüm sonrası malvarlığının intikali, mirasçıların hakları, saklı pay ve tasarruf işlemlerinin geçerliliği gibi konuları kapsar. Özellikle terekenin niteliği, mirasçı sıfatı ve önceki tasarruf işlemleri birlikte değerlendirilmelidir.",
    scope: [
      "Miras paylaşımı ve tereke işlemleri",
      "Tenkis ve saklı pay uyuşmazlıkları",
      "Vasiyetnameye ilişkin itiraz ve değerlendirmeler",
      "Muris muvazaası davaları",
    ],
  },
  {
    slug: "saglik-hukuku",
    title: "Sağlık Hukuku",
    desc: "Sağlık hizmet sunumundan doğan uyuşmazlıklar, hasta hakları ve kurumlara yönelik hukuki danışmanlık.",
    detailTitle: "Sağlık Hukuku",
    detailIntro:
      "Sağlık hukuku; hasta, hekim, sağlık kurumu ve idari yapılar arasındaki hukuki ilişkileri düzenleyen geniş bir alandır. Tedavi sürecine dair belgelerin, aydınlatma ve onam yapısının, mesleki standartların ve idari sorumlulukların birlikte incelenmesi gerekir.",
    scope: [
      "Hasta haklarına ilişkin uyuşmazlıklar",
      "Sağlık kurumları için hukuki danışmanlık",
      "Tedavi süreci ve belge incelemeleri",
      "Sorumluluk rejiminin hukuki analizi",
    ],
  },
  {
    slug: "malpraktis",
    title: "Malpraktis",
    desc: "Tıbbi uygulama hatalarına ilişkin sorumluluk analizleri, bilirkişi süreci ve dava stratejisinin oluşturulması.",
    detailTitle: "Malpraktis",
    detailIntro:
      "Malpraktis; tıbbi uygulama sırasında standartlara aykırılık iddiası nedeniyle doğan sorumluluk uyuşmazlıklarını ifade eder. Bu alanda tıbbi kayıtların değerlendirilmesi, bilirkişi sürecinin doğru yönetilmesi ve teknik–hukuki ilişkinin dikkatle kurulması kritik önemdedir.",
    scope: [
      "Tıbbi uygulama hatası iddialarının değerlendirilmesi",
      "Dosya ve tıbbi kayıt analizi",
      "Bilirkişi ve uzman görüşü sürecinin takibi",
      "Uygun dava stratejisinin oluşturulması",
    ],
  },
  {
    slug: "hukuki-danismanlik",
    title: "Hukuki Danışmanlık",
    desc: "Risk analizi, sözleşme hazırlama ve önleyici hukuk yaklaşımı ile bireysel/kurumsal danışmanlık hizmetleri.",
    detailTitle: "Hukuki Danışmanlık",
    detailIntro:
      "Hukuki danışmanlık; uyuşmazlık ortaya çıkmadan önce risklerin belirlenmesi, sözleşme ve işlem yapılarının doğru kurulması ve karar süreçlerinin hukuki güvenceyle desteklenmesini amaçlar. Önleyici hukuk yaklaşımı, uzun vadede çok daha güçlü sonuç verir.",
    scope: [
      "Sözleşme inceleme ve hazırlama",
      "Risk analizi ve ön değerlendirme",
      "Bireysel ve kurumsal hukuki görüş",
      "Uyuşmazlık öncesi stratejik planlama",
    ],
  },
  {
    slug: "icra-ve-iflas-hukuku",
    title: "İcra ve İflas Hukuku",
    desc: "Alacakların tahsili, icra takipleri, haciz işlemleri ve borçlunun malvarlığına yönelik hukuki süreçlerin etkin yönetimi.",
    detailTitle: "İcra ve İflas Hukuku",
    detailIntro:
      "İcra ve iflas hukuku; kesinleşmiş veya takibe konu edilebilir alacakların tahsil edilmesi, borçlunun malvarlığına yönelik işlemlerin yürütülmesi ve sürecin usule uygun şekilde ilerletilmesini kapsar. Bu alanda hızlı, dikkatli ve teknik takibin önemi yüksektir.",
    scope: [
      "İlamlı ve ilamsız icra takipleri",
      "Alacak ve nafaka tahsil süreçleri",
      "Haciz, muhafaza ve satış işlemleri",
      "Borçlunun malvarlığına yönelik hukuki takip",
    ],
  },
];

const practiceAreaSeoLinks = {
  "aile-hukuku": "/aile-hukuku-samsun",
  "tazminat-hukuku": "/tazminat-hukuku-samsun",
  "tasinmaz-hukuku": "/tasinmaz-hukuku-samsun",
  "kat-mulkiyeti-hukuku": "/kat-mulkiyeti-hukuku-samsun",
  "miras-hukuku": "/miras-hukuku-samsun",
  "saglik-hukuku": "/saglik-hukuku-samsun",
  malpraktis: "/malpraktis-avukati-samsun",
  "hukuki-danismanlik": "/hukuki-danismanlik-samsun",
  "icra-ve-iflas-hukuku": "/icra-ve-iflas-hukuku-samsun",
};

const usefulLinks = [
  {
    title: "Türkiye Barolar Birliği",
    href: "https://www.barobirlik.org.tr",
  },
  {
    title: "Samsun Barosu",
    href: "https://www.samsunbarosu.org.tr",
  },
  {
    title: "UYAP Vatandaş Portalı",
    href: "https://vatandas.uyap.gov.tr",
  },
  {
    title: "Resmî Gazete",
    href: "https://www.resmigazete.gov.tr",
  },
  {
    title: "Yargıtay",
    href: "https://www.yargitay.gov.tr",
  },
  {
    title: "Anayasa Mahkemesi",
    href: "https://www.anayasa.gov.tr",
  },
];

const footerLinks = {
  services: [
    { label: "Aile Hukuku", href: "/aile-hukuku-samsun" },
    { label: "Tazminat Hukuku", href: "/tazminat-hukuku-samsun" },
    { label: "Miras Hukuku", href: "/miras-hukuku-samsun" },
    { label: "İcra ve İflas Hukuku", href: "/icra-ve-iflas-hukuku-samsun" },
  ],
  corporate: [
    { label: "Hakkında", href: "#hakkinda" },
    { label: "İletişim", href: "#iletisim" },
    { label: "Faydalı Linkler", href: "#faydali-linkler" },
    { label: "SSS", href: "#sss" },
  ],
};

const officeInfo = {
  lawyerName: "Avukat Nisa Selin Gürpınar",
  bio: "Avukat Nisa Selin Gürpınar, 2020 yılında Bahçeşehir Üniversitesi Hukuk Fakültesi'nden onur derecesi ile mezun olmuştur. 2022 yılından bu yana kurucusu olduğu ofiste, yurtiçi ve yurtdışından müvekkillerine hukuki danışmanlık ve vekalet hizmeti sunmaktadır. Çalışmalarını; dosya bazlı analiz, stratejik planlama ve sürecin etkin yönetimi ilkeleri çerçevesinde yürütmektedir.",
  address: "Yenimahalle 3066. Sokak No: 15 Atakum / Samsun",
  email: "avselingurpinar@gmail.com",
  phone: "+90 (507) 140 35 11",
  whatsapp: "905071403511",
  mapsUrl: "https://maps.app.goo.gl/HQeK2iHcWqxiS3Gx8",
};

const whatsappMessage = encodeURIComponent(
  "Merhaba, hukuki danışmanlık hakkında bilgi almak istiyorum."
);

const navLinks = [
  { label: "Çalışma Alanları", href: "#calisma-alanlari" },
  { label: "Hakkında", href: "#hakkinda" },
  { label: "Blog", href: "/blog" },
  { label: "Faydalı Linkler", href: "#faydali-linkler" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

const faqItems = [
  {
    question: "İlk görüşme için hangi bilgileri hazırlamam gerekir?",
    answer:
      "Başvurunun niteliğine göre kimlik bilgileri, mevcut belge ve tutanaklar, sözleşmeler, yazışmalar ve varsa önceki dava veya icra dosyalarına ilişkin bilgiler ön değerlendirme sürecini hızlandırır.",
  },
  {
    question: "Online danışmanlık hizmeti sunuluyor mu?",
    answer:
      "Dosyanın niteliğine uygun olduğu ölçüde çevrim içi ön değerlendirme ve hukuki danışmanlık planlanabilmektedir. Ayrıntılar için iletişim kanallarından ofisle bağlantı kurulabilir.",
  },
  {
    question: "Boşanma ve aile hukuku süreçlerinde nasıl bir yol izlenir?",
    answer:
      "Uyuşmazlığın niteliğine göre öncelikle mevcut belgeler, talepler, çocukların durumu ve mali sonuçlar değerlendirilir; ardından sürece uygun hukuki yol haritası oluşturulur.",
  },
  {
    question: "Tazminat ve alacak dosyalarında süreç neye göre şekillenir?",
    answer:
      "Zararın niteliği, dayanak belgeler, taraflar arasındaki hukuki ilişki ve ispat yapısı değerlendirilerek dava veya takip stratejisi belirlenir.",
  },
  {
    question: "İcra takibi başlatmadan önce hangi belgeler gerekir?",
    answer:
      "Alacağın dayanağına göre sözleşme, fatura, senet, yazışmalar veya mahkeme kararı gibi belgeler gerekebilir. Somut olayın niteliği belge setini değiştirir.",
  },
  {
    question: "Web sitesindeki bilgiler hukuki danışmanlık yerine geçer mi?",
    answer:
      "Hayır. Bu sitede yer alan içerikler genel bilgilendirme amacı taşır. Somut olayın özelliklerine göre profesyonel hukuki değerlendirme yapılması gerekir.",
  },
];


function AreaDetailModal({ area, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!area) return;
    const prev = document.activeElement;
    modalRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      prev?.focus();
    };
  }, [area, onClose]);

  return (
    <AnimatePresence>
      {area && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#111214] p-8 text-white shadow-2xl outline-none md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Modalı kapat"
              className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:bg-white/10"
            >
              Kapat
            </button>

            <div className="mb-5 h-[2px] w-16 bg-[#D4B26D]" />
            <div className="text-sm uppercase tracking-[0.18em] text-[#D4B26D]">Çalışma Alanı</div>
            <h3 id="modal-title" className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              {area.detailTitle}
            </h3>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
              {area.detailIntro}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {area.scope.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="mb-3 h-[2px] w-10 bg-[#D4B26D]" />
                  <p className="leading-7 text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="sss" className="scroll-mt-20 bg-[#0B0B0C] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <h2 className="text-4xl font-semibold tracking-[-0.02em]">
          Sık Sorulan Sorular
        </h2>
        <p className="mt-5 max-w-3xl leading-8 text-white/60">
          Hukuki süreçlere ilişkin genel bilgilendirme amacıyla hazırlanan kısa açıklamalar.
          Somut olayın özelliklerine göre değerlendirme farklılık gösterebilir.
        </p>

        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-white md:text-lg">
                    {item.question}
                  </span>
                  <span className="text-xl text-[#D4B26D]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-white/65 md:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 pb-10 pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold text-white">Gürpınar Hukuk</div>
          <p className="mt-4 text-sm leading-7 text-white/60">
            Hukuki süreçlerde stratejik yaklaşım ve etkin temsil ilkeleri doğrultusunda,
            bireysel ve kurumsal müvekkillere danışmanlık ve dava hizmeti sunulmaktadır.
          </p>
        </div>

        <div>
          <div className="text-sm uppercase tracking-[0.15em] text-[#D4B26D]">Hizmetler</div>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {footerLinks.services.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm uppercase tracking-[0.15em] text-[#D4B26D]">Kurumsal</div>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {footerLinks.corporate.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm uppercase tracking-[0.15em] text-[#D4B26D]">İletişim</div>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            <div>{officeInfo.address}</div>

            <a
              href={officeInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#D4B26D] transition hover:text-white"
            >
            
            </a>

            <a
              href={`tel:${officeInfo.phone.replace(/\s/g, "")}`}
              className="block transition hover:text-white"
            >
              {officeInfo.phone}
            </a>

            <a
              href={`mailto:${officeInfo.email}`}
              className="block transition hover:text-white"
            >
              {officeInfo.email}
            </a>

            <a
              href={`https://wa.me/${officeInfo.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
        <div>© {new Date().getFullYear()} Gürpınar Hukuk. Tüm hakları saklıdır.</div>

        <div className="flex flex-wrap gap-4">
          <Link to="/kvkk" className="transition hover:text-white">
            KVKK Aydınlatma Metni
          </Link>
          <Link to="/gizlilik-politikasi" className="transition hover:text-white">
            Gizlilik Politikası
          </Link>
          <Link to="/cerez-politikasi" className="transition hover:text-white">
            Çerez Politikası
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-6xl text-xs leading-6 text-white/30">
        Bu internet sitesinde yer alan bilgiler genel bilgilendirme amacı taşımaktadır.
        İçerikler, herhangi bir hukuki danışmanlık veya avukat-müvekkil ilişkisi oluşturmaz.
        Somut olayınıza ilişkin hukuki değerlendirme için profesyonel destek almanız önerilir.
      </div>
    </footer>
  );
}

export default function HomePage() {
  const ref = useRef(null);
  const bioImageRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(8px)"]);

  const { scrollYProgress: bioProgress } = useScroll({
    target: bioImageRef,
    offset: ["start end", "end start"],
  });

  const bioY = useTransform(bioProgress, [0, 1], [70, -70]);
  const bioScale = useTransform(bioProgress, [0, 0.5, 1], [1.12, 1.02, 1.1]);
  const bioOpacity = useTransform(bioProgress, [0, 0.15, 0.85, 1], [0.45, 1, 1, 0.55]);

  const [selectedArea, setSelectedArea] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const latestPosts = useMemo(
    () =>
      [...blogPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3),
    []
  );
  
  const areaMap = useMemo(
    () => Object.fromEntries(practiceAreas.map((a) => [a.slug, a])),
    []
  );

  const handleNavClick = (e, href) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
  <div ref={ref} className="relative min-h-screen bg-[#0B0B0C] text-white">
    <SEO
      title="Av. Nisa Selin Gürpınar | Samsun Atakum Avukatlık ve Hukuki Danışmanlık"
      description="Gürpınar Hukuk, Samsun Atakum'da aile hukuku, tazminat hukuku, miras hukuku, taşınmaz hukuku, icra ve iflas hukuku ile hukuki danışmanlık alanlarında avukatlık hizmeti sunmaktadır."
      canonical="https://gurpinarhukuk.com/"
    />

    <SchemaMarkup
      name="Gürpınar Hukuk"
      description="Samsun Atakum'da aile hukuku, tazminat hukuku, miras hukuku, taşınmaz hukuku, icra ve iflas hukuku ve hukuki danışmanlık alanlarında hizmet veren hukuk bürosu."
      url="https://gurpinarhukuk.com/"
      serviceType={[
        "Aile Hukuku",
        "Tazminat Hukuku",
        "Taşınmaz Hukuku",
        "Kat Mülkiyeti Hukuku",
        "Miras Hukuku",
        "Sağlık Hukuku",
        "Malpraktis",
        "Hukuki Danışmanlık",
        "İcra ve İflas Hukuku",
      ]}
    />

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-black/10 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0">
          <div className="flex items-center gap-4">
            <img src={logoSrc} alt="Gürpınar Hukuk logosu" className="h-20 w-auto" />
            <div className="text-sm uppercase tracking-[0.40em] text-[#D4B26D] font-serif font">
              Gürpınar Hukuk
            </div>
          </div>

          <nav aria-label="Ana gezinti">
            <ul className="m-0 hidden list-none items-center gap-8 p-0 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label="Menüyü aç"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 md:hidden"
          >
            Menü
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="border-t border-white/10 bg-[#0B0B0C]/95 px-4 py-4 md:hidden"
            >
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        setMobileMenuOpen(false);
                      }}
                      className="block rounded-xl px-3 py-3 text-white/75 transition hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="pt-10">
        <section className="relative flex h-screen items-center justify-center overflow-hidden px-6 text-center">
          <div className="absolute inset-0 bg-[#1a1812]" />

          <motion.img
            src={heroImage}
            style={{ scale: heroScale, filter: heroBlur }}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            alt=""
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/75" />

          <motion.div
            className="relative z-10 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              className="leading-[1.1] tracking-[-0.01em]"
            >
              <span className="block text-5xl font-light not-italic text-white/80 md:text-5xl">
                Hukuki süreçlerde stratejik yaklaşım
              </span>
              <span
                className="mt-4 block text-2xl font-normal not-italic tracking-[0.04em] text-white/85 md:text-3xl"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Güvenilir hukuki destek
              </span>
            </h1>

            <div className="mx-auto mt-10 h-px w-60 bg-[#D4B26D]/45" />
          </motion.div>
        </section>

        <section id="calisma-alanlari" className="relative scroll-mt-20 px-6 py-24">
          <div className="absolute inset-0 bg-[#0d0c09]" />
          <img
            src={bookshelfImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/65" />

          <div className="relative mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {practiceAreas.map((item) => (
              <motion.button
                key={item.title}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedArea(areaMap[item.slug])}
                aria-label={`${item.title} detaylarını incele`}
                className="group rounded-2xl border border-white/10 bg-black/30 p-8 text-left backdrop-blur-sm transition-all duration-300 hover:border-[#D4B26D]/40 hover:bg-black/50"
              >
                <div className="mb-4 h-[2px] w-10 bg-[#D4B26D] transition-all duration-300 group-hover:w-16" />
                <div className="text-lg font-medium">{item.title}</div>
                <div className="mt-3 text-sm leading-7 text-white/55">{item.desc}</div>

                <a
                  href={practiceAreaSeoLinks[item.slug]}
                  className="mt-5 inline-block text-sm text-[#D4B26D] hover:text-[#e7c98b]"
                  onClick={(e) => e.stopPropagation()}
                >
                  Detaylı bilgi →
                </a>

                <div className="mt-5 translate-x-0 text-xl text-[#D4B26D] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="hakkinda" className="scroll-mt-20 bg-[#0B0B0C] px-6 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div
              ref={bioImageRef}
              className="relative h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl"
            >
              <motion.img
                src={lawyerImage}
                style={{ y: bioY, scale: bioScale, opacity: bioOpacity }}
                initial={{ opacity: 0, scale: 1.16, filter: "blur(18px)" }}
                whileInView={{ opacity: 1, scale: 1.06, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-[118%] w-full object-cover will-change-transform"
                alt={officeInfo.lawyerName}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("flex", "items-center", "justify-center");
                  const el = document.createElement("div");
                  el.className = "text-white/20 text-4xl";
                  el.textContent = "NSG";
                  e.currentTarget.parentElement.appendChild(el);
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
              <h2 className="mb-6 text-4xl font-semibold tracking-[-0.02em]">Avukat Hakkında</h2>
              <p className="leading-8 text-white/60">{officeInfo.bio}</p>
            </motion.div>
          </div>
        </section>

        <section id="faydali-linkler" className="scroll-mt-20 bg-[#0D0D0E] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
            <h2 className="text-4xl font-semibold tracking-[-0.02em]">Faydalı Linkler</h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {usefulLinks.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#D4B26D]/40 hover:bg-white/[0.05]"
                >
                  <div className="mb-4 h-[2px] w-10 bg-[#D4B26D] transition-all duration-300 group-hover:w-16" />
                  <div className="text-lg font-medium text-white">{item.title}</div>
                  <div className="mt-3 text-sm leading-7 text-white/55">{item.desc}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B0B0C] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
                <h2 className="text-4xl font-semibold tracking-[-0.02em]">Blog</h2>
                <p className="mt-5 max-w-3xl leading-8 text-white/60">
                  Hukuki sÃ¼reÃ§lere dair genel bilgilendirme yazÄ±larÄ±. Her konu,
                  somut olayÄ±n Ã¶zelliklerine gÃ¶re ayrÄ±ca deÄŸerlendirilmelidir.
                </p>
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center text-sm text-[#D4B26D] transition hover:text-[#e7c98b]"
              >
                TÃ¼m yazÄ±larÄ± gÃ¶rÃ¼ntÃ¼le â†’
              </Link>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {latestPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#D4B26D]/40 hover:bg-white/[0.05]"
                >
                  <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />

                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-white/45">
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      {post.category}
                    </span>
                    <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.01em]">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="transition hover:text-[#D4B26D]"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-6 inline-block text-sm text-[#D4B26D] hover:underline"
                  >
                    DevamÄ±nÄ± Oku â†’
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />

        <section id="iletisim" className="scroll-mt-20 px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
          >
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-white/10 p-10 md:p-14 lg:border-b-0 lg:border-r">
                <div className="text-sm uppercase tracking-[0.18em] text-[#D4B26D]">İletişim</div>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                  Ofis Bilgileri
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-white/60">
                  Ofis adresi ve telefon bilgisi üzerinden bizimle iletişim kurabilirsiniz.
                </p>

                <div className="mt-10 space-y-8 text-white/75">
                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-white/40">Adres</div>
                    <div className="mt-2 text-lg">{officeInfo.address}</div>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    <iframe
                      src="https://www.google.com/maps?q=Yenimahalle%203066.%20Sokak%20No:%2015%20Atakum%20Samsun&output=embed"
                      width="100%"
                      height="320"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Gürpınar Hukuk Konum"
                    />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-white/40">Telefon</div>
                    <a
                      href={`tel:${officeInfo.phone.replace(/\s/g, "")}`}
                      className="mt-2 block text-lg transition-colors hover:text-[#D4B26D]"
                    >
                      {officeInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-14">
                <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#D4B26D]">
                    Hızlı İletişim
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                    Bize en hızlı şekilde ulaşın
                  </h3>

                  <p className="mt-4 leading-8 text-white/60">
                    İlk değerlendirme ve danışmanlık süreci için telefon, e-posta veya
                    WhatsApp üzerinden iletişim kurabilirsiniz.
                  </p>

                  <div className="mt-8 space-y-4">
                    <a
                      href={`https://wa.me/${officeInfo.whatsapp}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-[#D4B26D]/40 hover:bg-white/[0.05]"
                    >
                      <div>
                        <div className="text-xs uppercase tracking-[0.14em] text-white/40">
                          WhatsApp
                        </div>
                        <div className="mt-1 text-base text-white">
                          WhatsApp ile iletişim kurun
                        </div>
                      </div>
                      <div className="text-[#D4B26D]">→</div>
                    </a>

                    <a
                      href={`tel:${officeInfo.phone.replace(/\s/g, "")}`}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-[#D4B26D]/40 hover:bg-white/[0.05]"
                    >
                      <div>
                        <div className="text-xs uppercase tracking-[0.14em] text-white/40">
                          Telefon
                        </div>
                        <div className="mt-1 text-base text-white">{officeInfo.phone}</div>
                      </div>
                      <div className="text-[#D4B26D]">→</div>
                    </a>

                    <a
                      href={`mailto:${officeInfo.email}`}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-[#D4B26D]/40 hover:bg-white/[0.05]"
                    >
                      <div>
                        <div className="text-xs uppercase tracking-[0.14em] text-white/40">
                          E-posta
                        </div>
                        <div className="mt-1 text-base text-white break-all">
                          {officeInfo.email}
                        </div>
                      </div>
                      <div className="text-[#D4B26D]">→</div>
                    </a>
                  </div>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-xs uppercase tracking-[0.14em] text-white/40">
                      Not
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/55">
                      Web sitesinde yer alan iletişim kanalları genel başvuru ve ön değerlendirme
                      amacıyla kullanılmaktadır. Somut olayınıza ilişkin hukuki değerlendirme,
                      dosya içeriğine göre ayrıca ele alınır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>

      <a
        href={`https://wa.me/${officeInfo.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim kur"
        className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 rounded-full border border-white/10 bg-[#1c1c1d]/95 px-5 py-3 text-sm text-white shadow-2xl backdrop-blur transition hover:scale-[1.02] hover:bg-[#252527]"
      >
        <span className="inline-flex h-3 w-3 rounded-full bg-[#25D366]" />
        WhatsApp
      </a>

      <AreaDetailModal area={selectedArea} onClose={() => setSelectedArea(null)} />
    </div>
  );
}
