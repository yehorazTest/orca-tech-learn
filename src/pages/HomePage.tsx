
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import { learningPaths } from '../data/learningPaths';
import { courses } from '../data/courses';
import { BookOpen, Star, TrendingUp, Target, Users, Award, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const stats = [
    { label: 'Learning Paths', value: learningPaths.length.toString(), icon: BookOpen },
    { label: 'Individual Courses', value: courses.length.toString(), icon: Target },
    { label: 'Resources', value: '50+', icon: Star },
    { label: 'Industry Focus', value: '100%', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Code,
      title: 'Hands-on Labs',
      description: 'Practice with real-world scenarios and interactive coding exercises'
    },
    {
      icon: Users,
      title: 'Expert-Led Content',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      icon: Award,
      title: 'Structured Learning',
      description: 'Follow carefully designed paths from beginner to professional level'
    },
    {
      icon: Zap,
      title: 'Fast-Track Career',
      description: 'Accelerate your professional growth with focused, practical skills'
    }
  ];

  return (
    <>
      <Helmet>
        <title>ORCATech Learning Platform - Master Tech Skills</title>
        <meta name="description" content="Transform your career with ORCATech's comprehensive learning paths in DevOps, Python, Java, and Cloud Computing across Beginner, Intermediate, and Professional levels." />
        <meta name="keywords" content="tech learning, devops, python, java, cloud computing, programming courses, professional development" />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-purple-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
          
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Master Tech Skills
                </span>
                <br />
                <span className="text-white">Shape Your Future</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Choose from structured learning paths for career development or individual courses for specific skills. 
                From beginner to professional level across DevOps, Python, Java, and Cloud Computing.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="px-6 py-3 bg-blue-500/20 rounded-full border border-blue-500/30 text-blue-300">
                  🚀 Hands-on Labs
                </div>
                <div className="px-6 py-3 bg-purple-500/20 rounded-full border border-purple-500/30 text-purple-300">
                  📊 Structured Learning
                </div>
                <div className="px-6 py-3 bg-cyan-500/20 rounded-full border border-cyan-500/30 text-cyan-300">
                  🎯 Industry-Focused
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 border-y border-slate-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose ORCATech?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                We provide comprehensive, industry-focused learning experiences designed to accelerate your tech career.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Approach Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Two Ways to Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-lg bg-blue-900/20 border border-blue-500/30">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Learning Paths</h3>
                  <p className="text-slate-300 mb-6">
                    Structured journeys from beginner to professional level. Follow our carefully designed curriculum to master entire technology stacks.
                  </p>
                  <ul className="text-slate-300 text-left space-y-2 mb-6">
                    <li>• Progressive skill building</li>
                    <li>• Career-focused outcomes</li>
                    <li>• Comprehensive coverage</li>
                  </ul>
                </div>
                <div className="p-8 rounded-lg bg-purple-900/20 border border-purple-500/30">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Individual Courses</h3>
                  <p className="text-slate-300 mb-6">
                    Target specific skills and technologies. Perfect for professionals looking to fill knowledge gaps or learn new tools quickly.
                  </p>
                  <ul className="text-slate-300 text-left space-y-2 mb-6">
                    <li>• Focused learning objectives</li>
                    <li>• Flexible scheduling</li>
                    <li>• Immediate application</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Choose a structured learning path for career development or dive into individual courses for specific skills. 
              Your journey to professional mastery starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learning-paths">
                <Button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  Explore Learning Paths
                </Button>
              </Link>
              <Link to="/courses">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Browse Individual Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
