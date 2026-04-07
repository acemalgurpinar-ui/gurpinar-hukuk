import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import SubPageHeader from "../components/SubPageHeader";
import { getPostBySlug, getRelatedPosts } from "../data/blogPosts";

function renderContentBlock(block, index) {
  if (block.type === "heading") {
    return (
      <h2
        key={index}
        className="mt-12 text-2xl font-semibold tracking-[-0.02em] text-white"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p key={index} className="mt-6 leading-8 text-white/72">
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={index} className="mt-6 list-disc space-y-3 pl-6 leading-8 text-white/72">
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>{item}</li>
        ))}
      </ul>
    );
  }

  return null;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0B0B0C] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <SubPageHeader />
          <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
          <h1 className="text-4xl font-semibold tracking-[-0.02em]">
            Yazı bulunamadı
          </h1>
          <p className="mt-6 leading-8 text-white/65">
            Aradığınız blog yazısı mevcut değil veya bağlantı değişmiş olabilir.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Blog’a Dön
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Person",
      name: "Avukat Nisa Selin Gürpınar",
    },
    publisher: {
      "@type": "LegalService",
      name: "Gürpınar Hukuk",
      logo: {
        "@type": "ImageObject",
        url: "https://gurpinarhukuk.com/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gurpinarhukuk.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white">
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        canonical={`https://gurpinarhukuk.com/blog/${post.slug}`}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="mx-auto max-w-4xl px-6 py-24">
        <SubPageHeader />

        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-white/45">
          <span className="rounded-full border border-white/10 px-3 py-1">
            {post.category}
          </span>
          <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/62">
          {post.excerpt}
        </p>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10"
        >
          {post.content.map((block, index) => renderContentBlock(block, index))}
        </motion.article>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/20 p-6 text-sm leading-7 text-white/55">
          Bu yazı genel bilgilendirme amacı taşır. Somut olayın özelliklerine göre
          hukuki değerlendirme değişebilir.
        </div>

        <div className="mt-12">
          <Link
            to="/#iletisim"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Hukuki destek için iletişime geçin
          </Link>
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">
              İlgili Yazılar
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="mb-3 text-xs text-white/45">
                    {new Date(relatedPost.date).toLocaleDateString("tr-TR")} •{" "}
                    {relatedPost.readTime}
                  </div>
                  <h3 className="text-lg font-semibold">
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="transition hover:text-[#D4B26D]"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    {relatedPost.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="mt-14">
          <Link to="/blog" className="text-sm text-[#D4B26D] hover:underline">
            ← Blog’a Dön
          </Link>
        </div>
      </div>
    </div>
  );
}