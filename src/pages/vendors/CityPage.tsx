import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import { findCountry, findState, findCity, categories, countries } from "@/data/vendorData";
import VendorBreadcrumb from "@/components/vendors/VendorBreadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const CityPage = () => {
  const { country, state, city, slug } = useParams<{ country: string; state: string; city?: string; slug?: string }>();
  const countryData = findCountry(country || "");
  const stateData = findState(country || "", state || "");
  const cityData = findCity(country || "", state || "", city || slug || "");
  if (!countryData || !stateData || !cityData) return <Navigate to="/vendors" replace />;

  return (
    <main>
      <SEOHead
        title={`Construction Material Vendors in ${cityData.name}, ${stateData.name} | Barter Construction`}
        description={`Discover verified construction material vendors in ${cityData.name}, ${stateData.name}. Find best prices for steel, cement, tiles, plumbing & more.`}
        canonical={`/${countryData.slug}/${stateData.slug}/${cityData.slug}`}
        jsonLd={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Vendors", url: "/vendors" },
          { name: countryData.name, url: `/${countryData.slug}` },
          { name: stateData.name, url: `/${countryData.slug}/${stateData.slug}` },
          { name: cityData.name, url: `/${countryData.slug}/${stateData.slug}/${cityData.slug}` },
        ])}
      />
      <section className="bg-primary section-padding">
        <div className="container-narrow">
          <VendorBreadcrumb items={[
            { label: "Vendors", path: "/vendors" },
            { label: countryData.name, path: `/${countryData.slug}` },
            { label: stateData.name, path: `/${countryData.slug}/${stateData.slug}` },
            { label: cityData.name },
          ]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-6">
            <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">{cityData.name}, {stateData.name}</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
              Find Verified Construction Material Vendors in {cityData.name}
            </h1>
            <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto font-body">
              Discover top construction material vendors in {cityData.name}, {stateData.name}. Steel, cement, tiles, plumbing & more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar: Material Suppliers (20 Categories) */}
            <aside className="lg:w-1/4 shrink-0">
              <div className="sticky top-28 bg-card border rounded-2xl p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-2 mb-6 border-b pb-4">
                  <div className="w-2 h-6 bg-accent rounded-full" />
                  <h2 className="font-heading font-bold text-lg text-foreground uppercase tracking-tight">Suppliers</h2>
                </div>
                <div className="space-y-1 lg:max-h-[65vh] lg:overflow-y-auto pr-2 custom-scrollbar">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/${countryData.slug}/${stateData.slug}/${cityData.slug}/${cat.slug}`}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-accent/10 hover:text-accent transition-all text-[13px] group border border-transparent hover:border-accent/10"
                    >
                      <span className="text-xl group-hover:scale-125 transition-transform duration-300 transform-gpu">{cat.icon}</span>
                      <span className="font-semibold truncate">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content: Nearby Cities & Info */}
            <div className="lg:w-3/4 space-y-16">
              {/* Category Grid Section (Mini) - Optional or removed in favor of sidebar */}
              {/* For consistency with user's request, we'll keep the top cities/areas here */}
              
              {/* H2: Best Vendor Areas & Markets */}
              <div>
                <SectionHeading 
                  subtitle="Explore Nearby" 
                  title={`Best Vendor Areas & Markets in ${cityData.name}`} 
                  className="mb-8"
                />
                <div className="flex flex-wrap gap-3">
                  {stateData.cities
                    .filter((c) => c.slug !== cityData.slug)
                    .map((c) => (
                      <Link
                        key={c.slug}
                        to={`/${countryData.slug}/${stateData.slug}/${c.slug}`}
                        className="bg-card border rounded-lg px-4 py-2 text-sm font-body hover:border-accent/30 hover:text-accent transition-all shadow-sm"
                      >
                        {c.name}
                      </Link>
                    ))}
                </div>
              </div>

              {/* H2: Verified Vendor Directory */}
              <div className="pt-8 border-t">
                <SectionHeading subtitle="Coming Soon" title={`Verified Vendor Directory for ${cityData.name}`} />
                <div className="bg-secondary/30 border border-dashed border-border rounded-xl p-12 text-center mt-8">
                  <h3 className="font-heading text-xl font-bold mb-2">Vendor Directory Coming Soon</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    We're onboarding verified vendors in {cityData.name}. Contact us to get connected with trusted suppliers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Browse Other States & Regions */}
      <section className="section-padding bg-secondary/50 border-y">
        <div className="container-narrow">
          <SectionHeading subtitle="Explore More" title="Browse Other States & Regions" />
          <div className="space-y-12">
            {countries.map((c) => (
              <div key={c.slug}>
                <h3 className="font-heading font-semibold text-xl mb-6 flex items-center gap-2">
                  <span className="text-accent border-b-2 border-accent pb-1">{c.name}</span> Regions
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {c.states.map((st) => (
                    <Link
                      key={st.slug}
                      to={`/${c.slug}/${st.slug}`}
                      className={`text-[13px] py-2.5 px-3 rounded-md transition-all text-center border truncate font-medium ${
                        st.slug === stateData.slug && c.slug === countryData.slug
                          ? "bg-accent text-accent-foreground border-accent shadow-sm"
                          : "bg-background hover:bg-accent/10 hover:border-accent/50 text-muted-foreground hover:text-accent"
                      }`}
                    >
                      {st.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Need Vendors in {cityData.name}?</h2>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 font-body">Contact us to connect with verified construction material suppliers.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CityPage;
