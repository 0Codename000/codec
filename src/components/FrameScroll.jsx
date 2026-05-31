"use client";

import { useEffect, useRef } from "react";

export default function FrameScroll() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrame = useRef(0);

  const TOTAL_FRAMES = 51;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ======================
    // PRELOAD FRAMES
    // ======================
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(6, "0");

      img.src = `/frames/scroll_${frameNumber}.webp`;
      imagesRef.current.push(img);
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
      if (!img || !img.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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
  handleScroll();
  rafId = requestAnimationFrame(animate);
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