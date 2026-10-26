import Link from "next/link";

export type LegalBackground = "navy" | "video";

type Section = {
  title: string;
  body: React.ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  background?: LegalBackground;
  videoSrc?: string;
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  background = "navy",
  videoSrc = "https://www.pexels.com/download/video/3752544/",
}: Props) {
  const isVideo = background === "video";

  return (
    <section className={`legal-hero themed-page ${isVideo ? "video-page" : "navy-page"}`}>
      {isVideo ? (
        <>
          <video className="page-theme-video" autoPlay muted loop playsInline preload="metadata">
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="page-theme-overlay" />
        </>
      ) : null}

      <div className="shell legal-shell themed-page-shell">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>

        <div className="legal-card">
          {sections.map((section) => (
            <section key={section.title} className="legal-section">
              <h2>{section.title}</h2>
              <div>{section.body}</div>
            </section>
          ))}
        </div>

        <div className="legal-contact">
          Questions? Email{" "}
          <a href="mailto:munchies@dreamincolor.co.za">munchies@dreamincolor.co.za</a>
          {" "}or return to the <Link href="/">Munchies home page</Link>.
        </div>
      </div>
    </section>
  );
}
