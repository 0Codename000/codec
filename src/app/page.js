"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import FrameScroll from "@/components/FrameScroll";
import UIText from "@/components/UIText";
export default function Home() {

  const introRef = useRef(null);
  const transitionRef = useRef(null);

  const [scene, setScene] = useState("intro");

  // =========================
  // SMOOTH SCROLL
  // =========================

  // =========================
  // CURSOR GLOW
  // =========================

  useEffect(() => {

    const glow = document.querySelector(".cursor-glow");

    const moveCursor = (e) => {

      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  // =========================
  // INTRO END
  // =========================

  useEffect(() => {

    const video = introRef.current;

    if (!video) return;

    const handleEnd = () => {
      setScene("idle");
    };

    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("ended", handleEnd);
    };

  }, []);

  // =========================
  // TRANSITION END
  // =========================

  useEffect(() => {

    const video = transitionRef.current;

    if (!video) return;

    const handleEnd = () => {
      setScene("portfolio");
    };

    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("ended", handleEnd);
    };

  }, [scene]);

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* CURSOR */}
      <div className="cursor-glow" />

      {/* ================= INTRO ================= */}

      <AnimatePresence>

        {scene === "intro" && (

          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >

            <video
              ref={introRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
            </video>

          </motion.section>

        )}

      </AnimatePresence>

      {/* ================= IDLE ================= */}

      <AnimatePresence>

        {scene === "idle" && (

          <motion.section
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
          >

            {/* VIDEO */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-110"
            >
              <source src="/videos/idle.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-5xl md:text-8xl font-black tracking-[12px]"
              >
                WELCOME
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-5 text-zinc-300 tracking-[8px] text-lg md:text-2xl"
              >
                TO MY WORLD
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-zinc-500 tracking-[6px]"
              >
                WAWAN KURNIAWAN
              </motion.p>

              {/* BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 60px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setScene("transition")}
                className="
                mt-12
                px-12
                py-5
                rounded-full
                glass
                cinematic-shadow
                tracking-[5px]
                hover:bg-white/10
                transition-all
                duration-500
                "
              >
                ENTER
              </motion.button>

            </div>

          </motion.section>

        )}

      </AnimatePresence>

      {/* ================= TRANSITION ================= */}

      <AnimatePresence>

        {scene === "transition" && (

          <motion.section
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >

            <video
              ref={transitionRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/transition.mp4" type="video/mp4" />
            </video>

          </motion.section>

        )}

      </AnimatePresence>

    {/* ================= PORTFOLIO ================= */}

{scene === "portfolio" && (

  <section className="relative z-10">

   <FrameScroll />

    {/* HERO */}

    <section className="h-screen flex flex-col items-center justify-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-9xl font-black"
      >
        FULLSTACK DEVELOPER
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-zinc-400 tracking-[8px]"
      >
        PORTFOLIO
      </motion.h2>

    </section>

    <UIText />

  </section>

)}

</main>
  );
}