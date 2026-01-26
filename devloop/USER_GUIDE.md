<table border="0" cellspacing="0" cellpadding="0"> 
  <tr>
    <td style="border:none; padding-right:20px;" valign="top">
      <img src="https://raw.githubusercontent.com/sarivoli/common/refs/heads/main/devloop/devloop_logo.png" /> 
    </td>
    <td style="border:none;" valign="top">
      <h2>DevLoop</h2> 
      <i>Unified Development Workflow & Workspace Orchestration</i> <br/><br/>
      <img src="https://img.shields.io/badge/Status-Beta-yellow" /><br/>
      <strong>Version:</strong> 0.2.33<br/>
      <strong>Build:</strong> 1<br/>
    </td>
  </tr>
</table>


**Unified Development Workflow & Workspace Orchestration**

---

## 1. Configuration

Before starting, ensure your environment is configured for seamless integration.

### Git & Jira Setup (Step-by-Step)

1.  **Configure Jira**:
    *   Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
    *   Type `DevLoop: Configure Jira Connection`.
    *   Follow the prompts to enter your **Jira URL**, **Email**, and **API Token**.
    *   *Tip: You can generate an API token from your Atlassian Account Settings settings.*

2.  **Configure Git Provider**:
    *   Run `DevLoop: Configure Git Provider`.
    *   Select your provider (GitHub, GitLab, or Bitbucket).
    *   Enter the API URL (default provided) and your **Personal Access Token**.
    *   *Note: Ensure your token has `repo` or `write` scopes.*

### Storage Locations

DevLoop keeps your project clean. All metadata (logs, task manifests) is stored outside your source code.

*   **Default Location**: `Documents/devloop_storage/`
*   **Structure**: Each workspace (VS Code window) gets its own unique hash folder inside `workspaces/`.
*   **Customization**: You can change this path in VS Code Settings (`devloop.storage.path`), but DevLoop will always manage its own subfolders there.

![Storage Settings Placeholder](placeholder.gif)

---

## 2. Workflows: Commits, Push, and PRs

DevLoop simplifies multi-repo management with unified controls.

### Commit vs Push vs Create PR

1.  **Commit**: 
    *   **What it does**: Stages all changes and creates a local commit in *every* active repository selected in the "Repository Workspace" panel.
    *   **When to use**: Save your work locally across 5 different microservices at once.

2.  **Push**:
    *   **What it does**: Pushes the current branch of all active repositories to the remote origin.
    *   **When to use**: Sync your local commits to the server.

3.  **Create PR**:
    *   **What it does**: Automated workflow:
        1.  Runs `git pull origin <branch>` to ensure you are up to date.
        2.  Runs `git push origin <branch>` to ensure remote has your changes.
        3.  Calls the Provider API (e.g., GitHub) to open a Pull Request.
        4.  Posts the PR link back to your Jira ticket.
    *   **When to use**: When your code is ready for review.

---

## 3. "Prepare Workspace for the Task"

When you start a new task using `DevLoop: Start Task` or the "Start" button, you might see a "Prepare Workspace" option (or it happens automatically depending on config).

**What is its use?**
Use this command to instantly switch the context of your entire environment to match the specific Jira ticket you are working on.

**What it does:**
1.  **Safety Check**: Scans all active repositories for unsaved changes. If found, it asks you to *Stash* or *Ignore*.
2.  **Branch Management**: Creates or switches to a feature branch named after the ticket (e.g., `feature/JIRA-1234`).
3.  **Synchronization**: Ensures all microservices/repos are on the correct branch for that specific feature.

![Prepare Workspace Animation Placeholder](placeholder.gif)

---

## 4. Panels & Functionality

The DevLoop sidebar is your specific command center.

### 1. Active Task Panel
This is your main view while coding.
*   **Ticket Banner**: Shows ID, Summary, Status, and Assignee.
*   **Timer**: Large digital clock.
    *   **Start/Stop**: Controls session recording.
    *   **Pause**: Take a break (auto-pauses after 5 mins of idle time).
*   **Log Work**: When stopping, you can add a comment which is synced to Jira Worklogs.

### 2. Repository Workspace Panel
Manage your multi-repo setup.
*   **Refresh Icon**: Re-scans folders to find new repos or branches.
*   **Checkboxes**: Select which repos are "Active" for the current task. Actions like Commit/Push *only* affect checked repos.
*   **Status Indicators**: Shows if a repo has uncommitted changes or is behind remote.

### 3. History Panel
Review your past work.
*   **Recent Tasks**: List of tickets you've worked on recently.
*   **Logs**: Expand a ticket to see individual time sessions.
*   **Sync Status**: Green check ✅ means logged to Jira; Cloud ☁️ means local only.

### 4. Jira Config Panel
Quick status check.
*   **Connection Lights**: Green/Red indicators for Jira, Git, and Jenkins connectivity.
*   **User Info**: Shows currently logged-in Jira user.

### 5. Linting Hub
(If enabled) A central place to view linting errors across the workspace, filtered by severity.
*   **Granular Scanning**: Individual tabs (Python, JS, HTML, Futurize) now feature dedicated "Scan" buttons, allowing you to trigger module-specific scans without running the entire suite.

---

## 5. Troubleshooting & FAQ

### Troubleshooting Issues
If something isn't working, check the **Output Panel**:
1.  Open VS Code Panel (`Ctrl+J`).
2.  Switch to the **Output** tab.
3.  Select **DevLoop** from the dropdown menu.

This log shows all background activities, including API errors ("401 Unauthorized"), Git command failures, and internal logic steps. It is the first place to look if a button "does nothing".

### FAQ

**Q: My timer disappeared after checking out a new branch.**
A: DevLoop associates timers with specific tickets. Ensure you have "Started" the task for that ticket again. If you restart VS Code, the timer state is restored automatically.

**Q: Can I use this for non-Jira tasks?**
A: Currently, DevLoop is optimized for Jira integration. You can create a "General" task in Jira for miscellaneous work to track time against it.

**Q: Why is "Create PR" failing?**
A: Check the Output panel. Common causes are:
*   Missing Personal Access Token.
*   Remote branch doesn't exist (push first).
*   Token lacks permissions to create PRs.

**Q: Where are my settings?**
A: Most settings are in VS Code Settings (`Ctrl+,` > Search "DevLoop"). Credentials are stored in the OS Keychain/Secret Storage.

---

*For further support, please contact the repository maintainers.*
