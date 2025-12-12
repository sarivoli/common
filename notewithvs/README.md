# Note with VS

A Markdown note manager for VS Code with local file support and reminder support.

![Icon](resources/logo.png)

## Features in Action

### Installation
![Installation Demo](https://static.wixstatic.com/media/1c4343_136ce419f57c405d988ddaa03531f245~mv2.gif)

### Copy Note
![Copy Note Demo](https://static.wixstatic.com/media/1c4343_9c3f8254abee4cbdacdbac67377cda82~mv2.gif)

### Create/Use Template
![Create/Use Template Demo](https://static.wixstatic.com/media/1c4343_86612f6165c04a51bf52b92646f93237~mv2.gif)

### Add Note and Reminder
![Add Note and Reminder Demo](https://static.wixstatic.com/media/1c4343_de0598c4d4bf46ed8b4f2294f150ee55~mv2.gif)

## Features

*   **Local Note Management**: Store your notes as standard Markdown files in a local folder of your choice.
*   **Labels as Folders**: Organize your notes using subfolders, which act as "Labels".
*   **Reminders & Follow-ups**: Add reminders to your notes using a simple syntax (`- [ ] Task @due(YYYY-MM-DD)`).
*   **Dedicated Side Bar**: Access your notes and reminders easily from the custom Side Bar view.
*   **Cross-Platform**: Works seamlessly on Windows, Linux, and macOS.

## Getting Started

1.  Install the extension.
2.  **Default Storage**: By default, notes are stored in `Documents/NoteForVS`.
3.  **Custom Storage**: You can configure a custom folder in Settings:
    *   Open VS Code Settings (`Ctrl+,`).
    *   Search for `notewithvs.notesFolderPath`.
    *   Enter the absolute path to your desired folder.
4.  The "Note with VS" icon will appear in the Activity Bar. Click it to start creating notes!

## Reminder Syntax

To create a reminder, simply add a task list item in any note with the `@due(date)` tag:

```markdown
- [ ] Call Alice about the project @due(2023-12-01)
- [ ] Review PR #123 @due(2023-11-25)
```

The extension will automatically detect these and list them in the "Reminders" view, grouped by:
*   **Overdue**
*   **Today**
*   **Upcoming**

## Managing Notes

### Creating Notes
You can create a new note by:
*   Clicking the `+` (Create Note) button in the "Notes" view title bar.
*   Running the command `Note with VS: Create Note`.
*   Right-clicking on a folder or note in the "Notes" view and selecting **Create Note**.

**Context-Aware Creation**: When you create a note while a folder or note is selected in the Notes view, the new note will be created in that location:
*   If a **folder** is selected, the note is created inside that folder.
*   If a **note** is selected, the new note is created in the same folder as the selected note.
*   If nothing is selected, the note is created in the root notes folder.

This makes it easy to organize your notes without manually navigating to different folders.

### Creating Labels (Folders)
You can create a new label (folder) by:
*   Clicking the folder icon in the "Notes" view title bar.
*   Running the command `Note with VS: Create Label`.
*   Right-clicking on a folder or note in the "Notes" view and selecting **Create Label**.

**Context-Aware Creation**: Similar to notes, labels are created based on your current selection:
*   If a **folder** is selected, the new label is created as a subfolder inside it.
*   If a **note** is selected, the new label is created in the same folder as the selected note.
*   If nothing is selected, the label is created in the root notes folder.

### Deleting Notes
To delete a note:
*   Right-click on the note in the "Notes" view and select **Delete**.
*   Or use the command `Note with VS: Delete Note`.

### Renaming Notes
To rename a note:
*   Right-click on the note in the "Notes" view and select **Rename**.
*   Or use the command `Note with VS: Rename Note`.

### Copy to Clipboard
You can copy the content of any active editor to a new note in the `Clipboard` folder by:
*   Running the command `Note with VS: Copy Notes`.
*   Right-clicking in the editor and selecting `Copy Notes`.

The new note will be created with a filename format: `<source_filename>_CLP_<timestamp>.md`. If the source is untitled, it defaults to `Clipboard_<timestamp>.md`.

## Git Sync

You can sync your notes to a remote Git repository (e.g., GitHub, GitLab) directly from VS Code.

1.  **Initialize Git**: Ensure your notes folder is a valid Git repository (`git init`) and has a remote configured (`git remote add origin <url>`).
2.  **Configure .gitignore (Optional)**: To keep certain folders local-only (like the Clipboard folder), create a `.gitignore` file in your notes folder:
    ```
    # Keep clipboard notes local only
    Clipboard/
    ```
3.  **Sync**: Run the command `Note with VS: Save and Sync Notes`.
    *   This will stage all changes, commit them with a default message, and push to the current branch.
    *   **Note**: You must have your Git credentials configured (e.g., via a credential helper or SSH keys) as the extension does not currently prompt for passwords.
    *   After syncing, all panels (Notes, Reminders, and Templates) will automatically refresh to reflect the latest state.

### Git Status Indicators

The extension provides visual indicators for the Git status of your notes directly in the Notes view:

*   **Modified** (🟡): Notes that have been modified but not yet committed are shown with a yellow modified icon.
*   **Untracked** (🟢): New notes that haven't been added to Git are shown with a green untracked icon.
*   **Added** (🟢): Notes that have been staged for commit are shown with a green added icon.
*   **Deleted** (🔴): Notes that have been deleted are shown with a red deleted icon.
*   **Conflict** (⚠️): Notes with merge conflicts are shown with a warning icon.

These indicators help you quickly identify which notes need to be synced or have pending changes.

### Keeping Folders Local-Only

The extension **automatically excludes the `Clipboard` folder** from git sync operations. This means:
- ✅ Clipboard notes created via "Copy to Clipboard" feature remain local-only
- ✅ No manual `.gitignore` configuration needed
- ✅ Works out-of-the-box for all users

If you want to exclude additional folders from git sync, create a `.gitignore` file in your notes folder:

1. Navigate to your notes folder (e.g., `~/Documents/NoteForVS`)
2. Create a file named `.gitignore`
3. Add the folders you want to keep local:
   ```
   # Additional folders to keep local
   Private/
   Drafts/
   Temp/
   ```
4. Save the file

## Template Syntax

You can define templates within your notes using HTML comments. This allows you to quickly insert reusable snippets.

```markdown
<!-- @template(Daily Standup) -->
### Daily Standup
- **Yesterday**: 
- **Today**: 
- **Blockers**: 
<!-- @endtemplate -->
```

The extension will detect these templates and list them in the "Templates" view. Clicking a template will copy its content to your clipboard.

### Hiding Templates
If you want to define a template but hide it from the "Templates" view (e.g., for a base template you don't use directly), you can add the `hidden` attribute:

```markdown
<!-- @template(Base Template, hidden) -->
Content to be hidden from template list
<!-- @endtemplate -->
```

You can also hide a template by right-clicking it in the "Templates" view and selecting **Hide Template**.

## Requirements

*   VS Code 1.80.0 or higher.

## Extension Settings

*   `notewithvs.notesFolderPath`: The absolute path to your local notes directory. Defaults to `~/Documents/NoteForVS`.
*   `notewithvs.maxFolderDepth`: Maximum folder nesting depth allowed (1-10). Default is 5 levels. Deeper folder structures may cause performance issues.



## Release Notes

### 1.1.0

*   **Folder Management**: Added support for recursive folder scanning, allowing you to see nested subfolders in the Notes view.
*   **Move Notes**: You can now move notes between folders using the "Move Note" context menu option.
*   **Folder Depth Limit**: Introduced a configurable folder depth limit (default 5) to prevent performance issues with deeply nested structures.
*   **Context Menus**: Added "Create Label" and "Create Note" options to folder and note context menus for easier organization.
*   **Documentation**: Added GIF demonstrations for key features in the README.

### 1.0.1

*   **Improved Refresh**: Clicking "Refresh" now automatically clears any active search in the Notes panel.
*   **Enhanced Clipboard Filenames**: Notes created via "Copy to Clipboard" now include the source filename in their name (e.g., `MyNote_CLP_2023-10-27...md`) for better traceability.

### 1.0.0

* Update clipboard note to capture source of the content
* Include/Exclude options for sync clipboard notes as default in settings window
* Improved performance by using caching along with progress indicator
* Added over all counts in each sections for better visibility

### 0.1.4

* Addressed minor issues

### 0.1.3

* Sync via Git (total control over your data)
* Copy to Clipboard feature (temporary notes - Excluded from sync)
* Added Templates feature (reusable snippets)
* Context aware creation of notes and labels
* Search notes across folders

### 0.1.2

* Added panel for notes, reminders and templates 

### 0.1.0

* Added default storage folder (`Documents/NoteForVS`).

### 0.0.1

* Initial release with Note and Label management.
* Added Reminder system.
