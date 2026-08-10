import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, Shirt, ImagePlus, Download, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/informasi")({
  head: () => ({
    meta: [
      { title: "Informasi PKKMB IKKHG 2026 — Tata Tertib, Pakaian & Twibbon" },
      {
        name: "description",
        content:
          "Tata tertib, ketentuan pakaian (dress code), dan twibbon resmi peserta PKKMB IKKHG 2026.",
      },
      { property: "og:title", content: "Informasi PKKMB IKKHG 2026" },
      {
        property: "og:description",
        content: "Tata tertib, dress code, dan twibbon resmi PKKMB IKKHG 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InformasiPage,
});

const RULES = [
  "Hadir 30 menit sebelum kegiatan dimulai.",
  "Mengikuti seluruh rangkaian acara dari awal hingga akhir.",
  "Memakai dresscode sesuai dengan ketentuan.",
  "Menjaga 3S (Senyum, salam, sapa) kepada panitia, dosen, dan sesama peserta.",
  "Dilarang membawa rokok, senjata tajam, dan barang berharga berlebihan.",
  "Izin tidak hadir wajib disertai surat keterangan resmi kepada panitia.",
];

const DRESS = [
  {
    title: "HARI PERTAMA: RABU, 19 AGUSTUS 2026",
    items: [
      "Kemeja putih lengan panjang",
      "Bawahan celana panjang hitam (bahan) dan perempuan memakai Rok hitam",
      "Sepatu hitam & kaos kaki putih",
      "Rambut rapi, tidak diwarnai, kerudung hitam polos (bagi yang berhijab)",
    ],
  },
  {
    title: "HARI KEDUA: KAMIS, 20 AGUSTUS 2026",
    items: [
      "Pakaian seragam SMA/SMK/MA masing-masing sesuai asal sekolah",
      "Sepatu hitam & kaos kaki putih",
    ],
  },
  {
    title: "HARI KETIGA: JUM'AT, 21 AGUSTUS 2026",
    items: [
      "Kaos Baju PKKMB IKKHG 2026",
      "Bawahan celana panjang hitam (bahan) dan perempuan memakai Rok hitam",
      "Sepatu hitam & kaos kaki putih",
      "Rambut rapi, tidak diwarnai, Kerudung hitam polos (bagi yang berhijab)",
    ],
  },
];

function InformasiPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Informasi Peserta"
        subtitle="Tata tertib, ketentuan pakaian, dan twibbon resmi PKKMB IKKHG 2026."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        {/* Rules */}
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-10">
            <div className="flex min-w-0 items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <ClipboardList className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h2 className="text-2xl font-extrabold tracking-tight">Tata Tertib</h2>
                <p className="text-sm text-muted-foreground">Wajib dipatuhi seluruh peserta.</p>
              </div>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {RULES.map((r, i) => (
                <Reveal as="li" key={r} delay={i * 60}>
                  <div className="flex gap-3 rounded-2xl bg-surface p-4 transition-transform duration-300 hover:-translate-y-1">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{r}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Dress code */}
        <div className="mt-16">
          <Reveal>
            <div className="flex min-w-0 items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <Shirt className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h2 className="text-2xl font-extrabold tracking-tight">Pakaian (Dress Code)</h2>
                <p className="text-sm text-muted-foreground">Ketentuan berpakaian selama kegiatan.</p>
              </div>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {DRESS.map((d, i) => (
              <Reveal key={d.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
                  <h3 className="text-lg font-bold">{d.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {d.items.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Twibbon */}
        <Reveal>
          <div className="mt-16 grid gap-8 rounded-[2rem] bg-gradient-soft p-8 sm:p-10 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <ImagePlus className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight">Twibbon Resmi</h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground">
                Unduh dan pasang twibbon PKKMB IKKHG 2026 di media sosialmu. Gunakan tagar{" "}
                <strong className="text-foreground">#PKKMBIKKHG2026</strong> dan tandai akun resmi
                panitia.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://twb.nz/pkkmbikkhg2026"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-105"
                >
                  <ImagePlus className="h-4 w-4" /> Buka Twibbon
                </a>
                <a
                  href="/twibon-pkkmb.png"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
                >
                  <Download className="h-4 w-4" /> Download Frame
                </a>
              </div>
            </div>
            <div className="mx-auto grid aspect-square w-full max-w-[260px] place-items-center rounded-3xl border-8 border-white bg-gradient-brand p-6 text-center text-primary-foreground shadow-lift">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] opacity-80">Twibbon</div>
                <div className="mt-2 text-2xl font-extrabold leading-tight">
                  PKKMB
                  <br />
                  IKKHG 2026
                </div>
                <div className="mt-3 text-[11px] opacity-80">#PKKMBIKKHG2026</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
