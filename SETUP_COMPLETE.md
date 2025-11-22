# 🎮 Steam Deck Pirates - Automated Backup System

## ✅ System Setup Complete!

Your Steam Deck Pirates repository now has a fully automated backup and deployment system installed.

---

## 📋 What Was Set Up

### 🔧 Backup Scripts Created

1. **`auto-backup.sh`** - Creates timestamped backups before changes
2. **`restore-backup.sh`** - Restores from previous backups
3. **`make-change.sh`** - All-in-one workflow tool (RECOMMENDED)
4. **`help.sh`** - Quick reference guide
5. **`create-backup.sh`** & **`backup-script.sh`** - Alternative backup utilities

### 📁 Directory Structure

```
steam-deck-pirates/
├── auto-backup.sh          ← Main backup script
├── restore-backup.sh       ← Restore tool
├── make-change.sh         ← Workflow automation (USE THIS!)
├── help.sh                ← Command reference
├── BACKUP_SYSTEM.md       ← Full documentation
├── backups/
│   ├── README.md          ← Backup system docs
│   ├── 2025-11-22-pre-automation-setup/  ← Initial backup
│   └── (future backups will go here)
├── README.md              ← Your main content
├── index.md               ← Jekyll entry point
└── _docs/                 ← Documentation files
```

---

## 🚀 How to Use (Simple Workflow)

### Option 1: Automated Workflow (EASIEST)
```bash
bash make-change.sh
```
This script will:
1. ✅ Create a backup automatically
2. ✅ Let you make your changes
3. ✅ Review what changed
4. ✅ Commit and deploy to GitHub Pages

### Option 2: Manual Workflow
```bash
# 1. Create backup
bash auto-backup.sh "what-im-changing"

# 2. Edit your files
# ... make changes to README.md, docs, etc ...

# 3. Deploy
git add .
git commit -m "Description of changes"
git push origin main
```

---

## 🆘 Quick Commands

### Create a Backup
```bash
bash auto-backup.sh "description"
```

### View All Backups
```bash
bash restore-backup.sh
# OR
ls -lht backups/
```

### Restore a Backup
```bash
bash restore-backup.sh 2025-11-22-153045-backup-name
```

### Show Help
```bash
bash help.sh
```

---

## 📖 Important Notes

### ✅ What Gets Backed Up
- `README.md` - Main content
- `index.md` - Site entry point
- `_config.yml` - Jekyll config
- `_docs/` - All documentation
- `_layouts/` - Site layouts
- `_sass/` - Stylesheets
- `assets/` - CSS and resources

### 🔒 Safety Features
- ✅ Backups are timestamped (can't overwrite)
- ✅ Restore creates safety backup before restoring
- ✅ Confirmation required for restores
- ✅ Git commit hash recorded in each backup
- ✅ Backups stored locally (not pushed to GitHub)

### 🌐 Automatic Deployment
Every push to `main` branch automatically:
1. Triggers GitHub Actions
2. Builds the Jekyll site
3. Deploys to: `https://livinin82.github.io/steam-deck-pirates`
4. Takes ~2 minutes to go live

---

## 📚 Full Documentation

For complete details, see: **`BACKUP_SYSTEM.md`**

---

## 🎯 Best Practices

1. **Always backup before changes**
   ```bash
   bash auto-backup.sh "brief-description"
   ```

2. **Use descriptive backup names**
   - ✅ Good: "updating-proton-guide"
   - ❌ Bad: "changes" or "update"

3. **Keep 3-5 recent backups**
   - Manually clean old backups periodically
   - Old backups in `backups/` can be deleted safely

4. **Test before deploying**
   - Review your changes locally first
   - Use `git diff` to see what changed

5. **Check deployment status**
   - Visit: `https://github.com/livinin82/steam-deck-pirates/actions`
   - Ensure build succeeds (green checkmark)

---

## 🔍 Troubleshooting

### Script won't run
```bash
chmod +x *.sh
```

### Can't find backups
```bash
pwd  # Should show: /workspaces/steam-deck-pirates
ls backups/  # Should list backup directories
```

### Need to undo recent changes
```bash
bash restore-backup.sh
# Select most recent backup from the list
```

---

## 📞 Support

If you encounter issues:
1. Check `BACKUP_SYSTEM.md` for detailed docs
2. Run `bash help.sh` for command reference
3. Review script output for error messages
4. Check file permissions with `ls -la *.sh`

---

## ✨ Summary

You now have a professional backup and deployment system! Every change you make can be:
- ✅ Backed up automatically
- ✅ Restored if needed
- ✅ Deployed automatically to GitHub Pages
- ✅ Tracked with full history

**Start making changes with confidence!** 🚀

---

**Quick Start Command:**
```bash
bash make-change.sh
```

That's it! The script will guide you through the entire process. 🎉
