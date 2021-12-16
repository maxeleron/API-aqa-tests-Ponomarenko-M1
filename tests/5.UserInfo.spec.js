const { test, expect } = require('@playwright/test');

// 10. Test - Check current user`s info is correct
test('[API] Check `maxeleron` user info is correct', async ({ request }) => {
  const response = await request.get('/users/maxeleron');
  expect(response.ok()).toBeTruthy();

  const maxeleronRepositoryInfo = await response.json();

  // Assertion for user login
  expect(maxeleronRepositoryInfo["login"]).toEqual("maxeleron");

  // Assertion for user name
  expect(maxeleronRepositoryInfo["name"]).toEqual("Max Ponomarenko");

  // Assertion for user creation date
  expect(maxeleronRepositoryInfo["created_at"]).toEqual("2016-02-18T18:26:46Z");

  // Assertion for user location
  expect(maxeleronRepositoryInfo["location"]).toEqual("Cherkassy, Ukraine");
});

// 11. Test - Check other user`s info is correct (Ryan Dahl - Creator of NodeJS)
test('[API] Check `ry` user info is correct', async ({ request }) => {
  const response = await request.get('/users/ry');
  expect(response.ok()).toBeTruthy();

  const ryRepositoryInfo = await response.json();

  // Assertion for user login
  expect(ryRepositoryInfo["login"]).toEqual("ry");

  // Assertion for user name
  expect(ryRepositoryInfo["name"]).toEqual("Ryan Dahl");

  // Assertion for company
  expect(ryRepositoryInfo["company"]).toEqual("@denoland ");

  // Assertion for user creation date
  expect(ryRepositoryInfo["created_at"]).toEqual("2008-01-29T08:50:34Z");

  // Assertion for user location
  expect(ryRepositoryInfo["location"]).toEqual("New York City");
});
