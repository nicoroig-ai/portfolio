# Design system: the data book

The site is a set of technical data books. Each system is one coloured volume with a part number. The home page is the stack of spines; opening a spine gives you that volume.

## Colour

Tokens live at the top of `assets/site.css`.

| Role | Light | Dark |
|---|---|---|
| Paper | `#f4f5f6` | `#111317` |
| Ink | `#0e1013` | `#eceef0` |
| Secondary ink | `#4a4f57` | `#a5abb4` |
| Rule | `#c9ccd1` | `#30343b` |

| Volume | Field | Text on field | Label on paper (light / dark) |
|---|---|---|---|
| NR-01 Messaging | `#13203b` | white | `#13203b` / `#8aa7e0` |
| NR-02 Purchasing | `#22447a` | white | `#22447a` / `#6b95d8` |
| NR-03 Tax | `#3f6ea8` | white | `#3c689f` / `#6f98cb` |
| NR-04 Training | `#a8c3e2` | ink | `#396daa` / `#a8c3e2` |

One blue scale, darkest to lightest in catalogue order, chosen by Nico. A new volume takes the next step of the scale; check its text contrast in both modes. Covers end on a 4px ink rule.

Colour owns whole regions: spines, covers and one colour field per write-up. Light or dark follows the visitor's system; volume colours stay the same in both. Every text pair is at least 4.5:1.

## Type

Archivo variable (OFL, self-hosted in `assets/fonts/`), using its width axis:

- **Name:** 800, width 112%.
- **Titles and section heads:** 800, width 72%, capped at 6rem.
- **Body:** 400 at 17px, line height 1.6, measure 68ch.
- **Labels:** 650, normal width. No tracked capitals, no monospace.

## Components

- **Spine:** full-width volume band. Thickness on the home page is proportional to the real word count, which is printed on it. Never add a decorative thickness.
- **Plate:** the outlined part number. Never directly above a heading.
- **Cover:** the volume's first screen, with the same colour and result sentence as its spine.
- **Spec table (`At a glance`):** facts taken only from the write-up. No invented figures.
- **Decision rows:** Problem, Options, Chose, Cost. `Chose` sits on a tint because a skimming reader came for it.
- **Colour field (`.band`):** runs from the column to the viewport edge, for the one section nobody should skip. At most one per write-up.

## Motion

One authored moment: a spine opens into its cover through a cross-document view transition, plus the spine sliding out on hover. Nothing else animates. Reduced-motion turns both off.

## Avoid

Cards, kickers, skill bars, gradients, side stripes, hard offset shadows, invented metrics, a job-seeking message.

## Adding a volume

1. Copy a project folder, for example `tax/`, to the new slug and replace its contents.
2. Add its colour to the `[data-book]` list in `assets/site.css`, and its `view-transition-name` line.
3. Add its spine `<li>` to the stack in `index.html`, `404.html` and every project page, with `--words` set to the real count.
4. Add a share image at `assets/og/<slug>.png` (1200x630) and the URL to `sitemap.xml`.
5. Check contrast of the new colour against its text, in both modes.
