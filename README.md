# Creator AI Studio

An open-source AI workspace for creators, powered by Codex and FreeLLMAPI. Generate videos, images, voice, avatars, and translations in one place.

## Features

- 🤖 **Codex Native** - Reuse Codex Agent loop, models, reasoning, tool calls, conversations, Skills, and MCP
- 🚀 **Ready-to-Use Desktop App** - Launch OpenCreator directly from desktop with Codex CLI included
- 🎨 **Multimodal Creation** - Create and manage video, images, audio, subtitles, and documents through one connected workflow
- 🧩 **Creation Templates** - Start creating images and videos from reusable templates
- 🔗 **Dual-Mode Workflow** - Work through visual workspace or Agent conversation with shared state machine
- 💰 **Free LLM Routing** - Integrate FreeLLMAPI for free LLM access

## Architecture

```
apps/
├── web/          # React web app
├── desktop/      # Electron desktop app
├── daemon/       # Local runtime server
packages/
└── shared/       # Shared utilities
skills/           # Codex Skills definitions
docs/             # Documentation
```

## Creator Tools

| Tool | Status | Capabilities |
|---|---|---|
| Video Translation | ✅ Available | Import videos, transcribe, translate subtitles, dubbing, export SRT/audio/video |
| Video Downloader | ✅ Available | Download from YouTube, Bilibili, TikTok, Instagram, Douyin, etc. |
| Thumbnail Generator | ✅ Available | Generate multiple content thumbnail variations |
| Image Generation | ✅ Available | Generate with GPT Image from prompt and optional reference image |
| Article Writer | ✅ Available | Turn topic/links/videos into editable article and export Markdown/HTML/PDF |
| Short Video Script | ✅ Available | Create shoot-ready segmented script tailored to audience/platform |
| Stick Figure Animation | ✅ Available | Turn text/YouTube content into narration, voice, storyboard, subtitles, and video |

## FreeLLMAPI Integration

This project integrates with [FreeLLMAPI](https://github.com/tashfeenahmed/freellmapi) for free LLM routing:

1. Run FreeLLMAPI: `docker run -d -p 3001:3001 ghcr.io/tashfeenahmed/freellmapi:latest`
2. Get unified API key from http://localhost:3001
3. Configure in Creator AI Studio: Settings → AI Services → Base URL: http://localhost:3001/v1

## Quick Start

### Prerequisites
- Node.js 22+
- pnpm 9.15.0+
- Codex CLI

### Installation
```bash
git clone https://github.com/meheditwc/creator-ai-studio.git
cd creator-ai-studio
corepack enable
pnpm install
pnpm web:dev
```

Open http://127.0.0.1:19861/ and finish Codex setup.

## Skills Directory

The `skills/` directory contains reusable instructions for Agents operating Codex CLI:

- `krillinai-cli/SKILL.md` - Choose commands, check configuration
- `krillinai-subtitle/SKILL.md` - Download captions, transcribe, translate subtitles
- `krillinai-tts/SKILL.md` - Generate target-language dubbing from subtitles
- `krillinai-render-horizontal/SKILL.md` - Render landscape videos
- `krillinai-render-vertical/SKILL.md` - Compose portrait videos

## License

Apache-2.0
