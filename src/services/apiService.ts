
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
      const response = await this.fetchWithRetry(`${BASE_URL}/api/v1/data`);
      const responseData = await response.json();
      const data = responseData.data;
      
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
      const apiError: ApiError = {
        message: error instanceof Error ? error.message : 'Failed to fetch data',
        timestamp: new Date().toISOString()
      };
      throw new Error(apiError.message);
    }
  }

  async refreshData(): Promise<BackendResponse> {
    return this.getAllData();
  }
}

export const apiService = new ApiService();
