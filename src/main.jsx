import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import AileHukuku from "./pages/AileHukuku.jsx";
import TazminatHukuku from "./pages/TazminatHukuku.jsx";
import TasinmazHukuku from "./pages/TasinmazHukuku.jsx";
import KatMulkiyetiHukuku from "./pages/KatMulkiyetiHukuku.jsx";
import MirasHukuku from "./pages/MirasHukuku.jsx";
import SaglikHukuku from "./pages/SaglikHukuku.jsx";
import Malpraktis from "./pages/Malpraktis.jsx";
import HukukiDanismanlik from "./pages/HukukiDanismanlik.jsx";
import IcraIflasHukuku from "./pages/IcraIflasHukuku.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import PolicyPage from "./pages/PolicyPage.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/aile-hukuku-samsun" element={<AileHukuku />} />
          <Route path="/tazminat-hukuku-samsun" element={<TazminatHukuku />} />
          <Route path="/tasinmaz-hukuku-samsun" element={<TasinmazHukuku />} />
          <Route path="/kat-mulkiyeti-hukuku-samsun" element={<KatMulkiyetiHukuku />} />
          <Route path="/miras-hukuku-samsun" element={<MirasHukuku />} />
          <Route path="/saglik-hukuku-samsun" element={<SaglikHukuku />} />
          <Route path="/malpraktis-avukati-samsun" element={<Malpraktis />} />
          <Route path="/hukuki-danismanlik-samsun" element={<HukukiDanismanlik />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/kvkk" element={<PolicyPage type="kvkk" />} />
          <Route path="/gizlilik-politikasi" element={<PolicyPage type="privacy" />} />
          <Route path="/cerez-politikasi" element={<PolicyPage type="cookies" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);