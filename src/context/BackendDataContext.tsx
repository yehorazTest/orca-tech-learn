import React, { createContext, useContext, ReactNode } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { apiService } from '../services/apiService';
import { BackendResponse } from '../types/backend';
import { LearningPath, Course, RoadmapItem } from '../types/learningPath';
import { Project } from '../types/project';


interface BackendDataContextType {
  data: {
    learningPaths: LearningPath[];
    courses: Course[];
    projects: Project[];
    roadmapItems: RoadmapItem[];
    roadmapProjects: Project[];
  };
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
  lastUpdated?: string;
}

const BackendDataContext = createContext<BackendDataContextType | undefined>(undefined);

export const useBackendData = () => {
  const context = useContext(BackendDataContext);
  if (!context) {
    throw new Error('useBackendData must be used within BackendDataProvider');
  }
  return context;
};

interface BackendDataProviderProps {
  children: ReactNode;
}

export const BackendDataProvider: React.FC<BackendDataProviderProps> = ({ children }) => {
  const queryResult: UseQueryResult<BackendResponse, Error> = useQuery({
    queryKey: ['backend-data'],
    queryFn: () => apiService.getAllData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
    retryOnMount: true
  });

  const { data: backendData, isLoading, error, refetch } = queryResult;

  // Use backend data
  const data = {
    learningPaths: backendData?.learningPaths || [],
    courses: backendData?.courses || [],
    projects: backendData?.projects || [],
    roadmapItems: backendData?.roadmapItems || [],
    roadmapProjects: backendData?.roadmapProjects || [],
  };

  const contextValue: BackendDataContextType = {
    data,
    isLoading,
    error,
    refetch,
    lastUpdated: backendData?.metadata?.lastUpdated
  };

  return (
    <BackendDataContext.Provider value={contextValue}>
      {children}
    </BackendDataContext.Provider>
  );
};
