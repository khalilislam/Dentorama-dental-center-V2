import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Star,
  Phone,
  Clock,
  Sparkles,
  Shield,
  Smile,
  HeartPulse,
  Stethoscope,
  Award,
  Users,
  CheckCircle2,
  Quote,
  Compass,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

// Using static paths from public folder to avoid resolution issues on Vercel
const heroDentists = "/assets/hero-dentists.png";
const about1Img = "/assets/clinic-memmeri.png";
const about2Img = "/assets/clinic-tamendjari.png";
const ba1Before = "/assets/ba-1-before.jpg";
const ba1After = "/assets/ba-1-after.jpg";
const ba2Before = "/assets/ba-2-before.jpg";
const ba2After = "/assets/ba-2-after.jpg";
const ba3Before = "/assets/ba-3-before.jpg";
const ba3After = "/assets/ba-3-after.jpg";
const doctorImg = "/assets/founder-portrait.png";

const HERO = heroDentists;
const ABOUT1 = about1Img;
const ABOUT2 = about2Img;
const DOCTOR = doctorImg;

const baPlaceholderBefore =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80";
const baPlaceholderAfter =
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80";

const beforeAfterCases = [
  {
    before: ba1Before,
    after: ba1After,
  },
  {
    before: ba2Before,
    after: ba2After,
  },
  {
    before: ba3Before,
    after: ba3After,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dentorama Dental Center — Gentle Dental Excellence" },
      {
        name: "description",
        content:
          "Modern dental clinic offering cleanings, implants, whitening, and orthodontics with a calm, gentle approach.",
      },
      { property: "og:title", content: "Dentorama Dental Center" },
      { property: "og:description", content: "Premium dental care with a gentle touch." },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80",
      },
    ],
  }),
  component: HomePage,
});

const serviceList = [
  { icon: Smile, key: "whitening" },
  { icon: Shield, key: "implants" },
  { icon: HeartPulse, key: "rootCanal" },
  { icon: Sparkles, key: "cosmetic" },
  { icon: Stethoscope, key: "pediatric" },
  { icon: Award, key: "orthodontics" },
];

