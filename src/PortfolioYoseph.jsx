import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Search, Sun, Moon, ExternalLink, Download, Filter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import logo from './assets/logo.jpg'
const skills = {
  Languages: ["PHP", "JavaScript", "Python", "Java", "C++"],
  Frameworks: ["Laravel", "CodeIgniter 3", "CodeIgniter 4", "React", "Bootstrap"],
  Databases: ["MySQL", "JSON"],
  Tools: ["Git", "Canva", "Android Studio", "Unity", "Blender"],
  Testing: ["Manual QA", "Web Testing"],
};

const projects = [
  {
    title: "Sistem Profil & Informasi Akademik – Mayken Home School",
    stack: ["CodeIgniter", "PHP", "MySQL", "CSS"],
    year: "2023–2024",
    description:
      "Website untuk mengelola data akademik (guru, siswa, nilai, rapor) lengkap dengan admin panel dan filtering data.",
    highlights: [
      "CRUD lengkap + role-based access",
      "Cetak rapor dengan page-break CSS",
      "Import/Export data",
    ],
    image:
      "data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>\
        <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%231e3a8a'/><stop offset='100%' stop-color='%2314b8a6'/></linearGradient></defs>\
        <rect width='100%' height='100%' fill='url(%23g)'/>\
        <text x='50%' y='52%' font-size='46' text-anchor='middle' fill='white' font-family='Inter, Arial'>Mayken Home School – Academic IS</text>\
      </svg>",
    link: "#",
  },
  {
    title: "Aplikasi Belajar Augmented Reality untuk Anak",
    stack: ["Unity", "Android Studio"],
    year: "2024",
    description:
      "Aplikasi interaktif AR yang menampilkan objek 3D edukatif saat kamera diarahkan ke marker/target.",
    highlights: ["Marker-based AR", "3D asset optimization", "UX anak"],
    image:
      "data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>\
        <defs><linearGradient id='g2' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%237a3aed'/><stop offset='100%' stop-color='%23f43f5e'/></linearGradient></defs>\
        <rect width='100%' height='100%' fill='url(%23g2)'/>\
        <text x='50%' y='52%' font-size='46' text-anchor='middle' fill='white' font-family='Inter, Arial'>Kids AR Learning App</text>\
      </svg>",
    link: "#",
  },
  {
    title: "Migrasi & Refactor: CodeIgniter 3 ➜ CodeIgniter 4",
    stack: ["CodeIgniter 4", "Datatables", "Modal Form"],
    year: "2025",
    description:
      "Transisi proyek website lama ke CI4 dengan arsitektur controller-model yang rapi, filtering admin, dan UI tabel modern.",
    highlights: ["Service layer", "Admin access filter", "Reusable components"],
    image:
      "data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>\
        <defs><linearGradient id='g3' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%232565c0'/><stop offset='100%' stop-color='%23f59e0b'/></linearGradient></defs>\
        <rect width='100%' height='100%' fill='url(%23g3)'/>\
        <text x='50%' y='52%' font-size='46' text-anchor='middle' fill='white' font-family='Inter, Arial'>CI3 ➜ CI4 Modernization</text>\
      </svg>",
    link: "#",
  },
  {
    title: "Website Penyanyi – Platform Portofolio Musisi",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    year: "2024",
    description:
      "Website untuk penyanyi/performer dengan halaman profil, jadwal manggung, galeri, dan form booking.",
    highlights: ["Booking form", "CMS sederhana", "SEO dasar"],
    image:
      "data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>\
        <defs><linearGradient id='g4' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%2313b981'/><stop offset='100%' stop-color='%233b82f6'/></linearGradient></defs>\
        <rect width='100%' height='100%' fill='url(%23g4)'/>\
        <text x='50%' y='52%' font-size='46' text-anchor='middle' fill='white' font-family='Inter, Arial'>Singer Portfolio Website</text>\
      </svg>",
    link: "#",
  },
];

const tags = [
  "Web App",
  "Education",
  "AR",
  "Admin Panel",
  "Migration",
  "Portfolio",
  "Android",
  "PHP",
];

