<table border="0" cellspacing="0" cellpadding="0"> 
  <tr>
    <td style="border:none; padding-right:20px;" valign="top">
      <img src="https://raw.githubusercontent.com/sarivoli/common/refs/heads/main/devloop/devloop_logo.png" width="200" /> 
    </td>
    <td style="border:none;" valign="top">
      <h2>DevLoop</h2> 
      <i>Unified Development Workflow & Workspace Orchestration</i> <br/><br/>
      <img src="https://img.shields.io/badge/Status-Beta-yellow" /><br/>
      <strong>Version:</strong> 0.2.35<br/>
      <strong>Build:</strong> 5<br/>
    </td>
  </tr>
</table>

# DevLoop Workspace Manager

Unified Development Workflow & Workspace Orchestration in VS Code editor.

## v0.2.35 Key Features

- ⚙️ **Configurable Branching Strategy**: Introduced a flexible base branch selection system. Users can now choose between branching from current branches or a specific base (e.g., `main`, `develop`).
- 🛠️ **Customizable Base Branches**: Added support for the `devloop.git.baseBranches` setting, allowing users to define their own list of standard base branches via VS Code settings.
- 🎯 **Context-Aware Workspace Preparation**: The "Prepare Workspace" action now dynamically updates its label and provides clear hint text (e.g., *"All repositories will branch from develop"*) based on the selected strategy.
- ⚙️ **Quick Settings Shortcuts**: Integrated settings (gear) icons across all major panels (Task Panel, Linting Hub, Repository Workspace) for instant access to relevant configuration categories.
- 🔄 **Real-Time UI Synchronization**: Enhanced the Sidebar UI to provide immediate feedback when switching between different branching modes and options.
- 🔧 **Production-Ready Logging**: Improved diagnostic logging for workspace preparation steps to ensure transparency during complex Git operations.



## v0.2.34 

- 📖 **Comprehensive User Guide**: Major overhaul of `USER_GUIDE.md` featuring a developer-focused Q&A section, productivity workflows, and detailed configuration steps to help teams get the most out of DevLoop.

## v0.2.33 Key Features

- 🐛 **Fixed Modernization Scanning**: Corrected a critical issue where Python 2 to 3 conversion issues were not being identified during scans. The `-n` flag has been correctly scoped to only apply during the "Fix" phase, ensuring dry-run scans produce accurate transformation diffs.

## v0.2.32 Key Features

- 🏎️ **Optimized Auto-Fix Reliability**: Fixed a common race condition where modernization issues would persist in the UI briefly after being fixed. Added intelligent delays to ensure the file system state is fully synchronized before re-scanning.
- 🧹 **Clean Transformations**: Added the `-n` (no-backups) flag to `futurize` and `fissix` operations, preventing the creation of redundant `.bak` files during code conversion.

## v0.2.31 Key Features

- 🔍 **Enhanced Environment Diagnostics**: Added proactive checking for modernization tools (`fissix`, `futurize`) during the scanning phase. If critical tools are missing for the current project type, DevLoop will now explicitly prompt you to update your environment.
- 🛠️ **Refined Path Detection**: Improved detection logic for Python tools when invoked via `python -m`, ensuring modern fallbacks are correctly identified even in customized virtual environments.

## v0.2.30 Key Features

- 🐍 **Modern Python Compatibility (3.13/3.14)**: Added `fissix` as a robust replacement for the deprecated `lib2to3` and `2to3` tools. This ensures that Python 2 to 3 conversion remains functional even on the latest Python interpreters where standard conversion tools have been removed.
- 🛠️ **Seamless Fixer Fallback**: Automated the transition between `futurize`, `fissix`, and `ruff` based on the host environment, prioritizing correct syntax transformation for legacy code.

## v0.2.29 Key Features

- ⚡ **Immediate Scan Cancellation**: Enhanced the linting engine to respond instantly to cancellation requests, terminating active scans between file processes.
- 🔧 **Seamless Modernization Fixes**: The "Fix All" and individual "Fix" buttons now automatically use Ruff's modernization rules when legacy Futurize components are missing, ensuring transformation is always possible.

