
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, TrendingUp } from 'lucide-react';
import { Course } from '../../types/learningPath';
import { Card } from '@/components/ui/card';

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, className = '' }) => {
  const {
    id,
    title,
    description,
    icon,
    iconColor,
    difficulty,
    duration,
    gradient,
    isPopular,
    isNew
  } = course;

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <Link to={`/course/${id}`} className="block group">
      <Card className={`relative overflow-hidden bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] ${className}`}>
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex gap-2">
          {isPopular && (
            <span className="flex items-center gap-1 px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
              <TrendingUp className="w-3 h-3" />
              Popular
            </span>
          )}
          {isNew && (
            <span className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
              <Star className="w-3 h-3" />
              New
            </span>
          )}
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className={`text-4xl ${iconColor} group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration}
            </div>
          </div>

          {/* Difficulty */}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg pointer-events-none`} />
      </Card>
    </Link>
  );
};

export default CourseCard;
