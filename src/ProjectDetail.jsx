import { useParams, Link } from "react-router-dom";
import { projects } from "@/PortfolioYoseph";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p className="text-center text-white">Project not found.</p>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Tombol kembali */}
        <Link to="/" className="text-teal-400 underline hover:text-teal-300">
          ← Kembali
        </Link>

        {/* Header + Screenshot */}
        {/* <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[450px] object-cover"
          />
        </div> */}
        <div className="mt-6">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-2xl shadow-lg"
          >
            {project.images && project.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Judul & Deskripsi */}
        <h1 className="mt-6 text-3xl font-bold">{project.title}</h1>
        <p className="mt-3 text-slate-300 text-lg">{project.description}</p>

        {/* Highlights */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">✨ Fitur Utama</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">🛠️ Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Tahun */}
        <p className="mt-6 text-slate-400">📅 Tahun: {project.year}</p>
      </div>
    </div>
  );
}
