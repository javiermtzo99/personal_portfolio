---
title: "Smart Search"
date: "October, 2024"
description: "Smart Search is a semantic search bar integrated into the Canvas Discussion panel."
image: "/smart_search.png"
githubUrl: "https://github.com/javiermtzo99/SmartSearch"
order: 1
categories:
  - name: "Machine Learning"
    class: "category-ml"
  - name: "Software Engineering"
    class: "category-web"
---
I built this semantic‑search platform during a **8‑hour UBC hackathon**, where our team set out to make the flood of Canvas course discussions easier to navigate in a single day.

End‑to‑end architecture: Designed a three‑tier stack—Jupyter notebooks for rapid NLP experimentation, a Flask API for vector indexing/querying, and a Next.js front‑end that mirrors the Canvas UI.

Semantic search engine:
- Extracted discussion posts via the Canvas REST API.
- Generated sentence embeddings with sentence‑transformers and stored them in a FAISS vector index.
- Exposed REST endpoints (/search, /discussions) that return ranked results in <150 ms for a 10 k‑post corpus.

Interactive UI: Built a React/Next.js search bar that displays contextual snippets and deep‑links back to the original Canvas thread, improving discoverability during large‑class discussions.

Tech stack:
Python, Flask, FAISS, sentence‑transformers, Canvas API, Next.js (TypeScript), React, Tailwind CSS