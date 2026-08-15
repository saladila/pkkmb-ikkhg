import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardList,
  Shirt,
  ImagePlus,
  Download,
  CheckCircle2,
  X,
  Eye,
} from "lucide-react";

import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import hari1 from "@/assets/hari1.png";
import hari2 from "@/assets/hari2.png";
import hari3 from "@/assets/hari3.png";

export const Route = createFileRoute("/informasi")({
  head: () => ({
    meta: [
      {
        title:
          "Informasi PKKMB IKKHG 2026 — Tata Tertib, Pakaian & Twibbon",
      },
      {
        name: "description",
        content:
          "Tata tertib, ketentuan pakaian (dress code), dan twibbon resmi peserta PKKMB IKKHG 2026.",
      },
      {
        property: "og:title",
        content: "Informasi PKKMB IKKHG 2026",
      },
      {
        property: "og:description",
        content:
          "Tata tertib, dress code, dan twibbon resmi PKKMB IKKHG 2026.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: InformasiPage,
});

/* =========================================================
   TATA TERTIB
========================================================= */

const RULES = [
  "Hadir 30 menit sebelum kegiatan dimulai.",
  "Mengikuti seluruh rangkaian acara dari awal hingga akhir.",
  "Memakai dresscode sesuai dengan ketentuan.",
  "Menjaga 3S (Senyum, salam, sapa) kepada panitia, dosen, dan sesama peserta.",
  "Dilarang membawa rokok, narkotika, senjata tajam, dan barang berharga berlebihan.",
  "Izin tidak hadir wajib disertai surat keterangan resmi kepada panitia.",
];

/* =========================================================
   DRESS CODE
========================================================= */

const DRESS = [
  {
    title: "PRA-PKKMB & HARI PERTAMA: RABU, 19 AGUSTUS 2026",

    items: [
        "Kemeja putih lengan panjang",
        "Putra memakai celana panjang hitam (bahan kain) dan putri memakai rok hitam",
        "Sepatu pantofel hitam & kaos kaki putih",
        "Rambut rapi, tidak diwarnai, kerudung putih polos (bagi yang berhijab)",
    ],

    description:
      "Ketentuan Berpakaian dan atribut yang dikenakan pada pra-PKKMB & hari pertama PKKMB. 18-19 Agustus 2026.",

    image: hari1,
  },

  {
    title: "HARI KEDUA: KAMIS, 20 AGUSTUS 2026",

    items: [
      "Memakai seragam sekolah masing-masing peserta berwarna putih dan abu-abu",
      "Memakai dasi",
      "Sepatu hitam & kaos kaki putih",
      "Menggunakan ikat pinggang, sepatu pantofel, dan kaos kaki yang sama seperti pada hari pertama.",
    ],

    description:
      "Ketentuan Berpakaian dan atribut yang dikenakan pada hari kedua PKKMB. Kamis, 20 Agustus 2026.",

    image: hari2,
  },

  {
    title: "HARI KETIGA: JUM'AT, 21 AGUSTUS 2026",

    items: [
      "Memakai kaos PKKMB",
      "Memakai celana training panjang berwarna hitam polos, tidak ketat, tidak bermotif.",
      "Memakai kerudung sport berwarna hitam polos (perempuan yang memakai kerudung)",
      "Menggunakan sepatu sneakers dan kaos kaki",
    ],

    description:
      "Ketentuan Berpakaian dan atribut yang dikenakan pada hari ketiga PKKMB. Jum'at, 21 Agustus 2026.",

    image: hari3,
  },
];

/* =========================================================
   HALAMAN INFORMASI
========================================================= */

function InformasiPage() {
  const [selectedDress, setSelectedDress] = useState<
    (typeof DRESS)[number] | null
  >(null);

  return (
    <SiteLayout>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <PageHeader
        title="Informasi Peserta"
        subtitle="Tata tertib, ketentuan pakaian, dan twibbon resmi PKKMB IKKHG 2026."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">

        {/* ===================================================
            TATA TERTIB
        =================================================== */}

        <Reveal>
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-10">

            <div className="flex min-w-0 items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <ClipboardList className="h-5 w-5" />
              </span>

              <div className="min-w-0">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Tata Tertib
                </h2>

                <p className="text-sm text-muted-foreground">
                  Wajib dipatuhi seluruh peserta.
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {RULES.map((rule, index) => (
                <Reveal
                  as="li"
                  key={rule}
                  delay={index * 60}
                >
                  <div className="flex gap-3 rounded-2xl bg-surface p-4 transition-transform duration-300 hover:-translate-y-1">

                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm text-muted-foreground">
                      {rule}
                    </span>

                  </div>
                </Reveal>
              ))}
            </ul>

          </div>
        </Reveal>

        {/* ===================================================
            DRESS CODE
        =================================================== */}

        <div className="mt-16">

          <Reveal>
            <div className="flex min-w-0 items-center gap-4">

              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <Shirt className="h-5 w-5" />
              </span>

              <div className="min-w-0">

                <h2 className="text-2xl font-extrabold tracking-tight">
                  Pakaian (Dress Code)
                </h2>

                <p className="text-sm text-muted-foreground">
                  Ketentuan berpakaian selama kegiatan.
                </p>

              </div>

            </div>
          </Reveal>

          {/* =================================================
              CARD DRESS CODE
          ================================================= */}

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {DRESS.map((dress, index) => (
              <Reveal
                key={dress.title}
                delay={index * 100}
              >
                <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">

                  {/* Judul + ketentuan */}

                  <div>

                    <h3 className="text-lg font-bold leading-7">
                      {dress.title}
                    </h3>

                    <ul className="mt-4 space-y-3">

                      {dress.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-6 text-muted-foreground"
                        >

                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />

                          <span>
                            {item}
                          </span>

                        </li>
                      ))}

                    </ul>

                  </div>

                  {/* =================================================
                      TOMBOL LIHAT DESKRIPSI
                  ================================================= */}

                  <div className="mt-auto pt-6">

                    <button
                      type="button"
                      onClick={() => setSelectedDress(dress)}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >

                      <Eye className="h-4 w-4" />

                      Lihat Gambar

                    </button>

                  </div>

                </article>
              </Reveal>
            ))}

          </div>

          {/* =================================================
              POPUP / MODAL DRESS CODE
          ================================================= */}

          {selectedDress && (
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
              onClick={() => setSelectedDress(null)}
            >

              <div
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >

                {/* =================================================
                    TOMBOL CLOSE
                ================================================= */}

                <button
                  type="button"
                  onClick={() => setSelectedDress(null)}
                  aria-label="Tutup deskripsi"
                  className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-gray-700 shadow-md backdrop-blur transition hover:bg-white"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* =================================================
                    GAMBAR
                ================================================= */}

                <div className="overflow-hidden rounded-t-3xl bg-gray-100">

                  <img
                    src={selectedDress.image}
                    alt={selectedDress.title}
                    className="max-h-[420px] w-full object-contain"
                  />

                </div>

                {/* =================================================
                    KONTEN POPUP
                ================================================= */}

                <div className="p-7 sm:p-8">

                  {/* Judul */}

                  <h2 className="text-xl font-extrabold leading-7 text-foreground sm:text-2xl">
                    {selectedDress.title}
                  </h2>

                  {/* Deskripsi */}

                  <div className="mt-6">

                    <h3 className="text-base font-bold text-foreground">
                      Deskripsi
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {selectedDress.description}
                    </p>

                  </div>

                  {/* =================================================
                      KETENTUAN
                  ================================================= */}

                  <div className="mt-6 rounded-2xl bg-muted/40 p-5">

                    <h3 className="text-sm font-bold text-foreground">
                      Ketentuan Pakaian
                    </h3>

                    <ul className="mt-3 space-y-3">

                      {selectedDress.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-muted-foreground"
                        >

                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />

                          <span>
                            {item}
                          </span>

                        </li>
                      ))}

                    </ul>

                  </div>

                  {/* =================================================
                      TOMBOL TUTUP
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() => setSelectedDress(null)}
                    className="mt-6 w-full rounded-2xl border border-border px-5 py-3 text-sm font-bold text-foreground transition hover:bg-muted"
                  >
                    Tutup
                  </button>

                </div>

              </div>

            </div>
          )}

        </div>

        {/* ===================================================
            TWIBBON
        =================================================== */}

        <Reveal>

          <div className="mt-16 grid gap-8 rounded-[2rem] bg-gradient-soft p-8 sm:p-10 md:grid-cols-[1.3fr_1fr] md:items-center">

            <div>

              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <ImagePlus className="h-5 w-5" />
              </span>

              <h2 className="mt-5 text-2xl font-extrabold tracking-tight">
                Twibbon Resmi
              </h2>

              <p className="mt-3 max-w-lg text-sm text-muted-foreground">

                Unduh dan pasang twibbon PKKMB IKKHG 2026 di media sosialmu.
                Gunakan tagar{" "}
                <strong className="text-foreground">
                  #PKKMBIKKHG2026
                </strong>{" "}
                dan tandai akun resmi panitia.

              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                {/* Buka Twibbon */}

                <a
                  href="https://twb.nz/pkkmbikkhg2026"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-105"
                >

                  <ImagePlus className="h-4 w-4" />

                  Buka Twibbon

                </a>

                {/* Download Frame */}

                <a
                  href="/twibon-pkkmb.png"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
                >

                  <Download className="h-4 w-4" />

                  Download Frame

                </a>

              </div>

            </div>

            {/* Preview Twibbon */}

            <div className="mx-auto grid aspect-square w-full max-w-[260px] place-items-center rounded-3xl border-8 border-white bg-gradient-brand p-6 text-center text-primary-foreground shadow-lift">

              <div>

                <div className="text-xs uppercase tracking-[0.25em] opacity-80">
                  Twibbon
                </div>

                <div className="mt-2 text-2xl font-extrabold leading-tight">
                  PKKMB
                  <br />
                  IKKHG 2026
                </div>

                <div className="mt-3 text-[11px] opacity-80">
                  #PKKMBIKKHG2026
                </div>

              </div>

            </div>

          </div>

        </Reveal>

      </section>

    </SiteLayout>
  );
}