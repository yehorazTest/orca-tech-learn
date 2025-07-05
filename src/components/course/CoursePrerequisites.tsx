
import React from 'react';
import { Card } from '@/components/ui/card';

interface CoursePrerequisitesProps {
  prerequisites: string[];
}

const CoursePrerequisites: React.FC<CoursePrerequisitesProps> = ({ prerequisites }) => {
  if (prerequisites.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 bg-slate-900/50 border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-3">Prerequisites</h3>
          <div className="flex flex-wrap gap-2">
            {prerequisites.map((prereq, index) => (
              <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                {prereq}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CoursePrerequisites;
