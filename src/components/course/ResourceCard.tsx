
import React from 'react';
import { Clock, Star, Play, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Resource } from '../../types/learningPath';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
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

  return (
    <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors">
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
  );
};

export default ResourceCard;
