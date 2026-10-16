# Skills Directory

Skills are reusable instructions for Agents operating Codex CLI.

## Structure

Each skill lives in its own directory with a `SKILL.md` file.

## Existing Skills

- `krillinai-cli/SKILL.md` - CLI command selection and configuration
- `krillinai-subtitle/SKILL.md` - Subtitle download/transcription/translation
- `krillinai-tts/SKILL.md` - Text-to-speech dubbing
- `krillinai-render-horizontal/SKILL.md` - Landscape video rendering
- `krillinai-render-vertical/SKILL.md` - Portrait video rendering
- `krillinai-cover/SKILL.md` - Cover image generation
- `krillinai-pipeline/SKILL.md` - Multi-stage output planning

## Creating a New Skill

1. Create directory `skills/your-skill-name/`
2. Create `SKILL.md` with frontmatter and instructions
3. Test with Codex CLI: `codex run --skill your-skill-name`
