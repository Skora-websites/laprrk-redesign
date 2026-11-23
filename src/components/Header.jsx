import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { CONTACT } from "../data/site";
import { NAV } from "../data/menus";
import { Link, useRouter } from "../router";
import { useBooking } from "../booking";
import MegaMenu from "./MegaMenu";
import TablerIcon from "./TablerIcon";
import { FlowButton } from "./ui/flow-button";

const loadGsap = () => import("gsap").then((m) => m.default || m);

export default function Header() {
  const { path } = useRouter();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const headerRef = useRef(null);
  const mobileCardRef = useRef(null);
  const mobileBackdropRef = useRef(null);
  const mobileTriggerRef = useRef(null);
  const closeTimer = useRef(null);
  const openedByHover = useRef(false);

  const activeMenu = NAV.find((item) => item.id === openMenu && (item.groups || item.cards)) ?? null;

  const isActive = (item) => {
    if (path === item.href) return true;
    if (item.href !== "/" && path.startsWith(`${item.href}/`)) return true;
    if (item.id === "it-services" && (path.startsWith("/it-services/") || path.startsWith("/services/"))) return true;
    if (item.id === "resources" && (path.startsWith("/blog") || path.startsWith("/case-studies"))) return true;
    return false;
  };

  useEffect(() => {
    const updateScrolled = () => {
      const hero = document.querySelector(
        ".hero, .page-hero, .service-hero, .hiring-hero-section, .training-hero-section"
      );
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        setScrolled(heroRect.bottom <= 78);
      } else {
        setScrolled(window.scrollY > 20);
      }
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    window.addEventListener("resize", updateScrolled, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScrolled);
      window.removeEventListener("resize", updateScrolled);
    };
  }, [path]);

  // Close menus and reset accordion on path navigation
  useEffect(() => {
    setOpenMenu(null);
    setMobileAccordion(null);
    if (mobileOpen) {
      setMobileOpen(false);
      document.body.style.overflow = "";
    }
  }, [path]);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const closeMobileMenu = useCallback((callback) => {
    setMobileAccordion(null);
    const restoreFocus = () => {
      if (mobileTriggerRef.current) {
        mobileTriggerRef.current.focus();
      }
      if (callback) callback();
    };

    if (mobileCardRef.current && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      loadGsap().then((gsap) => {
        if (mobileBackdropRef.current) {
          gsap.to(mobileBackdropRef.current, { opacity: 0, duration: 0.22, ease: "power2.in" });
        }
        gsap.to(mobileCardRef.current, {
          x: "100%",
          duration: 0.24,
          ease: "power2.in",
          onComplete: () => {
            setMobileOpen(false);
            setMobileAccordion(null);
            document.body.style.overflow = "";
            restoreFocus();
          },
        });
      });
    } else {
      setMobileOpen(false);
      setMobileAccordion(null);
      document.body.style.overflow = "";
      restoreFocus();
    }
  }, []);

  const toggleMobileNav = () => {
    if (mobileOpen) {
      closeMobileMenu();
    } else {
      mobileTriggerRef.current = document.activeElement;
      setMobileAccordion(null);
      setMobileOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    if (!mobileOpen && !openMenu) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      if (mobileOpen) closeMobileMenu();
    };
    const onPointer = (e) => {
      if (openMenu && headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [mobileOpen, openMenu, closeMobileMenu]);

  // Animate mobile drawer in and manage focus
  useEffect(() => {
    if (mobileOpen && mobileCardRef.current) {
      // Focus close button initially
      const closeBtn = mobileCardRef.current.querySelector(".mobile-close-btn");
      closeBtn?.focus();

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (mobileBackdropRef.current) gsap.set(mobileBackdropRef.current, { opacity: 1 });
        gsap.set(mobileCardRef.current, { opacity: 1, x: 0 });
        return;
      }
      loadGsap().then((gsap) => {
        if (mobileBackdropRef.current) {
          gsap.fromTo(mobileBackdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
        }
        gsap.fromTo(
          mobileCardRef.current,
          { x: "100%" },
          { x: "0%", duration: 0.32, ease: "power3.out" }
        );
        gsap.fromTo(
          mobileCardRef.current.querySelectorAll(".mob-nav-item"),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, stagger: 0.032, duration: 0.24, ease: "power2.out", delay: 0.08 }
        );
      });
    }
  }, [mobileOpen]);

  // Trap focus inside mobile drawer while open
  useEffect(() => {
    if (!mobileOpen) return;
    const onDrawerTab = (e) => {
      if (e.key !== "Tab" || !mobileCardRef.current) return;
      const focusables = Array.from(
        mobileCardRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((node) => node.offsetParent !== null);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onDrawerTab);
    return () => document.removeEventListener("keydown", onDrawerTab);
  }, [mobileOpen]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openOnHover = (id) => {
    clearTimeout(closeTimer.current);
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (openMenu !== id) {
      openedByHover.current = true;
      setOpenMenu(id);
    }
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    openedByHover.current = false;
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };

  const toggleMenu = (id) => {
    if (openMenu === id && openedByHover.current) {
      openedByHover.current = false;
      return;
    }
    openedByHover.current = false;
    setOpenMenu((current) => (current === id ? null : id));
  };

  const closeAll = () => {
    setOpenMenu(null);
    if (mobileOpen) closeMobileMenu();
  };

  const startBooking = () => {
    closeAll();
    openBooking();
  };

  const toggleMobileAccordion = (id) => {
    setMobileAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-mega={Boolean(openMenu)}
      ref={headerRef}
      onMouseLeave={scheduleClose}
    >
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="shell header-inner">
        <Link className="brand" to="/" aria-label="Laprrk Technology Solutions, home" onClick={closeAll}>
          <img src="/brand/laprrk-logo.webp" alt="Laprrk Technology Solutions" width="152" height="38" fetchPriority="high" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav" aria-label="Main">
          {NAV.map((item) => {
            const active = isActive(item);
            const hasChildren = Boolean(item.groups || item.cards);
            return (
              <div
                key={item.id}
                className="nav-item"
                data-active={active}
                data-open={openMenu === item.id}
                onMouseEnter={() => (hasChildren ? openOnHover(item.id) : setOpenMenu(null))}
              >
                {hasChildren ? (
                  <button
                    type="button"
                    className="nav-link nav-link-btn"
                    aria-expanded={openMenu === item.id}
                    aria-controls={`mega-${item.id}`}
                    onClick={() => toggleMenu(item.id)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    className="nav-link"
                    to={item.href}
                    onClick={closeAll}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
                {hasChildren && (
                  <button
                    type="button"
                    className="nav-caret"
                    tabIndex={-1}
                    aria-hidden="true"
                    onClick={() => toggleMenu(item.id)}
                  >
                    <span className="chev" aria-hidden="true" />
                  </button>
                )}
              </div>
            );
          })}
        </nav>

        <div className="header-actions">
          <FlowButton text="Book Call" size="sm" variant="solid" onClick={startBooking} />
        </div>

        {/* Dedicated Mobile Hamburger Button */}
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={toggleMobileNav}
          onPointerEnter={loadGsap}
          onTouchStart={loadGsap}
        >
          <span className="menu-toggle-bars" aria-hidden="true" data-open={mobileOpen}>
            <i className="bar-top" />
            <i className="bar-mid" />
            <i className="bar-bot" />
          </span>
        </button>
      </div>

      {activeMenu && <MegaMenu key={activeMenu.id} menu={activeMenu} onNavigate={closeAll} />}

      {/* Dedicated High-Priority Mobile Navigation Drawer (Portaled to document.body) */}
      {typeof document !== "undefined" &&
        mobileOpen &&
        createPortal(
          <div
            id="mobile-nav-drawer"
            className="mobile-nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div
              className="mobile-nav-backdrop"
              ref={mobileBackdropRef}
              onClick={() => closeMobileMenu()}
              aria-hidden="true"
            />

            <div className="mobile-nav-card" ref={mobileCardRef}>
              {/* Mobile Navigation Header */}
              <div className="mobile-nav-head">
                <Link className="brand" to="/" onClick={() => closeMobileMenu()}>
                  <img src="/brand/laprrk-logo.webp" alt="Laprrk Technology Solutions" width="138" height="34" />
                </Link>
                <button
                  type="button"
                  className="mobile-close-btn"
                  onClick={() => closeMobileMenu()}
                  aria-label="Close menu"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

            {/* Scrollable Navigation Body */}
            <div className="mobile-nav-scroll">
              <nav className="mobile-nav-list" aria-label="Main, mobile">
                {NAV.map((item) => {
                  const active = isActive(item);
                  const hasChildren = Boolean(item.groups || item.cards);
                  const isExpanded = mobileAccordion === item.id;

                  return (
                    <div key={item.id} className="mob-nav-item" data-active={active} data-expanded={isExpanded}>
                      <div className="mob-nav-row">
                        {hasChildren ? (
                          <button
                            type="button"
                            className="mob-nav-trigger"
                            aria-expanded={isExpanded}
                            aria-controls={`mob-sub-${item.id}`}
                            onClick={() => toggleMobileAccordion(item.id)}
                          >
                            <span className="mob-nav-label">
                              <span>{item.label}</span>
                              {active && <span className="mob-active-indicator" aria-hidden="true" />}
                            </span>
                            <span className="mob-accordion-icon" aria-hidden="true">
                              <svg
                                className={`mob-chevron ${isExpanded ? "is-expanded" : ""}`}
                                viewBox="0 0 20 20"
                                width="18"
                                height="18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </button>
                        ) : (
                          <Link
                            className="mob-nav-link"
                            to={item.href}
                            onClick={() => closeMobileMenu()}
                            aria-current={active ? "page" : undefined}
                          >
                            <span>{item.label}</span>
                            {active && <span className="mob-active-indicator" aria-hidden="true" />}
                          </Link>
                        )}
                      </div>

                      {/* Nested Offerings Accordion */}
                      {hasChildren && isExpanded && (
                        <div id={`mob-sub-${item.id}`} className="mob-sub-panel">
                          {item.groups &&
                            item.groups.map((group) => (
                              <div key={group.name} className="mob-sub-group">
                                <span className="mob-group-title">{group.name}</span>
                                <ul className="mob-sub-list">
                                  {group.services.map((svc) => {
                                    const service =
                                      typeof svc === "string"
                                        ? { label: svc, href: group.href ?? item.href, icon: "code" }
                                        : { ...svc, icon: svc.icon ?? "code" };
                                    return (
                                      <li key={service.label}>
                                        <Link
                                          to={service.href}
                                          className="mob-sub-link"
                                          onClick={() => closeMobileMenu()}
                                        >
                                          <span className="mob-sub-icon">
                                            <TablerIcon name={service.icon} size={16} />
                                          </span>
                                          <span className="mob-sub-label">{service.label}</span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}

                          {item.cards && (
                            <div className="mob-sub-cards">
                              {item.cards.map((card) => (
                                <Link
                                  key={card.title}
                                  to={card.href}
                                  className="mob-card-link"
                                  onClick={() => closeMobileMenu()}
                                >
                                  <strong>{card.title}</strong>
                                  <small>{card.desc}</small>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Mobile Actions & Quick Contact */}
              <div className="mob-actions-section">
                <FlowButton
                  text="Book 30-min Call"
                  variant="solid"
                  onClick={() => closeMobileMenu(openBooking)}
                  style={{ width: "100%" }}
                />

                <a
                  className="mob-cta-whatsapp"
                  href={CONTACT.waBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => closeMobileMenu()}
                >
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M10 2.8a7 7 0 00-6 10.6L3 17l3.7-1a7 7 0 106.3-12.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.6 6.7c.3-.1.6 0 .8.3l.7 1.2c.1.2.1.5-.1.6l-.5.5c.5 1 1.4 1.9 2.5 2.4l.5-.5c.2-.2.4-.2.6-.1l1.2.7c.2.2.4.4.3.7-.2.8-.9 1.4-1.7 1.4-2.7-.2-5-2.5-5.2-5.2 0-.8.5-1.5 1.3-1.7" fill="currentColor" />
                  </svg>
                  WhatsApp · {CONTACT.phoneIN}
                </a>

                <div className="mob-contact-telemetry">
                  <span className="mob-telemetry-badge">
                    <i className="mob-pulse-dot" /> Greater Noida &amp; Louisville
                  </span>
                  <p className="mob-telemetry-note">Reply in 1 business day · Written proposal within 48h</p>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
