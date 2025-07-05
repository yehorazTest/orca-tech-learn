
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Star, ExternalLink, Play, Search, X } from 'lucide-react';
import Header from '../components/layout/Header';
import { courses } from '../data/courses';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [filterQuery, setFilterQuery] = useState('');
  const course = courses.find(c => c.id === courseId);

  // Filter resources based on search query
  const filteredResources = useMemo(() => {
    if (!course || !filterQuery.trim()) {
      return course?.resources || [];
    }

    const query = filterQuery.toLowerCase();
    return course.resources.filter(resource => 
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [course, filterQuery]);

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Advanced': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Lab': return '🧪';
      case 'Tutorial': return '📚';
      case 'Video': return '🎥';
      case 'Project': return '🛠️';
      case 'Quiz': return '❓';
      default: return '📄';
    }
  };

  const clearFilter = () => {
    setFilterQuery('');
  };

  return (
    <>
      <Helmet>
        <title>{course.title} - ORCATech Learning Platform</title>
        <meta name="description" content={course.longDescription} />
        <meta name="keywords" content={course.tags.join(', ')} />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header />

        {/* Breadcrumb */}
        <div className="border-b border-slate-800">
          <div className="container mx-auto px-4 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6 mb-8">
                <div className={`text-6xl ${course.iconColor}`}>
                  {course.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(course.difficulty)}`}>
                      {course.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                      {course.category}
                    </span>
                    {course.isPopular && (
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {course.title}
                  </h1>
                  
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    {course.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-6 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prerequisites */}
              {course.prerequisites.length > 0 && (
                <Card className="p-6 bg-slate-900/50 border-slate-800 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Prerequisites</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.prerequisites.map((prereq, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                        {prereq}
                      </span>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">Learning Resources</h2>
                {course.resources.length > 0 && (
                  <div className="text-sm text-slate-400">
                    {filteredResources.length} of {course.resources.length} resources
                    {filterQuery && ` matching "${filterQuery}"`}
                  </div>
                )}
              </div>

              {/* Filter Bar */}
              {course.resources.length > 0 && (
                <div className="mb-6">
                  <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Filter resources..."
                      value={filterQuery}
                      onChange={(e) => setFilterQuery(e.target.value)}
                      className="pl-10 pr-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {filterQuery && (
                      <button
                        onClick={clearFilter}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}
              
              {course.resources.length > 0 ? (
                filteredResources.length > 0 ? (
                  <div className="space-y-6">
                    {filteredResources.map((resource, index) => (
                      <Card key={resource.id} className="p-6 bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="text-2xl">{getTypeIcon(resource.type)}</div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                  {resource.title}
                                </h3>
                                <p className="text-slate-300 mb-3">
                                  {resource.description}
                                </p>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-sm font-medium border ml-4 ${getDifficultyColor(resource.difficulty)}`}>
                                {resource.difficulty}
                              </span>
                            </div>

                            <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {resource.duration}
                              </span>
                              <span>{resource.type}</span>
                              {resource.rating && (
                                <span className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-400" />
                                  {resource.rating}
                                </span>
                              )}
                            </div>

                            {resource.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {resource.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex} className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            <Button 
                              asChild
                              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                            >
                              <a 
                                href={resource.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                              >
                                <Play className="w-4 h-4" />
                                Start {resource.type}
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="p-12 bg-slate-900/50 border-slate-800 text-center">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-white mb-3">No Resources Found</h3>
                    <p className="text-slate-300 mb-4">
                      No resources match your search for "{filterQuery}". Try a different search term.
                    </p>
                    <Button onClick={clearFilter} variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                      Clear Filter
                    </Button>
                  </Card>
                )
              ) : (
                <Card className="p-12 bg-slate-900/50 border-slate-800 text-center">
                  <div className="text-4xl mb-4">🚧</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Resources Coming Soon</h3>
                  <p className="text-slate-300">
                    We're working hard to bring you comprehensive learning resources for this course. 
                    Check back soon for updates!
                  </p>
                </Card>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CoursePage;
