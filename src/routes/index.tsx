import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  BookOpen,
  Download,
  CalendarDays,
  MapPin,
  Users,
  Sparkles,
  Images,
  Info,
  Flag,
  GraduationCap,
  Building2,
  Quote,
  X,
  Rocket,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import rector from "@/assets/rector.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PKKMB - Institut Kesehatan Karsa Husada Garut" },
      {
        name: "description",
        content:
          "Portal resmi PKKMB 2026 Institut Kesehatan Karsa Husada Garut: rangkaian acara, handbook, tata tertib, galeri, dan informasi Ormawa & UKM.",
      },
      { property: "og:title", content: "PKKMB IKKHG 2026" },
      {
        property: "og:description",
        content: "Rangkaian acara, handbook, dan seluruh informasi PKKMB IKKHG 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TIMELINE = [
  {
    icon: Rocket,
    tag: "Tahap 1",
    title: "Pra-PKKMB",
    date: "18 Agustus 2026",
    desc: "Registrasi ulang, pembagian kelompok, technical meeting, dan penugasan awal mahasiswa baru.",
  },
  {
    icon: Building2,
    tag: "Tahap 2",
    title: "PKKMB Institut",
    date: "19 Agustus 2026",
    desc: "Sidang Terbuka PKKMB, Pengenalan visi misi institut dan Yayasan DHIG, sistem akademik, Materi oleh Pakar, Telling Story Alumni IKKHG.",
  },
  {
    icon: GraduationCap,
    tag: "Tahap 3",
    title: "PKKMB Fakultas",
    date: "20 Agustus 2026",
    desc: "Tour Kampus, Pengenalan Fakultas (FIKES), laboratorium, layanan kemahasiswaan, Ormawa & BEM.",
  },
  {
    icon: Flag,
    tag: "Tahap 4",
    title: "PKKMB Fakultas",
    date: "21 Agustus 2026",
    desc: "Tour Kampus, Pengenalan Fakultas (FIKK), Penguatan karakter (ESQ), Penutupan.",
  },
];

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // kalau sudah scroll lebih dari 100px → hilang
      if (window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#tentang"
      className="absolute bottom-12 left-1/2 z-50 -translate-x-1/2 animate-bounce rounded-full border border-primary-foreground/30 p-3 text-primary-foreground/80 backdrop-blur-md transition-opacity duration-300"
    >
      <ChevronDown />
    </a>
  );
}

export default ScrollIndicator;

function Countdown() {
  const target = new Date("2026-08-18T07:00:00+07:00").getTime();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - (now ?? target));
  const units = [
    { label: "Hari", value: Math.floor(diff / 86400000) },
    { label: "Jam", value: Math.floor(diff / 3600000) % 24 },
    { label: "Menit", value: Math.floor(diff / 60000) % 60 },
    { label: "Detik", value: Math.floor(diff / 1000) % 60 },
  ];

  return (
    <div className="mt-10 grid max-w-md grid-cols-4 gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="rounded-2xl border border-white/80 bg-white/80 px-6 py-5 text-center backdrop-blur-md"
        >
          <div className="text-4xl font-extrabold tabular-nums sm:text-3xl">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] uppercase tracking-widest opacity-80">{u.label}</div>
        </div>
      ))}
    </div>
  );
}


function RectorSpeechModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-105"
      >
        <BookOpen className="h-4 w-4" /> Baca Sambutan Lengkap
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="rector-speech-title"
        >
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-border bg-background p-6 shadow-lift sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Tutup sambutan"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-surface transition-colors hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </button>
            <Quote className="h-10 w-10 text-primary/20" />
            <h2
              id="rector-speech-title"
              className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              Sambutan Rektor IKKHG
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Selamat datang, Mahasiswa Baru 2026</p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground sm:text-base">
              <p>
                Assalamu'alaikum warahmatullahi wabarakatuh,
                Salam Sehat,  Salam Sejahtera untuk Kita  Semua 
              </p>
              <p>
                Saya menyampaikan ucapan selamat datang kepada seluruh mahasiswa baru. 
                Saudara telah menjadi bagian dari keluarga besar sivitas akademika Institut Kesehatan Karsa 
                Husada Garut, sebuah institusi pendidikan tinggi yang berkomitmen menghasilkan tenaga 
                kesehatan yang unggul, profesional, berkarakter, inovatif, serta mampu memberikan kontribusi 
                nyata bagi peningkatan derajat kesehatan masyarakat.
              </p>
              <p>
                PKKMB 2026 bukan sekadar seremonial. Ini adalah ruang transformasi: dari siswa yang
                dipandu, menjadi mahasiswa yang bertanggung jawab atas pembelajaran dan pengembangan
                dirinya. Di IKKHG, kami percaya bahwa pendidikan kesehatan yang bermakna lahir dari
                gabungan keilmuan, etika, dan empati.
              </p>
              <p>
                Pengenalan Kehidupan Kampus bagi Mahasiswa Baru bukan sekadar kegiatan orientasi, 
                melainkan merupakan proses awal pembentukan karakter, budaya akademik, serta pengenalan 
                terhadap sistem pembelajaran di perguruan tinggi. Melalui kegiatan ini, mahasiswa baru 
                diharapkan mampu beradaptasi dengan lingkungan akademik, memahami hak dan kewajiban sebagai 
                insan akademis, mengenal tata kelola institusi, serta membangun semangat belajar yang mandiri, 
                kritis, kreatif, dan bertanggung jawab.
              </p>
              <p>
                Tema PKKMB Tahun 2026  yaitu "ALTRUISTIC (Attitude, Love, Trust, Interpersonal, Collaboration)",
                mengandung makna yang sangat relevan dengan karakter yang harus dimiliki oleh seorang calon tenaga kesehatan.
                Nilai Attitude menekankan pentingnya sikap profesional, integritas, disiplin, dan etika dalam setiap tindakan. 
                Love mencerminkan kepedulian, kasih sayang, dan empati dalam memberikan pelayanan kepada sesama. 
                Trust mengajarkan pentingnya membangun kepercayaan melalui kejujuran, tanggung jawab, dan kompetensi. 
                Interpersonal menumbuhkan kemampuan berkomunikasi dan berinteraksi secara efektif dengan berbagai pihak. 
                Sementara Collaboration menjadi fondasi dalam membangun kerja sama interprofesional sebagai kunci 
                keberhasilan pelayanan kesehatan yang bermutu.
              </p>
              <p>
                PKKMB merupakan langkah awal bagi mahasiswa baru untuk memahami bahwa proses belajar di perguruan tinggi 
                tidak hanya berorientasi pada penguasaan ilmu pengetahuan, tetapi juga pada pencapaian kompetensi lulusan, 
                pengembangan karakter, kemampuan berpikir kritis, komunikasi, kolaborasi, kepemimpinan, serta kesiapan 
                menghadapi tantangan dunia kerja dan perkembangan ilmu pengetahuan serta teknologi di bidang kesehatan.
              </p>
              <p>
                Selamat mengikuti Pengenalan Kehidupan Kampus bagi Mahasiswa Baru. Selamat bergabung Putra/Putri 
                terbaik Bangsa di Institut Kesehatan Karsa Husada Garut.
              </p>
              <p>
                Wassalamu'alaikum warahmatullahi wabarakatuh.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
              <img
                src={rector}
                alt="Foto Rektor IKKHG"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-16 w-16 rounded-2xl object-cover"
              />
              <div>
                <p className="font-bold">Dr. H. Rector Name, M.Kes.</p>
                <p className="text-sm text-muted-foreground">Rektor Institut Kesehatan Karsa Husada Garut</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section 
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden text-primary-foreground"
      >
        <img
          src={hero}
          alt="Suasana pembukaan PKKMB IKKHG"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-24 pt-36 text-center">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue/25 bg-blue/10 px-4 py-1.5 text-xl font-medium backdrop-blur-md text-[#A0522D]">
              <Sparkles className="h-3.5 w-3.5" /> Institut Kesehatan Karsa Husada Garut
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-[#8B4513] via-[#C97A40] to-[#E6B17A] bg-clip-text text-transparent drop-shadow-sm"> 
                PKKMB IKKHG 2026</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-[#A0522D]">
              Satu langkah awal, seribu langkah pengabdian. Selamat datang di rangkaian Pengenalan
              Kehidupan Kampus bagi Mahasiswa Baru. tempat kamu mengenal kampus, teman, dan versi
              terbaik dirimu.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="#rangkaian"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold shadow-lift transition-transform duration-200 hover:scale-105 text-[#A0522D]"
              >
                Lihat Rangkaian Acara <ArrowRight className="h-4 w-4 text-[#A0522D]" />
              </a>

              <a
                href="#handbook"
                className="inline-flex items-center gap-2 rounded-full border border-blue/40 px-6 py-3 text-sm font-semibold backdrop-blur-md transition-colors hover:bg-white/15 text-[#A0522D]"
              >
                <BookOpen className="h-4 w-4 text-[#A0522D]" /> Handbook PKKMB
              </a>
            </div>

            <div className="inline-flex text-[#A0522D]">
              <Countdown />
            </div>

            <a
              href="#tentang"
              className="absolute bottom-2 left-1/2 z-50 -translate-x-1/2 rounded-full border border-primary-foreground/30 p-3 text-primary-foreground/80 backdrop-blur-md cursor-pointer animate-bounce hover:scale-110 transition"
            >
              <ChevronDown />
            </a>
            
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="tentang" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Tentang
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Apa itu <span className="text-gradient-brand">PKKMB</span>?
            </h2>
            <p className="mt-5 text-muted-foreground">
              PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru) adalah program resmi yang
              menjembatani transisi dari siswa menjadi mahasiswa. Di IKKHG, PKKMB dirancang untuk menumbuhkan pribadi yang
              ALTRUISTIC (Attitude, Love, Trust, interpersonal & Colaboration.)
            </p>
            <p className="mt-4 text-muted-foreground">
              Melalui rangkaian kegiatan institusi, Fakultas, mahasiswa baru dibekali pemahaman akademik, karakter, dan semangat pengabdian di bidang
              kesehatan.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "4", v: "Rangkaian Acara" },
                { k: "500+", v: "Mahasiswa Baru" },
                { k: "10+", v: "Ormawa & UKM" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-surface p-4 text-center">
                  <div className="text-2xl font-extrabold text-gradient-brand">{s.k}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: CalendarDays,
                t: "Terjadwal",
                d: "Agenda harian yang jelas dari pre-PKKMB hingga penutupan.",
              },
              { icon: Users, t: "Kolaboratif", d: "Kelompok kecil dengan pendamping kakak tingkat." },
              { icon: MapPin, t: "Kampus IKKHG", d: "Jl. Nusa Indah No.24, Tarogong, Garut." },
              { icon: Flag, t: "ALTRUISTIC", d: "Attitude, Love, Trust, interpersonal & Colaboration." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 90}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECTOR SPEECH */}
      <section id="sambutan" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto w-64 sm:w-72 lg:w-full lg:max-w-sm">
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-brand opacity-20 blur-sm" />
              <img
                src={rector}
                alt="Foto Rektor IKKHG"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative rounded-[2rem] border border-border bg-card shadow-lift"
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft">
                Rektor IKKHG
              </div>
            </div>
          </Reveal>

          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Sambutan Rektor
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Selamat Datang, <span className="text-gradient-brand">Mahasiswa Baru</span>
            </h2>
            <div className="mt-6 relative rounded-3xl border border-border bg-card p-7 shadow-soft">
              <Quote className="absolute left-5 top-5 h-8 w-8 text-primary/20" />
              <p className="relative pt-6 text-muted-foreground leading-relaxed">
                "Saya menyampaikan ucapan selamat datang kepada seluruh mahasiswa baru. 
                Saudara telah menjadi bagian dari keluarga besar sivitas akademika Institut 
                Kesehatan Karsa Husada Garut, sebuah institusi pendidikan tinggi yang 
                berkomitmen menghasilkan tenaga kesehatan yang unggul, profesional, berkarakter, 
                inovatif, serta mampu memberikan kontribusi nyata bagi peningkatan derajat kesehatan masyarakat."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <div className="text-right">
                  <p className="text-sm font-bold">Dr. Iwan Wahyudi, S.Kep., Ners., M.Kep.</p>
                  <p className="text-xs text-muted-foreground">Rektor Institut Kesehatan Karsa Husada Garut</p>
                </div>
              </div>
            </div>
            <RectorSpeechModal />
          </Reveal>
        </div>
      </section>

      {/* EVENT SERIES */}
      <section id="rangkaian" className="scroll-mt-24 bg-gradient-soft py-24">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Event Series
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Rangkaian Acara PKKMB 2026
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Empat tahapan yang wajib diikuti seluruh mahasiswa baru IKKHG.
            </p>
          </Reveal>

          <ol className="relative mt-16 space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-gradient-brand before:opacity-30 md:before:left-1/2 md:before:-translate-x-1/2">
            {TIMELINE.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div
                  className={`relative pl-14 md:flex md:pl-0 ${
                    i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-soft md:left-1/2 md:-translate-x-1/2">
                    <item.icon className="h-4.5 w-4.5" />
                  </span>
                  <div
                    className={`rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:w-[calc(50%-3rem)] ${
                      i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                      {item.tag}
                    </span>
                    <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">{item.date}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* HANDBOOK */}
      <section id="handbook" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-8 text-primary-foreground shadow-lift sm:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium">
                  <BookOpen className="h-3.5 w-3.5" /> Handbook
                </span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Buku Panduan PKKMB IKKHG 2026
                </h2>
                <p className="mt-4 max-w-lg text-primary-foreground/90">
                  Semua yang perlu kamu tahu dalam satu dokumen: susunan acara harian, tata tertib,
                  perlengkapan, lokasi, hingga kontak panitia. Baca sebelum hari
                  pertama.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/handbook.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lift transition-transform duration-200 hover:scale-105"
                  >
                    <BookOpen className="h-4 w-4" /> Lihat Handbook
                  </a>
                  <a
                    href="/handbook.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/15"
                  >
                    <Download className="h-4 w-4" /> Download Handbook
                  </a>
                </div>
              </div>
              <div className="relative mx-auto w-48 rotate-3 rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur-md transition-transform duration-300 hover:rotate-0 sm:w-56">
                <div className="h-3 w-16 rounded-full bg-white/50" />
                <div className="mt-4 text-xl font-extrabold leading-tight">
                  HANDBOOK
                  <br />
                  PKKMB
                  <br />
                  2026
                </div>
                <div className="mt-6 space-y-2">
                  {[90, 70, 80, 55].map((w) => (
                    <div key={w} className="h-2 rounded-full bg-white/30" style={{ width: `${w}%` }} />
                  ))}
                </div>
                <div className="mt-6 text-[10px] uppercase tracking-widest opacity-80">IKKHG</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Jelajahi Informasi Lainnya
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Semua yang kamu butuhkan sebelum, selama, dan setelah PKKMB.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              to: "/informasi" as const,
              icon: Info,
              t: "Informasi",
              d: "Tata tertib, dress code, dan twibbon resmi.",
            },
            { to: "/galeri" as const, icon: Images, t: "Galeri", d: "Dokumentasi kegiatan PKKMB." },
            {
              to: "/ormawa" as const,
              icon: Users,
              t: "Ormawa & UKM",
              d: "Kenali organisasi & unit kegiatan mahasiswa.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <Link
                to={c.to}
                className="group block h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Buka halaman{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
