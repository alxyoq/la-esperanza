import {
  ArrowRight,
  Award,
  CalendarCheck,
  ChefHat,
  Clock3,
  MapPin,
  PartyPopper,
  Phone,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";

import { directionsUrl, site } from "@/app/site";

const signatures = [
  {
    number: "01",
    name: "Mole Poblano",
    description:
      "A treasured family recipe—deep, layered mole finished with roasted sesame.",
    accent: "pink",
  },
  {
    number: "02",
    name: "Guacamole",
    description:
      "Avocado, jalapeño, onion, cilantro and tomato, made fresh in a molcajete.",
    accent: "blue",
  },
  {
    number: "03",
    name: "Fat Alex’s Burrito",
    description:
      "Steak, rice, beans, cheese and sour cream, wrapped generously and finished with cheese.",
    accent: "yellow",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          src="/images/hero-feast.webp"
          alt="Mole poblano, guacamole, tortillas and fresh salsas arranged for a family-style meal"
          width={1672}
          height={941}
          fetchPriority="high"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="site-shell hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span />
              Family-owned in Lindenwold since {site.established}
            </p>
            <h1>
              A taste of home.
              <em>Una probadita de casa.</em>
            </h1>
            <p className="hero-description">
              Traditional Mexican and Latin American dishes shaped by the
              Cordova family’s recipes, culture and hospitality.
            </p>
            <div className="hero-actions">
              <Link href="/menu" className="button button-primary">
                Explore Our Menu
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="button button-light" href={`tel:${site.phoneHref}`}>
                <Phone size={18} aria-hidden="true" />
                Call for a Table
              </a>
            </div>
            <p className="hero-note">
              <CalendarCheck size={17} aria-hidden="true" />
              Reservations are by phone. Walk-ins are always welcome.
            </p>
          </div>

          <div className="award-seal" aria-label="Best of Philly 2003">
            <Award aria-hidden="true" />
            <span>Best of Philly</span>
            <strong>2003</strong>
            <small>Mexican Restaurant</small>
          </div>
        </div>
      </section>

      <section className="visit-ribbon" aria-label="Restaurant quick details">
        <div className="site-shell ribbon-grid">
          <a href={directionsUrl} target="_blank" rel="noreferrer">
            <span className="ribbon-icon pink">
              <MapPin aria-hidden="true" />
            </span>
            <span>
              <small>Find the pink house</small>
              <strong>40 E. Gibbsboro Rd.</strong>
              <em>Lindenwold, New Jersey</em>
            </span>
          </a>
          <Link href="/visit">
            <span className="ribbon-icon blue">
              <Clock3 aria-hidden="true" />
            </span>
            <span>
              <small>Today & this week</small>
              <strong>Lunch & dinner</strong>
              <em>Open Tuesday–Sunday</em>
            </span>
          </Link>
          <a href={`tel:${site.phoneHref}`}>
            <span className="ribbon-icon yellow">
              <Phone aria-hidden="true" />
            </span>
            <span>
              <small>Takeout & reservations</small>
              <strong>{site.phoneDisplay}</strong>
              <em>Give the family a call</em>
            </span>
          </a>
        </div>
      </section>

      <section className="section signature-section">
        <div className="site-shell">
          <div className="section-heading centered">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              The La Esperanza essentials
            </p>
            <h2>Come hungry. Leave part of the family.</h2>
            <p>
              Generous plates, traditional sauces and the unmistakable warmth
              of a family kitchen.
            </p>
          </div>

          <div className="signature-grid">
            {signatures.map((item) => (
              <article key={item.name} className={`signature-card ${item.accent}`}>
                <span className="signature-number">{item.number}</span>
                <ChefHat aria-hidden="true" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="centered-action">
            <Link href="/menu" className="text-link">
              See the full menu
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section heritage-section">
        <div className="site-shell heritage-grid">
          <div className="heritage-image-wrap">
            <div className="image-backdrop" />
            <img
              src="/images/mole-poblano.webp"
              alt="Traditional mole poblano with rice and warm tortillas"
              width={1122}
              height={1402}
              className="heritage-image"
            />
            <div className="image-note">
              <strong>From Puebla</strong>
              <span>with hope</span>
            </div>
          </div>

          <div className="heritage-copy">
            <p className="eyebrow">Recipes with a memory</p>
            <h2>The mole is more than a dish. It’s inheritance.</h2>
            <p className="lead">
              La Esperanza is the Cordova family’s first business, built from
              years of work and a desire to share the food they grew up with in
              Puebla, Mexico.
            </p>
            <p>
              The family’s mole recipe has traveled through generations. Their
              food still follows the same principle that shaped the restaurant
              from the beginning: make it the way you would at home, then invite
              everyone to the table.
            </p>
            <div className="heritage-facts">
              <div>
                <strong>2002</strong>
                <span>Serving South Jersey</span>
              </div>
              <div>
                <strong>6</strong>
                <span>Cordova siblings</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Family table</span>
              </div>
            </div>
            <Link href="/story" className="button button-outline">
              Read the Cordova Story
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="site-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">More ways to gather</p>
              <h2>Lunch, dinner, a round of margaritas—or the whole fiesta.</h2>
            </div>
            <p>
              Dine in, bring it home, or let La Esperanza cook for your next
              celebration.
            </p>
          </div>

          <div className="experience-grid">
            <article className="experience-card dine">
              <UtensilsCrossed aria-hidden="true" />
              <p className="card-index">01</p>
              <h3>Dine In</h3>
              <p>
                Settle into the colorful dining room or bar for lunch, dinner
                and a warm welcome.
              </p>
              <Link href="/visit">Plan your visit →</Link>
            </article>
            <article className="experience-card takeout">
              <ShoppingBag aria-hidden="true" />
              <p className="card-index">02</p>
              <h3>Takeout & Delivery</h3>
              <p>
                Call ahead for pickup, or use the online delivery menu when the
                sofa wins.
              </p>
              <a href={`tel:${site.phoneHref}`}>Call to order →</a>
            </article>
            <article className="experience-card catering">
              <PartyPopper aria-hidden="true" />
              <p className="card-index">03</p>
              <h3>Catering & Events</h3>
              <p>
                From family parties to office gatherings, build a buffet around
                the dishes everyone loves.
              </p>
              <Link href="/catering">Plan a fiesta →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="cta-pattern" aria-hidden="true" />
        <div className="site-shell home-cta-inner">
          <div>
            <p className="eyebrow light">Mi casa es su casa</p>
            <h2>Your table is waiting.</h2>
            <p>
              Call for a reservation, or stop by—half the tables are kept open
              for walk-in guests.
            </p>
          </div>
          <div className="home-cta-actions">
            <a className="button button-sun" href={`tel:${site.phoneHref}`}>
              <Phone size={18} aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a
              className="button button-light"
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={18} aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
