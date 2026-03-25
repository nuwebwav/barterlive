import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-construction.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import renovationImg from "@/assets/project-renovation.jpg";
import customImg from "@/assets/project-custom.jpg";

const slides = [
  {
    image: heroImg,
    subtitle: "Build Easy • Sell Easy",
    title: "WE BUILD BIG THINGS",
    description: "We are leading real estate barter construction services provider in major metro cities.",
  },
  {
    image: residentialImg,
    subtitle: "Innovation in Construction",
    title: "Providing Easy Cash Flow For Builder",
    description: "Our barter system simplifies resource exchanges, keeping your projects thriving effortlessly.",
  },
  {
    image: commercialImg,
    subtitle: "Efficiency & Excellence",
    title: "Simple Accessibility For Contractors",
    description: "Connect with vendors and projects through our user-friendly platform to boost your efficiency.",
  },
  {
    image: renovationImg,
    subtitle: "Quality Guaranteed",
    title: "Easy Availability For Vendors",
    description: "Enjoy seamless access to builders and contractors via our extensive professional network.",
  },
  {
    image: customImg,
    subtitle: "Trusted Partners",
    title: "Why Choose Barter Constructions",
    description: "RCC and finishing work, construction, or lock-and-key projects in exchange for flats.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-primary">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Ken Burns Effect Image */}
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 8, ease: "linear" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.88)] to-[hsl(var(--hero-overlay)/0.4)]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-accent/30 uppercase tracking-widest"
            >
              {slides[current].subtitle}
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-[1.1] mb-6 uppercase tracking-tight"
            >
              {slides[current].title.includes(' For ') ? (
                slides[current].title.split(' For ').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <br />}
                    {i < arr.length - 1 && <span className="text-accent">For </span>}
                  </span>
                ))
              ) : (
                slides[current].title
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-primary-foreground/80 text-base max-w-lg mb-8 font-body leading-relaxed"
            >
              {slides[current].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-2 px-8">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-body font-semibold px-8 transition-all">
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
              current === i ? "bg-accent scale-x-110" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
