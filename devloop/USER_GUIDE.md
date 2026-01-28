<table border="0" cellspacing="0" cellpadding="0"> 
  <tr>
    <td style="border:none; padding-right:20px;" valign="top">
      <img src="https://raw.githubusercontent.com/sarivoli/common/refs/heads/main/devloop/devloop_logo.png" /> 
    </td>
    <td style="border:none;" valign="top">
      <h2>DevLoop</h2> 
      <i>Unified Development Workflow & Workspace Orchestration</i> <br/><br/>
      <img src="https://img.shields.io/badge/Status-Beta-yellow" /><br/>
      <strong>Version:</strong> 0.2.34<br/>
      <strong>Build:</strong> 14<br/>
    </td>
  </tr>
</table>

# User Guide: Mastering the DevLoop Workflow

Welcome to the official DevLoop User Guide. This document is designed to guide you through initial setup, common development scenarios, and advanced features to maximize your productivity.

---

## 🚀 High-Productivity Workflow (Step-by-Step)

Follow this standard operating procedure to ensure all your work is tracked, linted, and merged efficiently.

1.  **Pick a Ticket**: Click the **Start** button in the sidebar and enter your Jira Ticket ID (e.g., `DEV-123`).
2.  **Prepare Workspace**: Click **Prepare Workspace**. DevLoop will automatically:
    *   Create a feature branch (e.g., `feature/DEV-123`).
    *   Stash any unrelated work from previous sessions.
    *   Synchronize all your active microservices/repositories.
3.  **Code with Focus**: Use the built-in **Timer** to track your effort. If you step away, DevLoop will auto-pause after 5 minutes of idle time.
4.  **Instant Linting**: Before committing, use the **Linting Hub**. Select "Python" or "Web" and click **Scan**.
    *   Use the **Fix** button to auto-resolve style issues.
    *   Use **Modernize** for legacy code modernization (Python 2 to 3).
5.  **Unified Commit**: Instead of running `git commit` in 5 terminals, click the **Commit** button in DevLoop. Your message will automatically include the Ticket ID for traceability.
6.  **Create PR**: Click **Create PR**. DevLoop will pull the latest, push your changes, open the PR in your browser, and **automatically comment the PR link on your Jira ticket**.

---

## ❓ Developer Q&A (Common Questions)

### **Configuration & Setup**

**Q: How can I configure my Git Provider?**
> **A:** Run the command `DevLoop: Configure Git Provider` from the Command Palette (`Ctrl+Shift+P`). You can select GitHub, GitLab, or Bitbucket and provide your Personal Access Token.

**Q: How can I configure the Jira connection?**
> **A:** Run `DevLoop: Configure Jira Connection`. You will need your Jira Base URL, Email, and an API Token (generated from Atlassian Account Settings).

**Q: Where are my credentials stored?**
> **A:** DevLoop uses your **OS Secure Keychain** (macOS Keychain, Windows Credential Manager, or Linux Secret Service). No plain-text passwords or tokens are stored in the project folder.

**Q: How can I update the branding/company name instead of "DevLoop"?**
> **A:** Open VS Code Settings and look for `devloop.branding.name`. Set this to your team or product name to personalize the sidebar and status bar.

---

### **Working with Repositories**

**Q: Why is my repository list grayed out initially?**
> **A:** To ensure traceability, repositories are locked until you have an **Active Task**. Once you "Start" a task, the repositories become interactive for selection.

**Q: My scan is taking too long. How can I speed it up?**
> **A:** In the "Repository Workspace" panel, uncheck the repositories that are only for reference. DevLoop actions (Scan, Commit, Push) only target **Active** (checked) repositories.

**Q: How can I select only the repositories that have local modifications?**
> **A:** Click the **Bulk Actions** (three dots) icon in the Repository Workspace header and select **"Select Modified Repositories"**. This instantly checks only the repos with pending changes.

**Q: How can I switch branches manually without using "Prepare Workspace"?**
> **A:** Use the dropdown provided on each repository item, and select the branch you want to switch to.

**Q: How can I configure the prefix for topic branch names?**
> **A:** Use the setting `devloop.git.branchPrefix` (default is `feature/`). This prefix is used whenever you "Prepare Workspace" for a new ticket.

---

### **Task & History Management**

**Q: Where are my task details and history stored?**
> **A:** All local metadata is stored in `Documents/devloop_storage/`. Inside the `workspaces/` folder, DevLoop creates specific manifests for each of your projects, ensuring no garbage is added to your source code.

**Q: Will my existing Python installation be impacted by this tool?**
> **A:** No. DevLoop creates its own **isolated virtual environment** within its internal storage folder. It installs its own linting tools (Pylint, Ruff, Fissix) there to prevent conflicts with your project dependencies.

**Q: Where can I find detailed logs for events or failed linting runs?**
> **A:** Check the **VS Code Output Panel** (`Ctrl+Shift+U`) and select **DevLoop** from the dropdown. This channel logs every API call, Git command, and internal step.

**Q: Can I change the workspace name? Will it impact my reports?**
> **A:** You can change it in the project manifest or by renaming the folder. While the **local history** is tied to the folder hash, your **Jira reports** are tied to the Ticket ID and remain completely unaffected.

---

### **Jira & Integration**

**Q: What activities are automatically logged as comments in Jira?**
> **A:** 
> 1. **Session Logs**: When you stop a timer, your work duration and comments are synced to Jira Worklogs.
> 2. **PR Creation**: A table with repository names and PR links is posted when you use "Create PR".
> 3. **Task Completion**: A summary of work is posted when a task is marked as "Done".

**Q: Why must I "Prepare Workspace"? Can I commit without preparing?**
> **A:** While you *can* commit manually, "Prepare" is the core of the DevLoop workflow. it ensures you are on the correct branch and prevents accidental commits to protected branches like `main` or `develop`.

**Q: Can I commit changes even if there are linting issues?**
> **A:** Yes. DevLoop follows a "Developer First" philosophy. We warn you about issues in the sidebar, but we never block your local commits, allowing you to save your progress whenever you need.

---

### **Support & Feedback**
If you encounter any issues not covered here, please refer to the `DEVELOPER_GUIDE.md` or contact your team lead.

*DevLoop - Built for developers, by developers.*
