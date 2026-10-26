"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MunchiesIcon from "@/components/MunchiesIcon";
import StoreBadges from "@/components/StoreBadges";

const slides = [
  {
    eyebrow: "LOCAL SNACK MARKETPLACE",
    title: "Your next snack attack may be nearby.",
    body:
      "Discover independent snack sellers nearby, find what you are craving and keep your order journey in one place.",
    primary: { label: "See how Munchies works", href: "/how-it-works" },
    secondary: { label: "Sell on Munchies", href: "/sell" },
  },
  {
    eyebrow: "FOR SELLERS",
    title: "Turn your snack hustle into a real storefront.",
    body:
      "Set up your store, list products, receive orders and manage fulfilment through one marketplace built for local sellers.",
    primary: { label: "Sell on Munchies", href: "/sell" },
    secondary: { label: "How seller review works", href: "/trust-safety" },
  },
  {
    eyebrow: "TRUST & SAFETY",
    title: "A marketplace should know who is selling.",
    body:
      "Seller review, identity verification, order records and dispute support help make bad behaviour harder to hide.",
    primary: { label: "Trust & safety", href: "/trust-safety" },
    secondary: { label: "Contact Munchies", href: "/contact" },
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="hero-slider">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/munchies-ninja-icon.png"
      >
        <source
          src="https://videos.pexels.com/video-files/3752544/3752544-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-video-overlay" />

      <div className="shell hero-slider-inner">
        <div className="hero-slide-copy" key={active}>
          <div className="hero-eyebrow-row">
            <span className="hero-eyebrow-icon">
              <MunchiesIcon name="snack" size={16} />
            </span>
            <div className="eyebrow hero-eyebrow">{slide.eyebrow}</div>
          </div>

          <h1>{slide.title}</h1>
          <p>{slide.body}</p>

          <div className="hero-actions">
            <Link className="button primary" href={slide.primary.href}>
              {slide.primary.label}
            </Link>
            <Link className="button hero-secondary" href={slide.secondary.href}>
              {slide.secondary.label}
            </Link>
          </div>

          <div className="hero-download">
            <div className="hero-download-copy">
              <strong>Download the app soon.</strong>
              <span>Coming soon to the App Store and Google Play.</span>
            </div>
            <StoreBadges compact />
          </div>
        </div>

        <div className="hero-brand-mark" aria-hidden="true">
          <img
            src="/munchies-logo-animated.webp"
            alt=""
            aria-hidden="true"
            className="hero-animated-ninja"
          />
        </div>

        <div className="hero-slider-controls" aria-label="Hero slides">
          <button
            type="button"
            className="slider-arrow"
            aria-label="Previous slide"
            onClick={() =>
              setActive((current) =>
                current === 0 ? slides.length - 1 : current - 1,
              )
            }
          >
            ←
          </button>

          <div className="slider-dots">
            {slides.map((item, index) => (
              <button
                type="button"
                key={item.eyebrow}
                className={`slider-dot ${index === active ? "active" : ""}`}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => setActive(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="slider-arrow"
            aria-label="Next slide"
            onClick={() => setActive((current) => (current + 1) % slides.length)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
