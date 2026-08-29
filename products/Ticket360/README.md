<table border="0" cellspacing="0" cellpadding="0"> 
  <tr>
    <td style="border:none; padding-right:20px;" valign="top">
      <img src="https://raw.githubusercontent.com/sarivoli/common/refs/heads/main/products/Ticket360/assets/ticket360_logo.png" width="200" /> 
    </td>
    <td style="border:none;" valign="top">
      <h2>Ticket360</h2> 
      <i>THE ULTIMATE BROWSER EXTENSION FOR JIRA TICKET MANAGEMENT</i> <br/><br/>


<div align="center">

[![Version](https://img.shields.io/badge/version-1.8.0-blue.svg)](https://github.com/sarivoli/ticket360)
<br/>
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Available-green.svg)](https://chrome.google.com/webstore)
[![Firefox Add-ons](https://img.shields.io/badge/Firefox-Available-orange.svg)](https://addons.mozilla.org)
[![Edge Add-ons](https://img.shields.io/badge/Edge-Available-blue.svg)](https://microsoftedge.microsoft.com/addons)
[![Opera Add-ons](https://img.shields.io/badge/Opera-Available-red.svg)](https://addons.opera.com)

</div>
    </td>
  </tr>
</table>

## Overview

# Ticket360 Browser Extension

**Ticket360** is the ultimate browser extension for Jira ticket management, providing a unified 360-degree view of your tickets directly within your browser. Stop switching tabs—get everything in one intelligent dashboard.

---

## 🌟 Key Features

### 🚀 1. Instant Jira Mission Control on Every New Tab!
Stop opening dozens of browser tabs just to check Jira issue status! Ticket360 transforms your blank browser new tab into a zero-lag, executive-grade Jira Command Center (`Ctrl+T` / `Cmd+T`).

### 📊 2. High-Impact Interactive Widgets: Live KPIs, JQL Charts & Smart Lists!
Transform raw Jira data into rich visual signals:
- **KPI Metric Cards**: Real-time counter cards with percentage workload breakdown badges (`% of total`).
- **Dynamic JQL Charts**: Visual distribution graphs (Pie, Donut, Vertical Bar) grouped by Priority, Assignee, Component, or Custom Fields.
- **Custom Ticket List Cards**: Interactive issue tables with custom column selection and sorting.

### ⚡ 3. Instant JQL-to-Pivot Engine: Slice Any Search Query into Interactive 2D Heatmaps!
Turn complex JQL queries into dynamic 2D cross-tabulation heatmaps (Row $\times$ Column). Cross-reference Assignees against Statuses, Priorities, or Issue Types with 1-click cell drill-down modals and visual workload intensity scaling.

### 🔍 4. Granular Field-Level History Timeline: Audit Status, Assignee & Priority Changes in 1 Click!
Inspect the exact historical evolution of any Jira field (Status, Assignee, Priority, Severity, Component) with precise duration analysis. Identify bottlenecks instantly by seeing who held a ticket, for how long, and when it transitioned.

### 📈 5. Daily Progress Trend Reports: 1-Click SVG Velocity Lines & Daily Delta Snapshots on Every Widget!
Track daily sprint momentum over time! Every KPI widget auto-logs daily count snapshots (`kpiDailyHistory`). Click any card to launch full-screen SVG line graphs with timeframe range selectors (`7 Days` to `60 Days`) and net daily progress badges (`🟢 -4 Closed`, `🔴 +6 Defects`).

### 📋 6. Executive HTML Copy & Share: Paste Styled Table Reports Directly into Outlook, Word, Teams & Slack!
Never manually format Jira status updates again! 1-click **Copy as HTML** exports professionally styled executive tables (Overview, JQL Results, Pivot Matrices) pre-formatted for seamless pasting into Outlook emails, Word documents, Teams, and Slack chats.

### 🎨 7. Ultimate Workspace Customization: Tailor Grid Layouts, Cards & Columns in Seconds!
Tailor your mission control to match your exact screen setup and workflow:
- Toggle responsive 2, 3, or 4 grid columns for 4K monitors or laptop displays.
- Customize visible table columns, reorder display fields, and organize widgets into tabbed configuration cards.

### 🌓 8. Seamless Obsidian Dark & Solar Light Themes across Your Entire Extension!
Experience a stunning, glassmorphic visual redesign built for maximum comfort during long engineering sessions. Toggle between **Obsidian Dark Mode** and **Solar Light Mode** with instant, 1-click cross-window synchronization across your Dashboard, Options page, Popup, and Ticket Drawers.

### ⏱️ 9. Smart Date Display: Instant Relative Age Badges & Precise Timestamp Tooltips!
Never decode raw Jira timestamps again! Smart Date Display converts date and time fields across all widgets, lists, and drawers into intuitive relative age badges (e.g. `just now`, `2 hrs`, `1 day`, `7 mos`) with full exact date tooltips on mouseover.

### 🌐 10. Work Unstoppable: Full Offline Review & Candidate Ticket Cache!
Stay productive on flights, trains, or without VPN connectivity! All dashboard widgets, KPI cards, drill-down modals, trend reports, and detail drawers render cached candidate data seamlessly with space-saving database status icons (`<i class="fas fa-database"></i> Cached`).

### 📝 11. Multi-Tab Sticky Notes with `@` Ticket Autocomplete!
Ditch desktop Notepad! Maintain daily tasks across 3 color-coded tabs (`Todo`, `Critical`, `Temp`) featuring cursor-aligned `@` ticket mentions and 1-click side drawer ticket inspection.

---

## 🔒 Security & Privacy

Ticket360 is built with security in mind:
- **100% Local Processing**: Your Jira data is processed entirely within your browser.
- **Encrypted Storage**: Credentials and settings are stored locally using browser encryption.
- **Optional Data De-Identification**: Anonymize project keys, summaries, usernames, and domain URLs with 1-click privacy redaction for safe sharing and offline demos.
- **Zero External Tracking**: We never transmit your data to external servers.

---

# 📚 [TICKET360 USER GUIDE](./USER_GUIDE.md)

For a detailed step-by-step walkthrough, real-life use cases, and frequently asked questions, please refer to our **[Comprehensive User Guide](./USER_GUIDE.md)**.

---

## TICKET360 EXTENSION - RELEASE NOTES

### VERSION 1.8.0

**MAJOR NEW FEATURES, POPUP REDESIGN, GUIDED TOURS & ENGINE ENHANCEMENTS:**

*   **Instant Jira Mission Control on Every New Tab**:
    *   **Auto-Launching Dashboard**: Transforms your browser new tab page into a zero-lag executive Jira workspace (`Ctrl+T` / `Cmd+T`).
    *   **Stale-While-Revalidate Sync**: Displays cached metrics instantly while silently background-syncing with Jira REST APIs.

*   **High-Impact Interactive Widgets & Analytics**:
    *   **KPI Metric Cards with Percentage Badges**: Real-time workload distribution percentage badges (`% of total`) across To Do, In Progress, and Done.
    *   **Dynamic JQL Pie, Donut & Bar Charts**: Visual distribution graphs grouped by Priority, Component, Assignee, or Custom Fields.
    *   **Instant JQL-to-Pivot Matrix Engine**: Cross-tabulate assignees $\times$ statuses with 1-click cell drill-down modals and workload heatmaps.
    *   **Daily Progress Trend Reports**: Automated daily KPI snapshot tracking with SVG trend line charts, timeframe range selectors (7 to 60 days), net daily delta badges (`🟢 -4`, `🔴 +6`), and historical snapshot log tables.

*   **3-View Interactive Guided Tour Engine**:
    *   **Popup Window Tour**: Multi-step tour covering header actions, search mode tabs (Ticket Search vs JQL Search), single ticket lookup, 360° overview, field history timeline, linked tickets, comment author filters, search history, and 2D pivot matrices.
    *   **Dashboard Workspace Tour**: Interactive guided tour covering search bar, 360° view, Jira links, theme toggling, options shortcut, grid layout, total count badges, action toolbars, and detail drawers.
    *   **Options Workspace Tour**: Automated tour spanning System Overview & Health, Configurations, Dashboard Workspace Settings, Feedback, and Backup/Export functions.
    *   **Automated Navigation**: Driver.js step callbacks automatically switch tabs, detail panels, and result views as the tour progresses.

*   **Granular Field-Level History & Executive HTML Export**:
    *   **Field History Timeline Drawer**: Inspect complete status, assignee, priority, and custom field change logs with duration analysis.
    *   **Executive HTML Copy & Share**: 1-click copy formatted HTML tables directly into Outlook, Word, Teams, and Slack with inline CSS styling.

*   **Premium Popup Redesign & Direct Dashboard Launcher**:
    *   **Glassmorphic Cards & Accent Tokens**: Synced with dashboard Obsidian/Solar theme system, featuring `backdrop-filter: blur(16px)` and variable accent tokens.
    *   **800px Expanded Viewport**: Viewport width expanded to 800px with a single unified vertical scroll container.
    *   **1-Click Ticket Pinning**: Pin tickets directly from popup views to sync with the Dashboard Pinned Tickets widget using standard thumbtack icons (`fas fa-thumbtack`).

*   **Ultimate Workspace & Column Customization**:
    *   **Responsive Grid Layouts**: Customize dashboard grid spans (2, 3, or 4 columns) for 4K screens or laptop displays.
    *   **Custom Column Selector**: Pick and reorder visible table columns directly on widget toolbars.
    *   **Tabbed Configuration Cards**: Sleek tabbed configuration cards (`Basic`, `Data Source`, `Visualization`, `Columns & Sort`, `Matrix`, `Drill-Down Fields`) for intuitive customization.

*   **Seamless Obsidian Dark & Solar Light Themes**:
    *   **Universal Theme System**: 1-click toggle between Obsidian Dark Mode and Solar Light Mode with instant cross-page synchronization across Dashboard, Options, Popup, and Ticket Drawers.

*   **Smart Date Display across All Date & Time Fields**:
    *   **Relative Age Badges**: Displays intuitive relative age badges (`just now`, `2 hrs`, `1 day`, `7 mos`) across all widgets, lists, drawers, and popups.
    *   **Timestamp Tooltips**: Hovering over any relative date badge displays a native tooltip with the full exact date and time.

*   **Full Offline Mode & Network Fallback**:
    *   **Extension-Wide Offline Review**: Dashboard Widgets, KPI Cards, Ticket List Modals, Progress Trend Reports, Ticket Detail Drawers, and JQL Searches automatically render cached issue data when offline.
    *   **Space-Saving Offline Badges**: Offline widgets feature a subtle database icon badge (`<i class="fas fa-database"></i> Cached`) in the card header with hover tooltips explaining offline status.

*   **Multi-Tab Sticky Notes with `@` Ticket Autocomplete**:
    *   **3 Color-Coded Note Tabs**: Organize daily work under `Todo`, `Critical`, and `Temp` tabs with notebook paper styling and word counters.
    *   **Cursor-Relative `@` Ticket Autocomplete**: Typing `@` anywhere in a note opens an instant ticket suggestion menu aligned directly under your cursor.
    *   **1-Click Side Drawer Inspection**: Click tagged `@` tickets inside notes to open the full ticket detail drawer.

*   **Firefox Navigation, Options & JQL Engine Fixes**:
    *   **Options Navigation & Tab Hijacking Fix**: Excluded extension URLs from tab hijacking listeners, resolving unwanted redirects and `about:blank` tab creation in Firefox.
    *   **Firefox JQL Direct Fetching**: Direct GET request handling for JQL searches in Firefox, matching Chrome and Edge behavior.

*   **Robust Jira REST API Engine & JQL Search Fix**:
    *   **Atlassian CHANGE-2046 Compliant Search**: Prioritizes `POST /rest/api/3/search/jql` for Jira Cloud and `POST /rest/api/2/search` for Data Center.
    *   **Accurate Error Messaging**: Directly parses 400 Bad Request and 403 Forbidden responses (e.g. filter permissions or invalid JQL syntax), eliminating misleading `410 Gone` error masking.

*   **Compact 2-Line Ticket Cards & Storage Governance**:
    *   **Compact 2-Line Layout**: Cards across Tracked Tickets and Recent Searches are capped at 2 lines with icon-only badges (`📅 7 mos`, `🔄 1 mo`).
    *   **Storage Manager & Selective Clean-up**: Real-time storage capacity monitoring with 80% capacity alert banners and granular category clean-up.
    *   **3-Step Backup & Restore Wizard**: Backup or restore complete extension settings with API token safety toggles and seamless data preservation.

### VERSION 1.6.2

**ENHANCEMENTS:**

*   **Comprehensive User Guide**:
    *   **Q&A Style Documentation**: Added a new [USER_GUIDE.md](./USER_GUIDE.md) featuring common questions and step-by-step answers.
    *   **Real-Life Use Cases**: Included practical scenarios like "Morning Standup Prep" and "Bottleneck Analysis" to help users maximize the tool's value.
    *   **Interactive Navigation**: Easy-to-follow steps for advanced features like Pivot Analysis and Deep Linking.

### VERSION 1.6.1

**ENHANCEMENTS:**

*   **Sorted Pivot Analysis**:
    *   **Descending Order by Total**: Pivot tables are now automatically sorted by the "Grand Total" column in descending order. This ensures that the most prominent data points appear at the top for immediate impact.
    *   **Dynamic Sorting**: Sorting applies instantly upon rendering and is consistently maintained during "Load More" operations.
    *   **Premium HTML Copy**: The descending sort order is perfectly preserved in the professional HTML export, ensuring your shared reports are stakeholder-ready and highlight the most critical insights first.

### VERSION 1.6.0

**KEY FEATURES:**

*   **JQL Pivot Analysis**:
    *   **Drag-and-Drop Designer**: Intuitive interface to design complex pivot tables by dragging fields into Row, Column, and Value zones.
    *   **Flexible Calculations**: Automatically calculates counts and totals for any Jira field.
    *   **Dynamic Synchronization**: Available fields for pivoting are automatically synced with your "Fields" configuration.
    *   **Default "Issue Key" Integration**: "Issue Key" is now a default field and handles counting by default, providing instant value on first use.
*   **Highly Professional "Copy as HTML"**:
    *   **Premium Reports**: All exports (Overview, Links, JQL Results, and Pivot) now feature professional headers, query context, and branded footers.
    *   **Robust Multi-App Support**: Uses a new DOM-selection copy method for maximum compatibility with Outlook, Word, Excel, and Email clients while preserving table formatting and styles.
    *   **Bold Visuals**: Highlighted totals, grand totals, and clear headers for immediate readability in corporate environments.
*   **UX & Consistency Polish**:
    *   **Smart Event Re-binding**: Copy functionality now dynamically updates based on active tabs, ensuring seamless transitions between JQL Results and Pivot views.
    *   **Universal Date Formatting**: Consolidated date/time formatting across all system-generated exports for professional consistency.

### VERSION 1.5.0

**KEY FEATURES:**

*   **Advanced JQL Search**:
    *   **Tabbed Interface**: Unified search experience with separate tabs for "Ticket Search" and "JQL Search".
    *   **Powerful Queries**: Run JQL queries directly from the popup to find issues based on any criteria.
    *   **Tabular Results**: View search results in a dynamic table with configurable columns.
    *   **Batch Loading**: Efficiently load large result sets with "Load More" pagination.
    *   **Quick Actions**: View history for any ticket in the results or copy the entire table as HTML.
*   **Dynamic Toolbar Behavior**:
    *   **Popup vs Tab Toggle**: The extension now respects your "Open as Popup" setting even when clicking the main toolbar icon.
    *   **Smart Tab Management**: Reuses the existing extension tab instead of opening a new one, reducing clutter and saving resources.

*   **Enhanced Comments Management**:
    *   **Smart Filtering**: Filter comments by multiple authors via a multi-select dropdown.
    *   **Wildcard Search**: Search within comment text and author names instantly.
    *   **One-Click Reset**: "Clear All" button to instantly reset filters and view full conversation.
*   **Cross-Browser Fixes & Polish**:
    *   **Firefox/Edge Compatibility**: Resolved "XSRF check failed" and auth issues by optimizing API requests (v2, GET method).
    *   **Universal Date Format**: Standardized absolute dates to **DD/MMM/YYYY HH:MM AM/PM** format across all screens.


### VERSION 1.4.0

**KEY FEATURES:**

*   **Context Menu Enhancements**:
    *   **"Open in Jira" Option**: Added a new context menu item to directly open selected text in Jira.
    *   **Smart Search Logic**: Automatically detects if selected text is a Jira ticket key (opens ticket directly) or general text (performs JQL search).
    *   **Popup vs Tab Preference**: New option in settings to choose whether the extension opens as a popup or in a new tab (Chrome/Edge).
    *   **Optimized Tab View**: Improved layout with restricted width when opening the extension in a new tab for better readability.

### VERSION 1.3.0

**KEY FEATURES:**

*   **Dynamic Field History**:
    *   Introduced comprehensive history tracking for all user-configured fields in the "Overview" tab.
    *   Click on any field in the "Overview" tab to view its detailed history, including "From" and "To" values, "Changed By," "Changed On," and "Duration" in that state.
    *   Initial field values (from ticket creation) are now included in the history.
    *   Enhanced user experience: Entire field rows in the "Overview" tab are now clickable to access history, with visual hover effects and "Click to view history" hints.
*   **Guided Tour Feature**:
    *   Implemented an interactive, step-by-step guided tour to introduce new users to the extension's key features.
    *   The tour automatically starts on first installation or after an update.
    *   Users can manually initiate the tour at any time via a new "Start Tour" button in the header.
    *   Dynamic tour steps: Only relevant tour steps are displayed based on the availability and visibility of elements on the screen, ensuring a contextual and smooth experience.
*   **Enhanced Comment Copy Option**:
    *   Improved the comment copying functionality to include more context.
    *   Copied comments now feature a header with the ticket key, summary, type, and status.
    *   The commenter's name and the comment's age (relative time) are now included in the copied content.
    *   A direct link to the specific comment within Jira is now part of the copied HTML, allowing users to navigate directly to the comment.

### VERSION 1.2.0

**KEY FEATURES:**

*   **Enhanced Links Tab:**
    *   A new "Links" tab to display all tickets linked to the current ticket.
    *   The table shows the Key, Summary, Status, grouped by the ticket relation.
    *   Added a "History" button to each linked ticket, allowing users to get a 360° view of the linked ticket with a single click.
*   **Persistent Search Results:**
    *   The last searched ticket's results are now preserved.
    *   The results will be displayed when the extension is reopened, until the user clicks the "Back to Search" button.
*   **Direct Jira Links:**
    *   The ticket ID in the search input now generates a direct link to the Jira ticket.
    *   The ticket title in the results view is now a hyperlink to the Jira ticket.

### VERSION 1.1.0

**KEY FEATURES:**

*   **Search History Feature:**
    *   Introduced a new search history section on the main popup screen.
    *   Allows users to store and view recently searched Jira ticket IDs.
    *   Clicking a history item re-fetches the ticket details.
    *   Option to remove individual items from the history.
    *   Configurable in the Options page: enable/disable and set maximum number of items (1-10).

### VERSION 1.0.0 - INITIAL RELEASE

We are excited to announce the initial release of the Ticket360 Chrome Extension! This version provides a comprehensive 360-degree view of your Jira tickets directly from your browser.

**KEY FEATURES:**

*   **Instant Ticket Lookup:** Quickly fetch detailed information for any Jira ticket ID.
*   **Comprehensive Overview:** Get a snapshot of critical ticket fields including Assignee, Reporter, Priority, Status, Created, Updated, and Due Date.
*   **Dynamic Field Selection:** Customize which critical fields are displayed in the overview section via the extension's settings.
*   **Status History:** View a chronological log of all status changes for a ticket, including duration in each status.
*   **Assignee History:** Track the complete history of assignee changes for a ticket, showing who was assigned and for how long.
*   **Comment Viewer:** Easily browse all comments associated with a Jira ticket.
*   **Copy to Clipboard:** Conveniently copy formatted ticket overview, status history, and assignee history as HTML for easy sharing.
*   **Jira Configuration:** Securely configure your Jira instance URL, email, and API token within the extension settings.

*Created by [sarivoli](https://github.com/sarivoli)*
