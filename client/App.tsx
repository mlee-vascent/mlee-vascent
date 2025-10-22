import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import GTM from "./pages/GTM";
import Tools from "./pages/Tools";
import Ecommerce from "./pages/Ecommerce";
import MobileApp from "./pages/MobileApp";
import WebsiteProject from "./pages/WebsiteProject";
import Salesforce from "./pages/Salesforce";
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gtm" element={<GTM />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/salesforce" element={<Salesforce />} />
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
