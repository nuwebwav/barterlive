import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Home as HomeIcon, Wrench, Gem, Shield, Clock, Award } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import HeroSlider from "@/components/HeroSlider";

import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import customImg from "@/assets/project-custom.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const services = [
  { icon: HomeIcon, title: "Residential Construction", desc: "Premium homes built with precision, quality materials, and modern design principles." },
  { icon: Building2, title: "Commercial Construction", desc: "State-of-the-art commercial spaces designed for functionality and aesthetic appeal." },
  { icon: Wrench, title: "Renovations & Remodeling", desc: "Transform existing spaces with expert renovation services that breathe new life." },
  { icon: Gem, title: "Custom Building Projects", desc: "Bespoke construction solutions tailored to your unique vision and requirements." },
];

const whyUs = [
  { icon: Award, title: "Experience", desc: "Decades of expertise in barter-based construction services." },
  { icon: Shield, title: "Honest & Dependable", desc: "Transparent processes with contractors and vendors you can trust." },
  { icon: Gem, title: "Superior Quality", desc: "Premium materials and craftsmanship in every project we deliver." },
  { icon: Clock, title: "Competitive Rates", desc: "Fair pricing driven by innovative barter exchange models." },
];

const stats = [
  { value: "10+", label: "Team Members" },
  { value: "24+", label: "Projects" },
  { value: "95+", label: "Contractors" },
  { value: "129+", label: "Barter Vendors" },
];

const projects = [
  { img: residentialImg, title: "Modern Residence", category: "Residential" },
  { img: commercialImg, title: "Corporate Tower", category: "Commercial" },
  { img: renovationImg, title: "Kitchen Remodel", category: "Renovation" },
  { img: customImg, title: "Luxury Villa", category: "Custom" },
];

const Index = () => (
  <main>
    <SEOHead
      title="Barter Constructions - Build Easy, Sell Easy"
      description="Barter Constructions offers innovative barter-based construction services for residential, commercial, and custom building projects across major metro cities in India."
      canonical="/"
    />
    
    {/* Hero Slider */}
    <HeroSlider />

    {/* Stats */}
    <section className="bg-primary">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <div className="text-accent font-heading text-4xl md:text-5xl font-bold">{s.value}</div>
              <div className="text-primary-foreground/60 text-sm mt-1 font-body">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading subtitle="What We Do" title="Our Services" description="From residential homes to commercial complexes, we deliver excellence across every category of construction." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group bg-card border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="font-body gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <SectionHeading subtitle="Why Choose Us" title="Benefits of Barter Constructions" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="text-center p-6"
            >
              <div className="w-14 h-14 mx-auto bg-accent/15 rounded-full flex items-center justify-center mb-4">
                <w.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Projects Preview */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading subtitle="Our Work" title="Featured Projects" description="Browse through our portfolio of completed residential, commercial, and custom construction projects." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img src={p.img} alt={p.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{p.category}</span>
                  <h3 className="text-primary-foreground font-heading font-semibold text-lg">{p.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects">
            <Button variant="outline" className="font-body gap-2">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary section-padding">
      <div className="container-narrow text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Start Your Project?</h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 font-body">Get in touch with us today for a free consultation and quote. Let's build something extraordinary together.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-2">
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Index;
