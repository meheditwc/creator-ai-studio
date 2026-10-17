import React from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

const tools = [
  { name: 'Video Translation', status: '✅', desc: 'Transcribe, translate, dub', icon: '🎬' },
  { name: 'Video Downloader', status: '✅', desc: 'YouTube, Bilibili, TikTok', icon: '⬇️' },
  { name: 'Thumbnail Generator', status: '✅', desc: 'AI thumbnails', icon: '🖼️' },
  { name: 'Image Generation', status: '✅', desc: 'GPT Image, Seedream', icon: '🎨' },
  { name: 'Article Writer', status: '✅', desc: 'Markdown, HTML, PDF', icon: '📝' },
  { name: 'Short Video Script', status: '✅', desc: 'Shoot-ready scripts', icon: '📄' },
  { name: 'Stick Figure Animation', status: '✅', desc: 'Text to animation', icon: '🎭' },
  { name: 'Smart Dubbing', status: '✅', desc: 'Voiceovers with emotion', icon: '🎙️' },
  { name: 'Video Generation', status: '✅', desc: 'Seedance, Kling, Veo', icon: '🎥' },
]

export function CreatorTools() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Creator Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Card key={tool.name} className="hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="text-3xl">{tool.icon}</div>
              <span className="text-sm text-green-600 dark:text-green-400">{tool.status}</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mt-2">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {tool.desc}
            </p>
            <Button variant="secondary" className="w-full">Open Tool</Button>
          </Card>
        ))}
      </div>
    </div>
  )
}