
import { defineConfig, devices } from '@playwright/test';
import { EnvConfig } from './config/EnvConfig';

export default defineConfig({

  testDir: './tests',

  // Execute tests sequentially
  fullyParallel: false,
  workers: 1,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  reporter: 'html',

  use: {
    trace: 'retain-on-failure',
    video: 'on',
    screenshot: 'on',
    storageState: EnvConfig.storageStatePath,
  },

  projects: [

    // First execute Login test
    {
      name: 'setup',
      testMatch: /login\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },

    // Then execute all remaining tests
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
      testIgnore: /login\.spec\.ts/,
      dependencies: ['setup'],
    },

  ],

});
