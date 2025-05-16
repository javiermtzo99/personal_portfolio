---
title: "Datastructpy"
date: "February, 2025"
description: "Datastructpy is a Python package with clean data structures, built in under four weeks with best practices"
image: "/datastructpy.jpg"
githubUrl: "https://github.com/UBC-MDS/datastructpy"
order: 2
categories:
  - name: "Software Engineering"
    class: "category-web"
---

**Practical Data‑Structure Implementations in Pure Python**

I co‑authored datastructpy as part of UBC MDS’s DSCI 524: Reproducible Software course. The goal: ship a Python package that offers clean, interview‑ready implementations of classic data structures while demonstrating software‑engineering best practices—versioning, automated tests, CI/CD, and comprehensive docs—all in under four weeks. ￼

**Highlights**

What we built	Why it matters
Binary Search Tree (BST) with full CRUD (insert, search, delete) plus DFS/BFS traversals. Gives learners a hands-on, dependency-light way to explore tree operations and complexity analysis.
Modular, poetry‑managed codebase (src/datastructpy/…). Clear separation of concerns and packaging hygiene mirror production Python projects.
Pytest suite + Codecov badge. > 95% statement coverage ensures every method behaves as advertised and prevents regressions on PRs.
GitHub Actions workflow (lint ⟶ test ⟶ build ⟶ publish). Every push runs linting, unit tests, and publishes the wheel to TestPyPI for repeatable releases.
Sphinx docs on Read‑the‑Docs. Auto‑generated API reference, tutorials, and example notebooks keep the learning curve shallow.

**Package Architecture**

```
datastructpy/
├─ src/datastructpy/
│  └─ non_linear/trees/
│     └─ binary_search_tree.py
├─ tests/
│  └─ non-linear/trees/binary_search_tree/
│     ├─ test_insert.py
│     ├─ test_search.py
│     └─ …
├─ docs/               ← Sphinx source
├─ pyproject.toml      ← poetry config + semver
└─ .github/workflows/  ← CI pipeline
```

**Tech Stack**

Python, Poetry, Pytest, PyPI, Tox, GitHub Actions, Codecov, Sphinx/Read‑the‑Docs
