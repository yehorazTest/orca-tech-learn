
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import LearningPathPage from "./pages/LearningPathPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { UserProgressProvider } from "./context/UserProgressContext";
import { SearchProvider } from "./context/SearchContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <UserProgressProvider>
        <SearchProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/learning-path/:pathId" element={<LearningPathPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Router>
          </TooltipProvider>
        </SearchProvider>
      </UserProgressProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
