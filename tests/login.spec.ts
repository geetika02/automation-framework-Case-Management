import { test, expect } from '@playwright/test';

test.beforeAll('Login to CMNightly', async ({ page }) => {
  await page.goto("http://cmtest.fly.dev/")
  await page.waitForLoadState("networkidle")

  //await page.getByPlaceholder("Email Address").click()
  await page.getByRole("button", {name: "Log in"}).click()
  await page.getByLabel("Email address").fill("geetika.chandra22@gmail.com")
  await page.getByRole("button", {name: "Next"} ).click()
  await page.getByPlaceholder("Enter password").fill("Qwerty@123456")
  await page.getByRole("button", {name: "Continue"}).click()
  await page.waitForTimeout(5000)

  // Save storage state
  await page.context().storageState({ path: 'test_data/loginStorageState.json' });
});