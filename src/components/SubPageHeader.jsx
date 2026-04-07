import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SubPageHeader({ title, backHref = "/" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(backHref);
    }
  };

  return (
    <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/80 transition hover:bg-white/[0.06] hover:text-white"
      >
        ← Geri Dön
      </button>

      <motion.a
        href="/#iletisim"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
      >
        İletişime Geç
      </motion.a>
    </div>
  );
}