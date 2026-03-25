import { useParams, Navigate } from "react-router-dom";
import { findCountry, isCategory } from "@/data/vendorData";
import CategoryPage from "@/pages/vendors/CategoryPage";
import CountryPage from "@/pages/vendors/CountryPage";

/**
 * Resolves ambiguous /:slug routes.
 * Could be a category (e.g. /steel-suppliers) or a country (e.g. /india).
 */
const TopLevelResolver = () => {
  const { slug } = useParams<{ slug: string }>();
  const normalizedSlug = (slug || "").toLowerCase().replace(/\s+/g, "-");

  if (isCategory(normalizedSlug)) {
    return <CategoryPage />;
  }

  const country = findCountry(normalizedSlug);
  if (country) {
    return <CountryPage />;
  }

  return <Navigate to="/vendors" replace />;
};

export default TopLevelResolver;
