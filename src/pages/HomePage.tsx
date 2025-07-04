
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import LearningPathCard from '../components/ui/LearningPathCard';
import { learningPaths } from '../data/learningPaths';
import { BookOpen, Users, Star, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const stats = [
    { label: 'Learning Paths', value: '6', icon: BookOpen },
    { label: 'Active Students', value: '10K+', icon: Users },
    { label: 'Resources', value: '150+', icon: Star },
    { label: 'Success Rate', value: '95%', icon: TrendingUp },
  ];

  return (
    <>
      <Helmet>
        <title>ORCATech Learning Platform - Master Tech Skills</title>
        <meta name="description" content="Transform your career with ORCATech's comprehensive learning paths in DevOps, Python, Java, Web Development, Cloud Computing, and Cybersecurity." />
        <meta name="keywords" content="tech learning, devops, python, java, web development, cloud computing, cybersecurity, programming courses" />
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
                Transform your career with cutting-edge learning paths designed by industry experts. 
                From DevOps to Cybersecurity, we've got your journey covered.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="px-6 py-3 bg-blue-500/20 rounded-full border border-blue-500/30 text-blue-300">
                  🚀 Hands-on Labs
                </div>
                <div className="px-6 py-3 bg-purple-500/20 rounded-full border border-purple-500/30 text-purple-300">
                  📊 Progress Tracking
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

        {/* Learning Paths Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your Learning Path
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Structured learning experiences designed to take you from beginner to expert. 
                Each path includes hands-on labs, real-world projects, and industry certifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {learningPaths.map((path) => (
                <LearningPathCard key={path.id} learningPath={path} />
              ))}
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
              Join thousands of students who have transformed their careers with ORCATech. 
              Your journey to tech mastery starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                Browse Learning Paths
              </button>
              <button className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
