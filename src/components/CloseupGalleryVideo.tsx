"use client";

import { motion } from "motion/react";
import { droneData } from "@/data/droneData";
import { TacticalVideo } from "./TacticalVideo";

type Item = (typeof droneData.showcase)[number];

function ShowcaseSection({ item }: { item: Item }) {
  const reverse = item.align === "right";

  return (
    <section className="relative overflow-hidden py-40">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020305] via-[#040812] to-black" />

      <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div
        className={`relative z-20 mx-auto flex max-w-7xl items-center gap-24 px-8 ${
          reverse
            ? "flex-col lg:flex-row-reverse"
            : "flex-col lg:flex-row"
        }`}
      >
        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? 100 : -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
          }}
          className="flex-1"
        >
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-cyan-300 backdrop-blur-2xl">
            {item.eyebrow}
          </span>

          <h2 className="mt-8 text-6xl font-black uppercase leading-none tracking-tight text-white md:text-8xl">
            {item.title}
          </h2>

          <p className="mt-5 text-sm uppercase tracking-[0.45em] text-cyan-300">
            {item.subtitle}
          </p>

          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
            {item.body}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-5">
            {item.stats.map((s) => (
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.35,
                }}
                key={s.label}
                className="rounded-3xl border border-cyan-400/20 bg-white/[0.04] p-6 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,255,255,.08)]"
              >
                <p className="text-[11px] uppercase tracking-[0.45em] text-cyan-400">
                  {s.label}
                </p>

                <h3 className="mt-3 text-3xl font-black text-white">
                  {s.value}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT VIDEO ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="flex-1"
        >
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: .45,
            }}
            className="overflow-hidden rounded-[34px] border border-cyan-400/20 bg-black shadow-[0_0_80px_rgba(0,255,255,.15)]"
          >
            <TacticalVideo
              src={item.videoPath}
              poster={item.posterPath}
              posterAlt={item.posterAlt}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export function CloseupGalleryVideo() {
  return (
    <div
      id="gallery"
      className="relative overflow-hidden bg-black"
    >
            {/* ================= HEADER ================= */}

      <section className="relative overflow-hidden py-44">

        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-20 mx-auto max-w-6xl px-8 text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-[11px] uppercase tracking-[0.5em] text-cyan-300 backdrop-blur-xl">
            ENGINEERING EXCELLENCE
          </span>

          <h1 className="mt-10 text-6xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-8xl">
            Every Component.
            <br />
            One Weapon System.
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-9 text-gray-400">
            Every module of <span className="text-cyan-300">THE EXECUTIONER</span>
            {" "}is engineered as a unified autonomous combat platform.
            Precision targeting, intelligent navigation and battlefield
            survivability combine into one next-generation tactical drone.
          </p>

        </motion.div>

      </section>

      {/* ================= COMPONENTS ================= */}

      <div className="space-y-6">
        {droneData.showcase.map((item) => (
          <ShowcaseSection
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {/* ================= CTA ================= */}

      <section className="relative overflow-hidden py-44">

        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-20 mx-auto max-w-6xl px-8 text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-[11px] uppercase tracking-[0.45em] text-cyan-300 backdrop-blur-xl">
            NEXT GENERATION WARFARE
          </span>

          <h2 className="mt-10 text-6xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-8xl">
            Tactical
            <br />
            Superiority.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-400">
            From propulsion to sensor fusion, every subsystem is optimized
            for autonomous battlefield dominance, unmatched endurance,
            and precision engagement.
          </p>

        </motion.div>

      </section>

      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="grid-overlay h-full w-full" />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

    </div>
  );
}