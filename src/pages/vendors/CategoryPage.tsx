import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import { findCategory, countries } from "@/data/vendorData";
import VendorBreadcrumb from "@/components/vendors/VendorBreadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const CategoryPage = () => {
  const { category, slug } = useParams<{ category?: string; slug?: string }>();
  const cat = findCategory(category || slug || "");
  if (!cat) return <Navigate to="/vendors" replace />;

  return (
    <main>
      <SEOHead
        title={`${cat.name} - Find Best Dealers & Prices | Barter Construction`}
        description={`${cat.description}. Browse verified ${cat.name.toLowerCase()} across India & UAE on Barter Construction.`}
        canonical={`/${cat.slug}`}
        jsonLd={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Vendors", url: "/vendors" },
          { name: cat.name, url: `/${cat.slug}` },
        ])}
      />
      <section className="bg-primary section-padding">
        <div className="container-narrow">
          <VendorBreadcrumb items={[{ label: "Vendors", path: "/vendors" }, { label: cat.name }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-6">
            <span className="text-6xl mb-4 block">{cat.icon}</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
              {cat.name}
            </h1>
            <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto font-body">{cat.description}</p>
          </motion.div>
        </div>
      </section>

      {countries.map((country) => (
        <section key={country.slug} className="section-padding bg-background">
          <div className="container-narrow">
            <SectionHeading subtitle={country.name} title={`${cat.name} in ${country.name}`} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {country.states.map((state, i) => (
                <motion.div key={state.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                  <Link
                    to={`/${country.slug}/${state.slug}/${cat.slug}`}
                    className="block bg-card border rounded-xl p-5 hover:shadow-lg hover:border-accent/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                          {cat.name} in {state.name}
                        </h3>
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
      ))}

      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">List Your {cat.name} Business</h2>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 font-body">Join Barter Construction and reach thousands of developers.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-2">
                Register Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
