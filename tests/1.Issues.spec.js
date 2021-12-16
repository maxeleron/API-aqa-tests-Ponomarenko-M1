const { test, expect } = require('@playwright/test');

const REPO = 'API-test-repo';
const USER = 'maxeleron';

// 1. Test - Creating Bug report
test('[API] Should create a bug report', async ({ request }) => {
  const newBugReport = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[Bug] report (aqa test)',
      body: 'Bug created with API automation software'
    }
  });
  expect(newBugReport.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: '[Bug] report (aqa test)',
    body: 'Bug created with API automation software'
  }));
});

// 2. Test - Creating Feature request
test('[API] Should create a feature request', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: '[Feature] request (aqa test)',
      body: 'Feature created with API automation software',
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: '[Feature] request (aqa test)',
    body: 'Feature created with API automation software',
  }));
});
