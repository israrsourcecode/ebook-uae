import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Standard browser scroll
    window.scrollTo(0, 0);
    
    // 2. Lenis scroll (with a slight delay to ensure the page has rendered)
    const timer = setTimeout(() => {
        if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
        }
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;