import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import { findCountry, findState, findCategory, categories, countries } from "@/data/vendorData";
import VendorBreadcrumb from "@/components/vendors/VendorBreadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const StateCategoryPage = () => {
  const { country, state, category, slug } = useParams<{ country: string; state: string; category?: string; slug?: string }>();
  const countryData = findCountry(country || "");
  const stateData = findState(country || "", state || "");
  const cat = findCategory(category || slug || "");
  if (!countryData || !stateData || !cat) return <Navigate to="/vendors" replace />;

  return (
    <main>
      <SEOHead
        title={`${cat.name} in ${stateData.name} - Best Dealers & Prices | Barter Construction`}
        description={`Find the best ${cat.name.toLowerCase()} in ${stateData.name}, ${countryData.name}. Compare prices, brands & verified dealers on Barter Construction.`}
        canonical={`/${countryData.slug}/${stateData.slug}/${cat.slug}`}
        jsonLd={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Vendors", url: "/vendors" },
          { name: countryData.name, url: `/${countryData.slug}` },
          { name: stateData.name, url: `/${countryData.slug}/${stateData.slug}` },
          { name: cat.name, url: `/${countryData.slug}/${stateData.slug}/${cat.slug}` },
        ])}
      />
      <section className="bg-primary section-padding">
        <div className="container-narrow">
          <VendorBreadcrumb items={[
            { label: "Vendors", path: "/vendors" },
            { label: countryData.name, path: `/${countryData.slug}` },
            { label: stateData.name, path: `/${countryData.slug}/${stateData.slug}` },
            { label: cat.name },
          ]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-6">
            <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">{stateData.name}</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
              Best {cat.name} in {stateData.name}, {countryData.name}
            </h1>
            <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto font-body">
              Find the best {cat.name.toLowerCase()} in {stateData.name}, {countryData.name}. Compare prices, brands & verified dealers on Barter Construction.
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
                      to={`/${countryData.slug}/${stateData.slug}/${c.slug}`}
                      className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all text-[13px] group border border-transparent ${
                        c.slug === cat.slug
                          ? "bg-accent text-accent-foreground border-accent"
                          : "hover:bg-accent/10 hover:text-accent hover:border-accent/10"
                      }`}
                    >
                      <span className="text-xl group-hover:scale-125 transition-transform duration-300 transform-gpu">{c.icon}</span>
                      <span className="font-semibold truncate">{c.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content: Info & Cities */}
            <div className="lg:w-3/4 space-y-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionHeading subtitle="Why Choose Us" title={`${cat.name} in ${stateData.name}`} />
                  <ul className="space-y-3 mt-6">
                    {[
                      `Verified ${cat.name.toLowerCase()} across ${stateData.name}`,
                      "Compare prices from multiple dealers",
                      "Quality-checked brands and materials",
                      "Direct connection with suppliers",
                      "Bulk order discounts available",
                      "Delivery across all cities",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary rounded-2xl p-8 text-center border">
                  <span className="text-6xl block mb-4">{cat.icon}</span>
                  <h3 className="font-heading text-xl font-bold">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{cat.description}</p>
                </div>
              </div>

              <div className="pt-8 border-t">
                <SectionHeading subtitle="Browse by City" title={`${cat.name} in Cities of ${stateData.name}`} />
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {stateData.cities.map((city, i) => (
                    <motion.div key={city.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                      <Link
                        to={`/${countryData.slug}/${stateData.slug}/${city.slug}/${cat.slug}`}
                        className="block bg-card border rounded-2xl p-5 hover:shadow-xl hover:border-accent/30 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-accent shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                              {cat.name} in {city.name}
                            </h3>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Browse Other States & Regions */}
      <section className="section-padding bg-background border-t">
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
                          : "bg-secondary hover:bg-accent/10 hover:border-accent/50 text-muted-foreground hover:text-accent"
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

      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Get a Quote for {cat.name}</h2>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 font-body">Connect with verified vendors in {stateData.name} today.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-2">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default StateCategoryPage;
