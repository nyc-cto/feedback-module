import { useEffect, useState } from "react";
import { useGA4React } from "ga-4-react";

export default function googleAnalytics() {
  const ga = useGA4React();

  const trackFutureResearch = () => {
    ga &&
      ga.event(
        "future_research",
        "user agreed to participate in research in the future"
      );
  };

  const pageTitleAsScreen = (screenTitle) => {
    ga && ga.pageview(window.location.pathname, window.location, screenTitle);
  };

  const pageChange = (currentPage, nextPage) => {
    ga &&
      ga.gtag("event", "page_change", {
        current_page_title: currentPage,
        next_page: nextPage,
      });
  };

  const userViewedModule = () => {
    ga && ga.event("module_viewed", "module appeared on user screen");
  };

  const moduleOnScreen = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const [userViewed, setUserViewed] = useState(false);

    const checkVisible = () => {
      if (!userViewed && isIntersecting) {
        console.log("module in view");
        setUserViewed(true);
        userViewedModule();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      checkVisible()
    );

    useEffect(() => {
      observer.observe(ref.current);
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect();
      };
    }, []);
  };

  return {
    trackFutureResearch,
    pageTitleAsScreen,
    pageChange,
    moduleOnScreen,
  };
}