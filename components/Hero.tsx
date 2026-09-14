"use client";

import { useEffect, useRef, useState } from "react";

// Drop your photo at public/images/profile.jpg — until then the gradient placeholder shows.
const PHOTO_SRC = "/images/profile.jpg";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The image may fail before hydration (so onError never fires) — check once on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setPhotoFailed(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bar">
        <span>Preeti Karmarkar</span>
        <span>Go-to-Market</span>
        <span>NYU · New York</span>
        <span>2026</span>
      </div>

      <div className="hero-body">
        <div className="hero-left">
          <p className="hero-label">Portfolio · 2026</p>
          <h1 className="hero-title">
            Where creation
            <br />
            meets
            <br />
            discovery
          </h1>
          <p className="hero-intro">
            I build at the intersection of engineering, automation, and distribution. From
            architecting automated growth loops to building targeted pipelines, I focus on
            systematically putting great products in front of the exact right people.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-hero-primary">
              View My Work →
            </a>
            <a href="#contact" className="btn btn-hero-secondary">
              Say Hello
            </a>
          </div>
        </div>

        <div className="hero-divider" aria-hidden="true" />

        <div className="hero-right">
          {!photoFailed && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={imgRef}
              src={PHOTO_SRC}
              alt="Preeti Karmarkar"
              className="hero-photo"
              onError={() => setPhotoFailed(true)}
            />
          )}
          {photoFailed && <div className="hero-photo-fallback">Add your photo here</div>}
        </div>
      </div>
    </section>
  );
}
