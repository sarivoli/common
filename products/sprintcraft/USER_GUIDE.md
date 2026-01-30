<table border="0" cellspacing="0" cellpadding="0"> 
  <tr>
    <td style="border:none; padding-right:20px;" valign="top">
      <img src="https://raw.githubusercontent.com/sarivoli/common/refs/heads/main/sprintcraft/SprintCraft_logo.png" width="200" /> 
    </td>
    <td style="border:none;" valign="top">
      <h2>SprintCraft</h2> 
      <i>Precision Planning, Engineered.</i> <br/><br/>
      <img src="https://img.shields.io/badge/Status-Beta-indigo" />
      <img src="https://img.shields.io/badge/Build-Modern-emerald" /><br/>
      <strong>Version:</strong> 0.2.8<br/>
      <strong>Build:</strong> 3<br/>
    </td>
  </tr>
</table>

## 🌟 Welcome to SprintCraft
SprintCraft is not just a calendar; it's an **Intelligent Planning Engine** designed to automate the complex dance of software development lifecycles. Whether you are managing Agile Sprints, Maintenance Cycles, or Global Release Calendars, SprintCraft ensures your ceremonies and milestones land exactly where they should—respecting business days, holidays, and team capacity.

---

## 🛠 Feature Navigation & Controls

### 1. The Project Hub (Main View)
This is your central command center where you manage multiple calendars.
- **Create New Calendar:** Start a fresh planning cycle.
- **Import/Export:** Support for JSON backups to keep your data safe.
- **Global Settings (Globe Icon):** Manage system-wide preferences, global holidays, and ceremony templates.

### 2. Dashboard: The Planning Workspace
Visualize your schedule with three high-density view modes:
- **📅 Month View:** A complete overview of your sprint cycles and events.
- **🗓 Week View:** A focused, high-granularity view of the current work week (Hides weekends for clarity).
- **📋 Agenda View:** A list of upcoming events sorted by date, featuring relative time-remaining indicators.

### 3. Configuration: The Logic Engine
This is where the magic happens. Divided into four critical sections:
- **General:** Set titles, years, and high-level metadata.
- **Sprints:** The **Sprint Generator** auto-calculates months of sprints based on your start date and length.
- **Rules:** Define recurring ceremonies (Daily, Weekly, Monthly) with advanced logic like "Holiday Shifting".
- **Holidays:** Manage specific non-working days for this project.

---

## 🧠 Mastering SprintCraft: Pro Tips & Use Cases

### Creating Sprint Calendar in 15 Seconds  !

