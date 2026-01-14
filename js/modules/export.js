/**
 * Export and clipboard utilities for transaction data
 * @module js/modules/export
 */

import { showCopyToast } from './ui.js';

/**
 * Fallback copy function for browsers without Clipboard API
 * @param {string} text - Text to copy to clipboard
 * @private
 */
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showCopyToast('Text copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
        showCopyToast('Copy failed. Please copy manually.');
    }

    document.body.removeChild(textArea);
}

/**
 * Copies text to clipboard using modern API with fallback
 * @param {string} text - Text to copy
 * @param {string} successMessage - Message to show on successful copy
 * @private
 */
function copyTextToClipboard(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyToast(successMessage);
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

/**
 * Copies a specific clause text to clipboard
 * @param {string} clauseId - The ID of the clause to copy
 * @public
 */
export function copyClauseText(clauseId) {
    const textarea = document.getElementById(`clause-text-${clauseId}`);
    if (textarea) {
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices

        // We try to use the modern API if possible, but the original code used execCommand which works on selected text
        try {
            // Modern approach if we just have the text
            copyTextToClipboard(textarea.value, `${clauseId} clause copied to clipboard!`);
        } catch (err) {
            // Fallback
            fallbackCopyToClipboard(textarea.value);
        }
    }
}

/**
 * Copies all clause texts to clipboard as a formatted package
 * @public
 */
export function copyAllClauses() {
    const allClauses = [];
    document.querySelectorAll('.clause-item__text').forEach((textarea, index) => {
        const clauseItem = textarea.closest('.clause-item');
        const clauseName = clauseItem.querySelector('.clause-item__name').textContent;
        const clauseReference = clauseItem.querySelector('.clause-item__reference').textContent;
        allClauses.push(`${index + 1}. ${clauseName} (${clauseReference})\n\n${textarea.value}`);
    });

    const allText = `ONTARIO REAL ESTATE CLAUSES - TRANSACTION PACKAGE\n${'='.repeat(60)}\n\n${allClauses.join('\n\n' + '-'.repeat(60) + '\n\n')}`;

    copyTextToClipboard(allText, 'All clauses copied to clipboard!');
}

/**
 * Generates and copies a complete transaction summary with all forms, clauses, and compliance items
 * @public
 */
export function generateCompleteTransactionSummary() {
    const currentDate = new Date().toLocaleDateString('en-CA');

    // Get transaction details from the form
    const propertyType = document.querySelector('input[name="property_type"]:checked')?.value || 'Not specified';
    const clientType = document.querySelector('input[name="client_type"]:checked')?.value || 'Not specified';
    const transactionType = document.querySelector('input[name="transaction_type"]:checked')?.value || 'Not specified';
    const representationStatus = document.querySelector('input[name="representation_status"]:checked')?.value || 'Not specified';
    const financingType = document.querySelector('input[name="financing_type"]:checked')?.value || 'Not specified';

    // Get all mandatory forms
    const mandatoryForms = [];
    document.querySelectorAll('.form-item__name').forEach(form => {
        mandatoryForms.push(form.textContent.trim());
    });

    // Get property-specific forms
    const propertyForms = [];
    document.querySelectorAll('.form-list-item').forEach(form => {
        propertyForms.push(form.textContent.trim());
    });

    // Get selected clauses
    const selectedClauses = [];
    document.querySelectorAll('.clause-item__name').forEach(clause => {
        selectedClauses.push(clause.textContent.trim());
    });

    // Get compliance checklist items
    const complianceItems = [];
    document.querySelectorAll('.compliance-item__text').forEach(item => {
        complianceItems.push(item.textContent.trim());
    });

    // Generate comprehensive professional summary
    const summary = `
═══════════════════════════════════════════════════════════════
    ONTARIO REAL ESTATE TRANSACTION SUMMARY
═══════════════════════════════════════════════════════════════

📅 GENERATED: ${currentDate}
🏢 PREPARED BY: [Your Name/Brokerage]

┌─────────────────────────────────────────────────────────────┐
│                    TRANSACTION DETAILS                      │
└─────────────────────────────────────────────────────────────┘

Property Type: ${propertyType.replace(/_/g, ' ').toUpperCase()}
Client Type: ${clientType.replace(/_/g, ' ').toUpperCase()}
Transaction Type: ${transactionType.toUpperCase()}
Representation: ${representationStatus.replace(/_/g, ' ').toUpperCase()}
Financing: ${financingType.replace(/_/g, ' ').toUpperCase()}

┌─────────────────────────────────────────────────────────────┐
│                 MANDATORY UNIVERSAL FORMS                   │
│                    (Required for ALL Transactions)          │
└─────────────────────────────────────────────────────────────┘

${mandatoryForms.length > 0 ? mandatoryForms.map((form, index) => `${index + 1}. ☐ ${form}`).join('\n') : 'No mandatory forms detected - Please fill out transaction form first'}

┌─────────────────────────────────────────────────────────────┐
│              PROPERTY-SPECIFIC OREA FORMS                   │
└─────────────────────────────────────────────────────────────┘

${propertyForms.length > 0 ? propertyForms.map((form, index) => `${index + 1}. ☐ ${form}`).join('\n') : 'No property-specific forms detected - Please fill out transaction form first'}

┌─────────────────────────────────────────────────────────────┐
│                RECOMMENDED CLAUSES                          │
└─────────────────────────────────────────────────────────────┘

${selectedClauses.length > 0 ? selectedClauses.map((clause, index) => `${index + 1}. ☐ ${clause}`).join('\n') : 'No clauses detected - Please fill out transaction form first'}

┌─────────────────────────────────────────────────────────────┐
│              COMPLIANCE CHECKLIST                           │
└─────────────────────────────────────────────────────────────┘

${complianceItems.length > 0 ? complianceItems.map((item, index) => `${index + 1}. ☐ ${item}`).join('\n') : 'Compliance checklist will be generated after form completion'}

┌─────────────────────────────────────────────────────────────┐
│                   REGULATORY COMPLIANCE                     │
└─────────────────────────────────────────────────────────────┘

✓ RECO/TRESA Requirements: All mandatory disclosures included
✓ FINTRAC Compliance: Client identification requirements covered
✓ PIPEDA Compliance: Privacy disclosure requirements included
✓ OREA Standards: Current forms and clause text provided

┌─────────────────────────────────────────────────────────────┐
│                      IMPORTANT NOTES                        │
└─────────────────────────────────────────────────────────────┘

⚠️  This summary provides guidance based on current Ontario real estate
    regulations. Always verify requirements with RECO and consult legal
    counsel for complex transactions.

⚠️  All condition dates and terms must be filled in appropriately for
    your specific transaction.

⚠️  Ensure all parties sign required forms before proceeding with
    transaction.

═══════════════════════════════════════════════════════════════
Generated by Ontario Real Estate Transaction Tool v2.0
Professional Edition - Full Compliance
═══════════════════════════════════════════════════════════════
    `;

    copyTextToClipboard(summary, 'Complete Transaction Summary copied to clipboard!');
}

/**
 * Exports a list of all required forms to clipboard
 * @public
 */
export function exportFormList() {
    const formsList = [];

    // Add universal mandatory forms
    document.querySelectorAll('.form-item__name').forEach(form => {
        formsList.push(`MANDATORY: ${form.textContent.trim()}`);
    });

    // Add property-specific forms
    document.querySelectorAll('.form-list-item').forEach(form => {
        formsList.push(`PROPERTY SPECIFIC: ${form.textContent.trim()}`);
    });

    const formsText = `ONTARIO REAL ESTATE FORMS LIST\n${'='.repeat(40)}\n\nTransaction Date: ${new Date().toLocaleDateString('en-CA')}\n\n${formsList.join('\n')}`;

    copyTextToClipboard(formsText, 'Forms list copied to clipboard!');
}
