"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MunchiesIcon from "@/components/MunchiesIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 8);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return (
    <>
      <header
        className={`site-header site-header-dynamic ${
          isScrolled ? "is-scrolled" : "is-at-top"
        }`}
      >
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="Munchies home">
            <Image
              src={
                isScrolled
                  ? "/munchies-logo.png"
                  : "/munchies-logo-white.png"
              }
              alt="Munchies — snack attack like a ninja."
              width={340}
              height={120}
              priority
            />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/how-it-works">
              <MunchiesIcon name="how" size={16} />
              <span>How it works</span>
            </Link>

            <Link href="/sell">
              <MunchiesIcon name="sell" size={16} />
              <span>Sell</span>
            </Link>

            <Link href="/trust-safety">
              <MunchiesIcon name="shield" size={16} />
              <span>Trust & safety</span>
            </Link>

            <Link href="/contact">
              <MunchiesIcon name="contact" size={16} />
              <span>Contact</span>
            </Link>
          </nav>

          <Link className="header-cta" href="/#download">
            <MunchiesIcon name="download" size={16} />
            <span>Download soon</span>
          </Link>
        </div>
      </header>

      <style jsx global>{`
        :root {
          --munchies-site-header-height: 84px;
        }

        .site-header.site-header-dynamic {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 100;
          transition:
            background-color 220ms ease,
            border-color 220ms ease,
            box-shadow 220ms ease,
            backdrop-filter 220ms ease;
        }

        .site-header.site-header-dynamic.is-at-top {
          background: transparent;
          border-bottom-color: transparent;
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .site-header.site-header-dynamic.is-scrolled {
          background: rgba(255, 255, 255, 0.96);
          border-bottom: 1px solid rgba(232, 237, 245, 0.92);
          box-shadow: 0 8px 28px rgba(7, 24, 68, 0.08);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .site-header.site-header-dynamic.is-at-top .desktop-nav a {
          color: #ffffff;
        }

        .site-header.site-header-dynamic.is-at-top .desktop-nav a:hover {
          color: #ff3824;
        }

        .site-header.site-header-dynamic.is-scrolled .desktop-nav a {
          color: #53617f;
        }

        .site-header.site-header-dynamic.is-scrolled .desktop-nav a:hover {
          color: #ff3824;
        }

        .site-header-dynamic + main > .page-hero:first-child > .shell:first-child {
          padding-top: var(--munchies-site-header-height);
        }

        .site-header-dynamic + main > .hero-slider:first-child .hero-slider-inner {
          padding-top: calc(54px + var(--munchies-site-header-height));
        }

        @media (max-width: 700px) {
          .site-header-dynamic + main > .hero-slider:first-child .hero-slider-inner {
            padding-top: calc(72px + var(--munchies-site-header-height));
          }
        }

        @media (max-width: 620px) {
          :root {
            --munchies-site-header-height: 74px;
          }
        }
      `}</style>
    </>
  );
}
