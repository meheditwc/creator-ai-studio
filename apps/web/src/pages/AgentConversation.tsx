import React, { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Textarea } from '../components/Textarea'

export function AgentConversation() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI assistant. How can I help you create something amazing today?' }
  ])

  const handleSend = () => {
    if (!message.trim()) return
    setMessages([...messages, { role: 'user', content: message }])
    setMessage('')
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I understand. Let me help you with that. Please wait...' 
      }])
    }, 1000)
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Agent Conversation
      </h2>
      <Card className="h-96 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t dark:border-gray-700 p-4">
          <div className="flex space-x-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              rows={2}
            />
            <Button variant="primary" onClick={handleSend} className="self-end">
              Send
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}