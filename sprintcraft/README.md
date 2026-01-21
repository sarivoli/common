<table border="0" cellspacing="0" cellpadding="0"> 
  <tr>
    <td style="border:none; padding-right:20px;" valign="top">
      <img src="https://raw.githubusercontent.com/sarivoli/common/bf46ef808f5d2412e9f9a2921eb63a7e922b274e/sprintcraft/SprintCraft__logo.png" width="200" /> 
    </td>
    <td style="border:none;" valign="top">
      <h2>SprintCraft</h2> 
      <i>Planning, Engineered.</i> <br/><br/>
      <img src="https://img.shields.io/badge/Status-Beta-yellow" /><br/>
      <strong>Version:</strong> 0.2.6<br/>
      <strong>Build:</strong> 5<br/>
    </td>
  </tr>
</table>

## Overview

SprintCraft is a sophisticated browser extension-based planning suite designed to automate the chaos of sprint scheduling. It transforms raw configuration rules into conflict-free, production-ready calendars. Unlike generic calendar tools, SprintCraft understands the nuances of software development lifecycles—sprints, ceremonies, maintenance windows, and global holidays.


## v0.2.5 - Firefox & Compliance Updates

### 🦊 Firefox Compliance
- **Manifest V3 Updates**: Added required `browser_specific_settings` including Add-on ID and data collection declarations to meet Mozilla's validation standards.
- **Privacy Declarations**: Explicitly declared data collection policies in manifest for smoother store submission.

### 🛠️ General
- **Build System**: Reset build number sequence for new version cycle.

## v0.2.4 - Key Features

### 🚀 Dynamic Sprint Engine
- **Auto-Generation**: Instantly generate 6-12 months of sprints based on start dates and lengths.
- **Business Day Awareness**: Automatically skips weekends and holidays during calculation.
- **Gap Handling**: Support for "Gap" sprints or breaks between cycles.
- **Adaptive Color Logic**: Sprints are assigned unique, vibrant colors automatically during generation.

### 🧠 Intelligent Rule System (UI Redesign)
- **High-Density Card-Based UI**: A complete overhaul of the rules interface using sleek, collapsible cards with emerald/indigo accents.
- **Smart Recurrence Options**: Support for Daily, Weekly, Per Sprint, Monthly, and One-time events.
- **Daily Scheduling**: Configure daily recurring events with specific start times and durations.
- **Skip Non-Working Logic**: Built-in support for skipping non-business days for daily ceremonies (e.g., Stand-ups).
- **Automation Parity**: Global "Sprint Ceremony Templates" now offer full parity with local rules, including holiday shifting and business-only logic.
- **Time & Duration Control**: Set specific start times and durations, or mark events as all-day.
- **Conflict Resolution**: Auto-shifts events if they land on a holiday or non-business day.

### 🎯 Browser Extension & Layout
- **Center-Stage Calendar**: Workspace expanded to `screen-2xl` width, allowing the calendar to take full priority on large displays.
- **Compact Sidebar Agenda**: A high-efficiency right sidebar for upcoming events, redesigned to be narrower and less distracting.
- **Quick Preview Popup**: Click the extension icon to see a clean calendar grid preview instantly (Agenda removed from popup for focus).
- **Smart Configuration Tab**: One-click transition from preview to full configuration settings.

### 💾 Data Portability & Exports
- **HTML Export**: Print-ready, styled HTML calendar generation with full meta context.
- **Advanced Excel Export**: Premium XLSX generator with colorful monthly grids and structured event slots.
- **Enriched ICS Export**: Calendar-aware ICS generation with automatic alarms and descriptive metadata.

### 🍱 UI/UX Excellence
- **Visual Intelligence**: Weekend color-coding and semi-transparent sprint background highlights.
- **Rule-Centric Coloring**: Events are colored based on their associated Rule colors for maximum visual clarity.
- **Sticky Headers**: Scroll-friendly calendar grid with sticky month navigation and day-of-week headers.
- **Adaptive Sizing**: Popup window automatically scales to content for a cleaner extension experience.

## Installation & Build

### Development Setup
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev` to start the Vite development server.

### Building for Production
To create the extension packages for Chrome, Firefox, and Edge:
```bash
npm run build
```
76: This command will:
77: 1. Sync the version from `package.json` to all manifest files.
78: 2. Build the project using Vite.
79: 3. Generate zip files in the `builds/` directory (e.g., `sprintcraft-chrome-v0.2.6.zip`).

### Loading the Extension
**Chrome/Edge**:
1. Go to Extensions page (`chrome://extensions` or `edge://extensions`).
2. Enable "Developer mode".
3. Drag and drop the generated `.zip` file or unzip it and click "Load unpacked" pointing to the folder.

**Firefox**:
1. Go to `about:debugging`.
2. Click "This Firefox".
3. Click "Load Temporary Add-on" and select the .zip file.

---
*© 2026 www.arivoli.in All rights reserved.*
