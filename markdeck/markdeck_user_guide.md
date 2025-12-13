# MarkDeck - Professional Presentation Framework for VS Code

## Transform Your Markdown Into Stunning Presentations

**MarkDeck** revolutionizes how developers and content creators build presentations. Stop wrestling with PowerPoint or Google Slides—write presentations the way you write code: in **pure Markdown**, with full version control, and zero design friction.

### Why MarkDeck?

- 🚀 **Write presentations as fast as you write documentation**
- 🎨 **Beautiful themes and animations built-in**
- 📊 **Rich widgets**: charts, counters, progress bars, flip cards
- ⚡ **Live preview** in your browser with hot-reload
- 🎯 **Developer-friendly**: Git-compatible, no proprietary formats
- 🌈 **Customizable**: themes, animations, and styling options

---

## Installation & Quick Start

1. Install **MarkDeck** from VS Code Marketplace
2. Create a new `.md` file
3. Add the presentation marker at the top:
   ```markdown
   <!-- @type=presentation -->
   ```
4. Use the **Actions Panel** to preview or export

---

## Panel Windows

### Settings Panel

Located in the VS Code sidebar, the **Settings Panel** provides:

- **Theme Selection**: Choose from available presentation themes
- **Background Animation**: Select global background animations
- **Quick Insert**: One-click insertion of common notations
- **Current Settings Display**: View active theme and animation

**How to Use:**
- Click any notation button to insert at cursor position
- Select text before clicking to wrap it with the notation
- Use "Change Theme" or "Change Animation" buttons to modify presentation appearance

### Actions Panel

The **Actions Panel** provides three core actions:

| Action | Description | Shortcut |
|--------|-------------|----------|
| **Preview Presentation** | Opens HTML preview in your default browser | Command Palette: `MarkDeck: Preview` |
| **Export Presentation** | Exports to standalone HTML file | Command Palette: `MarkDeck: Export` |
| **Sample MarkDeck** | Loads example presentation for learning | Command Palette: `MarkDeck: Sample` |

---

## Complete Notation Reference

### Presentation Metadata

| Syntax | Parameters | Description |
|--------|------------|-------------|
| `<!-- @type=presentation -->` | `presentation` | **Required**: Marks file as MarkDeck presentation |
| `<!-- @theme=THEME_NAME -->` | Theme folder name | Sets visual theme (default: `default`) |
| `<!-- @bganimation="ANIMATION_NAME" -->` | Animation name | Global background animation |
| `<!-- @logo=IMAGE_URL -->` | Image path/URL | Adds fixed logo at bottom-left |

**Example:**
```markdown
<!-- @type=presentation -->
<!-- @theme=modern -->
<!-- @bganimation="waves" -->
<!-- @logo=company-logo.png -->
```

---

### Slide Definition

| Syntax | Parameters | Description |
|--------|------------|-------------|
| `<!-- @slide -->...<!-- @endslide -->` | None | Creates a new slide |
| `transition=TYPE` | `fade`, `slide`, `zoom` | Slide transition effect |
| `slideAnimation="NAME"` | Animation name | Slide-specific background animation |
| `title="TEXT"` | String | Sets slide title (used in status bar) |

**Example:**
```markdown
<!-- @slide transition=fade slideAnimation="particles" title="Introduction" -->
# Welcome to MarkDeck
Content goes here...
<!-- @endslide -->
```

---

### Layout Components

#### Cards

Glass-morphism styled containers with optional animations.

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `animation` | Animation name | None | Background canvas animation |
| `colors` | `{color1:hex, color2:hex}` | Theme colors | Custom animation colors |
| `flex` | Number | `1` | Flex-grow value in grids |
| `text-align` | `left`, `center`, `right` | `left` | Text alignment |
| `align` | `left`, `center`, `right` | None | Card alignment (standalone) |
| `border` | `true`, `false` | `true` | Show/hide glass border |

**Syntax:**
```markdown
<!-- @card animation="gradient" colors={color1:#FF6B6B, color2:#4ECDC4} -->
Card content here
<!-- @endcard -->
```

**Borderless Card Example:**
```markdown
<!-- @card border=false text-align=center -->
Transparent content block
<!-- @endcard -->
```

---

#### Grid Layout

Responsive grid system for organizing cards.

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `cols` | Number (1-12) | `3` | Number of columns |

**Syntax:**
```markdown
<!-- @grid cols=3 -->
<!-- @card -->Card 1<!-- @endcard -->
<!-- @card -->Card 2<!-- @endcard -->
<!-- @card -->Card 3<!-- @endcard -->
<!-- @endgrid -->
```

---

### Content Elements

#### Highlights

| Syntax | Description |
|--------|-------------|
| `==text==` | Inline highlight (yellow marker) |
| `<!-- @highlight -->...<!-- @endhighlight -->` | Block highlight |

