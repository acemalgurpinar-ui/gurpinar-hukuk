import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { policyContent } from "../policyContent";

export default function PolicyPage({ type }) {
  const policy = policyContent[type];

  if (!policy) {
    return (
      <div className="min-h-screen bg-[#0B0B0C] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 h-[2px] w-12 bg-[#D4B26D]" />
          <h1 className="text-4xl font-semibold tracking-[-0.03em]">
            Sayfa bulunamadı
          </h1>
          <p className="mt-6 leading-8 text-white/65">
            Aradığınız içerik mevcut değil.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white transition hover:border-[#D4B26D]/40 hover:bg-white/[0.05]"
          >
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0C] px-6 py-16 text-white md:py-24">
      <Helmet>
        <title>{policy.title} | Gürpınar Hukuk</title>
        <meta name="description" content={policy.body[0]} />
      </Helmet>

      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-8 inline-flex rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/80 transition hover:border-[#D4B26D]/40 hover:bg-white/[0.05] hover:text-white"
        >
          ← Ana sayfaya dön
        </Link>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="mb-4 h-[2px] w-12 bg-[#D4B26D]" />
          <div className="text-sm uppercase tracking-[0.18em] text-[#D4B26D]">
            Bilgilendirme
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            {policy.title}
          </h1>

          <div className="mt-10 space-y-6">
            {policy.body.map((paragraph, index) => (
              <p key={index} className="leading-8 text-white/70">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}