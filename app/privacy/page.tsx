import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="PRIVACY"
      title="Privacy policy"
      background="navy"
      intro="This policy explains how Munchies, a product of Dream in Color Studios, handles personal information when people use the Munchies marketplace, website and mobile app."
      sections={[
        {
          title: "Information we may collect",
          body: <p>Depending on how you use Munchies, we may process account details, contact information, profile information, saved addresses, store information, seller verification information, order and payment-related records, messages, support requests, device or technical information, and information required to operate or secure the marketplace.</p>,
        },
        {
          title: "Seller identity information",
          body: <p>Seller verification may involve identity details, an identity document and a selfie. This information is used for seller verification, marketplace safety, fraud prevention and related administrative review.</p>,
        },
        {
          title: "How information is used",
          body: <p>We use information to provide accounts and marketplace functionality, process and support orders, review sellers, communicate administrative decisions, prevent abuse and fraud, resolve disputes, provide support, comply with legal obligations and improve Munchies.</p>,
        },
        {
          title: "Retention and deletion",
          body: <p>You may request account deletion. Personal information that is not required to be retained may be deleted or anonymised. Certain transaction, accounting, security, fraud-prevention, dispute or legal records may need to be retained where reasonably necessary or required by law.</p>,
        },
        {
          title: "Sharing",
          body: <p>Information may be shared with service providers used to operate Munchies, with buyers or sellers where required to fulfil an order, with payment or infrastructure providers where applicable, and with authorities where legally required. Munchies does not sell personal information as a standalone product.</p>,
        },
        {
          title: "Security",
          body: <p>We use technical and administrative controls intended to protect marketplace information. No online system can guarantee absolute security, and users should protect their account credentials.</p>,
        },
        {
          title: "Contact",
          body: <p>Privacy questions can be sent to <a href="mailto:munchies@dreamincolor.co.za">munchies@dreamincolor.co.za</a>.</p>,
        },
      ]}
    />
  );
}
