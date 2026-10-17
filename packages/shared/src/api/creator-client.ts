export *
export class CreatorAPI {
  private baseUrl: string
  private apiKey: string

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl
    this.apiKey = apiKey
  }

  async chat(messages: any) {
    return await this.request('/chat/completions', { messages })
  }

  async generateImage(prompt: string) {
    return await this.request('/images/generations', { prompt })
  }

  private async request(endpoint: string, body: any) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    return response.json()
  }
}

export interface Project {
  id: string
  name: string
  description?: string
  createdAt: Date
}

export interface Run {
  id: string
  projectId: string
  status: 'pending' | 'running' | 'completed' | 'failed'
  createdAt: Date
}