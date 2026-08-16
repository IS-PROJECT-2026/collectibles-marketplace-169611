# Written Assessment & Deployment Report

**System Name:** collectibles-marketplace-169611  
**Student ID / Admission Number:** 169611  
**Repository URL:** https://github.com/IS-PROJECT-2026/collectibles-marketplace-169611  
**Live Site URL:** https://IS-PROJECT-2026.github.io/collectibles-marketplace-169611/  

---

## 1. System Overview & Architecture
`collectibles-marketplace-169611` is a digital platform built for historical collectibles and antique trading. 
- **Frontend:** Semantic HTML5, CSS custom variables (Luxury Dark & Gold theme), vanilla JavaScript ES6.
- **Core Features:** Dynamic item rendering, era/category tag filtering, seller consignment submission portal, and an interactive real-time auction bidding simulator.

---

## 2. Git Strategy & Conventional Commit Audit
Development followed strict branch protection rules with direct pushes to `main` disabled. All work was integrated via feature branches and Pull Requests linked to issues #1 through #9.

### Commit Type Usage Breakdown:
- `feat`: Main layout, item catalog grid, consignment portal, and bidding engine (#1, #2, #5, #7).
- `style`: Theme variables, typography, and card design system (#3).
- `fix`: Resolving merge conflict markers and array offset collisions.
- `docs`: README updates, conflict resolution writeup, and submission document (#8).
- `chore`: GitHub Actions Pages workflow configuration (#9).
- `refactor`: Consolidation of CSS structure and function signatures.

---

## 3. Merge Conflict Resolution Records

### Conflict 1: Direct Line Overlap (index.html)
- **Trigger:** Simultaneous modifications to the main hero tagline on line 29 in branches `feat/hero-tagline-v1` and `feat/hero-tagline-v2`.
- **Resolution:** Rebased `feat/hero-tagline-v2` onto updated `main`, manually combined both headings into unified branding in VS Code, staged, and completed rebase.
- **Evidence:** `evidence/conflict_evidence_1.png`

### Conflict 2: File Rename vs. Direct File Modification (css/styles.css)
- **Trigger:** `refactor/rename-styles` renamed `css/styles.css` to `css/main-theme.css`, while `style/add-badge-rules` edited `css/styles.css`.
- **Resolution:** Manually ported the new CSS class definitions into `css/main-theme.css`, deleted the obsolete `css/styles.css` path, and updated HTML link references.
- **Evidence:** `evidence/conflict_evidence_2.png`

### Conflict 3: Index Offset Collision (js/catalog.js)
- **Trigger:** Concurrent insertion of different objects at index 0 of `catalogData` in branches `feat/add-pocket-watch` and `feat/add-baseball-card`.
- **Resolution:** Retained both item objects sequentially in the array with unique IDs.
- **Evidence:** `evidence/conflict_evidence_3.png`