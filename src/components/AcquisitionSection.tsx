"use client";

import { motion } from "motion/react";
import { droneData } from "@/data/droneData";

export function AcquisitionSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-40"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#02060d] via-black to-[#03060d]" />

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="grid-overlay h-full w-full" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 text-[11px] uppercase tracking-[0.45em] text-cyan-300">
            ACQUISITION PROGRAM
          </span>

          <h2 className="mt-10 text-6xl font-black uppercase text-white md:text-8xl">
            Mission Ready.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Every Executioner platform is precision-built for its mission profile.
            Configure surveillance, defense or enterprise variants with dedicated
            support and secure deployment.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {droneData.pricing.map((tier, i) => (

            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: i * .08,
              }}
              className={`relative overflow-hidden rounded-[30px] border p-10 backdrop-blur-3xl ${
                tier.featured
                  ? "border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_80px_rgba(0,255,255,.18)]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >

              {tier.featured && (
                <div className="absolute right-8 top-8 rounded-full bg-cyan-400 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-black">
                  RECOMMENDED
                </div>
              )}

              <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">
                {tier.name}
              </p>

              <h3 className="mt-8 text-6xl font-black text-white">
                {tier.price}
              </h3>

              <div className="my-10 h-px bg-white/10" />

              <div className="space-y-5">

                {tier.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-4"
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />

                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </div>

                ))}

              </div>

              <motion.a
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: .97,
                }}
                href="mailto:YOUR_EMAIL_HERE"
                className={`mt-12 flex justify-center rounded-full py-5 text-sm font-bold uppercase tracking-[0.3em] transition ${
                  tier.featured
                    ? "bg-cyan-400 text-black"
                    : "border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-black"
                }`}
              >
                Request Proposal
              </motion.a>

            </motion.div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mt-28 border-t border-white/10 pt-10 text-center"
        >

          <h3 className="text-4xl font-black uppercase text-white">
            Made by Divyanshu
          </h3>

          <p className="mt-4 text-gray-500">
            Defence Engineering, Manufacturing & Strategic Solutions
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-10 text-sm uppercase tracking-[0.25em] text-gray-400">

           <span>ENGINEERING EXCELLENCE</span>
          <span>QUALITY FOCUSED</span>
          <span>MISSION SUPPORT</span>
          <span>2026</span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}