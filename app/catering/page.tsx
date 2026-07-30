import {
  ArrowUpRight,
  Check,
  PartyPopper,
  Phone,
  Users,
  Utensils,
} from "lucide-react";
import type { Metadata } from "next";

import CateringInquiry from "@/app/components/CateringInquiry";
import { site } from "@/app/site";

export const metadata: Metadata = {
  title: "Catering & Events",
  description:
    "Plan Mexican catering, a buffet, group meal or celebration with La Esperanza in Lindenwold, New Jersey.",
  alternates: { canonical: "/catering" },
};

const eventTypes = [
  {
    icon: Users,
    title: "Family Celebrations",
    text: "Birthdays, graduations, anniversaries and the gatherings that deserve a full table.",
  },
  {
    icon: Utensils,
    title: "Office & Community",
    text: "Buffet-friendly favorites for workplace lunches, community events and group meals.",
  },
  {
    icon: PartyPopper,
    title: "Restaurant Events",
    text: "Ask about small or larger reservations with a set menu or buffet at La Esperanza.",
  },
];

export default function CateringPage() {
  return (
    <>
      <section className="page-hero catering-page-hero">
        <div className="site-shell page-hero-inner">
          <p className="eyebrow light">Let us cook for your crowd</p>
          <h1>Catering & Events</h1>
          <p>
            Bring the warmth of La Esperanza—and a table full of family
            favorites—to your next gathering.
          </p>
        </div>
      </section>

      <section className="section catering-intro">
        <div className="site-shell catering-intro-grid">
          <div className="catering-photo">
            <img
              src="/images/hero-feast.webp"
              alt="A festive family-style spread of mole poblano, guacamole and tortillas"
              width={1672}
              height={941}
            />
          </div>
          <div>
            <p className="eyebrow">Made for sharing</p>
            <h2>A fiesta without the kitchen stress.</h2>
            <p className="lead">
              Choose from proven buffet favorites or speak with Saul about a
              menu built around your group.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden="true" />
                Appetizers, entrées, sides and combinations
              </li>
              <li>
                <Check aria-hidden="true" />
                Flexible menus for different event sizes
              </li>
              <li>
                <Check aria-hidden="true" />
                Restaurant group meals or off-site catering
              </li>
            </ul>
            <div className="inline-actions">
              <a
                className="button button-primary"
                href={`tel:${site.phoneHref}`}
              >
                <Phone size={18} aria-hidden="true" />
                Call {site.phoneDisplay}
              </a>
              <a
                className="text-link"
                href={site.cateringPdf}
                target="_blank"
                rel="noreferrer"
              >
                Classic catering menu
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section event-types-section">
        <div className="site-shell">
          <div className="event-types-grid">
            {eventTypes.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section inquiry-section">
        <div className="site-shell inquiry-grid">
          <div className="inquiry-copy">
            <p className="eyebrow">Tell us what you’re planning</p>
            <h2>Start the conversation.</h2>
            <p>
              Share the date, estimated guest count and the kind of gathering
              you have in mind. Your email app will open with everything ready
              to send directly to the catering team.
            </p>
            <div className="contact-person">
              <span>Ask for</span>
              <strong>Saul Cordova</strong>
              <a href={`mailto:${site.cateringEmail}`}>
                {site.cateringEmail}
              </a>
            </div>
          </div>
          <CateringInquiry />
        </div>
      </section>
    </>
  );
}