## v0.2.28 Key Features

- 🛠️ **Robust Tool Detection**: Improved reliability of tool availability checks, ensuring that substitute tools (like Ruff modernizer) are correctly detected and invoked even in complex virtual environments.
- 🔄 **Refined Futurize Fallback**: Smoother transition between legacy conversion tools and modern linting rules with consistent reporting in the Futurize tab.

## v0.2.27 Key Features

- 🧠 **Smart Linting Fallback**: When the environment is incompatible with legacy tools (e.g., Python 3.13+ missing `lib2to3`), DevLoop now automatically falls back to modern alternatives like **Ruff (pyupgrade rules)** to ensure transformation suggestions remain available.
- 💬 **Improved Failure Feedback**: Clearer notifications when linting tools are substituted or disabled due to environment limitations.

## v0.2.26 Key Features

- 🔍 **Granular Linting Scans**: Individual tabs (Python, JS, HTML, Futurize) now feature dedicated "Scan" buttons, allowing developers to trigger module-specific scans without running the entire suite.
- 🚀 **Futurize Independence**: Support for scanning and fixing Futurize issues independently from the main Python linting process.

## v0.2.25 Key Features

- 🛑 **Full Action Cancellation**: Users can now cancel long-running workspace preparation, commits, and pushes from both the dashboard and VS Code notifications.
- 💬 **Granular Progress Details**: The progress overlay now displays exact operational steps (e.g., "Stashing changes...", "Switching to branch...") providing full transparency during complex Git tasks.
- 🔄 **Real-time UI Sync**: Switching branches via "Prepare Workspace" now reflects in the sidebar immediately repository-by-repository, instead of waiting for the entire process to finish.
- 🛡️ **Improved Workflow Stability**: Added safeguards to the repository refresh button to prevent race conditions during active scans or Git operations.

## v0.2.24 Key Features

- 🐛 **Enhanced Linting Hub**: Individual tabs now show **Issue Counts** instead of file counts, providing a more meaningful overview of project health.
- 🔢 **Real-time Badge Updates**: The total linting issue count in the widget header now updates instantly after every scan.
- 🔄 **Smart Reset & Restore**: Linting results are now accurately cleared at the start of a new scan for immediate feedback, and **automatically restored** if an operation is cancelled, ensuring no data loss.

## v0.2.23 Key Features

- 🛑 **Cancellation Support**: Added ability to cancel Repository Scanning and Linting operations midway.
- 📢 **Operation Notifications**: New notification system providing clear success, error, or cancellation messages for background operations.
- ✨ **Flickering Fix**: Implemented targeted UI updates to eliminate flickering when refreshing repository status or linting progress.
- ⚡ **Optimized UI Updates**: Sidebar now uses a shallow update mechanism to improve responsiveness when only specific elements change.
- 📘 **User Guide Link**: Updated the "User Guide" link in the sidebar footer to point to the correct documentation version.

## v0.2.22 Key Features

- ⚡ **Non-Blocking Linting**: Linting scans now run in the background, allowing you to continue using the task panel and other extension features without interruption.
- 📂 **Enhanced File Detection**: Improved change detection mechanism that now robustly identifies new and untracked files for linting, even if they haven't been staged yet.
- 🌳 **Branch Selection & Switching**: New dropdown menu in the Repository Workspace allows for quick branch switching and tag selection directly from the sidebar.
- 📊 **Progress Visibility**: Real-time progress indicators for workspace preparation, showing exact count of repositories processed.
- 🔄 **Smart Branching**: Workspace preparation now automatically pulls the latest changes from the base branch before creating new feature branches, ensuring a conflict-free start.

## v0.2.21 Key Features

- 🎨 **Branding Refresh**: Updated application logo and icon set across the extension for a modern look.
- 🖼️ **Sidebar Icons**: Enhanced sidebar with professional icons for Repository Workspace, Effort Report, and Configuration tabs.

## v0.2.20 Key Features

- 🎨 **UI Refinement**: Removed the logo from the sidebar header for a cleaner look.

