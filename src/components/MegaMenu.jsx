import { useState } from "react";
import { Link } from "../router";
import { useBooking } from "../booking";
import TablerIcon from "./TablerIcon";

const resolve = (service, group, menu) => {
  if (typeof service === "string") {
    return { label: service, href: group.href ?? menu.href, icon: "code" };
  }
  return { ...service, icon: service.icon ?? "code" };
};

export default function MegaMenu({ menu, onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openBooking } = useBooking();

  // Clean 2-card cohesive dropdown for Resources (Case Studies & Blogs)
  if (menu.cards) {
    return (
      <div
        className="mega mega-resources-menu"
        id={`mega-${menu.id}`}
        role="region"
        aria-label={`${menu.label} directory`}
      >
        <div className="mega-resources-grid">
          {menu.cards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              onClick={onNavigate}
              className="mega-resource-card"
            >
              <div className="mega-resource-icon-box" aria-hidden="true">
                <TablerIcon name={card.icon || "file-text"} size={22} strokeWidth={1.8} />
              </div>
              <div className="mega-resource-body">
                <h3 className="mega-resource-title">{card.title}</h3>
                <p className="mega-resource-desc">{card.desc}</p>
              </div>
              <div className="mega-resource-arrow" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M7 4l6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const openFromFeature = () => {
    onNavigate();
    openBooking(menu.feature?.topic ? { topic: menu.feature.topic } : {});
  };

  const group = menu.groups?.[activeIndex] ?? menu.groups?.[0];
  if (!group) return null;

  const handleRailKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = (activeIndex + 1) % menu.groups.length;
      setActiveIndex(next);
      document.getElementById(`mega-tab-${menu.id}-${next}`)?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (activeIndex - 1 + menu.groups.length) % menu.groups.length;
      setActiveIndex(prev);
      document.getElementById(`mega-tab-${menu.id}-${prev}`)?.focus();
    }
  };

  return (
    <div className="mega" id={`mega-${menu.id}`} role="region" aria-label={`${menu.label} directory`}>
      {/* Left Column: Group Rail Cards with Navigation Arrow */}
      <div className="mega-rail" role="tablist" aria-label={`${menu.label} categories`} onKeyDown={handleRailKeyDown}>
        {menu.groups.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.name}
              type="button"
              role="tab"
              id={`mega-tab-${menu.id}-${index}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              aria-controls={`mega-panel-${menu.id}-${index}`}
              className="mega-rail-card"
              data-active={isActive}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="mega-rail-info">
                <span className="mega-rail-name">{item.name}</span>
                {item.lead && <span className="mega-rail-lead">{item.lead}</span>}
              </div>
              <div className="mega-rail-arrow" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M7 4l6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {/* Middle Column: Sub Menu Offerings with Tabler Icons */}
      <div
        className="mega-main"
        role="tabpanel"
        id={`mega-panel-${menu.id}-${activeIndex}`}
        aria-labelledby={`mega-tab-${menu.id}-${activeIndex}`}
      >
        <ul className="mega-icon-list" data-count={group.services.length > 5 ? "many" : "few"}>
          {group.services.map((service) => {
            const item = resolve(service, group, menu);
            return (
              <li key={item.label}>
                <Link to={item.href} onClick={onNavigate} className="mega-item-link">
                  <span className="mega-item-icon-box">
                    <TablerIcon name={item.icon} size={20} strokeWidth={1.75} />
                  </span>
                  <span className="mega-item-text">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Column: Featured Spotlight Card */}
      <aside className="mega-aside" aria-label="Featured spotlight">
        <div className="mega-feature-card">
          <h3 className="mega-feature-headline">
            {menu.feature.headline || "Customized workflows for content governance"}
          </h3>
          <p className="mega-feature-sub">
            {menu.feature.sub || menu.feature.text}
          </p>

          <div className="mega-feature-action">
            {menu.feature.book ? (
              <button
                type="button"
                className="mega-circle-cta"
                onClick={openFromFeature}
                aria-label={menu.feature.cta || "Book a call"}
                title={menu.feature.cta || "Book a call"}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              <Link
                className="mega-circle-cta"
                to={menu.feature.href || menu.href}
                onClick={onNavigate}
                aria-label={menu.feature.cta || "Explore"}
                title={menu.feature.cta || "Explore"}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
