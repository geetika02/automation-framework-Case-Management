import { test, expect } from '@playwright/test';
import { EnvConfig } from '../config/EnvConfig';

test('Login to CM Site', async ({ page }) => {
  test.setTimeout(60000)

  await page.goto(EnvConfig.baseURL)
  await page.waitForLoadState("networkidle")

  const postLoginIndicator = page.getByRole("link", {name: "Case List"})
  const isLoggedIn = await postLoginIndicator.isVisible()

  if (!isLoggedIn) {
    // Not logged in - click Log in. This either lands straight on the
    // dashboard (silent SSO using an already-valid session) or shows the
    // credentials form, depending on whether a valid session exists.
    await page.getByRole("button", {name: "Log in"}).click()

    const emailField = page.getByLabel("Email address")
    const needsCredentials = await Promise.race([
      emailField.waitFor({state: "visible", timeout: 15000}).then(() => true),
      postLoginIndicator.waitFor({state: "visible", timeout: 15000}).then(() => false),
    ])

    if (needsCredentials) {
      await emailField.fill(EnvConfig.email)
      await page.getByRole("button", {name: "Next"} ).click()
      await page.getByPlaceholder("Enter password").fill(EnvConfig.password)
      await page.getByRole("button", {name: "Continue"}).click()
      await postLoginIndicator.waitFor({state: "visible", timeout: 15000})
    }

    // Save storage state
    await page.context().storageState({ path: EnvConfig.storageStatePath });
  }
  // Already logged in - the goto above already landed on the post-login screen
});