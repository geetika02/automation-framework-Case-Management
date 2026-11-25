import { expect, test } from '@playwright/test';
import { CaseLocators } from '../locators/CaseLocators';
import { EnvConfig } from '../config/EnvConfig';
import { UserLocators } from '../locators/UserLocators';

function generatePhoneNumber(): string {
  const min = 6000000000;
  const max = 9999999999;
  return Math.floor(Math.random() * (max - min + 1) + min).toString();
}

function generate_random_name(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generate_random_name_email(length = 4) {
  const chars = 'abcdefghijklmnopqrstuvwxyz123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

test('007-New Case', { tag: '@regression' }, async ({ page }) => {
  await page.goto(EnvConfig.baseURL)
  await page.waitForLoadState("networkidle")

  // The browser context is already seeded with the session from EnvConfig.storageStatePath
  // (see storageState in playwright.config.ts). Confirm it's actually logged in before proceeding.
  const postLoginIndicator = page.getByRole("link", { name: "Case List" })
  const isLoggedIn = await postLoginIndicator.isVisible()
  if (!isLoggedIn) {
    throw new Error(`Not logged in - expected a valid session in ${EnvConfig.storageStatePath}. Run login.spec.ts to refresh it.`)
  }

    //Click on the New Case link from nav menu
    await page.locator(CaseLocators.nav.newCaseLink).click()
    await page.waitForTimeout(5000)

    // Click on New Case button from list page
    await page.locator(CaseLocators.caseList.newCaseButton).click()
    await page.waitForTimeout(2000)

    // Click on Test Data Helper button and select the first option to auto fill the case details and save

    await page.locator(CaseLocators.testDataHelper.button).click()

    
    await page.locator(CaseLocators.testDataHelper.name).click()
    
    await page.locator(CaseLocators.caseForm.gender).selectOption("Male")

    // Enter the address details for the case
    await page.locator(CaseLocators.caseForm.address).fill("823 Aviation Way, California")
    await page.locator(CaseLocators.caseForm.city).fill("Los Angeles")
    await page.locator(CaseLocators.caseForm.state).selectOption("California")
    await page.locator(CaseLocators.caseForm.zip).fill("90071")

    await page.locator(CaseLocators.caseForm.defense).selectOption("Defense")

    await page.locator(CaseLocators.caseForm.courtCaseNumber).fill("12345")

    await page.getByRole("button", {name: "Save"}).click()
    await page.waitForTimeout(4000)

   // Navigate to Billing Configuration tab and add the billing group for the case
  /*await page.getByText("Billing configuration").click()
  await page.locator(CaseLocators.billingConfig.billingGroupLabel).click()
  await page.waitForTimeout(2000)

    // Select Law firm to add in billing group and save the details
   //
    await page.locator(CaseLocators.billingConfig.lawFirmPlaceholder).click()
   
    const lawFirmTrigger = page
    .locator('label', { hasText: 'Law firm' })
    .locator('xpath=ancestor::div[contains(@class,"flex-col")][1]')
    .locator('div.cursor-pointer')
    .first();

  await page.waitForTimeout(3000);

  await lawFirmTrigger.click();

  
await page.waitForTimeout(2000); // Wait for the dropdown to appear
    await page.locator(UserLocators.supportStaff.lawFirmOption2).first().click()
    await page.locator(UserLocators.supportStaff.officeDropdown).selectOption({ index: 1 })
 //await page.locator(UserLocators.supportStaff.lawFirmOption2).first().click()
    await page.locator(UserLocators.supportStaff.officeDropdown).selectOption({ index: 1 })
    //await page.locator(CaseLocators.billingConfig.lawFirmOption4).click()
    //await page.waitForTimeout(1000)

    await page.getByLabel(CaseLocators.billingConfig.attorneyLabel).selectOption('14f560cc-5bd8-4686-982c-3563b11fe18c')
    await page.waitForTimeout(2000)

    // add experts to the Billing group for the case
    await page.locator(CaseLocators.billingConfig.expertDropdown).first().click()
    await page.locator(CaseLocators.billingConfig.expertDropdown).selectOption({index: 4})
    await page.waitForTimeout(2000)

    // Save the Billing Group details for the case
    await page.getByRole("button", {name: "Save"}).click();
    await page.waitForTimeout(2000)
    await page.waitForLoadState("networkidle")
    //await page.keyboard.press('Escape');

     // add Case Notes and save the details for the case
    await page.getByText("Case notes").click();
    

    // Navigate to New Case Note form and add the details and save
    await page.getByText("New case note").click()
    await page.waitForSelector(CaseLocators.caseNotes.noteTextbox, { state: 'visible' })
    //await page.waitForTimeout(1000)
    await page.locator(CaseLocators.caseNotes.workTypeDropdown).waitFor({ state: 'visible' })
    await page.locator(CaseLocators.caseNotes.workTypeDropdown).click()
    await page.locator(CaseLocators.caseNotes.workTypeDropdown).selectOption({index: 2})
     
    // Enter the case note details and save
    await page.locator(CaseLocators.caseNotes.noteTextbox).fill("This is a case note for the case - " + generate_random_name(5))

   
// Enter the Billable work entry details and save the case note
   const addBillable = await page.locator(CaseLocators.caseNotes.addBillableLabel)
    if (await addBillable.isVisible()) {
      await addBillable.click()
      await page.waitForSelector(CaseLocators.caseNotes.billableworkentrylabel, { state: 'visible' })
      await page.locator(CaseLocators.caseNotes.addworkentriesinminutes).fill("120")
      await page.waitForTimeout(2000)
      await page.getByRole("button", { name: "Save" }).click()
                                      } 
    else {
      await page.getByRole("button", { name: "Save" }).click()
        }
    // add Billing details for the invoice*/

 })


test('008-Edit Case', { tag: '@smoke' }, async ({ page }) => {
  await page.goto(EnvConfig.baseURL)
  await page.waitForLoadState("networkidle")
  const postLoginIndicator = page.getByRole("link", { name: "Case List" })
  if (!(await postLoginIndicator.isVisible())) {
    throw new Error(`Not logged in - expected a valid session in ${EnvConfig.storageStatePath}. Run login.spec.ts to refresh it.`)
  }
  await page.locator(CaseLocators.nav.newCaseLink).click()
  await page.locator(CaseLocators.caseList.firstCaseRow).first().waitFor({ state: 'visible' })
  await page.locator(CaseLocators.caseList.firstCaseRow).first().hover();
  await page.locator(CaseLocators.caseList.firstCaseAction).waitFor({ state: 'visible' })
  await page.locator(CaseLocators.caseList.firstCaseAction).click();

    // Navigate to New Case Note form and add the details and save
    await page.getByText("New case note").click()
    await page.locator(CaseLocators.caseNotes.workTypeDropdown).waitFor({ state: 'visible' })
    //await page.locator(CaseLocators.caseNotes.workTypeDropdown).selectOption({index: 1})
    await page.locator(CaseLocators.caseNotes.workTypeDropdown).selectOption({index: 1})

await expect(
  page.getByRole('button', { name: 'SAVE' })
).toBeEnabled();

await page.locator(CaseLocators.caseNotes.addBillableLabel).click()

await page.locator(CaseLocators.caseNotes.Internalnotesdesc).fill("This is a case note for the case - " + generate_random_name(5))
await expect(page.locator((CaseLocators.caseNotes.billiableminutes))).toBeVisible()
await page.locator(CaseLocators.caseNotes.billiableminutes).fill('60')
await page.locator(CaseLocators.caseNotes.billiableminutes).blur()


    const saveButton = page.getByRole('button', { name: 'SAVE' });

    await saveButton.click();
    await page.waitForTimeout(2000)


await page.locator("div[role='dialog']").getByText("Billing", { exact: true }).click();
await page.waitForTimeout(5000)
await page.locator("//button[normalize-space()='Lock all']").click();
await page.waitForTimeout(3000)

await page.locator('#billing-tab').locator('button').nth(3).click();
await page.waitForTimeout(3000)


await page.mouse.wheel(0, 1500);

// Click on the Submit button to submit the invoice
await page.locator('#billing-tab').getByRole('button', { name: 'Submit' }).click();
await page.waitForTimeout(450000)


// Wait for the back button to appear before clicking it
await expect(page.locator('button:has-text("Back")')).toBeVisible();
await page.locator('button:has-text("Back")').click();
await page.waitForTimeout(30000)
await page.waitForLoadState("networkidle");
    //await page.keyboard.press('Escape');
})
