import { useParams, Navigate } from "react-router-dom";
import { findState, isCategory } from "@/data/vendorData";
import StateCategoryPage from "@/pages/vendors/StateCategoryPage";
import CityPage from "@/pages/vendors/CityPage";

/**
 * Resolves ambiguous /:country/:state/:slug routes.
 * The slug could be either a category or a city.
 */
const StateSlugResolver = () => {
  const { country, state, slug } = useParams<{ country: string; state: string; slug: string }>();

  if (isCategory(slug || "")) {
    return <StateCategoryPage />;
  }

  const stateData = findState(country || "", state || "");
  const cityExists = stateData?.cities.some((c) => c.slug === slug);

  if (cityExists) {
    return <CityPage />;
  }

  return <Navigate to="/vendors" replace />;
};

export default StateSlugResolver;
