
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Header';
import CourseCard from '../components/ui/CourseCard';
import { courses } from '../data/courses';

const CoursesPage = () => {
  return (
    <>
      <Helmet>
        <title>Individual Courses - ORCATech Learning Platform</title>
        <meta name="description" content="Focus on specific technologies and skills with our individual courses. Each course provides deep expertise in a particular area and can be taken independently." />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Individual Courses
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Focus on specific technologies and skills with our individual courses. 
              Each course provides deep expertise in a particular area and can be taken independently.
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CoursesPage;
