import { useLocation } from "react-router";
import { useEffect, useRef } from "react";

export function HashScroll() {
  const location = useLocation();
  const pathname = useRef("");

  useEffect(() => {
    history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const element = document.getElementById(location.hash.substring(1));
    const initial = location.pathname !== pathname.current;
    const behavior = initial ? "instant" : "smooth";
    if (element) {
      window.scrollTo({ top: element.offsetTop - 32, behavior });
    } else {
      window.scrollTo({ top: 0, behavior });
    }
    pathname.current = location.pathname;
  }, [location]);

  return null;
}
