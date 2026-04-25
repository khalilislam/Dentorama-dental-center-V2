import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Shield,
  Scissors,
  Crown,
  AlignCenter,
  Sun,
  Gem,
  HeartPulse,
  Stethoscope,
  Scan,
  Droplets,
  ShieldCheck,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dentorama Dental Center" },
      {
        name: "description",
        content:
          "Whitening, implants, root canals, orthodontics, pediatric and cosmetic dentistry — full-service care.",
      },
      { property: "og:title", content: "Dental Services at Dentorama" },
      { property: "og:description", content: "Complete dental care under one roof." },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useTranslation();
  const all = [
    { icon: Sparkles, key: "cleaning", accent: "blue" },
    { icon: Shield, key: "fillings", accent: "green" },
    { icon: Scissors, key: "extraction", accent: "blue" },
    { icon: Crown, key: "crowns", accent: "green" },
    { icon: AlignCenter, key: "orthodontics", accent: "blue" },
    { icon: Sun, key: "whitening", accent: "green" },
    { icon: Gem, key: "veneers", accent: "blue" },
    { icon: HeartPulse, key: "rootCanal", accent: "green" },
    { icon: Stethoscope, key: "surgery", accent: "blue" },
    { icon: Scan, key: "imaging", accent: "green" },
    { icon: Droplets, key: "fluoride", accent: "blue" },
    { icon: ShieldCheck, key: "mouthguards", accent: "green" },
  ];

  return (
    <>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              {t("services.badge")}
            </p>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold">{t("services.title")}</h1>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
              {t("services.description")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {all.map((s) => {
              const isBlue = s.accent === "blue";
              const title = t(`services.items.${s.key}.title`);
              const desc = t(`services.items.${s.key}.desc`);
              return (
                <StaggerItem key={s.key}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative h-full rounded-2xl bg-card p-6 border border-border/60 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-12px_color-mix(in_oklab,var(--primary)_25%,transparent)] hover:border-primary/40 transition-all duration-300 overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    {/* glow */}
                    <div
                      className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                      style={{
                        background: isBlue
                          ? "color-mix(in oklab, var(--primary) 35%, transparent)"
                          : "color-mix(in oklab, var(--accent) 45%, transparent)",
                      }}
                    />

                    <div
                      className="relative grid h-14 w-14 place-items-center rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                      style={{
                        background: isBlue
                          ? "color-mix(in oklab, var(--primary) 12%, white)"
                          : "color-mix(in oklab, var(--accent) 18%, white)",
                        color: isBlue
                          ? "var(--primary)"
                          : "color-mix(in oklab, var(--accent-foreground) 80%, var(--primary))",
                      }}
                    >
                      <s.icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>

                    <h3 className="relative mt-5 text-base sm:text-lg font-bold leading-tight text-foreground">
                      {title}
                    </h3>
                    <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>

                    <Link
                      to="/contact"
                      className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                    >
                      {t("services.viewDetails")} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="rounded-[2.5rem] bg-gradient-primary text-primary-foreground p-10 lg:p-16 text-center shadow-soft">
              <h2 className="text-3xl lg:text-4xl font-bold">{t("services.ctaTitle")}</h2>
              <p className="mt-4 opacity-90">{t("services.ctaDesc")}</p>
              <Link
                to="/contact"
                className="cta-animated mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground pl-6 pr-2 py-2.5 text-sm font-semibold text-primary"
              >
                {t("services.ctaBtn")}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
