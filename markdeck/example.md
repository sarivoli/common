<!-- @type=presentation -->
<!-- @theme=neonnights -->
<!-- @logo=https://github.com/sarivoli/common/blob/8c31a8aeb9a5cba214fa94c8fdaec86e5eb2636f/arivoli-in-logo.png?raw=true -->
<!-- @background={type:animation, name:transform} -->


<!-- @slide transition=ease -->
# MARKDECK
<!-- @tagline border=true -->
MARKDOWN + SLIDE DECK
<!-- @endtagline -->
<!-- @grid cols=3 -->
  <!-- @card -->
  ### Standard Markdown
  - Headings (H1, H2, H3)
  - **Bold** and *italic* text
  - Ordered and unordered lists
  - Paragraphs and line breaks
  - Image tag
  - Tables
- [X] Completed Task
- [ ] Open Task



  <!-- @endcard -->
  <!-- @card -->
  ### Custom Notations
  - <!-- @highlight --> @highlight for emphasis <!-- @endhighlight -->
  - `@card` for content cards
  - `@grids` for layout
  - `@widgets` for charts with dimensions
  - `@slide` with transitions (ease, fade, slide, zoom)

  <!-- @endcard -->
  <!-- @card -->
  ### Metadata Options
  - `@type` - presentation type
  - `@theme` - theme selection
  - `@logo` - logo URL
  - `@background` - background configuration
  - Supporting `width` and `height` for images

  <!-- @endcard -->
<!-- @endgrid -->

<!-- @endslide -->

<!-- @slide transition=fade -->
## Lists & Headings
<!-- @grid cols=3 -->
<!-- @card -->
### Unordered Lists:
- First item
- Second item
- Third item

### Ordered Lists:
1. First step
2. Second step
3. Third step
<!-- @endcard -->
<!-- @card -->
### Headings:
# H1
## H2
### H3
#### H4
##### H5
###### H6
<!-- @endcard -->

<!-- @card animation="growth" -->
### Code & Pre Code
Pre Code: `Pre code `
```
<div class="glass-card" style="height: 400px; display: flex; justify-content: center;">
            <canvas id="teamChart"></canvas>
        </div>
```
<!-- @endcard -->
<!-- @endgrid -->

<!-- @endslide -->

<!-- @slide transition=slide -->
## Cards, Grids, Animation & Themes

<!-- @grids -->

<!-- @card animation="security" -->

== MarkDeck comes with professionally curated themes ==
*   `OceanBlue` (Default)
*   `CyberNeon` (Dark/Cyan/Pink)
*   `CoralReef` (Nature Wellness)
*   `TropicalSunset` (Warm)
*   `ElectricViolet` (Creative)
*   `IndustrialChic` (Corporate)
*   `AutumnHarvest` (Warm/Cozy)
*   `NeonNights` (High Contrast)

This card is configured with [[animation:security]]
<!-- @endcard -->

<!-- @card animation="transform" -->
== 5 themed animations designed for specific presentation topics ==
- `net` - Particle network with connections
- `security` - Binary code rain with shields
- `transform` - Morphing shapes with color transitions
- `growth` - Upward arrows with currency symbols
- `celebrate` - Confetti with sparkles
- `initiative` - Forward arrows with progress waves

This card is configured with [[animation:transform]]

<!-- @endcard -->
<!-- @endgrid -->

<!-- @endslide -->

<!-- @slide transition=zoom -->
## Data Visualization

<!-- @grid cols=3 -->
<!-- @card animation="celebrate" -->
### Bar Chart
<!-- @widgets -->
{
  "title": "Quarterly Sales",
  "type": "bar",
  "width": 300,
  "height": 300,
  "data": {
    "labels": ["Q1", "Q2", "Q3", "Q4"],
    "datasets": [{
        "label": "2024 Sales",
        "data": [12, 19, 15, 25],
        "backgroundColor": "rgba(52, 216, 134, 1)"
    }]
  }
}
<!-- @endwidgets -->
<!-- @endcard -->

