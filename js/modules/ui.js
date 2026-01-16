
import { universalMandatoryForms, transactionSpecificForms } from '../data/forms.js';
import { clauseDatabase } from '../data/clauses.js';

// --- Theme UI ---

export function updateThemeUI(theme) {
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');
    const themeText = document.getElementById('theme-text');

    if (theme === 'dark') {
        // Dark Mode: Show Sun (to switch to Light), Hide Moon
        themeIconLight?.classList.remove('hidden');
        themeIconDark?.classList.add('hidden');
        if (themeText) themeText.textContent = 'Light Mode';
    } else {
        // Light Mode: Show Moon (to switch to Dark), Hide Sun
        themeIconLight?.classList.add('hidden'); // Sun hidden
        themeIconDark?.classList.remove('hidden'); // Moon visible
        if (themeText) themeText.textContent = 'Dark Mode';
    }
}

// --- Toast UI ---

export function showCopyToast(message = 'Copied to clipboard!') {
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
        console.log(message);
    }
}

// --- Form & Results Rendering ---

export function displayUniversalMandatoryForms(transaction = null) {
    const container = document.getElementById('universal-forms-list');
    if (!container) return;

    container.innerHTML = '';

    Object.entries(universalMandatoryForms).forEach(([formId, form]) => {
        // Filter forms based on transaction details
        if (transaction) {
            // Skip if form has transaction_types restriction and current type not included
            if (form.transaction_types && !form.transaction_types.includes(transaction.transactionType)) {
                return;
            }

            // Skip individual FINTRAC if client is corporate
            if (formId === 'fintrac_individual_id' && transaction.clientType === 'corporate') {
                return;
            }
            // Skip corporate FINTRAC if client is individual or mixed
            if (formId === 'fintrac_corporate_id' && transaction.clientType !== 'corporate') {
                return;
            }
            // Skip receipt of funds if no funds are handled
            if (formId === 'receipt_of_funds' && transaction.fundHandling === 'no_funds') {
                return;
            }
        }

        const formItem = createUniversalFormItem(form);
        container.appendChild(formItem);
    });
}

function createUniversalFormItem(form) {
    const item = document.createElement('div');
    item.className = 'form-item';

    item.innerHTML = `
    <div class="form-item__checkbox-container">
      <input type="checkbox" class="form-item__checkbox" id="form-${Date.now()}-${Math.random().toString(36).substr(2, 9)}">
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

export function generatePropertySpecificForms(propertyType) {
    const container = document.getElementById('property-forms-list');
    if (!container || !propertyType) return;

    container.innerHTML = '';

    const forms = transactionSpecificForms[propertyType];
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

export function generateClauseRecommendations(currentTransaction) {
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
        if (isMandatoryClause(clauseId, clause, currentTransaction)) {
            mandatoryClauses.push({ id: clauseId, ...clause });
        } else if (isRecommendedClause(clauseId, clause, currentTransaction)) {
            recommendedClauses.push({ id: clauseId, ...clause });
        } else if (isConditionalClause(clauseId, clause, currentTransaction)) {
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

function createClauseItem(clause) {
    const item = document.createElement('div');
    item.className = 'clause-item';

    item.innerHTML = `
    <div class="clause-item__header">
      <div class="clause-item__title">
        <div class="clause-item__name">${clause.name}</div>
        <span class="clause-item__reference">${clause.id}</span>
      </div>
      <button type="button" class="btn btn--success btn--small clause-item__copy-btn" data-clause-id="${clause.id}">
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

    // Clean event binding handled in app.js or we can bind here if passed handler
    // For now we use data attribute and event delegation in app.js or bind click here
    // But to keep UI clean, we'll let app.js handle the click via delegation or we add inline?
    // Inline 'onclick' is bad for modules. We should use event delegation on the container in app.js.
    // I removed the inline onclick="copyClauseText..." from the HTML above.

    return item;
}

// Logic helpers for clauses
function isMandatoryClause(clauseId, clause, transaction) {
    // Financing clauses for mortgage transactions
    if (clauseId === 'MORT-2' && ['conventional_mortgage', 'alternative_financing'].includes(transaction.financingType)) {
        return true;
    }
    // Insurance is always mandatory
    if (clauseId === 'INSUR-1') {
        return true;
    }

    // Rental-specific mandatory clauses
    const isRentalTransaction = transaction.transactionType === 'rental' ||
                                ['residential_rental', 'commercial_rental', 'business_rental'].includes(transaction.propertyType);

    if (isRentalTransaction) {
        // Fixed-term lease clause is mandatory for all rentals
        if (clauseId === 'LEASE-1') return true;

        // Landlord obligations mandatory for residential rentals
        if (clauseId === 'LEASE-7' && transaction.propertyType === 'residential_rental') return true;

        // Landlord access rights mandatory for all rentals
        if (clauseId === 'LEASE-8') return true;

        // Security deposit clause mandatory for residential rentals
        if (clauseId === 'LEASE-10' && transaction.propertyType === 'residential_rental') return true;
    }

    return false;
}

