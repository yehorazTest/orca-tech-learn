
export interface LabFile {
  path: string;
  name: string;
  type: 'file' | 'directory';
  content?: string;
  children?: LabFile[];
  size: number;
  language?: string;
}

export interface LabContent {
  labName: string;
  description: string;
  files: LabFile[];
  metadata: {
    lastUpdated: string;
    totalFiles: number;
    mainInstruction: string;
  };
}

export interface LabContentResponse {
  success: boolean;
  data: LabContent;
  error?: string;
}
