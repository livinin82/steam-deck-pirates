# Automated Backup & Deployment System

## Overview
This repository now includes an automated backup system that creates timestamped backups before any modifications are made to the website or README files.

## Backup System Components

### 1. `auto-backup.sh`
**Purpose**: Creates a timestamped backup of all critical files before changes are made.

**Usage**:
```bash
bash auto-backup.sh "description-of-change"
```

**Example**:
```bash
bash auto-backup.sh "updating-lutris-section"
bash auto-backup.sh "adding-new-emulator-guide"
bash auto-backup.sh "fixing-typos"
```

**What it backs up**:
- `README.md` - Main content file
- `index.md` - Jekyll landing page
- `_config.yml` - Site configuration
- `_docs/` - All documentation files
- `_layouts/` - Jekyll layout templates
- `_sass/` - Stylesheet customizations
- `assets/` - CSS and other assets

**Backup location**: `backups/YYYY-MM-DD-HHMMSS-description/`

### 2. `restore-backup.sh`
**Purpose**: Restores files from a previous backup.

**Usage**:
```bash
bash restore-backup.sh <backup-directory-name>
```

**Example**:
```bash
bash restore-backup.sh 2025-11-22-153045-updating-lutris-section
```

**List available backups**:
```bash
bash restore-backup.sh
```
(Running without arguments shows all available backups)

### 3. Backup Directory Structure
```
backups/
├── 2025-11-22-pre-automation-setup/    # Initial baseline
│   ├── README.md
│   ├── index.md
│   ├── _config.yml
│   ├── _docs/
│   ├── _layouts/
│   ├── _sass/
│   ├── assets/
│   └── BACKUP_INFO.txt
├── 2025-11-22-153045-updating-section/  # Timestamped backup
│   └── ... (same structure)
└── README.md                            # This file
```

## Workflow

### Before Making Changes
**ALWAYS** create a backup first:
```bash
bash auto-backup.sh "brief-description-of-what-you-are-changing"
```

### Making Changes
1. **Backup created** ✓
2. Edit the files (README.md, docs, etc.)
3. Test changes locally (if applicable)
4. Commit to Git
5. Push to GitHub (triggers automatic deployment)

### If Something Goes Wrong
Restore from the most recent backup:
```bash
# List backups
bash restore-backup.sh

# Restore specific backup
bash restore-backup.sh 2025-11-22-153045-your-backup-name
```

## Important Notes

### Safety Features
- **Pre-restore backup**: The restore script automatically creates a safety backup before restoring
- **Confirmation required**: You must type 'yes' to confirm restoration
- **Backup info**: Each backup includes metadata about what was backed up and when

### Backup Retention
- Backups are **never automatically deleted**
- Manually review and clean old backups periodically
- Keep at least 3-5 recent backups as safety nets

### Git Integration
- Backups are in `.gitignore` (they don't clutter the repository)
- Each backup records the Git commit hash (if available)
- Backups are local only - not synced to GitHub

## Automatic Deployment

### GitHub Pages
This site uses GitHub Pages for automatic deployment:
1. Push changes to the `main` branch
2. GitHub Actions automatically builds the Jekyll site
3. Changes appear at: `https://livinin82.github.io/steam-deck-pirates`

### Deployment Status
Check deployment status at:
`https://github.com/livinin82/steam-deck-pirates/actions`

## Quick Reference

### Create Backup
```bash
bash auto-backup.sh "description"
```

### List Backups
```bash
ls -lht backups/
```

### Restore Backup
```bash
bash restore-backup.sh <backup-name>
```

### View Backup Info
```bash
cat backups/<backup-name>/BACKUP_INFO.txt
```

## Troubleshooting

### "Permission denied" error
Make scripts executable:
```bash
chmod +x auto-backup.sh restore-backup.sh
```

### "Backup directory not found"
Verify you're in the correct directory:
```bash
pwd  # Should show: /workspaces/steam-deck-pirates
ls   # Should show auto-backup.sh and restore-backup.sh
```

### Need to recover deleted backup
Backups are stored in `backups/` - check if accidentally moved:
```bash
find . -name "BACKUP_INFO.txt"
```

## Best Practices

1. **Always backup before changes** - Make it a habit
2. **Use descriptive names** - Makes finding the right backup easier
3. **Test changes locally** - Before pushing to GitHub
4. **Keep recent backups** - At least 3-5 for safety
5. **Document major changes** - In commit messages and backup descriptions

## Support

If you encounter issues with the backup system:
1. Check this documentation
2. Review the backup scripts for error messages
3. Verify file permissions
4. Ensure you're in the correct directory

---

**Remember**: Every change to the website or README should start with:
```bash
bash auto-backup.sh "what-im-changing"
```

This ensures you can always roll back if needed! 🚀
