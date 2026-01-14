/**
 * Validation utilities for transaction data
 * @module js/utils/validation
 */

/**
 * Valid property types
 * @constant {string[]}
 */
const VALID_PROPERTY_TYPES = [
  'residential_freehold',
  'residential_condo',
  'commercial',
  'vacant_land',
  'new_construction'
];

/**
 * Valid client types
 * @constant {string[]}
 */
const VALID_CLIENT_TYPES = ['individual', 'corporate', 'mixed'];

/**
 * Valid representation statuses
 * @constant {string[]}
 */
const VALID_REPRESENTATION_STATUSES = [
  'client_represented',
  'self_represented',
  'multiple_representation'
];

/**
 * Valid fund handling options
 * @constant {string[]}
 */
const VALID_FUND_HANDLING = ['deposits_received', 'no_funds'];

/**
 * Valid transaction detail flags
 * @constant {string[]}
 */
const VALID_TRANSACTION_DETAILS = [
  'high_value',
  'out_of_province',
  'foreign_nationals',
  'expedited',
  'needs_financing',
  'first_time_buyer',
  'rural'
];

/**
 * Validates a property type value
 * @param {string} propertyType - The property type to validate
 * @returns {boolean} True if valid
 */
export function isValidPropertyType(propertyType) {
  return VALID_PROPERTY_TYPES.includes(propertyType);
}

/**
 * Validates a client type value
 * @param {string} clientType - The client type to validate
 * @returns {boolean} True if valid
 */
export function isValidClientType(clientType) {
  return VALID_CLIENT_TYPES.includes(clientType);
}

/**
 * Validates a representation status value
 * @param {string} status - The representation status to validate
 * @returns {boolean} True if valid
 */
export function isValidRepresentationStatus(status) {
  return VALID_REPRESENTATION_STATUSES.includes(status);
}

/**
 * Validates a fund handling value
 * @param {string} fundHandling - The fund handling option to validate
 * @returns {boolean} True if valid
 */
export function isValidFundHandling(fundHandling) {
  return VALID_FUND_HANDLING.includes(fundHandling);
}

/**
 * Validates transaction detail flags
 * @param {string[]} details - Array of transaction detail flags
 * @returns {boolean} True if all flags are valid
 */
export function areValidTransactionDetails(details) {
  if (!Array.isArray(details)) {
    return false;
  }
  return details.every(detail => VALID_TRANSACTION_DETAILS.includes(detail));
}

/**
 * Validates a complete transaction state object
 * @param {Object} state - The transaction state to validate
 * @param {string} state.propertyType - Property type
 * @param {string} state.clientType - Client type
 * @param {string} state.representationStatus - Representation status
 * @param {string} state.fundHandling - Fund handling option
 * @param {string[]} [state.transactionDetails] - Optional transaction details
 * @returns {{valid: boolean, errors: string[]}} Validation result
 */
export function validateTransactionState(state) {
  const errors = [];

  if (!state) {
    return { valid: false, errors: ['Transaction state is required'] };
  }

  // Required fields
  if (!state.propertyType) {
    errors.push('Property type is required');
  } else if (!isValidPropertyType(state.propertyType)) {
    errors.push(`Invalid property type: ${state.propertyType}`);
  }

  if (!state.clientType) {
    errors.push('Client type is required');
  } else if (!isValidClientType(state.clientType)) {
    errors.push(`Invalid client type: ${state.clientType}`);
  }

  if (!state.representationStatus) {
    errors.push('Representation status is required');
  } else if (!isValidRepresentationStatus(state.representationStatus)) {
    errors.push(`Invalid representation status: ${state.representationStatus}`);
  }

  if (!state.fundHandling) {
    errors.push('Fund handling option is required');
  } else if (!isValidFundHandling(state.fundHandling)) {
    errors.push(`Invalid fund handling: ${state.fundHandling}`);
  }

  // Optional fields
  if (state.transactionDetails && !areValidTransactionDetails(state.transactionDetails)) {
    errors.push('Invalid transaction details');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Sanitizes a string value for safe storage
 * @param {string} value - The value to sanitize
 * @returns {string} Sanitized value
 */
export function sanitizeString(value) {
  if (typeof value !== 'string') {
    return '';
  }
  return value.trim();
}
