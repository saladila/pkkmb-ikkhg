import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Mail, MessageCircle } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/informasi", label: "Informasi" },
  { to: "/galeri", label: "Galeri" },
  { to: "/ormawa", label: "Ormawa & UKM" },
] as const;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img 
              src="/logo.jpg" 
              alt="Logo PKKMB" 
              className="h-10 w-10 object-contain rounded-xl"
            />
          
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold leading-tight">PKKMB IKKHG</span>
            <span className="block truncate text-[11px] text-muted-foreground">
              Institut Kesehatan Karsa Husada Garut
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/hub"
            className="ml-2 rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-105"
          >
            Hubungi Kami
          </Link>
        </div>

        <button
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-in border-t border-border/60 bg-background/95 px-5 pb-5 pt-2 backdrop-blur-xl lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              className="block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-brand text-sm font-bold text-primary-foreground">
              IK
            </span>
            <span className="text-sm font-bold">PKKMB IKKHG 2026</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Pengenalan Kehidupan Kampus bagi Mahasiswa Baru Institut Kesehatan Karsa Husada Garut.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Navigasi</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Kontak</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> humas@ikkhg.ac.id
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4" /> @pkkmbikkhg
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> +62 812-0000-2026
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 Humas PKKMB IKKHG. @ansallma._
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg">
      <Navbar />
      <main className="animate-fade-in">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-brand pb-20 pt-36 text-primary-foreground">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h1 className="animate-fade-in text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base text-primary-foreground/85 sm:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
