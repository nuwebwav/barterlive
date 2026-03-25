import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Alpesh Sharma",
    role: "Contractor",
    text: "We had a good experience with Barter Constructions. The vendor services provided were up to the mark and very reliable. The contract completed was a great success.",
    stars: 5,
  },
  {
    name: "Apkisha Tiwari",
    role: "Builder",
    text: "I worked with Barter Constructions, and they gave me the assurance that the contract was in good hands. They stood by their commitment and completed a phenomenal job.",
    stars: 5,
  },
  {
    name: "Mira Shah",
    role: "Contractor",
    text: "Quality work, Good productivity and Profitability Business. Would highly recommend Barter Constructions for anyone looking for reliable construction partnerships.",
    stars: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Vendor",
    text: "The barter system is innovative and truly works. Barter Constructions made the entire process smooth and transparent. We've been partners for multiple projects now.",
    stars: 5,
  },
  {
    name: "Priya Mehta",
    role: "Builder",
    text: "Exceptional service quality and timely delivery. The team at Barter Constructions understands the value of commitment and delivers outstanding results every time.",
    stars: 4,
  },
  {
    name: "Sunil Patel",
    role: "Contractor",
    text: "Working with Barter Constructions has been a game-changer for our business. Their unique approach to project management and resource exchange is unparalleled.",
    stars: 5,
  },
];

const Testimonials = () => (
  <main>
    <SEOHead
      title="Client Testimonials & Reviews | Barter Constructions"
      description="Read what our clients say about Barter Constructions. Verified reviews from contractors, developers, and homeowners across India."
      canonical="/testimonials"
    />
    <section className="bg-primary section-padding">
      <div className="container-narrow text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">What Our Clients Say</h1>
          <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto font-body">Real stories from builders, contractors, and vendors who trust Barter Constructions.</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} className={`w-4 h-4 ${si < t.stars ? "text-accent fill-accent" : "text-border"}`} />
                ))}
              </div>
              <div>
                <p className="font-heading font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Testimonials;
