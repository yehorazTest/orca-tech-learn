
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import ResourceCard from './ResourceCard';
import CourseFilterBar from './CourseFilterBar';
import { useCourseFilters } from '../../hooks/useCourseFilters';
import { Course } from '../../types/learningPath';

interface ResourcesSectionProps {
  course: Course;
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ course }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  
  const {
    searchTerm,
    setSearchTerm,
    difficultyFilter,
    setDifficultyFilter,
    typeFilter,
    setTypeFilter,
    availableDifficulties,
    availableTypes,
    filterResources,
    filterResourceGroups,
    activeFiltersCount,
    clearFilters
  } = useCourseFilters({
    resources: course.resources,
    resourceGroups: course.resourceGroups
  });

  const toggleSection = (sectionKey: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // Filter resources and groups
  const filteredResources = course.resources ? filterResources(course.resources) : [];
  const filteredResourceGroups = course.resourceGroups ? filterResourceGroups(course.resourceGroups) : [];

  const hasAnyResources = filteredResources.length > 0 || filteredResourceGroups.length > 0;

  return (
    <section className="py-12 px-4 bg-slate-900/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Course Resources
        </h2>
        
        <CourseFilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          difficultyFilter={difficultyFilter}
          onDifficultyChange={setDifficultyFilter}
          typeFilter={typeFilter}
          onTypeChange={setTypeFilter}
          onClearFilters={clearFilters}
          availableDifficulties={availableDifficulties}
          availableTypes={availableTypes}
          activeFiltersCount={activeFiltersCount}
        />

        {!hasAnyResources && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No resources match the current filters.</p>
          </div>
        )}

        {/* Direct Resources */}
        {filteredResources.length > 0 && (
          <div className="space-y-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        )}

        {/* Resource Groups */}
        {filteredResourceGroups.length > 0 && (
          <div className="space-y-8">
            {filteredResourceGroups.map((group, groupIndex) => {
              const sectionKey = `group-${groupIndex}`;
              const isOpen = openSections[sectionKey] || false;
              
              return (
                <div key={groupIndex} className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
                  <Collapsible open={isOpen} onOpenChange={() => toggleSection(sectionKey)}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {group.title}
                        </h3>
                        <p className="text-slate-300 mt-2">{group.description}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-slate-400">
                          {group.resources.length} resource{group.resources.length !== 1 ? 's' : ''}
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        )}
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.resources.map((resource) => (
                          <ResourceCard key={resource.id} resource={resource} />
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourcesSection;
