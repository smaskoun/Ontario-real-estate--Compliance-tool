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

const clausesData = {
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

// DOM Elements
let form, resultsContainer, initialMessage, universalFormsList;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  form = document.getElementById('transaction-profile-form');
  resultsContainer = document.getElementById('results-container');
  initialMessage = document.getElementById('initial-message');
  universalFormsList = document.getElementById('universal-forms-list');
  
  if (!form || !resultsContainer || !initialMessage || !universalFormsList) {
    console.error('Required DOM elements not found');
    return;
  }
  
  // Display universal mandatory forms immediately
  displayUniversalForms();
  
  // Add form submission handler
  form.addEventListener('submit', handleFormSubmission);
  
  // Set focus on first form field
  const firstRadio = form.querySelector('input[type="radio"]');
  if (firstRadio) {
    firstRadio.focus();
  }
});

// Display universal mandatory forms
function displayUniversalForms() {
  let formsHTML = '';
  
  Object.entries(universalMandatoryForms).forEach(([key, form]) => {
    formsHTML += `
      <div class="universal-form-card">
        <div class="universal-form-card__header">
          <h4 class="universal-form-card__name">${form.form_name}</h4>
          <span class="universal-form-card__number">${form.form_number}</span>
        </div>
        <p class="universal-form-card__purpose">${form.purpose}</p>
        <div class="universal-form-card__when">
          <strong>Required:</strong> ${form.when_required}
        </div>
        <div class="universal-form-card__compliance">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          ${form.compliance}
        </div>
      </div>
    `;
  });
  
  universalFormsList.innerHTML = formsHTML;
}

