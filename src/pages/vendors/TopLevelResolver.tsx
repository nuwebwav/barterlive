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

  if (isCategory(slug || "")) {
    return <CategoryPage />;
  }

  const country = findCountry(slug || "");
  if (country) {
    return <CountryPage />;
  }

  return <Navigate to="/vendors" replace />;
};

export default TopLevelResolver;
