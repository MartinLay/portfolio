import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single();
      if (!error) setProject(data);
    };
    fetchProject();
  }, [slug]);

  if (!project) return <p className="text-center text-white">Loading...</p>;

  // pastikan kalau `images` berupa array, kalau tidak bungkus jadi array
  const images = Array.isArray(project.images)
    ? project.images
    : [project.image];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Tombol kembali */}
        <Link to="/" className="text-teal-400 underline hover:text-teal-300">
          ← Kembali
        </Link>

        {/* Slider Screenshots */}
        <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-[450px]"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-[450px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Judul & Deskripsi */}
        <h1 className="mt-6 text-3xl font-bold">{project.title}</h1>
        <p className="mt-3 text-slate-300 text-lg">{project.description}</p>

        {/* Highlights */}
        {project.highlights?.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">✨ Fitur Utama</h2>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {project.stack?.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">🛠️ Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tahun */}
        <p className="mt-6 text-slate-400">📅 Tahun: {project.year}</p>
        <p className="mt-6 text-slate-400">🔗 Link: <a href={project.link} className="text-teal-400 underline hover:text-teal-300" target="_blank" rel="noopener noreferrer">{project.link}</a></p>
      </div>
    </div>
  );
}