export default function PortfolioYoseph() {
  const [dark, setDark] = useState(true);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const text = (p.title + p.description + p.stack.join(" ")).toLowerCase();
      const q = query.trim().toLowerCase();
      const tagOk = activeTag === "all" ||
        (activeTag === "AR" && p.title.toLowerCase().includes("ar")) ||
        (activeTag === "Education" && p.description.toLowerCase().includes("eduk")) ||
        (activeTag === "Migration" && p.title.toLowerCase().includes("migrasi")) ||
        (activeTag === "Portfolio" && p.title.toLowerCase().includes("penyanyi")) ||
        (activeTag === "Android" && p.stack.join(" ").toLowerCase().includes("android")) ||
        (activeTag === "PHP" && p.stack.join(" ").toLowerCase().includes("php")) ||
        (activeTag === "Web App" && p.description.toLowerCase().includes("webs")) ||
        // activeTag === "Web App" || 
        activeTag === "Admin Panel"; // generic tags
      return text.includes(q) && tagOk;
    });

    if (sort === "newest") {
      // rely on array order (already newest first)
      return list;
    }
    if (sort === "alphabetical") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [query, activeTag, sort]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 dark:text-slate-100 dark:bg-slate-950">
        {/* Navbar */}
        <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="h-9 w-9 rounded-2xl object-cover"
              />
              <span className="font-semibold tracking-wide">Yoseph Martin Lay</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setDark((d) => !d)} className="rounded-2xl">
                {dark ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
              </Button>
              <Button variant="outline" className="rounded-2xl">
                <a href="#contact" className="flex items-center gap-2"><Mail className="h-4 w-4"/> Contact</a>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                IT Developer & AR Enthusiast
              </h1>
              <p className="mt-4 text-slate-300">
                Lulusan S1 Teknik Informatika. Berpengalaman membuat aplikasi web dengan Laravel & CodeIgniter, 
                serta aplikasi AR menggunakan Unity. Fokus pada solusi yang rapi, cepat, dan mudah dirawat.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-2xl">
                  <a href="#projects" className="flex items-center gap-2">Lihat Proyek <ExternalLink className="h-4 w-4"/></a>
                </Button>
                <Button variant="secondary" className="rounded-2xl" asChild>
                  <a href="#skills" className="flex items-center gap-2">Keahlian</a>
                </Button>
                <Button variant="outline" className="rounded-2xl" asChild>
                  <a href={`${import.meta.env.BASE_URL}CV_YosephMartinLay.pdf`}
 download="CV_YosephMartinLay.pdf" className="flex items-center gap-2"> <Download className="h-4 w-4"/> CV (PDF)</a>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-slate-300">
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> Indonesia</span>
                <a href="https://wa.me/6285214872192" className="inline-flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4"/> +62 852-1487-2192</a>
                <a href="mailto:martinlay99@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4"/> martinlay99@gmail.com</a>
              </div>
              <div className="mt-3 flex gap-3">
                <a href="https://github.com/MartinLay" className="hover:opacity-90" target="_blank" rel="noreferrer"><Github/></a>
                <a href="https://linkedin.com/in/martinlay99" className="hover:opacity-90" target="_blank" rel="noreferrer"><Linkedin/></a>
                <a href="https://youtube.com/@Martin_Lay" className="hover:opacity-90" target="_blank" rel="noreferrer"><Youtube/></a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-indigo-600/30 via-teal-500/20 to-cyan-400/20 ring-1 ring-white/10 p-1">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center text-center p-8">
                  <div>
                    <p className="text-sm text-teal-300/80">Available for Work</p>
                    <p className="mt-2 text-xl font-semibold">Web Development • AR • Android</p>
                    <p className="mt-3 text-slate-300">Saya membuat sistem informasi, website komersial, dan aplikasi AR/Android.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Controls */}
        <section className="mx-auto max-w-6xl px-4" id="projects">
          <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-xl">Proyek Terpilih</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"/>
                    <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari proyek, stack..." className="pl-8 bg-slate-900/40 border-white/10 rounded-xl"/>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="rounded-xl"><Filter className="h-4 w-4 mr-2"/>Sort</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-xl">
                      <DropdownMenuItem onClick={() => setSort("newest")}>Terbaru</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSort("alphabetical")}>A–Z</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTag} onValueChange={setActiveTag} className="w-full">
                <TabsList className="flex flex-wrap gap-2 bg-transparent p-0">
                  <TabsTrigger value="all" className="rounded-xl data-[state=active]:bg-white/10">Semua</TabsTrigger>
                  {tags.map((t) => (
                    <TabsTrigger key={t} value={t} className="rounded-xl data-[state=active]:bg-white/10">{t}</TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value={activeTag} className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {filtered.map((p, i) => (
                      <motion.a
                        key={p.title}
                        href={p.link}
                        target={p.link?.startsWith("http") ? "_blank" : undefined}
                        rel={p.link?.startsWith("http") ? "noreferrer" : undefined}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="rounded-3xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 bg-white/5 backdrop-blur group"
                      >
                        <div className="aspect-[16/9] w-full overflow-hidden">
                          <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"/>
                        </div>
                        <div className="p-5">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-semibold">{p.title}</h3>
                            <span className="text-xs text-slate-400 shrink-0">{p.year}</span>
                          </div>
                          <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                              <Badge key={s} variant="secondary" className="rounded-lg bg-white/10 text-white border-white/10">{s}</Badge>
                            ))}
                          </div>
                          <ul className="mt-3 list-disc list-inside text-sm text-slate-300 space-y-1">
                            {p.highlights.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([cat, list]) => (
              <Card key={cat} className="rounded-3xl bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">{cat}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {list.map((item) => (
                    <Badge key={item} variant="outline" className="rounded-lg border-white/20 text-slate-200">{item}</Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education & About */}
        <section className="mx-auto max-w-6xl px-4 py-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-3xl bg-white/5 border-white/10 md:col-span-2">
              <CardHeader>
                <CardTitle>Tentang Saya</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p>
                  Saya senang membangun aplikasi dengan arsitektur yang bersih dan fokus pada pengalaman pengguna. 
                  Terbiasa bekerja mandiri maupun kolaborasi, cepat belajar, dan gemar mencoba teknologi baru.
                </p>
                <ul className="mt-3 list-disc list-inside space-y-1">
                  <li>Membuat sistem informasi pendidikan dan website komersial untuk klien.</li>
                  <li>Proyek AR edukasi untuk anak menggunakan Unity.</li>
                  <li>Refactor & migrasi CodeIgniter 3 ke 4, termasuk datatable dan modal form.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-3xl bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle>Pendidikan</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <div>
                  <p className="font-medium">S1 Teknik Informatika</p>
                  <p>Universitas Mercu Buana</p>
                  <p className="text-xs text-slate-400">2019 – 2024</p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <p className="font-medium">SMA</p>
                  <p>SMAK St Teresia Danga</p>
                  <p className="text-xs text-slate-400">2014 - 2017</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
          <Card className="rounded-3xl bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle>Kontak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="mailto:martinlay99@gmail.com" className="rounded-2xl ring-1 ring-white/10 p-4 hover:bg-white/5 flex items-center gap-3">
                  <Mail className="h-5 w-5"/> martinlay99@gmail.com
                </a>
                <a href="https://wa.me/6285214872192" target="_blank" className="rounded-2xl ring-1 ring-white/10 p-4 hover:bg-white/5 flex items-center gap-3">
                  <Phone className="h-5 w-5"/> +62 852-1487-2192
                </a>
                <a href="https://linkedin.com/in/martinlay99" target="_blank" rel="noreferrer" className="rounded-2xl ring-1 ring-white/10 p-4 hover:bg-white/5 flex items-center gap-3">
                  <Linkedin className="h-5 w-5"/> LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Yoseph Martin Lay — Built with React, Tailwind, shadcn/ui.
        </footer>
      </div>
    </div>
  );
}
