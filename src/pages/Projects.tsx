import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import customImg from "@/assets/project-custom.jpg";

const allProjects = [
  { id: 1, img: residentialImg, title: "Modern Family Home", category: "Residential", desc: "A contemporary 4-bedroom residence with premium finishes and landscaped gardens." },
  { id: 2, img: commercialImg, title: "Corporate Office Tower", category: "Commercial", desc: "A 12-story commercial complex with state-of-the-art facilities and glass facade." },
  { id: 3, img: renovationImg, title: "Luxury Kitchen Remodel", category: "Renovation", desc: "Complete kitchen transformation with marble countertops and modern appliances." },
  { id: 4, img: customImg, title: "Waterfront Villa", category: "Custom", desc: "A bespoke luxury villa with infinity pool and panoramic views." },
  { id: 5, img: residentialImg, title: "Urban Apartment Complex", category: "Residential", desc: "Multi-unit residential development with modern amenities and green spaces." },
  { id: 6, img: commercialImg, title: "Retail Shopping Center", category: "Commercial", desc: "A modern retail space designed for maximum foot traffic and tenant satisfaction." },
  { id: 7, img: renovationImg, title: "Heritage Building Restoration", category: "Renovation", desc: "Careful restoration preserving historical character while adding modern conveniences." },
  { id: 8, img: customImg, title: "Eco-Friendly Residence", category: "Custom", desc: "Sustainable custom home with solar panels, rainwater harvesting, and green roof." },
];

const categories = ["All", "Residential", "Commercial", "Renovation", "Custom"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <main>
      <SEOHead
        title="Our Projects - Construction Portfolio | Barter Constructions"
        description="View Barter Constructions' portfolio of completed residential, commercial, renovation, and custom building projects across India."
        canonical="/projects"
      />
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">Portfolio</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">Our Projects</h1>
            <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto font-body">Explore our portfolio of completed projects across residential, commercial, and custom categories.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all ${
                  active === c ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                    <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">{p.category}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                    <Link to="/contact" className="text-accent text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all font-body">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Have a Project in Mind?</h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 font-body">Let's discuss your requirements and bring your vision to life.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-2">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Projects;