## v0.2.19 Key Features

- ✅ **Jira Integration**: Fetch tickets, post comments, log work time
- ✅ **Git Provider Integration**: GitHub/GitLab/Bitbucket support for PR creation
- ✅ **Integrated Time Tracking**: Automatically tracks active coding time for Jira tickets with idle detection and **robust state persistence across editor restarts**.
- ✅ **Unified Repository Workspace**: Manage multiple Git repositories from one place. Supports **static folder scanning** to identify sub-repositories and performs **parallel execution** for Commit, Push, and PR creation to maximize efficiency.
- ✅ **Dashboard UI**: Complete sidebar with all widgets
- ✅ **Linting Hub**: Integrated ESLint, Pylint, and HTML-Validate with auto-fix support
  - **Framework-Aware JavaScript Linting**: Automatic detection and configuration for AngularJS, React, Vue, and plain JavaScript
  - **Severity Filtering**: Filter linting results by Error, Warning, or Info levels for easier navigation
- ✅ **Workspace-Aware Time Tracking**:
  - **Multi-Workspace Mode**: Segregate or aggregate time tracking data across different project folders.
  - **Workspace Identification**: Automatically tags every session with the workspace name, honoring custom workspace names defined in VS Code (e.g., `.code-workspace` files) instead of just the physical folder name.
  - **Jira Differentiation**: Workspace names are included in Jira comment tables for cross-project clarity.
- ✅ **Offline Capability**:
  - **Offline Reporting**: Captures essential ticket details (Project Name, Issue Type) locally, enabling full report generation even without an active Jira connection.
  - **Robust Resumption**: Seamlessly resumes tasks and timers using locally cached context.
- ✅ **Professional Effort Reporting**:
  - **Custom Date Filtering**: Generate reports for specific periods (Daily, Weekly, Monthly).
  - **Rich HTML Summaries**: Professional, management-ready HTML reports showing ticket details, timelines, and impact.
  - **Project & Type Summaries**: Now includes dedicated tables for "Project Summary" and "Issue Type Summary" to visualize effort distribution at a high level.
  - **Aggregated Stats**: Global "Today" and "This Week" totals across all active workspaces.


## Configuration

### Quick Setup

Use the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) to configure:

