import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Refunds, cancellations & disputes" };

export default function RefundsPage() {
  return (
    <LegalPage
      eyebrow="ORDERS"
      title="Refunds, cancellations & disputes"
      background="navy"
      intro="This policy explains the general Munchies approach to cancellations, refund requests and disputes between buyers and sellers."
      sections={[
        {
          title: "Order cancellation",
          body: <p>Cancellation availability depends on the order stage. Once a seller has started preparing or fulfilling an order, cancellation may no longer be available through the normal buyer flow.</p>,
        },
        {
          title: "Refund requests",
          body: <p>A refund may be considered where an order was incorrectly charged, not fulfilled, materially different from what was ordered, or where another valid reason is established through the dispute process. The appropriate outcome depends on the facts of the order.</p>,
        },
        {
          title: "Disputes",
          body: <p>Buyers may raise eligible disputes and sellers may respond. Munchies may review order records, buyer claims, seller responses and other relevant information before recording an administrative decision.</p>,
        },
        {
          title: "Possible outcomes",
          body: <p>Depending on the circumstances, an outcome may include a refund recommendation or processing step, replacement or redelivery arrangement, no refund, closure of the dispute, or another reasonable resolution.</p>,
        },
        {
          title: "No automatic outcome",
          body: <p>Opening a dispute does not automatically guarantee a refund or determine fault. Munchies may request additional information from either party.</p>,
        },
      ]}
    />
  );
}
