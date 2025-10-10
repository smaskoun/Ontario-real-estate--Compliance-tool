# Ontario Real Estate Compliance Tool

This project provides a single-page compliance dashboard for Ontario real estate transactions. It highlights required forms, clauses, and workflows for purchase, sale, and rental scenarios while offering a unified search experience and downloadable checklists.

## Project structure

```
index.html        # Application shell (layout + semantic markup)
style.css         # Core styles extracted from the legacy inline stylesheet
app.js            # Complete platform logic, including search and data sets
analysis.md       # Architectural review and improvement backlog
```

## Local development

The site is entirely static and can be opened directly in a browser:

```bash
# Launch with any static server
python -m http.server 8080
# Then visit http://localhost:8080
```

For iterative development we recommend using a live-reload server such as [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) or [serve](https://www.npmjs.com/package/serve).

### Tests

Lightweight unit tests cover the search relevance helpers that power the dashboard. Run them with Node.js:

```bash
npm test
```

## Maintenance notes

- All CSS and JavaScript are now externalized (`style.css`, `app.js`) so editors and linters can work with the full source.
- The data catalog for forms and clauses lives in `app.js`. When updating compliance requirements, modify the respective data objects in that file.
- Accessibility improvements (ARIA labelling, focus management) should be validated manually with assistive technologies before deployment.
- Consider introducing automated tests (e.g., Jest or Vitest) around the search helpers and compliance generators, and wiring them into GitHub Actions for pull requests.

## Deployment

The project is suitable for GitHub Pages. Publish the repository and enable Pages on the `main` branch or a `docs/` folder. No build step is required at this time.
