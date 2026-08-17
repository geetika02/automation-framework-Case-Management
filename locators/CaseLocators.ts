export const CaseLocators = {

  nav: {
    newCaseLink: "//*[@id=\"nav\"]/a[1]/div[1]",
  },

  caseList: {
    newCaseButton: "//*[@id=\"case-table-form\"]/button",
    firstCaseRow:  "//*[@id=\"case-table\"]/tbody/tr[1]/td[4]",
    firstCaseAction: "//table//tr[1]/td[4]//div[2]/div",
  },

  testDataHelper: {
    button:        "//*[@id=\"test-data-helper-button\"]",
    generateSpan:  "//*[@id=\"test-data-helper-window\"]/div[1]/div[1]//span",
    firstNameItem: "//*[@id=\"test-data-helper-window\"]/div[2]/div/div[1]",
    lastNameItem:  "//*[@id=\"test-data-helper-window\"]/div[2]/div/div[2]",
  },

  caseForm: {
    firstName:       "//*[@id=\"case-form_first_name\"]",
    lastName:        "//*[@id=\"case-form_last_name\"]",
    gender:          "//*[@id=\"case-form_gender\"]",
    address:         "//*[@id=\"case-form_address\"]",
    city:            "//*[@id=\"case-form_city\"]",
    state:           "//*[@id=\"case-form_state\"]",
    zip:             "//*[@id=\"case-form_zip\"]",
    defense:         "//*[@id=\"case-form_defense?\"]",
    courtCaseNumber: "//*[@id=\"case-form_court_case_number\"]",
  },

  billingConfig: {
    billingGroupLabel:   "//*[@id=\"billing-groups\"]/label",
    lawFirmPlaceholder: "//*[@id=\"billing-groups\"]/div/div[2]/div[2]/div[2]/div",
    lawFirmOption2:    "//*[starts-with(@id,'menu-i-')]/div/label[4]/div",
    lawFirmInput:        "//input[@type='text' and contains(@id,'lawfirm_id')]",
    lawFirmOptionsInput: "//input[contains(@phx-click,'lawfirm_id-options')]",
    lawFirmOption4:      "(//div[contains(@id,'lawfirm_id-option')])[4]",
    lawFirmOption3:      "(//div[contains(@id,'lawfirm_id-option')])[3]",
    expertDropdown:      "//*[@id=\"case-form_expert_id\"]",
    attorneyLabel:       "Attorney (accounting customer)",
  },

  caseNotes: {
    workTypeDropdown: "//select[@id='case-note-form_work_type_id']",
    noteTextbox:      "//div[@role='textbox' and @contenteditable='true']",
    addBillableLabel: "//*[@id=\"case-note-form\"]/fieldset/label",
    addworkentriesinminutes: "//*[@id=\"case-note-form_work_entries_0_minutes\"]",
    billableworkentrylabel: "//*[@id=\"case-note-form\"]/fieldset/legend",
  },

} as const;
