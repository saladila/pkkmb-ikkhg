import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

import bemIkkhg from "@/assets/bem-ikkhg.jpg";
import formaKep from "@/assets/forma-kep.jpg";
import himaTlm from "@/assets/hima-tlm.jpg";
import himaFarmasi from "@/assets/hima-farmasi.jpg";
import himaBidan from "@/assets/hima-bidan.jpg";
import ksr from "@/assets/ksr.jpg";
import upm from "@/assets/upm-ikkhg.jpg";
import ldk from "@/assets/ldk.jpg";
import forumIlmiah from "@/assets/forumilmiah.jpg";
import volly from "@/assets/voley-ball.jpg";
import badminton from "@/assets/badminton.jpg";
import tenisMeja from "@/assets/tenis-meja.jpg";
import limpa from "@/assets/limpa.jpg";
import basket from "@/assets/basket.png";
import futsal from "@/assets/futsal.png";
import muaythai from "@/assets/muaythai.png";
import protokoler from "@/assets/protokoler.png";

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
    logo: bemIkkhg,
    type: "Ormawa",
    desc: "Badan Eksekutif Mahasiswa, motor utama kegiatan dan advokasi mahasiswa tingkat institusi." 
  },
  { name: "BEM FIKES", 
    initial: "BEM",
    logo: bemIkkhg,
    type: "Ormawa", 
    desc: "Badan Eksekutif Mahasiswa, motor utama kegiatan dan advokasi mahasiswa tingkat fakultas."
  },
  { name: "BEM FIKK", 
    initial: "BEM", 
    logo: bemIkkhg,
    type: "Ormawa", 
    desc: "Badan Eksekutif Mahasiswa, motor utama kegiatan dan advokasi mahasiswa tingkat fakultas." 
  },
  { name: "HIMA Keperawatan", 
    initial: "HMK", 
    logo: formaKep,
    type: "Himpunan", 
    desc: "Himpunan Mahasiswa Keperawatan."
   },
  { name: "HIMA TLM", 
    initial: "HMK", 
    logo: himaTlm,
    type: "Himpunan", 
    desc: "Himpunan Mahasiswa Teknologi Laboratorium Medis" 
  },
  { name: "HIMA FARMASI", 
    initial: "HMK", 
    logo: himaFarmasi,
    type: "UKM", 
    desc: "Himpunan Mahasiswa Farmasi." 
  },
  { name: "HIMA KEBIDANAN", 
    initial: "HMK", 
    logo: himaBidan,
    type: "Himpunan", 
    desc: "Himpunan Mahasiswa Kebidanan." 
  },
  { name: "UKM KSR / PMI", 
    initial: "KSR", 
    logo: ksr,
    type: "UKM", 
    desc: "Korps Sukarela: kesiapsiagaan bencana dan donor darah."
  },
  { name: "UKM UPM", 
    initial: "UPM", 
    logo: upm,
    type: "UKM", 
    desc: "Racana kampus, kepemimpinan, dan pengabdian masyarakat." 
  },
  { name: "UKM LDK Tarbiyatul Insani", 
    initial: "ROH", 
    logo: ldk,
    type: "UKM", 
    desc: "Kajian keislaman, kajian rutin, dan kegiatan sosial keagamaan."
  },
  { name: "Forum Ilmiah Mahasiswa ", 
    initial: "FIM", 
    logo: forumIlmiah,
    type: "UKM", 
    desc: "Forum Ilmiah Mahasiswa" 
  },
  { name: "UKM Volly", 
    initial: "VOL",
    logo: volly, 
    type: "UKM", 
    desc: "Unit kegitan mahasiswa Cabang olahraga Volly" 
  },
  { name: "UKM Badminton", 
    initial: "BAD", 
    logo: badminton,
    type: "UKM", 
    desc: "Unit kegitan mahasiswa Cabang olahraga Badminton" 
  },
  { name: "UKM Tenis Meja", 
    initial: "TEJA", 
    logo: tenisMeja,
    type: "UKM", 
    desc: "Unit kegitan mahasiswa Cabang olahraga Tenis meja" 
  },
  { name: "UKM LIMPA", 
    initial: "LIMPA", 
    logo: limpa,
    type: "UKM", 
    desc: "Unit kegitan mahasiswa pecinta alam" 
  },
  { name: "UKM Basket", 
    initial: "basket", 
    logo: basket,
    type: "UKM", 
    desc: "Unit kegitan mahasiswa Cabang olahraga Basket" 
  },
  { name: "UKM Futsal", 
    initial: "futsal", 
    logo: futsal,
    type: "UKM", 
    desc: "Unit kegitan mahasiswa Cabang olahraga Futsal" 
  },
  { name: "UKM Muaythai", 
    initial: "muay", 
    logo: muaythai,
    type: "UKM", 
    desc: "Unit kegitan mahasiswa Cabang olahraga Muaythai" 
  },
  { name: "UKM Protokoler", 
    initial: "proto", 
    logo: protokoler,
    type: "UKM", 
    desc: "Unit Kegiatan Mahasiswa yang berfokus pada pelatihan dan praktik tata aturan acara resmi." 
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
