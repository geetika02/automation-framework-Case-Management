import { test, expect } from '@playwright/test';
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

test.describe('All tests in this suite', () => {

test('New Consultants', async ({ page }) => {
  await page.goto("https://cmtest.fly.dev/welcome")
  await page.waitForLoadState("networkidle")

    //Click on the Consultants link from nav menu
    await page.locator(UserLocators.nav.consultantsLink).click()
    await page.waitForTimeout(2000)

    // click on New Consultant button from list page
    await page.locator(UserLocators.consultant.newButton).click()
    await page.waitForTimeout(2000)

    // Click on Test Data Helper button and select the first option to auto fill the case details and save
    await page.locator(UserLocators.testDataHelper.button).click()

    // Click on the generate link
    await page.locator(UserLocators.testDataHelper.generateSpan).click()
    const value_fname = await page.locator(UserLocators.testDataHelper.firstNameItem).innerText()
    await page.locator(UserLocators.testDataHelper.firstNameItem).click()
    const value_lname = await page.locator(UserLocators.testDataHelper.lastNameItem).innerText()
    await page.locator(UserLocators.testDataHelper.lastNameItem).click()

    // Enter the Consultant details like name and Email and save
    await page.locator(UserLocators.consultant.firstName).fill(value_fname)
    await page.locator(UserLocators.consultant.lastName).fill(value_lname)

    // Check the checkboxes for consultant type
    await page.getByRole("checkbox", {name: "Adult"}).check();
    await page.getByRole("button", {name: "Save"}).click();
    await page.waitForTimeout(2000)
    await page.keyboard.press('Escape');
})

test('Experts', async ({ page }) => {
  await page.goto("https://cmtest.fly.dev/welcome")
  await page.waitForLoadState("networkidle")

    //Click on the Experts link from nav menu
    await page.locator(UserLocators.nav.expertsLink).click()
    await page.waitForTimeout(2000)
    await page.locator(UserLocators.expert.newButton).click()
    await page.waitForTimeout(2000)

    // Click on Test Data Helper button and select the first option to auto fill the case details and save
    await page.locator(UserLocators.testDataHelper.button).click()

    // Click on the generate link
    await page.locator(UserLocators.testDataHelper.generateSpan).click()
    const value_fname = await page.locator(UserLocators.testDataHelper.firstNameItem).innerText()
    await page.locator(UserLocators.testDataHelper.firstNameItem).click()
    const value_lname = await page.locator(UserLocators.testDataHelper.lastNameItem).innerText()
    await page.locator(UserLocators.testDataHelper.lastNameItem).click()

    // Enter the Expert details like name and Email and save
    await page.locator(UserLocators.expert.firstName).fill(value_fname)
    await page.locator(UserLocators.expert.lastName).fill(value_lname)

    // Enter the Expert Organization details
    await page.locator(UserLocators.expert.orgName).fill("Expert Organization - " + generate_random_name())

    //Expert Rate to be entered for not billed
    await page.locator(UserLocators.expert.rateSection).click();
    await page.locator(UserLocators.expert.rate0Name).fill(value_fname + " " + value_lname)
    await page.locator(UserLocators.expert.rate0Code).fill(generate_random_name(2));
    await page.locator(UserLocators.expert.rate0Period).selectOption("not billed")
    await page.locator(UserLocators.expert.rate0Currency).fill("100");

    //Expert Rate to be entered for flat fee
    await page.waitForTimeout(1000)
    await page.locator(UserLocators.expert.addRateLabel).click();
    await page.locator(UserLocators.expert.rate1Name).fill(generate_random_name(4));
    await page.locator(UserLocators.expert.rate1Code).fill(generate_random_name(2));
    await page.locator(UserLocators.expert.rate1Period).selectOption("flat fee")
    await page.locator(UserLocators.expert.rate1Currency).fill("500");

    // Check the checkboxes for expert type
    await page.getByRole("checkbox", {name: "Adult"}).check();
    await page.getByRole("checkbox", {name: "Economist"}).check();
    await page.getByRole("checkbox", {name: "Burns"}).check();
    await page.getByRole("checkbox", {name: "Nationwide"}).check();
    await page.getByRole("button", {name: "Save"}).click();
    await page.waitForTimeout(2000)
    await page.keyboard.press('Escape');
})

test('Law Firms', async ({ page }) => {
  await page.goto("https://cmtest.fly.dev/welcome")
  await page.waitForLoadState("networkidle")

    //Click on the Law firms link from nav menu
    await page.locator(UserLocators.nav.lawFirmsLink).click()
    await page.waitForTimeout(2000)

    // Click on New Law firm button from list page
    await page.locator(UserLocators.lawFirm.newButton).click()
    await page.waitForTimeout(2000)

    // Click on Test Data Helper button and select the first option to auto fill the case details and save
    await page.locator(UserLocators.testDataHelper.button).click()

    // Click on the generate link
    await page.locator(UserLocators.testDataHelper.generateSpan).click()
    const value_fname = await page.locator(UserLocators.testDataHelper.firstNameItem).innerText()
    await page.locator(UserLocators.testDataHelper.firstNameItem).click()

    // Enter the Law firm details like name and Email and save
    await page.locator(UserLocators.lawFirm.orgName).fill(value_fname)
    /*await page.locator(UserLocators.lawFirm.address).fill("823 Aviation Way, California")
    await page.locator(UserLocators.lawFirm.city).fill("Los Angeles")
    await page.locator(UserLocators.lawFirm.state).selectOption("California")
    await page.locator(UserLocators.lawFirm.zip).fill("90071")
    await page.locator(UserLocators.lawFirm.workPhone).fill("2139553260")*/
    await page.getByRole("checkbox", {name: "Plaintiff"}).check();
    await page.getByRole("checkbox", {name: "Defense"}).check();

    // Law Firm offices
    await page.locator(UserLocators.lawFirm.addOfficeLabel).click();
    await page.locator(UserLocators.lawFirm.office0Name).fill("Office name - " + generate_random_name(3))
    await page.locator(UserLocators.lawFirm.office0Address).fill("823 Aviation Way, California")
    await page.locator(UserLocators.lawFirm.office0City).fill("Los Angeles")
    await page.locator(UserLocators.lawFirm.office0State).selectOption("California")
    await page.locator(UserLocators.lawFirm.office0Zip).fill("90071")

    // Save the Law Firm details
    await page.getByRole("button", {name: "Save"}).click();
    await page.waitForTimeout(2000)
    await page.keyboard.press('Escape');
})

test('Support Staff', async ({ page }) => {
    await page.goto("https://cmtest.fly.dev/welcome")
    await page.waitForLoadState("networkidle")

    //Click on the Support Staff link from nav menu
    await page.locator(UserLocators.nav.supportStaffLink).click()
    await page.waitForTimeout(2000)

    // Click on New Support Staff button from list page
    await page.locator(UserLocators.supportStaff.newButton).click()
    await page.waitForTimeout(2000)

    // Select the Law firm from dropdown and fill the attorney details
    await page.locator(UserLocators.supportStaff.lawFirmPlaceholder).click()
    await page.locator(UserLocators.supportStaff.lawFirmOption2).first().click()
    await page.locator(UserLocators.supportStaff.officeDropdown).selectOption({ index: 1 })

    // Click on Test Data Helper button and select the first option to auto fill the case details and save
    await page.locator(UserLocators.testDataHelper.button).click()

    // Click on the generate link
    await page.locator(UserLocators.testDataHelper.generateSpan).click()
    const value_fname = await page.locator(UserLocators.testDataHelper.firstNameItem).innerText()
    await page.locator(UserLocators.testDataHelper.firstNameItem).click()
    const value_lname = await page.locator(UserLocators.testDataHelper.lastNameItem).innerText()
    await page.locator(UserLocators.testDataHelper.lastNameItem).click()

    // Enter the Support staff details like name and Email and save
    await page.locator(UserLocators.supportStaff.firstName).fill(value_fname)
    await page.locator(UserLocators.supportStaff.lastName).fill(value_lname)
    await page.locator(UserLocators.supportStaff.email).fill("support." + generate_random_name_email() + "@test.com")
    await page.getByRole("button", {name: "Save"}).click();
    await page.waitForTimeout(2000)
    await page.keyboard.press('Escape');
  })

  test('Attorneys', async ({ page }) => {
    await page.goto("https://cmtest.fly.dev/welcome")
    await page.waitForLoadState("networkidle")

    //Click on the Attorney link from nav menu
    await page.locator(UserLocators.nav.attorneysLink).click()
    await page.waitForTimeout(2000)

    // Click on New Attorney button from list page
    await page.locator(UserLocators.attorney.newButton).click()
    await page.waitForTimeout(2000)

    // Select the Law firm from dropdown and fill the attorney details
    await page.locator(UserLocators.attorney.lawFirmPlaceholder).click()
    await page.locator(UserLocators.attorney.lawFirmOption2).first().click()
    await page.locator(UserLocators.attorney.officeDropdown).selectOption({ index: 1 })

    // Check the Case Types as Plaintiff and Defense for the attorney
    await page.getByRole("checkbox", {name: "Plaintiff"}).check();
    await page.getByRole("checkbox", {name: "Defense"}).check();

    // Click on Test Data Helper button and select the first option to auto fill the case details and save
    await page.locator(UserLocators.testDataHelper.button).click()

    // Click on the generate link
    await page.locator(UserLocators.testDataHelper.generateSpan).click()
    const value_fname = await page.locator(UserLocators.testDataHelper.firstNameItem).innerText()
    await page.locator(UserLocators.testDataHelper.firstNameItem).click()
    const value_lname = await page.locator(UserLocators.testDataHelper.lastNameItem).innerText()
    await page.locator(UserLocators.testDataHelper.lastNameItem).click()

    // Enter the attorney details like name and Email and save
    await page.locator(UserLocators.attorney.firstName).fill(value_fname)
    await page.locator(UserLocators.attorney.lastName).fill(value_lname)

    /*await page.locator(UserLocators.attorney.address).fill("823 Aviation Way, California")
    await page.locator(UserLocators.attorney.city).fill("Los Angeles")
    await page.locator(UserLocators.attorney.state).selectOption("California")
    await page.locator(UserLocators.attorney.zip).fill("90071")*/

    await page.locator(UserLocators.attorney.email).fill("attorney." + generate_random_name_email() + "@test.com")

    await page.getByRole("button", {name: "Save"}).click();
    await page.waitForTimeout(2000)
    await page.keyboard.press('Escape');
  })

})
