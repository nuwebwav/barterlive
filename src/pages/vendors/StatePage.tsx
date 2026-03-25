import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import { findCountry, findState, categories, countries } from "@/data/vendorData";
import VendorBreadcrumb from "@/components/vendors/VendorBreadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const StatePage = () => {
  const { country, state } = useParams<{ country: string; state: string }>();
  const countryData = findCountry(country || "");
  const stateData = findState(country || "", state || "");
  if (!countryData || !stateData) return <Navigate to="/vendors" replace />;

  return (
    <main>
      <SEOHead
        title={`Construction Material Vendors in ${stateData.name}, ${countryData.name} | Barter Construction 2026`}
        description={`Browse verified construction material vendors in ${stateData.name}, ${countryData.name}. Find best prices for steel, RMC, cement & more.`}
        canonical={`/${countryData.slug}/${stateData.slug}`}
        jsonLd={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Vendors", url: "/vendors" },
          { name: countryData.name, url: `/${countryData.slug}` },
          { name: stateData.name, url: `/${countryData.slug}/${stateData.slug}` },
        ])}
      />
      <section className="bg-primary section-padding">
        <div className="container-narrow">
          <VendorBreadcrumb items={[
            { label: "Vendors", path: "/vendors" },
            { label: countryData.name, path: `/${countryData.slug}` },
            { label: stateData.name },
          ]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-6">
            <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">{stateData.name}, {countryData.name}</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
              Top Construction Material Vendors & Suppliers in {stateData.name}
            </h1>
            <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto font-body">
              Browse verified construction material vendors in {stateData.name}, {countryData.name}. Find steel, RMC, cement & more suppliers.
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
                      to={`/${countryData.slug}/${stateData.slug}/${cat.slug}`}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-accent/10 hover:text-accent transition-all text-[13px] group border border-transparent hover:border-accent/10"
                    >
                      <span className="text-xl group-hover:scale-125 transition-transform duration-300 transform-gpu">{cat.icon}</span>
                      <span className="font-semibold truncate">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content: Cities & Brands */}
            <div className="lg:w-3/4 space-y-16">
              {/* H2: Top Cities for Vendors */}
              <div>
                <SectionHeading 
                  subtitle="Top Cities for Vendors" 
                  title={`Construction Hubs in ${stateData.name}`} 
                  className="mb-8"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  {stateData.cities.map((city, i) => (
                    <motion.div key={city.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                      <Link
                        to={`/${countryData.slug}/${stateData.slug}/${city.slug}`}
                        className="block bg-card border rounded-2xl p-5 hover:shadow-xl hover:border-accent/30 transition-all group relative overflow-hidden"
                      >
                        <div className="flex items-center gap-4 relative z-10">
                          <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                            <MapPin className="w-6 h-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors text-lg">{city.name}</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">{categories.length} Material Categories</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground translate-x-0 group-hover:translate-x-1 group-hover:text-accent transition-all" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* H2: Leading Brands Available */}
              <div className="pt-8 border-t">
                <SectionHeading 
                  subtitle="Trusted Partners" 
                  title={`Leading Brands in ${stateData.name}`} 
                  className="mb-8"
                />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {["Tata Steel", "UltraTech", "ACC Limited", "JSW Steel", "Ambuja", "Asian Paints", "Berger", "Havells"].map((brand, i) => (
                    <motion.div key={brand} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                      <div className="bg-secondary/30 border border-border/50 rounded-xl p-4 text-center hover:bg-card hover:border-accent/20 hover:shadow-sm transition-all">
                        <h3 className="font-heading font-bold text-xs text-foreground uppercase tracking-wider">{brand}</h3>
                        <p className="text-[10px] text-muted-foreground mt-1 uppercase">State verified</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Browse Other States & Regions */}
      <section className="section-padding bg-secondary/50">
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

export default StatePage;
