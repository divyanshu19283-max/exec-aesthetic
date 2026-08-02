"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { name: "Overview", href: "#gallery" },
  { name: "Specifications", href: "#specs" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    handle();

    window.addEventListener("scroll", handle, { passive: true });

    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
    >
      <nav
        className={`flex w-full max-w-7xl items-center justify-between gap-4 rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-cyan-400/20 bg-black/70 backdrop-blur-3xl shadow-[0_0_45px_rgba(0,255,255,.10)]"
            : "border-white/10 bg-black/35 backdrop-blur-2xl"
        } px-8 py-4`}
      >
        {/* Logo */}

        <a
          href="#top"
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_30px_rgba(0,255,255,.25)]">

            <span className="text-xl font-black text-cyan-300">
              E
            </span>
          </div>

          <div>

           <h2 className="text-sm font-black uppercase tracking-[0.12em] text-white sm:text-lg">
            THE EXECUTIONER
          </h2>
          <p className="text-[10px] uppercase tracking-[0.45em] text-cyan-300">
            Advanced Defence Systems
          </p>
          </div>
        </a>

        {/* Navigation */}

        <div className="hidden items-center gap-10 lg:flex">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold uppercase tracking-[0.3em] text-gray-300 transition-all duration-300 hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* CTA */}

        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
          href="#contact"
          className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-bold uppercase tracking-[0.25em] text-black shadow-[0_0_35px_rgba(0,255,255,.45)] transition hover:bg-cyan-400"
        >
          CONTACT
        </motion.a>
      </nav>
    </motion.header>
  );
}