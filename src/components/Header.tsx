import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18nInstance from "../i18n";

export function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  const toggleLanguage = () => {
    const langs = ["en", "fr", "ar"];
    const currentLang = i18n.language || "en";
    const nextIndex = (langs.indexOf(currentLang) + 1) % langs.length;
    i18nInstance.changeLanguage(langs[nextIndex]);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft group-hover:scale-110 transition-transform">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold text-foreground">Dentorama</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {t("nav.logo")}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors data-[status=active]:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-full bg-muted/50 hover:bg-muted transition-colors border border-border/50"
          >
            <Globe className="h-3.5 w-3.5 text-primary" />
            <span className="uppercase">
              {mounted ? (i18n.language || "en").split("-")[0] : "en"}
            </span>
          </button>

          <Link
            to="/contact"
            className="cta-animated hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-5 pr-2 py-2 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            {t("nav.book")}
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground text-primary">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl bg-card shadow-sm"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur border-t border-border"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-medium hover:bg-muted"
                  activeProps={{ className: "bg-muted text-primary" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
