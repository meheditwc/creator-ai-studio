import React from 'react'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Settings() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Settings
      </h2>
      <div className="space-y-6">
        <Card title="FreeLLMAPI Configuration">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Base URL
              </label>
              <Input defaultValue="http://localhost:3001/v1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Unified API Key
              </label>
              <Input type="password" placeholder="freellmapi-..." />
            </div>
            <Button variant="primary">Save Changes</Button>
          </div>
        </Card>

        <Card title="AI Services">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                OpenAI API Key (Optional)
              </label>
              <Input type="password" placeholder="sk-..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                DeepSeek API Key (Optional)
              </label>
              <Input type="password" placeholder="sk-..." />
            </div>
            <Button variant="primary">Save Keys</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}