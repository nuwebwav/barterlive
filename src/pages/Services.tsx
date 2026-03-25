import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Home as HomeIcon, Building2, Wrench, Gem, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import customImg from "@/assets/project-custom.jpg";

const services = [
  {
    icon: HomeIcon,
    title: "Residential Construction",
    desc: "From individual homes to residential complexes, we build with precision and quality. Our barter model makes it easier for builders to manage cash flow while delivering premium residences.",
    img: residentialImg,
    features: ["Custom home design", "Multi-story residential buildings", "Gated community development", "Interior finishing & fit-outs"],
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "State-of-the-art commercial spaces designed for maximum functionality. We handle everything from office buildings to retail complexes with our proven barter construction approach.",
    img: commercialImg,
    features: ["Office buildings", "Retail spaces", "Industrial facilities", "Mixed-use developments"],
  },
  {
    icon: Wrench,
    title: "Renovations & Remodeling",
    desc: "Transform existing spaces with expert renovation services. Whether it's a complete overhaul or targeted improvements, we bring new life to your property.",
    img: renovationImg,
    features: ["Complete home renovation", "Kitchen & bathroom remodels", "Structural modifications", "Interior upgrades"],
  },
  {
    icon: Gem,
    title: "Custom Building Projects",
    desc: "Bespoke construction solutions tailored to your unique vision. We work closely with clients to bring custom architectural dreams into reality through our innovative barter system.",
    img: customImg,
    features: ["Luxury villas", "Unique architectural projects", "Specialty structures", "Turnkey solutions"],
  },
];

const Services = () => (
  <main>
    <SEOHead
      title="Construction Services - Residential, Commercial & Custom | Barter Constructions"
      description="Explore Barter Constructions' services: residential construction, commercial projects, renovations, and custom building solutions across India."
      canonical="/services"
    />
    <section className="bg-primary section-padding">
      <div className="container-narrow text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">What We Offer</h1>
          <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto font-body">Comprehensive construction services powered by our innovative barter system.</p>
        </motion.div>
      </div>
    </section>

    {services.map((s, i) => (
      <section key={s.title} className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
        <div className="container-narrow">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={i % 2 !== 0 ? "lg:col-start-2" : ""}
            >
              <img src={s.img} alt={s.title} className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" loading="lazy" width={800} height={600} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-body gap-2">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    ))}
  </main>
);

export default Services;