![Creating Sprint Calendar in 15 Seconds](https://raw.githubusercontent.com/sarivoli/common/refs/heads/main/sprintcraft/sprintcraft15Seconds.gif)

### 📅 Managing Time Off & Holidays

#### **Q: How can I set up a shared holiday list for my entire organization?**
1. **Navigate to System Configuration:** Click the **Globe icon** in the top navigation or sidebar.
2. **Access Holidays:** Select the **Global Holidays** tab.
3. **Add Events:** Click **Add Global Event**, enter the date and name (e.g., "New Year's Day").
4. **Apply:** Click **Save & Apply Changes**.
> **💡 Tip:** Global holidays are automatically inherited by every project. Set them once, and never worry about scheduling a Standup on Christmas again!

#### **Q: What if I have a special project-specific holiday (e.g., Team Outing)?**
1. **Enter Project Config:** Open your specific calendar and go to the **Configuration** view.
2. **Local Holidays:** Select the **Holidays** tab.
3. **Add Local:** Click **Add Local Holiday**.
4. **Calculated Impact:** SprintCraft will immediately recalculate all event rules to skip or shift around this local date.

---

### ⚙️ Mastering Event Rules

#### **Q: How do I create recurring ceremonies like Daily Standups?**
1. **Open Rules:** Go to **Configuration > Event Rules**.
2. **Create:** Click **Add Rule** or **Populate from Template** (e.g., "Sprint Agile").
3. **Set Patterns:** Select **Daily** as the frequency.
4. **Enable Intelligence:** Toggle **Business Days Only** and **Skip Non-Working**.
5. **Set Timing:** Input your start time (e.g., 09:30) and duration.
> **✨ Magic Hint:** If your standup lands on a Saturday or a Holiday, it will automatically disappear or shift based on your "Skip Non-Working" setting.

#### **Q: I need a weekly "Refinement" session that stops when the sprint ends. How?**
1. **Create Weekly Rule:** Set frequency to **Weekly**.
2. **Select Day:** Pick the day of the week (e.g., Wednesday).
3. **Set Boundary:** Under **Stop Condition**, select **Until Sprint End**.
4. **Define Offset:** Use "Relative To: Sprint Start" with an "Offset: 7 days" if you want it in the second week.

---

### 🔧 SysAdmin & Maintenance Use Cases

#### **Q: How can I plan a "Global Patching Window" every 3rd Tuesday?**
1. **Create New Calendar for Maintenance:** Switch to a dedicated "Infra/Patching" profile.
2. **Set Rule:** Add a rule named "Sustenance Patching".
3. **Pattern Matching:** Use the **Pattern Logic** (e.g., "Third Tuesday") instead of a date offset.
4. **Frequency:** Set to **Monthly**.
> **💡 Impact:** Any shifts caused by holidays on that Tuesday will be visually highlighted, allowing you to move the patching window to the "Next Business Day" with one toggle.

#### **Q: How do I identify conflicts between a "Code Freeze" and a "Production Deployment"?**
- **Method:** Use the **Rules Engine** to anchor "Production Deployment" to the "Sprint End". 
- **Identify:** If the "Deployment" lands on a Friday and your "Code Freeze" is 2 days before, the engine will automatically space them out. If a holiday occurs on Thursday, the Freeze shifts to Wednesday, keeping your deployment window safe!

---

### 📊 Data Portability: Exports & Sharing

#### **Q: Which format should I use to share my plan?**

| Format | Best Use Case | Benefit |
| :--- | :--- | :--- |
| **🌐 HTML** | **Stakeholder Reviews** | Generates a sleek, standalone webpage that anyone can open in a browser. It’s "What You See Is What You Get" for the entire year. |
| **📑 Excel (XLSX)** | **Reporting & Tracking** | Perfect for PMOs. It splits your plan into monthly tabs and allows you to add custom columns for "Actual Effort" or "Assigned Resource." |
| **📅 ICS** | **Mobile & Outlook** | Sync your automated ceremonies with your "Real Life" calendar. Import this file into Outlook or Apple Calendar to get desktop/mobile reminders. |
| **💾 JSON** | **Backups & Team Sync** | The "Raw Core." Use this to share your exact rules with a teammate or to keep a local backup of your intelligence settings. |

---

### 📧 Event Attendees & ICS Improvements (v0.2.8)

#### **Q: How do I add email recipients to my events so they're included when I import to Outlook/Google Calendar?**
1. **Open Event Rule:** Navigate to **Configuration > Event Rules** and expand the rule you want to edit.
2. **Scroll to Attendees:** Find the **Event Attendees** section (emerald-colored panel).
3. **Add Emails:** Type an email address and press **Enter** or click **Add**.
4. **Multiple Recipients:** Repeat to add as many attendees as needed.
5. **Export to ICS:** When you export to ICS format, all attendees will be automatically included.
6. **Import Ready:** When you import the ICS file into Outlook or Google Calendar, the attendees will already be configured—no manual editing required!

> **💡 Pro Tip:** This is perfect for recurring ceremonies like Daily Standups or Sprint Planning. Add your team members once, and they'll be included in every occurrence when imported!

#### **Q: Why don't I see duplicate events when I re-import the same ICS file?**
SprintCraft now generates **stable, unique UIDs** for each event following the RFC 5545 standard. This means:
- **First Import:** Creates new events in your calendar
- **Subsequent Imports:** Updates existing events instead of creating duplicates
- **Smart Recognition:** Calendar apps (Outlook, Google, Apple) recognize events by their UID
- **Rule-Based Matching:** UIDs are generated from calendar ID + rule ID + date
- **Maximum Flexibility:** You can change event title, attendees, time, frequency, or other properties in SprintCraft, re-export, and re-import—events from the same rule will be updated, not duplicated

**Example Workflow:**
1. Create "Daily Standup" rule with 3 attendees and export to ICS
2. Import into Outlook—events are created
3. Realize you need to:
   - Rename to "Morning Sync"
   - Add 2 more attendees
   - Change time from 9:00 AM to 9:30 AM
4. Update the same rule in SprintCraft, re-export, and re-import into Outlook
5. ✅ Existing events are updated with new title "Morning Sync", 5 attendees, and new time—no duplicates!

**Important Note:** If you **delete** a rule and create a **new** rule (even with the same name), it will create new events because it has a different rule ID. The old events will remain in your calendar and can be manually deleted if needed.

The UID format is: `{calendar-id}-{rule-id}-{date}@sprintcraft.arivoli.in`

---

### 📝 Surgical Adjustments & Notes

#### **Q: Can I add extra comments or context to a specific generated event?**
1. **Dashboard View:** In the Calendar or Agenda view, locate your event.
2. **Add Note:** Hover over the event and click the **MessageSquare icon** (Add Note).
3. **Add Insight:** Type your specific instructions or meeting links.

#### **Q: An unplanned event shifted our schedule. Can I move just a few events manually?**
1. **Identify the Event:** Find the event in the **Dashboard**.
2. **Shift Days:** Hover over the event. Use the **+1d** or **-1d** buttons to move it.
3. **Manual Override:** This creates a surgical adjustment that survives even if you change the underlying rules!

---

### 💎 Professional Tips & Tricks (Bonus)

*   **🎨 Semantic Color Coding:** Assign shades of Emerald for ceremonies, Amber for milestones, and Slate for administrative tasks. This makes the calendar "scannable" at a glance.
*   **⏳ Buffer Logic:** When setting rules for "Sprint End", use an offset of `-1 Day`. This ensures ceremonies land on the *final work day* of the sprint rather than the literal last date (which might be a Sunday).
*   **🔗 Dependencies:** You can anchor a rule to *another rule*. For example, anchor "Demo Prep" to 2 days before your "Sprint Demo" rule. If you shift the Demo, the Prep shifts automatically!
*   **👻 Ghost Sprints:** If you have a one-week break between cycles, use a "Gap" sprint type in the generator. This preserves your numbering (e.g., Sprint 1, 2, [Gap], 3).

---

## 🚀 Pro Power User Shortcuts
- **CTRL + SHIFT + K:** Access SprintCraft instantly from any browser tab.
- **Today Button:** Instantly jump back to the current date in the dashboard.
- **Month/Week Toggles:** Quickly filter out the weekend noise for focused planning.

---

*Need more help? Check out our [Developer Guide](./PROJECT.md) or visit our [Repository](https://github.com/sarivoli/SprintCraft).*