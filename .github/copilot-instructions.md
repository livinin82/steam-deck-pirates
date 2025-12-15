# Copilot AI Agent Instructions for Steam Deck Pirates

## Project Overview
- **Purpose:** This is a documentation and automation project for running Windows games, emulation, and system tweaks on Steam Deck, with a focus on backup safety and user-friendly guides.
- **Structure:**
  - Main docs in `README.md` and `_docs/`
  - Jekyll site structure: `_layouts/`, `_sass/`, `assets/`
  - Backup scripts: `auto-backup.sh`, `backup-script.sh`, `create-backup.sh`, `restore-backup.sh`
  - Backups stored in `backups/` with timestamped folders

## Critical Workflows
- **Backup Before Changes:**
  - Always run `auto-backup.sh` or `create-backup.sh` before modifying docs or site files.
  - Example: `bash auto-backup.sh "my-change-desc"`
  - Backups are stored in `backups/` with metadata.
- **Restore:**
  - Use `restore-backup.sh <backup-folder>` to revert to a previous state. Prompts for confirmation.

## Documentation Patterns
- All user-facing guides are in Markdown, with admonition blocks for warnings, notes, and tips.
- Use clear, step-by-step instructions and tables for app/tool recommendations.
- Cross-link sections using anchor tags (e.g., `[Installing games through Steam](#installing-games-through-steam)`).
- Prefer concise, actionable language over aspirational or generic advice.

## Project Conventions
- **Backups:**
  - Scripts back up all critical files: `README.md`, `index.md`, `_config.yml`, `Gemfile`, `_docs/`, `_layouts/`, `_sass/`, `assets/`.
  - Each backup includes a timestamp and optional description.
- **No direct editing of `_site/` or backup folders.**
- **Admonition HTML:**
  - Use `<blockquote class="admonition-*"></blockquote>` for warnings, notes, tips, and cautions.
- **Jekyll:**
  - Site is built with Jekyll; `_config.yml` controls site settings.

## External Integrations
- **Proton, Wine, Lutris, Bottles, Heroic, EmuDeck, Flatpak, SSH**: Guides reference these tools, but no code integration—just documentation.

## Examples
- To add a new guide: create a Markdown file in `_docs/`, update links in `README.md` or `index.md`.
- To update site style: edit `assets/css/just-the-docs.scss` or `_sass/color_schemes/custom-dark.scss`.

## Key Files/Dirs
- `README.md`, `_docs/`, `auto-backup.sh`, `restore-backup.sh`, `backups/`, `assets/`, `_layouts/`, `_sass/`, `_config.yml`

---

**For AI agents:**
- Always back up before making changes.
- Follow the documentation and backup conventions above.
- Reference and preserve admonition blocks and cross-links.
- Do not modify backup or `_site/` folders.
