import Fastify from 'fastify'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { resolve } from 'path'

const app = Fastify({ logger: true })

// Database setup
const dbPath = process.env.OPENCREATOR_DATA_DIR || '.runtime'

async function initDb() {
  const db = await open({
    filename: resolve(dbPath, 'app.sqlite'),
    driver: sqlite3.Database,
  })

  await db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      createdAt TEXT
    );

    CREATE TABLE IF NOT EXISTS runs (
      id TEXT PRIMARY KEY,
      projectId TEXT,
      status TEXT DEFAULT 'pending',
      createdAt TEXT
    );
  `)

  return db
}

const db = await initDb()

// API routes
app.get('/api/projects', async (request, reply) => {
  const projects = await db.all('SELECT * FROM projects')
  return { projects }
})

app.post('/api/projects', async (request, reply) => {
  const { name, description } = request.body as any
  const id = Date.now().toString()
  await db.run(
    'INSERT INTO projects (id, name, description, createdAt) VALUES (?, ?, ?, ?)',
    [id, name, description, new Date().toISOString()]
  )
  return { id, name, description }
})

app.get('/health', async () => {
  return { status: 'ok', timestamp: new Date().toISOString() }
})

const port = process.env.PORT || 9861
app.listen({ port, host: '127.0.0.1' }).then(() => {
  console.log(`Daemon running on http://localhost:${port}`)
})

export default app