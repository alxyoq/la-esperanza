import { ArrowLeft, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <UtensilsCrossed aria-hidden="true" />
      <p className="eyebrow">404 · Página no encontrada</p>
      <h1>This plate isn’t on the menu.</h1>
      <p>The page may have moved, but the table is still waiting.</p>
      <Link className="button button-primary" href="/">
        <ArrowLeft size={18} aria-hidden="true" />
        Back Home
      </Link>
    </section>
  );
}
