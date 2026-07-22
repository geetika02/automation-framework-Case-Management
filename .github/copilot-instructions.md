# Copilot Instructions for Playwright Automation Project

## Project Overview
This is a Playwright-based end-to-end testing suite for a case management web application (hosted at `cmtest.fly.dev`). The suite tests user authentication, case creation/editing, and user management across different roles (Consultants, Experts, Law Firms, Support Staff).

## Architecture & Key Components
- **Authentication Flow**: `login.spec.ts` performs initial login and saves browser storage state to `test_data/loginStorageState.json`. All other tests reuse this state via `playwright.config.ts`.
- **Test Structure**: Tests in `tests/` directory use `test.describe` for grouping (e.g., user role suites). Each test navigates to `https://cmtest.fly.dev/welcome` post-auth.
- **Data Generation**: Helper functions like `generate_random_name()`, `generatePhoneNumber()` create test data to avoid conflicts.
- **Selectors**: Heavy use of XPath locators (e.g., `//*[@id="nav"]/a[1]/div[1]`) for UI elements; prefer these over CSS when matching existing patterns.

## Critical Workflows
- **Run Tests**: `npx playwright test` (no npm scripts defined; runs all tests in parallel except on CI).
- **Debug Failures**: Check `test-results/` for videos, screenshots, and traces (enabled on first retry). Use `npx playwright show-report` for HTML report.
- **Add New Test**: Place in `tests/`, import from `@playwright/test`, use `await page.goto("https://cmtest.fly.dev/welcome")` after auth setup.
- **Update Auth**: Run `login.spec.ts` first to refresh `test_data/loginStorageState.json` if login flow changes.

## Project-Specific Patterns
- **Timeouts**: Use `await page.waitForTimeout(2000)` or `5000` for stability (common after clicks/navigations).
- **Random Data**: Always generate unique names/emails/phone numbers using provided helper functions to prevent test interference.
- **Navigation**: Start tests from welcome page; use `await page.waitForLoadState("networkidle")` after goto.
- **Form Filling**: Fill required fields like first_name, last_name, address; select dropdowns (e.g., gender, state) before saving.
- **Assertions**: Minimal explicit assertions; rely on successful navigation and element presence.

## Dependencies & Environment
- **Browser**: Configured for Google Chrome only (`playwright.config.ts`).
- **External App**: Tests against live `cmtest.fly.dev`; no local development server.
- **CI Setup**: Retries enabled on CI; forbid `test.only` in CI builds.

Reference: `playwright.config.ts` for global settings, `login.spec.ts` for auth pattern, `Case.spec.ts` for case management flows.</content>
<parameter name="filePath">d:\OneDrive - Atomic North Pvt. Ltd\Desktop\Playwright_automation - Copy\.github\copilot-instructions.md