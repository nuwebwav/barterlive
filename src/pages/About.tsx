import { motion } from "framer-motion";
import { Users, Target, Eye, Heart } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import teamImg from "@/assets/about-team.jpg";

const values = [
  { icon: Target, title: "Our Mission", desc: "To revolutionize construction through innovative barter systems, enabling seamless resource exchanges that keep projects thriving." },
  { icon: Eye, title: "Our Vision", desc: "To become India's leading barter construction service provider, building trust and quality in every metro city." },
  { icon: Heart, title: "Our Values", desc: "Integrity, quality, and commitment drive everything we do. We believe in honest partnerships and superior craftsmanship." },
  { icon: Users, title: "Our Team", desc: "A dedicated team of 10+ professionals including engineers, architects, and project managers working together." },
];

const About = () => (
  <main>
    <SEOHead
      title="About Barter Constructions - Our Story & Mission"
      description="Learn about Barter Constructions' mission to revolutionize construction through innovative barter systems. 10+ years of experience in residential & commercial projects."
      canonical="/about"
    />
    {/* Header */}
    <section className="bg-primary section-padding">
      <div className="container-narrow text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">Who We Are</h1>
          <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto font-body">Building trust and quality since inception — your reliable barter construction partner.</p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={teamImg} alt="Barter Constructions team" className="rounded-xl shadow-lg w-full" loading="lazy" width={800} height={600} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">Our Story</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">We Build Big Things</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Barter Constructions simplifies cash flow for builders with our innovative barter system, enabling seamless resource exchanges to keep your projects thriving effortlessly.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We take up RCC and finishing work, construction, or lock-and-key residential and commercial projects in exchange for flats in all major metro cities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Contractors gain easy access to resources and opportunities through our user-friendly platform, connecting you with vendors and projects to boost efficiency. Vendors enjoy seamless access to builders and contractors via our network.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <SectionHeading subtitle="What Drives Us" title="Our Core Values" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
