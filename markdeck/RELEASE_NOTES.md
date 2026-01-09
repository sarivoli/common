# MarkDeck v1.3.0

## 🛣️ New Widget: Roadmap
*   **Project Timelines**: Visualize milestones and project phases with the new `@roadmap` widget.
*   **Milestone Tracking**: Use `@milestone` to mark dates, labels, and status (done/active/pending).

## 🎨 Sidebar Redesign (v1.3.0 Enhanced)
*   **Unified Scroll & Compact Tabs**: The settings panel now features a cleaner, tabbed layout with a single scrollbar, solving usability issues.
*   **Compact Thumbnails**: Theme and animation previews have been optimized to save 30% more vertical space.
*   **Visual Polish**: Enhanced headers, spacing, and hover effects for a more professional look.
*   **Card Border Control**: New `border` attribute for `@card` widget.

---

## 🛠️ Sidebar Improvements
*   **Auto-Header Management**: Automatically adds `<!-- @type=presentation -->` when changing theme or animation.
*   **Native Snippets**: Improved notation insertion using VS Code's `SnippetString` API. This fixes text wrapping issues and provides better cursor placement.
*   **Enhanced Stability**: Using native APIs avoids conflicts with auto-correction and auto-close tag features.

##  New Widgets
*   **Photo Card**: Showcase images with rich captions and alignment options using `<!-- @imagecard -->`.


*   **Circle Meter**: Visualize data with a circular gauge using `<!-- @circlemeeter -->`.
*   **Circle Progress**: Display percentage progress in a compact ring using `<!-- @circleprogress -->`.

## 🎨 Styling Fixes
*   **Code Block Height**: Limited code snippets to a maximum of 25 lines with integrated vertical scrolling.

## 📺 Preview Experience (Redesigned)
*   **Theme Visualization**: New "color stripe" design in theme cards instantly shows the primary, secondary, and accent colors.
*   **Animation Thumbnails**: Added high-quality static preview images for all built-in animations (Celebrate, Growth, Initiative, Net, Security, Transform), replacing generic icons.
*   **Dynamic Feedback**: Settings panel now provides instant 'toast' notifications (e.g., "Updated: theme set to...") to confirm changes.

*   **Smart Context**: The settings panel now intelligently finds and updates the visible Markdown presentation even if focus is currently on the panel itself.

## 🐛 Fixes & Refinements
*   **Robust Chart Loading**: Added CDN fallback for Chart.js to prevent "Resource not found" errors in standalone exports.
*   **Interactive Widgets**: Fixed click handing for FlipCards and improved their reliability on load.
*   **Theme-Aware Widgets**: CircleMeters and ProgressBars now automatically inherit theme colors (`--primary`, `--success`, etc.) if not explicitly themed.

---

# MarkDeck v1.2.0

## 🆕 New Widgets
*   **ID Card**: Create professional employee ID cards with `<!-- @idcard -->`. Includes support for images, roles, and tags.
*   **Appreciation Card**: Recognize team members with `<!-- @appreciation -->`, featuring award titles and team branding.

---

# MarkDeck v1.0.0

**Launch Day! 🚀**

![MarkDeck](https://github.com/sarivoli/common/blob/613558716d0ee7094aca3fa97499bdbc5fcc4298/markdeck/logo.png?raw=true)

We are excited to introduce **MarkDeck**, the ultimate tool for developers to create presentations without leaving their editor.

## ✨ New Features

### Core Experience
*   **Markdown-to-HTML**: Robust parser supporting all standard Markdown syntax plus custom extensions.
*   **One-Click Export**: Generate a standalone `index.html` file with bundled CSS/JS.

### Visuals & Theming
*   **7 New Themes**: Included `CyberNeon`, `CoralReef`, `IndustrialChic`, `ElectricViolet`, `NeonNights`, `TropicalSunset`, and `AutumnHarvest`.
*   **Pluggable Animation System**:
    *   Background animations: `particles`, `net`, `aurora`.
    *   Element animations: `pulse`, `float`, `shake`.
    *   Custom plugin support for creating your own animations.

### Layout & Components
*   **Smart Layouts**:
    *   **Cards**: `<!-- @card -->` wrapper for content.
    *   **Grids**: `<!-- @grids -->` for 2-column or 3-column layouts.
    *   **flipcard**: `<!-- @flipcard -->` for flipcard with border which can be used to show content on both sides by flipping the card in animation.
*   **Rich Text**:
    *   **Badges**: New syntax `[[Label:Value]]` for technical badges.
    *   **Highlights**: `==Text==` syntax with improved inline rendering (marker style).
    *   **Tags**: `<!-- @tagline -->` for tagline with border.
    *   **Quotes**: `<!-- @quote -->` for quotes with border.
    *   **Info**: `<!-- @info -->` for info with border.
    *   **Warning**: `<!-- @warning -->` for warning with border.
    *   **Success**: `<!-- @success -->` for success with border.
    *   **Error**: `<!-- @error -->` for error with border.
   
*   **Charts**: Support for embedding Charts (bar, line, pie) via JSON configuration.
*   **Widgets**: Support for Animated Widgets
     *   **Countup**: `<!-- @countup -->` for countup with border.
    *   **Countdown**: `<!-- @countdown -->` for countdown with border.
    *   **Polaroid**: `<!-- @polaroid -->` for polaroid with border.
    *   **Meter**: `<!-- @meter -->` for meter with border.
    *   **Progressbar**: `<!-- @progressbar -->` for progressbar with border.

### UI Enhancements
*   **Auto-Hiding Navigation**: Navigation bar stays out of your way until you need it (hover-reveal).
*   **Status Bar**: "Shuttle" style status bar showing Slide Title and Progress.
*   **Uniform Slides**: Fixed `85vh` height for consistent presentation flow.


---
*Happy Presenting! - The MarkDeck Team*
