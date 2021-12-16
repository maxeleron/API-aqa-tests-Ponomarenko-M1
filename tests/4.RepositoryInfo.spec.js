const { test, expect } = require('@playwright/test');

// 8. Test -Public repostitory information is correct
test('[API] Public `emma-search` repostitory information is correct', async ({ request }) => {
  const response = await request.get('/user/repos');
  expect(response.ok()).toBeTruthy();

  const emmaSearchRepository = (await response.json()).find((elm) => elm["name"] == 'emma-search');

  // Assertion for creation date
  expect(emmaSearchRepository["created_at"]).toEqual("2020-12-11T08:28:26Z");

  // Assertion for ID
  expect(emmaSearchRepository["id"]).toEqual(320512833);

  // Assertion for visibility
  expect(emmaSearchRepository["visibility"]).toEqual('public');
});

// 9. Test -Private repostitory information is correct
test('[API] Private `MUS` repostitory information is correct', async ({ request }) => {
  const response = await request.get('/user/repos');
  expect(response.ok()).toBeTruthy();

  const MUSRepository = (await response.json()).find((elm) => elm["name"] == 'MUS');

  // Assertion for creation date
  expect(MUSRepository["created_at"]).toEqual("2021-10-09T13:11:15Z");

  // Assertion for ID
  expect(MUSRepository["id"]).toEqual(415312803);

  // Assertion for visibility
  expect(MUSRepository["visibility"]).toEqual('private');
});
