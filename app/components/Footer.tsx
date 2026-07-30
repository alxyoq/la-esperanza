import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

import { directionsUrl, site } from "@/app/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand-lockup footer-lockup">
            <img
              src="/images/la-esperanza-mark.png"
              width={72}
              height={72}
              alt=""
            />
            <span className="brand-type">
              <strong>La Esperanza</strong>
              <span>Mexican Restaurant & Bar</span>
            </span>
          </Link>
          <p>
            Home-cooked Mexican and Latin American specialties, shared with
            South Jersey since {site.established}.
          </p>
          <div className="footer-social">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
          </div>
        </div>

        <div>
          <h2>Explore</h2>
          <ul className="footer-links">
            <li>
              <Link href="/menu">Our Menu</Link>
            </li>
            <li>
              <Link href="/story">The Cordova Story</Link>
            </li>
            <li>
              <Link href="/catering">Catering & Events</Link>
            </li>
            <li>
              <Link href="/visit">Hours & Reservations</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Visit Us</h2>
          <ul className="footer-contact">
            <li>
              <MapPin aria-hidden="true" />
              <a href={directionsUrl} target="_blank" rel="noreferrer">
                40 East Gibbsboro Road
                <br />
                Lindenwold, NJ 08021
              </a>
            </li>
            <li>
              <Phone aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <Mail aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Hours</h2>
          <dl className="footer-hours">
            {site.hours.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <a
            className="footer-order-link"
            href={site.orderUrl}
            target="_blank"
            rel="noreferrer"
          >
            Order delivery
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="site-shell footer-bottom">
        <p>
          © {new Date().getFullYear()} La Esperanza Mexican Restaurant & Bar
        </p>
        <p>Family owned · Lindenwold, New Jersey</p>
      </div>
    </footer>
  );
}
