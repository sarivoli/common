# Ticket360 Extension - Release Notes

## Version 1.3.0

### Key Features:
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

## Version 1.2.0

### Key Features:
*   **Enhanced Links Tab**: 
    *   A new "Links" tab to display all tickets linked to the current ticket.
    *   The table shows the Key, Summary, Status, grouped by the ticket relation
    *   Added a "History" button to each linked ticket, allowing users to get a 360° view of the linked ticket with a single click.
*   **Persistent Search Results**:
    *   The last searched ticket's results are now preserved.
    *   The results will be displayed when the extension is reopened, until the user clicks the "Back to Search" button.
*   **Direct Jira Links**:
    *   The ticket ID in the search input now generates a direct link to the Jira ticket.
    *   The ticket title in the results view is now a hyperlink to the Jira ticket.
    
## Version 1.1.0

### Key Features:
*   **Search History Feature**:
    *   Introduced a new search history section on the main popup screen.
    *   Allows users to store and view recently searched Jira ticket IDs.
    *   Clicking a history item re-fetches the ticket details.
    *   Option to remove individual items from the history.
    *   Configurable in the Options page: enable/disable and set maximum number of items (1-10).

## Version 1.0.0 - Initial Release

We are excited to announce the initial release of the Ticket360 Chrome Extension! This version provides a comprehensive 360-degree view of your Jira tickets directly from your browser.

### Key Features:

*   **Instant Ticket Lookup**: Quickly fetch detailed information for any Jira ticket ID.
*   **Comprehensive Overview**: Get a snapshot of critical ticket fields including Assignee, Reporter, Priority, Status, Created, Updated, and Due Date.
*   **Dynamic Field Selection**: Customize which critical fields are displayed in the overview section via the extension's settings.
*   **Status History**: View a chronological log of all status changes for a ticket, including duration in each status.
*   **Assignee History**: Track the complete history of assignee changes for a ticket, showing who was assigned and for how long.
*   **Comment Viewer**: Easily browse all comments associated with a Jira ticket.
*   **Copy to Clipboard**: Conveniently copy formatted ticket overview, status history, and assignee history as HTML for easy sharing.
*   **Jira Configuration**: Securely configure your Jira instance URL, email, and API token within the extension settings.

We hope Ticket360 enhances your daily workflow and provides quick access to the information you need!
