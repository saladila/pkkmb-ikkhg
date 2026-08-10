import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, MessageCircle, MapPin } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/hub")({
  head: () => ({
    meta: [
      { title: "Hub Kontak — PKKMB IKKHG 2026" },
      {
        name: "description",
        content:
          "Hubungi panitia PKKMB IKKHG 2026 melalui email, Instagram, atau WhatsApp untuk pertanyaan seputar kegiatan.",
      },
      { property: "og:title", content: "Hub Kontak PKKMB IKKHG 2026" },
      {
        property: "og:description",
        content: "Email, Instagram, dan WhatsApp resmi panitia PKKMB IKKHG.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HubPage,
});

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "humas@ikkhg.ac.id",
    href: "mailto:humas@ikkhg.ac.id",
    cta: "Kirim Email",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@pkkmbikkhg",
    href: "https://instagram.com/pkkmbikkhg",
    cta: "Kunjungi Profil",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0896-2128-9635",
    href: "https://wa.me/6289621289635",
    cta: "Chat Panitia",
  },
];

function HubPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Hub"
        subtitle="Ada pertanyaan seputar PKKMB? Panitia siap membantu kamu."
      />

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <div className="grid gap-6 md:grid-cols-3">
          {CONTACTS.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col items-center rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                  <c.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </h2>
                <p className="mt-2 font-bold">{c.value}</p>
                <span className="mt-5 text-sm font-semibold text-primary">{c.cta}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-14 rounded-[2rem] bg-gradient-soft p-10">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
              <MapPin className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-xl font-extrabold">Sekretariat Panitia</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Kampus 2, Institut Kesehatan Karsa Husada Garut — Jl. Nusa Indah No. 24,
              Tarogong Kidul, Garut, Jawa Barat. Senin – Jumat, 08.00 – 15.00 WIB.
            </p>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
