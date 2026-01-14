# Data Structure Documentation

This document describes the data structures used in the Ontario Real Estate Compliance Tool.

## Overview

The tool uses three main data structures:
1. **Universal Mandatory Forms**: Required for all transactions
2. **Transaction-Specific Forms**: Vary by property type
3. **Clauses**: Recommendations based on transaction characteristics

## Universal Mandatory Forms

**Location**: `js/data/forms.js` → `universalMandatoryForms`

**Structure**:
```javascript
{
  "form_key": {
    "form_name": string,        // Full display name of the form
    "form_number": string,      // Official form number (e.g., "OREA Form 300")
    "purpose": string,          // What the form accomplishes
    "when_required": string,    // When this form must be used
    "notes": string,            // Additional important information
    "compliance": string        // Regulatory requirement (RECO/FINTRAC/PIPEDA)
  }
}
```

**Example**:
```javascript
"reco_information_guide": {
  "form_name": "RECO Information Guide",
  "form_number": "RECO Guide",
  "purpose": "Consumer protection - explains rights, duties, and expectations",
  "when_required": "Before any services or assistance are provided",
  "notes": "Must be explained to client and acknowledgement obtained",
  "compliance": "RECO/TRESA requirement"
}
```

**Current Forms**:
- `reco_information_guide`: RECO Information Guide
- `privacy_policy_disclosure`: Privacy Policy Disclosure (PIPEDA)
- `fintrac_individual_id`: FINTRAC Individual ID Record
- `fintrac_corporate_id`: FINTRAC Corporate ID Record
- `receipt_of_funds`: Receipt of Funds Record
- `representation_agreement`: Buyer/Seller Representation Agreement
- `self_represented_acknowledgement`: Self-Represented Party Disclosure
- `cooperation_confirmation`: Confirmation of Co-operation and Representation

## Transaction-Specific Forms

**Location**: `js/data/forms.js` → `transactionSpecificForms`

**Structure**:
```javascript
{
  "property_type_key": {
    "primary": string,          // Primary agreement form
    "additional": string[]      // Array of additional forms
  }
}
```

**Example**:
```javascript
"residential_freehold": {
  "primary": "OREA Form 100 - Agreement of Purchase and Sale",
  "additional": [
    "OREA Form 105 - Schedule for Additional Terms",
    "OREA Form 120 - Amendment to Agreement",
    "OREA Form 121 - Notice to Remove Condition(s)",
    "OREA Form 220 - Seller Property Information Statement (SPIS)"
  ]
}
```

**Property Types**:
- `residential_freehold`: Houses, townhomes, detached properties
- `residential_condo`: Condo units, apartments
- `commercial`: Office, retail, industrial
- `vacant_land`: Undeveloped lots
- `new_construction`: Pre-construction, newly built
- `business_purchase`: Business acquisitions

## Clauses

**Location**: `js/data/clauses.js` → `clauseDatabase`

**Structure**:
```javascript
{
  "clause_key": {
    "clause_name": string,          // Display name
    "clause_number": string,        // Reference number
    "purpose": string,              // What the clause protects/ensures
    "when_to_use": string,          // Scenarios where it applies
    "category": string,             // "mandatory" | "recommended" | "conditional"
    "applicable_to": string[],      // Array of property types
    "triggers": string[]            // Array of transaction detail flags
  }
}
```

**Example**:
```javascript
"title_search": {
  "clause_name": "Title Search Clause",
  "clause_number": "Standard Clause 1",
  "purpose": "Ensures clear title to the property",
  "when_to_use": "All purchase transactions",
  "category": "mandatory",
  "applicable_to": [
    "residential_freehold",
    "residential_condo",
    "commercial",
    "vacant_land"
  ],
  "triggers": []
}
```

**Categories**:
- `mandatory`: Always required for specified property types
- `recommended`: Best practice for specified scenarios
- `conditional`: Required when specific triggers are met

**Trigger Flags** (from Step 3 of wizard):
- `high_value`: Transaction over $1M
- `out_of_province`: Out-of-province clients
- `foreign_nationals`: Foreign national buyers
- `expedited`: Expedited timeline
- `needs_financing`: Financing required
- `first_time_buyer`: First-time home buyer
- `rural`: Rural property

## Transaction State

**Location**: Runtime state in `js/app.js`

**Structure**:
```javascript
{
  propertyType: string,           // From Step 1
  clientType: string,             // From Step 1
  representationStatus: string,   // From Step 2
  fundHandling: string,           // From Step 2
  transactionDetails: string[]    // From Step 3 (checkboxes)
}
```

**Valid Values**:

- **propertyType**: `residential_freehold`, `residential_condo`, `commercial`, `vacant_land`, `new_construction`
- **clientType**: `individual`, `corporate`, `mixed`
- **representationStatus**: `client_represented`, `self_represented`, `multiple_representation`
- **fundHandling**: `deposits_received`, `no_funds`
- **transactionDetails**: Array of flags (see Trigger Flags above)

## Validation

Validation utilities are available in `js/utils/validation.js`:

```javascript
import { 
  isValidPropertyType,
  isValidClientType,
  validateTransactionState 
} from './js/utils/validation.js';

// Validate individual fields
if (isValidPropertyType(value)) { /* ... */ }

// Validate complete state
const result = validateTransactionState(state);
if (result.valid) {
  // State is valid
} else {
  console.error(result.errors);
}
```

## Adding New Data

### Adding a New Form

1. Choose the appropriate location:
   - Universal (all transactions): Add to `universalMandatoryForms`
   - Property-specific: Add to `transactionSpecificForms` under property type

2. Follow the structure exactly as documented above

3. Ensure all required fields are present

### Adding a New Clause

1. Add to `clauseDatabase` in `js/data/clauses.js`

2. Set appropriate category:
   - Use `mandatory` sparingly (only for legally required clauses)
   - Use `recommended` for best practices
   - Use `conditional` for situation-specific clauses

3. Define `applicable_to` array with property types

4. Define `triggers` array with transaction detail flags

5. Test that clause appears correctly in results

### Adding a New Property Type

1. Add to `VALID_PROPERTY_TYPES` in `js/utils/validation.js`

2. Add to `transactionSpecificForms` in `js/data/forms.js`

3. Update `applicable_to` arrays in relevant clauses

4. Add radio option in `index.html` Step 1

### Adding a New Transaction Detail Flag

1. Add to `VALID_TRANSACTION_DETAILS` in `js/utils/validation.js`

2. Add checkbox in `index.html` Step 3

3. Update `triggers` arrays in relevant clauses

## Schema Definitions

TypeScript-style type definitions are available in `js/data/schemas.js` for reference.

## Data Maintenance

- **Review quarterly**: Check for regulatory updates
- **Backup before changes**: Keep copies of data files
- **Test thoroughly**: Verify all combinations work correctly
- **Document changes**: Note what was changed and why
- **Version control**: Use git to track changes over time
