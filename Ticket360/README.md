<table border="0" cellspacing="0" cellpadding="0"> 
  <tr>
    <td style="border:none; padding-right:20px;" valign="top">
      <img src="https://raw.githubusercontent.com/sarivoli/common/refs/heads/main/products/Ticket360/assets/ticket360_logo.png" width="200" /> 
    </td>
    <td style="border:none;" valign="top">
      <h2>Ticket360</h2> 
      <i>THE ULTIMATE BROWSER EXTENSION FOR JIRA TICKET MANAGEMENT</i> <br/><br/>


<div align="center">



[![Version](https://img.shields.io/badge/version-1.7.0-blue.svg)](https://github.com/sarivoli/common)
[![Build](https://img.shields.io/badge/Build-0-blue.svg)](https://github.com/sarivoli/common)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Available-green.svg)](https://chrome.google.com/webstore)
[![Firefox Add-ons](https://img.shields.io/badge/Firefox-Available-orange.svg)](https://addons.mozilla.org)
[![Edge Add-ons](https://img.shields.io/badge/Edge-Available-blue.svg)](https://microsoftedge.microsoft.com/addons)

</div>
    </td>
  </tr>
</table>

## Overview

# Ticket360 Browser Extension

**Ticket360** is the ultimate browser extension for Jira ticket management, providing a unified 360-degree view of your tickets directly within your browser. Stop switching tabs—get everything in one intelligent dashboard.

## 🚀 Key Features

- **Unified Dashboard**: Complete ticket overview with smart visual indicators.
- **Advanced JQL Search**: Powerful issue searching directly from the popup.
- **JQL Pivot Analysis**: Run complex pivot analysis (counts/totals) on search results with an intuitive drag-and-drop designer.
- **Premium HTML Export**: Executive-ready HTML reports (Overview, Links, JQL, Pivot) perfectly formatted for Outlook, Word, and Excel.
- **Dynamic Field History**: View detailed timelines for any configured field, including duration analysis.
- **Smart Analytics**: Status and assignee history with accountability tracking.
- **Interactive Guided Tour**: Smart onboarding to help you get the most out of the extension.
- **Context Menu Integration**: Quick access to Jira tickets and searches from any webpage.


## 🔒 Security & Privacy

Ticket360 is built with security in mind:
- **100% Local Processing**: Your Jira data is processed entirely within your browser.
- **Encrypted Storage**: Credentials and settings are stored locally using browser encryption.
- **Zero External Tracking**: We never transmit your data to external servers.

---

---

# 📚 [TICKET360 USER GUIDE](./USER_GUIDE.md)

For a detailed step-by-step walkthrough, real-life use cases, and frequently asked questions, please refer to our **[Comprehensive User Guide](./USER_GUIDE.md)**.

### QUICK HIGHLIGHTS:
*   **Dynamic Field History**: Click on any field in the "Overview" tab to view its detailed history.
*   **Status History:** Complete timeline with duration analysis.
*   **Ownership tracking:** Full assignment history with accountability gaps.
*   **JQL Pivot Analysis**: Run complex pivot analysis (counts/totals) on search results.
*   **Professional Export**: Executive-ready HTML reports perfectly formatted for Outlook, Word, and Excel.

---

### PRO TIPS

*   Use HTML export for professional stakeholder updates
*   Leverage color-coded duration alerts to identify bottlenecks
*   Customize field templates for consistent team reporting
*   Export assignment history for retrospective analysis

---

## TICKET360 EXTENSION - RELEASE NOTES

### VERSION 1.7.0

**MAJOR FEATURES:**

*   **Interactive Pivot Tables**:
    *   **Clickable Value Cells**: Click any number in the pivot table to instantly drill down and see the exact issues behind that count.
    *   **Clickable Row Totals**: Click row totals to view all issues in that row across all columns (e.g., all "Open" issues for all assignees).
    *   **Clickable Column Totals**: Click column totals to view all issues in that column across all rows (e.g., all issues assigned to a specific person).
    *   **Clickable Grand Total**: Click the grand total (bottom-right cell) to view your complete dataset with one click.
    *   **Visual Click Indicators**: Magnifying glass icons (🔍) and tooltips appear on hover, clearly showing which cells are clickable.
    *   **Drill-Down Modal**: Professional modal window displays filtered issues with full details (key, summary, status, priority, etc.).
    *   **Modal HTML Export**: Copy drill-down results as professional HTML directly from the modal for targeted reports.

*   **JQL Query History**:
    *   **Smart Query Chips**: Recent JQL searches are saved and displayed as clickable chips for instant re-runs.
    *   **Quick Access**: Perfect for daily standup queries (e.g., "updated >= -24h") and recurring searches.
    *   **Hover Details**: Long queries show full text in tooltips for easy identification.

*   **Enhanced User Experience**:
    *   **Custom Field Aliases**: Pivot tables now show friendly field names instead of "customfield_12345".
    *   **Sticky Headers**: Improved pivot table navigation with sticky column headers during scrolling.
    *   **Empty Cell Handling**: Zero-count cells are visually distinct (greyed out) and non-interactive.
    *   **Improved Width Control**: Full viewport utilization in tab mode for better data visibility.
    *   **Enhanced Tours**: Comprehensive guided tours covering pivot configuration and JQL history features.

*   **Documentation & Guides**:
    *   **Updated User Guide**: Added 6 new Q&A items covering all interactive pivot features with real-world examples.
    *   **Real-Life Use Cases**: 4 new pro workflows including "Workload Analyzer," "Sprint Deep Dive," "Bottleneck Investigator," and "Executive Report."
    *   **Quick Reference Cards**: Created quick lookup guides for pivot table features and visual indicators.
    *   **Technical Documentation**: Comprehensive feature specs and testing guides.


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

---

## 💬 Feedback & Support

**Your feedback drives Ticket360's evolution!** We're committed to building the best Jira extension for the community, and your input is crucial.

### 🐛 Found a Bug?
**[➡️ Report it on GitHub](https://github.com/sarivoli/common/issues/new?labels=bug)**
- Include browser version, Ticket360 version, and steps to reproduce
- Every bug report helps thousands of users

### 💡 Have a Feature Idea?
**[➡️ Request it on GitHub](https://github.com/sarivoli/common/issues/new?labels=enhancement)**
- Share your vision and how it would help your workflow
- Your ideas shape our roadmap

### ❓ Need Help?
**[➡️ Check our User Guide](./USER_GUIDE.md)** or **[Ask on GitHub](https://github.com/sarivoli/common/discussions)**
- Comprehensive Q&A documentation
- Community support and discussions

### ⭐ Love Ticket360?
- Star us on [GitHub](https://github.com/sarivoli/common)
- Write a review on your browser's extension store
- Share with your team!

**📖 For more details, see our [Feedback Guide](./FEEDBACK_GUIDE.md)**

---

*Created by [sarivoli](https://github.com/sarivoli)*
