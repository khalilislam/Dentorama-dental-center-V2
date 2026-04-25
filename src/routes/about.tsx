import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, HeartPulse, Smile, Users, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { useTranslation } from "react-i18next";

const drMemmeri = "https://images.unsplash.com/photo-1559839734-2b71f1536783?w=800&q=80";
const drTamendjari = "https://images.unsplash.com/photo-1622253692010-333f2da6028a?w=800&q=80";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Dentorama Dental Center" },
      {
        name: "description",
        content:
          "Meet the Dentorama team — board-certified dentists committed to gentle, modern dental care.",
      },
      { property: "og:title", content: "About Dentorama" },
      { property: "og:description", content: "Meet the team behind gentle dental excellence." },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();

  const team = [
    { name: "Dr. Memmeri", role: t("about.founderRole"), img: drMemmeri },
    { name: "Dr. Tamendjari", role: t("about.founderRole"), img: drTamendjari },
  ];

  const features = [
    t("about.feature1"),
    t("about.feature2"),
    t("about.feature3"),
    t("about.feature4"),
  ];

  const values = [
    { icon: HeartPulse, key: "compassion" },
    { icon: Award, key: "excellence" },
    { icon: Smile, key: "comfort" },
    { icon: Users, key: "community" },
  ];

  return (
    <>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              {t("about.badge")}
            </p>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold">{t("about.title")}</h1>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">{t("about.description")}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
              alt="Clinic"
              className="rounded-3xl object-cover w-full aspect-[4/3] shadow-card"
            />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold">{t("about.storyTitle")}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{t("about.storyPara1")}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{t("about.storyPara2")}</p>
            </Reveal>
            <StaggerGroup className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <StaggerItem key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{f}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              {t("about.valuesBadge")}
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">{t("about.valuesTitle")}</h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.key}>
                <div className="rounded-3xl bg-card p-7 shadow-card text-center h-full border border-border/50">
                  <div className="grid h-14 w-14 mx-auto place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-bold text-lg">{t(`about.values.${v.key}.title`)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t(`about.values.${v.key}.desc`)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              {t("about.teamBadge")}
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">{t("about.teamTitle")}</h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group relative overflow-hidden rounded-[2.5rem] bg-card shadow-card">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 text-white">
                    <h3 className="text-xl font-bold">{m.name}</h3>
                    <p className="text-sm opacity-90">{m.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-24 text-center">
        <Reveal>
          <h2 className="text-3xl lg:text-4xl font-bold max-w-xl mx-auto">{t("cta.title")}</h2>
          <div className="mt-8">
            <Link
              to="/contact"
              className="cta-animated inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-6 pr-2 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              {t("cta.button")}
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground text-primary">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
