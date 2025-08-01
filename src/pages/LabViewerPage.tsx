import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, FileText, Folder, FolderOpen, Download, Clock, AlertCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { apiService } from '../services/apiService';
import { LabContent, LabFile } from '../types/lab';

const LabViewerPage: React.FC = () => {
  const { labName } = useParams<{ labName: string }>();
  const navigate = useNavigate();
  const [labContent, setLabContent] = useState<LabContent | null>(null);
  const [selectedFile, setSelectedFile] = useState<LabFile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchLabContent = async () => {
      if (!labName) {
        setError('Lab name is required');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const response = await apiService.getLabContent(labName);
        
        if (response.success) {
          setLabContent(response.data);
          // Auto-select the main instruction file if it exists
          const mainFile = response.data.files.find(f => 
            f.name.toLowerCase().includes('readme') || 
            f.name.toLowerCase().includes('instruction')
          );
          if (mainFile) {
            setSelectedFile(mainFile);
          }
        } else {
          setError(response.error || 'Failed to load lab content');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load lab content');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLabContent();
  }, [labName]);

  const toggleFolder = (path: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }
      return newSet;
    });
  };

  const handleFileSelect = (file: LabFile) => {
    if (file.type === 'file') {
      setSelectedFile(file);
    } else {
      toggleFolder(file.path);
    }
  };

  const renderFileTree = (files: LabFile[], level = 0) => {
    return (
      <div className={`${level > 0 ? 'ml-4' : ''}`}>
        {files.map((file, index) => (
          <div key={`${file.path}-${index}`} className="mb-1">
            <button
              onClick={() => handleFileSelect(file)}
              className={`flex items-center gap-2 p-2 rounded-lg w-full text-left transition-colors ${
                selectedFile?.path === file.path
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-slate-700 text-slate-300'
              }`}
            >
              {file.type === 'directory' ? (
                expandedFolders.has(file.path) ? (
                  <FolderOpen className="w-4 h-4 text-blue-400" />
                ) : (
                  <Folder className="w-4 h-4 text-blue-400" />
                )
              ) : (
                <FileText className="w-4 h-4 text-slate-400" />
              )}
              <span className="text-sm">{file.name}</span>
              {file.type === 'file' && (
                <span className="text-xs text-slate-500 ml-auto">
                  {(file.size / 1024).toFixed(1)}KB
                </span>
              )}
            </button>
            
            {file.type === 'directory' && file.children && expandedFolders.has(file.path) && (
              <div className="ml-4">
                {renderFileTree(file.children, level + 1)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const getLanguageFromExtension = (filename: string): string => {
    const ext = filename.split('.').pop()?.toLowerCase();
    const languageMap: { [key: string]: string } = {
      'js': 'javascript',
      'ts': 'typescript',
      'jsx': 'javascript',
      'tsx': 'typescript',
      'py': 'python',
      'java': 'java',
      'cpp': 'cpp',
      'c': 'c',
      'cs': 'csharp',
      'php': 'php',
      'rb': 'ruby',
      'go': 'go',
      'rs': 'rust',
      'sh': 'bash',
      'yaml': 'yaml',
      'yml': 'yaml',
      'json': 'json',
      'xml': 'xml',
      'html': 'html',
      'css': 'css',
      'md': 'markdown',
      'sql': 'sql',
      'dockerfile': 'dockerfile'
    };
    return languageMap[ext || ''] || 'text';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-300">Loading lab content...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !labContent) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Lab Not Found</h1>
            <p className="text-slate-300 mb-4">{error || 'The requested lab could not be loaded.'}</p>
            <Button onClick={() => navigate(-1)} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{labContent.labName} - Lab Viewer</title>
        <meta name="description" content={labContent.description} />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header />
        
        {/* Header */}
        <div className="border-b border-slate-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => navigate(-1)}
                className="inline-flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Course
              </button>
              
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  {labContent.metadata.totalFiles} files
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Updated {new Date(labContent.metadata.lastUpdated).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lab Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Lab Info */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">{labContent.labName}</h1>
            <p className="text-slate-300 text-lg mb-4">{labContent.description}</p>
            {labContent.metadata.mainInstruction && (
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300">{labContent.metadata.mainInstruction}</p>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* File Tree */}
            <div className="lg:col-span-1">
              <Card className="p-4 bg-slate-900/50 border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Lab Files</h3>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {renderFileTree(labContent.files)}
                </div>
              </Card>
            </div>

            {/* File Content */}
            <div className="lg:col-span-3">
              <Card className="p-6 bg-slate-900/50 border-slate-800">
                {selectedFile ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{selectedFile.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <span>{getLanguageFromExtension(selectedFile.name)}</span>
                        <span>•</span>
                        <span>{(selectedFile.size / 1024).toFixed(1)}KB</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-slate-300 whitespace-pre-wrap">
                        {selectedFile.content || 'File content not available'}
                      </pre>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Select a file to view</h3>
                    <p className="text-slate-400">Choose a file from the file tree to view its contents</p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabViewerPage;