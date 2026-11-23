import { useEffect, useState, lazy, Suspense } from "react";
import { BookingProvider } from "./booking";
import { RouterProvider, useRouter, registerRoutePrefetcher } from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import Home from "./pages/Home";
import { Agentation } from "agentation";

// Lazy-loaded routes for optimal initial bundle size and performance
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const HiringDetail = lazy(() => import("./pages/HiringDetail"));
const TrainingPage = lazy(() => import("./pages/TrainingPage"));
const TrainingDetail = lazy(() => import("./pages/TrainingDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Terms = lazy(() => import("./pages/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Intelligent route prefetching on hover / focus
const PREFETCH_MAP = {
  "/about": () => import("./pages/About"),
  "/contact": () => import("./pages/Contact"),
  "/training": () => import("./pages/TrainingPage"),
  "/blog": () => import("./pages/Blog"),
  "/resources/blog": () => import("./pages/Blog"),
  "/case-studies": () => import("./pages/CaseStudies"),
  "/resources/case-studies": () => import("./pages/CaseStudies"),
  "/terms": () => import("./pages/Terms"),
  "/terms.html": () => import("./pages/Terms"),
  "/privacy-policy": () => import("./pages/PrivacyPolicy"),
  "/privacy-policy.html": () => import("./pages/PrivacyPolicy"),
  "/privacy": () => import("./pages/PrivacyPolicy"),
};

registerRoutePrefetcher((to) => {
  const path = to.split("#")[0].replace(/\/+$/, "") || "/";
  if (PREFETCH_MAP[path]) {
    PREFETCH_MAP[path]();
  } else if (path.startsWith("/it-services/") || path.startsWith("/services/")) {
    import("./pages/ServiceDetail");
    import("./data/servicesData");
  } else if (path.startsWith("/hiring/")) {
    import("./pages/HiringDetail");
    import("./data/hiringData");
  } else if (path.startsWith("/training/")) {
    import("./pages/TrainingDetail");
    import("./data/trainingData");
  }
});

function Redirect({ to }) {
  const { navigate } = useRouter();
  useEffect(() => {
    navigate(to, { replace: true });
  }, [to, navigate]);
  return <div className="page-route-fallback" aria-hidden="true" />;
}

const REDIRECTS = {
  "/it-services": "/it-services/custom-software",
  "/services": "/it-services/custom-software",
  "/hiring": "/hiring/permanent-recruitment",
  "/resources": "/case-studies",
};

const PAGES = {
  "/": {
    component: Home,
    title: "Laprrk Technology Solutions · Software, hiring and training",
    description: "Software development, IT hiring and corporate training for engineering teams in India and the United States. Founded 2019.",
  },
  "/training": {
    component: TrainingPage,
    title: "Corporate training · Laprrk Technology Solutions",
    description: "Outcome-driven corporate technical training cohorts. 70% lab time, customized syllabus, enterprise delivery.",
  },
  "/blog": {
    component: Blog,
    title: "Blog & Insights · Laprrk Technology Solutions",
    description: "Engineering, hiring, and corporate training insights from Laprrk Technology Solutions.",
  },
  "/resources/blog": {
    component: Blog,
    title: "Blog & Insights · Laprrk Technology Solutions",
    description: "Engineering, hiring, and corporate training insights from Laprrk Technology Solutions.",
  },
  "/case-studies": {
    component: CaseStudies,
    title: "Case Studies · Laprrk Technology Solutions",
    description: "Real client outcomes: GCC technical hiring, legacy modernization, and corporate engineering training.",
  },
  "/resources/case-studies": {
    component: CaseStudies,
    title: "Case Studies · Laprrk Technology Solutions",
    description: "Real client outcomes: GCC technical hiring, legacy modernization, and corporate engineering training.",
  },
  "/about": {
    component: About,
    title: "About · Laprrk Technology Solutions",
    description: "About Laprrk Technology Solutions LLP. IT services, hiring, and corporate training since 2019 with offices in Greater Noida and Louisville.",
  },
  "/contact": {
    component: Contact,
    title: "Contact · Laprrk Technology Solutions",
    description: "Contact Laprrk Technology Solutions in Greater Noida (India) and Louisville (USA). Direct WhatsApp, email, and phone contact.",
  },
  "/terms": {
    component: Terms,
    title: "Terms of Service · Laprrk Technology Solutions",
    description: "Commercial Terms of Service for Laprrk Technology Solutions LLP covering custom software engineering, practitioner IT hiring, and corporate training engagements.",
  },
  "/terms.html": {
    component: Terms,
    title: "Terms of Service · Laprrk Technology Solutions",
    description: "Commercial Terms of Service for Laprrk Technology Solutions LLP covering custom software engineering, practitioner IT hiring, and corporate training engagements.",
  },
  "/privacy-policy": {
    component: PrivacyPolicy,
    title: "Privacy Policy & Data Protection · Laprrk Technology Solutions",
    description: "Comprehensive Privacy Policy for Laprrk Technology Solutions LLP. Details our zero on-site database architecture, DPDP Act 2023, GDPR, and client confidentiality.",
  },
  "/privacy-policy.html": {
    component: PrivacyPolicy,
    title: "Privacy Policy & Data Protection · Laprrk Technology Solutions",
    description: "Comprehensive Privacy Policy for Laprrk Technology Solutions LLP. Details our zero on-site database architecture, DPDP Act 2023, GDPR, and client confidentiality.",
  },
  "/privacy": {
    component: PrivacyPolicy,
    title: "Privacy Policy & Data Protection · Laprrk Technology Solutions",
    description: "Comprehensive Privacy Policy for Laprrk Technology Solutions LLP. Details our zero on-site database architecture, DPDP Act 2023, GDPR, and client confidentiality.",
  },
};

function syncDocumentMeta(title, description, path) {
  document.title = title;

  // Canonical tag
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  const cleanPath = path === "/" ? "" : path.replace(/\/+$/, "");
  canonical.setAttribute("href", `https://laprrk.com${cleanPath || "/"}`);

  // Meta helper
  const setMeta = (selector, attr, value) => {
    let el = document.querySelector(selector);
    if (!el && value) {
      el = document.createElement("meta");
      if (selector.includes("property=")) {
        el.setAttribute("property", selector.match(/property="([^"]+)"/)[1]);
      } else {
        el.setAttribute("name", selector.match(/name="([^"]+)"/)[1]);
      }
      document.head.appendChild(el);
    }
    if (el && value) el.setAttribute(attr, value);
  };

  if (description) {
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:description"]', "content", description);
  }

  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[name="twitter:title"]', "content", title);
  setMeta('meta[property="og:url"]', "content", `https://laprrk.com${cleanPath || "/"}`);
}

function CurrentPage() {
  const { path } = useRouter();

  // Redirect removed main pages to their respective subpages
  const redirectTarget = REDIRECTS[path];
  if (redirectTarget) {
    return <Redirect to={redirectTarget} />;
  }

  // Dynamic service detail route: /it-services/:slug or /services/:slug
  const isServiceDetail = path.startsWith("/it-services/") || path.startsWith("/services/");
  const serviceSlug = isServiceDetail ? path.replace(/^\/(it-services|services)\//, "") : null;

  // Dynamic hiring detail route: /hiring/:slug
  const isHiringDetail = path.startsWith("/hiring/") && path !== "/hiring/";
  const hiringSlug = isHiringDetail ? path.replace(/^\/hiring\//, "") : null;

  // Dynamic training detail route: /training/:slug
  const isTrainingDetail = path.startsWith("/training/") && path !== "/training/";
  const trainingSlug = isTrainingDetail ? path.replace(/^\/training\//, "") : null;

  const page = PAGES[path];
  const [announcedTitle, setAnnouncedTitle] = useState("");

  useEffect(() => {
    let title = "Laprrk Technology Solutions";
    let desc = "";

    if (serviceSlug) {
      import("./data/servicesData").then(({ getServiceData }) => {
        const data = getServiceData(serviceSlug);
        title = `${data.title} · IT Services · Laprrk Technology Solutions`;
        desc = data.lead || data.headline || "";
        syncDocumentMeta(title, desc, path);
        setAnnouncedTitle(title);
      });
    } else if (hiringSlug) {
      import("./data/hiringData").then(({ getHiringData }) => {
        const data = getHiringData(hiringSlug);
        title = `${data.title} · IT Hiring · Laprrk Technology Solutions`;
        desc = data.lead || data.headline || "";
        syncDocumentMeta(title, desc, path);
        setAnnouncedTitle(title);
      });
    } else if (trainingSlug) {
      import("./data/trainingData").then(({ getTrainingData }) => {
        const data = getTrainingData(trainingSlug);
        title = `${data.title} · Training · Laprrk Technology Solutions`;
        desc = data.lead || data.headline || "";
        syncDocumentMeta(title, desc, path);
        setAnnouncedTitle(title);
      });
    } else {
      title = page ? page.title : "Page not found · Laprrk Technology Solutions";
      desc = page ? page.description : "The requested page could not be found on Laprrk Technology Solutions.";
      syncDocumentMeta(title, desc, path);
      setAnnouncedTitle(title);
    }
  }, [path, page, serviceSlug, hiringSlug, trainingSlug]);

  return (
    <>
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {announcedTitle}
      </div>
      <Suspense fallback={<div className="page-route-fallback" aria-hidden="true" />}>
        {serviceSlug ? (
          <ServiceDetail slug={serviceSlug} />
        ) : hiringSlug ? (
          <HiringDetail slug={hiringSlug} />
        ) : trainingSlug ? (
          <TrainingDetail slug={trainingSlug} />
        ) : (
          (() => {
            const PageComponent = page?.component ?? NotFound;
            return <PageComponent />;
          })()
        )}
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <BookingProvider>
        <Header />
        <main id="main">
          <CurrentPage />
        </main>
        <Footer />
        <BookingModal />
        {/* Development feedback agent - inactive in production */}
        {import.meta.env.DEV && <Agentation />}
      </BookingProvider>
    </RouterProvider>
  );
}
