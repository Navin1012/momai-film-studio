import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // run BEFORE paint → no lag, no scroll jump
    window.scrollTo(10, 0);
  }, [pathname]);

  return null;
}
