# Browser Interactions with Playwright

This exercise continues practicing the use of Playwright and testing web application functionalities. The exercise focuses on locating different types of elements and interacting with them, such as text fields, buttons, and error messages. The exercise also practices writing and running tests as well as creating and planning test cases.

The tasks to be performed, i.e., various interactions, are instructed on the practice website, which can be found at https://interaction-playground.pages.dev/. The website instructs, for example, to enter a specific text in a text field or select certain buttons, and after successful completion, the website displays feedback. Your task is to write test cases that perform these interactions automatically and verify that the website displays success messages as expected.

The main guide for writing tests can be found in [Playwright's documentation](https://playwright.dev/docs/writing-tests). In addition to the text documentation, you can use numerous videos and tutorials, which can be found, for example, on Playwright's [YouTube channel](https://www.youtube.com/c/PlaywrightTest/videos).


## Exercise and Testing Prerequisites

This exercise assumes that you have completed the previous exercises, which practiced creating and installing a Playwright project as well as writing and running tests. This exercise repository already includes a Playwright project template, which you can install and start as follows:

```bash
npm install
npx playwright test
```

Running the tests also requires installing browsers, which you have hopefully already done in a previous exercise. If necessary, [install a test browser following Playwright's instructions](https://playwright.dev/docs/browsers).


## Website to be Tested

The example website https://interaction-playground.pages.dev/ serves as the test target. This time, the purpose of the tests is not to ensure that the website works, but to practice locating and using different types of elements in automated tests. Some of the website's challenges are very simple and straightforward, while others require a bit more exploration of Playwright's features and possibly more applied solutions.

The website is intended to be tested using a "black box" model, meaning that you should not need to examine the website's source code or network traffic to write the tests. However, examining HTML structures is necessary to perform the operations required in your tests on text fields and buttons.

The website's homepage is already set in the `baseUrl` variable in the [playwright.config.ts](./playwright.config.ts) file, so you don't necessarily need to use the absolute URL of the website in your tests (see [guide](https://playwright.dev/docs/api/class-testoptions#test-options-base-url)).


## Implementing Your Own Tests

Once you have installed the project and tried the website to be tested manually, you can start writing your own tests. We recommend writing a separate test for each challenge on the website. You can write the tests either in one file or in different files, depending on how you want to organize your test cases. Your files must follow Playwright's test file naming convention, i.e., they must end with `.spec.ts` or `.spec.js`.

Run your own tests as you write them so you can verify that they work as expected. You don't need to complete the challenges in order, and you can skip a single challenge if you can't solve it.


## Automatic Evaluation of the Exercise

Once you have written the test cases and verified that they work as expected, you can submit the exercise for automatic review. Add your created test files to version control and push the changes to GitHub using the `git status`, `git add`, `git commit`, and `git push` commands. After the `push` command, a GitHub Actions automatic review will start, which will run the tests and provide feedback. You can see the feedback on the actions tab of your GitHub repository.

The automatic review uses the Chromium browser and tests are run one at a time in headless mode. We recommend verifying that the tests work locally with the following command before submission:

```bash
npx playwright test --reporter="list,html" --project=chromium
```

After submitting the exercise, your performance will be scored based on how many interaction challenges you solved on the website being tested. If necessary, examine the report and test results on the actions tab so you can complete your tests to cover more test cases. You can resubmit the exercise multiple times until the deadline.


## About the Exercise

This exercise was developed by Teemu Havulinna and is licensed under the [Creative Commons BY-NC-SA license](https://creativecommons.org/licenses/by-nc-sa/4.0/).

Language models and AI tools, such as GitHub Copilot and ChatGPT, were used in creating the exercise.
