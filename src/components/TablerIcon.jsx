export default function TablerIcon({ name, className = "tabler-icon", size = 20 }) {
  const props = {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  switch (name) {
    // Development & Engineering
    case "code":
      return (
        <svg {...props}>
          <path d="M7 8l-4 4l4 4" />
          <path d="M17 8l4 4l-4 4" />
          <path d="M14 4l-4 16" />
        </svg>
      );
    case "world-code":
    case "browser":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 13l-2 2l2 2" />
          <path d="M15 13l2 2l-2 2" />
        </svg>
      );
    case "device-mobile":
      return (
        <svg {...props}>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M11 4h2" />
          <path d="M12 17v.01" />
        </svg>
      );
    case "palette":
    case "layout":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 10h16" />
          <path d="M10 4v16" />
        </svg>
      );
    case "shopping-cart":
      return (
        <svg {...props}>
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
      );

    // AI & Data
    case "sparkles":
    case "brain":
      return (
        <svg {...props}>
          <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
        </svg>
      );
    case "robot":
    case "cpu":
      return (
        <svg {...props}>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M9 9h6v6h-6z" />
          <path d="M3 10h2" />
          <path d="M3 14h2" />
          <path d="M10 3v2" />
          <path d="M14 3v2" />
          <path d="M21 10h-2" />
          <path d="M21 14h-2" />
          <path d="M14 21v-2" />
          <path d="M10 21v-2" />
        </svg>
      );
    case "chart-bar":
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
          <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
        </svg>
      );

    // Cloud & Platform
    case "cloud":
      return (
        <svg {...props}>
          <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.708c2.613 -.708 5.38 .64 6.425 3.12c1.879 .37 3.243 1.942 3.243 3.82c0 2.21 -1.79 4 -4 4z" />
        </svg>
      );
    case "server":
    case "terminal-2":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="8" rx="3" />
          <rect x="3" y="12" width="18" height="8" rx="3" />
          <line x1="7" y1="8" x2="7" y2="8.01" />
          <line x1="7" y1="16" x2="7" y2="16.01" />
        </svg>
      );
    case "api":
      return (
        <svg {...props}>
          <path d="M4 13h5" />
          <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
          <path d="M20 8v8" />
          <path d="M9 8v8" />
          <path d="M4 8v8" />
        </svg>
      );
    case "file-text":
      return (
        <svg {...props}>
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <line x1="9" y1="9" x2="10" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      );
    case "activity":
    case "lifebuoy":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="9" />
          <line x1="15" y1="15" x2="18.35" y2="18.35" />
          <line x1="9" y1="15" x2="5.65" y2="18.35" />
          <line x1="5.65" y1="5.65" x2="9" y2="9" />
          <line x1="18.35" y1="5.65" x2="15" y2="9" />
        </svg>
      );

    // Quality, Security, Enterprise
    case "check":
      return (
        <svg {...props}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "checklist":
    case "circle-check":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      );
    case "clipboard-check":
      return (
        <svg {...props}>
          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="2" />
          <path d="M9 14l2 2l4 -4" />
        </svg>
      );
    case "coffee":
      return (
        <svg {...props}>
          <path d="M3 14c0 2.5 2 4.5 4.5 4.5h5c2.5 0 4.5 -2 4.5 -4.5v-7h-14v7z" />
          <path d="M17 9h2a3 3 0 0 1 0 6h-2" />
          <path d="M6 3v2" />
          <path d="M10 3v2" />
          <path d="M14 3v2" />
        </svg>
      );
    case "brand-windows":
      return (
        <svg {...props}>
          <path d="M11.5 4.5l-6.5 1v5.5h6.5v-6.5z" />
          <path d="M12.5 4.3v6.7h6.5l-6.5 -6.7z" />
          <path d="M5 13v5.5l6.5 1v-6.5h-6.5z" />
          <path d="M12.5 13v6.5l6.5 -1v-5.5h-6.5z" />
        </svg>
      );
    case "world":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <line x1="3.6" y1="9" x2="20.4" y2="9" />
          <line x1="3.6" y1="15" x2="20.4" y2="15" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      );
    case "shield-check":
      return (
        <svg {...props}>
          <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      );
    case "lock":
      return (
        <svg {...props}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
        </svg>
      );
    case "building-skyscraper":
      return (
        <svg {...props}>
          <line x1="3" y1="21" x2="21" y2="21" />
          <path d="M5 21v-14l8 -4v18" />
          <path d="M19 21v-10l-6 -4" />
          <line x1="9" y1="9" x2="9" y2="9.01" />
          <line x1="9" y1="12" x2="9" y2="12.01" />
          <line x1="9" y1="15" x2="9" y2="15.01" />
          <line x1="9" y1="18" x2="9" y2="18.01" />
        </svg>
      );

    // Hiring
    case "user-check":
      return (
        <svg {...props}>
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 11l2 2l4 -4" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
      );
    case "user-plus":
      return (
        <svg {...props}>
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 11h6m-3 -3v6" />
        </svg>
      );
    case "school":
      return (
        <svg {...props}>
          <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
          <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
        </svg>
      );
    case "building-community":
      return (
        <svg {...props}>
          <rect x="8" y="9" width="8" height="12" rx="1" />
          <path d="M13 21v-4a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v4" />
          <path d="M4 13v6a2 2 0 0 0 2 2h2" />
          <path d="M16 21h2a2 2 0 0 0 2 -2v-6" />
          <path d="M8 9l4 -4l4 4" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
          <line x1="12" y1="12" x2="12" y2="12.01" />
          <path d="M3 13a20 20 0 0 0 18 0" />
        </svg>
      );
    case "book":
      return (
        <svg {...props}>
          <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <line x1="3" y1="6" x2="3" y2="19" />
          <line x1="12" y1="6" x2="12" y2="19" />
          <line x1="21" y1="6" x2="21" y2="19" />
        </svg>
      );
    case "certificate":
    case "award":
      return (
        <svg {...props}>
          <circle cx="15" cy="15" r="3" />
          <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
          <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
          <line x1="6" y1="9" x2="12" y2="9" />
          <line x1="6" y1="12" x2="10" y2="12" />
        </svg>
      );
    case "network":
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="6" />
          <circle cx="12" cy="9" r="2" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="18" cy="19" r="2" />
          <path d="M10.5 13.5l-3 4" />
          <path d="M13.5 13.5l3 4" />
        </svg>
      );
    case "dna":
      return (
        <svg {...props}>
          <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
          <path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
          <path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" />
          <line x1="7" y1="17" x2="17" y2="7" />
        </svg>
      );
    case "list-check":
      return (
        <svg {...props}>
          <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
          <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
          <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
          <line x1="11" y1="6" x2="20" y2="6" />
          <line x1="11" y1="12" x2="20" y2="12" />
          <line x1="11" y1="18" x2="20" y2="18" />
        </svg>
      );

    // Resources & Misc
    case "folder":
      return (
        <svg {...props}>
          <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
        </svg>
      );
    case "building":
      return (
        <svg {...props}>
          <line x1="3" y1="21" x2="21" y2="21" />
          <line x1="9" y1="8" x2="10" y2="8" />
          <line x1="9" y1="12" x2="10" y2="12" />
          <line x1="9" y1="16" x2="10" y2="16" />
          <line x1="14" y1="8" x2="15" y2="8" />
          <line x1="14" y1="12" x2="15" y2="12" />
          <line x1="14" y1="16" x2="15" y2="16" />
          <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
        </svg>
      );
    case "stack-2":
      return (
        <svg {...props}>
          <polyline points="12 4 4 8 12 12 20 8 12 4" />
          <polyline points="4 12 12 16 20 12" />
          <polyline points="4 16 12 20 20 16" />
        </svg>
      );
    case "scale":
      return (
        <svg {...props}>
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="9" y1="21" x2="15" y2="21" />
          <polyline points="6 6 12 3 18 6" />
          <path d="M6 6l-3 7a3 3 0 0 0 6 0l-3 -7" />
          <path d="M18 6l-3 7a3 3 0 0 0 6 0l-3 -7" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="4" y="5" width="16" height="16" rx="2" />
          <line x1="16" y1="3" x2="16" y2="7" />
          <line x1="8" y1="3" x2="8" y2="7" />
          <line x1="4" y1="11" x2="20" y2="11" />
          <rect x="8" y="15" width="2" height="2" />
        </svg>
      );
    case "help-circle":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="17" x2="12" y2="17.01" />
          <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -2" />
        </svg>
      );
    case "info-circle":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
          <polyline points="11 12 12 12 12 16 13 16" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15 15" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...props}>
          <circle cx="12" cy="11" r="3" />
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      );

    // Social & Navigation
    case "brand-linkedin":
    case "linkedin":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="11" x2="8" y2="16" />
          <line x1="8" y1="8" x2="8" y2="8.01" />
          <path d="M12 16v-5" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
      );
    case "brand-facebook":
    case "facebook":
      return (
        <svg {...props}>
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
      );
    case "brand-instagram":
    case "instagram":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
      );
    case "brand-youtube":
    case "youtube":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="4" />
          <path d="M10 9l5 3l-5 3z" />
        </svg>
      );
    case "printer":
      return (
        <svg {...props}>
          <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
          <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
          <rect x="7" y="13" width="10" height="8" rx="2" />
        </svg>
      );
    case "brand-pinterest":
    case "pinterest":
      return (
        <svg {...props}>
          <line x1="8" y1="20" x2="12" y2="11" />
          <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "brand-gmail":
    case "gmail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
          <polyline points="3 17 9 12" />
          <polyline points="21 17 15 12" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg {...props}>
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      );

    // Default bullet icon
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
  }
}

