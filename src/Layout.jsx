import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "./assets/logo.jpg";
import { Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext"; // Import hook useTheme

export default function Layout({ children }) {
  const { dark, toggleTheme } = useTheme(); // Menggunakan context

  return (
    // Hapus conditional className karena sudah diatur di ThemeProvider
    <div>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 dark:bg-slate-950 transition-colors duration-300">
        {/* Navbar */}
        <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-9 w-9 rounded-2xl object-cover" />
              <span className="font-semibold tracking-wide">Yoseph Martin Lay</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme} // Menggunakan toggleTheme dari context
                className="rounded-2xl"
              >
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="outline" className="rounded-2xl">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Kontak
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>

        {/* Footer */}
        <footer className="py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Yoseph Martin Lay — Built with React, Tailwind, shadcn/ui.
        </footer>
      </div>
    </div>
  );
}