import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawFlowingWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw flowing wave paths - reduced complexity
      const numberOfWaves = 3;
      for (let waveIndex = 0; waveIndex < numberOfWaves; waveIndex++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.12 - waveIndex * 0.04})`;
        ctx.lineWidth = 1.5;

        const amplitude = 25 + waveIndex * 10;
        const frequency = 0.005 + waveIndex * 0.002;
        const verticalOffset = (canvas.height / numberOfWaves) * waveIndex;

        for (let x = 0; x <= canvas.width; x += 20) {
          const y =
            verticalOffset +
            amplitude *
              Math.sin(
                x * frequency + time * 0.02 + (waveIndex * Math.PI) / 2
              );
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw animated circles with flowing effect - reduced
      const numberOfCircles = 4;
      for (let i = 0; i < numberOfCircles; i++) {
        const circleX =
          (canvas.width / numberOfCircles) * i +
          Math.sin(time * 0.005 + i) * 40;
        const circleY =
          canvas.height / 2 + Math.cos(time * 0.003 + i * 2) * 60;
        const radius = 2 + Math.sin(time * 0.01 + i);

        const gradient = ctx.createRadialGradient(
          circleX,
          circleY,
          0,
          circleX,
          circleY,
          radius * 6
        );
        gradient.addColorStop(0, "rgba(16, 185, 129, 0.3)");
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(
          circleX - radius * 6,
          circleY - radius * 8,
          radius * 16,
          radius * 16
        );
      }

      // Draw flowing lines pattern
      ctx.strokeStyle = "rgba(16, 185, 129, 0.08)";
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        const startX = (canvas.width / 20) * i + Math.sin(time * 0.002) * 30;
        const startY = 0 + Math.cos(time * 0.002 + i) * 50;
        const endX = startX + Math.sin(time * 0.003 + i) * 100;
        const endY = canvas.height + Math.cos(time * 0.001 + i * 2) * 50;

        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      time++;
      animationFrameId = requestAnimationFrame(drawFlowingWaves);
    };

    resizeCanvas();
    drawFlowingWaves();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        data-testid="animated-background-canvas"
      />
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 150, 75, 0],
            y: [0, 100, 150, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: [0, -120, -60, 0],
            y: [0, -100, -150, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
            filter: "blur(45px)",
          }}
          animate={{
            scale: [1, 1.3, 1.1, 1],
            opacity: [0.4, 0.7, 0.5, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
}
