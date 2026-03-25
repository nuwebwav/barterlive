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

  // Normalize slugs: lower case and replace spaces with hyphens
  const normalizedCountry = (country || "").toLowerCase().replace(/\s+/g, "-");
  const normalizedState = (state || "").toLowerCase().replace(/\s+/g, "-");
  const normalizedSlug = (slug || "").toLowerCase().replace(/\s+/g, "-");

  if (isCategory(normalizedSlug)) {
    return <StateCategoryPage />;
  }

  const stateData = findState(normalizedCountry, normalizedState);
  const cityExists = stateData?.cities.some((c) => c.slug === normalizedSlug);

  if (cityExists) {
    return <CityPage />;
  }

  return <Navigate to="/vendors" replace />;
};

export default StateSlugResolver;
