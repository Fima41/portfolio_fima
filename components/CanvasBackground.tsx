"use client";

import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    type Node = {
      x: number; y: number; vx: number; vy: number;
      r: number; type: 'station' | 'pulse' | 'data'; phase: number;
    };

    let W: number, H: number;
    let nodes: Node[] = [];
    let t = 0;
    let animId = 0;
    const mouse = { x: -999, y: -999 };

    function init() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = W;
      canvas!.height = H;
      nodes = Array.from({ length: 48 }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - .5) * .3,
        vy: (Math.random() - .5) * .3,
        r: Math.random() * 1.5 + 1,
        type: i < 10 ? 'station' : i < 20 ? 'pulse' : 'data',
        phase: Math.random() * Math.PI * 2
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      t += 0.01;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 150) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(74,158,255,${0.12 * (1 - d / 150)})`;
            ctx!.lineWidth = .5;
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.stroke();
          }
        }
      }

      const mx = mouse.x, my = mouse.y;
      nodes.forEach(n => {
        const mdx = n.x - mx, mdy = n.y - my, md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 100 && md > 0) { n.x += mdx / md * .5; n.y += mdy / md * .5 }
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        if (n.type === 'station') {
          const pulse = Math.sin(t + n.phase) * .5 + .5;
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, n.r + 3 + pulse * 3, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(111,207,82,${0.06 + pulse * 0.06})`;
          ctx!.fill();
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx!.fillStyle = '#6fcf52';
          ctx!.fill();
        } else if (n.type === 'pulse') {
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(74,158,255,${0.5 + Math.sin(t * 1.3 + n.phase) * .3})`;
          ctx!.fill();
        } else {
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, n.r * .8, 0, Math.PI * 2);
          ctx!.fillStyle = 'rgba(74,158,255,0.35)';
          ctx!.fill();
        }
      });

      ctx!.beginPath();
      ctx!.strokeStyle = 'rgba(111,207,82,0.08)';
      ctx!.lineWidth = 1;
      ctx!.setLineDash([3, 7]);
      const ox = Math.sin(t * .2) * 30;
      ctx!.moveTo(0, H * .5 + ox);
      ctx!.bezierCurveTo(W * .25, H * .3 + ox, W * .6, H * .7 + ox, W, H * .5 + ox);
      ctx!.stroke();
      ctx!.setLineDash([]);

      animId = requestAnimationFrame(draw);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    const handleResize = () => {
      init();
    };

    init();
    animId = requestAnimationFrame(draw);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef} />;
}
