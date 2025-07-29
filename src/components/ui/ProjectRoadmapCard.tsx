
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Target, CheckSquare, TrendingUp, Calendar } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectRoadmapCardProps {
  project: Project;
}

const ProjectRoadmapCard: React.FC<ProjectRoadmapCardProps> = ({ project }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Python': return 'from-blue-500 to-indigo-500';
      case 'Docker': return 'from-cyan-500 to-blue-500';
      case 'Kubernetes': return 'from-purple-500 to-pink-500';
      case 'CI/CD': return 'from-orange-500 to-red-500';
      case 'IaC': return 'from-green-500 to-emerald-500';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 group relative overflow-hidden">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-5 group-hover:opacity-10 transition-opacity`} />
      
      <CardHeader className="pb-4 relative">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="text-2xl">{project.category === 'Python' ? '🐍' : project.category === 'Docker' ? '🐳' : project.category === 'Kubernetes' ? '⚡' : project.category === 'CI/CD' ? '🔄' : '🏗️'}</div>
            <Badge variant="outline" className="text-xs border-slate-700 text-slate-300">
              {project.category}
            </Badge>
          </div>
          
          <div className="flex items-center gap-1">
            {project.isPopular && (
              <Badge className="text-xs bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                Popular
              </Badge>
            )}
            {project.isNew && (
              <Badge className="text-xs bg-blue-500/20 text-blue-400 border-blue-500/30">
                New
              </Badge>
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

      <CardContent className="space-y-4 relative">
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
              {project.objectives?.length || 0} learning objectives
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckSquare className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-slate-300">
              {project.deliverables?.length || 0} deliverables
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags?.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              {tag}
            </Badge>
          ))}
          {project.tags && project.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-slate-800 text-slate-400">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between pt-2">
          <Badge className="text-xs bg-slate-800/50 text-slate-400 border-slate-700">
            Planned Project
          </Badge>
          <div className="flex items-center text-slate-500 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            Coming Soon
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectRoadmapCard;
