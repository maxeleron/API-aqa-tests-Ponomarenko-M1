/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  workers: 1,
  retries: 2,
  use: {
    headless: false,
    viewport: { width: 1980, height: 1080 },
    launchOptions: {
      slowMo: 1000,
    },
    },
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
};

module.exports = config;