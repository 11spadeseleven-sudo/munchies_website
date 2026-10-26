import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "How it works" };

export default function HowItWorksPage() {
  return (
    <section className="page-hero themed-page navy-page how-page">
      <div className="shell themed-page-shell">
        <SectionTitle
          eyebrow="HOW IT WORKS"
          title="One marketplace. Two sides."
          body="Munchies brings buyers and independent snack sellers together while keeping the order journey clear for both."
        />

        <div className="journey-grid">
          <article className="journey-card">
            <div className="journey-label">BUYERS</div>
            <h2>Find, order and keep track.</h2>
            <ol>
              <li><strong>Discover sellers.</strong><span>Browse stores and products available around your selected area.</span></li>
              <li><strong>Build your cart.</strong><span>Choose products and review your order before checkout.</span></li>
              <li><strong>Choose fulfilment.</strong><span>Delivery or collection options depend on what the seller offers.</span></li>
              <li><strong>Track the order.</strong><span>Follow the order through its fulfilment stages.</span></li>
              <li><strong>Get support.</strong><span>Order records and dispute workflows help when something goes wrong.</span></li>
            </ol>
          </article>

          <article className="journey-card accent-card">
            <div className="journey-label">SELLERS</div>
            <h2>Set up, get reviewed and sell.</h2>
            <ol>
              <li><strong>Create your seller profile.</strong><span>Complete seller, store and fulfilment information.</span></li>
              <li><strong>Submit verification.</strong><span>Identity checks and marketplace requirements support a safer marketplace.</span></li>
              <li><strong>Get reviewed.</strong><span>Munchies can approve, request changes or reject an application.</span></li>
              <li><strong>List products.</strong><span>Approved sellers can manage products and receive orders.</span></li>
              <li><strong>Fulfil orders.</strong><span>Manage preparation, delivery or collection through the seller workflow.</span></li>
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
}
