# The Bees Knees: FTC Team #13645 Website

The website for **The Bees Knees**, a *FIRST* Tech Challenge team at the Baccalaureate School for Global Education (BSGE) in Astoria, Queens, New York.

It is built with plain **HTML** (the content), **CSS** (the look), and a tiny bit of **JavaScript** (the phone menu). It has no frameworks, no installs, and no build step. You edit a file, save it, and refresh your browser.

---

## Contents

1. [What each file does](#1-what-each-file-does)
2. [Previewing the site on your computer](#2-previewing-the-site-on-your-computer)
3. [Finding unfinished parts (TODOs)](#3-finding-unfinished-parts-todos)
4. [How to edit text](#4-how-to-edit-text)
5. [How to add a build log entry](#5-how-to-add-a-build-log-entry)
6. [How to add a team member](#6-how-to-add-a-team-member)
7. [How to add photos](#7-how-to-add-photos)
8. [Changing the menu, header, or footer](#8-changing-the-menu-header-or-footer)
9. [Changing colors and fonts](#9-changing-colors-and-fonts)
10. [Publishing changes (GitHub Pages)](#10-publishing-changes-github-pages)
11. [Rules of thumb](#11-rules-of-thumb)

---

## 1. What each file does

```
bees-knees-website/
├── index.html      Home page (the first page people see)
├── about.html      "Who We Are": team story, mission, values
├── team.html       Captains, members, coaches/mentors
├── robot.html      Season strategy, tools, robot subsystems
├── buildlog.html   Engineering journal (newest entry first)
├── contact.html    Email, Instagram, school
├── css/
│   └── style.css   ALL styling for ALL pages (colors, fonts, layout)
├── js/
│   └── main.js     Opens/closes the "Menu" button on phones
├── images/         Photos go here (see images/README.txt)
│   └── decor/      Design graphics: honeycomb.svg (background texture), gear.svg (divider)
├── .nojekyll       Empty file that tells GitHub Pages "plain HTML, no conversion needed". Don't delete it.
└── README.md       This guide
```

- **`.html` files** hold the *words and structure* of each page.
- **`style.css`** controls how *everything looks*. Every page shares it, so a change there affects the whole site.
- **`main.js`** only handles the phone menu. You should rarely need to touch it.
- **`index.html` must stay at the top level** of the folder. GitHub Pages looks for it there.

## 2. Previewing the site on your computer

**Easiest:** double-click `index.html`. It opens in your browser. After you edit and save a file, refresh the browser to see the change.

**Closer to the real thing (optional):** if you have Python installed, open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then go to <http://localhost:8000> in your browser. Press `Ctrl+C` in the terminal to stop it.

> **Tip:** Use a free code editor like [VS Code](https://code.visualstudio.com/). It colors the code so mistakes are easier to spot, and it can search across all files at once.

## 3. Finding unfinished parts (TODOs)

Everything that still needs real information is marked two ways:

1. **An HTML comment starting with `TODO:`.** It's invisible on the website but easy to search for. Comments look like this:
   ```html
   <!-- TODO: Add Gabriel's role or subteam. -->
   ```
2. **Visible placeholder text** in grey italics and square brackets on the page, like `[Member name]`.

To find them all in VS Code, press `Ctrl+Shift+F` (Mac: `Cmd+Shift+F`) and search for `TODO`.

When you fill one in, **delete the TODO comment** so the list keeps shrinking. Also remove `placeholder` from the element's `class="..."` so the text shows in the normal style instead of grey italics.

## 4. How to edit text

Open the page's `.html` file, find the text, and change it. HTML text lives *between* tags:

```html
<p>This is a paragraph. Change these words freely.</p>
<h2>This is a heading</h2>
```

**Change the words between the tags, not the tags themselves.** Things like `<p>`, `</p>`, `class="card"` are instructions to the browser. Every opening tag such as `<p>` needs its matching closing tag `</p>`.

A few special characters need to be written differently in HTML:

| You want | Write |
|---|---|
| `&` | `&amp;` |
| `<` | `&lt;` |
| `>` | `&gt;` |

## 5. How to add a build log entry

1. Open `buildlog.html`.
2. Find the comment block titled **BUILD LOG ENTRY TEMPLATE**.
3. Copy the example `<article class="log-entry"> ... </article>` from inside it.
4. Scroll down to the line **`NEW ENTRIES GO HERE`** and paste directly under it. Newest entries go at the **top**.
5. Edit it:
   ```html
   <article class="log-entry">
     <p class="log-date"><time datetime="2026-11-06">November 6, 2026</time></p>
     <h2>Testing intake prototype #2</h2>
     <p>What we worked on, what we tested, what we learned, and what's next.</p>
   </article>
   ```
   - Change the date in **both** places: `datetime="YYYY-MM-DD"` and the visible date.
   - **No photo?** Delete everything from `<figure>` to `</figure>`.
   - **Photo?** See [section 7](#7-how-to-add-photos).
6. When you have real entries, delete the **[Example entry]**.

**Good engineering log habit:** each entry should answer *what was the problem → what did we try → what happened (with numbers if you measured something) → what did we decide next*. This is the same structure judges look for in an engineering portfolio.

## 6. How to add a team member

1. Open `team.html` and find the comment **HOW TO ADD A TEAM MEMBER** (it contains a complete example).
2. Copy one whole member card, from `<article class="card person-card">` to its `</article>`.
3. Paste it after the last card, still inside the `<div class="card-grid">`.
4. Change the initials, name, and role:
   ```html
   <article class="card person-card">
     <div class="avatar" aria-hidden="true">JD</div>
     <div>
       <h3 class="person-name">Jordan Doe</h3>
       <p class="person-role">Build Team</p>
     </div>
   </article>
   ```
   Make sure `avatar-placeholder` and `placeholder` are **removed** from the class names. Those are only for unfinished cards.
5. Delete placeholder cards (and their TODO comments) as you replace them.

The coaches/mentors section works the same way.

## 7. How to add photos

1. **Resize first.** Phone photos are often 3–5 MB, which makes the site slow. Aim for about 1600 px wide (400×400 for team photos) and under 500 KB. [Squoosh](https://squoosh.app) is a free browser tool for this.
2. **Name it simply:** lowercase, hyphens, no spaces (`intake-prototype-v2.jpg`). GitHub Pages is case-sensitive, so `Photo.JPG` ≠ `photo.jpg`.
3. **Put it in `images/`**, ideally in a subfolder (`images/buildlog/`, `images/team/`, `images/robot/`).
4. **Add it to the page with alt text** describing what the photo shows (screen readers read this aloud):
   ```html
   <img src="images/robot/intake-v2.jpg" alt="Second intake prototype with compliant wheels mounted on the test chassis">
   ```
   Paths are **relative**: write `images/...`, never `/images/...` or `C:\Users\...`.

**Where photos go:**
- **Robot page:** replace a whole `<div class="photo-placeholder">...</div>` with your `<img>`.
- **Home and About pages:** there are commented-out spots marked `TODO: Optional ... photo`.
- **Team page:** replace the `<div class="avatar" ...>XX</div>` line with `<img class="avatar" src="images/team/name.jpg" alt="Full Name">`. Square photos work best, and the CSS crops them into a hexagon.

## 8. Changing the menu, header, or footer

Plain HTML can't share one header file across pages, so **the header and footer are copied into all 6 pages**. If you change one (for example, adding the Instagram link to the footer), you must make the same change on every page.

The safe way in VS Code: `Ctrl+Shift+H` (Mac: `Cmd+Shift+H`) opens **Replace in Files**. Paste the old text, type the new text, check the list of matches, then replace all.

**Adding a new page:** copy an existing page (e.g., `contact.html`), rename it, change its `<title>`, description, and content, then add a link to it in the nav of **all** pages. Move `aria-current="page"` to the new link on the new page only. That attribute marks which page you are on.

## 9. Changing colors and fonts

The design concept is **"Engineered Hive"**: honeycomb (bee theme + a classic strong engineering structure) with a few technical-drawing details.

### Colors
All colors are at the top of `css/style.css` under **1. COLORS, FONTS & SETTINGS**:

| Name | Hex | Used for |
|---|---|---|
| Hive black | `#14110F` | Header, footer, hero |
| Espresso | `#3B2A1E` | Dark sections, card backgrounds on dark |
| Walnut | `#7A5534` | Borders, dividers, secondary text on light |
| Honey yellow | `#F2B705` | Buttons, highlights, team number |
| Parchment | `#F4ECDC` | Main reading background |

⚠️ **Contrast rule:** honey yellow is readable on black and espresso, but **never use yellow text on parchment** (ratio 1.55:1; the minimum for readable text is 4.5:1). On light backgrounds, yellow is only for shapes like borders, underlines, and hexagons. Check any new color pair with [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).

**Light vs. dark sections:** sections alternate between parchment and espresso. To make a section dark, give it `class="section section-dark"`. The CSS automatically swaps text, link, and card colors inside it (section **2. DARK AREAS** in `style.css`), so you don't need to restyle anything.

### Fonts
- **Times New Roman** for all headings and reading text. (Android phones don't include Times New Roman, so they show their own built-in serif font instead. That's expected.)
- **Monospace** only for tiny technical labels: the team number, dates, `01 /` section numbers, `SPEC 01`. Keep it that way, because the contrast between the two fonts is what makes the technical details look deliberate.

### Design details (and how to use them)
- **Numbered section headings** with a CAD-style dimension line underneath:
  ```html
  <h2 id="my-title" class="spec-title"><span class="spec-num" aria-hidden="true">03 /</span> My heading</h2>
  ```
  Numbers count up within each page (01, 02, 03…). If you add or remove a section, renumber the ones after it.
- **Sheet labels** at the top of each page (`Sheet 02 · About`) are like page numbers on an engineering drawing. Give a new page the next number.
- **Gear divider:** `<hr class="gear-divider">` draws a line with a small gear in the middle. Use it sparingly.
- **Honeycomb texture:** `images/decor/honeycomb.svg`. To make it fainter or stronger, edit the `opacity` numbers inside that file.

## 10. Publishing changes (GitHub Pages)

The site is a **git repository**. Git keeps a history of every saved version (called a *commit*). GitHub stores the project online, and **GitHub Pages** turns it into a public website.

### First-time setup (once)

1. On [github.com](https://github.com), click **New repository**. Name it (e.g., `bees-knees-website`). Do **not** add a README, .gitignore, or license, because this folder already has what it needs.
2. In a terminal inside this folder, connect it and upload (replace `YOUR-USERNAME`):
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/bees-knees-website.git
   git push -u origin main
   ```
3. On GitHub, open the repo → **Settings** → **Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**, and click **Save**.
4. After a minute or two, your site will be live at `https://YOUR-USERNAME.github.io/bees-knees-website/`.

> **Repo name note:** a repo named exactly `YOUR-USERNAME.github.io` is served at `https://YOUR-USERNAME.github.io/` (no folder name). Any other repo name gets `/repo-name/` on the end. Because the site uses only relative paths, it works either way. Consider creating a GitHub *organization* for the team so the site doesn't depend on one person's account after they graduate.

### Every time you make changes

**Edit → Commit → Push**, and GitHub Pages updates automatically.

```bash
git add .
git commit -m "Add build log entry for intake testing"
git push
```

- `git add .` stages all changed files.
- `git commit -m "..."` saves a snapshot with a short message describing what changed.
- `git push` uploads it to GitHub. Pages rebuilds the site in about 1 minute.

If the live site doesn't change, wait a minute and do a hard refresh (`Ctrl+Shift+R`, Mac: `Cmd+Shift+R`). You can watch progress under the repo's **Actions** tab.

You can also edit files directly on github.com (click a file → pencil icon → **Commit changes**). That is fine for small text fixes.

## 11. Rules of thumb

- **Preview before you push.** Check the page on a desktop browser *and* a narrow window or phone.
- **Don't invent facts.** Only post awards, results, sponsors, or stats that are real and verified.
- **Brand guidelines:** don't add *FIRST* or FTC logos until the team has reviewed FIRST's brand guidelines. In text, "*FIRST*" is styled in italics; this site does that with `<em>FIRST</em>`.
- **Refer to Stingbotics as "our fellow BSGE FTC team."**
- **Always write alt text** for photos.
- **Commit small and often** with clear messages, so it's easy to undo a mistake.
