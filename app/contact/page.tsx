import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="page-hero themed-page video-page contact-page">
      <video className="page-theme-video" autoPlay muted loop playsInline preload="metadata">
        <source src="https://www.pexels.com/download/video/6994245/" type="video/mp4" />
      </video>
      <div className="page-theme-overlay" />

      <div className="shell narrow themed-page-shell">
        <SectionTitle
          eyebrow="CONTACT"
          title="Talk to Munchies."
          body="For buyer support, seller questions, marketplace concerns or business enquiries, contact us by email."
        />

        <div className="contact-card">
          <div>
            <span className="contact-label">PUBLIC SUPPORT</span>
            <a href="mailto:munchies@dreamincolor.co.za">munchies@dreamincolor.co.za</a>
          </div>
          <p>Munchies is a product of <strong>Dream in Color Studios</strong>.</p>
        </div>
      </div>
    </section>
  );
}
