# Filament Premium Web Presentation

Custom website-based presentation that mimics PowerPoint behaviour while using a premium executive keynote style.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. The configured default is:

```text
http://127.0.0.1:5174
```

## Navigation

- `Right Arrow`, `Space`, `Enter`, `PageDown`: next build step / next slide
- `Left Arrow`, `Backspace`, `PageUp`: previous build step / previous slide
- `O`: overview / slide thumbnail navigation
- `F`: fullscreen
- On-screen controls: previous, next, overview and fullscreen

## Export To PDF

1. Run the app locally.
2. Open the presentation in Chrome or Edge.
3. Press `Ctrl+P`.
4. Choose `Save as PDF`.
5. Use landscape orientation.
6. Enable background graphics.

The print stylesheet sets each slide as a 16:9 page and reveals all build steps for export.

## Built Output

- 43 slide screens
- Fixed 16:9 presentation canvas
- One slide per viewport
- Dark outer stage background
- No normal presentation-mode scrolling
- Keyboard navigation
- Build-step navigation before slide advance
- Slide numbers and source metadata
- Progress indicator
- Fullscreen support
- Overview / thumbnail navigation
- Print-to-PDF stylesheet

## Major Interactive Concepts

- Employer problem-solving dilemma
- Highly interdependent mining system
- VUCA / governance / MHSA pressure
- Resource management and The Goal
- Mining as ROI
- Linear mining process logic
- Transactional vs transformational improvement
- TOC foundation
- Five focusing steps
- Balanced flowline
- Unbalanced flowline
- Blockage / starvation / buffer logic
- Continuous improvement methodology
- POOGI implementation profile
- Lean transformation architecture
- Lean transformation timeframe
- Sustainment problem
- Crossing the Chasm
- Graduate capability and sustainment
- Win-win-win strategy
- Price = opportunity
- Quo Vadis / way forward

## FILAMENT.pdf Visuals Used

- `src/assets/Filament logo.png`
- `src/assets/filament/page_4_img_1.png` - business model / source visual
- `src/assets/filament/page_7_img_5.png` - Monique profile image
- `src/assets/filament/page_8_img_4.png` - Vincent Seboni profile image
- `src/assets/filament/page_9_img_1.png` - enterprise transformation bench
- `src/assets/filament/page_16_img_1.png` - client logos grid
- `src/assets/filament/page_17_img_1.png` - closing/contact visual only

## Source Visuals Used

- `src/assets/source-diagrams/image42.png` - Sasol Mining TOC reference letter
- `src/assets/source-diagrams/image43.png` - Sasol Mining endorsement
- `src/assets/source-diagrams/poogi-performance-source.png` - POOGI source chart
- `src/assets/source-diagrams/chasm-source.png` - Chasm/adoption source visual

## Items Requiring Confirmation

- Monique spelling discrepancy: FILAMENT.pdf appears to use both `Monique Phillis` and `Monique Phillips`. The deck flags this on the profile slide.
- Exact vision, mission and values wording should be confirmed if the redesigned text slide replaces the original FILAMENT.pdf source page.
- Some proof/result detail is intentionally framed as source evidence rather than retyped values to avoid inventing chart values or claims.
- `image57.png` was removed from website assets because its relevance was not clearly proven by the current source context.
- POOGI and Chasm charts are now source visuals or labelled conceptual/source-based treatments rather than guessed data charts.

## Source Log

