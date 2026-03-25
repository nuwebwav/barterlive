import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import { findCountry, categories } from "@/data/vendorData";
import VendorBreadcrumb from "@/components/vendors/VendorBreadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const CountryPage = () => {
  const { country, slug } = useParams<{ country?: string; slug?: string }>();
  const data = findCountry(country || slug || "");
  if (!data) return <Navigate to="/vendors" replace />;

  const stateLabel = data.slug === "india" ? "states" : "emirates";

  return (
    <main>
      <SEOHead
        title={`Construction Material Vendors in ${data.name} | Barter Construction`}
        description={`Browse verified construction material vendors across ${data.states.length} ${stateLabel} in ${data.name}. Find steel, RMC, cement & more suppliers on Barter Construction.`}
        canonical={`/${data.slug}`}
        jsonLd={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Vendors", url: "/vendors" },
          { name: data.name, url: `/${data.slug}` },
        ])}
      />
      <section className="bg-primary section-padding">
        <div className="container-narrow">
          <VendorBreadcrumb items={[{ label: "Vendors", path: "/vendors" }, { label: data.name }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-6">
            <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">{data.name}</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
              Top Construction Material Vendors & Barter Construction 2026
            </h1>
            <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto font-body">
              Browse verified construction material vendors across {data.states.length} {stateLabel} in {data.name}.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading
            subtitle={data.slug === "india" ? "Browse by State" : "Browse by Emirate"}
            title={`${data.slug === "india" ? "States" : "Emirates"} in ${data.name}`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.states.map((state, i) => (
              <motion.div key={state.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link
                  to={`/${data.slug}/${state.slug}`}
                  className="block bg-card border rounded-xl p-5 hover:shadow-lg hover:border-accent/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">{state.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{state.cities.length} cities</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <SectionHeading subtitle="Browse by Category" title="Vendor Categories" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={cat.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link
                  to={`/${cat.slug}`}
                  className="block bg-card border rounded-xl p-4 hover:shadow-md hover:border-accent/30 transition-all group"
                >
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="font-heading font-semibold text-sm mt-2 text-foreground group-hover:text-accent transition-colors">{cat.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryPage;
