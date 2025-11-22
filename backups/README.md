# 📦 Steam Deck Pirates - Backup Archive

## 📋 Overview
This directory contains timestamped backups of all critical files for the Steam Deck Pirates website and documentation.

## 🗂️ Backup Structure

Each backup is stored in its own directory with the format:
```
YYYY-MM-DD-HHMMSS-description/
```

Example: `2025-11-22-153045-updating-lutris-guide/`

## 📁 What's Backed Up

Every backup includes:
- ✅ `README.md` - Main content file
- ✅ `index.md` - Jekyll landing page
- ✅ `_config.yml` - Site configuration
- ✅ `_docs/` - All documentation files
- ✅ `_layouts/` - Jekyll layout templates
- ✅ `_sass/` - Stylesheet customizations
- ✅ `assets/` - CSS and other resources
- ✅ `BACKUP_INFO.txt` - Metadata about the backup

## 🔧 Using Backups

### View Available Backups
From the repository root:
```bash
ls -lht backups/
```

### Create New Backup
```bash
bash auto-backup.sh "description-of-changes"
```

### Restore from Backup
```bash
bash restore-backup.sh 2025-11-22-153045-backup-name
```

### View Backup Information
```bash
cat backups/2025-11-22-153045-backup-name/BACKUP_INFO.txt
```

## 📜 Backup History

### 2025-10-05-baseline
- Initial baseline backup from October 5th, 2025
- Original state before automation

### 2025-11-22-pre-automation-setup
- Backup created before implementing the automated backup system
- Includes all files as they existed before automation scripts

### Future Backups
All future backups will be automatically created with timestamps and descriptions when using the backup scripts.

## 🔒 Safety Features

- **Timestamped**: Each backup has unique timestamp (no overwrites)
- **Descriptive**: Each includes description of what changed
- **Metadata**: Each includes Git commit hash and creation date
- **Local Only**: Backups stay on your machine (not in Git repository)

## 🗑️ Backup Maintenance

### When to Clean Up
- Keep at least **3-5 recent backups** as safety nets
- Archive or delete older backups periodically
- Before major releases, ensure you have a clean backup

### How to Clean Up
```bash
# From repository root
cd backups/

# List backups by date (oldest first)
ls -lt

# Remove old backup (example)
rm -rf 2025-01-15-old-backup-name/
```

## ⚠️ Important Notes

### DO NOT Delete These Backups:
- ✋ `2025-10-05-baseline/` - Original baseline
- ✋ `2025-11-22-pre-automation-setup/` - Pre-automation state
- ✋ Any backup with "baseline" in the name

### Safe to Delete:
- ✅ Duplicate backups from the same day
- ✅ Backups older than 30 days (if you have newer ones)
- ✅ Test/experimental backups

## 🔄 Restoration Process

The restore script (`restore-backup.sh`) automatically:
1. Shows backup information
2. Asks for confirmation
3. Creates a safety backup of current state
4. Restores all files from selected backup
5. Confirms successful restoration

## 📖 Full Documentation

For complete backup system documentation, see:
- **`../BACKUP_SYSTEM.md`** - Detailed backup system guide
- **`../SETUP_COMPLETE.md`** - Quick start guide

## 🆘 Emergency Recovery

If you need to recover and don't have access to scripts:

### Manual Restoration
```bash
# From repository root
cp -r backups/YYYY-MM-DD-HHMMSS-name/README.md ./
cp -r backups/YYYY-MM-DD-HHMMSS-name/index.md ./
cp -r backups/YYYY-MM-DD-HHMMSS-name/_config.yml ./
cp -r backups/YYYY-MM-DD-HHMMSS-name/_docs/* ./_docs/
cp -r backups/YYYY-MM-DD-HHMMSS-name/_layouts/* ./_layouts/
cp -r backups/YYYY-MM-DD-HHMMSS-name/_sass/* ./_sass/
cp -r backups/YYYY-MM-DD-HHMMSS-name/assets/* ./assets/
```

---

**Remember**: Always backup before making changes! 🚀

```bash
bash auto-backup.sh "your-description-here"
```
