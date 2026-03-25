import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <img
              src="/logo.png"
              alt="Barter Constructions"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Build Easy • Sell Easy. We take up RCC and finishing work, construction, or lock-and-key residential and commercial projects in exchange for flats in all major metro cities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Vendors", path: "/vendors" },
              { label: "Projects", path: "/projects" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="opacity-70 hover:opacity-100 hover:text-accent transition-all">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Residential Construction", "Commercial Construction", "Renovations", "Custom Building"].map((s) => (
              <li key={s}>
                <Link to="/services" className="opacity-70 hover:opacity-100 hover:text-accent transition-all">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span className="opacity-70">Prasad Chamber, Tata Road 2, Opera House, Mumbai-04</span>
            </li>
            <li>
              <a href="tel:+917777045007" className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-accent transition-all">
                <Phone className="w-4 h-4 text-accent" />
                +91 77770 45007
              </a>
            </li>
            <li>
              <a href="mailto:barterconstructions@gmail.com" className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-accent transition-all">
                <Mail className="w-4 h-4 text-accent" />
                barterconstructions@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 gap-2">
        <p>&copy; {new Date().getFullYear()} Barter Constructions. All rights reserved.</p>
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Sitemap</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
