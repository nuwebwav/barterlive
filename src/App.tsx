import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import VendorsIndex from "./pages/vendors/VendorsIndex";
import TopLevelResolver from "./pages/vendors/TopLevelResolver";
import StatePage from "./pages/vendors/StatePage";
import StateSlugResolver from "./pages/vendors/StateSlugResolver";
import CityCategoryPage from "./pages/vendors/CityCategoryPage";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <WhatsAppButton />
        <Routes>
          {/* Static pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vendors" element={<VendorsIndex />} />

          {/* Vendor dynamic routes */}
          <Route path="/:country/:state/:city/:category" element={<CityCategoryPage />} />
          <Route path="/:country/:state/:slug" element={<StateSlugResolver />} />
          <Route path="/:country/:state" element={<StatePage />} />
          <Route path="/:slug" element={<TopLevelResolver />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
