import { ArrowRight, Award, Heart, Home, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meet the Cordova family and learn how their first home in Puebla inspired La Esperanza’s name, logo and family-owned restaurant in Lindenwold.",
  alternates: { canonical: "/story" },
};

export default function StoryPage() {
  return (
    <>
      <section className="page-hero story-page-hero">
        <div className="site-shell page-hero-inner">
          <p className="eyebrow light">La Familia Cordova</p>
          <h1>Hope has always looked like home.</h1>
          <p>
            A family’s first restaurant, named for the force that carried them
            from Puebla to South Jersey.
          </p>
        </div>
      </section>

      <section className="section story-intro">
        <div className="site-shell story-intro-grid">
          <div>
            <p className="eyebrow">Why “La Esperanza”</p>
            <h2>A restaurant built on hope—and six siblings around one table.</h2>
          </div>
          <div className="story-prose">
            <p>
              Saul and Susana Cordova raised four daughters and two sons in
              Puebla, Mexico. Their cooking, traditions and work ethic became
              the foundation of La Esperanza, the family’s first business.
            </p>
            <p>
              “Esperanza” means hope. It names the quality that pushed the
              family forward through years of work and eventually gave South
              Jersey a home for their Mexican cooking.
            </p>
          </div>
        </div>
      </section>

      <section className="house-story">
        <div className="site-shell house-story-grid">
          <figure className="archive-card house-photo">
            <img
              src="/images/cordova-first-home.png"
              alt="The Cordova family’s first house in Puebla, Mexico"
              width={360}
              height={270}
            />
            <figcaption>
              <MapPin size={16} aria-hidden="true" />
              The Cordova family’s first home in Puebla
            </figcaption>
          </figure>

          <div className="house-story-copy">
            <span className="story-icon">
              <Home aria-hidden="true" />
            </span>
            <p className="eyebrow">The house in the mark</p>
            <h2>A symbol chosen before the resemblance was understood.</h2>
            <p>
              The little house appeared in La Esperanza’s early identity. Only
              after the restaurant opened did the family recognize how closely
              it echoed their first house in Mexico—the place where the
              brothers and sisters took their first steps, learned and played.
            </p>
            <p>
              That house now stands for the beginning of the Cordova family’s
              hope, and for the home they invite guests into every day.
            </p>
          </div>

          <figure className="archive-card original-mark">
            <img
              src="/images/original-house-mark.png"
              alt="La Esperanza’s original little-house logo with the words Mi Casa Es Su Casa"
              width={360}
              height={270}
            />
            <figcaption>
              <Heart size={16} aria-hidden="true" />
              “Mi casa es su casa”
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section legacy-section">
        <div className="site-shell legacy-grid">
          <div className="legacy-image-frame">
            <img
              src="/images/original-dining-room.png"
              alt="La Esperanza’s colorful dining room and bar"
              width={642}
              height={298}
            />
            <span>From the La Esperanza family archive</span>
          </div>
          <div className="legacy-copy">
            <p className="eyebrow">Still family-owned</p>
            <h2>The food comes from people, not a playbook.</h2>
            <p>
              The family’s cooking has always been shared work: meats and
              barbacoa influenced by Saul, mole shaped by Susana’s generational
              recipe, and a menu developed by the Cordova siblings through
              years of restaurant experience and connections back home.
            </p>
            <blockquote>
              “La familia is the base of society. A good family makes a good
              neighborhood—and a good neighborhood makes a great nation.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="story-award">
        <div className="site-shell story-award-inner">
          <Award aria-hidden="true" />
          <div>
            <p>Philadelphia Magazine</p>
            <h2>Best of Philly · Mexican Restaurant · 2003</h2>
          </div>
          <Link href="/menu" className="button button-light">
            Taste the Story
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
