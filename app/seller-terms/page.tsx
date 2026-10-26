import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Seller terms" };

export default function SellerTermsPage() {
  return (
    <LegalPage
      eyebrow="SELLERS"
      title="Seller terms"
      background="navy"
      intro="These seller terms apply to people and businesses using Munchies to operate a seller store."
      sections={[
        {
          title: "Accurate seller information",
          body: <p>Sellers must provide accurate seller, store, identity and fulfilment information and keep that information up to date.</p>,
        },
        {
          title: "Product listings",
          body: <p>Products must be described accurately. Sellers are responsible for pricing, stock availability, lawful sale, product condition and any information buyers reasonably need before ordering.</p>,
        },
        {
          title: "Seller review and verification",
          body: <p>Munchies may require identity verification, request additional information, reject an application, approve subject to outstanding requirements, reopen a review or suspend selling access where necessary.</p>,
        },
        {
          title: "Orders and fulfilment",
          body: <p>Sellers should only accept orders they can reasonably fulfil and must update order progress honestly. Repeated non-fulfilment, misleading status updates or abusive conduct may result in marketplace action.</p>,
        },
        {
          title: "Disputes and cooperation",
          body: <p>Sellers must cooperate with reasonable dispute and support requests, provide relevant information when asked and comply with final marketplace decisions where applicable.</p>,
        },
        {
          title: "Safety and fraud",
          body: <p>Munchies may take a store offline or restrict seller access where fraud, identity concerns, unsafe conduct, policy breaches or other significant marketplace risks are suspected.</p>,
        },
      ]}
    />
  );
}
