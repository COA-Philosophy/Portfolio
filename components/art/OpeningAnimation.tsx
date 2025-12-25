"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface OpeningAnimationProps {
    onComplete: () => void
}

export function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const CONFIG = {
            particleCount: 150,
            fps: 60,
            loop: false // Set to false to end animation after one cycle
        };

        const Easing = {
            easeInQuart: (t: number) => t * t * t * t,
            easeOutExpo: (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
            easeInOutSine: (t: number) => -(Math.cos(Math.PI * t) - 1) / 2
        };

        class Particle {
            canvas: HTMLCanvasElement;
            x: number = 0;
            y: number = 0;
            startX: number = 0;
            startY: number = 0;
            orbitCenterX: number = 0;
            orbitCenterY: number = 0;
            orbitRadiusX: number = 0;
            orbitRadiusY: number = 0;
            orbitAngle: number = 0;
            orbitSpeed: number = 0;
            hue: number = 0;
            size: number = 0;
            life: number = 0;

            constructor(canvas: HTMLCanvasElement) {
                this.canvas = canvas;
                this.reset();
            }

            reset() {
                const centerX = this.canvas.width / 2;
                const centerY = this.canvas.height / 2;

                this.orbitCenterX = centerX + (Math.random() - 0.5) * this.canvas.width * 0.25;
                this.orbitCenterY = centerY + (Math.random() - 0.5) * this.canvas.height * 0.25;
                this.orbitRadiusX = Math.random() * 70 + 25;
                this.orbitRadiusY = Math.random() * 50 + 20;
                this.orbitAngle = Math.random() * Math.PI * 2;

                this.orbitSpeed = (Math.random() * 0.002 + 0.0005) * (Math.random() > 0.5 ? 1 : -1);

                this.hue = Math.random() * 40 + 200;
                this.size = Math.random() * 2.5 + 1.5;
                this.life = Math.random() * 0.4 + 0.6;

                this.updatePosition();
                this.startX = this.x;
                this.startY = this.y;
            }

            updatePosition() {
                this.orbitAngle += this.orbitSpeed;
                this.x = this.orbitCenterX + Math.cos(this.orbitAngle) * this.orbitRadiusX;
                this.y = this.orbitCenterY + Math.sin(this.orbitAngle) * this.orbitRadiusY;
            }

            update(phase: string, progress: number) {
                switch (phase) {
                    case 'constellation':
                        this.updatePosition();
                        break;
                    case 'convergence':
                        const eased = Easing.easeInOutSine(progress);
                        const centerX = this.canvas.width / 2;
                        const centerY = this.canvas.height / 2;

                        if (progress < 0.02) {
                            this.startX = this.x;
                            this.startY = this.y;
                        } else {
                            this.x = this.startX + (centerX - this.startX) * eased;
                            this.y = this.startY + (centerY - this.startY) * eased;
                        }

                        if (progress > 0.5) {
                            const goldProgress = (progress - 0.5) / 0.5;
                            this.hue = 200 + goldProgress * 40;
                        }
                        break;
                    case 'line':
                    case 'fade':
                    case 'wait':
                        this.x = this.canvas.width / 2;
                        this.y = this.canvas.height / 2;
                        break;
                }
            }

            draw(ctx: CanvasRenderingContext2D, phase: string, progress: number) {
                let currentSize = this.size;
                const alpha = this.life;

                if (phase === 'convergence') {
                    currentSize = this.size * (1 - progress * 0.3);
                }

                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, currentSize * 3
                );
                gradient.addColorStop(0, `hsla(${this.hue}, 100%, 85%, ${alpha})`);
                gradient.addColorStop(0.4, `hsla(${this.hue}, 90%, 60%, ${alpha * 0.5})`);
                gradient.addColorStop(1, `hsla(${this.hue}, 90%, 40%, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, currentSize * 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class AnimationSystem {
            canvas: HTMLCanvasElement;
            ctx: CanvasRenderingContext2D;
            animationPhase: 'constellation' | 'convergence' | 'line' | 'fade' | 'wait';
            phaseStartTime: number;
            PHASE_DURATIONS: Record<string, number>;
            lineAnimation: { active: boolean, startTime: number | null };
            whiteOverlay: { active: boolean };
            particles: Particle[] = [];
            activeConnections: Map<string, boolean>;
            animationFrameId: number = 0;

            constructor(canvas: HTMLCanvasElement) {
                this.canvas = canvas;
                const context = this.canvas.getContext('2d');
                if (!context) throw new Error("Could not get 2d context");
                this.ctx = context;

                this.animationPhase = 'constellation';
                this.phaseStartTime = Date.now();

                this.PHASE_DURATIONS = {
                    constellation: 3000,
                    convergence: 4000,
                    line: 2500,
                    fade: 2000,
                    wait: 1000
                };

                this.lineAnimation = { active: false, startTime: null };
                this.whiteOverlay = { active: false };
                this.activeConnections = new Map();

                this.init();
            }

            init() {
                this.resizeCanvas();
                this.initParticles();

                // Use a persistent resize handler
                this.animate();
            }

            resizeCanvas() {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }

            initParticles() {
                this.particles = [];
                this.activeConnections.clear();

                // Responsive configuration
                const isMobile = this.canvas.width < 768;
                const count = isMobile ? 60 : CONFIG.particleCount; // Reduce particles on mobile

                for (let i = 0; i < count; i++) {
                    this.particles.push(new Particle(this.canvas));
                }
            }

            updatePhase() {
                const elapsed = Date.now() - this.phaseStartTime;
                const currentDuration = this.PHASE_DURATIONS[this.animationPhase];

                if (elapsed >= currentDuration) {
                    this.phaseStartTime = Date.now();
                    switch (this.animationPhase) {
                        case 'constellation':
                            this.animationPhase = 'convergence';
                            break;
                        case 'convergence':
                            this.animationPhase = 'line';
                            this.lineAnimation.active = true;
                            this.lineAnimation.startTime = Date.now();
                            break;
                        case 'line':
                            this.animationPhase = 'fade';
                            this.whiteOverlay.active = true;
                            break;
                        case 'fade':
                            if (CONFIG.loop) {
                                this.animationPhase = 'wait';
                            } else {
                                // Animation Sequence Complete
                                cancelAnimationFrame(this.animationFrameId);
                                onComplete();
                            }
                            break;
                        case 'wait':
                            this.resetAnimation();
                            break;
                    }
                }
            }

            resetAnimation() {
                this.animationPhase = 'constellation';
                this.lineAnimation.active = false;
                this.whiteOverlay.active = false;
                this.activeConnections.clear();
                this.particles.forEach(p => p.reset());
                this.phaseStartTime = Date.now();
            }

            animate() {
                this.ctx.fillStyle = '#000000';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

                this.updatePhase();

                const elapsed = Date.now() - this.phaseStartTime;
                const duration = this.PHASE_DURATIONS[this.animationPhase];
                const progress = Math.min(elapsed / duration, 1);

                this.particles.forEach(p => p.update(this.animationPhase, progress));

                if (this.animationPhase === 'constellation') {
                    this.updateAndDrawConnections();
                }

                this.ctx.globalCompositeOperation = 'lighter';
                this.particles.forEach(p => p.draw(this.ctx, this.animationPhase, progress));
                this.ctx.globalCompositeOperation = 'source-over';

                if (this.lineAnimation.active) {
                    this.drawLine(progress);
                }

                if (this.whiteOverlay.active) {
                    this.drawWhiteOverlay(progress);
                }

                // Check if we should continue animating
                if (this.animationPhase !== 'fade' || progress < 1 || CONFIG.loop) {
                    this.animationFrameId = requestAnimationFrame(() => this.animate());
                }
            }
            updateAndDrawConnections() {
                this.activeConnections.clear();
                this.ctx.strokeStyle = 'rgba(180, 220, 255, 0.4)';
                this.ctx.lineWidth = 0.5;
                this.ctx.beginPath();

                const isMobile = this.canvas.width < 768;
                const connectionDist = isMobile ? 80 : 135; // Shorter connections on mobile

                for (let i = 0; i < this.particles.length; i++) {
                    for (let j = i + 1; j < this.particles.length; j++) {
                        const p1 = this.particles[i];
                        const p2 = this.particles[j];
                        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                        if (dist < connectionDist) {
                            const alpha = (1 - dist / connectionDist) * 0.5;
                            this.ctx.strokeStyle = `rgba(180, 220, 255, ${alpha})`;
                            this.ctx.moveTo(p1.x, p1.y);
                            this.ctx.lineTo(p2.x, p2.y);
                        }
                    }
                }
                this.ctx.stroke();
            }

            drawLine(progress: number) {
                const centerX = this.canvas.width / 2;
                const centerY = this.canvas.height / 2;
                const maxWidth = this.canvas.width + 60;

                const widthProgress = Math.min(progress * 5, 1);
                const easedWidth = Easing.easeOutExpo(widthProgress);
                const currentHalfWidth = (maxWidth / 2) * easedWidth;

                let opacity = 0;
                let glowSize = 10;

                if (progress < 0.1) {
                    opacity = progress * 10;
                } else if (progress < 0.9) {
                    const pulse = Math.sin(Date.now() * 0.003);
                    opacity = 0.5 + (pulse + 1) * 0.25;
                    glowSize = 15 + pulse * 5;
                } else {
                    opacity = (1 - progress) * 10;
                }

                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.moveTo(centerX - currentHalfWidth, centerY);
                this.ctx.lineTo(centerX + currentHalfWidth, centerY);

                this.ctx.strokeStyle = `rgba(220, 240, 255, ${opacity})`;
                this.ctx.lineWidth = 1.0 + (opacity * 0.5);

                this.ctx.shadowColor = 'rgba(200, 230, 255, 0.9)';
                this.ctx.shadowBlur = glowSize;

                this.ctx.stroke();
                this.ctx.restore();
            }

            drawWhiteOverlay(progress: number) {
                let opacity = this.animationPhase === 'wait' ? 1 : Easing.easeInQuart(progress);
                if (opacity > 0) {
                    this.ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                }
            }

            destroy() {
                cancelAnimationFrame(this.animationFrameId);
            }
        }

        const system = new AnimationSystem(canvas);

        const handleResize = () => {
            system.resizeCanvas();
            system.initParticles();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            system.destroy();
        }
    }, [onComplete])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] bg-black"
        >
            <canvas ref={canvasRef} className="block w-full h-full" />
        </motion.div>
    )
}
