# User Guide - Note with VS

## Overview
Note with VS is a powerful, local-first note-taking extension for Visual Studio Code. It allows you to create notes, manage tasks with reminders, and use templates—all stored as simple Markdown files on your computer.

With version 1.3.0, the **Dashboard** now fully supports deep folder structures, ensuring all your notes are visible regardless of how you organize them.

---

## 1. Getting Started

### Installation
1. Install the extension from the VS Code Marketplace.
2. By default, notes are stored in `Documents/NoteForVS`.
3. To change this location, go to **Settings > Note with VS > Notes Folder Path**.

### The Sidebar
Click the **Note with VS** icon in the Activity Bar (left side) to see three views:
- **Notes**: Your folder structure and notes.
- **Reminders**: Tasks extracted from your notes.
- **Templates**: Reusable note snippets.

---

## 2. Using the Dashboard (New in v1.3.0)

The **Dashboard** gives you a full-screen overview of your entire workspace.

### Opening the Dashboard
- Click the **Open Dashboard** icon `$(preview)` in the **Notes** view title bar.
- Or, run the command `Note with VS: Open Dashboard`.

### Dashboard Features
- **Guided Setup (New in v1.3.0)**: If you haven't configured any note folders yet, both the Dashboard and the Sidebar views greet you with a helpful setup guide to get you started immediately.
- **Notes Card View**: See all your notes as cards with previews of their content and sync status. Click a card to open the note.
- **Reminders Agenda**: View your tasks grouped by Overdue, Today, and Upcoming.
- **Templates Board**: Access your templates as sticky notes. Click "Use" to create a new note from a template.

---

## 3. Managing Notes

### Creating a Note
- Click the `+` icon in the Sidebar or Dashboard.
- Enter a title. The file is created automatically.

### Organizing with Folders
- Click the **New Folder** icon to create a "Label" (folder).
- You can nest folders as deep as you like (configurable limit).

### Moving Notes
- Right-click a note in the Sidebar and select **Move Note**.
- Choose the destination folder.

---

## 4. Reminders & Tasks

To add a task, simply write standard Markdown checkboxes in your notes:

- `-[ ] Simple task` -> Appears in **Todo List**
- `-[ ] Task with deadline @due(2023-12-31)` -> Appears in **Upcoming/Today/Overdue**

The **Reminders** view (and Dashboard Agenda) automatically updates to show these tasks.

---

## 5. Templates

Create reusable templates using HTML comments block:

```markdown
<!-- @template(My Template) -->
# Title
- Item 1
- Item 2
<!-- @endtemplate -->
```

These will appear in the **Templates** view and Dashboard.

---

## 6. Git Sync

If your notes folder is a Git repository:
1. Click the **Save Notes** icon `$(save-all)` in the Sidebar.
2. The extension will automatically stage, commit, and push changes to your remote repository.
3. Status icons (Modified, Added, etc.) appear next to notes in the Sidebar and Dashboard.

---

## FAQ

**Q: Where are my notes stored?**
A: Locally on your machine. Check `Settings > Note with VS` to see or change the path.

**Q: Can I use existing Markdown files?**
A: Yes! Just point the extension to your existing folder.

**Q: How do I search?**
A: Use the **Search** icon in the Sidebar or `Ctrl+Shift+F` within VS Code (if the folder is open in workspace).

**Q: Is my data private?**
A: Yes. The extension does not send any data to the cloud unless you configure Git sync yourself.
