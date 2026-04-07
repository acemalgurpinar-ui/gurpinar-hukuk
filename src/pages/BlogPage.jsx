import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import SubPageHeader from "../components/SubPageHeader";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white">
      <SEO
        title="Hukuki Blog | Gürpınar Hukuk"
        description="Aile hukuku, tazminat hukuku, icra ve iflas hukuku başta olmak üzere genel hukuki bilgilendirme yazıları ve pratik değerlendirmeler."
        canonical="https://gurpinarhukuk.com/blog"
      />

      <div className="mx-auto max-w-6xl px-6 py-24">
        <SubPageHeader />

        <div className="mb-4 h-[2px] w-10 bg-[#D4B26D]" />
        <h1 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
          Hukuki Blog
        </h1>
        <p className="mt-5 max-w-3xl leading-8 text-white/60">
          Genel bilgilendirme amacıyla hazırlanan yazılar. Her uyuşmazlık kendi
          somut olay özellikleri içinde ayrıca değerlendirilmelidir.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
            >
              <div className="mb-4 h-[2px] w-8 bg-[#D4B26D]" />

              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-white/45">
                <span className="rounded-full border border-white/10 px-3 py-1">
                  {post.category}
                </span>
                <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-xl font-semibold tracking-[-0.01em]">
                <Link
                  to={`/blog/${post.slug}`}
                  className="transition hover:text-[#D4B26D]"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/70">
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.slug}`}
                className="mt-6 inline-block text-sm text-[#D4B26D] hover:underline"
              >
                Devamını Oku →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}