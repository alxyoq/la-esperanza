import {
  ArrowUpRight,
  CalendarCheck,
  Car,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

import { directionsUrl, mapEmbedUrl, site } from "@/app/site";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Find La Esperanza at 40 East Gibbsboro Road in Lindenwold, NJ. See current hours, directions, phone number and reservation details.",
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  return (
    <>
      <section className="page-hero visit-page-hero">
        <div className="site-shell page-hero-inner">
          <p className="eyebrow light">The pink house with blue trim</p>
          <h1>Come on over.</h1>
          <p>
            Lunch, dinner, takeout and a place at the family table in
            Lindenwold.
          </p>
        </div>
      </section>

      <section className="section visit-section">
        <div className="site-shell visit-grid">
          <div className="visit-card">
            <p className="eyebrow">Location</p>
            <h2>Find the house you can’t miss.</h2>
            <address>
              <MapPin aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state}{" "}
                {site.address.postalCode}
              </span>
            </address>
            <div className="visit-contact-links">
              <a href={`tel:${site.phoneHref}`}>
                <Phone aria-hidden="true" />
                <span>
                  <small>Call us</small>
                  {site.phoneDisplay}
                </span>
              </a>
              <a href={`mailto:${site.email}`}>
                <Mail aria-hidden="true" />
                <span>
                  <small>Email us</small>
                  {site.email}
                </span>
              </a>
            </div>
            <a
              className="button button-primary"
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="hours-card">
            <div className="hours-card-heading">
              <Clock3 aria-hidden="true" />
              <div>
                <p className="eyebrow">Hours</p>
                <h2>Open for lunch & dinner</h2>
              </div>
            </div>
            <dl>
              {site.hours.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd className={item.value === "Closed" ? "closed" : ""}>
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="hours-note">
              Holiday and event hours may vary. Call before making a special
              trip.
            </p>
          </div>
        </div>

        <div className="site-shell reservation-strip">
          <div>
            <CalendarCheck aria-hidden="true" />
            <span>
              <strong>Reservations by phone</strong>
              <small>
                Online reservations are not currently available.
              </small>
            </span>
          </div>
          <div>
            <Users aria-hidden="true" />
            <span>
              <strong>Walk-ins welcome</strong>
              <small>
                Half the tables are held for spontaneous visits.
              </small>
            </span>
          </div>
          <div>
            <Car aria-hidden="true" />
            <span>
              <strong>Free parking</strong>
              <small>Parking lot and nearby street parking.</small>
            </span>
          </div>
          <a className="button button-outline" href={`tel:${site.phoneHref}`}>
            <Phone size={17} aria-hidden="true" />
            Call for a Table
          </a>
        </div>

        <div className="site-shell map-wrap">
          <iframe
            title="Map to La Esperanza Mexican Restaurant & Bar"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-card">
            <ShoppingBag aria-hidden="true" />
            <div>
              <strong>Taking dinner home?</strong>
              <p>Call for pickup or view the delivery menu online.</p>
            </div>
            <a href={site.orderUrl} target="_blank" rel="noreferrer">
              Order delivery
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
