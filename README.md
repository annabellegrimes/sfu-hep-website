# sfu-hep-website

Website for the SFU High Energy Physics group (ATLAS, P-ONE, and computing). Plain HTML and CSS, published with GitHub Pages, and written so future group members can take it over.

It replaces the old site at http://sfu-hep.sfu.computecanada.ca/.

## What's here

| File | Page |
| --- | --- |
| `index.html` | Home: intro, four feature cards, latest news |
| `research.html` | ATLAS (including the ITk upgrade) and P-ONE |
| `computing.html` | High performance computing and the Tier-1 data centre |
| `people.html` | Faculty, postdocs, students, former members |
| `publications.html` | Theses (links to SFU Summit) |
| `join.html` | How students can join the group |
| `news.html` | News, newest first |
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

**Add a thesis.** In `publications.html`, copy one `<li>` block to the top of the list and change the link, title, author and year.

**Post news.** In `news.html`, copy one `<li>` block to the top. Also update the "Latest news" list on `index.html` (keep the two newest).

**Add a photo.** Put it in `images/` (resize to about 1600 px wide first) and add `<img src="images/name.jpg" alt="what it shows">` where you want it. For a photo with a caption, copy a `<figure>` block from `research.html`. Only use photos we are allowed to use (our own, SFU's, or openly licensed ones such as CERN's on Wikimedia Commons), and always keep the credit line: most licences require it. People photos go in `images/people/`.

**Change the menu or footer.** The header and footer are copied into every page between the `HEADER` and `FOOTER` comments. Change all seven pages the same way.

**Add a page.** Copy an existing page, change its `<title>`, `<h1>` and content, then add it to the menu on every page.

## Handing over

Before you leave the group:

- [ ] Add your successor as a collaborator (Settings → Collaborators), or move the repo to a group GitHub organization (Settings → Transfer ownership).
- [ ] Walk them through one change, from edit to live.
- [ ] Update the maintainer line below.

**Current maintainer:** Annabelle (GitHub: @annabellegrimes). Faculty contact: to be confirmed.
