import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MunchiesMascot from "@/components/MunchiesMascot";

export const metadata: Metadata = {
  metadataBase: new URL("https://munchies.dreamincolor.co.za"),
  title: {
    default: "Munchies | snack attack like a ninja.",
    template: "%s | Munchies",
  },
  description:
    "Munchies is a local snack marketplace connecting buyers with independent sellers for easy discovery, ordering, delivery and collection.",
  openGraph: {
    title: "Munchies | snack attack like a ninja.",
    description:
      "Discover local snack sellers, order your favourites and support independent sellers.",
    url: "https://munchies.dreamincolor.co.za",
    siteName: "Munchies",
    images: [{ url: "/munchies-logo.png" }],
    type: "website",
  },
  icons: {
    icon: "/munchies-ninja-avatar.png",
    shortcut: "/munchies-ninja-avatar.png",
    apple: "/munchies-ninja-avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MunchiesMascot actions={[
          { label: "How it works", href: "/how-it-works" },
          { label: "Become a seller", href: "/sell" },
          { label: "Contact us", href: "/contact" },
        ]} />
      </body>
    </html>
  );
}
