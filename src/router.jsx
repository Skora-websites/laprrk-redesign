import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const RouterContext = createContext(null);

let routePrefetcher = null;

export function registerRoutePrefetcher(fn) {
  routePrefetcher = fn;
}

export function prefetch(to) {
  if (routePrefetcher && typeof to === "string") {
    try {
      routePrefetcher(to);
    } catch {
      // Ignore prefetch errors
    }
  }
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function readLocation() {
  return {
    path: normalizePath(window.location.pathname),
    hash: window.location.hash.replace(/^#/, ""),
  };
}

function isPlainClick(event) {
  return !(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0);
}

export function RouterProvider({ children }) {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const onPop = () => setLocation(readLocation());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to, { replace = false } = {}) => {
    const url = new URL(to, window.location.origin);
    const path = normalizePath(url.pathname);
    const hash = url.hash.replace(/^#/, "");
    const target = `${path}${hash ? `#${hash}` : ""}`;
    if (replace) window.history.replaceState({}, "", target);
    else window.history.pushState({}, "", target);
    setLocation({ path, hash });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash);
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [location]);

  const value = useMemo(() => ({ ...location, navigate }), [location, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) throw new Error("useRouter must be used inside RouterProvider");
  return context;
}

export function Link({ to, onClick, onPointerEnter, onFocus, onTouchStart, children, ...rest }) {
  const { navigate } = useRouter();

  if (to.startsWith("#") || /^(https?:|mailto:|tel:)/i.test(to)) {
    return (
      <a href={to} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  const handlePrefetch = () => {
    prefetch(to);
  };

  const handlePointerEnter = (event) => {
    handlePrefetch();
    onPointerEnter?.(event);
  };

  const handleFocus = (event) => {
    handlePrefetch();
    onFocus?.(event);
  };

  const handleTouchStart = (event) => {
    handlePrefetch();
    onTouchStart?.(event);
  };

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || !isPlainClick(event)) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onFocus={handleFocus}
      onTouchStart={handleTouchStart}
      {...rest}
    >
      {children}
    </a>
  );
}
