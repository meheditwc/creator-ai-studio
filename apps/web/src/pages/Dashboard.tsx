import React from 'react'
import { Card } from '../components/Card'
import { StatCard } from '../components/StatCard'
import { Button } from '../components/Button'
import { useProjects } from '../hooks/useProjects'

export function Dashboard() {
  const { projects, loading } = useProjects()

  if (loading) return <div className="text-center py-8">Loading...</div>

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Dashboard
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Projects" value={projects.length} icon="📁" />
        <StatCard label="Active Runs" value={0} icon="⚡" />
        <StatCard label="Skills Installed" value={4} icon="🧩" />
        <StatCard label="Storage Used" value="0 GB" icon="💾" />
      </div>

      <Card title="Recent Projects">
        {projects.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <p className="mb-4">No projects yet</p>
            <Button variant="primary">Create First Project</Button>
          </div>
        ) : (
          <div className="space-y-3">
            {projects.map((project: any) => (
              <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{project.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                </div>
                <Button variant="secondary">Open</Button>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}