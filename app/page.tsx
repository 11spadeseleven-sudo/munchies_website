import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import MunchiesIcon from "@/components/MunchiesIcon";
import SellerStepsCarousel from "@/components/SellerStepsCarousel";
import SectionTitle from "@/components/SectionTitle";
import StoreBadges from "@/components/StoreBadges";

const buyerSteps = [
  ["Discover", "Browse nearby snack sellers, stores and products."],
  ["Choose", "Add your favourites to cart and choose delivery or collection where offered."],
  ["Track", "Follow your order from placement through fulfilment."],
];


export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="trust-strip">
        <div className="shell trust-items">
          <span>Seller review</span>
          <span>Identity verification</span>
          <span>Order tracking</span>
          <span>Dispute support</span>
          <span>Account controls</span>
        </div>
      </section>

      <section className="content-section">
        <div className="shell">
          <SectionTitle
            eyebrow="FOR BUYERS"
            title="Find what you are craving."
            body="Browse local sellers, discover products and keep your order journey in one place."
          />

          <div className="feature-grid three">
            {buyerSteps.map(([title, body], index) => (
              <article className="feature-card" key={title}>
                <div className="feature-card-topline">
                  <span className="feature-card-icon">
                    <MunchiesIcon name="buyer" size={18} />
                  </span>
                  <span className="step-number">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section seller-video-section">
        <video
          className="seller-section-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://videos.pexels.com/video-files/3752544/3752544-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="seller-section-overlay" />

        <div className="shell split-section seller-video-content">
          <div>
            <SectionTitle
              eyebrow="FOR SELLERS"
              title="Turn your snack hustle into a real storefront."
              body="Munchies gives independent sellers a structured place to set up a store, manage products, receive orders and build trust."
            />
            <Link className="text-link seller-video-link" href="/sell">
              Learn about selling on Munchies →
            </Link>
          </div>

          <SellerStepsCarousel />
        </div>
      </section>

      <section className="content-section">
        <div className="shell">
          <SectionTitle
            eyebrow="TRUST & SAFETY"
            title="A marketplace should know who is selling."
            body="Munchies includes seller application reviews, identity verification, store controls, order records and dispute handling as part of the platform workflow."
          />

          <div className="feature-grid four">
            <article className="feature-card">
              <span className="feature-card-icon"><MunchiesIcon name="shield" size={18} /></span>
              <h3>Seller applications</h3>
              <p>Seller accounts go through a review workflow before full selling access is granted.</p>
            </article>
            <article className="feature-card">
              <span className="feature-card-icon"><MunchiesIcon name="shield" size={18} /></span>
              <h3>Identity checks</h3>
              <p>Seller identity documentation and selfie verification form part of the approval process.</p>
            </article>
            <article className="feature-card">
              <span className="feature-card-icon"><MunchiesIcon name="store" size={18} /></span>
              <h3>Marketplace controls</h3>
              <p>Stores can be taken offline and seller access can be restricted when review or safety issues arise.</p>
            </article>
            <article className="feature-card">
              <span className="feature-card-icon"><MunchiesIcon name="support" size={18} /></span>
              <h3>Dispute support</h3>
              <p>Buyer and seller disputes can be reviewed and resolved through the platform.</p>
            </article>
          </div>

          <div className="center-link">
            <Link className="button secondary" href="/trust-safety">
              Read about trust & safety
            </Link>
          </div>
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="shell download-card">
          <div>
            <div className="download-eyebrow-row">
              <span className="download-eyebrow-icon">
                <MunchiesIcon name="download" size={16} />
              </span>
              <div className="eyebrow light">MUNCHIES APP</div>
            </div>
            <h2>Download the app soon.</h2>
            <p>
              Munchies is getting ready for launch. The mobile app will bring
              local snack discovery, ordering and selling together in one place.
            </p>
            <StoreBadges />
          </div>

          <div className="download-ninja">
            <img
              src="/munchies-logo-animated.webp"
              alt="Munchies ninja"
              className="download-animated-ninja"
            />
          </div>
        </div>
      </section>

      <section className="content-section compact">
        <div className="shell final-cta">
          <div>
            <div className="final-cta-eyebrow">
              <span className="section-title-icon">
                <MunchiesIcon name="support" size={16} />
              </span>
              <div className="eyebrow">QUESTIONS?</div>
            </div>
            <h2>Talk to Munchies.</h2>
            <p>For support, marketplace questions or business enquiries, get in touch.</p>
          </div>

          <a className="button primary" href="mailto:munchies@dreamincolor.co.za">
            munchies@dreamincolor.co.za
          </a>
        </div>
      </section>
    </>
  );
}
