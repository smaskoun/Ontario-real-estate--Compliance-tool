// Application data from provided JSON
const universalMandatoryForms = {
  "reco_information_guide": {
    "form_name": "RECO Information Guide", 
    "form_number": "RECO Guide",
    "purpose": "Consumer protection - explains rights, duties, and expectations",
    "when_required": "Before any services or assistance are provided",
    "notes": "Must be explained to client and acknowledgement obtained",
    "compliance": "RECO/TRESA requirement"
  },
  "privacy_policy_disclosure": {
    "form_name": "Privacy Policy Disclosure",
    "form_number": "PIPEDA Compliance Form",
    "purpose": "Informs clients how personal information is collected, used, and disclosed", 
    "when_required": "Before collecting any personal information",
    "notes": "Must explain data handling practices and obtain consent",
    "compliance": "PIPEDA requirement"
  },
  "fintrac_individual_id": {
    "form_name": "FINTRAC Individual Identification Information Record",
    "form_number": "OREA Form 630 / CREA Template",
    "purpose": "Anti-money laundering compliance for individual clients",
    "when_required": "For individual buyers/sellers before offer acceptance",
    "notes": "Photo ID, Credit File, or Dual Process method required",
    "compliance": "FINTRAC/PCMLTFA requirement"
  },
  "fintrac_corporate_id": {
    "form_name": "FINTRAC Corporation/Entity Identification Information Record", 
    "form_number": "CREA Corporate Template",
    "purpose": "Anti-money laundering compliance for corporate clients",
    "when_required": "For corporate buyers/sellers before offer acceptance",
    "notes": "Verify existence of corporation and identify directors",
    "compliance": "FINTRAC/PCMLTFA requirement"
  },
  "receipt_of_funds": {
    "form_name": "Receipt of Funds Record",
    "form_number": "CREA Template",
    "purpose": "Records all funds received by brokerage",
    "when_required": "When any deposit or payment is received",
    "notes": "Required for trust account compliance and FINTRAC",
    "compliance": "FINTRAC/PCMLTFA requirement"
  },
  "representation_agreement": {
    "form_name": "Buyer/Seller Representation Agreement",
    "form_number": "OREA Form 300 (BRA) / Form 200 (Listing)",
    "purpose": "Establishes client relationship and service terms",
    "when_required": "Before providing services to buyers/sellers",
    "notes": "Defines duties, commission, and representation type",
    "compliance": "RECO/TRESA requirement"
  },
  "self_represented_acknowledgement": {
    "form_name": "Information and Disclosure to Self-Represented Party", 
    "form_number": "RECO Form",
    "purpose": "Acknowledges party is not represented by the brokerage",
    "when_required": "Before assisting any unrepresented party",
    "notes": "Explains limitations of assistance that can be provided",
    "compliance": "RECO/TRESA requirement"
  },
  "cooperation_confirmation": {
    "form_name": "Confirmation of Co-operation and Representation",
    "form_number": "OREA Form 320", 
    "purpose": "Confirms agency relationships in the transaction",
    "when_required": "Before presenting offers or showing properties",
    "notes": "Clarifies who represents whom in the transaction",
    "compliance": "RECO/TRESA requirement"
  }
};

