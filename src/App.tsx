import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Connectivity from "./pages/Connectivity";
import DataCentres from "./pages/DataCentres";
import CloudServices from "./pages/CloudServices";
import Cybersecurity from "./pages/Cybersecurity";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Videos from "./pages/Videos";
import Pictures from "./pages/Pictures";
import Events from "./pages/Events";
import Awards from "./pages/Awards";
import Webinars from "./pages/Webinars";
import WebinarDetail from "./pages/WebinarDetail";
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
          <Route path="/connectivity" element={<Connectivity />} />
          <Route path="/data-centres" element={<DataCentres />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path="/events" element={<Events />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/webinars/:slug" element={<WebinarDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
