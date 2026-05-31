"use client";

import { useEffect, useRef } from "react";

export default function FrameScroll() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrame = useRef(0);
  const isReady = useRef(false);
const lastValidFrame = useRef(null);

  const TOTAL_FRAMES = 451;

  useEffect(() => {
    console.log("FrameScroll mounted");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ======================
    // PRELOAD FRAMES
    // ======================
   // LOAD FRAME PERTAMA DULU (WAJIB)
const firstImg = new Image();
firstImg.src = "/frames/scroll_000001.webp";

firstImg.onload = () => {
  imagesRef.current[0] = firstImg;
  isReady.current = true; // 🔥 INI KUNCI BIAR CANVAS NYALA
  draw(0);
};

// LOAD SISANYA DI BELAKANG (TETAP ADA)
for (let i = 2; i <= TOTAL_FRAMES; i++) {
  const img = new Image();
  const frameNumber = String(i).padStart(6, "0");

  img.src = `/frames/scroll_${frameNumber}.webp`;
  imagesRef.current[i - 1] = img;
}
    const firstImage = imagesRef.current[0];

if (firstImage) {
  firstImage.onload = () => {
    draw(0);
  };
}
    
    // ======================
    // DRAW FRAME
    // ======================
    const draw = (index) => {
  const img = imagesRef.current[index];

  if (img && img.complete && img.naturalWidth > 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    lastValidFrame.current = img; // simpan frame terakhir
    return;
  }

  // kalau belum siap, pakai frame terakhir
  if (lastValidFrame.current) {
    ctx.drawImage(lastValidFrame.current, 0, 0);
  }
};

    // ======================
    // SCROLL CONTROL
    // ======================
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollTop / maxScroll;

      const targetFrame = Math.floor(progress * (TOTAL_FRAMES - 1));

      // smooth biar tidak patah
      currentFrame.current +=
        (targetFrame - currentFrame.current) * 0.08;

      draw(Math.floor(currentFrame.current));
    };

  let rafId;

const animate = () => {
  rafId = requestAnimationFrame(animate);

  if (!isReady.current) return; // 🔥 STOP DULU JIKA BELUM SIAP

  handleScroll();
};

animate();

return () => {
  cancelAnimationFrame(rafId);
};
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <canvas ref={canvasRef} />
    </div>
  );
}