function HomePage() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const caseTranslations = t("beforeAfter.cases", { returnObjects: true }) as {
    title: string;
    desc: string;
  }[];
  const testimonialsList = t("testimonials.list", { returnObjects: true }) as {
    name: string;
    role: string;
    quote: string;
  }[];
  const testimonialImages = [
    "https://api.dicebear.com/7.x/notionists/svg?seed=Yanis",
    "https://api.dicebear.com/7.x/notionists/svg?seed=Dalila",
    "https://api.dicebear.com/7.x/notionists/svg?seed=Ines",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* floating decor */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 left-8 h-3 w-3 rotate-45 bg-primary/40 animate-float" />
          <div className="absolute top-40 right-10 h-4 w-4 rounded-full bg-accent/50 animate-float-slow" />
          <div className="absolute bottom-32 left-1/4 text-primary/30 text-3xl animate-float">
            +
          </div>
          <div className="absolute top-1/3 right-1/3 text-primary/20 text-5xl animate-float-slow">
            +
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-10 pb-24 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
            >
              {t("hero.titlePrefix")}{" "}
              <span className="text-primary">{t("hero.titleHighlight")}</span>{" "}
              {t("hero.titleSuffix")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-base lg:text-lg text-muted-foreground max-w-xl"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="cta-animated inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-6 pr-2 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft"
              >
                {t("hero.primaryBtn")}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground text-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/services"
                className="cta-animated inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-card/60 backdrop-blur pl-6 pr-2 py-2.5 text-sm font-semibold text-primary hover:border-primary hover:bg-card"
              >
                {t("hero.secondaryBtn")}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Compass className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 pt-6 border-t border-border flex items-center gap-4"
            >
              <div>
                <p className="text-sm font-semibold">
                  {t("hero.rating")} <span className="text-amber-500">4.8</span>
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="mx-2 text-xs text-muted-foreground">{t("hero.reviews")}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero image with floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-primary opacity-20 blur-3xl" />
            <img
              src={HERO}
              alt="Our Dental Specialists"
              className="relative h-full w-full rounded-[3rem] object-cover shadow-card"
            />

            {/* floating icon bubbles */}
            <motion.div className="absolute -top-4 -right-4 grid h-16 w-16 place-items-center rounded-full bg-card shadow-card animate-float">
              <Smile className="h-7 w-7 text-primary" />
            </motion.div>
            <motion.div className="absolute top-1/3 -left-6 grid h-14 w-14 place-items-center rounded-full bg-card shadow-card animate-float-slow">
              <Shield className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.div className="absolute bottom-20 -right-6 grid h-14 w-14 place-items-center rounded-full bg-card shadow-card animate-float">
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>

            {/* doctor card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className={`absolute -bottom-6 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-card ${mounted && i18n.language === "ar" ? "right-4" : "left-4"}`}
            >
              <img
                src={doctorImg}
                alt={t("hero.founders")}
                className="h-12 w-12 rounded-full object-cover border border-slate-50"
              />
              <div>
                <p className="text-sm font-bold">{t("hero.founders")}</p>
                <p className="text-xs text-muted-foreground">{t("hero.foundersRole")}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA strip */}
        <div className="bg-dark-section text-dark-section-foreground">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">{t("hero.infoCallTitle")}</p>
                <p className="text-sm text-dark-section-foreground/70">{t("hero.infoCallValue")}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">{t("hero.infoHoursTitle")}</p>
                <p className="text-sm text-dark-section-foreground/70">
                  {t("hero.infoHoursValue")}
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="cta-animated justify-self-start lg:justify-self-end inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-5 pr-2 py-2 text-sm font-semibold shadow-soft"
            >
              {t("hero.primaryBtn")}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground text-primary">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Reveal>
                <img
                  src={ABOUT1}
                  alt="Clinic"
                  className="rounded-3xl object-cover h-72 w-full shadow-card"
                />
              </Reveal>
              <Reveal delay={0.2} className="mt-10">
                <img
                  src={ABOUT2}
                  alt="Treatment"
                  className="rounded-3xl object-cover h-72 w-full shadow-card"
                />
              </Reveal>
            </div>
            <Reveal
              delay={0.4}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 grid h-28 w-28 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-soft animate-spin-slow"
            >
              <div className="text-center leading-tight">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-[10px] uppercase tracking-wide">{t("about.yearsExp")}</p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                {t("about.badge")}
              </p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight">
                {t("about.subtitle")}
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                {t("about.description")}
              </p>
            </Reveal>
            <StaggerGroup className="mt-8 grid sm:grid-cols-2 gap-4">
              {(t("about.features", { returnObjects: true }) as string[]).map((ft) => (
                <StaggerItem key={ft} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{ft}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal delay={0.3}>
              <Link
                to="/about"
                className="cta-animated mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-5 pr-2 py-2 text-sm font-semibold text-primary-foreground shadow-soft"
              >
                {t("common.learnMore")}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground text-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              {t("services.badge")}
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">{t("services.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("services.subtitle")}</p>
          </Reveal>

          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((s) => (
              <StaggerItem key={s.key}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full rounded-3xl bg-card p-7 shadow-card border border-border/50 hover:border-primary/40 transition-colors"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground group-hover:rotate-6 transition-transform">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">
                    {t(`services.items.${s.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {t(`services.items.${s.key}.desc`)}
                  </p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    {t("common.learnMore")} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              {t("beforeAfter.badge")}
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">{t("beforeAfter.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("beforeAfter.description")}</p>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:gap-16">
            {beforeAfterCases.map((c, i) => (
              <div key={i}>
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Reveal delay={0.2} scaleEnter>
                      <BeforeAfterSlider
                        before={c.before}
                        after={c.after}
                        alt={caseTranslations[i]?.title}
                      />
                    </Reveal>
                  </div>
                  <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Reveal delay={0.4}>
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {t("beforeAfter.case")}
                        {i + 1}
                      </span>
                      <h3 className="mt-4 text-2xl lg:text-3xl font-bold leading-tight">
                        {caseTranslations[i]?.title}
                      </h3>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {caseTranslations[i]?.desc}
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />{" "}
                          {t("beforeAfter.naturalResult")}
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />{" "}
                          {t("beforeAfter.customCare")}
                        </span>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              {t("testimonials.badge")}
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">{t("testimonials.title")}</h2>
          </Reveal>

          <StaggerGroup className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonialsList.map((testi, i) => (
              <StaggerItem key={testi.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full rounded-3xl bg-card p-7 shadow-card border border-border/50"
                >
                  <Quote className="h-7 w-7 text-primary/40" />
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{testi.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                    <img
                      src={testimonialImages[i]}
                      alt={testi.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold">{testi.name}</p>
                      <p className="text-xs text-muted-foreground">{testi.role}</p>
                    </div>
                    <div className="ml-auto flex">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary text-primary-foreground px-8 py-14 lg:px-16 lg:py-20 text-center shadow-soft">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-float" />
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl animate-float-slow" />
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
                {t("cta.title")}
              </h2>
              <p className="mt-4 opacity-90 max-w-xl mx-auto">{t("cta.subtitle")}</p>
              <Link
                to="/contact"
                className="cta-animated mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground pl-6 pr-2 py-2.5 text-sm font-semibold text-primary shadow-md"
              >
                {t("cta.button")}
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
