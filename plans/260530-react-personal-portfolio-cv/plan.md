---
title: "React Portfolio From PDF CV"
description: "Build a single-page React portfolio/CV site from the user's PDF CV."
status: complete
priority: P2
effort: 8h
branch: no-git-repo
tags: [react, vite, typescript, portfolio, cv]
created: 2026-05-30
---
# Plan
## Context
- Workspace starts empty; no `README.md`, `CLAUDE.md`, or existing app files found.
- Source CV: `C:\Users\ntuan\OneDrive\Workspace\CV_NguyenTuanViet_DataAnalyst.pdf`.
- Target: static React portfolio for sharing personal information, portfolio, and recruitment references.

## Phase 1: Setup
- Scaffold Vite React + TypeScript app.
- Keep single-page, static, and easy to deploy.
- Success: `npm install`, `npm run dev`, and `npm run build` work.

## Phase 2: CV Data Extraction
- Convert PDF content into typed source data in `src/data/cv.ts`.
- Keep dates, links, metrics, labels normalized.
- Success: visible resume copy comes from `cv.ts`, not component hardcoding.

## Phase 3: UI Sections
- Build Hero/About, Experience, Education, Projects, Certificates, Skills, Activities, Contact, and CV download.
- Prioritize quantified achievements and analyst stack.
- Success: hierarchy readable on mobile and desktop with clear contact/download CTA.

## Phase 4: React Implementation
- Use simple reusable components for section shells, timelines, project cards, and skill groups.
- Keep state minimal; use static anchors and responsive layout.
- Success: PDF download link works and page renders from structured data.

## Phase 5: Validation And Docs
- Run build and lint/type checks available in project.
- Update minimal project docs after implementation.
- Success: build passes, links work, layout is responsive, docs impact recorded.

## Completion Notes
- `npm run lint` passed.
- `npm run build` passed.
- `npm audit --audit-level=moderate` found 0 vulnerabilities.
- Browser snapshot confirmed main sections, contact links, and PDF link render.
- Full-page screenshot saved at `portfolio-home.png`.

## Open Questions
- Single-page site assumed for first version; separate `/projects` route can be added later.
