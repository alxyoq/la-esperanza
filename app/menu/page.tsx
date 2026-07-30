import { ArrowUpRight, Phone, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";

import MenuExplorer from "@/app/components/MenuExplorer";
import { site } from "@/app/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore La Esperanza’s authentic Mexican menu, including mole poblano, guacamole, tacos, burritos, fajitas, seafood and traditional family specialties.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <section className="page-hero menu-page-hero">
        <div className="site-shell page-hero-inner">
          <p className="eyebrow light">Comida hecha en casa</p>
          <h1>Our Menu</h1>
          <p>
            Family recipes, traditional sauces and generous plates from Mexico
            and Latin America.
          </p>
        </div>
      </section>

      <section className="section menu-section">
        <div className="site-shell">
          <div className="menu-notice">
            <div>
              <strong>Looking for current pricing?</strong>
              <p>
                Availability and prices may change. Call for the latest takeout
                menu or view live delivery pricing online.
              </p>
            </div>
            <div>
              <a className="button button-outline" href={`tel:${site.phoneHref}`}>
                <Phone size={17} aria-hidden="true" />
                Call the Restaurant
              </a>
              <a
                className="button button-primary"
                href={site.orderUrl}
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingBag size={17} aria-hidden="true" />
                Delivery Menu
              </a>
            </div>
          </div>

          <MenuExplorer />

          <div className="menu-disclaimer">
            <p>
              Please tell your server about allergies or dietary restrictions.
              Consuming raw or undercooked meats, fish, shellfish or eggs may
              increase the risk of foodborne illness.
            </p>
            <a href={site.menuPdf} target="_blank" rel="noreferrer">
              View the restaurant’s classic takeout menu PDF
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
