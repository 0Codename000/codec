"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaReact,
  FaFigma,
  FaVideo,
} from "react-icons/fa";

import { SiNextdotjs, SiFramer } from "react-icons/si";
import { Code2, Sparkles, MonitorSmartphone } from "lucide-react";

/* ================= DATA ================= */

const skills = [
  { icon: <FaReact size={38} />, title: "React", desc: "Interactive UI Systems" },
  { icon: <SiNextdotjs size={38} />, title: "Next.js", desc: "Modern Web Apps" },
  { icon: <SiFramer size={38} />, title: "Framer Motion", desc: "Smooth Animations" },
  { icon: <FaFigma size={38} />, title: "UI Design", desc: "Visual Crafting" },
  { icon: <FaVideo size={38} />, title: "Video", desc: "Cinematic Editing" },
  { icon: <Code2 size={38} />, title: "Frontend", desc: "Performance Focused" },
  { icon: <Sparkles size={38} />, title: "Storytelling", desc: "Emotional UX" },
  { icon: <MonitorSmartphone size={38} />, title: "Tech", desc: "Future Systems" },
];

const projects = [
  "FRONTEND EXPERIENCE",
  "INTERACTIVE PORTFOLIO",
  "MOTION WEBSITE",
  "DASHBOARD UI",
];

const projectDescriptions = {
  "FRONTEND EXPERIENCE":
    "Creative Frontend Developer focused on crafting visually immersive and high-performance digital experiences.",

  "INTERACTIVE PORTFOLIO":
    "Modern interactive portfolio with cinematic transitions and immersive storytelling.",

  "MOTION WEBSITE":
    "Advanced motion-based website development using smooth animation systems and premium UI effects.",

  "DASHBOARD UI":
    "Clean and scalable dashboard interface with responsive layouts and modern architecture.",
};

/* ================= COMPONENT ================= */

export default function UIText() {
  const [popup, setPopup] = useState(null);

  const openPopup = (data) => {
    setPopup({
      title: data.title || data,
      desc:
        data.desc ||
        projectDescriptions[data.title || data] ||
        "Immersive cinematic experience unlocked.",
    });
  };
  return (
    <>
      {/* ================= POPUP CINEMATIC ================= */}
      <AnimatePresence>
        {popup && (
          <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopup(null)}
          >
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="glass rounded-[40px] p-12 max-w-xl w-full text-center relative overflow-hidden"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-white/10 blur-3xl opacity-20" />

              <motion.h2
                className="text-4xl font-black"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {popup.title}
              </motion.h2>

              <motion.div
                className="h-[2px] bg-white/30 mx-auto my-6"
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ delay: 0.3 }}
              />

              <motion.p
                className="text-zinc-300 text-lg"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {popup.desc}
              </motion.p>

              <motion.button
                onClick={() => setPopup(null)}
                className="mt-10 px-10 py-4 rounded-full bg-white/10"
                whileHover={{ scale: 1.08 }}
              >
                CLOSE
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= PROFILE ================= */}
      <section className="min-h-screen px-6 flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 w-full">

          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-[40px] overflow-hidden h-[650px]"
          >
            <img src="/profile.jpg" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="tracking-[10px] text-zinc-500">Digital Creator</p>

            <h1 className="text-6xl md:text-8xl font-black">WAWAN</h1>
            <h2 className="text-5xl md:text-7xl font-black text-white/10">
              KURNIAWAN
            </h2>

            <p className="mt-8 text-zinc-400 text-xl">
              S, immersive experiences, modern interactive design.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="min-h-screen px-6 py-32">
        <div className="max-w-7xl mx-auto">

          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-16"
          >
            PROJECT HUB
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="space-y-4">
              {projects.map((p, i) => (
                <motion.div
                  key={p}
                  onClick={() => openPopup({ title: p })}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 15, scale: 1.03 }}
                  className="glass p-6 rounded-[20px] cursor-pointer"
                >
                  {p}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="lg:col-span-2 glass rounded-[40px] h-[600px] overflow-hidden"
            >
              <img src="/project-preview.jpg" className="w-full h-full object-cover" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="min-h-screen px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">

          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black mb-16"
          >
            CAPABILITIES
          </motion.h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {skills.map((s, i) => (
              <motion.div
                key={s.title}
                onClick={() => openPopup(s)}
                initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass p-8 rounded-[30px] cursor-pointer"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="text-zinc-500 mt-2">{s.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-[80px] md:text-[160px] font-black leading-none"
        >
          LET'S<br />BUILD
        </motion.h2>

        <p className="mt-6 text-zinc-400 text-xl">
          Something Extraordinary Together
        </p>

        <a
          href="https://wa.me/085849008621"
          className="mt-10 glass px-10 py-5 rounded-full text-lg"
        >
          START A CONVERSATION
        </a>

      </section>

      {/* ================= SOCIAL ================= */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 glass rounded-full px-6 py-4 flex gap-6">

         <a href="https://www.instagram.com/w.annk/#" target="_blank">
    <FaInstagram size={24} />
  </a>

        <a href="https://wa.me/6285849008621" target="_blank">
    <FaWhatsapp size={24} />
  </a>
        <FaEnvelope size={24} /><a href="mailto:b.wawankurniawan@gmail.com">
    <FaEnvelope size={24} />
  </a>
       <a href="https://github.com/0Codename000" target="_blank">
    <FaGithub size={24} />
  </a>
      </div>
    </>
  );
}