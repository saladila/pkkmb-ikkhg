import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/ormawa")({
  head: () => ({
    meta: [
      { title: "Ormawa & UKM — PKKMB IKKHG 2026" },
      {
        name: "description",
        content:
          "Daftar organisasi mahasiswa dan unit kegiatan mahasiswa di Institut Kesehatan Karsa Husada Garut.",
      },
      { property: "og:title", content: "Ormawa & UKM IKKHG" },
      {
        property: "og:description",
        content: "Kenali organisasi dan unit kegiatan mahasiswa IKKHG.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrmawaPage,
});

const ORGS = [
  { name: "BEM IKKHG", 
    initial: "BEM", 
    logo: "/src/assets/bem-ikkhg.jpg",
    type: "Ormawa",
    desc: "Badan Eksekutif Mahasiswa, motor utama kegiatan dan advokasi mahasiswa tingkat institusi." 
  },
  { name: "BEM FIKES", 
    initial: "DPM",
    logo: "/src/assets/bem-ikkhg.jpg",
    type: "Ormawa", 
    desc: "Badan Eksekutif Mahasiswa, motor utama kegiatan dan advokasi mahasiswa tingkat fakultas."
  },
  { name: "BEM FIKK", 
    initial: "DPM", 
    logo: "/src/assets/bem-ikkhg.jpg",
    type: "Ormawa", 
    desc: "Badan Eksekutif Mahasiswa, motor utama kegiatan dan advokasi mahasiswa tingkat fakultas." 
  },
  { name: "FORMA Keperawatan", 
    initial: "HMK", 
    logo: "/src/assets/forma-kep.jpg",
    type: "Himpunan", 
    desc: "Forum Mahasiswa Keperawatan."
   },
  { name: "KEMA Keperawatan", 
    initial: "HMB", 
    logo: "/src/assets/kema-perawat.jpg",
    type: "Himpunan", 
    desc: "Keluarga Mahasiswa Keperawatan."
  },
  { name: "HIMA TLM", 
    initial: "SEN", 
    logo: "/src/assets/hima-tlm.jpg",
    type: "UKM", 
    desc: "Himpunan Mahasiswa Teknologi Laboratorium Medis" 
  },
  { name: "HIMA FARMASI", 
    initial: "OR", 
    logo: "/src/assets/hima-farmasi.jpg",
    type: "UKM", 
    desc: "Himpunan Mahasiswa Farmasi." 
  },
  { name: "HIMA KEBIDANAN", 
    initial: "OR", 
    logo: "/src/assets/hima-bidan.jpg",
    type: "UKM", 
    desc: "Himpunan Mahasiswa Kebidanan." 
  },
  { name: "UKM KSR / PMI", 
    initial: "KSR", 
    logo: "/src/assets/ksr.jpg",
    type: "UKM", 
    desc: "Korps Sukarela: kesiapsiagaan bencana dan donor darah."
  },
  { name: "UKM UPM", 
    initial: "PRA", 
    logo: "/src/assets/upm-ikkhg.jpg",
    type: "UKM", 
    desc: "Racana kampus, kepemimpinan, dan pengabdian masyarakat." 
  },
  { name: "UKM LDK Tarbiyatul Insani", 
    initial: "ROH", 
    logo: "/src/assets/ldk.jpg",
    type: "UKM", 
    desc: "Kajian keislaman, kajian rutin, dan kegiatan sosial keagamaan."
  },
  { name: "Forum Ilmiah Mahasiswa ", 
    initial: "UKM", 
    logo: "/src/assets/forumilmiah.jpg",
    type: "UKM", 
    desc: "Forum Ilmiah Mahasiswa" 
  },
  { name: "UKM Volly", 
    initial: "PRA",
    logo: "/src/assets/voley-ball.jpg", 
    type: "UKM", 
    desc: "Unit kegitan mahasiswa bola volly" 
  },
  { name: "UKM Badminton", 
    initial: "PRA", 
    logo: "/src/assets/badminton.jpg",
    type: "UKM", 
    desc: "Unit kegitan mahasiswa badminton" 
  },
  { name: "UKM Tenis Meja", 
    initial: "PRA", 
    logo: "/src/assets/tenis-meja.jpg",
    type: "UKM", 
    desc: "Unit kegitan mahasiswa tenis meja" 
  },
  { name: "UKM LIMPA", 
    initial: "PRA", 
    logo: "/src/assets/limpa.jpg",
    type: "UKM", 
    desc: "Unit kegitan mahasiswa pecinta alam" 
  },
];

function OrmawaPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Ormawa & UKM"
        subtitle="Temukan wadah untuk mengembangkan minat, bakat, dan kepemimpinanmu."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ORGS.map((o, i) => (
            <Reveal key={o.name} delay={i * 70}>
              <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white p-2 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={o.logo}
                        alt={o.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  <div className="min-w-0">
                    <h2 className="truncate text-base font-bold">{o.name}</h2>
                    <span className="mt-1 inline-block rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                      {o.type}
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">{o.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
