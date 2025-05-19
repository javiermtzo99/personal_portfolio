---
title: "Diabetes Predictor"
date: "November, 2024"
description: "A reproducible report from a classification model using the Pima Indians Diabetes dataset from Kaggle"
image: "/diabetes_predictor.jpg"
githubUrl: "https://github.com/UBC-MDS/diabetes_predictor_py"
order: 3
categories:
  - name: "Machine Learning"
    class: "category-ml"
---

UBC MDS Diabetes Predictor (DSCI 522)
Built in a four-person sprint for the program’s Workflow and Reproducibility course, this project delivers a fully reproducible Quarto report that classifies diabetes risk in Pima Indian women. We wrapped the entire analysis—data download, cleaning, EDA, model training, and report generation—in an opinionated, best-practices architecture so any teammate (or grader) can regenerate results with a single command.

**End‑to‑end, reproducible workflow:**
- Layered Makefile pipeline – make all chains every step:
	1.	data/: pulls the Pima Indians Diabetes dataset from Kaggle.
	2.	src/: cleans & splits data, then trains a logistic‑regression model with a C‑grid search.
	3.	reports/: renders a Quarto HTML/PDF report that embeds figures, tables, and model metrics.
- Containerised execution – A Dockerfile + conda-lock pin exact package versions; GitHub Actions builds and pushes the image on every commit.
- Testing & CI – Pytest suites guard data‑processing functions, and the workflow fails fast if tests or make lint do not pass.
- One‑click hygiene – make clean purges intermediates, guaranteeing the repo stays lightweight and deterministic.

⸻

Model highlights
- Logistic‑regression classifier (after hyper‑parameter tuning) achieved 75% accuracy on the held‑out test set—beating the dummy baseline of 67%.*
- Feature importance ranks Glucose, BMI, and Pregnancies as the strongest predictors, while Blood Pressure and Insulin contributed less.*
- The Quarto report discusses false‑positive/false‑negative trade‑offs and ethical considerations around clinical deployment.  ￼

⸻

**Tech stack:**
Python, Pandas, Scikit‑learn, Quarto, Make, Conda + Mamba, Docker, GitHub Actions, Pytest, Matplotlib/Seaborn.