const transactionSpecificForms = {
  "residential_freehold": {
    "primary": "OREA Form 100 - Agreement of Purchase and Sale",
    "additional": [
      "OREA Form 105 - Schedule for Additional Terms",
      "OREA Form 120 - Amendment to Agreement",
      "OREA Form 121 - Notice to Remove Condition(s)",
      "OREA Form 220 - Seller Property Information Statement (SPIS)"
    ]
  },
  "residential_condo": {
    "primary": "OREA Form 101 - Agreement of Purchase and Sale (Condominium)",
    "additional": [
      "OREA Form 105 - Schedule for Additional Terms",
      "OREA Form 150 - Assignment of Agreement (Condominium)",
      "OREA Form 120 - Amendment to Agreement"
    ]
  },
  "commercial": {
    "primary": "OREA Form 500 - Agreement of Purchase and Sale (Commercial)",
    "additional": [
      "OREA Form 501 - Agreement of Purchase and Sale (Commercial Condo)",
      "OREA Form 505 - Schedule (Commercial)",
      "OREA Form 570 - Amendment (Commercial)"
    ]
  },
  "vacant_land": {
    "primary": "OREA Form 100 - Agreement of Purchase and Sale",
    "additional": [
      "OREA Form 105 - Schedule for Development/Zoning",
      "Environmental Assessment Schedules",
      "Severance/Subdivision Schedules"
    ]
  },
  "new_construction": {
    "primary": "Builder Purchase Agreement + TARION Schedules",
    "additional": [
      "TARION Statement of Critical Dates",
      "TARION Schedule A - Defects and Standards",
      "TARION Schedule B - Warranty Coverage",
      "HST New Home Documentation"
    ]
  },
  "business_purchase": {
    "primary": "OREA Form 502 - Agreement of Purchase and Sale (Business)",
    "additional": [
      "OREA Form 503 - Sale of Business Statement",
      "OREA Form 504 - Schedule (Business Purchase)"
    ]
  }
};

