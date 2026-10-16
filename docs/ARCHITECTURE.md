# Architecture

OpenCreator treats visual workspace and Agent conversation as two interfaces to same creative task.

## Components

- **Creator Experience** (`apps/web`) - React 18, Vite, TypeScript
- **Collaboration Core** - Shared workflow state machine
- **Local Runtime** (`apps/daemon`) - Fastify, SQLite
- **Codex Engine** - Codex CLI for Agent loop
- **Media Toolchain** - yt-dlp, Whisper, FFmpeg
- **Local Data** - SQLite, filesystem
- **Desktop Host** (`apps/desktop`) - Electron

## State Machine

Each creator workflow is modeled as state machine:
source input → configuration → generation → review → revision → export
