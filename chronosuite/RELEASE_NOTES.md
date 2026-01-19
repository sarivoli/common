<table>
  <tr>
    <td width="220" valign="top">
      <img src="https://raw.githubusercontent.com/sarivoli/common/bf46ef808f5d2412e9f9a2921eb63a7e922b274e/chronosuite/ChronoSuite__logo.png" width="200" /> 
    </td>
    <td valign="top">
      <h2>ChronoSuite</h2> 
      <i>Planning, Engineered.</i> <br/><br/>
      <img src="https://img.shields.io/badge/Status-Beta-yellow" /><br/>
      <strong>Version:</strong> 0.2.4<br/>
      <strong>Build:</strong> 1<br/>
    </td>
  </tr>
</table>





## Overview

ChronoSuite is a sophisticated React-based planning suite designed to automate the chaos of sprint scheduling. It transforms raw configuration rules into conflict-free, production-ready calendars. Unlike generic calendar tools, ChronoSuite understands the nuances of software development lifecycles—sprints, ceremonies, maintenance windows, and global holidays.


## v 0.2.4 - Key Features

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