<!-- @card animation="growth"-->
### Table
| Tool | Type |
| --- | ----------- |
| Ticket360 | Browser Extension |
| NoteWithVS | Visual Studio Extension |
| MARKDECK | Visual Studio Extension |


<!-- @endcard -->

<!-- @card animation="initiative" -->
### Line Chart
<!-- @widgets -->
{
  "title": "New Sales",
  "type": "line",
  "width": 300,
  "height": 300,
  "data": {
    "labels": ["Q1", "Q2", "Q3", "Q4"],
    "datasets": [{
        "label": "2024 Sales",
        "data": [12, 19, 15, 25],
        "backgroundColor": "rgba(52, 216, 134, 1)"
    }]
  }
}
<!-- @endwidgets -->
<!-- @endcard -->

<!-- @endgrid -->

<!-- @endslide -->

<!-- @slide -->
# Grid with Flex Ratios

<!-- @grid cols="3" -->
<!-- @card flex="2" -->
### Major Card (2x width)

This card takes up twice the space of the others because of `flex="2"`.

**Key Features:**
- Double width
- More content space
- Better visibility
<!-- @endcard -->

<!-- @card flex="1" -->
### Normal Card

Standard width card with `flex="1"`.
<!-- @endcard -->

<!-- @card flex="1" -->
### Another Normal

Another standard card.
<!-- @endcard -->
<!-- @endgrid -->
<!-- @endslide -->

<!-- @slide -->
# Percentage-Based Grid Layout

<!-- @grid -->
<!-- @card flex="7" -->
### Main Content (70%)

This card occupies 70% of the row width.

<!-- @endcard -->

<!-- @card flex="3" -->
### Sidebar (30%)

This sidebar takes 30% of the space.

**Quick Links:**
- Dashboard
- Settings
- Help
<!-- @endcard -->
<!-- @endgrid -->
<!-- @endslide -->

<!-- @slide -->
# Complex Layout with Multiple Ratios

<!-- @grid -->
<!-- @card flex="1" -->
### Card 1
25% width
<!-- @endcard -->

<!-- @card flex="2" -->
### Card 2 (Featured)
50% width - Featured content
<!-- @endcard -->

<!-- @card flex="1" -->
### Card 3
25% width
<!-- @endcard -->
<!-- @endgrid -->

<!-- @grid -->
<!-- @card flex="3" -->
### Large Card
Takes 75% of the space

More content here with plenty of room to breathe.
<!-- @endcard -->

<!-- @card flex="1" -->
### Small
25%
<!-- @endcard -->
<!-- @endgrid -->
<!-- @endslide -->



<!-- @slide -->
# Quote, Info & Warning Blocks

<!-- @quote -->
"The only way to do great work is to love what you do." - Steve Jobs
<!-- @endquote -->

<!-- @info -->
💡 **Pro Tip**: Use keyboard arrows or click buttons to navigate slides
<!-- @endinfo -->

<!-- @warning -->
⚠️ **Important**: Make sure to save your work frequently!
<!-- @endwarning -->

<!-- @endslide -->

<!-- @slide -->
# CountUp & CountDown Widgets

## Revenue Growth
We achieved <!--@countup target="150" prefix="$" suffix="M" --> in revenue this quarter!

## Days Until Launch
Only <!--@countdown target="7" start="30" suffix=" days" --> remaining until our product launch!

## Customer Satisfaction
Our satisfaction score is <!--@countup target="98" suffix="%" duration="3000" -->
<!-- @endslide -->

<!-- @slide -->
# Meter Widget (Speedometer Style)

## Performance Metrics

<!--@meter target="85" green="70" yellow="50" red="30" width="400" height="250" -->

Our system is performing at ==85%== efficiency!
<!-- @endslide -->

<!-- @slide -->
# Progress Bar Widgets

