
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import LearningPathsPage from "./pages/LearningPathsPage";
import CoursesPage from "./pages/CoursesPage";
import ProjectsPage from "./pages/ProjectsPage";
import LearningPathPage from "./pages/LearningPathPage";
import CoursePage from "./pages/CoursePage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import LabViewerPage from "./pages/LabViewerPage";
import { UserProgressProvider } from "./context/UserProgressContext";
import { SearchProvider } from "./context/SearchContext";
import { BackendDataProvider } from "./context/BackendDataContext";
import { useScrollToTop } from "./hooks/useScrollToTop";
import RoadmapPage from "./pages/RoadmapPage";

const queryClient = new QueryClient();

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <BackendDataProvider>
        <UserProgressProvider>
          <SearchProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Router>
                <ScrollToTopWrapper>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/learning-paths" element={<LearningPathsPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/roadmap" element={<RoadmapPage />} />
                    <Route path="/learning-path/:pathId" element={<LearningPathPage />} />
                    <Route path="/course/:courseId" element={<CoursePage />} />
                    <Route path="/course/:courseId/lab/:labId" element={<LabViewerPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </ScrollToTopWrapper>
              </Router>
            </TooltipProvider>
          </SearchProvider>
        </UserProgressProvider>
      </BackendDataProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
