# Lab Content API Specification

## Endpoint
```
GET /api/v1/lab/content
```

## Headers
```
Content-Type: application/json
X-Lab-Url: {full_lab_repository_url}
```

## Request Example
```http
GET /api/v1/lab/content HTTP/1.1
Host: your-backend-domain.com
Content-Type: application/json
X-Lab-Url: https://github.com/username/docker-lab-repo
```

## Response Structure

### Success Response (200 OK)
```json
{
  "success": true,
  "data": {
    "labName": "string",
    "description": "string", 
    "files": [
      {
        "path": "string",
        "name": "string", 
        "type": "file" | "directory",
        "size": "number",
        "language": "string (optional)",
        "content": "string (only for files)",
        "children": [ 
          // Array of LabFile objects (only for directories)
          // Recursive structure - same as parent LabFile
        ]
      }
    ],
    "metadata": {
      "lastUpdated": "string (ISO date)",
      "totalFiles": "number",
      "mainInstruction": "string"
    }
  }
}
```

### Error Response (4xx/5xx)
```json
{
  "success": false,
  "error": "string",
  "message": "string (optional)"
}
```

## Data Types

### LabFile Object
```typescript
interface LabFile {
  path: string;           // Full path from root (e.g., "app/main.py")
  name: string;           // File/folder name only (e.g., "main.py")
  type: "file" | "directory";
  size: number;           // Size in bytes
  language?: string;      // Programming language (for syntax highlighting)
  content?: string;       // File content (only for type: "file")
  children?: LabFile[];   // Nested files/folders (only for type: "directory")
}
```

### LabContent Object
```typescript
interface LabContent {
  labName: string;        // Display name of the lab
  description: string;    // Lab description/overview
  files: LabFile[];       // Root level files and directories
  metadata: {
    lastUpdated: string;    // ISO date string
    totalFiles: number;     // Total count of files (not directories)
    mainInstruction: string; // Main instruction or getting started text
  };
}
```

## Implementation Notes

### 1. File Processing
- **Repository Parsing**: Use the `X-Lab-Url` header to clone/fetch the repository
- **File Tree Generation**: Recursively scan the repository to build the file tree
- **Content Reading**: Read file contents for display in the lab viewer
- **Language Detection**: Determine programming language from file extensions
- **Size Calculation**: Calculate file sizes in bytes

### 2. Language Detection Map
```typescript
const languageMap = {
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
```

### 3. Repository URL Formats Supported
- GitHub: `https://github.com/username/repo-name`
- GitLab: `https://gitlab.com/username/repo-name`
- Bitbucket: `https://bitbucket.org/username/repo-name`
- Custom Git URLs: `https://git.company.com/project/repo`

### 4. Error Handling
- **Invalid URL**: Return 400 Bad Request
- **Repository Not Found**: Return 404 Not Found
- **Access Denied**: Return 403 Forbidden
- **Network Issues**: Return 502 Bad Gateway
- **Processing Errors**: Return 500 Internal Server Error

## Sample Response Data

### Example File Structure
```
docker-lab-repo/
├── README.md
├── Dockerfile
├── docker-compose.yml  
├── requirements.txt
├── app/
│   ├── main.py
│   └── config.py
├── nginx/
│   └── nginx.conf
├── scripts/
│   ├── build.sh
│   ├── run.sh
│   └── cleanup.sh
└── lab-exercises.md
```

### Corresponding JSON Response
```json
{
  "success": true,
  "data": {
    "labName": "Docker Container Management Lab",
    "description": "Learn Docker fundamentals with hands-on exercises",
    "files": [
      {
        "path": "README.md",
        "name": "README.md", 
        "type": "file",
        "size": 2048,
        "language": "markdown",
        "content": "# Docker Lab\n\n## Overview\n..."
      },
      {
        "path": "app",
        "name": "app",
        "type": "directory", 
        "size": 0,
        "children": [
          {
            "path": "app/main.py",
            "name": "main.py",
            "type": "file",
            "size": 1024,
            "language": "python", 
            "content": "#!/usr/bin/env python3\n..."
          }
        ]
      }
    ],
    "metadata": {
      "lastUpdated": "2024-01-15T10:30:00Z",
      "totalFiles": 10,
      "mainInstruction": "Start with README.md for lab overview and setup instructions"
    }
  }
}
```

## Backend Implementation Suggestions

### 1. Repository Caching
- Cache parsed repositories to avoid repeated git operations
- Use repository URL + commit hash as cache key
- Implement cache expiration (e.g., 1 hour)

### 2. File Filtering
- Ignore common files: `.git/`, `node_modules/`, `.DS_Store`, etc.
- Limit file size for content reading (e.g., max 1MB per file)
- Skip binary files for content display

### 3. Security Considerations
- Validate and sanitize repository URLs
- Implement rate limiting
- Scan for malicious content
- Use temporary directories for git operations
- Clean up cloned repositories after processing

### 4. Performance Optimization
- Implement asynchronous file processing
- Use streaming for large repositories
- Parallel file content reading
- Compress response data

This specification provides everything needed to build a backend service that can fetch lab content from any Git repository and return it in the format expected by your frontend lab viewer.