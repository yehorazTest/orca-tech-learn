
import { useState, useMemo } from 'react';
import { Resource, ResourceGroup } from '../types/learningPath';

interface UseCourseFiltersProps {
  resources?: Resource[];
  resourceGroups?: ResourceGroup[];
}

export const useCourseFilters = ({ resources = [], resourceGroups = [] }: UseCourseFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  // Get all resources from both direct resources and resource groups
  const allResources = useMemo(() => {
    const directResources = resources || [];
    const groupResources = resourceGroups?.flatMap(group => group.resources) || [];
    return [...directResources, ...groupResources];
  }, [resources, resourceGroups]);

  // Get available filter options
  const availableDifficulties = useMemo(() => {
    const difficulties = Array.from(new Set(allResources.map(r => r.difficulty)));
    return difficulties.sort();
  }, [allResources]);

  const availableTypes = useMemo(() => {
    const types = Array.from(new Set(allResources.map(r => r.type)));
    return types.sort();
  }, [allResources]);

  // Filter resources
  const filterResources = (resourcesToFilter: Resource[]) => {
    return resourcesToFilter.filter(resource => {
      const matchesSearch = !searchTerm || 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDifficulty = difficultyFilter === 'all' || resource.difficulty === difficultyFilter;
      const matchesType = typeFilter === 'all' || resource.type === typeFilter;
      
      return matchesSearch && matchesDifficulty && matchesType;
    });
  };

  // Filter resource groups
  const filterResourceGroups = (groups: ResourceGroup[]) => {
    return groups.map(group => ({
      ...group,
      resources: filterResources(group.resources)
    })).filter(group => group.resources.length > 0);
  };

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (searchTerm) count++;
    if (difficultyFilter !== 'all') count++;
    if (typeFilter !== 'all') count++;
    return count;
  }, [searchTerm, difficultyFilter, typeFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setDifficultyFilter('all');
    setTypeFilter('all');
  };

  return {
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
  };
};
