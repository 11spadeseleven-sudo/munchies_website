import Link from "next/link";

type Section = {
  title: string;
  body: React.ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
};

export default function LegalPage({ eyebrow, title, intro, sections }: Props) {
  return (
    <section className="legal-hero">
      <div className="shell legal-shell">
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
          <a href="mailto:munchies@dreamincolor.co.za">
            munchies@dreamincolor.co.za
          </a>
          {" "}or return to the <Link href="/">Munchies home page</Link>.
        </div>
      </div>
    </section>
  );
}
