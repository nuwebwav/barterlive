import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ subtitle, title, description, align = "center" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 md:mb-16 ${align === "center" ? "text-center max-w-2xl mx-auto" : ""}`}
  >
    {subtitle && (
      <span className="inline-block text-accent font-body font-semibold text-sm tracking-widest uppercase mb-3">
        {subtitle}
      </span>
    )}
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
