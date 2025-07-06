
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Target, CheckSquare, Star, Sparkles } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Python': return 'bg-blue-500';
      case 'Docker': return 'bg-cyan-500';
      case 'Kubernetes': return 'bg-purple-500';
      case 'CI/CD': return 'bg-orange-500';
      case 'IaC': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 group h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${getCategoryColor(project.category)}`} />
            <Badge variant="outline" className="text-xs border-slate-700 text-slate-300">
              {project.category}
            </Badge>
          </div>
          <div className="flex gap-1">
            {project.isPopular && (
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            )}
            {project.isNew && (
              <Sparkles className="w-4 h-4 text-blue-500" />
            )}
          </div>
        </div>
        
        <CardTitle className="text-white group-hover:text-blue-400 transition-colors text-lg leading-tight">
          {project.title}
        </CardTitle>
        <CardDescription className="text-slate-300 text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Difficulty and Duration */}
        <div className="flex items-center justify-between text-sm">
          <Badge className={getDifficultyColor(project.difficulty)}>
            {project.difficulty}
          </Badge>
          <div className="flex items-center text-slate-400">
            <Clock className="w-4 h-4 mr-1" />
            {project.estimatedHours}h
          </div>
        </div>

        {/* Key Info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <Target className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
            <span className="text-slate-300">
              {project.objectives.length} learning objectives
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckSquare className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-slate-300">
              {project.deliverables.length} deliverables
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-slate-800 text-slate-400">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Action Button */}
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          onClick={() => {
            // TODO: Navigate to project detail page
            console.log('Navigate to project:', project.id);
          }}
        >
          Start Project
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
