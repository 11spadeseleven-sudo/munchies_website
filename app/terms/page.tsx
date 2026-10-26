import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Terms of use" };

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Terms of use"
      background="video"
      videoSrc="https://www.pexels.com/download/video/3752544/"
      intro="These terms govern access to and use of Munchies, a marketplace product operated by Dream in Color Studios."
      sections={[
        {
          title: "Marketplace role",
          body: <p>Munchies provides technology that helps buyers discover and transact with independent sellers. Unless clearly stated otherwise, sellers are responsible for the products they list and for fulfilling accepted orders.</p>,
        },
        {
          title: "Accounts",
          body: <p>Users must provide accurate information, keep account credentials secure and avoid impersonation, fraud, misuse or attempts to interfere with the platform. Munchies may restrict or disable accounts where necessary for security, policy enforcement or legal compliance.</p>,
        },
        {
          title: "Seller approval",
          body: <p>Seller access may depend on marketplace setup requirements, identity verification and administrative review. Approval may be delayed, rejected, reopened or made subject to further requirements.</p>,
        },
        {
          title: "Orders",
          body: <p>Orders placed through Munchies create a transaction between the buyer and the relevant seller, subject to the seller's availability and the fulfilment options offered for that order.</p>,
        },
        {
          title: "Payments",
          body: <p>Where electronic payments are available, payment processing may be provided by third-party payment infrastructure. Additional provider terms may apply. Payment features may change as Munchies develops.</p>,
        },
        {
          title: "Prohibited conduct",
          body: <p>Users may not use Munchies for fraud, unlawful sales, misleading listings, harassment, account abuse, payment abuse, attempts to evade marketplace controls, or other conduct that creates unreasonable risk to users or the platform.</p>,
        },
        {
          title: "Enforcement",
          body: <p>Munchies may remove listings, take stores offline, request additional verification, limit features, suspend accounts or take other reasonable action when needed to protect users, investigate concerns or enforce these terms.</p>,
        },
      ]}
    />
  );
}
