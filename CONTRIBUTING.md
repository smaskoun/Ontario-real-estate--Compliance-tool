# Contributing to Ontario Real Estate Compliance Tool

Thank you for your interest in maintaining and improving this tool! This guide will help you make updates and enhancements.

## Getting Started

1. **Set up your development environment**:
   ```bash
   npm install
   npm run dev
   ```

2. **Familiarize yourself with the codebase**:
   - Review `README.md` for project overview
   - Check `docs/DATA_STRUCTURE.md` for data schemas
   - Run `npm test` to ensure tests pass

## Making Changes

### Updating Forms

Forms are defined in `js/data/forms.js`:

1. **Universal Mandatory Forms** (`universalMandatoryForms`):
   - These are required for ALL transactions
   - Add new forms with all required fields:
     ```javascript
     "form_key": {
       "form_name": "Full Form Name",
       "form_number": "OREA Form XXX",
       "purpose": "What this form does",
       "when_required": "When it's needed",
       "notes": "Additional information",
       "compliance": "RECO/FINTRAC/PIPEDA requirement"
     }
     ```

2. **Transaction-Specific Forms** (`transactionSpecificForms`):
   - Organized by property type
   - Include `primary` form and `additional` forms array

### Updating Clauses

Clauses are defined in `js/data/clauses.js`:

1. Add new clause with required fields:
   ```javascript
   "clause_key": {
     "clause_name": "Clause Name",
     "clause_number": "Reference Number",
     "purpose": "What it protects/ensures",
     "when_to_use": "Scenarios where it applies",
     "category": "mandatory|recommended|conditional",
     "applicable_to": ["property_type1", "property_type2"],
     "triggers": ["condition1", "condition2"]
   }
   ```

2. **Categories**:
   - `mandatory`: Always required for specified property types
   - `recommended`: Best practice for specified scenarios
   - `conditional`: Required when specific triggers are met

### Code Style

- **JavaScript**: Follow ESLint rules (`npm run lint`)
- **Formatting**: Use Prettier (`npm run format`)
- **Comments**: Add JSDoc comments for all functions
- **Naming**: Use camelCase for variables/functions, UPPER_CASE for constants

### Testing

1. **Run existing tests**:
   ```bash
   npm test
   ```

2. **Add tests for new features**:
   - Create test files in `tests/` directory
   - Follow existing test patterns
   - Test edge cases and error conditions

3. **Manual testing checklist**:
   - [ ] Test all wizard steps
   - [ ] Verify form validation
   - [ ] Test export functions
   - [ ] Check dark mode toggle
   - [ ] Verify localStorage persistence
   - [ ] Test in multiple browsers

## Workflow

1. **Before making changes**:
   - Pull latest changes
   - Create a new branch (if using git)
   - Run tests to ensure starting point is clean

2. **While making changes**:
   - Make small, focused commits
   - Write descriptive commit messages
   - Test frequently

3. **Before committing**:
   - Run `npm run lint:fix` to fix code style
   - Run `npm run format` to format code
   - Run `npm test` to ensure tests pass
   - Test manually in browser

## Common Tasks

### Adding a New Property Type

1. Add to validation in `js/utils/validation.js`:
   ```javascript
   const VALID_PROPERTY_TYPES = [
     // ... existing types
     'new_property_type'
   ];
   ```

2. Add forms in `js/data/forms.js`:
   ```javascript
   "new_property_type": {
     "primary": "Primary Form",
     "additional": ["Additional Form 1", "Additional Form 2"]
   }
   ```

3. Update clauses in `js/data/clauses.js` to include new type in `applicable_to` arrays

4. Add radio option in `index.html` Step 1

### Adding a New Transaction Detail Flag

1. Add to validation in `js/utils/validation.js`:
   ```javascript
   const VALID_TRANSACTION_DETAILS = [
     // ... existing details
     'new_detail_flag'
   ];
   ```

2. Add checkbox in `index.html` Step 3

3. Update clause triggers in `js/data/clauses.js` to use new flag

### Updating Regulatory Requirements

When RECO, FINTRAC, or PIPEDA requirements change:

1. Review affected forms in `js/data/forms.js`
2. Update form descriptions, notes, and compliance fields
3. Review clauses in `js/data/clauses.js`
4. Update clause purposes and when_to_use fields
5. Test thoroughly to ensure compliance checklist is accurate

## Best Practices

- **Keep it simple**: This is a personal tool, avoid over-engineering
- **Document changes**: Update README and comments
- **Test thoroughly**: Compliance tools must be accurate
- **Stay current**: Regularly review regulatory updates
- **Back up data**: Keep backups before major changes

## Questions or Issues?

- Check existing documentation in `docs/`
- Review code comments and JSDoc
- Test in browser console for debugging
- Check browser console for errors

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
