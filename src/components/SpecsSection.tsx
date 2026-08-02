"use client";

import { motion } from "motion/react";
import { droneData } from "@/data/droneData";

export function SpecsSection() {
  return (
    <section
      id="specs"
      className="relative overflow-hidden bg-black py-40"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#03060b] via-black to-[#02060b]" />

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="grid-overlay h-full w-full" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 text-[11px] uppercase tracking-[0.45em] text-cyan-300 backdrop-blur-xl">
            TECHNICAL SPECIFICATIONS
          </span>

          <h2 className="mt-10 text-6xl font-black uppercase leading-none text-white md:text-8xl">
            Built Beyond
            <br />
            Human Limits.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Every subsystem has been optimized for speed, endurance,
            precision and battlefield survivability.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {droneData.specs.map((spec, i) => (

            <motion.div
              key={spec.label}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: i * .08,
              }}
              className="group rounded-[30px] border border-cyan-400/15 bg-white/[0.04] p-8 backdrop-blur-3xl shadow-[0_0_60px_rgba(0,255,255,.08)]"
            >

              <p className="text-[11px] uppercase tracking-[0.45em] text-cyan-300">
                {spec.label}
              </p>

              <h3 className="mt-6 text-5xl font-black text-white transition duration-500 group-hover:text-cyan-300">
                {spec.value}
              </h3>

              <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    duration: 1.6,
                    delay: i * .1,
                  }}
                  className="h-full rounded-full bg-cyan-400"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}