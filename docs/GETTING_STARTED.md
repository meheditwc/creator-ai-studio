# Getting Started

## Prerequisites

- Node.js 22+
- pnpm 9.15.0+
- Codex CLI
- Docker (for FreeLLMAPI)

## Installation

```bash
# Clone repo
git clone https://github.com/meheditwc/creator-ai-studio.git
cd creator-ai-studio

# Enable pnpm
corepack enable

# Install dependencies
pnpm install

# Setup FreeLLMAPI
docker run -d -p 3001:3001 ghcr.io/tashfeenahmed/freellmapi:latest

# Copy env file
cp .env.example .env

# Edit .env with your FreeLLMAPI key
```

## Running

```bash
# Web app
pnpm web:dev

# Daemon
pnpm daemon:dev

# Desktop app
pnpm desktop:dev
```

## First Workflow

1. Open http://127.0.0.1:19861/
2. Configure AI Services in Settings
3. Create project
4. Start Agent conversation
5. Try Video Translation or Image Generation
