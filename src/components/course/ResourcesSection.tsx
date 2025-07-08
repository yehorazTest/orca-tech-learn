
import React, { useState } from 'react';
import { Course } from '../../types/learningPath';
import ResourceCard from './ResourceCard';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ResourcesSectionProps {
  course: Course;
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ course }) => {
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({});

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [groupTitle]: !prev[groupTitle]
    }));
  };

  // If course has resourceGroups, render them with collapsible sections
  if (course.resourceGroups && course.resourceGroups.length > 0) {
    return (
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Course Resources</h2>
          
          <div className="space-y-6">
            {course.resourceGroups.map((group, index) => (
              <div key={index} className="bg-slate-900/30 rounded-lg p-6">
                <Collapsible 
                  open={openGroups[group.title]} 
                  onOpenChange={() => toggleGroup(group.title)}
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between mb-4 group">
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {group.title}
                        </h3>
                        <p className="text-slate-300 text-sm mt-1">
                          {group.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-sm">
                          {group.resources.length} resource{group.resources.length !== 1 ? 's' : ''}
                        </span>
                        {openGroups[group.title] ? (
                          <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        )}
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.resources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Fallback for courses with traditional resources array
  if (course.resources && course.resources.length > 0) {
    return (
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Course Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default ResourcesSection;
