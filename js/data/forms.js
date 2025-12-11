
export const universalMandatoryForms = {
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

export const transactionSpecificForms = {
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
