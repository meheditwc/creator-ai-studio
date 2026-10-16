export interface CreatorProject {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatorTask {
  id: string;
  projectId: string;
  title: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  createdAt: Date;
}
