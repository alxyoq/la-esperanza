"use client";

import { Search, UtensilsCrossed } from "lucide-react";
import { useMemo, useState } from "react";

import { menuSections } from "@/app/site";

export default function MenuExplorer() {
  const [activeSection, setActiveSection] = useState(menuSections[0].id);
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const selected = menuSections.find((section) => section.id === activeSection)!;

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return selected.items;
    }

    return menuSections.flatMap((section) =>
      section.items
        .filter((item) =>
          [item.name, item.description, ...(item.tags ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery),
        )
        .map((item) => ({ ...item, sectionLabel: section.label })),
    );
  }, [normalizedQuery, selected.items]);

  return (
    <div className="menu-explorer">
      <div className="menu-tools">
        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {menuSections.map((section) => (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={!normalizedQuery && activeSection === section.id}
              className={
                !normalizedQuery && activeSection === section.id
                  ? "menu-tab active"
                  : "menu-tab"
              }
              onClick={() => {
                setActiveSection(section.id);
                setQuery("");
              }}
            >
              {section.label}
            </button>
          ))}
        </div>

        <label className="menu-search">
          <span className="sr-only">Search the menu</span>
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dishes or ingredients"
          />
        </label>
      </div>

      <div className="menu-heading">
        <div>
          <p className="eyebrow">
            {normalizedQuery ? "Search results" : selected.eyebrow}
          </p>
          <h2>
            {normalizedQuery
              ? results.length
                ? `Dishes matching “${query.trim()}”`
                : "No dishes found"
              : selected.label}
          </h2>
        </div>
        <p>
          {normalizedQuery
            ? "Try another dish, ingredient or category."
            : selected.description}
        </p>
      </div>

      {results.length ? (
        <div className="menu-grid" role="tabpanel">
          {results.map((item) => {
            const searchResult = item as typeof item & {
              sectionLabel?: string;
            };

            return (
              <article
                key={`${searchResult.sectionLabel ?? selected.label}-${item.name}`}
                className={item.featured ? "menu-item featured" : "menu-item"}
              >
                <div className="menu-item-icon" aria-hidden="true">
                  <UtensilsCrossed size={18} />
                </div>
                <div>
                  {searchResult.sectionLabel ? (
                    <p className="menu-result-category">
                      {searchResult.sectionLabel}
                    </p>
                  ) : null}
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  {item.tags?.length ? (
                    <div className="menu-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="menu-empty">
          <UtensilsCrossed aria-hidden="true" />
          <p>Try “mole,” “vegetarian,” “shrimp,” or “steak.”</p>
        </div>
      )}
    </div>
  );
}