**Example:**
```markdown
This is ==important text== in a sentence.

<!-- @highlight -->
Entire paragraph highlighted
<!-- @endhighlight -->
```

---

#### Badges

Inline label-value pairs with styling.

| Syntax | Description |
|--------|-------------|
| `[[Label:Value]]` | Creates colored badge |

**Example:**
```markdown
Release [[Version:2.0]] with [[Status:Stable]]
```

---

#### Taglines

Subtitle or caption text with optional styling.

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `border` | `true`, `false` | `false` | Add bottom border |
| `text-align` | `left`, `center`, `right` | `center` | Text alignment |

**Syntax:**
```markdown
# Main Heading
<!-- @tagline border=true text-align=center -->
Subtitle text goes here
<!-- @endtagline -->
```

---

### Alert Boxes

Styled notification containers.

| Notation | Color Scheme | Use Case |
|----------|--------------|----------|
| `<!-- @info -->...<!-- @endinfo -->` | Blue | General information |
| `<!-- @warning -->...<!-- @endwarning -->` | Orange/Yellow | Warnings, cautions |
| `<!-- @quote -->...<!-- @endquote -->` | Gray | Quotes, callouts |

**Example:**
```markdown
<!-- @warning -->
This feature is experimental and may change.
<!-- @endwarning -->
```

---

### Interactive Widgets

#### CountUp Widget

Animated number counter.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `target` | Number | `0` | Final number to count to |
| `prefix` | String | `""` | Text before number (e.g., "$") |
| `suffix` | String | `""` | Text after number (e.g., "%") |
| `duration` | Milliseconds | `2000` | Animation duration |
| `align` | `left`, `center`, `right` | `left` | Text alignment |

**Syntax:**
```markdown
<!-- @countup target="1500" prefix="$" suffix="M" duration="3000" align=center -->
```

---

#### CountDown Widget

Animated countdown from start value to target.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `start` | Number | `100` | Starting number |
| `target` | Number | `0` | Final number |
| `prefix` | String | `""` | Text before number |
| `suffix` | String | `""` | Text after number |
| `duration` | Milliseconds | `2000` | Animation duration |
| `align` | `left`, `center`, `right` | `left` | Text alignment |

**Syntax:**
```markdown
<!-- @countdown start="100" target="25" suffix="%" duration="2500" -->
```

---

#### Progress Bar Widget

Animated progress indicator.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `target` | Number (0-100) | `0` | Progress percentage |
| `color` | Color name/hex | `blue` | Bar color |
| `prefix` | String | `""` | Label prefix |
| `suffix` | String | `""` | Label suffix |
| `width` | Pixels | `400` | Bar width |
| `height` | Pixels | `40` | Bar height |
| `ratio` | `true`, `false` | `false` | Show completion ratio |

**Syntax:**
```markdown
<!-- @progressbar target="75" color="#4CAF50" width="500" ratio=true -->
```

---

#### Meter Widget

Gauge/dial display with color zones.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `target` | Number (0-100) | `0` | Needle position |
| `green` | Number | `70` | Green zone threshold |
| `yellow` | Number | `50` | Yellow zone threshold |
| `red` | Number | `30` | Red zone threshold |
| `width` | Pixels | `300` | Meter width |
| `height` | Pixels | `200` | Meter height |

**Syntax:**
```markdown
<!-- @meter target="85" green="80" yellow="60" red="40" width="350" -->
```

---

#### Chart Widget

Full-featured Chart.js integration.

**Syntax:**
```markdown
<!-- @widgets -->
{
  "type": "bar",
  "title": "Sales Data",
  "width": 600,
  "height": 400,
  "data": {
    "labels": ["Q1", "Q2", "Q3", "Q4"],
    "datasets": [{
      "label": "Revenue",
      "data": [120, 190, 150, 200],
      "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
    }]
  },
  "legend": {
    "display": true,
    "position": "top"
  }
}
<!-- @endwidgets -->
```

**Available Chart Types:**
- `bar` / `barchart` - Bar charts
- `line` - Line charts
- `pie` - Pie charts
- `doughnut` - Doughnut charts
- `radar` - Radar charts
- `polarArea` - Polar area charts
- `scatter` - Scatter plots
- `bubble` - Bubble charts

**Customization Options:**

| Property | Description |
|----------|-------------|
| `backgroundColor` | Widget background color |
| `border` | Border style (e.g., "5px solid #ccc") |
| `borderRadius` | Corner rounding |
| `padding` | Outer padding |
| `canvasPadding` | Inner canvas padding |
| `titleFont` | Title font settings |
| `titleColor` | Title text color |
| `xAxisTitle` / `yAxisTitle` | Axis labels |
| `tooltipEnabled` | Enable/disable tooltips |

---

### Media Elements

#### Images with Attributes

Extended image syntax with sizing and alignment.

