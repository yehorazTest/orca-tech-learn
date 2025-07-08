import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import CourseCard from '../components/ui/CourseCard';
import { learningPaths } from '../data/learningPaths';
import { courses } from '../data/courses';
import LearningPathHero from '../components/learning-path/LearningPathHero';
import LearningPathSidebar from '../components/learning-path/LearningPathSidebar';
import CourseFilters from '../components/learning-path/CourseFilters';
import CourseGroupSection from '../components/learning-path/CourseGroupSection';
import LearningPathNotFound from '../components/learning-path/LearningPathNotFound';
import { useLearningPathFilters } from '../hooks/useLearningPathFilters';

const LearningPathPage = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const learningPath = learningPaths.find(path => path.id === pathId);
  const [openSections, setOpenSections] = React.useState<{ [key: number]: boolean }>({});

  // Handle case where learning path is not found
  if (!learningPath) {
    return <LearningPathNotFound />;
  }

  const pathCourses = courses.filter(course => 
    learningPath.courseIds.includes(course.id)
  );

  // Get all courses in this learning path
  const allCourses = courses.filter(course => 
    learningPath?.courseIds.includes(course.id) || 
    learningPath?.courseGroups?.some(group => group.courseIds.includes(course.id))
  );

  // Initialize filters
  const {
    filters,
    setFilters,
    uniqueDifficulties,
    uniqueCategories,
    uniqueTags,
    filterCourses,
    resetFilters,
    hasActiveFilters
  } = useLearningPathFilters(allCourses);

  const toggleSection = (index: number) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <Helmet>
        <title>{learningPath.title} - ORCATech Learning Platform</title>
        <meta name="description" content={learningPath.longDescription} />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header />

        {/* Hero Section with Grid */}
        <div className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <LearningPathHero learningPath={learningPath} />
              </div>

              {/* Sidebar */}
              <LearningPathSidebar 
                learningPath={learningPath} 
                totalCourses={pathCourses.length} 
              />
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <section className="py-12 px-4 bg-slate-900/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Courses in this Path</h2>
            <p className="text-slate-300 mb-8">
              Complete these courses in order to master the {learningPath.title} path:
            </p>

            {/* Filter Section */}
            <CourseFilters 
              filters={filters}
              setFilters={setFilters}
              uniqueDifficulties={uniqueDifficulties}
              uniqueCategories={uniqueCategories}
              uniqueTags={uniqueTags}
              hasActiveFilters={hasActiveFilters}
              onResetFilters={resetFilters}
            />
            
            {learningPath.courseGroups ? (
              // Render grouped courses with collapsible sections
              <CourseGroupSection 
                groups={learningPath.courseGroups}
                courses={courses}
                openSections={openSections}
                onToggleSection={toggleSection}
                filterCourses={filterCourses}
              />
            ) : (
              // Render flat courses (fallback for paths without groups)
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pathCourses.map((course, index) => (
                  <div key={course.id} className="relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                      {index + 1}
                    </div>
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default LearningPathPage;