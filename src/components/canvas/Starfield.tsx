'use client';

import React, { useEffect, useRef } from 'react';
import styles from './starfield.module.css';
import particle from './particles';

function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;

    const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
    // eslint-disable-next-line no-multi-assign
    const width = canvas.width = window.innerWidth;
    // eslint-disable-next-line no-multi-assign
    const height = canvas.height = window.innerHeight;
    const stars: any[] = [];
    const shootingStars: any[] = [];
    let paused = false;

    // Helpers
    const lineToAngle = (x1: number, y1: number, length: number, radians: number) => {
      const x2 = x1 + length * Math.cos(radians);
      const y2 = y1 + length * Math.sin(radians);
      return { x: x2, y: y2 };
    };

    const randomRange = (min: number, max: number) => min + Math.random() * (max - min);

    const degreesToRads = (degrees: number) => (degrees / 180) * Math.PI;

    // Canvas and settings
    const layers = [
      { speed: 0.015, scale: 0.2, count: 320 },
      { speed: 0.03, scale: 0.5, count: 50 },
      { speed: 0.05, scale: 0.75, count: 30 },
    ];

    const starsAngle = 145;
    const shootingStarSpeed = { min: 15, max: 20 };
    const shootingStarOpacityDelta = 0.01;
    const trailLengthDelta = 0.01;
    const shootingStarEmittingInterval = 2000;
    const shootingStarLifeTime = 500;
    const maxTrailLength = 300;
    const starBaseRadius = 3;
    const shootingStarRadius = 3;

    // Create all stars
    for (let j = 0; j < layers.length; j += 1) {
      const layer = layers[j];
      for (let i = 0; i < layer.count; i += 1) {
        const star = particle.create(
          randomRange(0, width),
          randomRange(0, height),
          0,
          0,
        );
        star.radius = starBaseRadius * layer.scale;
        star.setSpeed(layer.speed);
        star.setHeading(degreesToRads(starsAngle));
        stars.push(star);
      }
    }

    const createShootingStar = () => {
      const shootingStar = particle.create(
        randomRange(width / 2, width),
        randomRange(0, height / 2),
        0,
        0,
      );
      shootingStar.setSpeed(randomRange(shootingStarSpeed.min, shootingStarSpeed.max));
      shootingStar.setHeading(degreesToRads(starsAngle));
      shootingStar.radius = shootingStarRadius;
      shootingStar.opacity = 0;
      shootingStar.trailLengthDelta = 0;
      shootingStar.isSpawning = true;
      shootingStar.isDying = false;
      shootingStars.push(shootingStar);
    };

    const killShootingStar = (shootingStar: any) => {
      setTimeout(() => {
        // eslint-disable-next-line no-param-reassign
        shootingStar.isDying = true;
      }, shootingStarLifeTime);
    };

    const drawStar = (star: { x: number; y: number; radius: number; }) => {
      context.fillStyle = '#F3AE15';
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
      context.fill();
    };

    const drawShootingStar = (p: {
      trailLengthDelta?: any;
      getHeading?: any;
      x?: any;
      y?: any;
    }) => {
      const { x } = p;
      const { y } = p;
      const currentTrailLength = maxTrailLength * p.trailLengthDelta;
      const pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

      // stars moving
      context.fillStyle = '#F3AE15';
      const starLength = 5;
      context.beginPath();
      context.moveTo(x - 1, y + 1);
      context.lineTo(x, y + starLength);
      context.lineTo(x + 1, y + 1);
      context.lineTo(x + starLength, y);
      context.lineTo(x + 1, y - 1);
      context.lineTo(x, y + 1);
      context.lineTo(x, y - starLength);
      context.lineTo(x - 1, y - 1);
      context.lineTo(x - starLength, y);
      context.lineTo(x - 1, y + 1);
      context.lineTo(x - starLength, y);
      context.closePath();
      context.fill();

      // trail
      // stars moving
      context.fillStyle = '#F3AE15';
      context.beginPath();
      context.moveTo(x - 1, y - 1);
      context.lineTo(pos.x, pos.y);
      context.lineTo(x + 1, y + 1);
      context.closePath();
      context.fill();
    };

    const update = () => {
      if (!paused) {
        context.clearRect(0, 0, width, height);
        // context.fillStyle = '#282a3a';
        // context.fillRect(0, 0, width, height);
        // context.fill();

        for (let i = 0; i < stars.length; i += 1) {
          const star = stars[i];
          star.update();
          drawStar(star);
          if (star.x > width) {
            star.x = 0;
          }
          if (star.x < 0) {
            star.x = width;
          }
          if (star.y > height) {
            star.y = 0;
          }
          if (star.y < 0) {
            star.y = height;
          }
        }

        for (let i = 0; i < shootingStars.length; i += 1) {
          const shootingStar = shootingStars[i];
          if (shootingStar.isSpawning) {
            shootingStar.opacity += shootingStarOpacityDelta;
            if (shootingStar.opacity >= 1.0) {
              shootingStar.isSpawning = false;
              killShootingStar(shootingStar);
            }
          }
          if (shootingStar.isDying) {
            shootingStar.opacity -= shootingStarOpacityDelta;
            if (shootingStar.opacity <= 0.0) {
              shootingStar.isDying = false;
              shootingStar.isDead = true;
            }
          }
          shootingStar.trailLengthDelta += trailLengthDelta;

          shootingStar.update();
          if (shootingStar.opacity > 0.0) {
            drawShootingStar(shootingStar);
          }
        }

        // Delete dead shooting shootingStars
        // eslint-disable-next-line no-plusplus
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          if (shootingStars[i].isDead) {
            shootingStars.splice(i, 1);
          }
        }
      }
      requestAnimationFrame(update);
    };

    // Run
    update();

    // Shooting stars
    setInterval(() => {
      if (paused) return;
      createShootingStar();
    }, shootingStarEmittingInterval);

    window.onfocus = () => {
      paused = false;
    };

    window.onblur = () => {
      paused = true;
    };

    return () => {
      window.onfocus = null;
      window.onblur = null;
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}

export default Starfield;
