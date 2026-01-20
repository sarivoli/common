<table border="0" cellspacing="0" cellpadding="0"> 
  <tr>
    <td style="border:none; padding-right:20px;" valign="top">
      <img src="https://raw.githubusercontent.com/sarivoli/common/refs/heads/main/devloop/devloop_logo.png" width="200" /> 
    </td>
    <td style="border:none;" valign="top">
      <h2>DevLoop</h2> 
      <i>Unified Development Workflow & Workspace Orchestration</i> <br/><br/>
      <img src="https://img.shields.io/badge/Status-Beta-yellow" /><br/>
      <strong>Version:</strong> 0.2.19<br/>
      <strong>Build:</strong> 1<br/>
    </td>
  </tr>
</table>


## Commands

### Configuration
- `DevLoop: Configure Jira Connection` - Step-by-step Jira setup
- `DevLoop: Configure Git Provider` - Setup GitHub/GitLab/Bitbucket
- `DevLoop: Configure Jenkins` - Setup Jenkins integration
- `DevLoop: Open Settings Panel` - Open settings UI (coming soon)

### Task Management
- `DevLoop: Start Task` - Begin work on a Jira ticket
- `DevLoop: End Task & Log Time` - Complete task and log time
- `DevLoop: Refresh Dashboard` - Reload all dashboard data

### Time Tracking
- `DevLoop: Pause Timer` - Pause the time tracker
- `DevLoop: Resume Timer` - Resume the time tracker

### Reporting
- `DevLoop: Generate Effort Report` - Create an HTML report of your activities.
  - **Date Range**: Select from predefined ranges (Today, This Week) or pick custom dates.
  - **Offline Mode**: Works even if Jira is unreachable, using locally cached project data.
  - **Summary Tables**: View effort broken down by Project, Issue Type, and individual Tickets.

### Repository Operations
- `DevLoop: Commit All Repositories` - Commit to all active repos
- `DevLoop: Push All Repositories` - Push all active repos
- `DevLoop: Create Pull Requests` - Create PRs for all active repos

### Maintenance
- `DevLoop: Clear All Data` - Remove all extension data and credentials

## Connection Status

The **Project Health** widget shows real-time connection status:
- 🟢 **Green**: Connected and working
- 🟡 **Yellow**: Configured but limited access
- 🔴 **Red**: Not configured or connection failed

Click on any service to see detailed status and configuration options.

## Data Storage

By default, DevLoop stores all its data (manifests, logs, and isolated linting environments) in a `devloop_storage` folder within your user's **Documents** directory:

- **Windows**: `C:\Users\<User>\Documents\devloop_storage\`
- **macOS/Linux**: `~/Documents/devloop_storage/`

### Customizable Storage Path
You can change this location in settings:
1. Open VS Code Settings (`Ctrl+,`)
2. Search for `devloop.storage.path`
3. Enter your preferred directory path.

**Note**: Regardless of the path you provide, DevLoop will always create and use a `devloop_storage` subfolder at that location to keep its files organized.

Each workspace has its own unique subdirectory within `devloop_storage/workspaces/` to store specific manifests and session data.

## Troubleshooting

### Jira Connection Failed
- Verify base URL is correct (include https://)
- Check email address matches your Jira account
- Ensure API token is valid (regenerate if needed)
- Check network connectivity and firewall settings

### Jenkins Connection Failed
- Verify Jenkins URL is accessible
- Check username and API token are correct
- Ensure you have permissions for the jobs you want to trigger
- Check Jenkins CSRF protection settings

### Git Provider Issues
- Verify personal access token has required scopes:
  - **GitHub**: `repo`, `workflow` (Create at: [github.com/settings/tokens](https://github.com/settings/tokens))
  - **GitLab**: `api`, `write_repository` (Create at User Settings > Access Tokens)
  - **Bitbucket**: `repository:write`, `pullrequest:write` (Create at Personal settings > App passwords)

### Timer Not Persisting
- Check VS Code has write permissions to global storage directory
- Verify workspace folder is trusted
- Try reloading VS Code window
