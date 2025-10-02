import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import GTM from "./pages/GTM";
import Blog from "./pages/Blog";
import Ecommerce from "./pages/Ecommerce";
import WebsiteProject from "./pages/WebsiteProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gtm" element={<GTM />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/portfolio/website" element={<WebsiteProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;
const win = window as any;
if (!win.__REACT_ROOT__) {
  win.__REACT_ROOT__ = createRoot(container);
}
win.__REACT_ROOT__.render(<App />);
