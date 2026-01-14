/**
 * Data structure schemas and documentation
 * @module js/data/schemas
 */

/**
 * @typedef {Object} UniversalForm
 * @property {string} form_name - Full name of the form
 * @property {string} form_number - Official form number or identifier
 * @property {string} purpose - Purpose and use case of the form
 * @property {string} when_required - When this form is required
 * @property {string} notes - Additional notes and considerations
 * @property {string} compliance - Regulatory compliance requirement
 */

/**
 * @typedef {Object} TransactionSpecificForms
 * @property {string} primary - Primary form for this transaction type
 * @property {string[]} additional - Additional forms that may be needed
 */

/**
 * @typedef {Object} Clause
 * @property {string} clause_name - Name of the clause
 * @property {string} clause_number - Clause identifier or number
 * @property {string} purpose - Purpose of the clause
 * @property {string} when_to_use - When this clause should be used
 * @property {string} category - Category (mandatory/recommended/conditional)
 * @property {string[]} [applicable_to] - Property types this applies to
 * @property {string[]} [triggers] - Conditions that trigger this clause
 */

/**
 * @typedef {Object} TransactionState
 * @property {string} propertyType - Type of property (residential_freehold, residential_condo, commercial, vacant_land, new_construction)
 * @property {string} clientType - Type of client (individual, corporate, mixed)
 * @property {string} representationStatus - Representation status (client_represented, self_represented, multiple_representation)
 * @property {string} fundHandling - How funds are handled (deposits_received, no_funds)
 * @property {string[]} [transactionDetails] - Additional transaction characteristics
 */

/**
 * Schema for universal mandatory forms
 * All transactions require these forms regardless of type
 */
export const UNIVERSAL_FORMS_SCHEMA = {
  type: 'object',
  properties: {
    form_name: { type: 'string', required: true },
    form_number: { type: 'string', required: true },
    purpose: { type: 'string', required: true },
    when_required: { type: 'string', required: true },
    notes: { type: 'string', required: true },
    compliance: { type: 'string', required: true }
  }
};

/**
 * Schema for transaction-specific forms
 * Forms vary based on property type
 */
export const TRANSACTION_FORMS_SCHEMA = {
  type: 'object',
  properties: {
    primary: { type: 'string', required: true },
    additional: { type: 'array', items: { type: 'string' }, required: true }
  }
};

/**
 * Schema for clauses
 * Clauses are recommended based on transaction characteristics
 */
export const CLAUSE_SCHEMA = {
  type: 'object',
  properties: {
    clause_name: { type: 'string', required: true },
    clause_number: { type: 'string', required: true },
    purpose: { type: 'string', required: true },
    when_to_use: { type: 'string', required: true },
    category: { type: 'string', enum: ['mandatory', 'recommended', 'conditional'], required: true },
    applicable_to: { type: 'array', items: { type: 'string' } },
    triggers: { type: 'array', items: { type: 'string' } }
  }
};

/**
 * Schema for transaction state
 * Represents the current state of a transaction being configured
 */
export const TRANSACTION_STATE_SCHEMA = {
  type: 'object',
  properties: {
    propertyType: { type: 'string', required: true },
    clientType: { type: 'string', required: true },
    representationStatus: { type: 'string', required: true },
    fundHandling: { type: 'string', required: true },
    transactionDetails: { type: 'array', items: { type: 'string' } }
  }
};
