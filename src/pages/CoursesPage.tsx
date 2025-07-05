
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import CourseCard from '../components/ui/CourseCard';
import { coreCourses, expertCourses } from '../data/courses';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCoreSectionOpen, setIsCoreSectionOpen] = useState(true);
  const [isExpertSectionOpen, setIsExpertSectionOpen] = useState(true);

  const filterCourses = (courses: typeof coreCourses) => {
    if (!searchTerm) return courses;
    
    return courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const filteredCoreCourses = filterCourses(coreCourses);
  const filteredExpertCourses = filterCourses(expertCourses);

  return (
    <>
      <Helmet>
        <title>Courses - ORCATech Learning Platform</title>
        <meta name="description" content="Focus on specific technologies and skills with our comprehensive course catalog. From beginner fundamentals to expert-level specializations." />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Courses
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Focus on specific technologies and skills with our comprehensive course catalog. 
              From beginner fundamentals to expert-level specializations.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
            </div>
          </div>
        </section>

        {/* Core Courses Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Collapsible open={isCoreSectionOpen} onOpenChange={setIsCoreSectionOpen}>
              <CollapsibleTrigger className="w-full">
                <div className="text-center mb-12 group">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-white">Core Courses</h2>
                    {isCoreSectionOpen ? (
                      <ChevronUp className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                    )}
                  </div>
                  <p className="text-slate-300 max-w-2xl mx-auto">
                    Comprehensive learning paths from beginner to professional level across different technologies
                  </p>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {filteredCoreCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* Expert Courses Section */}
        <section className="py-16 px-4 bg-slate-900/30">
          <div className="container mx-auto">
            <Collapsible open={isExpertSectionOpen} onOpenChange={setIsExpertSectionOpen}>
              <CollapsibleTrigger className="w-full">
                <div className="text-center mb-12 group">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-white">Expert Courses</h2>
                    {isExpertSectionOpen ? (
                      <ChevronUp className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                    )}
                  </div>
                  <p className="text-slate-300 max-w-2xl mx-auto">
                    Advanced specialization courses for deep expertise in specific tools and technologies
                  </p>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {filteredExpertCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>
      </div>
    </>
  );
};

export default CoursesPage;
