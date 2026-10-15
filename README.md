# sfu-hep-website

Website for the SFU High Energy Physics group (ATLAS, P-ONE, and computing). Plain HTML and CSS, published with GitHub Pages, and written so future group members can take it over.

It replaces the old site at http://sfu-hep.sfu.computecanada.ca/.

## What's here

| File | Page |
| --- | --- |
| `index.html` | Home: intro, three experiment cards and two other cards, latest news |
| `research.html` | ATLAS (including the ITk upgrade), P-ONE and IceCube |
| `computing.html` | The ATLAS Tier-1 data centre, the LHC Computing Grid and the Fir supercomputer |
| `people.html` | Faculty, postdocs, students, former members |
| `publications.html` | Theses by year (links to SFU Summit), plus links to ATLAS and P-ONE papers |
| `join.html` | How students can join the group |
| `news.html` | Group news, plus ATLAS, P-ONE and IceCube collaboration news |
| `css/style.css` | The one stylesheet every page uses |
| `images/` | Photos and figures |

There is no build step. What is in this repository is exactly what the website serves.

## See your changes

1. Clone the repo and open the folder in VS Code.
2. Install the **Live Server** extension, right-click `index.html`, and choose "Open with Live Server".
   Without VS Code: run `python3 -m http.server` in this folder and open http://localhost:8000.
3. Edit a file and save. The browser reloads on its own.

## Publish

Every push to `main` goes live through GitHub Pages within a minute or two.
To set it up the first time: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / root**.

For anything bigger than a typo, work on a branch and open a pull request so someone can look it over first.

## Common jobs

**Add a person.** In `people.html`, copy one `<li>` line in the right list (Faculty, Postdocs, Students) and change the name and role. Keep lists sorted by last name. When someone leaves, move them to Former members.

**Add a thesis.** In `publications.html`, copy one `<li class="thesis ...">` block into the right year and change the link, title, author, degree and project. Check the degree (PhD or MSc) on Summit; INSPIRE often gets it wrong.

**Post news.** In `news.html`, copy one `<article class="news-item">` block to the top of "Group news". Also update the "Latest news" cards on `index.html` (keep the two newest). Every few months, check the ATLAS, P-ONE and IceCube news sites and copy new items into their sections; the comments in `news.html` explain how.

**Add a photo.** Put it in `images/` (resize to about 1600 px wide first) and add `<img src="images/name.jpg" alt="what it shows">` where you want it. For a photo with a caption, copy a `<figure>` block from `research.html`. Only use photos we are allowed to use (our own, SFU's, or openly licensed ones such as CERN's on Wikimedia Commons), and always keep the credit line: most licences require it. People photos go in `images/people/`.

**Change the menu or footer.** The header and footer are copied into every page between the `HEADER` and `FOOTER` comments. Change all seven pages the same way.

**Add a page.** Copy an existing page, change its `<title>`, `<h1>` and content, then add it to the menu on every page.

## Design language

Every page is built from the same few pieces, all styled in `css/style.css`. When you add something new, copy an existing block from another page rather than inventing a new style.

**Colours mean something.** Keep them consistent:

| Colour | Means | Used for |
| --- | --- | --- |
| Red (`--red`) | SFU, and ATLAS | Buttons, links, the "join" band, ATLAS tags and sections |
| Purple (`--ice`) | IceCube | IceCube tags, and the IceCube section on the Research page |
| Blue (`--ocean`) | P-ONE, and nothing else | P-ONE tags, sections, timelines |
| Dark (`.tag-neutral`) | Not about one experiment | Labels like "MSc and PhD" or "Cedar Supercomputing Centre" |
| Grey (`--grey`) | Another experiment | e.g. the DØ thesis |

All colours are defined once at the top of `css/style.css`. Use the variables, not hex codes.

**Page structure.** Every page has, in order:

1. The header (same on every page).
2. A dark banner: `.home-hero` on the home page, `.page-hero` everywhere else (add `page-hero-grid` for the grid pattern, or an `<img class="page-hero-bg">` for a photo).
3. Content sections: `<section class="research-section">`, alternating with `section-alt` (grey). Each starts with `<h2 class="section-title">`.
4. The red "join" band: `<section class="cta">`.
5. The footer (same on every page).

**One link per destination.** Apart from the menu, link to each page at most once per page. The red "join" band is the page's link to Join us, so don't add other "Join" buttons.

**Experiment order.** Wherever the experiments are listed together (cards, sections, tags, links), use the order ATLAS, IceCube, P-ONE.

**Project tags.** `<span class="tag">ATLAS</span>`, `<span class="tag tag-ice">IceCube</span>`, `<span class="tag tag-ocean">P‑ONE</span>`, `<span class="tag tag-neutral">Anything else</span>`. Theses use the same colours as dots (`thesis-atlas`, `thesis-pone`, `thesis-other`).

**Reusable pieces**, with a page to copy from:

- Photo with caption and credit: `<figure class="photo-figure">` (research.html)
- Text beside a photo: `<div class="split">` (research.html)
- Icon tiles: `<div class="topic-grid">` (research.html, join.html). Tiles that start with an icon are centred automatically.
- Numbered steps: `<ol class="steps">` (research.html, join.html)
- Timeline: `<ol class="timeline">` (research.html, computing.html)
- Big-number panel: `<div class="callout">` (research.html, publications.html)
- Row of figures: `<section class="facts">` (computing.html). Use it only where the numbers belong together.
- External news list: `<ol class="feed">` (news.html)

## Handing over

Before you leave the group:

- [ ] Add your successor as a collaborator (Settings → Collaborators), or move the repo to a group GitHub organization (Settings → Transfer ownership).
- [ ] Walk them through one change, from edit to live.
- [ ] Update the maintainer line below.

**Current maintainer:** Annabelle (GitHub: @annabellegrimes). Faculty contact: to be confirmed.