const clauseDatabase = {
  "MORT-2": {
    "name": "Condition - Arranging a New Mortgage",
    "category": "Financing",
    "text": "This Offer is conditional upon the Buyer arranging, at the Buyer's own expense, a new _________________ mortgage for not less than $ _________________ , bearing interest at a rate of not more than _______ % per annum, calculated semi-annually not in advance, for a term of not less than _______ year(s), with a payment period not exceeding _______ year(s), repayable in blended monthly payments, including principal and interest. Unless the Buyer gives notice in writing delivered to the Seller personally or in accordance with any other provisions for the delivery of notice in this Agreement of Purchase and Sale or any Schedule thereto not later than _______ p.m. on the ______ day of ________________, 20____, that this condition is fulfilled, this Offer shall be null and void and the deposit shall be returned to the Buyer in full without deduction. This condition is included for the benefit of the Buyer and may be waived at the Buyer's sole option by notice in writing to the Seller as aforesaid within the time period stated herein.",
    "purpose": "Protects buyer if unable to secure required mortgage financing",
    "when_to_use": "All purchases requiring mortgage financing",
    "risk_without": "Buyer legally obligated without confirmed financing"
  },
  "INSP-1": {
    "name": "Condition - Home Inspector (General Inspection)",
    "category": "Inspection",
    "text": "This Offer is conditional upon the Buyer obtaining, at the Buyer's own expense, a home inspection of the property and all buildings and structures thereon and the Buyer obtaining a report satisfactory to the Buyer in the Buyer's sole and absolute discretion. Unless the Buyer gives notice in writing delivered to the Seller personally or in accordance with any other provisions for the delivery of notice in this Agreement of Purchase and Sale or any Schedule thereto not later than _______ p.m. on the ______ day of ________________, 20____, that this condition is fulfilled, this Offer shall be null and void and the deposit shall be returned to the Buyer in full without deduction. The Seller agrees to co-operate in providing access to the property for the purpose of this inspection. This condition is included for the benefit of the Buyer and may be waived at the Buyer's sole option by notice in writing to the Seller as aforesaid within the time period stated herein.",
    "purpose": "Allows professional inspection to identify defects before closing",
    "when_to_use": "All residential property purchases",
    "risk_without": "Unknown defects or safety issues"
  },
  "CONDO-1": {
    "name": "Condition - Review of Condominium Documents",
    "category": "Condominium",
    "text": "This Offer is conditional upon the Buyer or the Buyer's solicitor reviewing and approving the Status Certificate and all other relevant documentation including but not limited to: Declaration, By-laws, Rules and Regulations, Financial Statements, Reserve Fund Study, Management Agreements and other related condominium corporation documentation. Unless the Buyer gives notice in writing delivered to the Seller personally or in accordance with any other provisions for the delivery of notice in this Agreement of Purchase and Sale or any Schedule thereto not later than _______ p.m. on the ______ day of ________________, 20____, that this condition is fulfilled, this Offer shall be null and void and the deposit shall be returned to the Buyer in full without deduction. This condition is included for the benefit of the Buyer and may be waived at the Buyer's sole option by notice in writing to the Seller as aforesaid within the time period stated herein.",
    "purpose": "Allows buyer to review condo corporation's financial and legal status",
    "when_to_use": "All condominium purchases",
    "risk_without": "Hidden assessments or financial problems"
  },
  "INSUR-1": {
    "name": "Condition - Arranging Insurance",
    "category": "Insurance",
    "text": "This Offer is conditional upon the Buyer obtaining, at the Buyer's expense, satisfactory insurance coverage for the property. Unless the Buyer gives notice in writing delivered to the Seller personally or in accordance with any other provisions for the delivery of notice in this Agreement of Purchase and Sale or any Schedule thereto not later than _______ p.m. on the ______ day of ________________, 20____, that this condition is fulfilled, this Offer shall be null and void and the deposit shall be returned to the Buyer in full without deduction. This condition is included for the benefit of the Buyer and may be waived at the Buyer's sole option by notice in writing to the Seller as aforesaid within the time period stated herein.",
    "purpose": "Ensures buyer can obtain property insurance before closing",
    "when_to_use": "All property purchases",
    "risk_without": "Unable to insure or prohibitive costs"
  },
  "LAW-1": {
    "name": "Condition - Lawyer's Approval (Buyer)",
    "category": "Legal Review",
    "text": "This Offer is conditional upon the approval of the terms hereof by the Buyer's Solicitor. Unless the Buyer gives notice in writing delivered to the Seller personally or in accordance with any other provisions for the delivery of notice in this Agreement of Purchase and Sale or any Schedule thereto not later than _______ p.m. on the ______ day of ________________, 20____, that this condition is fulfilled, this Offer shall be null and void and the deposit shall be returned to the Buyer in full without deduction. This condition is included for the benefit of the Buyer and may be waived at the Buyer's sole option by notice in writing to the Seller as aforesaid within the time period stated herein.",
    "purpose": "Allows lawyer to review and approve agreement terms",
    "when_to_use": "Complex transactions, first-time buyers",
    "risk_without": "Missing legal implications"
  },
  "ENV-15": {
    "name": "Condition - Environmental Site Assessment",
    "category": "Environmental",
    "text": "This Offer is conditional upon the Buyer obtaining, at the Buyer's expense, an environmental site assessment of the property satisfactory to the Buyer in the Buyer's sole and absolute discretion. Unless the Buyer gives notice in writing delivered to the Seller personally or in accordance with any other provisions for the delivery of notice in this Agreement of Purchase and Sale or any Schedule thereto not later than _______ p.m. on the ______ day of ________________, 20____, that this condition is fulfilled, this Offer shall be null and void and the deposit shall be returned to the Buyer in full without deduction. This condition is included for the benefit of the Buyer and may be waived at the Buyer's sole option by notice in writing to the Seller as aforesaid within the time period stated herein.",
    "purpose": "Identifies potential environmental contamination issues",
    "when_to_use": "Commercial properties, industrial sites",
    "risk_without": "Environmental liability"
  },
  "SBP/SA-1": {
    "name": "Condition - Sale of Buyer's Property",
    "category": "Sale Dependency",
    "text": "This Offer is conditional upon the sale of the Buyer's property known as _________________ (\"Buyer's Property\") on or before _______ p.m. on the ______ day of ________________, 20____. Unless the Buyer gives notice in writing delivered to the Seller personally or in accordance with any other provisions for the delivery of notice in this Agreement of Purchase and Sale or any Schedule thereto not later than the above time and date that the Buyer's Property has been sold, this Offer shall become null and void and the deposit shall be returned to the Buyer in full without deduction. For the purposes of this condition, \"sold\" shall mean an unconditional Agreement of Purchase and Sale for the Buyer's Property has been entered into by the Buyer as Seller. This condition is included for the benefit of the Buyer and may be waived at the Buyer's sole option by notice in writing to the Seller as aforesaid within the time period stated herein.",
    "purpose": "Protects buyer who needs to sell current home",
    "when_to_use": "When buyer must sell existing property",
    "risk_without": "Unable to complete without sale proceeds"
  },
  "ZONING-1": {
    "name": "Condition - Re-zoning/Minor Variance",
    "category": "Zoning",
    "text": "This Offer is conditional upon the Buyer determining that the property is zoned to permit _________________ or obtaining approval for re-zoning and/or minor variance to permit _________________. Unless the Buyer gives notice in writing delivered to the Seller personally or in accordance with any other provisions for the delivery of notice in this Agreement of Purchase and Sale or any Schedule thereto not later than _______ p.m. on the ______ day of ________________, 20____, that this condition is fulfilled, this Offer shall be null and void and the deposit shall be returned to the Buyer in full without deduction. This condition is included for the benefit of the Buyer and may be waived at the Buyer's sole option by notice in writing to the Seller as aforesaid within the time period stated herein.",
    "purpose": "Ensures property zoning permits intended use",
    "when_to_use": "Commercial properties, development projects",
    "risk_without": "Zoning restrictions prevent intended use"
  }
};

