import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEOHead, { breadcrumbJsonLd, localBusinessJsonLd } from "@/components/SEOHead";
import { findCountry, findState, findCity, findCategory, categories, countries } from "@/data/vendorData";
import VendorBreadcrumb from "@/components/vendors/VendorBreadcrumb";

const CityCategoryPage = () => {
  const { country, state, city, category } = useParams<{ country: string; state: string; city: string; category: string }>();
  const countryData = findCountry(country || "");
  const stateData = findState(country || "", state || "");
  const cityData = findCity(country || "", state || "");
  const cat = findCategory(category || "");
  if (!countryData || !stateData || !cityData || !cat) return <Navigate to="/vendors" replace />;

  return (
    <main>
      <SEOHead
        title={`Best ${cat.name} in ${cityData.name}, ${stateData.name} - Verified Dealers & Best Prices (2026) | Barter Construction`}
        description={`Find the best ${cat.name.toLowerCase()} in ${cityData.name}, ${stateData.name}. Compare prices, brands & verified dealers on Barter Construction.`}
        canonical={`/${countryData.slug}/${stateData.slug}/${cityData.slug}/${cat.slug}`}
        jsonLd={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Vendors", url: "/vendors" },
          { name: countryData.name, url: `/${countryData.slug}` },
          { name: stateData.name, url: `/${countryData.slug}/${stateData.slug}` },
          { name: cityData.name, url: `/${countryData.slug}/${stateData.slug}/${cityData.slug}` },
          { name: cat.name, url: `/${countryData.slug}/${stateData.slug}/${cityData.slug}/${cat.slug}` },
        ])}
      />
      <section className="bg-primary section-padding">
        <div className="container-narrow">
          <VendorBreadcrumb items={[
            { label: "Vendors", path: "/vendors" },
            { label: countryData.name, path: `/${countryData.slug}` },
            { label: stateData.name, path: `/${countryData.slug}/${stateData.slug}` },
            { label: cityData.name, path: `/${countryData.slug}/${stateData.slug}/${cityData.slug}` },
            { label: cat.name },
          ]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-6">
            <span className="text-6xl block mb-4">{cat.icon}</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
              Best {cat.name} in {cityData.name}, {stateData.name}
            </h1>
            <p className="text-primary-foreground/60 mt-4 max-w-2xl mx-auto font-body">
              Find the best {cat.name.toLowerCase()} in {cityData.name}, {countryData.name}. Compare prices, brands & verified dealers on Barter Construction.
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
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/${countryData.slug}/${stateData.slug}/${cityData.slug}/${c.slug}`}
                      className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all text-[13px] group border border-transparent ${
                        c.slug === cat.slug
                          ? "bg-accent text-accent-foreground border-accent shadow-sm"
                          : "hover:bg-accent/10 hover:text-accent hover:border-accent/10"
                      }`}
                    >
                      <span className="text-xl group-hover:scale-125 transition-transform duration-300 transform-gpu">{c.icon}</span>
                      <span className="font-semibold truncate">{c.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 bg-card border rounded-xl p-6 hidden lg:block">
                <h3 className="font-heading font-bold text-lg mb-4">Need Help?</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="tel:+917777045007" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                      <Phone className="w-4 h-4 text-accent" />
                      +91 77770 45007
                    </a>
                  </li>
                  <li>
                    <a href="mailto:barterconstructions@gmail.com" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                      <Mail className="w-4 h-4 text-accent" />
                      barterconstructions@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Content: Info & Vendors */}
            <div className="lg:w-3/4 space-y-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionHeading subtitle="Verified Vendors" title={`${cat.name} in ${cityData.name}`} />
                  <div className="mt-6">
                    <h2 className="font-heading text-2xl font-bold mb-4">Why Choose Barter Construction?</h2>
                    <ul className="space-y-3">
                      {[
                        { title: "Verified Dealers", desc: `All ${cat.name.toLowerCase()} are quality-verified.` },
                        { title: "Best Prices", desc: "Compare prices from multiple vendors." },
                        { title: "Bulk Discounts", desc: "Special rates for large orders." },
                        { title: "Fast Delivery", desc: "Quick delivery across the city." },
                      ].map((f) => (
                        <li key={f.title} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block">{f.title}</span>
                            <span className="text-muted-foreground">{f.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-secondary rounded-2xl p-8 text-center border">
                  <span className="text-6xl block mb-4">{cat.icon}</span>
                  <h3 className="font-heading text-xl font-bold">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{cat.description}</p>
                </div>
              </div>

              <div className="pt-8 border-t">
                <SectionHeading subtitle="Verified Vendors" title={`${cat.name} in ${cityData.name}`} />
                <div className="bg-secondary/30 border border-dashed border-border rounded-xl p-12 text-center mt-8">
                  <span className="text-5xl block mb-4">{cat.icon}</span>
                  <h3 className="font-heading text-xl font-bold mb-2">Vendor Listings Coming Soon</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    We're actively onboarding {cat.name.toLowerCase()} in {cityData.name}. Contact us to get connected with verified suppliers.
                  </p>
                  <Link to="/contact">
                    <Button className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 font-body gap-2">
                      Contact for Vendors <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Browse Other States & Regions */}
      <section className="section-padding bg-secondary/50 border-t">
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
    </main>
  );
};

export default CityCategoryPage;
