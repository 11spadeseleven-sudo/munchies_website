import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "Sell on Munchies" };

const requirements = [
  "Seller profile details",
  "Store information",
  "Store location",
  "Delivery and/or collection setup",
  "Operating hours",
  "At least one product",
  "Seller terms acceptance",
  "Identity verification",
];

export default function SellPage() {
  return (
    <section className="page-hero sell-page sell-page-video themed-page video-page">
      <video
        className="sell-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="https://www.pexels.com/download/video/3783548/"
          type="video/mp4"
        />
      </video>

      <div className="sell-background-overlay" />

      <div className="shell sell-layout sell-layout-video">
        <div className="sell-copy">
          <SectionTitle
            eyebrow="SELL ON MUNCHIES"
            title="Give your snack business a storefront."
            body="Munchies is designed for independent sellers who want a clearer way to list products, receive orders and serve buyers nearby."
          />

          <a
            className="button primary sell-cta"
            href="mailto:munchies@dreamincolor.co.za?subject=Selling%20on%20Munchies"
          >
            Ask about selling
          </a>
        </div>

        <div className="requirements-card sell-requirements-card">
          <div className="eyebrow">SELLER REVIEW</div>
          <h2>What we review</h2>

          <div className="check-list sell-check-list">
            {requirements.map((item) => (
              <div key={item}>
                <span>✓</span>
                {item}
              </div>
            ))}
          </div>

          <p className="small-note">
            Approval is not automatic. Munchies may ask for more information,
            require resubmission or restrict a store where safety or verification
            issues arise.
          </p>
        </div>
      </div>
    </section>
  );
}
