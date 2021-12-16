const { test, expect } = require('@playwright/test');

// 5. Test - Check first repository name
test('[API] First user repository is 40_Programs_in_Python_3', async ({ request }) => {
  const response = await request.get('/user/repos');

  expect(response.ok()).toBeTruthy();

  const allRepositories = await response.json();
  const firstUsersRepositoryName = allRepositories[0]["name"];
  expect(firstUsersRepositoryName).toEqual("40_Programs_in_Python_3");
  // Below I placed shorter code - but its more complicated
  // expect((await response.json())[0]["name"]).toEqual("40_Programs_in_Python_3");
});

// 6. Test - Check user has some repositories
test('[API] User repository contain specific repositories', async ({ request }) => {
  const response = await request.get('/user/repos');

  expect(response.ok()).toBeTruthy();

  const allRepositories = await response.json();
  const allRepositoriesNames = allRepositories.map((element) => element["name"]);
  // Below I created variable with test data
  const someUserRepositories = ["emma-search", "name-face-memory-training", "make-20-react-apps-my-code"];

  const result = someUserRepositories.every(value => allRepositoriesNames.includes(value));
  expect(result).toBeTruthy();
});

// 7. Test - Check full list of user repositories
test('[API] Check all user`s repositories', async ({ request }) => {
  const response = await request.get('/user/repos');

  expect(response.ok()).toBeTruthy();

  const allRepositories = await response.json();
  const allRepositoriesNames = allRepositories.map((element) => element["name"]);
  // Below I placed test data - maxeleron`s repositories list
  maxeleronRepositories = [
    "40_Programs_in_Python_3",
    "API-aqa-tests-Ponomarenko-M1",
    "API-test-repo", "AwesomeCalcJS",
    "BrainGamesJS-collection",
    "Builders_and_Destroyers",
    "click-helper-lostfilm",
    "Course-project-DB-2021-Ponomarenko",
    "Cpp_algorithms_and_data_structures",
    "CssEffects-Collection", "CSS_Practice",
    "C_Sharp_OOP",
    "dasha",
    "emma-search",
    "GeekHub_JS",
    "Informatics_answers",
    "Java-OOP-Examples",
    "js-course-2017",
    "js_from_slave_to_full_master",
    "Learn_Python",
    "LociTraining",
    "make-20-react-apps-my-code",
    "MaxEff", "maxeleron.github.io",
    "MaxRepresentation",
    "MUS",
    "name-face-memory-training",
    "OOP-Course-Project-CSharp-Cars",
    "PaoTraining",
    "PGC-website"
  ];

  expect(allRepositoriesNames).toEqual(maxeleronRepositories);
});
