import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const VendorBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-sm text-primary-foreground/60">
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-1">
        {i > 0 && <ChevronRight className="w-3 h-3" />}
        {item.path ? (
          <Link to={item.path} className="hover:text-accent transition-colors">
            {item.label}
          </Link>
        ) : (
          <span className="text-primary-foreground/90 font-medium">{item.label}</span>
        )}
      </span>
    ))}
  </nav>
);

export default VendorBreadcrumb;
