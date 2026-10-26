import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "Trust & safety" };

export default function TrustSafetyPage() {
  return (
    <section className="page-hero themed-page navy-page trust-page">
      <div className="shell themed-page-shell">
        <SectionTitle
          eyebrow="TRUST & SAFETY"
          title="Designed to make bad behaviour harder."
          body="No marketplace can eliminate risk completely. Munchies combines identity, account, order and administrative controls to make misuse harder to hide and easier to investigate."
        />

        <div className="feature-grid two">
          <article className="feature-card"><h3>Seller verification</h3><p>Seller approval includes identity verification and administrative review of marketplace setup requirements.</p></article>
          <article className="feature-card"><h3>Store controls</h3><p>Munchies can place stores offline, request changes, reopen a review or restrict seller access when needed.</p></article>
          <article className="feature-card"><h3>Order records</h3><p>Buyer and seller order information creates a record that can support customer service and dispute review.</p></article>
          <article className="feature-card"><h3>Dispute handling</h3><p>Buyer claims and seller responses can be reviewed by Munchies with a recorded administrative decision.</p></article>
          <article className="feature-card"><h3>Communication history</h3><p>Administrative reminders and account decisions can be retained so important marketplace actions are traceable.</p></article>
          <article className="feature-card"><h3>Account controls</h3><p>Accounts may be disabled or deleted while legally or operationally necessary transaction and audit records are retained.</p></article>
        </div>

        <div className="notice-card">
          <strong>Report a concern</strong>
          <p>
            If you believe a seller, buyer or order may involve fraud, abuse or unsafe conduct, contact{" "}
            <a href="mailto:munchies@dreamincolor.co.za">munchies@dreamincolor.co.za</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
