"use client";

import {
  Clock3,
  Facebook,
  Instagram,
  Menu,
  Phone,
  ShoppingBag,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { site } from "@/app/site";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Our Story" },
  { href: "/catering", label: "Catering" },
  { href: "/visit", label: "Visit" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuOpen &&
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="site-shell utility-inner">
          <p>
            <Clock3 size={14} aria-hidden="true" />
            <span className="utility-wide">
              Tue–Thu 11–9 · Fri–Sat 11–10 · Sun 11–8
            </span>
            <span className="utility-short">Open Tue–Sun</span>
          </p>
          <a href={`tel:${site.phoneHref}`}>
            <Phone size={14} aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="nav-bar">
        <div className="site-shell nav-inner">
          <Link href="/" className="brand-lockup" aria-label="La Esperanza home">
            <img
              src="/images/la-esperanza-mark.png"
              width={58}
              height={58}
              alt=""
              className="brand-mark"
              fetchPriority="high"
            />
            <span className="brand-type">
              <strong>La Esperanza</strong>
              <span>Mexican Restaurant & Bar</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "nav-link active" : "nav-link"}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-actions">
            <a
              className="button button-order desktop-order"
              href={site.orderUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ShoppingBag size={17} aria-hidden="true" />
              Order Online
            </a>
            <button
              ref={buttonRef}
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-navigation"
            ref={panelRef}
            className="mobile-panel"
          >
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mobile-actions">
              <a className="button button-primary" href={`tel:${site.phoneHref}`}>
                <Phone size={17} aria-hidden="true" />
                Call for a Table
              </a>
              <a
                className="button button-order"
                href={site.orderUrl}
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingBag size={17} aria-hidden="true" />
                Order Online
              </a>
            </div>
            <div className="mobile-social">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="La Esperanza on Instagram"
              >
                <Instagram aria-hidden="true" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="La Esperanza on Facebook"
              >
                <Facebook aria-hidden="true" />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
