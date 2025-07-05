
import React from 'react';
import { Clock } from 'lucide-react';
import { Course } from '../../types/learningPath';

interface CourseHeroProps {
  course: Course;
}

const CourseHero: React.FC<CourseHeroProps> = ({ course }) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Advanced': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  return (
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
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