| Parameter | Values | Description |
|-----------|--------|-------------|
| `width` | Pixels | Image width |
| `height` | Pixels | Image height |
| `align` | `left`, `center`, `right` | Alignment |
| `wrap` | `left`, `right` | Text wrapping |

**Syntax:**
```markdown
![Alt text](image.jpg width=400 align=center)
![Logo](logo.png width=150 wrap=left)
```

**Shorthand sizing:**
```markdown
![Alt text](image.jpg =300)        <!-- width only -->
![Alt text](image.jpg =400x300)    <!-- width x height -->
```

---

#### Polaroid Images

Vintage photo frame effect.

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `align` | `left`, `center`, `right` | `center` | Polaroid alignment |
| `link` | URL | None | Make image clickable |

**Syntax:**
```markdown
<!-- @polaroid align=center link="https://example.com" -->
![Photo](photo.jpg)
Beautiful sunset captured in 2024
<!-- @endpolaroid -->
```

---

#### Flip Cards

Interactive cards with front/back content.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `fontSize` | Pixels | `48` | Front text size |
| `width` | Pixels | Auto | Card width |
| `height` | Pixels | Auto | Card minimum height |
| `autoFlip` | `true`, `false` | `false` | Auto-flip on slide load |
| `flipCount` | Number | `3` | Times to auto-flip |
| `flipDelay` | Milliseconds | `2000` | Delay between flips |
| `flex` | Number | `1` | Flex-grow in grids |

**Syntax:**
```markdown
<!-- @flipcard fontSize="60" autoFlip=true flipCount="2" -->
Front Content
---
# Back Content
Detailed information here
<!-- @endflipcard -->
```

**In Grid:**
```markdown
<!-- @grid cols=2 -->
<!-- @flipcard flex="1" -->Front 1 --- Back 1<!-- @endflipcard -->
<!-- @flipcard flex="1" -->Front 2 --- Back 2<!-- @endflipcard -->
<!-- @endgrid -->
```

---

## Complete Example

```markdown
<!-- @type=presentation -->
<!-- @theme=modern -->
<!-- @bganimation="waves" -->

<!-- @slide title="Welcome" -->
# MarkDeck Presentation

<!-- @tagline border=true -->
The Modern Way to Present
<!-- @endtagline -->

<!-- @info -->
This presentation was built entirely in Markdown!
<!-- @endinfo -->
<!-- @endslide -->

<!-- @slide transition=fade -->
## Key Features

<!-- @grid cols=3 -->
<!-- @card animation="gradient" -->
### Fast
Write at ==code speed==
<!-- @endcard -->

<!-- @card animation="particles" -->
### Beautiful
[[Status:Stunning]] visuals
<!-- @endcard -->

<!-- @card -->
### Simple
Pure Markdown
<!-- @endcard -->
<!-- @endgrid -->
<!-- @endslide -->

<!-- @slide -->
## Performance Metrics

<!-- @progressbar target="95" color="#4CAF50" suffix="%" ratio=true -->

<!-- @countup target="10000" prefix="$" suffix="K" -->

<!-- @meter target="87" green="75" yellow="50" red="30" -->
<!-- @endslide -->

<!-- @slide -->
## Interactive Demo

<!-- @flipcard fontSize="72" autoFlip=true -->
Click Me!
---
# Surprise! 🎉
Flip cards are interactive
<!-- @endflipcard -->
<!-- @endslide -->
```

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |

---

## Tips & Best Practices

### Performance
- Keep slides focused (one concept per slide)
- Optimize image sizes before importing
- Limit animations to 2-3 per slide

### Design
- Use consistent theme across presentation
- Leverage grids for organized layouts
- Use cards to group related content
- Highlight only key phrases, not paragraphs

### Workflow
- Save frequently (auto-regenerates HTML)
- Use version control (Git) for collaboration
- Test in browser before presenting
- Keep backup of `.md` source file

### Animation Guidelines
- Global `@bganimation` for consistent feel
- Card-level `animation` for emphasis
- Slide-level `slideAnimation` for transitions
- Don't mix too many animation types

---

## Troubleshooting

**Preview not showing?**
- Ensure `<!-- @type=presentation -->` is at the top
- Check that file is saved before previewing
- Look for syntax errors in console

**Widgets not rendering?**
- Validate JSON syntax in `@widgets` blocks
- Check data format matches chart type
- Ensure Chart.js is loading (check browser console)

**Animations not working?**
- Verify animation name exists in `/animations` folder
- Check browser console for JavaScript errors
- Try different animation (some require specific attributes)

**Theme not applying?**
- Confirm theme folder exists in `/themes` directory
- Check spelling of theme name
- Reload window after changing themes

---

## Support & Resources

- **GitHub**: [Report issues and contribute](#)
- **Documentation**: Full API reference at docs.markdeck.dev
- **Examples**: Sample presentations in extension package
- **Community**: Join our Discord for help and tips

---

**Created with ❤️ for developers who present**

*Version 1.0 | MIT License*