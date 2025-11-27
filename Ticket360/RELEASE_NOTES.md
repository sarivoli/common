# TICKET360 USER GUIDE

## TICKET360: THE ULTIMATE BROWSER EXTENSION FOR JIRA TICKET MANAGEMENT

### WHAT IS TICKET360?

A Browser extension that transforms Jira ticket management with a unified 360° view. Stop switching tabs and losing ticket context - get everything in one intelligent dashboard.

### CORE FEATURES

#### UNIFIED DASHBOARD

*   Complete ticket overview with smart visual indicators
*   Real-time status tracking with precision timestamps
*   Professional HTML export for stakeholder reports
*   **Dynamic Field History**: Click on any field in the "Overview" tab to view its detailed history.

#### SMART ANALYTICS

*   **Status History:** Complete timeline with duration analysis
*   **Ownership tracking:** Full assignment history with accountability gaps

#### ENHANCED COMMUNICATION

*   Latest comments first with rich text rendering
*   Clear author attribution and timestamps
*   Organized thread management
*   **Enhanced Comment Copy**: Copy comments with ticket context and a direct link to the comment in Jira.

#### GUIDED TOUR

*   **Interactive Tour**: A step-by-step guided tour to introduce new users to the extension's key features.

### KEY CAPABILITIES

#### CONFIGURATION

*   One-time Jira setup (URL + API token)
*   Custom field selection with drag-drop organization
*   Multi-instance support for enterprise environments

#### PROFESSIONAL EXPORT

*   Executive-ready HTML tables
*   One-click copy to clipboard
*   Perfect for status reports and documentation

#### SECURITY

*   100% local browser processing
*   Encrypted credential storage
*   Zero external data transmission

---

### PRO TIPS

*   Use HTML export for professional stakeholder updates
*   Leverage color-coded duration alerts to identify bottlenecks
*   Customize field templates for consistent team reporting
*   Export assignment history for retrospective analysis

---

## TICKET360 EXTENSION - RELEASE NOTES

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
