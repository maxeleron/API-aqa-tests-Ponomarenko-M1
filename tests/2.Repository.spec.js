const { test, expect } = require('@playwright/test');

const USER = 'maxeleron';

// 3. Test - Creating Repository
test('[API] Should create a repository', async ({ request }) => {
  // Create a new repository with 'GeneratedRepoAQA' name
  const response = await request.post('/user/repos', {
    data: {
      name: 'GeneratedRepoAQA'
    }
  });
  expect(response.ok()).toBeTruthy();
});

// 4. Test - Deleting Repository
test('[API] Should delete a repository', async ({ request }) => {
  // Delete the repository with 'GeneratedRepoAQA' name
  const response = await request.delete(`/repos/${USER}/GeneratedRepoAQA`);
  expect(response.ok()).toBeTruthy();
});