1. **Configure Jira**: `DevLoop: Configure Jira Connection`
   - Enter Jira base URL
   - Enter your email address
   - Enter API token (create at: https://id.atlassian.com/manage-profile/security/api-tokens)

2. **Configure Git Provider** (Optional): `DevLoop: Configure Git Provider`
   - Select provider (GitHub/GitLab/Bitbucket)
   - Enter base URL
   - Enter personal access token


### Manual Configuration

Open VS Code Settings (`Ctrl+,`) and search for "DevLoop":

#### Jira Settings
- `devloop.jira.baseUrl`: Your Jira instance URL (e.g., https://jira.company.com)
- `devloop.jira.email`: Your Jira account email
- `devloop.jira.enabled`: Enable/disable Jira integration (default: true)

#### Git Provider Settings
- `devloop.git.provider`: Git provider type (github/gitlab/bitbucket)
- `devloop.git.baseUrl`: Git provider API URL
- `devloop.git.enabled`: Enable/disable Git integration (default: true)
- `devloop.git.defaultBaseBranch`: Default base branch (default: "main")
- `devloop.git.branchPrefix`: Feature branch prefix (default: "feature/")

#### Jenkins Settings
- `devloop.jenkins.baseUrl`: Jenkins server URL
- `devloop.jenkins.username`: Jenkins username
- `devloop.jenkins.enabled`: Enable/disable Jenkins integration (default: false)
- `devloop.jenkins.defaultJob`: Default job name for impact analysis
- `devloop.jenkins.jobParameters`: Default job parameters (JSON object)

#### Time Tracker Settings
- `devloop.timeTracker.idleThreshold`: Minutes before auto-pause (default: 5)
- `devloop.timeTracker.autoStart`: Auto-start timer on task begin (default: true)

### Credentials Storage

All API tokens are stored securely using VS Code's Secret Storage API:
- Jira API token
- Git provider personal access token


Credentials are encrypted at the OS level and never stored in plain text.

## Usage

### Start a Task
1. Click **"Start Task"** in the DevLoop sidebar
2. Enter a Jira ticket ID (e.g., JIRA-1234)
3. Confirm the ticket details
4. Timer starts automatically (if enabled)
5. Feature branches created in selected repositories

### End a Task
1. Click **"End Task & Log Time"**
2. **Add a worklog comment** in the new text area below the ticket banner.
3. Confirm to log time to Jira.
4. Timer stops and worklog is posted as a Jira comment with a detailed table structure.
5. Overall logged effort for the ticket is updated.
6. Task marked as complete.

### Time Tracking
- **Modern Digital Clock Interface**: Unified panel design displaying ticket details, timer, and controls in a single cohesive digital clock interface with glowing effects and smooth animations.
- **Enhanced Visibility**: Ticket ID and description are displayed prominently at the top with brighter colors and larger fonts for better readability.
- **Improved Layout**: Description and total time are positioned at the top of the clock panel for immediate visibility, followed by the timer display and controls.
- Timer shows HH:MM:SS format with large, easy-to-read digital display
- Auto-pauses after 5 minutes of inactivity (configurable)
- Manual pause/resume controls available
- **Scrollable Task Panel**: The task panel is now fully scrollable, allowing easy navigation through all content without sticky positioning.
- **Improved Workspace Restoration**: When restarting the workspace, DevLoop identifies if a timer was running and offers to resume it exactly from where it stopped, excluding the time the application was closed.
- **Robust State Persistence**: Timer state (running, paused, or stopped) is now strictly persisted on every status change. This ensures that old flags are cleared upon task completion or cancellation, preventing stale timer notifications on subsequent restarts.
- **Auto-Refresh**: Resuming or starting a timer automatically synchronizes the latest Jira ticket status and details to ensure the dashboard is always up to date.
- **Cross-Workspace Synchronization**: Synchronizing time logs now automatically aggregates unsynced data from all project workspaces for each ticket, ensuring complete effortless reporting in Jira regardless of where you trigger the sync.
- Time synced to Jira worklog on task completion with overall effort summaries.
- Add comments to individual time entries which are shown in the history log.
- **Global Effort Summary**: View total work across all workspaces with the "Global Tracking" feature.
- **Effort Reporting**: Use the dedicated widget to generate professional activity reports for any date range.

### Repository Management
- **Precise Selection**: Use checkboxes to select specific repositories for your current operation (Active / Reference).
- **Selection Persistence**: Your workspace selections are remembered even after complex Git operations like commits or refreshes.
- **Local Commits**: Click **Commit** to add all unsaved changes and record them locally in your selected repositories (now strictly local for maximum speed).
- **Automated PR Creation**: After a successful **Push**, DevLoop automatically creates Pull Requests for all affected repositories using the prescribed format `<Ticket ID> : <Ticket Description>`.
- **Integrated PR Links**: PR status and direct links are automatically captured and posted back to the associated Jira ticket as a detailed table for easy reference.
- **Manual Repository Refresh**: Dedicated **"Scan Repositories"** button and header refresh icon to manually trigger a deep scan of all workspace repositories. This ensures that external Git changes (like manual CLI commits) are immediately reflected in the dashboard, helping to accurately enable or disable commit and push operations.
- **Bulk Creation**: Create Pull Requests for all selected repositories simultaneously with a single click.
- **Enhanced PR Creation**: Improved reliability of the "Create PRs" operation by automatically ensuring the local branch is pushed to origin before PR creation. This resolves common "Validation Failed" errors caused by missing remote branches.
- **Detailed Git API Errors**: Added rich error reporting to the Git integration, capturing and displaying specific validation errors from GitHub/GitLab/Bitbucket APIs for easier troubleshooting.

## License

MIT License - see LICENSE file for details

## Support

For issues and feature requests, please contact your DevLoop administrator or open an issue in the repository.
