const { test, expect } = require('@playwright/test');

// 12. Test - Check the file exists
test('[API] Check `playwright.config.js` file exists', async ({ request }) => {
  const response = await request.get('/maxeleron/PlaywrightFirstSteps/blob/main/playwright.config.js');

  expect(response).toBeTruthy();
});

// 13. Test - Check file metadata
test('[API] Check `maxeleron` user info is correct', async ({ request }) => {
  const response = await request.get('repos/maxeleron/PlaywrightFirstSteps/blob/main/playwright.config.js');

  // Assertion for user login
  expect(response["_headers"]["_headersArray"][0]["name"]).toEqual("Server");
  expect(response["_headers"]["_headersArray"][0]["value"]).toEqual("GitHub.com");
  expect(response["_headers"]["_headersArray"][2]["name"]).toEqual("Content-Type");
  expect(response["_headers"]["_headersArray"][2]["value"]).toEqual("application/json; charset=utf-8");
  });
