import { test, expect } from '@playwright/test';
import { EnvConfig } from '../config/EnvConfig';

test('Login to CM Site', { tag: '@smoke' }, async ({ page }) => {
  test.setTimeout(60000)

  await page.goto(EnvConfig.baseURL)
  await page.waitForLoadState("networkidle")

  const postLoginIndicator = page.getByRole("link", {name: "Case List"})
  const loginButton = page.getByRole("button", {name: "Log in"})
  const emailField = page.getByLabel("Email address")

  const isLoggedIn = await postLoginIndicator.isVisible()

  if (!isLoggedIn) {
    // Not logged in. Depending on session state, the site either shows a
    // "Log in" button, auto-redirects straight to the Cognito credentials
    // form, or (silent SSO with an already-valid session) lands directly
    // on the dashboard - so wait for whichever of these shows up first.
    const initialState = await Promise.race([
      loginButton.waitFor({state: "visible", timeout: 15000}).then(() => "loginButton" as const),
      emailField.waitFor({state: "visible", timeout: 15000}).then(() => "credentials" as const),
      postLoginIndicator.waitFor({state: "visible", timeout: 15000}).then(() => "loggedIn" as const),
    ])

    if (initialState === "loginButton") {
      await loginButton.click()
      await Promise.race([
        emailField.waitFor({state: "visible", timeout: 15000}),
        postLoginIndicator.waitFor({state: "visible", timeout: 15000}),
      ])
    }

    if (await emailField.isVisible()) {
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