<table border="0" cellspacing="0" cellpadding="0"> 
  <tr>
    <td style="border:none; padding-right:20px;" valign="top">
      <img src="https://raw.githubusercontent.com/sarivoli/common/bf46ef808f5d2412e9f9a2921eb63a7e922b274e/chronosuite/ChronoSuite__logo.png" width="200" /> 
    </td>
    <td style="border:none;" valign="top">
      <h2>DevLoop</h2> 
      <i>Unified Development Workflow & Workspace Orchestration</i> <br/><br/>
      <img src="https://img.shields.io/badge/Status-Beta-yellow" /><br/>
      <strong>Version:</strong> 0.2.18<br/>
      <strong>Build:</strong> 1<br/>
    </td>
  </tr>
</table>

# DevLoop Workspace Manager

Unified Development Workflow & Workspace Orchestration in VS Code editor.

## Key Features

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
