# Ontario Real Estate Compliance Tool

A wizard-based compliance dashboard for Ontario real estate transactions. This tool helps real estate professionals ensure they have all required forms, clauses, and compliance documentation for RECO, FINTRAC, and PIPEDA requirements.

## Features

- **Multi-step Wizard Interface**: Guided 4-step process to configure transaction details
- **Comprehensive Form Coverage**: Universal mandatory forms and property-specific forms
- **Clause Recommendations**: Mandatory, recommended, and conditional clauses based on transaction type
- **Compliance Checklist**: Automated compliance checklist generation
- **Export Functionality**: Copy clauses, generate summaries, and export forms lists
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Local Storage**: Transaction state persistence across sessions

## Project Structure

```
├── index.html              # Application shell and markup
├── style.css               # Core styles and theme system
├── js/
│   ├── app.js              # Main application logic
│   ├── modules/
│   │   ├── ui.js           # UI rendering and wizard logic
│   │   ├── export.js       # Export and clipboard utilities
│   │   └── storage.js      # LocalStorage persistence
│   ├── data/
│   │   ├── forms.js        # Forms database
│   │   ├── clauses.js      # Clauses database
│   │   └── schemas.js      # Data structure documentation
│   └── utils/
│       ├── validation.js   # Input validation utilities
│       └── debounce.js     # Debounce helper
├── src/
│   ├── search/
│   │   └── filter.js       # Search filtering logic
│   └── utils/
│       └── debounce.js     # Debounce utility
├── tests/
│   └── run-tests.js        # Test runner
└── docs/                   # Additional documentation
```

## Development Setup

### Prerequisites

- Node.js (v14 or higher recommended)
- A modern web browser (Chrome, Firefox, Edge, Safari)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install development dependencies:

```bash
npm install
```

### Running Locally

**Option 1: Live Development Server (Recommended)**
```bash
npm run dev
```
This starts a live-reload server at `http://localhost:8080` that automatically refreshes when you make changes.

**Option 2: Python HTTP Server**
```bash
npm run serve
# or directly:
python -m http.server 8080
```
Then visit `http://localhost:8080`

**Option 3: Direct File Opening**
Simply open `index.html` in your browser (some features may be limited due to CORS restrictions).

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run unit tests |
| `npm run dev` | Start live-reload development server |
| `npm run serve` | Start Python HTTP server |
| `npm run lint` | Check code quality with ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## Usage

1. **Start the Wizard**: Fill out the 4-step wizard to configure your transaction:
   - Step 1: Property Type & Client Type
   - Step 2: Representation & Fund Handling
   - Step 3: Additional Transaction Details
   - Step 4: Review & Generate Results

2. **Review Results**: After submission, review:
   - Universal Mandatory Forms
   - Property-Specific Forms
   - Clause Recommendations (Mandatory, Recommended, Conditional)
   - Compliance Checklist

3. **Export**: Use the action buttons to:
   - Copy all clauses to clipboard
   - Generate transaction summary
   - Print checklist
   - Export forms list

## Updating Data

### Forms

Edit `js/data/forms.js` to update form information:
- `universalMandatoryForms`: Forms required for all transactions
- `transactionSpecificForms`: Forms specific to property types

### Clauses

Edit `js/data/clauses.js` to update clause recommendations. Each clause should include:
- `clause_name`: Display name
- `clause_number`: Reference number
- `purpose`: What the clause does
- `when_to_use`: When to include it
- `category`: mandatory/recommended/conditional
- `applicable_to`: Array of property types
- `triggers`: Array of conditions that trigger this clause

## Testing

Run the test suite:
```bash
npm test
```

Tests cover:
- Search and filter functionality
- Data validation
- Core business logic

## Troubleshooting

### Dark Mode Not Working
- Clear browser cache and localStorage
- Check browser console for errors
- Ensure JavaScript is enabled

### Forms Not Loading
- Check that all data files are present in `js/data/`
- Verify no JavaScript errors in browser console
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### LocalStorage Issues
- Check browser privacy settings (some browsers block localStorage in private mode)
- Clear browser data if quota exceeded
- Ensure localStorage is not disabled

### Live Server Not Starting
- Ensure port 8080 is not in use
- Try a different port: `live-server --port=3000`
- Check that npm dependencies are installed

## Browser Compatibility

- Chrome/Edge: ✅ Fully supported
- Firefox: ✅ Fully supported
- Safari: ✅ Fully supported
- IE11: ❌ Not supported

## Deployment

The project is entirely static and can be deployed to:
- **GitHub Pages**: Enable Pages on the `main` branch
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your repository
- **Any static hosting**: Upload all files

No build step is required for deployment.

## Maintenance Notes

- All CSS and JavaScript are externalized for better editor support
- Data catalog for forms and clauses lives in `js/data/`
- Accessibility improvements should be validated with assistive technologies
- Consider adding automated tests for compliance generators

## License

MIT

## Disclaimer

**This tool is for educational and compliance aid purposes only.** Always consult legal counsel and verify current regulatory requirements with RECO, FINTRAC, and other governing bodies. This tool does not constitute legal advice.
