# Project Submission Report

## 1. Student Details

- **Full Name:** Samuel Kahiga
- **GitHub Username:** skthagrt
- **Email:** samuel.kahiga@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://IS-PROJECT-2026.github.io/collectibles-marketplace-169611/

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/collectibles-marketplace-169611/commit/e3f198a2b5d4001c182a52479e0012f12918a2bc
- **Why this one?** This commit adheres strictly to the Conventional Commits specification by declaring a clear type (`feat`), scope (`catalog`), and an imperative header summary. It also includes a structured body detailing the technical additions and a footer referencing the closed issue (`Closes #2`).

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/collectibles-marketplace-169611/pull/8#issuecomment-protected-branch-error
- **What happened and how did you recover?** I attempted to push commits directly to `main` without using a Pull Request, which failed due to the repository's protected branch rule (`GH006`). To recover, I created a dedicated feature branch (`docs/8-submission-writeup`) from my unpushed HEAD, pushed the branch to remote, reset local `main` to `origin/main`, and merged the changes via an authenticated Pull Request.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** https://github.com/IS-PROJECT-2026/collectibles-marketplace-169611/pull/5
- **What did you check before merging?** I verified that the consignment form inputs correctly validated user data, checked that all CSS variable references aligned with `main-theme.css`, and confirmed that the PR description explicitly included `Closes #5` for automated issue tracking.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would configure GitHub Actions CI validation on Pull Requests before merging rather than relying solely on local testing, ensuring broken asset paths or syntax errors are caught in automated checks prior to hitting `main`.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/collectibles-marketplace-169611/commit/c01e2cc2839d09a249c118e9a2283991208a1122

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues

* **Caption:** Active project milestone tracking granular issues assigned across setup, frontend design, bidding engine implementation, and deployment phases.

### B. Project Board

* **Caption:** Kanban Project Board organizing issues dynamically across `To Do`, `In Progress`, and `Done` status columns.

### C. Branching Architecture

* **Caption:** Local and remote branch list showing conventional prefix isolation (`feat/`, `fix/`, `style/`, `docs/`, `chore/`).

### D. Pull Requests & Traceability


* **Caption:** Completed Pull Request #5 displaying automated issue linkage (`Closes #5`) and clear conventional scope descriptions.

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Concurrent Direct Line Modification (Same Line Edit Collision)

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

![Attempted Merge Warning](evidence_conflict_evidence_1.png)

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

![Raw Conflict Markers](evidence_conflict_evidence_1.png)

* **Caption:** VS Code displaying raw conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) where two branches provided conflicting `<h1>` hero header strings.

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

![Clean Resolution Commit](evidence/conflict_1_step3.png)

* **Caption:** Git graph showing the resolved and unified hero header string merged cleanly into `main` after finishing the rebase sequence.

---


### Conflict 2

**What cause did you use?** File Deletion vs. Concurrent File Modification (`CONFLICT (modify/delete)`)

**Why does this cause trigger a conflict?** Branch A (`origin/main`) completely removed `js/catalog-data.js` as part of script consolidation, while Branch B (`fix/update-item-schema`) edited code lines inside `js/catalog-data.js`. Git halts the rebase because it cannot apply code modifications to a deleted file.

![Conflict 2 Markers](evidence/conflict_evidence_2.png)

* **Caption:** Terminal displaying `CONFLICT (modify/delete)` where `js/catalog-data.js` was deleted in `origin/main` but modified in commit `07f96a6`, leaving the file in the workspace for manual `git rm` or `git add` resolution.


### Conflict 3 — Different Cause

**What cause did you use?** Array Index Offset Collision (Divergent Array Prepending)

**Why does this cause trigger a conflict?** Both branches attempted to modify the `catalogData` array in `js/catalog.js` by inserting new item objects at index 0. Because both commits added content at the exact same line offset at the start of the array, Git cannot automatically determine the sequence order of the elements.

![Conflict 3 Markers](evidence/conflict_evidence_3.png)

* **Caption:** VS Code editor view displaying raw conflict markers in `js/catalog.js` where `id: 100` (`1910 Antique Brass Compass`) in `HEAD` collided with `id: 99` (`1952 Topps Mickey Mantle Card`) from commit `df6d108`.

---