function isRecommendedClause(clauseId, clause, transaction) {
    // Home inspection for residential properties
    if (clauseId === 'INSP-1' && ['residential_freehold', 'residential_condo'].includes(transaction.propertyType)) {
        return true;
    }
    // Lawyer approval for complex transactions or first-time buyers
    if (clauseId === 'LAW-1' && transaction.transactionComplexity === 'complex') {
        return true;
    }

    // Rental-specific recommended clauses
    const isRentalTransaction = transaction.transactionType === 'rental' ||
                                ['residential_rental', 'commercial_rental', 'business_rental'].includes(transaction.propertyType);

    if (isRentalTransaction) {
        // Rent escalation recommended for all rentals
        if (clauseId === 'LEASE-2') return true;

        // Renewal option recommended for all rentals
        if (clauseId === 'LEASE-3') return true;

        // Subletting clause recommended for all rentals
        if (clauseId === 'LEASE-4') return true;

        // Permitted use recommended for commercial rentals
        if (clauseId === 'LEASE-5' && ['commercial_rental', 'business_rental'].includes(transaction.propertyType)) return true;

        // Tenant maintenance obligations recommended for all rentals
        if (clauseId === 'LEASE-6') return true;

        // Tenant insurance recommended for all rentals
        if (clauseId === 'LEASE-9') return true;

        // Triple net lease recommended for commercial rentals
        if (clauseId === 'LEASE-13' && ['commercial_rental', 'business_rental'].includes(transaction.propertyType)) return true;

        // CAM charges recommended for commercial rentals
        if (clauseId === 'LEASE-14' && ['commercial_rental', 'business_rental'].includes(transaction.propertyType)) return true;
    }

    return false;
}

function isConditionalClause(clauseId, clause, transaction) {
    // Condo document review for condo purchases
    if (clauseId === 'CONDO-1' && transaction.propertyType === 'residential_condo') {
        return true;
    }
    // Environmental assessment for commercial properties
    if (clauseId === 'ENV-15' && transaction.propertyType === 'commercial') {
        return true;
    }
    // Zoning clause for commercial or vacant land
    if (clauseId === 'ZONING-1' && ['commercial', 'vacant_land'].includes(transaction.propertyType)) {
        return true;
    }

    // Rental-specific conditional clauses
    const isRentalTransaction = transaction.transactionType === 'rental' ||
                                ['residential_rental', 'commercial_rental', 'business_rental'].includes(transaction.propertyType);

    if (isRentalTransaction) {
        // Early termination clause - conditional based on lease type
        if (clauseId === 'LEASE-11') return true;

        // Tenant improvements - conditional for commercial rentals
        if (clauseId === 'LEASE-12' && ['commercial_rental', 'business_rental'].includes(transaction.propertyType)) return true;

        // Tenant improvement allowance - conditional for commercial rentals
        if (clauseId === 'LEASE-15' && ['commercial_rental', 'business_rental'].includes(transaction.propertyType)) return true;
    }

    return false;
}

export function generateComplianceChecklist() {
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

// Helper to fill form from state
export function populateFormFromState(state) {
    if (!state) return;
    const form = document.getElementById('transaction-form');
    if (!form) return;

    // Iterate over state keys and check appropriate radios/inputs
    for (const [key, value] of Object.entries(state)) {
        if (!value) continue;
        // Assume names match keys (propertyType -> property_type mapping required?)
        // The original App had currentTransaction keys: propertyType, clientType...
        // The form inputs have names like "property_type", "client_type".

        const keyToName = {
            propertyType: 'property_type',
            clientType: 'client_type',
            transactionType: 'transaction_type',
            representationStatus: 'representation_status',
            financingType: 'financing_type',
            transactionComplexity: 'transaction_complexity',
            geographicScope: 'geographic_scope',
            timingUrgency: 'timing_urgency'
        };

        const inputName = keyToName[key];
        if (inputName) {
            const radio = form.querySelector(`input[name="${inputName}"][value="${value}"]`);
            if (radio) radio.checked = true;
        }
    }
}

// --- Wizard Logic ---

export function updateWizardUI(currentStep) {
    // Update step visibility
    document.querySelectorAll('.wizard-step').forEach(step => {
        const stepNum = parseInt(step.dataset.step);
        if (stepNum === currentStep) {
            step.classList.remove('hidden');
            setTimeout(() => step.classList.add('active'), 10); // Trigger animation
        } else {
            step.classList.remove('active');
            step.classList.add('hidden');
        }
    });

    // Update indicators
    document.querySelectorAll('.wizard-step-label').forEach(label => {
        const labelStep = parseInt(label.dataset.step);
        label.classList.remove('active', 'completed');
        if (labelStep === currentStep) {
            label.classList.add('active');
        } else if (labelStep < currentStep) {
            label.classList.add('completed');
        }
    });

    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = `${((currentStep - 1) / 3) * 100}%`;
    }

    // Update buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (prevBtn) prevBtn.classList.toggle('hidden', currentStep === 1);
    if (nextBtn) nextBtn.classList.toggle('hidden', currentStep === 4);
    if (submitBtn) submitBtn.classList.toggle('hidden', currentStep !== 4);

    // Scroll to top of wizard
    const wizardContainer = document.querySelector('.wizard-header');
    if (wizardContainer) {
        wizardContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

export function validateStep(step) {
    const currentStepEl = document.querySelector(`.wizard-step[data-step="${step}"]`);
    if (!currentStepEl) return true;

    const requiredInputs = currentStepEl.querySelectorAll('input[required]');
    let isValid = true;
    let firstInvalid = null;

    // Reset styles
    currentStepEl.querySelectorAll('.warning-border').forEach(el => el.classList.remove('warning-border'));

    requiredInputs.forEach(input => {
        let inputValid = false;
        if (input.type === 'radio') {
            const name = input.name;
            const checked = currentStepEl.querySelector(`input[name="${name}"]:checked`);
            if (checked) inputValid = true;
        } else {
            if (input.value) inputValid = true;
        }

        if (!inputValid) {
            isValid = false;
            // Highlight the group
            const group = input.closest('.form-group') || input.closest('.card');
            if (group) group.classList.add('warning-border'); // We need this style or equivalent
            if (!firstInvalid) firstInvalid = group || input;
        }
    });

    if (!isValid && firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Optional: Toast
        showCopyToast('Please fill out all required fields.');
    }

    return isValid;
}
