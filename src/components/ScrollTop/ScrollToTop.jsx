import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Reset standard browser scroll
    window.scrollTo(0, 0);

    // 2. Handle Lenis reset
    if (window.lenis) {
      // Jump to top immediately
      window.lenis.scrollTo(0, { immediate: true });
      
      // Force Lenis to recalculate page height immediately
      // This solves issues where a long page transitions to a short page
      window.lenis.resize();
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;