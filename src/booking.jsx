import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [request, setRequest] = useState(null);
  const returnFocus = useRef(null);

  const openBooking = useCallback((options = {}) => {
    returnFocus.current = document.activeElement;
    setRequest({ prefill: options.prefill ?? "", topic: options.topic ?? "" });
  }, []);

  const closeBooking = useCallback(() => {
    setRequest(null);
    window.setTimeout(() => {
      if (returnFocus.current instanceof HTMLElement) returnFocus.current.focus();
    }, 0);
  }, []);

  const value = useMemo(
    () => ({ request, openBooking, closeBooking }),
    [request, openBooking, closeBooking]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used inside BookingProvider");
  return context;
}
