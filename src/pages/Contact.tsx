import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main>
      <SEOHead
        title="Contact Barter Constructions - Get in Touch"
        description="Contact Barter Constructions for construction services, vendor inquiries, and project consultations. Call +91 77770 45007 or email us."
        canonical="/contact"
      />
      <section className="bg-primary section-padding">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-body font-semibold text-sm tracking-widest uppercase">Get in Touch</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">Contact Us</h1>
            <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto font-body">Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
              
              {[
                { icon: MapPin, label: "Address", value: "Prasad Chamber, Tata Road 2, Opera House, Mumbai-04" },
                { icon: Phone, label: "Phone", value: "+91 77770 45007", href: "tel:+917777045007" },
                { icon: Mail, label: "Email", value: "barterconstructions@gmail.com", href: "mailto:barterconstructions@gmail.com" },
                { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-medium hover:text-accent transition-colors">{c.value}</a>
                    ) : (
                      <p className="font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border">
                <iframe
                  title="Barter Constructions Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.159!2d72.8168!3d18.9575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU3JzI3LjAiTiA3MsKwNDknMDAuNSJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-card border rounded-xl p-6 md:p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Request a Free Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                      <Input placeholder="John Doe" required className="bg-secondary border-0" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <Input type="email" placeholder="john@example.com" required className="bg-secondary border-0" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone</label>
                      <Input type="tel" placeholder="+91 XXXXX XXXXX" className="bg-secondary border-0" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Subject</label>
                      <Input placeholder="Project inquiry" className="bg-secondary border-0" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message *</label>
                    <Textarea placeholder="Tell us about your project..." required rows={5} className="bg-secondary border-0 resize-none" />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-2" size="lg">
                    {loading ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