## Project Completion

<!--@progressbar target="75" color="green"  width="500" height="50" -->

## Budget Utilization

<!--@progressbar target="60" color="blue" prefix="$" suffix="M" ratio=true width="500" height="50" -->

## Team Productivity

<!--@progressbar target="90" color="purple"  width="500" height="50" -->
<!-- @endslide -->


<!-- @slide -->
# Flip Cards - Interactive Content
<!-- @flipcard fontSize="76" -->

Big Message

---
This is the back of the card with non auto flip mode enabled
<!-- @endflipcard -->

<!-- @grid -->
<!-- @flipcard fontSize="24" flex="2" autoFlip=true -->
Card with Auto flip enabled
---
This card is getting flipped automatically

<!-- @endflipcard -->

<!-- @flipcard fontSize="24" flex="1" -->
Normal Card
---
== you can have any markdown content here ==
<!-- @endflipcard -->
<!-- @endgrid -->

<!-- @endslide -->



<!-- @slide -->
# Combining Multiple Features

## Performance Dashboard

<!-- @grid cols="2" -->
<!-- @card animation="waves" colors="{primary:#667eea, secondary:#764ba2}" -->
### Quarterly Revenue
<!--@countup target="250" prefix="$" suffix="M" -->

Revenue target exceeded by ==15%==!
<!-- @endcard -->

<!-- @card -->
### Customer Growth

<!--@progressbar target="85" color="green"  width="300" height="40" -->
<!-- @endcard -->
<!-- @endgrid -->

<!--@meter target="92" green="80" yellow="60" red="40" width="500" height="400" -->
<!-- @endslide -->


<!-- @slide transition=ease -->
## More Tools from [[Author:Arivoli]] ! 
<!-- @grid -->
<!-- @card -->
### ==NoteWithVs== 
<!-- @polaroid align="center" link="https://marketplace.visualstudio.com/items?itemName=arivoli-in.notewithvs" -->
![NoteWithVS](https://raw.githubusercontent.com/sarivoli/common/e361a062a0b0282027c5bd85107c33ba513340d1/notewithvs/logo.png)
Visual Studio Extension    
<!-- @endpolaroid -->

<!-- @endcard -->
<!-- @card -->
### ==Ticket360== 
<!-- @polaroid align="center" link="https://chromewebstore.google.com/detail/ticket360/ebmjdbakddbnbjjfhonhobicbdjhoobd?utm_source=item-share-cb" -->
![Ticket360](https://github.com/sarivoli/common/blob/613558716d0ee7094aca3fa97499bdbc5fcc4298/Ticket360/ticket360.png?raw=true)
Browser Plugin for Jira Management 
<!-- @endpolaroid -->

<!-- @endcard -->
<!-- @card -->
### ==MarkDeck== 
<!-- @polaroid align="center"  -->
![MARKDECK](https://github.com/sarivoli/common/blob/6b3406733b220663103c9b7d0c9700def4274e9d/markdeck/logo.png?raw=true)
Visual Studio Code extension 
<!-- @endpolaroid -->
<!-- @endcard -->
<!-- @endgrid -->

<!-- @endslide -->
<!-- @slide -->
<!-- @grid -->
<!-- @card flex="3" -->
<!-- @polaroid align="center" -->
![arivoli.in](https://github.com/sarivoli/common/blob/8c31a8aeb9a5cba214fa94c8fdaec86e5eb2636f/arivoli-in-logo.png?raw=true)
Thank You !!
<!-- @endpolaroid -->
<!-- @endcard -->
<!-- @card flex="7" -->
# To Connect: 
## [[visit : www.arivoli.in]]
# To Download: 
## [[VisualStudio] : https://marketplace.visualstudio.com/publishers/arivoli-in]]
## [[OpenVSX] : https://open-vsx.org/extension/arivoli-in]]

<!-- @endcard -->
<!-- @endgrid -->

<!-- @endslide -->
