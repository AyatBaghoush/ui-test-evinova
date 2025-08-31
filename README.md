# Playwright Automation Framework
This framework combines the power of Playwright for fast, cross-browser automation with Cucumber for expressive, behavior-driven development (BDD). It’s built for scalable UI testing with rich reporting, modular architecture, and CI/CD readiness.

## Features

- **Page Object Model (POM):** Maintainable and reusable UI logic.
- **Cucumber BDD:** Write tests in Gherkin syntax.
- **Dynamic Test Data:** Dynamic test data generation
- **Allure Reporting:** Generate rich HTML reports.
- **Cross-browser:** Powered by Playwright.
- **Performance Metrics:** Measuring performance
- **Code Coverage:** Measuring code coverage
- **CI-ready:** CI/CD integration using Github actions
- **Containerization:** Using docker
- **Accessibility Testing:** Running accessibility checks 

---

# Technology Stack:
1. **Playwright:**	Browser automation (Chromium, Firefox) - Cross-browser testing
2. **Cucumber.js:**	BDD syntax for writing human-readable tests
3. **Allure:**	Rich test reporting with visual insights
4. **LighthouseCI:** Performance metrics measurement
5. **nyc:** Code coverage measurement
6. **Docker:** Containerization
7. **Github Actions:** CI/CD integration
8. **Axe-core:** Accessibility testing

---
## Project Structure

```
ui-test-evinova/
├── features/               # Feature files
├── steps/                  # Step definitions
├── pages/                  # Page Object Classes
├── helpers/                # Helper classes (TestDataManager, Reporting, AccessibilityCheck,...etc)
├── cucumber.js             # Cucumber configuration
├── lighthouserc.json       # LighthouseCI configuration
├── .nycrc.json             # nyc configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

---