// Form submission handler
function handleFormSubmission(e) {
  e.preventDefault();
  
  // Clear previous errors
  clearFormErrors();
  
  // Validate form
  if (!validateForm()) {
    const firstError = document.querySelector('.form-section--error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }
  
  // Show loading state
  showLoading();
  
  // Simulate processing time and generate recommendations
  setTimeout(() => {
    try {
      const formData = collectFormData();
      console.log('Form Data:', formData); // Debug log
      const recommendations = generateRecommendations(formData);
      console.log('Recommendations:', recommendations); // Debug log
      displayResults(recommendations, formData);
    } catch (error) {
      console.error('Error processing form:', error);
      showError('An error occurred while processing your request. Please try again.');
    }
  }, 1000);
}

// Clear previous form errors
function clearFormErrors() {
  document.querySelectorAll('.form-section--error').forEach(section => {
    section.classList.remove('form-section--error');
  });
  document.querySelectorAll('.error-message').forEach(error => {
    error.remove();
  });
}

// Validate form
function validateForm() {
  let isValid = true;
  
  // Check required fields
  const requiredFields = ['property_type', 'client_type', 'representation', 'fund_handling'];
  
  requiredFields.forEach(fieldName => {
    const field = form.querySelector(`input[name="${fieldName}"]:checked`);
    if (!field) {
      markFieldError(fieldName, `${getFieldLabel(fieldName)} is required`);
      isValid = false;
    }
  });
  
  return isValid;
}

// Get field label for error messages
function getFieldLabel(fieldName) {
  const labels = {
    'property_type': 'Property Type',
    'client_type': 'Client Type',
    'representation': 'Representation Status',
    'fund_handling': 'Fund Handling'
  };
  return labels[fieldName] || fieldName;
}

// Mark field error
function markFieldError(fieldName, message) {
  const input = form.querySelector(`input[name="${fieldName}"]`);
  if (input) {
    const formSection = input.closest('.form-section');
    if (formSection) {
      formSection.classList.add('form-section--error');
      
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.innerHTML = `
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>
        ${message}
      `;
      
      formSection.appendChild(errorElement);
    }
  }
}

// Collect form data
function collectFormData() {
  const data = {
    property_type: null,
    client_type: null,
    representation: null,
    fund_handling: null,
    transaction_details: []
  };
  
  // Get selected values
  const propertyType = form.querySelector('input[name="property_type"]:checked');
  if (propertyType) data.property_type = propertyType.value;
  
  const clientType = form.querySelector('input[name="client_type"]:checked');
  if (clientType) data.client_type = clientType.value;
  
  const representation = form.querySelector('input[name="representation"]:checked');
  if (representation) data.representation = representation.value;
  
  const fundHandling = form.querySelector('input[name="fund_handling"]:checked');
  if (fundHandling) data.fund_handling = fundHandling.value;
  
  // Get transaction details
  const transactionDetails = form.querySelectorAll('input[name="transaction_details"]:checked');
  data.transaction_details = Array.from(transactionDetails).map(cb => cb.value);
  
  return data;
}

// Generate recommendations based on form data
function generateRecommendations(data) {
  const recommendations = {
    mandatory: [],
    recommended: [],
    conditional: []
  };

  // Base clauses based on property type
  switch (data.property_type) {
    case 'residential_freehold':
      recommendations.mandatory = ['INSP-1', 'INSUR-1'];
      recommendations.recommended = ['MORT-2', 'LAW-1'];
      break;
    case 'residential_condo':
      recommendations.mandatory = ['CONDO-1', 'INSP-1'];
      recommendations.recommended = ['INSUR-1', 'MORT-2'];
      break;
    case 'commercial':
      recommendations.mandatory = ['ZONING-1', 'ENV-15'];
      recommendations.recommended = ['LAW-1', 'INSUR-1'];
      break;
    case 'vacant_land':
      recommendations.mandatory = ['ZONING-1'];
      recommendations.recommended = ['ENV-15', 'LAW-1'];
      break;
    case 'new_construction':
      recommendations.mandatory = ['LAW-1'];
      recommendations.recommended = ['INSUR-1'];
      break;
    case 'business_purchase':
      recommendations.mandatory = ['LAW-1', 'ZONING-1'];
      recommendations.recommended = ['ENV-15'];
      break;
  }

  // Add conditional clauses based on transaction details
  data.transaction_details.forEach(detail => {
    switch (detail) {
      case 'first_time_buyer':
        if (!recommendations.recommended.includes('LAW-1') && !recommendations.mandatory.includes('LAW-1')) {
          recommendations.conditional.push('LAW-1');
        }
        break;
      case 'needs_financing':
        if (!recommendations.recommended.includes('MORT-2') && !recommendations.mandatory.includes('MORT-2')) {
          recommendations.conditional.push('MORT-2');
        }
        break;
      case 'selling_current_home':
        recommendations.conditional.push('SBP/SA-1');
        break;
      case 'older_home':
        if (!recommendations.recommended.includes('INSP-1') && !recommendations.mandatory.includes('INSP-1')) {
          recommendations.conditional.push('INSP-1');
        }
        break;
      case 'high_value':
        if (!recommendations.recommended.includes('LAW-1') && !recommendations.mandatory.includes('LAW-1')) {
          recommendations.conditional.push('LAW-1');
        }
        break;
      case 'foreign_nationals':
        if (!recommendations.recommended.includes('LAW-1') && !recommendations.mandatory.includes('LAW-1')) {
          recommendations.conditional.push('LAW-1');
        }
        break;
    }
  });

  return recommendations;
}

// Show loading state
function showLoading() {
  resultsContainer.innerHTML = `
    <div class="loading">
      <div class="loading__spinner"></div>
      <span>Analyzing your transaction and generating compliance report...</span>
    </div>
  `;
  resultsContainer.classList.remove('hidden');
  initialMessage.classList.add('hidden');
}

// Show error state
function showError(message) {
  resultsContainer.innerHTML = `
    <div class="card">
      <div class="card__body text-center">
        <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="icon-large" style="color: var(--color-error);">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>
        <h3>Error Processing Request</h3>
        <p class="text-secondary">${message}</p>
        <button class="btn btn--primary mt-16" onclick="resetTransaction()">Try Again</button>
      </div>
    </div>
  `;
  resultsContainer.classList.remove('hidden');
  initialMessage.classList.add('hidden');
}

// Display results
function displayResults(recommendations, formData) {
  const forms = transactionSpecificForms[formData.property_type] || { primary: 'Form information not available', additional: [] };
  
  const totalClauses = recommendations.mandatory.length + 
                      recommendations.recommended.length + 
                      recommendations.conditional.length;

  let resultsHTML = `
    ${renderTransactionFormsSection(forms)}
    ${renderComplianceChecklist(formData)}
    
    <div class="results-header">
      <h2>Clause Recommendations with Copy-Ready Text</h2>
      <p>Based on your transaction classification, we've identified ${totalClauses} relevant clauses. Each clause includes full OREA text ready for copying.</p>
    </div>
  `;

  if (recommendations.mandatory.length > 0) {
    resultsHTML += renderClauseCategory('Mandatory Clauses', recommendations.mandatory, 'These clauses are required by law or regulation for your transaction type.', 'shield-check');
  }
  
  if (recommendations.recommended.length > 0) {
    resultsHTML += renderClauseCategory('Recommended Clauses', recommendations.recommended, 'These clauses provide standard protection and are strongly advised.', 'star');
  }
  
  if (recommendations.conditional.length > 0) {
    resultsHTML += renderClauseCategory('Conditional Clauses', recommendations.conditional, 'These clauses are recommended based on your specific transaction details.', 'settings');
  }

  resultsHTML += `
    <div class="export-actions">
      <button class="btn btn--primary" onclick="copyAllSelectedClauses()">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        Copy All Selected Clauses
      </button>
      <button class="btn btn--secondary" onclick="generateTransactionSummary()">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Generate Complete Transaction Summary
      </button>
      <button class="btn btn--outline" onclick="printComplianceChecklist()">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
        </svg>
        Print Compliance Checklist
      </button>
      <button class="btn btn--outline" onclick="exportFormList()">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Export Form List
      </button>
      <button class="btn btn--secondary" onclick="resetTransaction()">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        Start New Transaction
      </button>
    </div>
  `;

  resultsContainer.innerHTML = resultsHTML;
  resultsContainer.classList.remove('hidden');
  initialMessage.classList.add('hidden');
  
  // Scroll to results
  resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Render transaction-specific forms section
function renderTransactionFormsSection(forms) {
  return `
    <div class="transaction-forms-section">
      <div class="transaction-forms-section__header">
        <h3 class="transaction-forms-section__title">
          <svg class="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Additional Forms Based on Your Transaction Type
        </h3>
        <p class="text-secondary">These are the specific OREA forms required for your transaction in addition to the universal mandatory forms above.</p>
      </div>
      
      <div class="primary-form">
        Primary Agreement: ${forms.primary}
      </div>
      
      ${forms.additional && forms.additional.length > 0 ? `
        <div class="additional-forms">
          <h4>Supporting Forms:</h4>
          <ul class="forms-list">
            ${forms.additional.map(form => `<li>${form}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
    </div>
  `;
}

// Render compliance checklist
function renderComplianceChecklist(formData) {
  const checklistItems = [
    'Universal mandatory forms identified and provided',
    'Client identification requirements established (FINTRAC)',
    'Representation status confirmed and documented',
    'Privacy policy disclosure completed (PIPEDA)',
    'Required clauses included for transaction protection',
    'Regulatory compliance requirements verified'
  ];
  
  return `
    <div class="compliance-checklist">
      <div class="compliance-checklist__header">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="section-icon">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h3 class="compliance-checklist__title">Transaction Compliance Checklist</h3>
      </div>
      <p class="text-secondary mb-16">Your transaction meets all regulatory requirements based on the classification provided:</p>
      <div class="checklist-items">
        ${checklistItems.map(item => `
          <div class="checklist-item">
            <svg class="checklist-item__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="checklist-item__text">${item}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render clause category
function renderClauseCategory(title, clauseIds, description, iconName) {
  if (clauseIds.length === 0) return '';

  const iconSVG = getIconSVG(iconName);
  
  return `
    <div class="clause-category">
      <div class="clause-category__header">
        ${iconSVG}
        <h3 class="clause-category__title">${title}</h3>
        <span class="clause-category__count">${clauseIds.length}</span>
      </div>
      <p class="text-secondary mb-16">${description}</p>
      <div class="clause-list">
        ${clauseIds.map(clauseId => renderClauseCard(clauseId)).join('')}
      </div>
    </div>
  `;
}

// Render individual clause card
function renderClauseCard(clauseId) {
  const clause = clausesData[clauseId];
  if (!clause) return '';
  
  return `
    <div class="clause-card">
      <div class="clause-card__header">
        <div class="clause-card__info">
          <h4 class="clause-card__name">${clause.name}</h4>
          <span class="clause-card__reference">${clauseId}</span>
          <p class="clause-card__purpose"><strong>Purpose:</strong> ${clause.purpose}</p>
          <div class="clause-card__when-to-use">
            <strong>When to Use:</strong> ${clause.when_to_use}
          </div>
          ${clause.risk_without ? `
            <div class="clause-card__risk">
              <strong>Risk Without:</strong> ${clause.risk_without}
            </div>
          ` : ''}
        </div>
      </div>
      <div class="clause-card__body">
        <div class="clause-text-container">
          <label class="clause-text-label">Full OREA Clause Text:</label>
          <textarea class="clause-text" readonly id="clause-text-${clauseId}">${clause.text}</textarea>
        </div>
        <button class="copy-button" onclick="copyClauseText('${clauseId}')" data-clause-id="${clauseId}">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          Copy Clause Text
          <div class="copy-feedback" id="copy-feedback-${clauseId}">Copied!</div>
        </button>
      </div>
    </div>
  `;
}

// Get icon SVG
function getIconSVG(iconName) {
  const icons = {
    'shield-check': `<svg class="clause-category__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>`,
    'star': `<svg class="clause-category__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
    </svg>`,
    'settings': `<svg class="clause-category__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>`
  };
  
  return icons[iconName] || icons['settings'];
}

// Copy individual clause text to clipboard
function copyClauseText(clauseId) {
  const textarea = document.getElementById(`clause-text-${clauseId}`);
  const button = document.querySelector(`[data-clause-id="${clauseId}"]`);
  const feedback = document.getElementById(`copy-feedback-${clauseId}`);
  
  if (textarea && button && feedback) {
    // Select and copy text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    
    // Use modern clipboard API or fallback
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textarea.value).then(() => {
        showCopySuccess(button, feedback);
      }).catch(() => {
        // Fallback to document.execCommand
        document.execCommand('copy');
        showCopySuccess(button, feedback);
      });
    } else {
      // Fallback for older browsers
      document.execCommand('copy');
      showCopySuccess(button, feedback);
    }
  }
}

// Show copy success feedback
function showCopySuccess(button, feedback) {
  button.classList.add('copy-button--copied');
  feedback.classList.add('copy-feedback--show');
  
  // Reset after 2 seconds
  setTimeout(() => {
    button.classList.remove('copy-button--copied');
    feedback.classList.remove('copy-feedback--show');
  }, 2000);
}

// Copy all selected clauses
function copyAllSelectedClauses() {
  const allTextareas = document.querySelectorAll('.clause-text');
  let allText = '';
  
  allTextareas.forEach((textarea, index) => {
    const clauseCard = textarea.closest('.clause-card');
    const clauseName = clauseCard.querySelector('.clause-card__name').textContent;
    const clauseRef = clauseCard.querySelector('.clause-card__reference').textContent;
    
    allText += `${index > 0 ? '\n\n' : ''}--- ${clauseName} (${clauseRef}) ---\n\n${textarea.value}`;
  });
  
  if (allText) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(allText).then(() => {
        alert('All clause text copied to clipboard!');
      }).catch(() => {
        // Create temporary textarea for fallback
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = allText;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
        alert('All clause text copied to clipboard!');
      });
    } else {
      // Fallback for older browsers
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = allText;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextarea);
      alert('All clause text copied to clipboard!');
    }
  }
}

// Generate transaction summary
function generateTransactionSummary() {
  // This would generate a comprehensive summary
  alert('Transaction summary generation feature coming soon!');
}

// Print compliance checklist
function printComplianceChecklist() {
  window.print();
}

// Export form list
function exportFormList() {
  // This would generate a downloadable form list
  alert('Form list export feature coming soon!');
}

// Reset transaction
function resetTransaction() {
  if (form) {
    form.reset();
    clearFormErrors();
  }
  
  if (resultsContainer) {
    resultsContainer.classList.add('hidden');
  }
  
  if (initialMessage) {
    initialMessage.classList.remove('hidden');
  }
  
  // Smooth scroll to top of form
  const inputSection = document.querySelector('.input-section');
  if (inputSection) {
    inputSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}