export const UserLocators = {

  nav: {
    consultantsLink:  "//*[@id=\"nav\"]/a[7]/div[1]",
    expertsLink:      "//*[@id=\"nav\"]/a[6]/div[1]",
    lawFirmsLink:     "//*[@id=\"nav\"]/a[5]/div[1]",
    supportStaffLink: "//*[@id=\"nav\"]/a[4]/div[1]",
    attorneysLink:    "//*[@id=\"nav\"]/a[3]/div[1]",
  },

  testDataHelper: {
    button:        "//*[@id=\"test-data-helper-button\"]",
    generateSpan:  "//*[@id=\"test-data-helper-window\"]/div[1]/div[1]//span",
    firstNameItem: "//*[@id=\"test-data-helper-window\"]/div[2]/div/div[1]",
    lastNameItem:  "//*[@id=\"test-data-helper-window\"]/div[2]/div/div[2]",
  },

  consultant: {
    newButton: "//*[@id=\"consultant-table-form\"]/button",
    firstName: "//*[@id=\"consultant-form_first_name\"]",
    lastName:  "//*[@id=\"consultant-form_last_name\"]",
  },

  expert: {
    newButton:       "//*[@id=\"expert-table-form\"]/button",
    firstName:       "//*[@id=\"expert-form_first_name\"]",
    lastName:        "//*[@id=\"expert-form_last_name\"]",
    orgName:         "//*[@id=\"expert-form_org_name\"]",
    rateSection:     "//*[@id=\"expert-form\"]/fieldset[2]",
    addRateLabel:    "//*[@id=\"expert-form\"]/fieldset[2]/label",
    rate0Name:       "//*[@id=\"expert-form_work_types_0_name\"]",
    rate0Code:       "//*[@id=\"expert-form_work_types_0_code\"]",
    rate0Period:     "//*[@id=\"expert-form_work_types_0_period\"]",
    rate0Currency:   "//*[@id=\"expert-form_work_types_0_rate_currency\"]",
    rate1Name:       "//*[@id=\"expert-form_work_types_1_name\"]",
    rate1Code:       "//*[@id=\"expert-form_work_types_1_code\"]",
    rate1Period:     "//*[@id=\"expert-form_work_types_1_period\"]",
    rate1Currency:   "//*[@id=\"expert-form_work_types_1_rate_currency\"]",
  },

  lawFirm: {
    newButton:       "//*[@id=\"law-firm-table-form\"]/button",
    orgName:         "//*[@id=\"lawfirm-form_org_name\"]",
    address:         "//*[@id=\"lawfirm-form_address\"]",
    city:            "//*[@id=\"lawfirm-form_city\"]",
    state:           "//*[@id=\"lawfirm-form_state\"]",
    zip:             "//*[@id=\"lawfirm-form_zip\"]",
    workPhone:       "//*[@id=\"lawfirm-form_work_phone\"]",
    addOfficeLabel:  "//*[@id=\"lawfirm-form\"]/fieldset/label",
    office0Name:     "//*[@id=\"lawfirm-form_offices_0_name\"]",
    office0Address:  "//*[@id=\"lawfirm-form_offices_0_address\"]",
    office0City:     "//*[@id=\"lawfirm-form_offices_0_city\"]",
    office0State:    "//*[@id=\"lawfirm-form_offices_0_state\"]",
    office0Zip:      "//*[@id=\"lawfirm-form_offices_0_zip\"]",
  },

  supportStaff: {
    newButton:          "//*[@id=\"supports-table-form\"]/button",
    lawFirmPlaceholder: "//*[starts-with(@id,'anchor-i-')]",
    lawFirmOption2:     "//*[starts-with(@id,'menu-i-')]/div/label[4]/div",
    officeDropdown:     "//*[@id=\"support-form_office_id\"]",
    firstName:          "//*[@id=\"support-form_first_name\"]",
    lastName:           "//*[@id=\"support-form_last_name\"]",
    email:              "//*[@id=\"support-form_email\"]",
  },

  attorney: {
    newButton:          "//*[@id=\"attorney-table-form\"]/button",
    lawFirmPlaceholder: "//*[starts-with(@id,'anchor-i-')]",
    lawFirmOption2:    "//*[starts-with(@id,'menu-i-')]/div/label[4]/div",
    officeDropdown:     "//*[@id=\"attorney-form_office_id\"]",
    firstName:          "//*[@id=\"attorney-form_first_name\"]",
    lastName:           "//*[@id=\"attorney-form_last_name\"]",
    address:            "//*[@id=\"attorney-form_address\"]",
    city:               "//*[@id=\"attorney-form_city\"]",
    state:              "//*[@id=\"attorney-form_state\"]",
    zip:                "//*[@id=\"attorney-form_zip\"]",
    email:              "//*[@id=\"attorney-form_email\"]",
  },

} as const;
