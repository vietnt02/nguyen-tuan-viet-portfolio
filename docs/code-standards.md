# Code Standards

## Principles

- Keep components small and focused.
- Keep visible CV content in `src/data/cv.ts`.
- Prefer list rendering from typed arrays over repeated markup.
- Keep code and CSS files under 200 lines where practical.
- Use accessible links, readable contrast, and touch-friendly targets.

## Styling

- Global CSS is split into `src/styles/`.
- Use semantic class names tied to layout purpose.
- Avoid decorative-only motion; respect `prefers-reduced-motion`.

## Validation

- Run `npm run lint` before delivery.
- Run `npm run build` before delivery.

## Open Questions

- None.
