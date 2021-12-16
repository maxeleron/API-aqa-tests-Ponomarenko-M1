const { test, expect } = require('@playwright/test');

const REPO = 'API-test-repo';
const USER = 'maxeleron';

// 12. Test - Check the file exists
test('[API] Check `playwright.config.js` file exists', async ({ request }) => {
  const response = await request.get(`/${USER}/PlaywrightFirstSteps/blob/main/playwright.config.js`);

  expect(response).toBeTruthy();
});

// 13. Test - Check file metadata
test('[API] Check `maxeleron` user info is correct', async ({ request }) => {
  const response = await request.get(`repos/${USER}/PlaywrightFirstSteps/blob/main/playwright.config.js`);

  expect(response["_headers"]["_headersArray"][0]["name"]).toEqual("Server");
  expect(response["_headers"]["_headersArray"][0]["value"]).toEqual("GitHub.com");
  expect(response["_headers"]["_headersArray"][2]["name"]).toEqual("Content-Type");
  expect(response["_headers"]["_headersArray"][2]["value"]).toEqual("application/json; charset=utf-8");
  });

// 14. Test - Creating File within repository
test('[API] Should create a file', async ({ request }) => {
  const fileQuery = await request.put(`/repos/${USER}/${REPO}/file.txt`);
  expect(fileQuery.ok()).toBeTruthy();
});

// 15. Test - Check file deletion from repository
test('[API] Should remove a file', async ({ request }) => {
  const fileQuery = await request.delete(`/repos/${USER}/${REPO}/file.txt`);
  expect(fileQuery.ok()).toBeTruthy();
});
