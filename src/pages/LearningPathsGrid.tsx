
import React from 'react';
import { LearningPath } from '../../types/learningPath';
import LearningPathCard from './LearningPathCard';

interface LearningPathsGridProps {
  learningPaths: LearningPath[];
  onPathSelect: (learningPath: LearningPath) => void;
}

const LearningPathsGrid: React.FC<LearningPathsGridProps> = ({ learningPaths, onPathSelect }) => {
  if (!learningPaths || learningPaths.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No learning paths available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {learningPaths.map((path) => (
        <LearningPathCard
          key={path.id}
          learningPath={path}
          onClick={onPathSelect}
        />
      ))}
    </div>
  );
};

export default LearningPathsGrid;