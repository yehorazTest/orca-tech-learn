
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, BookOpen, Target } from 'lucide-react';
import Header from '../components/layout/Header';
import CourseCard from '../components/ui/CourseCard';
import { learningPaths } from '../data/learningPaths';
import { courses } from '../data/courses';
import { Card } from '@/components/ui/card';

const LearningPathDetailPage = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const learningPath = learningPaths.find(path => path.id === pathId);

  if (!learningPath) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Learning Path Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const pathCourses = courses.filter(course => learningPath.courseIds.includes(course.id));

  return (
    <>
      <Helmet>
        <title>{learningPath.title} Learning Path - ORCATech Learning Platform</title>
        <meta name="description" content={learningPath.longDescription} />
        <meta name="keywords" content={learningPath.tags.join(', ')} />
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
                <div className={`text-6xl ${learningPath.iconColor}`}>
                  {learningPath.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                      {learningPath.category}
                    </span>
                    {learningPath.isPopular && (
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30">
                        Popular
                      </span>
                    )}
                    {learningPath.isNew && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                        New
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {learningPath.title}
                  </h1>
                  
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    {learningPath.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-6 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{learningPath.estimatedHours} hours total</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      <span>{pathCourses.length} courses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      <span>Structured Learning Path</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Path Overview */}
              <Card className="p-6 bg-slate-900/50 border-slate-800 mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">Learning Path Overview</h3>
                <p className="text-slate-300 mb-4">
                  Complete this structured learning path to master {learningPath.title.toLowerCase()} skills. 
                  The courses are designed to build upon each other, taking you from beginner to professional level.
                </p>
                <div className="flex flex-wrap gap-2">
                  {learningPath.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Required Courses</h2>
              
              <div className="space-y-6">
                {pathCourses.map((course, index) => (
                  <div key={course.id} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <CourseCard course={course} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LearningPathDetailPage;
