import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Delivery & collection" };

export default function DeliveryPage() {
  return (
    <LegalPage
      eyebrow="FULFILMENT"
      title="Delivery & collection"
      background="video"
      videoSrc="https://www.pexels.com/download/video/6994245/"
      intro="Munchies sellers may offer delivery, collection or both. Available fulfilment options are determined by the seller and shown within the marketplace."
      sections={[
        {
          title: "Seller responsibility",
          body: <p>Sellers are responsible for accurately stating the fulfilment methods, operating hours, preparation expectations and delivery or collection information associated with their store and orders.</p>,
        },
        {
          title: "Buyer responsibility",
          body: <p>Buyers should provide accurate delivery information, remain reachable where necessary and collect orders within a reasonable period where collection has been selected.</p>,
        },
        {
          title: "Estimated times",
          body: <p>Preparation and arrival estimates are estimates, not guaranteed delivery times. Traffic, stock, seller workload, location and other circumstances can affect timing.</p>,
        },
        {
          title: "Problems with fulfilment",
          body: <p>If an order is not delivered, cannot be collected, or otherwise goes wrong, users should use the available order support or dispute process and provide accurate information about what happened.</p>,
        },
      ]}
    />
  );
}
