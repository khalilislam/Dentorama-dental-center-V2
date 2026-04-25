import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Instagram,
  Facebook,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Dentorama Dental Center" },
      {
        name: "description",
        content: "Book an appointment or visit our clinic. Open Mon–Sat 9 AM to 9 PM.",
      },
      { property: "og:title", content: "Contact Dentorama" },
      { property: "og:description", content: "Book an appointment with our gentle dental team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, i18n } = useTranslation();
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactMethods = [
    { icon: Phone, t: t("contact.phone"), d: "06 72 68 09 13", href: "tel:0672680913" },
    {
      icon: Instagram,
      t: "Instagram",
      d: "@dentorama_dental_center",
      href: "https://www.instagram.com/dentorama_dental_center",
    },
    {
      icon: Facebook,
      t: "Facebook",
      d: "Dentorama Dental Center",
      href: "https://www.facebook.com/profile.php?id=61555264380391",
    },
  ];

  return (
    <>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              {t("contact.badge")}
            </p>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold">{t("contact.title")}</h1>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
              {t("contact.description")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-3 gap-6">
          {contactMethods.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block rounded-3xl bg-card p-7 shadow-card border border-border/50 h-full hover:border-primary/40 transition-colors"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8 mt-12 grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-card p-8 shadow-card border border-border/50 space-y-4"
            >
              <h2 className="text-2xl font-bold">{t("contact.formTitle")}</h2>
              <p className="text-sm text-muted-foreground">{t("contact.formDesc")}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder={t("contact.namePlaceholder")}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  required
                  type="tel"
                  placeholder={t("contact.phonePlaceholder")}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                required
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors">
                <option>{t("contact.selectService")}</option>
                <option>{t("services.all.[0].title")}</option>
                {/* Fallback to static if array lookup too complex, but for now I'll just use the select list as is or translate options manually */}
                {i18n.language === "ar" ? (
                  <>
                    <option>تبييض الأسنان</option>
                    <option>زراعة الأسنان</option>
                    <option>علاج العصب</option>
                    <option>تقويم الأسنان</option>
                    <option>فحص عام</option>
                  </>
                ) : i18n.language === "fr" ? (
                  <>
                    <option>Blanchiment Dentaire</option>
                    <option>Implants Dentaires</option>
                    <option>Traitement de Canal</option>
                    <option>Orthodontie</option>
                    <option>Contrôle Général</option>
                  </>
                ) : (
                  <>
                    <option>Teeth Whitening</option>
                    <option>Dental Implants</option>
                    <option>Root Canal</option>
                    <option>Orthodontics</option>
                    <option>General Checkup</option>
                  </>
                )}
              </select>
              <textarea
                rows={4}
                placeholder={t("contact.messagePlaceholder")}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-6 pr-2 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft"
              >
                {sent ? t("contact.sent") : t("contact.sendBtn")}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground text-primary">
                  {sent ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </span>
              </motion.button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden shadow-card border border-border/50 relative">
              <iframe
                title="Dentorama location"
                className="w-full h-80"
                loading="lazy"
                src="https://maps.google.com/maps?q=DENTORAMA%20CENTRE%20DENTAIRE%20Cheraga&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
              <a
                href="https://maps.app.goo.gl/hY7pU3wTEKAjStBy6"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs font-semibold shadow-card hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" /> {t("contact.openMap")}
              </a>
            </div>
            <div className="mt-6 rounded-3xl bg-dark-section text-dark-section-foreground p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="font-bold">{t("hero.infoHoursTitle")}</h3>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-dark-section-foreground/80">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>{t("contact.satThu")}</span>
                  <span>{t("contact.hrsSatThu")}</span>
                </li>
                <li className="flex justify-between">
                  <span>{t("contact.friday")}</span>
                  <span>{t("contact.hrsFriday")}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
