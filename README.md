# Content templates

Quick-reference for adding posts and projects to the site.

---

## Folder layout

```
bernini.github.io/
├── index.html
├── posts.html
├── projects.html
├── assets/
│   ├── style.css
│   └── app.js
├── content/
│   ├── posts/          ← put new post .html files here
│   └── projects/       ← put new project .html files here
└── TEMPLATES.md
```

---

## Adding a POST

### 1. Create the post file

Save as: `content/posts/<slug>.html`

Copy `content/posts/pid-explained.html`, rename it, then edit only these parts:

- `<title>` — the tab title
- `<h1>` — the visible post title
- `<div class="meta">` — topic tag + date (`YYYY-MM-DD`)
- Everything inside `<article class="reading">` **after** the `<header>` block

Keep the header, gutters, nav, and footer as-is. Replace only the content between `<header>…</header>` and the closing `</article>`.

**Valid topics:** `security`, `networking`, `robotics`, `tools`

### 2. Register it on `posts.html`

Open `posts.html`. Find the section for the post's topic (e.g. `<div class="topic-divider">robotics</div>`). Under that topic's `<ul class="post-list">`, add:

```html
<li>
  <a href="/content/posts/<slug>.html">
    <span class="tag">robotics</span>
    <span>
      <span class="title">YOUR TITLE HERE</span>
      <span class="summary">One-line summary here.</span>
    </span>
    <span class="date">2026-05-07</span>
  </a>
</li>
```

Change: `slug`, `robotics` (topic), `YOUR TITLE HERE`, `One-line summary here.`, `2026-05-07`.

If the topic doesn't exist yet, create a new divider above the list:

```html
<div class="topic-divider">tools</div>
<ul class="post-list">
  <!-- list items go here -->
</ul>
```

### 3. (Optional) Add it to homepage "recent posts"

In `index.html`, find `<ul class="post-list">` under `▚▚ recent posts`. Add the same `<li>` block. Keep the list to 3 items max — remove the oldest one.

---

## Adding a PROJECT

### 1. Create the project page

Save as: `content/projects/<slug>.html`

Copy `content/projects/maze-solving-robot.html` as the base. Edit:

- `<title>`
- `<h1>`
- `<div class="meta">` — topic + short descriptor(s)
- Everything inside `<article class="reading">` after the `<header>`

### 2. Add the card to `projects.html`

Open `projects.html`. Inside `<div class="project-grid">`, add:

```html
<div class="project-card">
  <span class="pc-tag">robotics</span>
  <h3>your project name</h3>
  <p>One-line description of the project.</p>
  <div class="links">
    <a href="https://github.com/bernini">[repo]</a>
    <a href="/content/projects/<slug>.html">[read →]</a>
  </div>
</div>
```

### 3. (Optional) Add it to homepage "featured projects"

Same block, into `index.html` under `▚▚ featured projects`. Keep to 3.

---

## Available classes inside an article

Use these so everything stays on-theme:

| Element | What to write |
|---|---|
| Section heading | `<h2>Section name</h2>` |
| Sub-heading | `<h3>Sub section</h3>` |
| Paragraph | `<p>Text here.</p>` |
| Bold/emphasis on amber | `<strong>important</strong>` |
| Inline code | `<code>Kp = 15</code>` |
| Code block | `<pre><code>…full snippet…</code></pre>` |
| Unordered list | `<ul><li>item</li></ul>` |
| Ordered list | `<ol><li>item</li></ol>` |
| Quote | `<blockquote>text</blockquote>` |
| Link | `<a href="https://…">label</a>` |
| Table | see below |
| Short note row | `<p><strong>Label</strong> — description</p>` |

### Table template

```html
<table>
  <thead>
    <tr><th>Column A</th><th>Column B</th></tr>
  </thead>
  <tbody>
    <tr><td>row value</td><td class="mono">code value</td></tr>
    <tr><td>row value</td><td class="mono">code value</td></tr>
  </tbody>
</table>
```

Add `class="mono"` to `<td>` when the value is code/pin/path.

---

## Escaping inside `<code>` blocks

Because these are HTML files, escape **only** these characters inside `<code>` and `<pre>` blocks:

| Character | Write |
|---|---|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |

Everything else (`#`, `{`, `}`, `;`, `"`, `'`) is fine as-is.

---

## Quick checklist when adding content

- [ ] New file saved in `content/posts/` or `content/projects/`
- [ ] Title, h1, meta updated
- [ ] Content pasted inside `<article class="reading">`
- [ ] `<`, `>`, `&` escaped inside code blocks
- [ ] Entry added to `posts.html` or `projects.html`
- [ ] (Optional) Homepage updated
- [ ] `git add . && git commit -m "content: <name>" && git push`

That's it. Same header/gutters/matrix rain everywhere, nothing to rebuild.
