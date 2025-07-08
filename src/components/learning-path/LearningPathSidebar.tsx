import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LearningPath } from '../../types/learningPath';

interface LearningPathSidebarProps {
  learningPath: LearningPath;
  totalCourses: number;
}

const LearningPathSidebar: React.FC<LearningPathSidebarProps> = ({ 
  learningPath, 
  totalCourses 
}) => {
  return (
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
              <div className="text-white font-medium">{totalCourses} courses</div>
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
  );
};

export default LearningPathSidebar;