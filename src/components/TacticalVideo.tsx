"use client";

import { motion } from "motion/react";

type Props = {
  src?: string;
  poster: string;
  posterAlt: string;
};

export function TacticalVideo({ src, poster, posterAlt }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative aspect-video w-full overflow-hidden rounded-[32px] border border-cyan-400/20 bg-black shadow-[0_0_80px_rgba(0,255,255,.12)]"
    >
      {src ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      ) : (
        <img
          src={poster}
          alt={posterAlt}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      )}

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Cyan glow */}
      <div className="absolute inset-0 bg-cyan-500/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Scanning line */}
      <motion.div
        animate={{
          y: ["-120%", "120%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
      />

      {/* Corner HUD */}
      <div className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-black/50 px-4 py-2 backdrop-blur-xl">
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-300">
          LIVE FEED
        </span>
      </div>

      {/* Recording indicator */}
      <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-red-500/30 bg-black/50 px-4 py-2 backdrop-blur-xl">
        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white">
          REC
        </span>
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
            AI ANALYSIS
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            TARGET LOCKED
          </h3>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-black/40 px-5 py-3 backdrop-blur-xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
            STATUS
          </p>

          <p className="mt-1 font-bold text-white">
            ONLINE
          </p>
        </div>

      </div>
    </motion.div>
  );
}