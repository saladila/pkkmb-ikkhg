import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri PKKMB IKKHG 2026 — Dokumentasi Kegiatan" },
      {
        name: "description",
        content:
          "Dokumentasi foto rangkaian kegiatan PKKMB Institut Kesehatan Karsa Husada Garut 2026.",
      },
      { property: "og:title", content: "Galeri PKKMB IKKHG 2026" },
      {
        property: "og:description",
        content: "Momen terbaik dari rangkaian PKKMB IKKHG 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GaleriPage,
});

const PHOTOS = [
  { src: g1, caption: "PPS 2025" },
  { src: g2, caption: "PPS 2025" },
  { src: g3, caption: "PPS 2025" },
  { src: g4, caption: "PPS 2025" },
  { src: g5, caption: "PPS 2025" },
  { src: g6, caption: "PPS 2025" },
];

function GaleriPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <SiteLayout>
      <PageHeader
        title="Galeri Kegiatan"
        subtitle="Kumpulan momen berkesan dari rangkaian PKKMB IKKHG."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.caption} delay={i * 80}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 hover:shadow-lift"
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-semibold text-white">
                  {p.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid animate-fade-in place-items-center bg-black/80 p-5 backdrop-blur-sm"
        >
          <button
            aria-label="Tutup"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-w-4xl animate-scale-in">
            <img
              src={PHOTOS[active]!.src}
              alt={PHOTOS[active]!.caption}
              className="max-h-[75vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {PHOTOS[active]!.caption}

            </figcaption>
          </figure>
        </div>
      )}
    </SiteLayout>
  );
}
