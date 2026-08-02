"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { droneData } from "@/data/droneData";
import { TacticalVideo } from "./TacticalVideo";

export function HeroSectionVideo() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen overflow-hidden bg-black"
    >

      {/* VIDEO BACKGROUND */}
      <motion.div
        style={{
          scale: heroScale,
          y: heroY,
          opacity: heroOpacity,
        }}
        className="absolute inset-0 z-0"
      >
        <TacticalVideo
          src={droneData.hero.videoPath}
          poster={droneData.hero.posterPath}
          posterAlt={droneData.hero.posterAlt}
        />
      </motion.div>


      {/* CINEMATIC OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/50 to-black" />

      <div className="absolute inset-0 z-10 bg-cyan-500/5 mix-blend-screen" />


      {/* BLUE CORE GLOW */}
      <motion.div
        animate={{
          scale:[1,1.15,1],
          opacity:[0.3,0.6,0.3]
        }}
        transition={{
          duration:5,
          repeat:Infinity
        }}
        className="absolute left-1/2 top-10 z-10 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]"
      />


      {/* HUD GRID */}
      <div className="absolute inset-0 z-10 grid-overlay opacity-25" />


      {/* SCAN EFFECT */}
      <motion.div
        animate={{
          y:["-120%","120%"]
        }}
        transition={{
          repeat:Infinity,
          duration:5,
          ease:"linear"
        }}
        className="absolute z-20 h-48 w-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
      />


      {/* CONTENT */}
      <motion.div
        style={{
          opacity:heroOpacity
        }}
        className="relative z-30 min-h-screen px-8 md:px-20"
      >


        {/* TOP HUD */}
        <div className="flex justify-between pt-12">


          <motion.div
            initial={{opacity:0,x:-50}}
            animate={{opacity:1,x:0}}
            transition={{duration:1}}
            className="rounded-full border border-cyan-400/30 bg-black/40 px-6 py-3 backdrop-blur-xl"
          >
            <p className="text-xs tracking-[0.5em] text-cyan-300">
              ● LIVE FEED
            </p>
          </motion.div>



          <motion.div
            initial={{opacity:0,x:50}}
            animate={{opacity:1,x:0}}
            transition={{duration:1}}
            className="rounded-2xl border border-cyan-400/20 bg-black/40 px-6 py-4 backdrop-blur-xl"
          >

            <p className="font-black text-white">
              EXECUTIONER SYSTEMS
            </p>

            <p className="text-[10px] tracking-[0.4em] text-gray-400">
              TACTICAL COMMAND AI
            </p>

          </motion.div>

        </div>



        {/* CENTER TITLE */}
        <div className="flex h-[75vh] items-center justify-center">

          <motion.div
            initial={{
              opacity:0,
              y:50
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:.8,
              duration:1
            }}
            className="text-center"
          >

            <h1 className="text-6xl font-black uppercase tracking-tight text-white md:text-8xl">
              Execute
              <span className="text-cyan-400">
                {" "}Beyond
              </span>
            </h1>


            <p className="mx-auto mt-6 max-w-xl text-gray-300">
              Advanced tactical drone intelligence system powered by next generation autonomous technology.
            </p>


            <button className="mt-10 rounded-full border border-cyan-400 bg-cyan-400/10 px-10 py-4 font-bold text-cyan-300 backdrop-blur-xl transition hover:bg-cyan-400 hover:text-black">
              INITIALIZE SYSTEM
            </button>

          </motion.div>

        </div>




        {/* LEFT STATUS */}

        <motion.div
          initial={{opacity:0,x:-40}}
          animate={{opacity:1,x:0}}
          transition={{delay:1.5}}
          className="absolute bottom-10 left-10 hidden rounded-3xl border border-cyan-400/20 bg-black/50 p-6 backdrop-blur-3xl xl:block"
        >

          <p className="text-xs tracking-[.4em] text-cyan-300">
            SYSTEM STATUS
          </p>


          <h2 className="mt-3 text-5xl font-black text-white">
            ONLINE
          </h2>


          <p className="text-gray-400">
            GPU Rendering Active
          </p>


          <div className="mt-5 h-2 w-60 overflow-hidden rounded-full bg-white/10">

            <motion.div
              animate={{
                width:["0%","96%"]
              }}
              transition={{
                duration:2
              }}
              className="h-full bg-cyan-400"
            />

          </div>


        </motion.div>





        {/* RIGHT TELEMETRY */}

        <motion.div
          initial={{opacity:0,x:40}}
          animate={{opacity:1,x:0}}
          transition={{delay:1.6}}
          className="absolute bottom-10 right-10 hidden w-72 rounded-3xl border border-cyan-400/20 bg-black/50 p-6 backdrop-blur-3xl xl:block"
        >

          <p className="text-xs tracking-[.4em] text-cyan-300">
            TELEMETRY
          </p>


          <div className="mt-5 flex justify-between">

            <div>
              <p className="text-gray-400">
                ALT
              </p>
              <h3 className="text-3xl font-black text-white">
                6100m
              </h3>
            </div>


            <div>
              <p className="text-gray-400">
                SPEED
              </p>

              <h3 className="text-3xl font-black text-white">
                294
              </h3>

            </div>

          </div>


          <div className="mt-6 border-t border-white/10 pt-5 flex justify-between">

            <span className="text-gray-400">
              TARGET
            </span>

            <span className="font-bold text-cyan-300">
              LOCKED
            </span>

          </div>

        </motion.div>


      </motion.div>

    </section>
  );
}