// Application State
let currentTransaction = {
  propertyType: null,
  clientType: null,
  transactionType: null,
  representationStatus: null,
  financingType: null,
  transactionComplexity: null,
  geographicScope: null,
  timingUrgency: null
};

// DOM Elements
const transactionForm = document.getElementById('transaction-form');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  setupFormHandlers();
  setupExportHandlers();
  displayUniversalMandatoryForms();
});

// Display Universal Mandatory Forms (Always Shown)
function displayUniversalMandatoryForms() {
  const container = document.getElementById('universal-forms-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  Object.entries(universalMandatoryForms).forEach(([formId, form]) => {
    const formItem = createUniversalFormItem(form);
    container.appendChild(formItem);
  });
}

// Create Universal Form Item
function createUniversalFormItem(form) {
  const item = document.createElement('div');
  item.className = 'form-item';
  
  item.innerHTML = `
    <div class="form-item__checkbox-container">
      <input type="checkbox" class="form-item__checkbox" id="form-${Date.now()}-${Math.random()}">
    </div>
    <div class="form-item__content">
      <div class="form-item__header">
        <div class="form-item__name">${form.form_name}</div>
        <div class="form-item__number">${form.form_number}</div>
      </div>
      <div class="form-item__details">
        <div class="form-item__purpose">${form.purpose}</div>
        <div class="form-item__timing">Required: ${form.when_required}</div>
        <div class="form-item__compliance">${form.compliance}</div>
        <div class="form-item__notes">${form.notes}</div>
      </div>
    </div>
  `;
  
  return item;
}

// Form Handlers
function setupFormHandlers() {
  if (transactionForm) {
    transactionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmission();
    });
    
    transactionForm.addEventListener('reset', function() {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.style.display = 'none';
      }
      resetTransactionState();
    });
  }
}

