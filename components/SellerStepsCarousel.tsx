"use client";

import { useEffect, useRef, useState } from "react";
import MunchiesIcon from "@/components/MunchiesIcon";

const steps = [
  {
    title: "Set up",
    body: "Create your seller profile, store information and fulfilment details.",
  },
  {
    title: "Get reviewed",
    body: "Munchies reviews seller details and identity before approval.",
  },
  {
    title: "Start selling",
    body: "List products, receive orders and manage fulfilment from the app.",
  },
];

export default function SellerStepsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const safeIndex = (index + steps.length) % steps.length;
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.children[safeIndex] as HTMLElement | undefined;
    if (!card) return;

    const scrollerRect = scroller.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const targetLeft =
      scroller.scrollLeft + (cardRect.left - scrollerRect.left);

    scroller.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });

    setActive(safeIndex);
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const handleScroll = () => {
      const cards = Array.from(scroller.children) as HTMLElement[];
      if (!cards.length) return;

      const left = scroller.scrollLeft;
      let nearest = 0;
      let distance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const currentDistance = Math.abs(card.offsetLeft - left);
        if (currentDistance < distance) {
          distance = currentDistance;
          nearest = index;
        }
      });

      setActive(nearest);
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      goTo(active + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <div className="seller-carousel">
      <div
        className="seller-carousel-track"
        ref={scrollerRef}
        aria-label="Seller journey"
      >
        {steps.map((step, index) => (
          <article className="seller-carousel-card" key={step.title}>
            <div className="seller-carousel-card-top">
              <span className="feature-card-icon seller-icon">
                <MunchiesIcon name="sell" size={26} />
              </span>
              <span className="step-number">0{index + 1}</span>
            </div>

            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>

      <div className="seller-carousel-controls">
        <button
          type="button"
          className="seller-carousel-arrow"
          aria-label="Previous seller step"
          onClick={() => goTo(active - 1)}
        >
          ←
        </button>

        <div className="seller-carousel-dots" aria-label="Seller step pagination">
          {steps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              className={`seller-carousel-dot ${active === index ? "active" : ""}`}
              aria-label={`Show ${step.title}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="seller-carousel-arrow"
          aria-label="Next seller step"
          onClick={() => goTo(active + 1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
