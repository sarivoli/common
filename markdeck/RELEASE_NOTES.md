# MarkDeck v1.0.0 Release Notes

**Launch Day! 🚀**

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
*   **Rich Text**:
    *   **Badges**: New syntax `[[Label:Value]]` for technical badges.
    *   **Highlights**: `==Text==` syntax with improved inline rendering (marker style).
*   **Widgets**: Support for embedding Charts (bar, line, pie) via JSON configuration.

### UI Enhancements
*   **Auto-Hiding Navigation**: Navigation bar stays out of your way until you need it (hover-reveal).
*   **Status Bar**: "Shuttle" style status bar showing Slide Title and Progress.
*   **Uniform Slides**: Fixed `85vh` height for consistent presentation flow.

## 🐛 Bug Fixes
*   Fixed rendering of sequential inline highlights.
*   Fixed parsing of interactive elements inside Cards/Grids.

---
*Happy Presenting! - The MarkDeck Team*