| # | Slide | Source | Action | Confidence |
|---:|---|---|---|---|
| 1 | Productivity Transformation, One Person at a Time. | FILAMENT.pdf P1 / Source S1 | Recreated hero | Confirmed exact source |
| 2 | Executive storyline | Source S2 | Redesigned contents | Confirmed exact source |
| 3 | Why productivity transformation? | Source S6-S8 | Recreated | Confirmed source, redesigned |
| 4 | Employer problem-solving dilemma | Source S4-S5 | Interactive orbit | Confirmed exact source |
| 5 | Highly interdependent mining system | Source S5/S8 | Animated lane model | Confirmed source, redesigned |
| 6 | VUCA, governance and MHSA pressure | Source S5 | Recreated comparison | Confirmed exact source |
| 7 | Resource management and The Goal | Source S6-S7 | Recreated | Confirmed exact source |
| 8 | Mining as ROI | Source S7-S8 | Animated process | Confirmed source, redesigned |
| 9 | Linear mining process logic | Source S8 | Flowline diagram | Confirmed source, redesigned |
| 10 | Day in the life of an employer | Source S10 | Demand matrix | Confirmed exact source |
| 11 | Transactional vs transformational improvement | Source S9 | Comparison | Confirmed exact source |
| 12 | Filament at a glance | FILAMENT.pdf P2/P17 | Source visual + framing | Source visual used |
| 13 | Vision, mission and values | FILAMENT.pdf P3 | Source-led comparison | Confirmed exact source |
| 14 | Strategy and quality policy | FILAMENT.pdf P5 | Strategy pillar comparison | Confirmed exact source, redesigned |
| 15 | What Filament does | FILAMENT.pdf P3/P6 | Train-diagnose-sprint-transform model | Confirmed source, redesigned |
| 16 | Competitive edge | FILAMENT.pdf P6 | Capability matrix | Confirmed exact source, redesigned |
| 17 | Business model | FILAMENT.pdf P4 | Full-bleed source plate | Source visual used |
| 18 | TOC foundation | Source S11/S30 | Interactive orbit | Confirmed source, redesigned |
| 19 | Five focusing steps | Source S11/S30 | Animated loop | Confirmed source, redesigned |
| 20 | Balanced flowline | Source S12-S13 | Source-faithful animated flowline | Confirmed exact source, recreated |
| 21 | Unbalanced flowline | Source S14 | Source-faithful animated flowline | Confirmed exact source, recreated |
| 22 | Blockage, starvation and buffer logic | Source S15 | Animated system diagram | Confirmed source, redesigned |
| 23 | Continuous improvement methodology | Source S16 | Method sequence diagram | Confirmed exact source |
| 24 | POOGI implementation profile | Source S17 | Source chart with magnifier | Source visual used |
| 25 | Unique value proposition and ROI | Source S18-S19 | Recreated | Confirmed exact source |
| 26 | Lean transformation architecture | Source S23-S24 | Layered architecture | Confirmed source, redesigned |
| 27 | Lean transformation timeframe | Source S26-S27 | Five-year transformation timeline | Confirmed exact source, redesigned |
| 28 | The sustainment problem | Source S22/S28 | Comparison | Confirmed exact source |
| 29 | Crossing the Chasm | Source S29 | Source chart with magnifier | Source visual used |
| 30 | Graduate capability and sustainment | Source S44 | Animated pipeline | Confirmed exact source, redesigned |
| 31 | Win-win-win strategy | Source S45 | Premium stakeholder model | Confirmed exact source |
| 32 | Proof: credentials and results | Source S33-S38 | Performance proof panels | Confirmed exact source |
| 33 | Endorsements as source evidence | Source S39-S43 | Evidence wall | Source visual used |
| 34 | Monique Phillis profile | FILAMENT.pdf P7 | Split executive profile | Confirmed exact source / spelling requires confirmation |
| 35 | Vincent Seboni profile | FILAMENT.pdf P8 | Split executive profile | Confirmed exact source |
| 36 | Enterprise transformation bench | FILAMENT.pdf P9 | Full-bleed source plate | Source visual used |
| 37 | Partner capability matrix | FILAMENT.pdf P9-P15 | Recreated | Confirmed source, redesigned |
| 38 | Partner profile section | FILAMENT.pdf P10-P15 | Recreated | Confirmed source, redesigned |
| 39 | Integrated enterprise transformation capability | FILAMENT.pdf P9 | Recreated | Confirmed source, redesigned |
| 40 | Our clients | FILAMENT.pdf P16 | Client logo wall source plate | Source visual used |
| 41 | Proposed engagement and opportunity | Source S46 | Recreated | Confirmed exact source |
| 42 | Quo Vadis: way forward | Source S47 | Animated timeline | Confirmed source, redesigned |
| 43 | Build lasting performance | FILAMENT.pdf P17 | Closing/contact source plate | Source visual used |

## Technical Notes

- This rebuild does not use Reveal.js.
- The app is intentionally data-driven so slide content and source metadata can be edited in `src/data/slides.js`.
- No CDN fonts or external runtime assets are required.
- Vite is the only development dependency.
