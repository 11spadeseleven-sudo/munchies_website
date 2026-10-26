import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Image src="/munchies-logo.png" alt="Munchies" width={280} height={100} />
          <p>
            A local marketplace for discovering independent snack sellers nearby.
          </p>
          <a href="mailto:munchies@dreamincolor.co.za">
            munchies@dreamincolor.co.za
          </a>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/sell">Sell on Munchies</Link>
          <Link href="/trust-safety">Trust & safety</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h3>Policies</h3>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of use</Link>
          <Link href="/refunds">Refunds & disputes</Link>
          <Link href="/delivery">Delivery & collection</Link>
          <Link href="/seller-terms">Seller terms</Link>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© 2026 Dream in Color Studios. Munchies is a Dream in Color Studios product.</span>
        <span>snack attack like a ninja.</span>
      </div>
    </footer>
  );
}
