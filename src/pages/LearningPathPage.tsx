
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Users, CheckCircle, BookOpen, ChevronDown, ChevronUp, Filter, X } from 'lucide-react';
import Header from '../components/layout/Header';
import CourseCard from '../components/ui/CourseCard';
import { learningPaths } from '../data/learningPaths';
import { courses } from '../data/courses';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LearningPathPage = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const learningPath = learningPaths.find(path => path.id === pathId);
  const [openSections, setOpenSections] = React.useState<{ [key: number]: boolean }>({});
  const [filters, setFilters] = React.useState({
    difficulty: 'all',
    category: 'all',
    tag: 'all'
  });

  if (!learningPath) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Learning Path Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const pathCourses = courses.filter(course => 
    learningPath.courseIds.includes(course.id)
  );

  const toggleSection = (index: number) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Get all unique values for filters
  const allCourses = courses.filter(course => 
    learningPath?.courseIds.includes(course.id) || 
    learningPath?.courseGroups?.some(group => group.courseIds.includes(course.id))
  );
  
  const uniqueDifficulties = [...new Set(allCourses.map(course => course.difficulty).filter(Boolean))];
  const uniqueCategories = [...new Set(allCourses.map(course => course.category).filter(Boolean))];
  const uniqueTags = [...new Set(allCourses.flatMap(course => course.tags))];

  // Filter function
  const filterCourses = (coursesToFilter: typeof courses) => {
    return coursesToFilter.filter(course => {
      const difficultyMatch = filters.difficulty === 'all' || course.difficulty === filters.difficulty;
      const categoryMatch = filters.category === 'all' || course.category === filters.category;
      const tagMatch = filters.tag === 'all' || course.tags.includes(filters.tag);
      return difficultyMatch && categoryMatch && tagMatch;
    });
  };

  const resetFilters = () => {
    setFilters({
      difficulty: 'all',
      category: 'all',
      tag: 'all'
    });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== 'all');

  return (
    <>
      <Helmet>
        <title>{learningPath.title} - ORCATech Learning Platform</title>
        <meta name="description" content={learningPath.longDescription} />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header />

        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Learning Paths
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-8">
                  <div className={`text-6xl ${learningPath.iconColor} flex-shrink-0`}>
                    {learningPath.icon}
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-4">
                      {learningPath.title}
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed mb-6">
                      {learningPath.longDescription}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {learningPath.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
                  <h3 className="text-xl font-semibold text-white mb-4">Path Overview</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="text-white font-medium">{learningPath.estimatedHours} hours</div>
                        <div className="text-slate-400 text-sm">Estimated time</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-white font-medium">{pathCourses.length} courses</div>
                        <div className="text-slate-400 text-sm">Total courses</div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  >
                    Start Learning Path
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-12 px-4 bg-slate-900/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Courses in this Path</h2>
            <p className="text-slate-300 mb-8">
              Complete these courses in order to master the {learningPath.title} path:
            </p>

            {/* Filter Section */}
            <div className="mb-8 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <Filter className="w-5 h-5 text-slate-400" />
                <h3 className="text-lg font-semibold text-white">Filter Courses</h3>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                    className="text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear Filters
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Difficulty Level
                  </label>
                  <Select value={filters.difficulty} onValueChange={(value) => setFilters(prev => ({ ...prev, difficulty: value }))}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      {uniqueDifficulties.map(difficulty => (
                        <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Category
                  </label>
                  <Select value={filters.category} onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {uniqueCategories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Technology
                  </label>
                  <Select value={filters.tag} onValueChange={(value) => setFilters(prev => ({ ...prev, tag: value }))}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Technologies</SelectItem>
                      {uniqueTags.slice(0, 10).map(tag => (
                        <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {learningPath.courseGroups ? (
              // Render grouped courses with collapsible sections
              <div className="space-y-6">
                {learningPath.courseGroups.map((group, groupIndex) => {
                  const groupCourses = courses.filter(course => 
                    group.courseIds.includes(course.id)
                  );
                  const filteredGroupCourses = filterCourses(groupCourses);
                  const isOpen = openSections[groupIndex] || false;
                  
                  return (
                    <div key={groupIndex} className="space-y-4">
                      <Collapsible open={isOpen} onOpenChange={() => toggleSection(groupIndex)}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors text-left group">
                          <div>
                            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                            <p className="text-slate-400 text-sm mt-1">{group.description}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-sm text-slate-400">
                              {filteredGroupCourses.length} of {groupCourses.length} courses
                            </div>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                            )}
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-4 pt-4">
                          {filteredGroupCourses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {filteredGroupCourses.map((course, courseIndex) => (
                                <div key={course.id} className="relative">
                                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                                    {courseIndex + 1}
                                  </div>
                                  <CourseCard course={course} />
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8">
                              <p className="text-slate-400">No courses match the current filters.</p>
                            </div>
                          )}
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  );
                })}
              </div>
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
