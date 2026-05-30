# Codebase Summary

## Structure

- `src/data/cv.ts`: typed CV/profile content source.
- `src/App.tsx`: page composition and section ordering.
- `src/components/`: reusable section, timeline, project, skill, and data-visual components.
- `src/styles/`: global CSS split by base, hero, content, and responsive concerns.
- `public/CV_NguyenTuanViet_DataAnalyst.pdf`: downloadable source CV.

## Implementation Notes

- Static Vite React app.
- UI copy renders from structured data instead of hardcoded component text where practical.
- Styling uses a restrained analyst portfolio direction: light neutral surface, dark data panel, blue/orange accents.

## Validation

- `npm run lint` passes.
- `npm run build` passes.

## Open Questions

- None.