// Handle Form Submission
function handleFormSubmission() {
  const formData = new FormData(transactionForm);
  
  // Update transaction state
  currentTransaction.propertyType = formData.get('property_type');
  currentTransaction.clientType = formData.get('client_type');
  currentTransaction.transactionType = formData.get('transaction_type');
  currentTransaction.representationStatus = formData.get('representation_status');
  currentTransaction.financingType = formData.get('financing_type');
  currentTransaction.transactionComplexity = formData.get('transaction_complexity');
  currentTransaction.geographicScope = formData.get('geographic_scope');
  currentTransaction.timingUrgency = formData.get('timing_urgency');
  
  // Generate and display results
  generateTransactionResults();
  
  // Show results section
  const resultsSection = document.getElementById('results-section');
  if (resultsSection) {
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Generate Transaction Results
function generateTransactionResults() {
  generatePropertySpecificForms();
  generateClauseRecommendations();
  generateComplianceChecklist();
}

// Generate Property Specific Forms
function generatePropertySpecificForms() {
  const container = document.getElementById('property-forms-list');
  if (!container || !currentTransaction.propertyType) return;
  
  container.innerHTML = '';
  
  const forms = transactionSpecificForms[currentTransaction.propertyType];
  if (!forms) return;
  
  // Primary form
  const primarySection = document.createElement('div');
  primarySection.className = 'forms-category';
  primarySection.innerHTML = `
    <h3 class="forms-category__title">Primary Agreement Form</h3>
    <div class="forms-category__list">
      <div class="form-list-item">${forms.primary}</div>
    </div>
  `;
  container.appendChild(primarySection);
  
  // Additional forms
  if (forms.additional && forms.additional.length > 0) {
    const additionalSection = document.createElement('div');
    additionalSection.className = 'forms-category';
    additionalSection.innerHTML = `
      <h3 class="forms-category__title">Additional Required Forms</h3>
      <div class="forms-category__list">
        ${forms.additional.map(form => `<div class="form-list-item">${form}</div>`).join('')}
      </div>
    `;
    container.appendChild(additionalSection);
  }
}

// Generate Clause Recommendations
function generateClauseRecommendations() {
  const mandatoryContainer = document.getElementById('mandatory-clauses');
  const recommendedContainer = document.getElementById('recommended-clauses');
  const conditionalContainer = document.getElementById('conditional-clauses');
  
  if (!mandatoryContainer || !recommendedContainer || !conditionalContainer) return;
  
  // Clear existing content
  mandatoryContainer.innerHTML = '';
  recommendedContainer.innerHTML = '';
  conditionalContainer.innerHTML = '';
  
  // Categorize clauses
  const mandatoryClauses = [];
  const recommendedClauses = [];
  const conditionalClauses = [];
  
  Object.entries(clauseDatabase).forEach(([clauseId, clause]) => {
    if (isMandatoryClause(clauseId, clause)) {
      mandatoryClauses.push({ id: clauseId, ...clause });
    } else if (isRecommendedClause(clauseId, clause)) {
      recommendedClauses.push({ id: clauseId, ...clause });
    } else if (isConditionalClause(clauseId, clause)) {
      conditionalClauses.push({ id: clauseId, ...clause });
    }
  });
  
  // Render clauses
  mandatoryClauses.forEach(clause => {
    mandatoryContainer.appendChild(createClauseItem(clause));
  });
  
  recommendedClauses.forEach(clause => {
    recommendedContainer.appendChild(createClauseItem(clause));
  });
  
  conditionalClauses.forEach(clause => {
    conditionalContainer.appendChild(createClauseItem(clause));
  });
}

// Determine if clause is mandatory
function isMandatoryClause(clauseId, clause) {
  // Financing clauses for mortgage transactions
  if (clauseId === 'MORT-2' && ['conventional_mortgage', 'alternative_financing'].includes(currentTransaction.financingType)) {
    return true;
  }
  
  // Insurance is always mandatory
  if (clauseId === 'INSUR-1') {
    return true;
  }
  
  return false;
}

// Determine if clause is recommended
function isRecommendedClause(clauseId, clause) {
  // Home inspection for residential properties
  if (clauseId === 'INSP-1' && ['residential_freehold', 'residential_condo'].includes(currentTransaction.propertyType)) {
    return true;
  }
  
  // Lawyer approval for complex transactions or first-time buyers
  if (clauseId === 'LAW-1' && currentTransaction.transactionComplexity === 'complex') {
    return true;
  }
  
  return false;
}

// Determine if clause is conditional
function isConditionalClause(clauseId, clause) {
  // Condo document review for condo purchases
  if (clauseId === 'CONDO-1' && currentTransaction.propertyType === 'residential_condo') {
    return true;
  }
  
  // Environmental assessment for commercial properties
  if (clauseId === 'ENV-15' && currentTransaction.propertyType === 'commercial') {
    return true;
  }
  
  // Zoning clause for commercial or vacant land
  if (clauseId === 'ZONING-1' && ['commercial', 'vacant_land'].includes(currentTransaction.propertyType)) {
    return true;
  }
  
  return false;
}

// Create Clause Item
function createClauseItem(clause) {
  const item = document.createElement('div');
  item.className = 'clause-item';
  
  item.innerHTML = `
    <div class="clause-item__header">
      <div class="clause-item__title">
        <div class="clause-item__name">${clause.name}</div>
        <span class="clause-item__reference">${clause.id}</span>
      </div>
      <button type="button" class="btn btn--success btn--small clause-item__copy-btn" onclick="copyClauseText('${clause.id}')">
        Copy Text
      </button>
    </div>
    <textarea class="clause-item__text" readonly id="clause-text-${clause.id}">${clause.text}</textarea>
    <div class="clause-item__details">
      <div class="clause-item__purpose">
        <div class="clause-item__label">Purpose</div>
        <div class="clause-item__description">${clause.purpose}</div>
      </div>
      <div class="clause-item__usage">
        <div class="clause-item__label">When to Use</div>
        <div class="clause-item__description">${clause.when_to_use}</div>
      </div>
    </div>
  `;
  
  return item;
}

// Generate Compliance Checklist
function generateComplianceChecklist() {
  const container = document.getElementById('compliance-checklist');
  if (!container) return;
  
  container.innerHTML = '';
  
  const checklistItems = [
    'RECO Information Guide provided and explained',
    'Privacy policy disclosed (PIPEDA compliance)',
    'Client identity verified (FINTRAC requirements)',
    'Representation agreement signed',
    'All mandatory disclosures completed',
    'Property-specific forms identified and prepared',
    'Required clauses included in agreement',
    'All conditions properly dated and timed',
    'Compliance with regulatory requirements verified'
  ];
  
  checklistItems.forEach((item, index) => {
    const checklistItem = document.createElement('div');
    checklistItem.className = 'compliance-item';
    checklistItem.innerHTML = `
      <input type="checkbox" class="compliance-item__checkbox" id="compliance-${index}">
      <label for="compliance-${index}" class="compliance-item__text">${item}</label>
    `;
    container.appendChild(checklistItem);
  });
}

// Export Handlers
function setupExportHandlers() {
  const copyAllBtn = document.getElementById('copy-all-clauses');
  const generateSummaryBtn = document.getElementById('generate-summary');
  const printChecklistBtn = document.getElementById('print-checklist');
  const exportFormsBtn = document.getElementById('export-forms');
  const startNewBtn = document.getElementById('start-new-transaction');
  
  if (copyAllBtn) copyAllBtn.addEventListener('click', copyAllClauses);
  if (generateSummaryBtn) generateSummaryBtn.addEventListener('click', generateCompleteTransactionSummary);
  if (printChecklistBtn) printChecklistBtn.addEventListener('click', printComplianceChecklist);
  if (exportFormsBtn) exportFormsBtn.addEventListener('click', exportFormList);
  if (startNewBtn) startNewBtn.addEventListener('click', startNewTransaction);
}

// Copy Clause Text
function copyClauseText(clauseId) {
  const textarea = document.getElementById(`clause-text-${clauseId}`);
  if (textarea) {
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
      document.execCommand('copy');
      showCopyToast(`${clauseId} clause copied to clipboard!`);
    } catch (err) {
      console.error('Copy failed:', err);
      showCopyToast('Copy failed. Please try again.');
    }
  }
}

// Copy All Clauses
function copyAllClauses() {
  const allClauses = [];
  document.querySelectorAll('.clause-item__text').forEach((textarea, index) => {
    const clauseName = textarea.closest('.clause-item').querySelector('.clause-item__name').textContent;
    const clauseReference = textarea.closest('.clause-item').querySelector('.clause-item__reference').textContent;
    allClauses.push(`${index + 1}. ${clauseName} (${clauseReference})\n\n${textarea.value}`);
  });
  
  const allText = `ONTARIO REAL ESTATE CLAUSES - TRANSACTION PACKAGE\n${'='.repeat(60)}\n\n${allClauses.join('\n\n' + '-'.repeat(60) + '\n\n')}`;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(allText).then(() => {
      showCopyToast('All clauses copied to clipboard!');
    }).catch(() => {
      fallbackCopyToClipboard(allText);
    });
  } else {
    fallbackCopyToClipboard(allText);
  }
}

