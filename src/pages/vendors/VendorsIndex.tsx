import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Package, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import { countries, categories, getTotalPages } from "@/data/vendorData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const VendorsIndex = () => (
  <main>
    <SEOHead
      title="Find Construction Material Vendors in India & UAE | Barter Construction"
      description="Browse verified construction material vendors across India & UAE. Compare prices, brands & connect with trusted dealers for steel, RMC, cement & more on Barter Construction."
      canonical="/vendors"
      jsonLd={breadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Vendors", url: "/vendors" },
      ])}
    />
    {/* Hero */}
    <section className="bg-primary section-padding">
      <div className="container-narrow text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">B2B Marketplace</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            Find Construction Material Vendors
          </h1>
          <p className="text-primary-foreground/60 mt-4 max-w-2xl mx-auto font-body">
            Browse verified construction material vendors across India & UAE. Compare prices, brands & connect with trusted dealers on Barter Construction.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-accent" />
              <span className="text-sm font-body">{categories.length} Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-sm font-body">2 Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm font-body">{getTotalPages()}+ Pages</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Categories */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading subtitle="Browse by Category" title="20 Vendor Categories" description="Find the right construction material supplier for your project needs." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link
                to={`/${cat.slug}`}
                className="block bg-card border rounded-xl p-5 hover:shadow-lg hover:border-accent/30 transition-all group"
              >
                <span className="text-2xl mb-3 block">{cat.icon}</span>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{cat.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Countries */}
    {countries.map((country) => (
      <section key={country.slug} className="section-padding bg-secondary">
        <div className="container-narrow">
          <SectionHeading
            subtitle={`Vendors in ${country.name}`}
            title={`Construction Material Vendors in ${country.name}`}
            description={`Browse verified vendors across ${country.states.length} ${country.slug === "india" ? "states" : "emirates"} in ${country.name}.`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {country.states.map((state, i) => (
              <motion.div key={state.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link
                  to={`/${country.slug}/${state.slug}`}
                  className="block bg-card border rounded-xl p-5 hover:shadow-lg hover:border-accent/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">{state.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{state.cities.length} cities • {categories.length} categories</p>
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

    {/* CTA */}
    <section className="bg-primary section-padding">
      <div className="container-narrow text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Are You a Vendor?</h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 font-body">
            List your construction materials on Barter Construction and reach thousands of developers and contractors.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-2">
              Register as Vendor <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </main>
);

export default VendorsIndex;
