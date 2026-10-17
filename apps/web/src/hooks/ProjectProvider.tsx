import React, { createContext, useContext, useState, useEffect } from 'react'

const ProjectContext = createContext({ projects: [], setProjects: (p: any) => {} })

export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('projects')
    if (stored) setProjects(JSON.parse(stored))
  }, [])

  const addProject = (project: any) => {
    const newProject = { id: Date.now(), name: project.name, description: project.description, createdAt: new Date() }
    setProjects(prev => [...prev, newProject])
    localStorage.setItem('projects', JSON.stringify([...projects, newProject]))
  }

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useProjects = () => useContext(ProjectContext)