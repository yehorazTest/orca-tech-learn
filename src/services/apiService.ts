
import { BackendResponse, ApiError } from '../types/backend';

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_PATH || 'http://localhost:5000';

class ApiService {
  private async fetchWithRetry(url: string, retries = 3): Promise<Response> {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          return response;
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      }
    }
    throw new Error('Max retries exceeded');
  }

  async getAllData(): Promise<BackendResponse> {
    try {
      const response = await this.fetchWithRetry(`${BASE_URL}/api/data`);
      const data = await response.json();
      
      return {
        learningPaths: data.learningPaths || [],
        courses: data.courses || [],
        projects: data.projects || [],
        roadmapItems: data.roadmapItems || [],
        metadata: data.metadata || {
          lastUpdated: new Date().toISOString(),
          version: '1.0.0'
        }
      };
    } catch (error) {
      console.error('Failed to fetch backend data:', error);
      throw new ApiError({
        message: error instanceof Error ? error.message : 'Failed to fetch data',
        timestamp: new Date().toISOString()
      });
    }
  }

  async refreshData(): Promise<BackendResponse> {
    return this.getAllData();
  }
}

export const apiService = new ApiService();

class ApiError extends Error {
  status?: number;
  timestamp: string;

  constructor({ message, status, timestamp }: { message: string; status?: number; timestamp: string }) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.timestamp = timestamp;
  }
}
