# PlaywrightFirstSteps


# Installation of Playwright
npm i -D @playwright/test
# install supported browsers
npx playwright install

# Different runs
npx playwright test
npx playwright test --headed
npx playwright test --browser=firefox
npx playwright test --browser=all


npx playwright test 'second test' --headed
npx playwright test colorAssertion.spec.js --headed