// Generate Complete Transaction Summary - FIXED VERSION
function generateCompleteTransactionSummary() {
    const currentDate = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD format
    
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

Property Type: ${propertyType.replace('_', ' ').toUpperCase()}
Client Type: ${clientType.replace('_', ' ').toUpperCase()}  
Transaction Type: ${transactionType.toUpperCase()}
Representation: ${representationStatus.replace('_', ' ').toUpperCase()}
Financing: ${financingType.replace('_', ' ').toUpperCase()}

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
    
    // Copy to clipboard with fallback support
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(summary).then(() => {
            showCopyToast('Complete Transaction Summary copied to clipboard!');
        }).catch(() => {
            fallbackCopyToClipboard(summary);
        });
    } else {
        fallbackCopyToClipboard(summary);
    }
}

// Print Compliance Checklist
function printComplianceChecklist() {
  window.print();
}

// Export Form List
function exportFormList() {
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
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(formsText).then(() => {
      showCopyToast('Forms list copied to clipboard!');
    }).catch(() => {
      fallbackCopyToClipboard(formsText);
    });
  } else {
    fallbackCopyToClipboard(formsText);
  }
}

// Start New Transaction
function startNewTransaction() {
  if (transactionForm) {
    transactionForm.reset();
  }
  
  const resultsSection = document.getElementById('results-section');
  if (resultsSection) {
    resultsSection.style.display = 'none';
  }
  
  resetTransactionState();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  showCopyToast('New transaction started - form reset!');
}

// Reset Transaction State
function resetTransactionState() {
  currentTransaction = {
    propertyType: null,
    clientType: null,
    transactionType: null,
    representationStatus: null,
    financingType: null,
    transactionComplexity: null,
    geographicScope: null,
    timingUrgency: null
  };
}

// Fallback Copy Function
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

// Show Copy Toast
function showCopyToast(message = 'Copied to clipboard!') {
  const toast = document.getElementById('copy-toast');
  if (toast) {
    const toastText = toast.querySelector('.copy-toast__text');
    if (toastText) {
      toastText.textContent = message;
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  } else {
    // Fallback - simple alert if toast element doesn't exist
    console.log(message);
  }
}

// Make functions globally available
window.copyClauseText = copyClauseText;
// Universal Button Connector - Fixes Generate Complete Transaction Summary button
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        // Find all buttons and connect the Generate Complete Transaction Summary
        document.querySelectorAll('button').forEach(button => {
            const buttonText = button.textContent.toLowerCase();
            
            if (buttonText.includes('generate complete') || 
                buttonText.includes('transaction summary') ||
                buttonText.includes('compliance report')) {
                
                console.log('Connecting button:', button.textContent);
                button.onclick = generateCompleteTransactionSummary;
            }
        });
    }, 2000);
});
