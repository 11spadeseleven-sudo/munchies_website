"use client";

import { useEffect, useState } from "react";
import styles from "./MunchiesMascot.module.css";

type MascotAction = { label: string; href: string };
type Props = {
  actions?: MascotAction[];
  greeting?: string;
  position?: "right" | "left";
};

/** Place images in public/mascot/idle.webp and public/mascot/wave.webp */
export default function MunchiesMascot({
  actions = [],
  greeting = "Hungry? I got you!",
  position = "right",
}: Props) {
  const [open, setOpen] = useState(false);
  const [waving, setWaving] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function toggle() {
    setOpen((value) => !value);
    setWaving((value) => !open ? true : false);
    setShowGreeting(false);
  }

  return (
    <aside className={`${styles.root} ${position === "left" ? styles.left : ""}`} aria-label="Munchies assistant">
      {open ? (
        <div className={styles.panel} id="munchies-mascot-menu">
          <div className={styles.panelTop}>
            <strong>Snack attack?</strong>
            <button className={styles.close} type="button" onClick={() => { setOpen(false); setWaving(false); }} aria-label="Close menu">×</button>
          </div>
          <p>What can I help you with?</p>
          {actions.length ? (
            <nav className={styles.links} aria-label="Munchies shortcuts">
              {actions.map((action) => <a key={`${action.href}-${action.label}`} href={action.href}>{action.label} <span aria-hidden>→</span></a>)}
            </nav>
          ) : (
            <p className={styles.configure}>Add your website links to the <code>actions</code> prop.</p>
          )}
        </div>
      ) : showGreeting ? <div className={styles.bubble}>{greeting}</div> : null}
      <button
        type="button"
        className={styles.mascotButton}
        aria-expanded={open}
        aria-controls="munchies-mascot-menu"
        aria-label={open ? "Close Munchies helper" : "Open Munchies helper"}
        onClick={toggle}
        onMouseEnter={() => setWaving(true)}
        onMouseLeave={() => { if (!open) setWaving(false); }}
      >
        <img src={waving ? "/mascot/wave.webp" : "/mascot/idle.webp"} alt="" width={180} height={180} decoding="async" />
      </button>
    </aside>
  );
}
